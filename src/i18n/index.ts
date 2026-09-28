/**
 * Translation helpers.
 *
 * Copy is written once, in English, where it already lives (MDX, `src/data/`,
 * components). Every other locale is a catalogue keyed by that English text
 * (`src/i18n/<locale>/`), gettext-style: a string with no entry renders in
 * English, so a missing translation degrades gracefully instead of breaking
 * the page, and names, titles of external articles and anything else that
 * should read the same in every language simply get no entry.
 *
 * - `t('Say hello')` translates one string, with `{name}` placeholders.
 * - `localize(data)` translates a whole data structure from `src/data/` and
 *   points its internal `href`s at the same locale.
 * - `localHref('/tesla')` is `withBase()` for the current locale.
 *
 * Components get all three from `useI18n(Astro)`.
 */
import { navPages } from '../config/site';
import { stripBase, withBase } from '../lib/url';
import { DEFAULT_LOCALE, LOCALES } from './config';
import type { Locale } from './config';
import { pt } from './pt';

export * from './config';

/** English source text → translation. */
export type Catalog = Record<string, string>;

const CATALOGS: Record<Locale, Catalog> = { en: {}, pt };

/** Site-absolute, base-free paths of every page — the ones that exist in every locale. */
const PAGE_PATHS = new Set(['/', ...navPages().map((page) => page.href)]);

function isLocale(value: string | undefined): value is Locale {
  return (LOCALES as readonly string[]).includes(value ?? '');
}

/** The locale a base-free path belongs to: `/pt/tesla` → `pt`, `/tesla` → `en`. */
export function localeFromPath(path: string): Locale {
  const segment = path.split('/')[1];
  return isLocale(segment) && segment !== DEFAULT_LOCALE ? segment : DEFAULT_LOCALE;
}

/**
 * `Astro.url.pathname` as a site path: no deploy base, no `.html` (the build
 * renders `/tesla` as `tesla.html`) and no trailing `/index`.
 */
function sitePath(url: URL): string {
  const path = stripBase(url.pathname)
    .replace(/\.html$/, '')
    .replace(/\/index$/, '')
    .replace(/\/+$/, '');
  return path || '/';
}

/** The locale of the page being rendered. */
export function getLocale(url: URL): Locale {
  return localeFromPath(sitePath(url));
}

/**
 * The page being rendered as a base- and locale-free path (`/pt/tesla.html` →
 * `/tesla`) — the form `NAV` uses, and the key its translations share.
 */
export function currentPage(url: URL): string {
  return unlocalizePath(sitePath(url));
}

/** Drops the locale prefix from a base-free path: `/pt/tesla` → `/tesla`, `/pt` → `/`. */
export function unlocalizePath(path: string): string {
  const locale = localeFromPath(path);
  if (locale === DEFAULT_LOCALE) return path;
  const rest = path.slice(locale.length + 1);
  return rest === '' || rest === '/' ? '/' : rest;
}

/**
 * Points a base-free page path at `locale`: `/tesla#x` → `/pt/tesla#x`.
 * Anything that is not one of the site's pages (assets, external URLs,
 * `#anchors`) is returned unchanged.
 */
export function localizePath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  const match = /^([^?#]*)(.*)$/.exec(path);
  const pathname = match?.[1] ?? '';
  const suffix = match?.[2] ?? '';
  if (!pathname.startsWith('/')) return path;
  const page = pathname.replace(/\/+$/, '') || '/';
  if (!PAGE_PATHS.has(page)) return path;
  return `/${locale}${page === '/' ? '' : page}${suffix}`;
}

/** Translates `text`, filling `{name}` placeholders from `values`. */
export function translate(
  locale: Locale,
  text: string,
  values?: Record<string, string | number>,
): string {
  const translated = CATALOGS[locale][text] ?? text;
  if (!values) return translated;
  return translated.replace(/\{(\w+)\}/g, (whole, name: string) =>
    name in values ? String(values[name]) : whole,
  );
}

/**
 * Keys whose values are identifiers, never copy. (`tags` on talks are filter
 * keys; the component translates the label it shows.)
 */
const CODE_KEYS = new Set(['id', 'group', 'src', 'provider', 'hash', 'icon', 'tags']);

/** `astro:assets` image metadata — passed through untouched. */
function isImage(value: object): boolean {
  return 'src' in value && 'width' in value && 'height' in value && 'format' in value;
}

const caches: Partial<Record<Locale, WeakMap<object, unknown>>> = {};

/**
 * Deep-translates a data structure from `src/data/`: every string with a
 * catalogue entry is swapped for its translation, and every internal page
 * `href` is pointed at `locale`. Images and other non-plain objects are
 * passed through as-is. The default locale returns `value` unchanged.
 */
export function localize<T>(value: T, locale: Locale): T {
  if (locale === DEFAULT_LOCALE) return value;
  const cache = (caches[locale] ??= new WeakMap());

  const walk = (node: unknown, key?: string): unknown => {
    if (typeof node === 'string') {
      if (key && CODE_KEYS.has(key)) return node;
      if (key === 'href') return localizePath(node, locale);
      return translate(locale, node);
    }
    if (typeof node !== 'object' || node === null) return node;
    if (cache.has(node)) return cache.get(node);

    let result: unknown = node;
    if (Array.isArray(node)) {
      result = node.map((item) => walk(item, key));
    } else {
      const proto: unknown = Object.getPrototypeOf(node);
      if ((proto === Object.prototype || proto === null) && !isImage(node)) {
        result = Object.fromEntries(
          Object.entries(node).map(([entryKey, entry]) => [entryKey, walk(entry, entryKey)]),
        );
      }
    }
    cache.set(node, result);
    return result;
  };

  return walk(value) as T;
}

export interface I18n {
  locale: Locale;
  /** Translates one string; see `translate()`. */
  t: (text: string, values?: Record<string, string | number>) => string;
  /** Deep-translates data; see `localize()`. */
  localize: <T>(value: T) => T;
  /** `withBase()` plus the current locale: `/tesla` → `/pt/tesla` on Portuguese pages. */
  localHref: (path: string) => string;
}

/** The translation helpers for the page being rendered: `const { t } = useI18n(Astro)`. */
export function useI18n(astro: { url: URL }): I18n {
  const locale = getLocale(astro.url);
  return {
    locale,
    t: (text, values) => translate(locale, text, values),
    localize: (value) => localize(value, locale),
    localHref: (path) => withBase(localizePath(path, locale)),
  };
}

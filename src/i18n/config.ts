/**
 * The languages the site is published in.
 *
 * English is the default and lives at the original Google Sites URLs; every
 * other locale is a mirror of the whole site under its own prefix
 * (`/tesla` → `/pt/tesla`), so no existing URL moves.
 */
export const LOCALES = ['en', 'pt'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export interface LocaleInfo {
  /** BCP 47 tag for `<html lang>` and `hreflang`. */
  tag: string;
  /** OpenGraph `og:locale`. */
  og: string;
  /** Name of the language in itself, for the switcher. */
  name: string;
  /** Short label shown in the switcher. */
  short: string;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: { tag: 'en', og: 'en_GB', name: 'English', short: 'EN' },
  pt: { tag: 'pt-PT', og: 'pt_PT', name: 'Português', short: 'PT' },
};

/** `localStorage` key holding a language the visitor picked by hand. */
export const LOCALE_STORAGE_KEY = 'lang';

/**
 * Prefixes site-absolute links in Markdown/MDX (`[x](/tesla)`) with the deploy
 * base, so prose links keep working on the `*.github.io/<repo>/` preview, and
 * — in a translation under `src/content/pages/<locale>/` — with the locale, so
 * translated prose links to translated pages. The `.astro` equivalent is
 * `localHref()` from `useI18n()` in `src/i18n/index.ts`.
 *
 * A hand-rolled tree walk rather than `unist-util-visit`, to avoid a direct
 * dependency for ten lines of code.
 */

interface HastNode {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

interface Options {
  base?: string;
  /** Locales other than the default — the folders translations live in. */
  locales?: readonly string[];
  /** Base-free paths of the site's pages; only these get a locale prefix. */
  pages?: readonly string[];
}

export default function rehypeBaseLinks(options: Options = {}) {
  const base = (options.base ?? '').replace(/\/+$/, '');
  const pages = new Set(options.pages ?? []);

  return (tree: HastNode, file: { path?: string }) => {
    const folder = /[\\/]content[\\/]pages[\\/]([^\\/]+)[\\/]/.exec(file.path ?? '')?.[1];
    const locale = folder && options.locales?.includes(folder) ? folder : undefined;
    if (!base && !locale) return;

    const localize = (href: string) => {
      if (!locale) return href;
      const [, path = '', suffix = ''] = /^([^?#]*)(.*)$/.exec(href) ?? [];
      if (!path.startsWith('/')) return href;
      const page = path.replace(/\/+$/, '') || '/';
      if (!pages.has(page)) return href;
      return `/${locale}${page === '/' ? '' : page}${suffix}`;
    };

    const walk = (node: HastNode) => {
      const href = node.properties?.href;
      if (
        node.type === 'element' &&
        node.tagName === 'a' &&
        typeof href === 'string' &&
        href.startsWith('/') &&
        !href.startsWith('//') &&
        !(base && href.startsWith(`${base}/`))
      ) {
        const local = localize(href);
        node.properties!.href = !base ? local : local === '/' ? `${base}/` : `${base}${local}`;
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

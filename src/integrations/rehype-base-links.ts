/**
 * Prefixes site-absolute links in Markdown/MDX (`[x](/tesla)`) with the deploy
 * base, so prose links keep working on the `*.github.io/<repo>/` preview.
 * The `.astro` equivalent is `withBase()` in `src/lib/url.ts`.
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

export default function rehypeBaseLinks(options: { base?: string } = {}) {
  const base = (options.base ?? '').replace(/\/+$/, '');

  return (tree: HastNode) => {
    if (!base) return;
    const walk = (node: HastNode) => {
      const href = node.properties?.href;
      if (
        node.type === 'element' &&
        node.tagName === 'a' &&
        typeof href === 'string' &&
        href.startsWith('/') &&
        !href.startsWith('//') &&
        !href.startsWith(`${base}/`)
      ) {
        node.properties!.href = href === '/' ? `${base}/` : `${base}${href}`;
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

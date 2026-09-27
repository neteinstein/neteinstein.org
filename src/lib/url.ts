/**
 * Deploy-base helpers.
 *
 * On the custom domain the site lives at `/`. Before the domain is attached,
 * GitHub Pages serves it from `https://<owner>.github.io/<repo>/`, and the
 * deploy workflow builds with `BASE_PATH=/<repo>` so the preview still works.
 * Every internal link rendered from `.astro`/`.tsx` must go through
 * `withBase()`; links inside MDX are rewritten by `rehypeBaseLinks`.
 *
 * `npm run check:base` builds with a dummy base and fails on any internal link
 * that skipped this helper.
 */

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefixes a site-absolute path (`/tesla`) with the deploy base. Leaves anything else alone. */
export function withBase(path: string): string {
  if (!BASE || !path.startsWith('/') || path.startsWith('//')) return path;
  if (path === BASE || path.startsWith(`${BASE}/`)) return path;
  return path === '/' ? `${BASE}/` : `${BASE}${path}`;
}

/** Inverse of `withBase` — turns `Astro.url.pathname` back into a config-style path. */
export function stripBase(pathname: string): string {
  if (!BASE || !pathname.startsWith(BASE)) return pathname;
  const rest = pathname.slice(BASE.length);
  return rest === '' ? '/' : rest;
}

/** True for `http(s)://` and protocol-relative URLs. */
export function isExternal(href: string): boolean {
  return /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(href) || /^(?:mailto|tel):/i.test(href);
}

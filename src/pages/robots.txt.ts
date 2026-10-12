import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { DEFAULT_LOCALE, LOCALES } from '../i18n';
import { withBase } from '../lib/url';

/**
 * Built from `SITE.url` so the sitemap line always names the domain the site
 * is actually served from. The easter egg is meant to be found in the source,
 * not in search results — in every language.
 */
export const GET: APIRoute = () => {
  const hidden = LOCALES.map(
    (locale) =>
      `Disallow: ${withBase(`${locale === DEFAULT_LOCALE ? '' : `/${locale}`}/easter-egg`)}`,
  );
  const sitemap = new URL(withBase('/sitemap-index.xml'), SITE.url);
  const body = ['User-agent: *', 'Allow: /', ...hidden, '', `Sitemap: ${sitemap.href}`, ''];
  return new Response(body.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

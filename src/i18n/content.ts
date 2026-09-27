import { getEntry } from 'astro:content';
import { DEFAULT_LOCALE } from './config';
import type { Locale } from './config';

/**
 * The `src/content/pages/` entry for `slug` in `locale`: its translation at
 * `src/content/pages/<locale>/<slug>.mdx`, falling back to the English original
 * until one is written.
 */
export async function getPage(slug: string, locale: Locale) {
  const translated =
    locale === DEFAULT_LOCALE ? undefined : await getEntry('pages', `${locale}/${slug}`);
  const entry = translated ?? (await getEntry('pages', slug));
  if (!entry) throw new Error(`Missing content entry: src/content/pages/${slug}.mdx`);
  return entry;
}

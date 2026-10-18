/**
 * Helpers for the schema.org nodes pages pass to `BaseLayout`'s `schema` prop.
 * The layout's graph already holds the person, the site and the page; these
 * build what a page adds on top (apps, podcasts, articles).
 */
import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import { SITE } from '../config/site';

/** `@id` of the site owner's `Person` node, declared in `BaseLayout`. */
export const PERSON_ID = `${SITE.url}/#person`;

type Inline = string | { label: string } | { em: string | Inline[] };

/** Flattens rich text (plain strings, links, emphasis) to its words. */
export function plainText(text: string | Inline[]): string {
  if (typeof text === 'string') return text;
  return text
    .map((part) => {
      if (typeof part === 'string') return part;
      if ('label' in part) return part.label;
      return plainText(part.em);
    })
    .join('');
}

/** An optimised copy of `image`, as an absolute URL on the custom domain. */
export async function imageUrl(image: ImageMetadata, width = 1200): Promise<string> {
  const { src } = await getImage({
    src: image,
    width: Math.min(width, image.width),
    format: 'jpeg',
  });
  return new URL(src, SITE.url).href;
}

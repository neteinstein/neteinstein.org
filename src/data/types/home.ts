import type { ImageMetadata } from 'astro';
import type { LinkRef } from './shared';

/** Text with inline links, rendered by `RichText.astro`: `['Helping ', { label, href }, ' with…']`. */
export type RichText = (string | LinkRef)[];

/** One line of the "Who am I?" block. */
export interface Role {
  emoji: string;
  text: RichText;
  /** Listed under "Previously:" on the original. */
  past?: boolean;
}

export interface VideoRef {
  provider: 'youtube' | 'vimeo';
  id: string;
  /** Vimeo's unlisted-video hash. */
  hash?: string;
}

/** A "Glimpses of what I do…" tile. */
export interface Glimpse {
  title: string;
  /** Where the tile's title links on the original. */
  href: string;
  description: RichText;
  /** The small link under each tile ("Tech Engineer", "Podcasts", …). */
  cta: LinkRef;
  image?: ImageMetadata;
  imageAlt?: string;
  video?: VideoRef;
}

/** A "Things that can be useful" tile. */
export interface Useful {
  title: string;
  href: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
}

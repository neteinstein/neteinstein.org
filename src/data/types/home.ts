import type { ImageMetadata } from 'astro';
import type { SvgComponent } from 'astro/types';
import type { AppStoreLink } from './apps';
import type { LinkRef } from './shared';

/** Text with inline links, rendered by `RichText.astro`: `['Helping ', { label, href }, ' with…']`. */
export type RichText = (string | LinkRef)[];

/** An imported `.svg`, rendered inline as a component. */
export type Drawing = SvgComponent & ImageMetadata;

/** One line of the "Who am I?" block. */
export interface Role {
  emoji: string;
  text: RichText;
  /** Round drawings after the text, read together as `label` (they stand in for emoji). */
  portraits?: { drawings: Drawing[]; label: string };
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

/**
 * A "Recently" tile on the home page: something new on the site — an app, a
 * game, a talk, a page. The page shows the newest four (`latest()` in
 * `src/lib/recent.ts`).
 */
export interface Recent {
  /** What it is, shown above the title ("New app", "Talk"). */
  kind: string;
  /** When it was added, as `YYYY-MM`. */
  date: string;
  title: string;
  /** Where it lives on the site (or off it). */
  href: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  /** Store badges under the description (an app's Google Play listing), clickable on their own. */
  links?: AppStoreLink[];
}

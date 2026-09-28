/** Shapes for /what-i-do/podcasts. */
import type { ImageMetadata } from 'astro';

/** Copy with italic runs, as on the original: `[{ em: 'Live Aid' }, ' meets ', …]`. */
export type EmphasisText = (string | { em: string })[];

/** One YouTube episode embedded on the page. */
export interface PodcastEpisode {
  /** YouTube video id (11 characters). */
  youtubeId: string;
  /** The episode's YouTube title, without the show name and episode-number suffix. */
  title: string;
  season: number;
  episode: number;
  /** Format note carried in the YouTube title — "Short", "Special Episode". */
  format?: string;
}

/** A show on the page: its header block and, when it has any, its episode wall. */
export interface PodcastShow {
  /** Anchor id for the section (`/what-i-do/podcasts#mindera-yellow-box`). */
  slug: string;
  name: string;
  tagline: EmphasisText;
  /** Show website — the original linked the show's logo there. */
  href: string;
  logo: ImageMetadata;
  logoAlt: string;
  /** In the original page order. */
  episodes: PodcastEpisode[];
}

/** Page-level metadata: `<title>`, meta description and hero labels. */
export interface PodcastsPage {
  title: string;
  description: string;
  eyebrow: string;
  highlight: string[];
}

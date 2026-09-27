/**
 * Shapes for /what-i-do/talks-workshops. Every name is `Talk`-prefixed: the
 * barrel in `./index.ts` re-exports all areas with `export *`, so a generic
 * name here could collide with another page's types.
 */
import type { ImageMetadata } from 'astro';

/** Page-level copy: the hero and the heading of the year-by-year list. */
export interface TalkPageCopy {
  title: string;
  eyebrow: string;
  description: string;
  /** Title words painted with the brand gradient. */
  highlight: string[];
  /** The original's banner line. */
  quote: string;
  intro: string;
  /** Heading of the year-by-year list. */
  logTitle: string;
}

/** An inline link. `ariaLabel` gives vague visible text ("here") a meaningful accessible name. */
export interface TalkLink {
  label: string;
  href: string;
  /** Must start with the visible `label`, so the name still matches what is on screen. */
  ariaLabel?: string;
}

/** Italic run — the original set a few parentheticals in italics. */
export interface TalkEmphasis {
  em: (string | TalkLink)[];
}

/** Copy with inline links and italics, rendered by `components/talks/TalkText.astro`. */
export type TalkRichText = (string | TalkLink | TalkEmphasis)[];

export interface TalkVideo {
  provider: 'youtube' | 'vimeo';
  id: string;
  /** The video's own title (as the original's player showed it). */
  title: string;
  hash?: string;
}

/** A slide deck embedded from SlideShare or Prezi (the original's custom embeds). */
export interface TalkSlides {
  src: string;
  /** Iframe title. */
  title: string;
  /** CSS aspect ratio of the frame. */
  aspect: string;
  /** Where "Open" sends people who would rather not use the embed. */
  href?: string;
  hrefLabel?: string;
  /** The byline the embed code printed under the deck, when it had one. */
  byline?: TalkRichText;
}

export interface TalkPhoto {
  src: ImageMetadata;
  alt: string;
}

/** One talk tile from the original's category grids. */
export interface TalkShowcase {
  title: string;
  /** Second heading, when the original tile had one (the WIP2 documentary). */
  subtitle?: string;
  photo?: TalkPhoto;
  video?: TalkVideo;
  slides?: TalkSlides;
  /** Lines under the title — event and year, links to the deck. */
  caption?: TalkRichText[];
}

/** "Company Culture", "Tech", "Other Talks". */
export interface TalkCategory {
  /** Anchor id. */
  id: string;
  title: string;
  /** Glyph for the category's jump link and header (a name from `Icon.astro`). */
  icon: 'users' | 'code' | 'sparkles';
  /** Full-width photo the original placed above the category's grid. */
  banner?: TalkPhoto;
  /** Rows as laid out on the original: a one-item row is a wide feature, longer rows a grid. */
  rows: TalkShowcase[][];
}

/** Hashtags of the exhaustive list, without the `#`. */
export type TalkTag =
  | 'Tech'
  | 'Teams'
  | 'Feedback'
  | 'CompanyCulture'
  | 'Education'
  | 'Career'
  | 'Leadership'
  | 'Life'
  | 'Politics'
  | 'Charity';

/**
 * One line of "A more exhaustive list...", split the way the original wrote
 * it: `<month> @ <event> - <talk> #Tag #Tag`.
 */
export interface TalkLogEntry {
  /** As written — including the Portuguese "Set" for September. */
  month: string;
  /** Who hosted it or where it happened. */
  event: TalkRichText;
  /**
   * What was presented, after the " - ". Omitted when the original line had no
   * separator; an empty array keeps a dangling " - ".
   */
  talk?: TalkRichText;
  /** What joins event and talk. Defaults to `' - '`; two lines wrote `'- '` (no space before the dash). */
  separator?: string;
  tags: TalkTag[];
}

export interface TalkLogYear {
  year: string;
  entries: TalkLogEntry[];
}

export interface TalkStat {
  value: string;
  label: string;
}

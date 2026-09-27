/** Shapes for /hobbies/* (storyteller, hobbies, myths). */
import type { ImageMetadata } from 'astro';
import type { RichText } from './home';

/** An image with the alt text written for it. */
export interface HobbyFigure {
  image: ImageMetadata;
  alt: string;
}

/** A quotation and its attribution line, kept verbatim ("― Philip Pullman"). */
export interface HobbyQuote {
  text: string;
  attribution: string;
}

/** One line of the /hobbies/storyteller list — "2007: Wiretapping...". */
export interface TrueStory {
  /** The year the original prefixed the line with. Omitted for the closing "...". */
  year?: number;
  text: RichText;
}

/** A captioned YouTube video. The caption is the original's text under the player. */
export interface HobbyVideo {
  id: string;
  title: string;
}

/**
 * One block of /hobbies/hobbies. Its prose lives in
 * `src/content/pages/hobbies.mdx`, wrapped in `<Hobby id="…">`, which looks the
 * rest up here.
 */
export interface Hobby {
  /** Anchor id and lookup key. */
  id: string;
  /** The line above the heading on the original ("Host @ O Que Arde Cura - Charity & Comedy"). */
  kicker?: string;
  title: string;
  /** Label for the in-page index in the hero. */
  shortTitle: string;
  /** Where the heading (and the logo) links on the original. */
  href: string;
  /**
   * `logo` renders a square tile; `illustration` a wider picture. `fit: 'cover'`
   * lets a logo's own background fill the tile.
   */
  visual: HobbyFigure & { kind: 'logo' | 'illustration'; fit?: 'cover' | 'contain' };
  /** Whether the original wrapped the picture in the heading's link. */
  visualLinked?: boolean;
  videos?: HobbyVideo[];
}

/**
 * One myth on /hobbies/myths. Its prose lives in `src/content/pages/myths.mdx`,
 * wrapped in `<Myth id="…">`.
 */
export interface Myth {
  id: string;
  title: string;
  figure: HobbyFigure;
  /** Language of the title and prose, when not English. */
  lang?: string;
  /** Supporting scans shown under the prose ("ver imagens abaixo"). */
  sources?: HobbyFigure[];
}

export interface MythGroup {
  id: string;
  title: string;
  myths: Myth[];
}

/** The opening block of /hobbies/myths, rendered in the hero under the h1. */
export interface MythsIntro {
  /** "Simple:" — the line before the quote. */
  preface: string;
  quote: HobbyQuote;
  /** The closing line, italic on the original. */
  stance: string;
  figure: HobbyFigure;
}

import type { ImageMetadata } from 'astro';

/** Shapes for /tesla — a launcher of websites worth opening on a Tesla's browser. */

/** Page chrome: <title>, meta description and the hero's labels. */
export interface TeslaPage {
  /** The nav label, used for <title>. */
  title: string;
  eyebrow: string;
  /** The hero's <h1>. */
  heading: string;
  highlight: string[];
  description: string;
}

/** One link tile: the screenshot/logo the original used as the link, and its caption. */
export interface TeslaSite {
  /**
   * The caption under the tile, verbatim. A leading `(PT) ` marks a
   * Portuguese-only site and is rendered as a small badge.
   */
  label: string;
  href: string;
  image: ImageMetadata;
  imageAlt: string;
}

/** A `## heading` on the original and the tiles under it. */
export interface TeslaCategory {
  /** Anchor id — the category dock in the hero jumps here. */
  id: 'entertainment' | 'routing-charging' | 'utils' | 'fun' | 'others';
  title: string;
  sites: TeslaSite[];
}

/** The page intro, above the tiles. */
export interface TeslaIntro {
  lead: string;
  /** The "just bookmark this one" line. */
  bookmark: string;
  logo: ImageMetadata;
  logoAlt: string;
}

/** The closing thank-you and the Buy Me a Coffee widget that sat next to it. */
export interface TeslaThanks {
  title: string;
  message: string;
  /** The widget's own `data-message`, shown in its speech bubble. */
  widgetMessage: string;
}

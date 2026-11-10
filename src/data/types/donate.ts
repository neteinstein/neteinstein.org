import type { ImageMetadata } from 'astro';

/** Shapes for /donate. */

/** One way to donate: a card with a button to somewhere that takes the money. */
export interface DonateOption {
  /** Stable key for the card. */
  id: string;
  title: string;
  description: string;
  /** The button's label. */
  cta: string;
  /** External donation page. */
  href: string;
  /** Glyph name from `src/components/Icon.astro`. */
  icon: 'coffee' | 'heart';
}

/** One icon in the strip of free apps at the top of the page. */
export interface ShowcaseApp {
  /** In-page anchor on the app's own page. */
  id: string;
  title: string;
  /** The app icon. */
  icon: ImageMetadata;
  /** The app's card on /my-apps or /my-games. */
  href: string;
}

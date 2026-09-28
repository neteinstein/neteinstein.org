/** Shapes for /my-apps. */
import type { ImageMetadata } from 'astro';
import type { RichText } from './home';

/** Where an app can be installed or opened — one store badge each on the original. */
export type AppStore = 'google-play' | 'web';

export interface AppStoreLink {
  store: AppStore;
  href: string;
}

/** A store badge image, shared by every app that links to that store. */
export interface AppStoreBadge {
  image: ImageMetadata;
  /** The badge's own wording ("Get it on Google Play"). */
  alt: string;
}

/** One app on /my-apps. */
export interface AppListing {
  /** In-page anchor, so the hero's icon dock can jump to it (`/my-apps#loopgain`). */
  id: string;
  title: string;
  description: RichText;
  /** The banner the original showed next to each app. */
  image: ImageMetadata;
  imageAlt: string;
  /** The app icon, cropped from that banner. Decorative next to the title. */
  icon: ImageMetadata;
  links: AppStoreLink[];
}

/** Copy from the Buy Me a Coffee widget the original embedded on this page. */
export interface AppsSupport {
  /** The widget's `data-description`. */
  title: string;
  /** The widget's `data-message`. */
  message: string;
}

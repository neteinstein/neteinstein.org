/** Shapes for /my-apps and /friend-apps. */
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
  /** Who made it, for apps that aren't mine (/friend-apps). Shown as "By …" under the title. */
  author?: string;
  description: RichText;
  /** The banner the original showed next to each app. */
  image: ImageMetadata;
  imageAlt: string;
  /** The app icon, cropped from that banner. Decorative next to the title. */
  icon: ImageMetadata;
  /** Empty while the app has no public build yet. */
  links: AppStoreLink[];
  /** Release stage shown as a pill over the banner ("Alpha Testing"); omit once it is public. */
  status?: string;
  /** YouTube video id. When set, clicking the banner plays the video in its place. */
  video?: string;
  /** A self-hosted video, played the same way. Its files, best first, as Vite emits them (`?url` imports). */
  videoFile?: { src: string; type: string }[];
}

/** A titled section of /my-apps, grouping related apps. */
export interface AppGroup {
  /** In-page anchor for the section (`/my-apps#utils`). */
  id: string;
  title: string;
  /** schema.org `applicationCategory` of its apps, for search engines. */
  category: string;
  apps: AppListing[];
}

/** Copy from the Buy Me a Coffee widget the original embedded on this page. */
export interface AppsSupport {
  /** The widget's `data-description`. */
  title: string;
  /** The widget's `data-message`. */
  message: string;
}

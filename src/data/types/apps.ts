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
  /** Empty while the app has no public build yet. */
  links: AppStoreLink[];
  /** Release stage shown as a pill over the banner ("Alpha Testing"); omit once it is public. */
  status?: string;
  /** YouTube video id. When set, clicking the banner plays the video in its place. */
  video?: string;
}

/** The hero video: a demo of one of the apps. */
export interface AppsHero {
  /** The video's files, best first, as Vite emits them (`?url` imports). */
  sources: { src: string; type: string }[];
  /** Its first frame, shown until it plays (and instead of it with reduced motion). */
  poster: ImageMetadata;
  /** Screen-reader description of the video. */
  label: string;
  /** The file has no audio track, so the hero shows no sound button. */
  silent?: boolean;
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

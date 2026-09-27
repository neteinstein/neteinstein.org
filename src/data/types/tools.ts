/** Shapes for /tools and its children (/tools/loopgain, /tools/summer-camp-games). */
import type { ImageMetadata } from 'astro';
import type { LinkRef } from './shared';

/**
 * One tile on the /tools index. The original /tools page had no copy of its
 * own, so the tile's title and blurb are read from the child page's entry in
 * `src/content/pages/` (`page`) rather than written again here.
 */
export interface ToolsIndexEntry {
  /** Filename (without extension) of the child page's MDX entry. */
  page: string;
  /** Site-absolute path of the child page. */
  href: string;
  /** Links that appear on the child page, clickable straight from the tile. */
  links: LinkRef[];
  /** Screenshot for the tile. */
  image?: ImageMetadata;
  imageAlt?: string;
  /** Without a screenshot, the tile draws a stack of pages labelled with this file name. */
  fileName?: string;
}

/** An external site shown as a linked screenshot, as /tools/loopgain does. */
export interface ToolsSiteShowcase {
  /** The site, exactly as the original linked it. */
  href: string;
  /** The link text the original used. */
  label: string;
  image: ImageMetadata;
  imageAlt: string;
}

/** A Google Drive file that the original embedded with Drive's own viewer. */
export interface ToolsDriveDocument {
  /** File name as Drive shows it in the embed. */
  name: string;
  /** Drive's `/preview` URL — the iframe source. */
  previewUrl: string;
  /** Opens the file in Drive. */
  openUrl: string;
  /** Drive's direct-download URL for the file. */
  downloadUrl: string;
}

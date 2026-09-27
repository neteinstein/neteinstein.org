/** Shapes for /what-i-do/improver. */
import type { ImageMetadata } from 'astro';
import type { LinkRef } from './shared';

/**
 * A formatted run inside a paragraph. The original page set parts of its copy
 * in bold and/or italic; `mark` additionally paints a run with the brand
 * gradient (a design accent, only ever layered on runs that were bold).
 */
export interface ImproverSpan {
  text: string;
  strong?: boolean;
  em?: boolean;
  mark?: boolean;
  /** Site-absolute (`/tesla`), external (`https://…`) or `mailto:`. */
  href?: string;
}

/** One paragraph: plain strings and formatted runs, in reading order. */
export type ImproverText = (string | ImproverSpan)[];

export interface ImproverImage {
  image: ImageMetadata;
  alt: string;
}

/** An image the original wrapped in a link. */
export interface ImproverLinkedImage extends ImproverImage {
  href: string;
  /** Visually hidden text that names the link's destination for screen readers. */
  linkLabel: string;
}

/** The header every chapter of the page shares. */
export interface ImproverChapter {
  /** Fragment id for in-page links. */
  id: string;
  /** Short UI label above the title. */
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/** The banner quote at the top of the original. */
export interface ImproverQuote {
  text: string;
  author: string;
}

/** "Improver?" — the prose lives in `src/content/pages/improver.mdx`. */
export interface ImproverIntro extends ImproverChapter {
  card: ImproverLinkedImage;
  tagline: ImproverText;
}

export interface ImproverStoryParagraph {
  text: ImproverText;
  /** Set large, as a pull statement. */
  statement?: boolean;
}

export interface ImproverFeedback extends ImproverChapter {
  story: ImproverStoryParagraph[];
  envision: { lead: ImproverText; items: string[] };
  knowMore: LinkRef;
  training: ImproverText[];
  video: { id: string; title: string };
  deck: ImproverLinkedImage & { caption: string };
}

export interface ImproverModule {
  emoji: string;
  label: string;
}

/** A group of workshop modules ("Team", "Leadership", …). */
export interface ImproverModuleGroup {
  title: string;
  items: ImproverModule[];
}

export interface ImproverWorkshops extends ImproverChapter {
  intro: string[];
  /** Words lifted from `intro`, replayed as a decorative marquee. */
  verbs: string[];
  modulesIntro: string;
  modules: ImproverModuleGroup[];
  photos: ImproverImage[];
  cta: string;
  note: string;
  form: {
    src: string;
    title: string;
    height: number;
    fallbackHref: string;
    fallbackLabel: string;
  };
}

export interface ImproverFamily extends ImproverChapter {
  /** Short status pill, taken from the copy ("Alpha"). */
  status: string;
  paragraphs: string[];
  illustration: ImproverImage;
}

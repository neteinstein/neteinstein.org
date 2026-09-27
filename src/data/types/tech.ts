/** Shapes for /what-i-do/tech-engineer. */
import type { ImageMetadata } from 'astro';
import type { LinkRef } from './shared';

/**
 * An inline link inside tech-page copy. `ariaLabel` disambiguates the short
 * store labels the original repeats ("Android", "iOS") for screen readers.
 */
export interface TechLink extends LinkRef {
  ariaLabel?: string;
}

/** Text with inline links, rendered by `components/tech/TechText.astro`. */
export type TechText = (string | TechLink)[];

/** An image as the original placed it, optionally wrapped in a link. */
export interface TechImage {
  src: ImageMetadata;
  alt: string;
  href?: string;
  /** `contain` for wide logos that must not be cropped to the square frame. */
  fit?: 'cover' | 'contain';
}

/** An "Appeared at:" entry — documentary, podcast episode. */
export interface Appearance {
  title: TechLink;
  description: TechText;
  year: string;
  image: TechImage;
}

/** An "Online footprint" profile. */
export interface Footprint {
  name: TechLink;
  /** One entry per paragraph of the original. */
  paragraphs: TechText[];
  image: TechImage;
  /** A figure quoted in the paragraphs, given a big-number treatment. */
  stat?: { value: string; label: string };
}

/** A "Been a teacher at:" entry. */
export interface Teaching {
  name: TechLink;
  /** One entry per line of the original. */
  lines: TechText[];
  years: string;
  image: TechImage;
}

/** One role on a project, with the years it covered. */
export interface ProjectStint {
  /** One entry per line of the original (roles, platforms, store links). */
  lines: TechText[];
  years: string;
}

/** A "Tech Portfolio:" card. */
export interface Project {
  name: TechText;
  stints: ProjectStint[];
  image: TechImage;
}

/** A group of the portfolio ("2016 onwards", "2009-2016") under an employer's logo. */
export interface PortfolioEra {
  id: string;
  label: string;
  employer: TechImage & { name: string; href: string };
  /** A picture the original placed next to the era's logo, linking elsewhere. */
  feature?: TechImage & { href: string; linkLabel: string };
  projects: Project[];
}

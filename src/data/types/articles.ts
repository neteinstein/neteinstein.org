/**
 * Shapes for /what-i-do/articles. Names carry an `Article`/`Reading` prefix so
 * they cannot collide with other areas' types in the `./index` barrel.
 */
import type { ImageMetadata } from 'astro';
import type { RichText } from './home';
import type { LinkRef } from './shared';

/** A place Pedro writes for ("Medium", "PontoSJ"). */
export interface ArticleOutlet {
  name: string;
  href: string;
  description: string;
  /** Extra line under the description — the years of a column. */
  period?: string;
  logo: ImageMetadata;
  logoAlt: string;
}

/** One year of a highlights column: the articles published that year. */
export interface ArticleHighlightYear {
  year: string;
  articles: LinkRef[];
}

/** "Tech highlights", "Company/Team highlights", … */
export interface ArticleHighlightGroup {
  title: string;
  years: ArticleHighlightYear[];
}

/** A book Pedro wrote or contributed to. */
export interface AuthoredBook {
  title: string;
  /** Where the cover and title link on the original, when they do. */
  href?: string;
  description: RichText;
  image: ImageMetadata;
  imageAlt: string;
}

/** A book from the Goodreads "read" shelf widget (its static fallback list). */
export interface GoodreadsBook {
  title: string;
  href: string;
}

/** A run of text the original set in italics (the quotations in the reading list). */
export interface ReadingEmphasis {
  em: string;
}

/** A link inside a reading-list entry. `label` runs may mix plain and italic text. */
export interface ReadingLink {
  href: string;
  label: string | (string | ReadingEmphasis)[];
}

/**
 * One bullet of the reading list: usually a single link, sometimes text around
 * it ("[Portuguese] ", " — A ", …) or several links.
 */
export type ReadingEntry = (string | ReadingLink)[];

/** A sub-heading of the reading list ("Life", "Feedback", …) and its bullets. */
export interface ReadingTopic {
  title: string;
  entries: ReadingEntry[];
}

/** A top-level heading of the reading list ("People", "Organisations", …). */
export interface ReadingGroup {
  /** Anchor id for the in-page index. */
  id: string;
  title: string;
  topics: ReadingTopic[];
}

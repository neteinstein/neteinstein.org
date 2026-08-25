/**
 * Shared shapes for the structured content in this folder.
 *
 * Each data file annotates its export (`const talks: Talk[]`), so a malformed
 * entry is an `astro check` failure rather than a runtime surprise. An explicit
 * annotation rather than `satisfies`, so optional fields survive inference.
 */

export interface Talk {
  title: string;
  event: string;
  location?: string;
  /** ISO `YYYY-MM-DD`, or `YYYY-MM` when only the month is known. */
  date: string;
  description?: string;
  slidesUrl?: string;
  videoUrl?: string;
  eventUrl?: string;
  type: 'talk' | 'workshop' | 'panel';
}

export interface Podcast {
  show: string;
  title: string;
  description?: string;
  date?: string;
  url?: string;
  language: 'en' | 'pt';
}

export interface Article {
  title: string;
  publication?: string;
  date?: string;
  url: string;
  description?: string;
  language: 'en' | 'pt';
}

export type PlaceCategory = 'eat' | 'drink' | 'dessert' | 'visit' | 'activity';
export type PlaceArea = 'porto' | 'gaia' | 'matosinhos' | 'other';
export type PlaceDiet =
  'traditional' | 'vegan' | 'vegetarian' | 'halal' | 'high-end' | 'no-restrictions';

export interface Place {
  name: string;
  category: PlaceCategory;
  area: PlaceArea;
  diets?: PlaceDiet[];
  notes?: string;
  url?: string;
  mapUrl?: string;
}

export interface LinkEntry {
  title: string;
  url: string;
  description?: string;
}

export interface Hobby {
  name: string;
  description?: string;
  url?: string;
}

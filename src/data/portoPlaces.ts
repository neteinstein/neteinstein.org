import type { Place } from './types';

/**
 * TODO(content): the Porto guide is the richest page on the site and could not
 * be crawled. Search confirms the categories it uses — where to eat (with
 * no-restrictions, halal, vegan and high-end variants), places for a drink or
 * tea, desserts and snacks, and places to visit across Porto, Gaia and
 * Matosinhos — so the schema below is real, but the entries are not: this array
 * is empty on purpose rather than filled with invented recommendations.
 *
 * Populate it from https://www.neteinstein.org/porto/visit-porto and the page
 * renders itself — PlaceFilter derives its facets from the data.
 */
export const portoPlaces: Place[] = [];

/** Display labels for the filter chips and section headings. */
export const CATEGORY_LABELS: Record<Place['category'], string> = {
  eat: 'Eat',
  drink: 'Drink & tea',
  dessert: 'Desserts & snacks',
  visit: 'Visit',
  activity: 'Activities',
};

export const AREA_LABELS: Record<Place['area'], string> = {
  porto: 'Porto',
  gaia: 'Gaia',
  matosinhos: 'Matosinhos',
  other: 'Further out',
};

export const DIET_LABELS: Record<NonNullable<Place['diets']>[number], string> = {
  traditional: 'Traditional',
  'no-restrictions': 'No restrictions',
  vegan: 'Vegan',
  vegetarian: 'Vegetarian',
  halal: 'Halal',
  'high-end': 'High-end',
};

/**
 * Shared text normalisation for the search-and-filter islands (`PlaceFilter`,
 * `KidsFilter`, `GameFilter`). Each island builds its own searchable index
 * (in `search.ts` next to it); all of them match with this.
 */

/** Lower-case and strip accents, so "sao bento" finds "São Bento". */
export function normalise(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}

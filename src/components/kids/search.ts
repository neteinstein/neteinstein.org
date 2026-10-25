/**
 * The pure search-and-filter logic behind `KidsFilter` — kept out of the
 * island so it can be unit-tested without a DOM (`tests/unit/search.test.ts`).
 */
import type { KidsPlace } from '../../data/types';
import { normalise } from '../../lib/search';

/** Every distinct `setting` value, in the order it first appears. */
export function distinctSettings(places: KidsPlace[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const place of places) {
    if (!seen.has(place.setting)) {
      seen.add(place.setting);
      result.push(place.setting);
    }
  }
  return result;
}

/** Place → everything searchable about it, normalised. */
export function buildIndex(places: KidsPlace[]): Map<KidsPlace, string> {
  const index = new Map<KidsPlace, string>();
  for (const place of places) {
    const text = [
      place.where.label,
      place.name.label,
      place.setting,
      place.cost,
      place.ages,
      place.children,
      place.duration,
      ...place.notes.flatMap((list) => [list.label, ...list.items]),
    ]
      .filter(Boolean)
      .join(' ');
    index.set(place, normalise(text));
  }
  return index;
}

export type KidsSort = 'name' | 'price-asc' | 'price-desc';

/** The lowest price in a free-text cost ("9€ to 12.50€", "From 9€"), or undefined when blank. */
export function parseCost(cost?: string): number | undefined {
  const match = cost?.match(/\d+(?:[.,]\d+)?/);
  return match ? Number(match[0].replace(',', '.')) : undefined;
}

/** The age range in a free-text ages cell ("2-12", "6+", "8-18 (CosmoTot: 1-4)"); the note in brackets is ignored. */
export function parseAges(ages?: string): { min: number; max: number } | undefined {
  const range = ages?.split('(')[0]?.match(/(\d+)\s*(?:[-–]\s*(\d+)|(\+))?/);
  if (!range) return undefined;
  const min = Number(range[1]);
  return { min, max: range[3] ? Infinity : range[2] ? Number(range[2]) : min };
}

/** Whether a place takes a child of this age. Places that list no ages stay in. */
export function acceptsAge(place: KidsPlace, age: number): boolean {
  const range = parseAges(place.ages);
  return !range || (age >= range.min && age <= range.max);
}

/** A sorted copy: A–Z by name, or by lowest price (places without a price go last). */
export function sortPlaces(places: KidsPlace[], sort: KidsSort): KidsPlace[] {
  const byName = (a: KidsPlace, b: KidsPlace) =>
    normalise(a.name.label).localeCompare(normalise(b.name.label));
  if (sort === 'name') return [...places].sort(byName);
  const direction = sort === 'price-asc' ? 1 : -1;
  return [...places].sort((a, b) => {
    const [pa, pb] = [parseCost(a.cost), parseCost(b.cost)];
    if (pa === undefined || pb === undefined) {
      return pa === pb ? byName(a, b) : pa === undefined ? 1 : -1;
    }
    return pa === pb ? byName(a, b) : (pa - pb) * direction;
  });
}

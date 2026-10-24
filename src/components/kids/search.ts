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

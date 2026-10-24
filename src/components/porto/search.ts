/**
 * The pure search-and-filter logic behind `PlaceFilter` — kept out of the
 * island so it can be unit-tested without a DOM (`tests/unit/search.test.ts`).
 */
import type { GuideGroup, Place, PlacePhotoUrl } from '../../data/types';
import { normalise } from '../../lib/search';

export type GuidePlace = Place<PlacePhotoUrl>;

/** Every place of a group with the id of the subgroup it sits in (if any). */
export function placesOf(group: GuideGroup): { place: GuidePlace; sid?: string }[] {
  return [
    ...(group.places ?? []).map((place) => ({ place })),
    ...(group.subgroups ?? []).flatMap((subgroup) =>
      subgroup.places.map((place) => ({ place, sid: subgroup.id })),
    ),
  ];
}

export function countOf(group: GuideGroup): number {
  return placesOf(group).length;
}

/** Place id → everything searchable about it, normalised. */
export function buildIndex(groups: GuideGroup[]): Map<string, string> {
  const index = new Map<string, string>();
  for (const group of groups) {
    for (const { place, sid } of placesOf(group)) {
      const subgroup = group.subgroups?.find((candidate) => candidate.id === sid);
      const text = [
        group.title,
        subgroup?.title,
        place.title,
        place.subtitle,
        ...(place.notes ?? []),
        ...place.venues.flatMap((venue) => [venue.name, venue.note]),
      ]
        .filter(Boolean)
        .join(' ');
      index.set(place.id, normalise(text));
    }
  }
  return index;
}

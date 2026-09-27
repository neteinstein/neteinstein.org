import { getImage } from 'astro:assets';
import type { GuideGroup, Place, PlaceGroup, PlacePhoto, PlacePhotoUrl } from '../../data/types';

/** Card widths the guide's `sizes` ask for — capped at each photo's own width. */
const WIDTHS = [400, 800];

async function resolvePhoto({ image, alt }: PlacePhoto): Promise<PlacePhotoUrl> {
  const widths = [...new Set(WIDTHS.map((width) => Math.min(width, image.width)))];
  const result = await getImage({ src: image, widths });
  return {
    src: result.src,
    srcSet: result.srcSet.attribute,
    width: image.width,
    height: image.height,
    alt,
  };
}

async function resolvePlaces(places: Place[]): Promise<Place<PlacePhotoUrl>[]> {
  return Promise.all(
    places.map(async (place) => ({
      ...place,
      photos: await Promise.all(place.photos.map(resolvePhoto)),
    })),
  );
}

/**
 * Turns the guide's local photos into optimised image URLs (via `getImage()`),
 * so the groups can be handed to the `PlaceFilter` island as plain props. The
 * jump-list cover photos stay behind — only `.astro` renders those.
 */
export async function resolveGuide(groups: PlaceGroup[]): Promise<GuideGroup[]> {
  return Promise.all(
    groups.map(async ({ cover: _cover, places, subgroups, ...group }) => ({
      ...group,
      ...(places && { places: await resolvePlaces(places) }),
      ...(subgroups && {
        subgroups: await Promise.all(
          subgroups.map(async (subgroup) => ({
            ...subgroup,
            places: await resolvePlaces(subgroup.places),
          })),
        ),
      }),
    })),
  );
}

/** Number of places in a group, across its subgroups. */
export function placeCount(group: PlaceGroup): number {
  return (
    (group.places?.length ?? 0) +
    (group.subgroups ?? []).reduce((sum, subgroup) => sum + subgroup.places.length, 0)
  );
}

import { getImage } from 'astro:assets';
import type { GameCategory, GuideCategory } from '../../data/types';

/** Card widths the guide's `sizes` ask for — capped at each drawing's own width. */
const WIDTHS = [400, 800];

/**
 * Turns the guide's illustrations into optimised image URLs (via
 * `getImage()`), so the categories can be handed to the `GameFilter` island
 * as plain props. `alt` names the drawing after its game.
 */
export async function resolveGuide(
  categories: GameCategory[],
  alt: (game: string) => string,
): Promise<GuideCategory[]> {
  return Promise.all(
    categories.map(async (category) => ({
      ...category,
      games: await Promise.all(
        category.games.map(async ({ image, ...game }) => {
          if (!image) return game;
          const widths = [...new Set(WIDTHS.map((width) => Math.min(width, image.width)))];
          const result = await getImage({ src: image, widths });
          return {
            ...game,
            image: {
              src: result.src,
              srcSet: result.srcSet.attribute,
              width: image.width,
              height: image.height,
              alt: alt(game.title),
            },
          };
        }),
      ),
    })),
  );
}

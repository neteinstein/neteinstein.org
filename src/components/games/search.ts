/**
 * The pure search-and-filter logic behind `GameFilter` — kept out of the
 * island so it can be unit-tested without a DOM (`tests/unit/search.test.ts`).
 */
import type { GuideCategory } from '../../data/types';
import { normalise } from '../../lib/search';

/** `[text](https://…)` inside a sheet line. */
export const INLINE_LINK = /\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g;

/** A sheet line as it reads, links reduced to their text. */
export function plainText(text: string): string {
  return text.replace(INLINE_LINK, '$1');
}

/** Game id → everything searchable about it, normalised. */
export function buildIndex(categories: GuideCategory[]): Map<string, string> {
  const index = new Map<string, string>();
  for (const category of categories) {
    for (const game of category.games) {
      const text = [
        category.title,
        category.short,
        game.title,
        game.originalName,
        game.players,
        game.age,
        game.duration,
        game.setting,
        game.note,
        ...game.materials,
        ...game.setup,
        game.goal,
        ...game.rules.map(plainText),
        ...game.tips.map(plainText),
        ...(game.questions ?? []).flatMap((round) => [round.title, ...round.questions]),
        ...game.sources.map((source) => source.label),
      ]
        .filter(Boolean)
        .join(' ');
      index.set(game.id, normalise(text));
    }
  }
  return index;
}

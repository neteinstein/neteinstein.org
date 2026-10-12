/** Shapes for /games — the "Jogos de Grupo" guide of group games. */
import type { ImageMetadata } from 'astro';
import type { LinkRef } from './shared';

/** Where a game can be played; drives the indoor/outdoor filter. */
export type GameSetting = 'indoor' | 'outdoor';

/**
 * A game's illustration resolved to plain URLs by the route (`getImage()`),
 * so it can cross into the `GameFilter` island as a serialisable prop.
 */
export interface GameImageUrl {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
}

/** One game's card: the doc's summary table, then its how-to-play sheet. */
export interface Game<Image = ImageMetadata> {
  /** Anchor id — unique across the page. */
  id: string;
  /** The guide's running number, kept across categories. */
  number: number;
  title: string;
  /** Title of the video the game was collected from, in its own language. */
  originalName?: string;
  /** Group size, as the doc writes it ("2 to 4 players at a time"). */
  players: string;
  age: string;
  duration: string;
  /** Where to play, as the doc writes it ("Outdoors (grass)"). */
  setting: string;
  /** `setting` reduced to the filter's two values. */
  where: GameSetting[];
  /** The doc's drawing of the game's main rule. */
  image?: Image;
  /** Stands in for `image` on the card when a game has no drawing. */
  emoji?: string;
  /** A caveat printed above the rules ("rules reconstructed from the video"). */
  note?: string;
  /** What the group is trying to achieve, when the sheet states it. */
  goal?: string;
  materials: string[];
  setup: string[];
  /**
   * Step by step, in order. `[text](https://…)` renders as an external link,
   * here and in `tips`.
   */
  rules: string[];
  /** Variations and tips. */
  tips: string[];
  /** The videos the game was collected from. */
  sources: LinkRef[];
}

/** A chapter of the guide — "Christmas and Family Games", "Camp: …". */
export interface GameCategory<Image = ImageMetadata> {
  id: string;
  /** The doc's heading emoji. */
  emoji: string;
  title: string;
  /** Short label for filter chips and the jump tiles. */
  short: string;
  intro: string;
  games: Game<Image>[];
}

/** The hero illustration. */
export interface GamesHero {
  image: ImageMetadata;
  alt: string;
}

/** A category as the `GameFilter` island receives it: illustrations as URLs. */
export type GuideCategory = GameCategory<GameImageUrl>;

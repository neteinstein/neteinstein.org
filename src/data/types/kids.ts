/** Shapes for /porto/with-kids. */
import type { ImageMetadata } from 'astro';
import type { LinkRef } from './shared';

/** A labelled bullet list inside a place's "Notes" cell ("Schedules:", "Has:"). */
export interface KidsNoteList {
  /** Shown bold above the list, colon included, as on the original. */
  label: string;
  /**
   * `times` renders the items as time slots, `includes` as things the party
   * comes with (both as pills); `info` is any other fact (a discount, a
   * rental fee, an age range) shown as plain text.
   */
  kind: 'times' | 'includes' | 'info';
  items: string[];
}

/**
 * One row of the "places for kids" table. Optional fields are cells the
 * original left blank — they stay blank here rather than being guessed.
 */
export interface KidsPlace {
  /** "Where?" — the town or neighbourhood. */
  where: string;
  /** "Name" — linked to the page the prices were read from. */
  name: LinkRef;
  /** "Indoor Outdoor". */
  setting: string;
  /** "Estimated cost per child *". */
  cost?: string;
  ages?: string;
  /** "Min/Max children". */
  children?: string;
  duration?: string;
  notes: KidsNoteList[];
}

/** Every cell of a `KidsPlace` row, in the order the table shows them. */
export type KidsColumnKey = keyof KidsPlace;

/** A column header of the table. */
export interface KidsColumn {
  key: KidsColumnKey;
  label: string;
  /** Marker appended to the label that points at the note under the table. */
  footnote?: string;
}

/** A photo with its alt text. */
export interface KidsPhoto {
  image: ImageMetadata;
  alt: string;
}

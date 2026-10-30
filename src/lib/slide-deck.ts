/**
 * Pure helpers behind the feedback talk deck on /what-i-do/improver
 * (`FeedbackTalk.astro`, driven by `src/scripts/slide-deck.ts`).
 */
import type { SessionPart } from '../data/types';

/** Keeps a slide index inside `[0, count)`. */
export function clampSlide(index: number, count: number): number {
  return Math.min(Math.max(Math.round(index), 0), Math.max(count - 1, 0));
}

/** The slide a horizontally scrolled track rests on; every slide is one track wide. */
export function slideAt(scrollLeft: number, width: number, count: number): number {
  return width > 0 ? clampSlide(scrollLeft / width, count) : 0;
}

/** Minutes one part of a session takes for a team of `people`. */
export function partMinutes(part: Pick<SessionPart, 'minutes' | 'perPerson'>, people: number) {
  return part.perPerson ? part.minutes * people : part.minutes;
}

/** Minutes a whole session takes for a team of `people`. */
export function sessionMinutes(
  parts: Pick<SessionPart, 'minutes' | 'perPerson'>[],
  people: number,
) {
  return parts.reduce((total, part) => total + partMinutes(part, people), 0);
}

/** `45` → `45 min`, `60` → `1 h`, `85` → `1 h 25 min`. */
export function formatMinutes(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours === 0) return `${rest} min`;
  return rest === 0 ? `${hours} h` : `${hours} h ${rest} min`;
}

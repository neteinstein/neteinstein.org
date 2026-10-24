/**
 * Pure helpers behind the RSS feed (`src/pages/rss.xml.ts`), kept here so they
 * can be unit-tested (`tests/unit/feed.test.ts`): the talk log's month names
 * and the rich-text runs talks are written in.
 */
import type { TalkRichText } from '../data/types';

/** Month names as the talk log writes them, including the Portuguese "Set". */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTH_ALIASES: Record<string, string> = { Set: 'Sep' };

/** Zero-based month of a talk-log month name; an unknown name dates to January. */
export function monthIndex(month: string): number {
  return Math.max(0, MONTHS.indexOf(MONTH_ALIASES[month] ?? month));
}

/** A rich-text run as plain text, links and emphasis reduced to their labels. */
export function plain(text: TalkRichText): string {
  return text
    .map((part) =>
      typeof part === 'string'
        ? part
        : 'em' in part
          ? part.em.map((inner) => (typeof inner === 'string' ? inner : inner.label)).join('')
          : part.label,
    )
    .join('')
    .trim();
}

/** The first link in a run of text, so a talk's item points at its slides or video. */
export function firstHref(text: TalkRichText = []): string | undefined {
  for (const part of text) {
    if (typeof part === 'string') continue;
    if ('href' in part) return part.href;
    const inner = part.em.find((run) => typeof run !== 'string');
    if (inner) return inner.href;
  }
  return undefined;
}

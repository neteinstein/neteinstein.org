/**
 * The home page's "Recently" section: what's new on the site, newest first,
 * never more than a handful.
 */

/** The most items the section shows. */
export const MAX_RECENT = 4;

/** The newest `max` items by `date` (`YYYY-MM`); items from the same month keep their order. */
export function latest<T extends { date: string }>(items: readonly T[], max = MAX_RECENT): T[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date)).slice(0, max);
}

/**
 * `2026-11` as "Nov 2026", in the language tagged `tag` ("pt-PT" → "nov. 2026").
 * The month is formatted on its own: with a year, some locales (pt-PT) switch
 * to digits ("11/2026").
 */
export function formatMonth(date: string, tag: string): string {
  const [year = 0, month = 1] = date.split('-').map(Number);
  const name = new Intl.DateTimeFormat(tag, { month: 'short', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1)),
  );
  return `${name} ${year}`;
}

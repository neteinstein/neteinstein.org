import rss, { type RSSFeedItem } from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { highlights } from '../data/articles';
import { talkLog } from '../data/talks';
import { firstHref, monthIndex, plain } from '../lib/feed';
import { withBase } from '../lib/url';

/**
 * Talks and article highlights, newest first, for feed readers. Both lists
 * carry only a year (talks also a month), so items are dated to the first day
 * of the period they were given or published in.
 */

const TALKS_PAGE = '/what-i-do/talks-workshops';

const absolute = (href: string) => new URL(withBase(href), SITE.url).href;

function talkItems(): RSSFeedItem[] {
  return talkLog.flatMap(({ year, entries }) =>
    entries.map((entry, index) => {
      const month = monthIndex(entry.month);
      const event = plain(entry.event);
      const talk = entry.talk ? plain(entry.talk) : '';
      const href = firstHref(entry.talk) ?? firstHref(entry.event) ?? `${TALKS_PAGE}#talks-${year}`;
      return {
        title: talk ? `${event} — ${talk}` : event,
        link: absolute(href),
        pubDate: new Date(Date.UTC(Number(year), month, 1)),
        description: `${entry.month} ${year} @ ${event}${talk ? ` — ${talk}` : ''}`,
        categories: ['Talk', ...entry.tags],
        customData: `<guid isPermaLink="false">talk-${year}-${entries.length - index}</guid>`,
      };
    }),
  );
}

/** An article listed under two highlight groups appears once. */
function articleItems(): RSSFeedItem[] {
  const seen = new Set<string>();
  return highlights.flatMap((group) =>
    group.years.flatMap(({ year, articles }) =>
      articles
        .filter((article) => !seen.has(article.href) && seen.add(article.href))
        .map((article) => ({
          title: article.label,
          link: absolute(article.href),
          pubDate: new Date(Date.UTC(Number(year), 0, 1)),
          description: `${group.title}, ${year}`,
          categories: ['Article'],
        })),
    ),
  );
}

export const GET: APIRoute = () => {
  const items = [...talkItems(), ...articleItems()].sort(
    (a, b) => (b.pubDate?.getTime() ?? 0) - (a.pubDate?.getTime() ?? 0),
  );
  return rss({
    title: `${SITE.title} — talks & articles`,
    description: SITE.description,
    site: new URL(withBase('/'), SITE.url).href,
    trailingSlash: false,
    items,
    customData: '<language>en</language>',
  });
};

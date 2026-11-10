/**
 * /donate content: the strip of free apps under the hero and the ways to chip
 * in. Hero copy lives in `src/content/pages/donate.mdx`. New to this site —
 * the Google Sites original had no donate page, only the Buy Me a Coffee
 * widget (now `SupportCallout`) on a few pages.
 */
import { apps, games } from './apps';
import type { DonateOption, ShowcaseApp } from './types';

/** Every public app and game, as a small icon linking to its card. Unreleased ones (no links yet) are left out. */
export const showcase: ShowcaseApp[] = [
  ...apps.map((app) => ({ app, page: '/my-apps' })),
  ...games.map((app) => ({ app, page: '/my-games' })),
]
  .filter(({ app }) => app.links.length > 0)
  .map(({ app, page }) => ({
    id: app.id,
    title: app.title,
    icon: app.icon,
    href: `${page}#${app.id}`,
  }));

export const options: DonateOption[] = [
  {
    id: 'buy-me-a-coffee',
    title: 'Buy Me a Coffee',
    description:
      'A coffee, or even less, is more than enough. It keeps me motivated to keep building.',
    cta: 'Buy me a coffee',
    href: 'https://buymeacoffee.com/neteinstein',
    icon: 'coffee',
  },
  {
    id: 'revolut',
    title: 'Revolut',
    description: 'Prefer Revolut? Send any amount you like.',
    cta: 'Donate on Revolut',
    href: 'https://revolut.me/neteinstein',
    icon: 'heart',
  },
];

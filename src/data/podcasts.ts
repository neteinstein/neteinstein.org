import type { Podcast } from './types';

/**
 * TODO(content): seeded from search-engine summaries of
 * https://www.neteinstein.org/what-i-do/podcasts — episode lists and links
 * still need to be recovered from the original page.
 */
export const podcasts: Podcast[] = [
  {
    show: 'Mindera Yellow Box',
    title: 'Mindera Yellow Box',
    language: 'en',
    description:
      'Tech, business and cultural conversations relating to Mindera and software engineering in general.',
  },
  {
    show: 'O Que Arde Cura',
    title: 'O Que Arde Cura',
    language: 'pt',
    url: 'https://oqueardecura.pedrovicente.pt/',
    description:
      'Created as a modest contribution to help those who help others, while trying to make people ' +
      'laugh. Every month a guest from a charity association is interviewed while both eat ' +
      'progressively hotter sauces, live-streamed to YouTube, Facebook and Twitter to ask for donations.',
  },
];

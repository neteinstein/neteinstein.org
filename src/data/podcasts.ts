import type { Podcast } from './types';

/**
 * TODO(content): seeded from search-engine summaries of
 * https://www.neteinstein.org/what-i-do/podcasts — episode lists and links
 * still need to be recovered from the original page.
 */
export const podcasts: Podcast[] = [
  {
    show: 'Mindera Yellow Box',
    title: 'AI and the Future of Platform Engineering — S3E5',
    language: 'en',
    date: '2026-09-21',
    url: 'https://www.youtube.com/watch?v=paFl2Tl7utE&list=PLUjtx-mX3t3bqn9J6V_qqgt6JT7pQPzy3&index=1',
    description:
      'Technical Product Owner Hélder Pereira joins Pedro Vicente to discuss platform engineering in the agentic era.',
  },
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
    description:
      'Created as a modest contribution to help those who help others, while trying to make people ' +
      'laugh. Every month a guest from a charity association is interviewed while both eat ' +
      'progressively hotter sauces, live-streamed to YouTube, Facebook and Twitter to ask for donations.',
  },
];

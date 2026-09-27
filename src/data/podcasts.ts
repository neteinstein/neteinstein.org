/**
 * Podcasts page content, ported from the Google Sites original
 * (https://www.neteinstein.org/what-i-do/podcasts — crawl snapshot in
 * `.crawl/report.json`).
 *
 * The original listed 13 YouTube embeds, all under Mindera Yellow Box, in the
 * order kept below. Episode titles are the videos' YouTube titles (oEmbed);
 * the season/episode numbers and format notes come from the same titles.
 */
import type { PodcastShow, PodcastsPage } from './types';

import yellowBoxLogo from '../assets/what-i-do/podcasts/mindera-yellow-box-logo.webp';
import oQueArdeCuraLogo from '../assets/what-i-do/podcasts/o-que-arde-cura-logo.webp';

export const podcastsPage: PodcastsPage = {
  title: 'Podcasts',
  eyebrow: 'What I do',
  highlight: ['Podcasts'],
  description:
    'Episodes of Mindera Yellow Box — tech, business and cultural conversations relating to Mindera and Software Engineering — and O Que Arde Cura.',
};

export const shows: PodcastShow[] = [
  {
    slug: 'mindera-yellow-box',
    name: 'Mindera Yellow Box',
    tagline: [
      'Tech, business and cultural conversations relating to Mindera and Software Engineering in general',
    ],
    href: 'https://yellowbox.mindera.com/',
    logo: yellowBoxLogo,
    logoAlt:
      'Mindera Yellow Box podcast logo: a yellow hexagonal box inside a thin circle, overlapped by “Podcast” and the show’s name in bold black capitals',
    episodes: [
      {
        youtubeId: 'cm2SVDqsBGo',
        title: 'Everything iOS with André Pacheco Neves',
        season: 2,
        episode: 1,
      },
      {
        youtubeId: 'ujd-UUddBjg',
        title: 'IAG Loyalty with Stephen Scott (Scottie)',
        season: 2,
        episode: 2,
        format: 'Short',
      },
      {
        youtubeId: 'DxxX2nfIeGg',
        title: 'Product with Maria João Correia',
        season: 2,
        episode: 3,
      },
      {
        youtubeId: '_9MK0GTzDys',
        title: 'Exploring Data with Miguel Bayan Soares',
        season: 2,
        episode: 4,
      },
      {
        youtubeId: '0QWtnIQssoc',
        title: 'Mindera Labs with Cláudio Teixeira',
        season: 2,
        episode: 5,
      },
      {
        youtubeId: 'k-eWYXHNeoY',
        title: 'AI SDLC with Simão Belchior',
        season: 2,
        episode: 6,
      },
      {
        youtubeId: 'nvevAFssVwE',
        title: 'The fun and challenge of building games at Mindera Gaming with João Jacob',
        season: 2,
        episode: 9,
      },
      {
        youtubeId: 'EU7MBUKzT6Q',
        title: 'Inside Mindera with the Co-Founder Guilherme Almeida',
        season: 2,
        episode: 10,
      },
      {
        youtubeId: 'Y6fyODD0AMM',
        title: 'Mobile with Pedro Vicente',
        season: 2,
        episode: 11,
        format: 'Special Episode',
      },
      {
        youtubeId: 'YyBpcThWSic',
        title: 'Evolving AI with João Anes',
        season: 3,
        episode: 1,
      },
      {
        youtubeId: '1LFWNoHOuRg',
        title: 'Successful AI Adoption Strategy with Phill Gillespie',
        season: 3,
        episode: 2,
      },
      {
        youtubeId: 'bg8bJBu3yKs',
        title: 'Bridging the Gap Between Business and Technology',
        season: 3,
        episode: 3,
      },
      {
        youtubeId: 'nywaAsCfkwM',
        title: 'A Decade at Mindera with Diogo Borges',
        season: 3,
        episode: 4,
      },
    ],
  },
  {
    slug: 'o-que-arde-cura',
    name: 'O Que Arde Cura',
    tagline: [
      { em: 'Live Aid' },
      ' meets ',
      { em: 'Hot Ones' },
      " if Live Aid were done by amateurs and Hot Ones were done with fake chicken and both happened simultaneously in someone's living room.",
    ],
    href: 'https://sites.google.com/view/o-que-arde-cura/in%C3%ADcio',
    logo: oQueArdeCuraLogo,
    logoAlt:
      'O Que Arde Cura logo: “O Que Arde Cura!” hand-lettered in white on a red chilli pepper',
    episodes: [],
  },
];

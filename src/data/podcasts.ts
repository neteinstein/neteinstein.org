/**
 * Podcasts page content, ported from the Google Sites original
 * (https://www.neteinstein.org/what-i-do/podcasts — crawl snapshot in
 * `.crawl/report.json`).
 *
 * The original listed 13 YouTube embeds, all under Mindera Yellow Box, in the
 * order kept below. Episode titles are the videos' YouTube titles (oEmbed);
 * the season/episode numbers and format notes come from the same titles.
 *
 * O Que Arde Cura's episodes and After-Burns come from the show's own
 * episode page (https://oqueardecura.pedrovicente.pt/episódios), plus the
 * Marco Horácio After-Burn, which is only on the YouTube channel. Titles are
 * the guest charities as the YouTube titles name them. Season 2 episode 5
 * was private and never published, and episodes 3 and 4 had no After-Burn.
 */
import type { PodcastShow, PodcastsPage } from './types';

import yellowBoxLogo from '../assets/what-i-do/podcasts/mindera-yellow-box-logo.webp';
import oQueArdeCuraLogo from '../assets/what-i-do/podcasts/o-que-arde-cura-logo.webp';

export const podcastsPage: PodcastsPage = {
  title: 'Podcasts',
  eyebrow: 'What I do',
  highlight: ['Podcasts'],
  description:
    'Episodes of Mindera Yellow Box — tech, business and cultural conversations about Mindera and software engineering — and O Que Arde Cura.',
};

export const shows: PodcastShow[] = [
  {
    slug: 'mindera-yellow-box',
    name: 'Mindera Yellow Box',
    tagline: [
      'Tech, business and cultural conversations about Mindera and software engineering in general',
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
        youtubeId: 'UdWkB1iR_eI',
        title: 'Putting the QA to the test with Aires Oliveira',
        season: 2,
        episode: 8,
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
      {
        youtubeId: 'paFl2Tl7utE',
        title: 'AI and the Future of Platform Engineering with Hélder Pereira',
        season: 3,
        episode: 5,
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
      ", if Live Aid were done by amateurs and Hot Ones with fake chicken, and both happened at the same time in someone's living room.",
    ],
    href: 'https://oqueardecura.pedrovicente.pt/',
    logo: oQueArdeCuraLogo,
    logoAlt:
      'O Que Arde Cura logo: “O Que Arde Cura!” hand-lettered in white on a red chilli pepper',
    episodes: [
      { youtubeId: 'XcOzZtYeW_Y', title: 'A’Corda', season: 1, episode: 1 },
      { youtubeId: '9WC6ajznFrs', title: 'ASAS', season: 1, episode: 2 },
      { youtubeId: 'U7O_YngvprU', title: 'Just a Change', season: 1, episode: 3 },
      { youtubeId: 'a3jsU5kSnTI', title: 'Palhaços d’Opital', season: 1, episode: 4 },
      { youtubeId: '2zSe6tUM0e8', title: 'Vida Norte', season: 1, episode: 5 },
      {
        youtubeId: 'MbOvO-OM4Uc',
        title: 'Os Quatro e Meia & União Audiovisual',
        season: 1,
        episode: 6,
        format: 'Christmas Special',
      },
      { youtubeId: 'FYATOXFKDxI', title: 'Welcome to Season 2', season: 2, episode: 0 },
      { youtubeId: 'V4G_IPLIAxQ', title: 'Vencer Autismo', season: 2, episode: 1 },
      { youtubeId: 'z02jYcILe3g', title: 'Bagos d’Ouro', season: 2, episode: 2 },
      { youtubeId: 'HSzNmi4XbGM', title: 'U.Dream', season: 2, episode: 3 },
      { youtubeId: 'sUcnM7mST5M', title: 'Pedalar Sem Idade', season: 2, episode: 4 },
    ],
    afterBurns: [
      { youtubeId: 'q7WBN5UKkts', title: 'A’Corda', season: 1, episode: 1 },
      { youtubeId: 'xf-ofpNQuwU', title: 'ASAS', season: 1, episode: 2 },
      { youtubeId: 'YmVxZboiTfU', title: 'Just a Change', season: 1, episode: 3 },
      { youtubeId: 'uMB44U-1Gu8', title: 'Nilton & Palhaços d’Opital', season: 1, episode: 4 },
      { youtubeId: 'Y6LCeyV2zeU', title: 'Vida Norte', season: 1, episode: 5 },
      {
        youtubeId: 'JoBxNwsDQ5c',
        title: 'Os Quatro e Meia & União Audiovisual',
        season: 1,
        episode: 6,
      },
      { youtubeId: '6hwfNql8WpQ', title: 'Welcome to Season 2', season: 2, episode: 0 },
      { youtubeId: 'IlFObOruuiI', title: 'With Marco Horácio', season: 2 },
      { youtubeId: 'LBMBN2TkCzk', title: 'Vencer Autismo', season: 2, episode: 1 },
      { youtubeId: '_MIFMCytKLM', title: 'Bagos d’Ouro', season: 2, episode: 2 },
    ],
  },
];

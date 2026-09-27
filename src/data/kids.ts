/**
 * /porto/with-kids — the "places for kids" table, ported from the Google Sites
 * original (https://www.neteinstein.org/porto/with-kids — crawl snapshot in
 * `.crawl/report.json`). The page's heading, lead and cost note live in
 * `src/content/pages/with-kids.mdx`.
 *
 * The original repeats the Ilha da Diversão row twice, byte-for-byte (only an
 * inert `font-variant: normal` style differs — a copy-paste leftover), so it
 * is listed once here.
 */
import type { KidsColumn, KidsPhoto, KidsPlace } from './types';

import indoorPlayground from '../assets/porto/with-kids/indoor-playground.webp';
import workInProgress from '../assets/porto/with-kids/work-in-progress-sign.webp';

export const kidsHero: KidsPhoto = {
  image: indoorPlayground,
  alt: 'Children playing in a big indoor playground with green and orange slides, climbing nets and soft-play blocks',
};

export const kidsWorkInProgress: KidsPhoto = {
  image: workInProgress,
  alt: 'Yellow "Work in progress" sign with a worker digging with a shovel',
};

export const kidsColumns: KidsColumn[] = [
  { key: 'where', label: 'Where?' },
  { key: 'name', label: 'Name' },
  { key: 'setting', label: 'Indoor/Outdoor' },
  { key: 'cost', label: 'Estimated cost per child', footnote: '*' },
  { key: 'ages', label: 'Ages' },
  { key: 'children', label: 'Min/Max children' },
  { key: 'duration', label: 'Duration' },
  { key: 'notes', label: 'Notes' },
];

export const kidsPlaces: KidsPlace[] = [
  {
    where: 'Ermesinde',
    name: { label: 'Ilha da Diversão', href: 'http://ilhadadiversao.pt/precos/' },
    setting: 'Indoor',
    cost: '8€ - 11.50€',
    children: 'Min: 12-20',
    notes: [
      {
        label: 'Schedules:',
        kind: 'times',
        items: ['10H30 - 12H30', '15H00 - 17H00', '17H30 - 19H30'],
      },
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Bolo de Aniversário',
          'Água ou Sumo',
          'Pão com Fiambre/Queijo',
          'Batatas fritas',
          'Convites',
        ],
      },
    ],
  },
];

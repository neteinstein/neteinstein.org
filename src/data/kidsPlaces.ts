import type { KidsPlace } from './types';

/**
 * Places in and around Porto to take kids to play or throw a birthday party.
 * Ported from the Google Sites original and re-checked against each venue's
 * own website (September 2026) for current pricing and details.
 */
export const kidsPlaces: KidsPlace[] = [
  {
    name: 'Ilha da Diversão',
    area: 'Ermesinde',
    setting: 'indoor',
    costMin: 9,
    costMax: 12.5,
    minChildren: 12,
    maxChildren: 20,
    duration: '2h (parties) / 3h (space rental)',
    schedules: ['Sat, Sun & holidays: 10H30 - 12H30', '15H00 - 17H00', '17H30 - 19H30'],
    includes: ['Birthday cake', 'Water or juice', 'Ham/cheese bread rolls', 'Chips', 'Invitations'],
    notes:
      'Three party menus (Mega 9€, Pirata 11€, Sereia 12.50€ per child) plus space-only rental ' +
      'on weekdays (150€ for 3h, max 30 children).',
    url: 'https://ilhadadiversao.pt/precos/',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Travessa+Doutor+Egas+Moniz+20+4445-402+Ermesinde',
  },
];

/** Footnote text shown next to the cost column, anchored at #cost-note. */
export const COST_NOTE =
  'Estimated cost range per child, taken from each venue’s own published prices as of ' +
  'September 2026 — always confirm directly with the venue before booking, prices change.';

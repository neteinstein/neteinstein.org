import { describe, expect, it } from 'vitest';
import type { GuideCategory, GuideGroup, KidsPlace } from '../../src/data/types';
import { normalise } from '../../src/lib/search';
import { buildIndex as buildGameIndex, plainText } from '../../src/components/games/search';
import {
  acceptsAge,
  buildIndex as buildKidsIndex,
  distinctSettings,
  parseAges,
  parseCost,
  sortPlaces,
} from '../../src/components/kids/search';
import {
  buildIndex as buildPlaceIndex,
  countOf,
  placesOf,
} from '../../src/components/porto/search';

describe('normalise', () => {
  it('lower-cases and strips accents, so "sao bento" finds "São Bento"', () => {
    expect(normalise('São Bento')).toBe('sao bento');
    expect(normalise('Balão')).toBe('balao');
    expect(normalise('FRANCESINHA')).toBe('francesinha');
  });
});

const photo = { src: '/x.webp', srcSet: '', width: 10, height: 10, alt: '' };

const groups: GuideGroup[] = [
  {
    id: 'eat',
    title: 'Where to eat?',
    places: [
      {
        id: 'francesinha',
        title: 'Francesinha',
        subtitle: 'The icon',
        notes: ['Slightly spicy'],
        photos: [photo],
        venues: [{ name: 'Café Santiago', note: 'the classic' }],
      },
    ],
    subgroups: [
      {
        id: 'sweets',
        title: 'Sweets',
        places: [
          {
            id: 'eclair',
            photos: [photo],
            venues: [{ name: 'Leitaria da Quinta do Paço' }],
          },
        ],
      },
    ],
  },
];

describe('porto guide search', () => {
  it('collects places across subgroups, tagged with their subgroup', () => {
    const entries = placesOf(groups[0]!);
    expect(entries.map(({ place, sid }) => [place.id, sid])).toEqual([
      ['francesinha', undefined],
      ['eclair', 'sweets'],
    ]);
    expect(countOf(groups[0]!)).toBe(2);
  });

  it('indexes titles, notes, venues and section names, accent-free', () => {
    const index = buildPlaceIndex(groups);
    expect(index.get('francesinha')).toContain('cafe santiago');
    expect(index.get('francesinha')).toContain('slightly spicy');
    expect(index.get('francesinha')).toContain('where to eat?');
    // A place with no title is still found by its venue and subgroup.
    expect(index.get('eclair')).toContain('leitaria da quinta do paco');
    expect(index.get('eclair')).toContain('sweets');
  });
});

const kidsPlaces: KidsPlace[] = [
  {
    where: { label: 'Porto', href: 'https://maps.example/porto' },
    name: { label: 'World of Discoveries', href: 'https://example.com/wod' },
    setting: 'Indoor',
    cost: '€€',
    ages: '4+',
    children: 'Yes',
    duration: '2h',
    notes: [{ label: 'Tips:', kind: 'info', items: ['Weekdays are quieter'] }],
  },
  {
    where: { label: 'Gaia', href: 'https://maps.example/gaia' },
    name: { label: 'Teleférico', href: 'https://example.com/cable-car' },
    setting: 'Outdoor',
    notes: [],
  },
];

describe('kids guide search', () => {
  it('lists distinct settings in first-seen order', () => {
    expect(distinctSettings(kidsPlaces)).toEqual(['Indoor', 'Outdoor']);
    expect(distinctSettings([])).toEqual([]);
  });

  it('indexes every column and note, accent-free', () => {
    const index = buildKidsIndex(kidsPlaces);
    expect(index.get(kidsPlaces[0]!)).toContain('world of discoveries');
    expect(index.get(kidsPlaces[0]!)).toContain('weekdays are quieter');
    expect(index.get(kidsPlaces[1]!)).toContain('teleferico');
  });
});

describe('kids guide sorting and age filter', () => {
  const place = (name: string, cost?: string, ages?: string): KidsPlace => ({
    where: { label: 'Porto', href: '#' },
    name: { label: name, href: '#' },
    setting: 'Indoor',
    cost,
    ages,
    notes: [],
  });
  const list = [
    place('Zebra', '15€'),
    place('Ágata', 'From 9€', '6+'),
    place('Bola', '9€ to 12€', '2-12'),
    place('Cubo'),
  ];

  it('parses the lowest price and the age range', () => {
    expect(parseCost('13.50€ to 17€')).toBe(13.5);
    expect(parseCost(undefined)).toBeUndefined();
    expect(parseAges('8-18 (CosmoTot: 1-4)')).toEqual({ min: 8, max: 18 });
    expect(parseAges('6+')).toEqual({ min: 6, max: Infinity });
    expect(parseAges(undefined)).toBeUndefined();
  });

  it('sorts by name, ignoring accents', () => {
    expect(sortPlaces(list, 'name').map((p) => p.name.label)).toEqual([
      'Ágata',
      'Bola',
      'Cubo',
      'Zebra',
    ]);
  });

  it('sorts by price with unpriced places last', () => {
    expect(sortPlaces(list, 'price-asc').map((p) => p.name.label)).toEqual([
      'Ágata',
      'Bola',
      'Zebra',
      'Cubo',
    ]);
    expect(sortPlaces(list, 'price-desc').map((p) => p.name.label)).toEqual([
      'Zebra',
      'Ágata',
      'Bola',
      'Cubo',
    ]);
  });

  it('keeps places that take the age or list none', () => {
    expect(list.filter((p) => acceptsAge(p, 3)).map((p) => p.name.label)).toEqual([
      'Zebra',
      'Bola',
      'Cubo',
    ]);
    expect(acceptsAge(list[1]!, 10)).toBe(true);
  });
});

describe('games guide search', () => {
  it('reduces sheet links to their text', () => {
    expect(plainText('See [the rules](https://example.com/rules) first')).toBe(
      'See the rules first',
    );
    expect(plainText('No links here')).toBe('No links here');
  });

  it('indexes rules and tips with their links reduced to text', () => {
    const categories: GuideCategory[] = [
      {
        id: 'ice',
        emoji: '🎈',
        title: 'Icebreakers',
        short: 'Ice',
        intro: 'Games to open a session with.',
        games: [
          {
            id: 'balloon',
            number: 1,
            title: 'Balão à solta',
            players: '4+',
            age: '6+',
            duration: '10m',
            setting: 'Indoor',
            where: ['indoor'],
            materials: ['Balloons'],
            setup: [],
            goal: 'Keep it up',
            rules: ['Read [the full rules](https://example.com) before playing'],
            tips: [],
            sources: [{ label: 'Street games book', href: 'https://example.com' }],
            image: { src: '', srcSet: '', width: 1, height: 1, alt: '' },
          },
        ],
      },
    ];
    const index = buildGameIndex(categories);
    expect(index.get('balloon')).toContain('balao a solta');
    expect(index.get('balloon')).toContain('read the full rules before playing');
    expect(index.get('balloon')).not.toContain('https://example.com');
  });
});

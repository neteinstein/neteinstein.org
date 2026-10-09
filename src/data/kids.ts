/**
 * /porto/with-kids — the "places for kids" table, ported from the Google Sites
 * original (https://www.neteinstein.org/porto/with-kids — crawl snapshot in
 * `.crawl/report.json`), plus places researched separately for parties and
 * play days out. The page's heading, lead and cost note live in
 * `src/content/pages/with-kids.mdx`.
 *
 * Re-checked against each venue's own website/socials in September 2026 —
 * see the PR that introduced this comment for the per-venue research. Three
 * entries (Divertidamente.pt, Play Point, Sala de Jogos) have no verifiable
 * website, social page or address anywhere online; kept as-is rather than
 * removed, since they may be real informal venues just without a web
 * presence, but flagged here as unconfirmed.
 */
import type { KidsColumn, KidsPhoto, KidsPlace } from './types';

import indoorPlayground from '../assets/porto/with-kids/indoor-playground.webp';

const maps = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const kidsHero: KidsPhoto = {
  image: indoorPlayground,
  alt: 'Children playing in a big indoor playground with green and orange slides, climbing nets and soft-play blocks',
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
    where: { label: 'Ermesinde', href: maps('Travessa Doutor Egas Moniz 20, 4445-402 Ermesinde') },
    name: { label: 'Ilha da Diversão', href: 'https://ilhadadiversao.pt/precos/' },
    setting: 'Indoor',
    cost: '9€ to 12.50€',
    children: 'Min: 12 or 20',
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
          'Birthday cake',
          'Water or juice',
          'Ham or cheese sandwich',
          'Crisps',
          'Invitations',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Venue hire (Mon-Fri, except public holidays): 150€, 3h, max. 30 children (17h30-20h30, 18h00-21h00 or 18h30-21h30)',
        ],
      },
    ],
  },
  {
    where: { label: 'Matosinhos', href: maps('Av. Menéres 868, 4450-190 Matosinhos') },
    name: { label: 'Camelot Park', href: 'https://camelotpark.pt/' },
    setting: 'Indoor',
    cost: '13.50€ to 17€',
    ages: '2-12',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Birthday cake',
          'Cheese roll',
          'Ham roll',
          'Crisps',
          'Gummies and sweets',
          'Ice Tea',
          'Still water',
          'Invitations',
          'Gift for the birthday child',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Menus: Merlin 13.50€, King Arthur 15€, Camelot 17€ (pricier tiers add dessert/party favours)',
          'Supervisors included, any day of the week',
          'Non-refundable deposit; confirm the number of children 48h before',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Science4you Porto') },
    name: { label: 'Science4you', href: 'https://www.science4you.pt/festas-aniversario-infantis' },
    setting: 'Indoor',
    cost: 'From 250€ (group)',
    ages: '6-12',
    duration: '1h30 + snack',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Price per group, not per child: up to 12 children 250€, 13-18: 330€, 19-25: 420€',
          'Food (snack) extra: 4€-8€/child',
          'Held at a partner venue (e.g. Porto Youth Hostel), not at a fixed location',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Rua Fonte de Outeiro 272, 4200-303 Paranhos, Porto') },
    name: {
      label: 'Pony Club do Porto',
      href: 'http://www.ponyclubdoporto.org/festas-de-aniversario/',
    },
    setting: 'Indoor/Outdoor',
    cost: '12€',
    duration: '1h30',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Event room hire: 50€ to 70€',
          'Prices not published online — confirm by phone: 228 318 288',
        ],
      },
    ],
  },
  {
    where: { label: 'Valongo', href: maps('Avenida do Conhecimento 75, 4440-452 Valongo') },
    name: { label: 'Mundo do Leo', href: 'https://mundodoleo.com/pages/reservas' },
    setting: 'Indoor',
    cost: '12.50€ to 20.50€',
    ages: '4-14',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Menus: Mini 12.50€-13.50€, Standard 13.50€-14.50€, Premium 15€-16€, Health Pro 19.50€-20.50€',
          'Includes supervised activities, snack, face painting, digital invitation; Premium adds party favours and a gift',
          'Outdoor area only open June-September',
          'Deposit: 50€',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Rua Professor António Cruz 289, Porto') },
    name: { label: 'Piruças Park', href: 'https://pirucaspark.com/horarios-e-precos/' },
    setting: 'Indoor',
    cost: '15€',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Good for: little ones',
          'Package: 150€ up to 10 children + 15€ per extra child',
          'Weekends and public holidays; cake extra (22€/kg)',
        ],
      },
    ],
  },
  {
    where: { label: 'Gondomar', href: maps('Rua da Cal 670, 4420-047 Gondomar') },
    name: { label: 'Gondolândia', href: 'https://www.gondolandia.com/index.php/precario' },
    setting: 'Indoor/Outdoor',
    cost: '8€/hour per child',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Current rate on the website is hourly: 8€/h per child, 2€/h per accompanying adult',
          'Exclusive evening hire of the park: 300€',
          'Unclear whether the old party menus (13€-17€, pony ride +2€/child) still exist — confirm by phone: 224 672 381',
        ],
      },
    ],
  },
  {
    where: {
      label: 'Vila do Conde',
      href: maps('Rua António Gonçalves Pousado 9, 4480-888 Vila do Conde'),
    },
    name: { label: 'OneSoul Party', href: 'https://www.onesoul.pt/party-menu-para-festas' },
    setting: 'Indoor',
    cost: '13€ to 18€',
    ages: '4-14',
    children: '15-40',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          '5% discount with 25+ guests, 10% with 35+ guests',
          'Several packages (Party, Party 1.5-4); exact prices only in images on the website — confirm directly',
        ],
      },
    ],
  },
  {
    where: { label: 'Baguim do Monte', href: maps('Rua Formiga 107, 4435-706 Baguim do Monte') },
    name: { label: 'Candy Fun Park', href: 'https://candyfunpark.pt/menus-e-reservas/' },
    setting: 'Indoor',
    cost: '15.50€ to 17€',
    ages: '4-10',
    children: '10-34',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Menus: Candy 15.50€, Funny 17€, Healthy 17€',
          'Includes drinks, snacks, choice of cake, gift for the birthday child, invitations',
          'Non-slip socks extra: 1€-1.50€/child',
        ],
      },
    ],
  },
  {
    where: { label: 'Gaia', href: maps('Rua de Guilherme Braga 21, 4400-174 Vila Nova de Gaia') },
    name: {
      label: 'Museu do Chocolate',
      href: 'https://www.wow.pt/museums-and-experiences/the-chocolate-story-chocolate-and-cacao-museum',
    },
    setting: 'Indoor',
    cost: '25€',
    children: 'Min: 10',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Part of the WOW Porto cultural district (The Chocolate Story)',
          'Birthday package includes a light meal + lunchbox + cake',
          'Not confirmed whether a cheaper price tier exists',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Divertidamente.pt Porto') },
    name: {
      label: 'Divertidamente.pt',
      href: 'https://www.google.com/search?q=Divertidamente.pt+Porto+Porto',
    },
    setting: 'Indoor',
    cost: '15€ to 18€',
    children: '10-40',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Could not confirm this venue exists — no website or social media found'],
      },
    ],
  },
  {
    where: {
      label: 'Leça da Palmeira',
      href: maps('Rua Eng. Fernando Pinto de Oliveira 56, 4450-614 Leça da Palmeira'),
    },
    name: { label: 'Ateliê de Festas', href: 'https://ateliedefestas.pt/' },
    setting: 'Indoor',
    cost: '15€ to 19€',
    ages: '2-12',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Birthday cake (simple decoration)',
          'Choose 1 flavour: yoghurt, orange, carrot or chocolate',
          'Choose 1 topping: icing sugar or chocolate with sprinkles',
          'Water and still juice',
          'Cheese or ham roll',
          'Crisps',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Weekdays: 15€-16€; weekends/public holidays: 16€-19€; evening slot: +2.50€/child',
          'Invitations included (max. 25)',
        ],
      },
    ],
  },
  {
    where: {
      label: 'São Mamede de Infesta',
      href: maps('Rua da Conceição 982, 4465-098 São Mamede de Infesta'),
    },
    name: { label: 'kidoos', href: 'https://www.kidoos.pt/' },
    setting: 'Indoor',
    cost: '15€ to 20€',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Prices only shown as an image on the website — not confirmed in text',
          'Opening hours: Mon-Fri 16h-20h, Sat/Sun/public holidays 9h-20h',
        ],
      },
    ],
  },
  {
    where: { label: 'Matosinhos', href: maps('Rua Sousa Aroso 560, 4450-287 Matosinhos') },
    name: { label: 'Piratas à Solta', href: 'https://www.piratasasolta.com/' },
    setting: 'Indoor',
    cost: '15€ to 19€',
    ages: '5-16',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Birthday cake',
          'Still juice and water',
          'Digital invitation',
          'Gift for the birthday child',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Daytime (no dinner): up to 12 years old; evening (with dinner): up to 16',
          '18€/child confirmed for a 2h daytime party without dinner',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Rua do Campo Alegre 1191, 4150-181 Porto') },
    name: { label: 'Museu da Biodiversidade', href: 'https://mhnc.up.pt/aniversarios-tematicos/' },
    setting: 'Indoor',
    cost: '15€',
    ages: '6-12',
    children: '12-30',
    duration: '3h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Snack not included', '5 party themes available', 'Saturdays and Sundays, 15h-18h'],
      },
    ],
  },
  {
    where: { label: 'Alfena', href: maps('Rua Real 6, 4445-188 Alfena') },
    name: { label: 'Mundo em Festa', href: 'https://www.mundoemfesta.com/festas-de-aniversario' },
    setting: 'Indoor/Outdoor',
    cost: '14.50€ to 21.50€',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Menus: Diversão 14.50€ (no food, min. 5 children), Radical 17.50€, Aventura 21.50€ (min. 10 children, with food)',
        ],
      },
    ],
  },
  {
    where: {
      label: 'Matosinhos',
      href: maps('Avenida General Norton de Matos 1177, 4450-206 Matosinhos'),
    },
    name: { label: 'Surf Aventura', href: 'https://www.surfaventura.com/aniversarios.php' },
    setting: 'Outdoor',
    cost: '16€ to 25€',
    ages: '6+',
    children: 'Min: 8',
    duration: '1h - 2h30 + snack',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Surf lesson: 18€ (groups of 8-15) or 16€ (16-30); surf + games: 20€/16€; combined with Sea Life: 25€/23€',
          'Food not included — each family brings its own snack',
          'Meeting point: Matosinhos beach / Praça Guilherme Pinto',
        ],
      },
    ],
  },
  {
    where: { label: 'Gaia', href: maps('R. 5 de Outubro 4503, 4430-809 Avintes') },
    name: {
      label: 'Zoo Santo Inácio',
      href: 'https://www.zoosantoinacio.com/festas-de-aniversario/',
    },
    setting: 'Outdoor',
    cost: '16.90€ to 18.90€',
    ages: '3-13',
    children: '12-30',
    duration: '2h30',
    notes: [
      {
        label: 'Schedules:',
        kind: 'times',
        items: ['10h00 - 12h30', '14h30 - 17h00', '18h30 - 21h00 (Savage Lights, extra charge)'],
      },
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Menu 1 (16.90€): ham rolls, crisps, popcorn, water and juice, birthday cake',
          'Menu 2 (18.90€): assorted savouries, crisps, popcorn, water and juice, birthday cake',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: ['Good for: all ages', 'Any day of the week'],
      },
    ],
  },
  {
    where: {
      label: 'Vila do Conde',
      href: maps('Rua das Flores, Azurara, 4480-190 Vila do Conde'),
    },
    name: {
      label: 'Azurara Parque Aventura',
      href: 'https://www.azurara-parque-aventura.com/programas/aniversarios',
    },
    setting: 'Outdoor',
    cost: 'From 9€',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Programmes by age group: 3-5, 6-11, 12+',
          'Non-refundable deposit: 50€',
          'The "from 9€" price is much lower than the old figure (17€) — confirm by phone: 911 735 237',
        ],
      },
    ],
  },
  {
    where: { label: 'Avintes', href: maps('Rua Estádio do F.C. de Avintes 112, 4430-826 Avintes') },
    name: {
      label: 'Playcenter',
      href: 'https://playcenter.pt/playcenter-kids-avintes/aniversarios/',
    },
    setting: 'Indoor',
    cost: '14€ to 25€',
    children: 'Min: 10',
    duration: '2h - 3h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Birthday cake, juices, crisps, popcorn',
          'Higher menus add mini hot dogs or pizza',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Playcenter party 14€/15€ (2h), Premium party 17€/19€ (2h30), Supreme party 23€/25€ (3h) — weekday/weekend',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Rua Engenheiro Ferreira Dias 874, 4100-246 Porto') },
    name: { label: 'Jumpers', href: 'https://www.jumpers.pt/pt/aniversarios' },
    setting: 'Indoor',
    cost: '17€ - 30€',
    ages: '1-99',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Any day of the week',
          '30 min briefing before + 30 min in the party room afterwards',
          'Opening hours: Mon-Fri 14h30-20h, Sat 9h30-20h, Sun 9h30-19h, public holidays 10h30-19h',
          'Price per child not confirmed in this check',
        ],
      },
    ],
  },
  {
    where: {
      label: 'Colégio Alemão, Porto',
      href: maps('Rua Guerra Junqueiro 162, 4150-386 Porto'),
    },
    name: {
      label: '2havefun',
      href: 'https://2havefun.pt/',
    },
    setting: 'Indoor/Outdoor',
    cost: '12€ to 24€',
    ages: '4+ (Fun Mini: under 4)',
    children: 'Min: 18',
    duration: '2h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Cheese or ham sandwich',
          'Jelly',
          'Popcorn',
          'Fruit',
          'Biscuits',
          'Crisps',
          'Drinks',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Fun Soccer 20€/17€/12€, Fun Gym 23€/18€/13€, Fun Mini 24€/19€/14€ (price drops with more children: 18, 19-30, 31+)',
          'Weekends / public holidays only',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('R. António da Silva Marinho 131, 4100-063 Porto') },
    name: {
      label: 'Square Fun Park',
      href: 'https://www.squarefunpark.pt/',
    },
    setting: 'Indoor',
    cost: 'From 16€',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Trampolines',
          '30 min briefing included',
          'The "from 16€" price is lower than the old figure (18€-22€) — confirm by phone: 931 369 347',
        ],
      },
    ],
  },
  {
    where: { label: 'Alfena', href: maps('Rua D. Afonso IV 146, Alfena') },
    name: {
      label: 'Mafarricos Fun Park',
      href: 'https://www.instagram.com/mafarricosfunpark/',
    },
    setting: 'Indoor',
    cost: 'From 13€',
    ages: '3-12',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'New venue (opened in 2025) — no website of its own, only Instagram/Facebook',
          'The "from 13€" price may be an opening offer — confirm by phone: 939 922 210',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Avenida da Boavista 604, 4149-071 Porto') },
    name: {
      label: 'Casa da Música',
      href: 'https://www.casadamusica.com/pt/organizacao-de-eventos/aniversario-na-casa/escolhe-o-lanche/?lang=pt',
    },
    setting: 'Indoor',
    ages: '4-12',
    children: '10-30',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          '15 party themes available; includes the chosen activity + snack + cake + party favour',
          'Book 5 working days in advance; final number of children up to 48h before',
          'Price per child not confirmed in this check — the pricing page blocked automated access',
        ],
      },
    ],
  },
  {
    where: { label: 'Gaia', href: maps('Av. Vasco da Gama 774, 4430-247 Vila Nova de Gaia') },
    name: { label: 'Feijão Verde', href: 'https://feijao-verde.com/parque/gaia' },
    setting: 'Indoor/Outdoor',
    cost: '19€ to 32€',
    children: 'Min: 10',
    duration: '1h30 - 3h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Mini party (1h30, 19€, no food), Mega party (2h, 21€, with snack), Premium party (3h, 32€, with snack + Natura area)',
          '15% discount when paying in full on booking (offer until 31/12/2026)',
        ],
      },
    ],
  },
  {
    where: { label: 'Matosinhos', href: maps('Rua Abade Mondego 241, 4455-489 Matosinhos') },
    name: { label: 'Kidszone', href: 'https://kidszone.jumpyard.pt/' },
    setting: 'Indoor',
    cost: '17€ to 24€',
    ages: '0-12',
    children: 'Min: 6, Max: 25',
    duration: '3h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Mini pack 20€ (17€ Mon-Fri), no catering; Midi pack 24€ (21€ Mon-Fri), with catering',
          '1 accompanying adult per child goes in free',
        ],
      },
    ],
  },
  {
    where: {
      label: 'Matosinhos',
      href: maps('1ª Rua Particular do Castelo do Queijo, 4100-379 Porto'),
    },
    name: {
      label: 'Sea Life',
      href: 'https://www.visitsealife.com/porto/visitar/experiencias-vip/festas-de-aniversario/',
    },
    setting: 'Indoor/Outdoor',
    cost: '25€ to 27€',
    ages: '5-12',
    children: '15-25',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Recife Encantado menu 25€ or Oceano Saudável 27€; guaranteed minimum spend of 375€',
          'Weekends only, 10h or 15h; non-refundable 100€ deposit',
        ],
      },
    ],
  },
  {
    where: {
      label: 'Gaia',
      href: maps('Avenida dos Arcos do Sardão 361, 4430-434 Vila Nova de Gaia'),
    },
    name: { label: 'Hangar 2020', href: 'https://www.hangar2020.pt/pt/pages/aniversarios' },
    setting: 'Indoor',
    cost: '20€ - 25€',
    ages: '8-18 (CosmoTot: 1-4)',
    children: 'Min: 10',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          '30 min briefing + 60 min arena + 30 min snack, Hangar2020 socks included',
          'Price per child not published — confirm when booking',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Rua de Miragaia 106, 4050-387 Porto') },
    name: { label: 'World of Discoveries', href: 'https://www.worldofdiscoveries.com/' },
    setting: 'Indoor',
    cost: '20€',
    children: 'Min: 15',
    duration: '2h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Cheese/ham rolls',
          'sweet popcorn',
          'chocolate mousse',
          'jelly',
          'water and orange juice',
          'birthday cake.',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Party package not published on the website — confirm by email: info@worldofdiscoveries.com',
        ],
      },
    ],
  },
  {
    where: { label: 'Perafita', href: maps('Rua Oriental 573, 4455-516 Perafita') },
    name: { label: 'LaserX', href: 'https://laserx.pt/' },
    setting: 'Indoor',
    cost: '24€',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Invasão party: 2h in a private room, 40 min of laser tag + snack - 24€/person',
          'Apocalipse party: 2h in a private room, 40 min of laser tag + lunch/dinner - 30€/person',
          'Extra hour: 10€/person | Themed decoration: +30€',
          'Current prices not confirmed on the website — confirm by phone: 968 177 432',
        ],
      },
    ],
  },
  {
    where: { label: 'Matosinhos', href: maps('Rua Abade Mondego 241, 4455-489 Matosinhos') },
    name: { label: 'Jumpyard', href: 'https://jumpyard.pt/matosinhos/festas-aniversario/' },
    setting: 'Indoor',
    cost: '20€ to 28€',
    ages: '4+',
    children: 'Min: 6, Max: 25',
    duration: '1h30',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Mini 20€ (no catering), Midi 24€, Maxi 28€ (with SkyRider); 3€/child discount Mon-Fri',
          '1h of activity + 30 min in the party room; extendable by 2h for 8€/child',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Auchan Maia, N14, 4475-045 Maia') },
    name: { label: 'Dreamfly', href: 'https://dreamfly.eu/en/porto-2/' },
    setting: 'Indoor',
    cost: '37€',
    ages: '4-12',
    children: 'Min: 5',
    duration: '1h30',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          '2 flights per child, instructor briefing/training, equipment and flight certificate included',
          'Despite the name "Dreamfly Porto", it\'s in Maia (next to Auchan)',
        ],
      },
    ],
  },
  {
    where: { label: 'Maia', href: maps('Águas Santas, Maia') },
    name: { label: 'Carambolas', href: 'https://www.google.com/search?q=Carambolas+Maia+Porto' },
    setting: 'Indoor',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['No website — only on Instagram (@carambolas_pt) and Facebook'],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Rua Direita das Campinas 327, 4100-207 Porto') },
    name: {
      label: 'Little Gym Pinheiro Manso',
      href: 'https://pinheiromanso.thelittlegym.pt/en/',
    },
    setting: 'Indoor',
    ages: '1-12',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          '75-90 min of gym and sports activities + 30-45 min of snack/celebration',
          'Saturdays and Sundays only, venue booked exclusively',
          'Price not published — confirm by phone: 932 650 481',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Rua de Cedofeita 230, 4050-174 Porto') },
    name: {
      label: 'Lockers & Games',
      href: 'https://www.instagram.com/lockers_and_games/',
    },
    setting: 'Indoor',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Arcades',
          'No published birthday package — no website of its own, only Instagram/Facebook',
        ],
      },
    ],
  },
  {
    where: { label: 'Matosinhos', href: maps('Lunita Park, Guifões, Matosinhos') },
    name: {
      label: 'Lunita Park',
      href: 'https://www.lunitapark.pt/marcarfestas',
    },
    setting: 'Outdoor',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Giant inflatable slide, go-kart track, football pitch, escape room, trampoline, playhouses, face painting',
          'Prices not published — confirm directly',
        ],
      },
    ],
  },
  {
    where: { label: 'Penafiel', href: maps('Rua Santo André 1279, 4560-221 Marecos, Penafiel') },
    name: { label: 'Magikland', href: 'https://magikland.pt/precario/' },
    setting: 'Outdoor',
    duration: 'All day',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Up to 2 years old: free | 3-12: 14€-15€ (varies by season) | 13-64: 22.50€-23.50€ | 65-75: 17€-18€ | 76+: free',
          'Group discount: 10% with 50+ people, 15% with 100+; school groups (20+): 12.50€/pupil',
          'Open from March/April to September',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Museu Nacional da Imprensa, Porto') },
    name: {
      label: 'Museu Nacional da Imprensa',
      href: 'https://www.museudaimprensa.pt/',
    },
    setting: 'Indoor',
    children: '10-25',
    notes: [
      {
        label: 'Schedules:',
        kind: 'times',
        items: ['Morning: from 10h', 'Afternoon: from 15h'],
      },
      {
        label: 'Includes:',
        kind: 'includes',
        items: ['Cheese / ham sandwich', 'Crisps', 'Juice', 'Water', 'Sweets'],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: ["Details not recently confirmed — the website's birthday page is not reachable"],
      },
    ],
  },
  {
    where: {
      label: 'São João da Madeira',
      href: maps('Rua Oliveira Júnior 501, 3700-204 São João da Madeira'),
    },
    name: {
      label: 'Museu da Chapelaria',
      href: 'https://www.museudachapelaria.pt/pt/festas-de-aniversario',
    },
    setting: 'Indoor',
    ages: '4-11',
    children: '10-25',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          "It's in São João da Madeira, not in Porto",
          'Includes snack, activities/games and a museum visit; only one birthday at a time',
          'Price and number of children not confirmed — the old "10-25" is unconfirmed',
        ],
      },
    ],
  },
  {
    where: {
      label: 'Vagos',
      href: maps('Rua dos Bombeiros Voluntários de Vagos 235, 3840-412 Vagos'),
    },
    name: { label: 'Museu do Brincar', href: 'https://museudobrincar.com/' },
    setting: 'Indoor',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          "It's near Aveiro, much further from Porto (60-70km) than the other places on this list",
          'General admission: 3€/person (free up to 3 years old); party prices not published',
        ],
      },
    ],
  },
  {
    where: { label: 'Rio Tinto', href: maps('Parque Aventura da Lipor') },
    name: {
      label: 'Parque Aventura da Lipor',
      href: 'https://www.lipor.pt/pt/sensibilizar/parque-aventura-e-trilho-ecologico/aventure-se/',
    },
    setting: 'Outdoor',
    cost: 'Free',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Nature trail: every day, 8h-20h',
          'Adventure park: Tuesdays, Thursdays and weekends, May-September, 10h-20h',
        ],
      },
    ],
  },
  {
    where: { label: 'Gaia', href: maps('Play Point Gaia') },
    name: { label: 'Play Point', href: 'https://www.google.com/search?q=Play+Point+Gaia+Porto' },
    setting: 'Indoor',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Arcades', 'Could not confirm this venue still exists'],
      },
    ],
  },
  {
    where: { label: 'Sandim', href: maps('Sandim, Vila Nova de Gaia') },
    name: {
      label: 'Sala de Jogos',
      href: 'https://www.google.com/search?q=Sala+de+Jogos+Sandim+Porto',
    },
    setting: 'Indoor',
    children: 'Max: 40',
    duration: '4h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Room hire: 200€ (10h-14h or 15h30-19h30)',
          'Generic name — could not find this venue online to confirm it',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Rua Dom João de Castro 210, 4150-417 Porto') },
    name: {
      label: 'Serralves',
      href: 'https://www.serralves.pt/en/institucional-serralves/festas-de-aniversario/',
    },
    setting: 'Indoor/Outdoor',
    cost: '16€ to 30€',
    ages: '5-12',
    children: '12-30',
    duration: '2h30',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Price varies by group size and menu: 12-15 children 20€-30€, 16-23: 18€-28€, 24-30: 16€-26€',
          '4 themes available; Saturdays, Sundays and public holidays, 10h-12h30 or 14h-16h30',
          '10% discount for "Friends of Serralves"',
        ],
      },
    ],
  },
];

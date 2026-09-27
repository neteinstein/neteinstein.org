/**
 * /porto/with-kids — the "places for kids" table, ported from the Google Sites
 * original (https://www.neteinstein.org/porto/with-kids — crawl snapshot in
 * `.crawl/report.json`), plus places researched separately for parties and
 * play days out. The page's heading, lead and cost note live in
 * `src/content/pages/with-kids.mdx`.
 */
import type { KidsColumn, KidsPhoto, KidsPlace } from './types';

import indoorPlayground from '../assets/porto/with-kids/indoor-playground.webp';

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
    where: 'Ermesinde',
    name: { label: 'Ilha da Diversão', href: 'http://ilhadadiversao.pt/precos/' },
    setting: 'Indoor',
    cost: '8€ a 11.50€',
    children: 'Min: 12 ou 20',
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
          'Pão com Fiambre ou Queijo',
          'Batatas fritas',
          'Convites',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: ['Reserva do espaço: 150€ total, 1-40 crianças, 3h (10h-13h ou 17h30-20h30)'],
      },
    ],
  },
  {
    where: 'Matosinhos',
    name: {
      label: 'Camelot Park',
      href: 'https://www.google.com/search?q=Camelot+Park+Matosinhos+Porto',
    },
    setting: 'Indoor',
    cost: '12€ - 15.50€',
    ages: '2-12',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Bolo de aniversário',
          'Bico de pato com queijo',
          'Bico de pato com fiambre',
          'Batatas fritas',
          'Gomas e Rebuçados',
          'Ice Tea',
          'Água sem gás',
          'Convites',
          'Presente para o aniversariante',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: ['Monitores incluídos', 'Qualquer dia da semana'],
      },
    ],
  },
  {
    where: 'Porto',
    name: { label: 'Science4you', href: 'https://www.google.com/search?q=Science4you+Porto+Porto' },
    setting: 'Indoor',
    cost: '12€ - 15€',
    notes: [],
  },
  {
    where: 'Porto',
    name: {
      label: 'Pony Club do Porto',
      href: 'https://www.google.com/search?q=Pony+Club+do+Porto+Porto+Porto',
    },
    setting: 'Indoor/Outdoor',
    cost: '12€',
    duration: '1h30',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Aluguer da sala de eventos: 50€ a 70€'],
      },
    ],
  },
  {
    where: 'Valongo',
    name: {
      label: 'Mundo do Leo',
      href: 'https://www.google.com/search?q=Mundo+do+Leo+Valongo+Porto',
    },
    setting: 'Indoor',
    cost: '12.5€ - 16€',
    notes: [],
  },
  {
    where: 'Porto',
    name: {
      label: 'Piruças Park',
      href: 'https://www.google.com/search?q=Piru%C3%A7as+Park+Porto+Porto',
    },
    setting: 'Indoor',
    cost: '13€',
    children: 'Min: 10',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Bom para: pequenos'],
      },
    ],
  },
  {
    where: 'Gondomar',
    name: {
      label: 'Gondolândia',
      href: 'https://www.google.com/search?q=Gondol%C3%A2ndia+Gondomar+Porto',
    },
    setting: 'Indoor/Outdoor',
    cost: '13€ - 17€',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Volta de cavalo: +2€/criança'],
      },
    ],
  },
  {
    where: 'Vila do Conde',
    name: {
      label: 'OneSoul Party',
      href: 'https://www.google.com/search?q=OneSoul+Party+Vila+do+Conde+Porto',
    },
    setting: 'Indoor',
    cost: '13€ a 18€',
    children: '15-40',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Desconto de 5% com 25+ convidados, 10% com 35+ convidados'],
      },
    ],
  },
  {
    where: 'Baguim do Monte',
    name: {
      label: 'Candy Fun Park',
      href: 'https://www.google.com/search?q=Candy+Fun+Park+Baguim+do+Monte+Porto',
    },
    setting: 'Indoor',
    cost: '14.5€ a 16€',
    notes: [],
  },
  {
    where: 'Gaia',
    name: {
      label: 'Museu do Chocolate',
      href: 'https://www.google.com/search?q=Museu+do+Chocolate+Gaia+Porto',
    },
    setting: 'Indoor',
    cost: '14.90€ - 25€',
    children: '10-25',
    notes: [],
  },
  {
    where: 'Porto',
    name: {
      label: 'Divertidamente.pt',
      href: 'https://www.google.com/search?q=Divertidamente.pt+Porto+Porto',
    },
    setting: 'Indoor',
    cost: '15€ a 18€',
    children: '10-40',
    notes: [],
  },
  {
    where: 'Leça da Palmeira',
    name: {
      label: 'Ateliê de Festas',
      href: 'https://www.google.com/search?q=Ateli%C3%AA+de+Festas+Le%C3%A7a+da+Palmeira+Porto',
    },
    setting: 'Indoor',
    cost: '15€ a 18€',
    ages: '2-12',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Bolo de Aniversário (decoração simples)',
          'Escolher 1 sabor: Iogurte, Laranja, Cenoura ou Chocolate',
          'Escolher 1 cobertura: açúcar em pó ou chocolate c/pintarolas',
          'Água e Sumo sem gás',
          'Bico de Pato c/ queijo ou fiambre',
          'Batatas Fritas',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: ['Fim-de-semana / feriados'],
      },
    ],
  },
  {
    where: 'São Mamede de Infesta',
    name: {
      label: 'kidoos',
      href: 'https://www.google.com/search?q=kidoos+S%C3%A3o+Mamede+de+Infesta+Porto',
    },
    setting: 'Indoor',
    cost: '15€ a 20€',
    notes: [],
  },
  {
    where: 'Matosinhos',
    name: {
      label: 'Piratas à Solta',
      href: 'https://www.google.com/search?q=Piratas+%C3%A0+Solta+Matosinhos+Porto',
    },
    setting: 'Indoor',
    cost: '15€ a 19€',
    ages: '4-12',
    children: 'Min: 10',
    duration: '2h30',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Bolo de Aniversário',
          'Sumo sem gás e Água',
          'Convite digital',
          'Prenda para Aniversariante',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: ['Qualquer dia da semana'],
      },
    ],
  },
  {
    where: 'Porto',
    name: {
      label: 'Museu da Biodiversidade',
      href: 'https://www.google.com/search?q=Museu+da+Biodiversidade+Porto+Porto',
    },
    setting: 'Indoor',
    cost: '15€',
    notes: [],
  },
  {
    where: 'Alfena',
    name: {
      label: 'Mundo em Festa',
      href: 'https://www.google.com/search?q=Mundo+em+Festa+Alfena+Porto',
    },
    setting: 'Indoor/Outdoor',
    cost: '15.5€',
    notes: [],
  },
  {
    where: 'Matosinhos',
    name: {
      label: 'Surf Aventura',
      href: 'https://www.google.com/search?q=Surf+Aventura+Matosinhos+Porto',
    },
    setting: 'Outdoor',
    cost: '16€ a 20€',
    notes: [],
  },
  {
    where: 'Gaia',
    name: {
      label: 'Zoo Santo Inácio',
      href: 'https://www.google.com/search?q=Zoo+Santo+In%C3%A1cio+Gaia+Porto',
    },
    setting: 'Outdoor',
    cost: '16.9€',
    ages: '3-12',
    children: '12-30',
    duration: '2h30',
    notes: [
      {
        label: 'Schedules:',
        kind: 'times',
        items: ['10h00 - 12h30', '14h30 - 17h00.'],
      },
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Menu 1: Bicos de Pato com Fiambre, Batata Frita, Pipocas, Água e Sumo, Bolo de Aniversário',
          'Menu 2: Salgados variados, Batata Frita, Pipocas, Água e Sumo, Bolo de Aniversário',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: ['Bom para: todos', 'Qualquer dia da semana'],
      },
    ],
  },
  {
    where: 'Vila do Conde',
    name: { label: 'Azurara', href: 'https://www.google.com/search?q=Azurara+Vila+do+Conde+Porto' },
    setting: 'Outdoor',
    cost: '17€',
    children: 'Min: 10',
    duration: '2h',
    notes: [],
  },
  {
    where: 'Avintes',
    name: { label: 'Playcenter', href: 'https://www.google.com/search?q=Playcenter+Avintes+Porto' },
    setting: 'Indoor',
    cost: '17€ a 25€',
    ages: '4-11',
    duration: '2h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Bolo de Aniversário, Sumos, Bicos de Pato com Fiambre,',
          'Gelatinas, Batatas fritas, Rebuçados e Pipocas',
        ],
      },
    ],
  },
  {
    where: 'Porto',
    name: { label: 'Jumpers', href: 'https://www.google.com/search?q=Jumpers+Porto+Porto' },
    setting: 'Indoor',
    cost: '17€ - 30€',
    ages: '1-99',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Qualquer dia da semana'],
      },
    ],
  },
  {
    where: 'Colégio Alemão, Porto',
    name: {
      label: '2havefun',
      href: 'https://www.google.com/search?q=2havefun+Col%C3%A9gio+Alem%C3%A3o%2C+Porto+Porto',
    },
    setting: 'Indoor/Outdoor',
    cost: '18€',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Fim-de-semana / feriados'],
      },
    ],
  },
  {
    where: 'Porto',
    name: {
      label: 'Square Fun Park',
      href: 'https://www.google.com/search?q=Square+Fun+Park+Porto+Porto',
    },
    setting: 'Indoor',
    cost: '18€ - 22€',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Trampolins'],
      },
    ],
  },
  {
    where: 'Alfena',
    name: {
      label: 'Mafarricos Fun Park',
      href: 'https://www.google.com/search?q=Mafarricos+Fun+Park+Alfena+Porto',
    },
    setting: 'Indoor',
    cost: '18€ a 22€',
    notes: [],
  },
  {
    where: 'Porto',
    name: {
      label: 'Casa da Música',
      href: 'https://www.casadamusica.com/pt/organizacao-de-eventos/aniversario-na-casa/escolhe-o-lanche/?lang=pt',
    },
    setting: 'Indoor',
    cost: '18€ a 22€',
    notes: [],
  },
  {
    where: 'Gaia',
    name: {
      label: 'Feijão Verde',
      href: 'https://www.google.com/search?q=Feij%C3%A3o+Verde+Gaia+Porto',
    },
    setting: 'Indoor/Outdoor',
    cost: '19€ a 28€',
    children: 'Min: 10',
    duration: '1h30 - 3h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Pão de forma c/ queijo / fiambre',
          'Pães de leite mistos',
          'Batatas fritas',
          'Bolachas variadas',
          'Pipocas',
          'Cesto de Fruta',
          'Água',
          'Sumo',
        ],
      },
    ],
  },
  {
    where: 'Matosinhos',
    name: { label: 'Kidszone', href: 'https://www.google.com/search?q=Kidszone+Matosinhos+Porto' },
    setting: 'Indoor',
    cost: '20€',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Acompanhantes podem entrar por 12€ cada'],
      },
    ],
  },
  {
    where: 'Matosinhos',
    name: { label: 'Sea Life', href: 'https://www.google.com/search?q=Sea+Life+Matosinhos+Porto' },
    setting: 'Indoor/Outdoor',
    cost: '20€ - 22€',
    ages: '2-12',
    notes: [],
  },
  {
    where: 'Gaia',
    name: { label: 'Hangar 2020', href: 'https://www.google.com/search?q=Hangar+2020+Gaia+Porto' },
    setting: 'Indoor',
    cost: '20€ - 25€',
    ages: '1-18',
    notes: [],
  },
  {
    where: 'Porto',
    name: {
      label: 'World of Discoveries',
      href: 'https://www.google.com/search?q=World+of+Discoveries+Porto+Porto',
    },
    setting: 'Indoor',
    cost: '20€',
    children: 'Min: 15',
    duration: '2h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Bicos de pato com queijo/fiambre',
          'pipocas doces',
          'mousse de chocolate',
          'gelatina',
          'água e sumos de laranja',
          'bolo de aniversário.',
        ],
      },
    ],
  },
  {
    where: 'Perafita',
    name: { label: 'LaserX', href: 'https://www.google.com/search?q=LaserX+Perafita+Porto' },
    setting: 'Indoor',
    cost: '24€',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Festa Invasão: 2h em sala privada, 40 min de laser tag + lanche - 24€/pessoa',
          'Festa Apocalipse: 2h em sala privada, 40 min de laser tag + almoço/jantar - 30€/pessoa',
          'Hora extra: 10€/pessoa | Decoração temática: +30€',
        ],
      },
    ],
  },
  {
    where: 'Matosinhos',
    name: { label: 'Jumpyard', href: 'https://www.google.com/search?q=Jumpyard+Matosinhos+Porto' },
    setting: 'Indoor',
    cost: '28€',
    notes: [],
  },
  {
    where: 'Porto',
    name: { label: 'Dreamfly', href: 'https://www.google.com/search?q=Dreamfly+Porto+Porto' },
    setting: 'Indoor',
    cost: '35€',
    ages: '4-12',
    children: 'Min: 5',
    duration: '1h30',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: ['Sumo & Doces'],
      },
    ],
  },
  {
    where: 'Maia',
    name: { label: 'Carambolas', href: 'https://www.google.com/search?q=Carambolas+Maia+Porto' },
    setting: 'Indoor',
    notes: [],
  },
  {
    where: 'Porto',
    name: {
      label: 'Little Gym Pinheiro Manso',
      href: 'https://www.google.com/search?q=Little+Gym+Pinheiro+Manso+Porto+Porto',
    },
    setting: 'Indoor',
    notes: [],
  },
  {
    where: 'Porto',
    name: {
      label: 'Lockers & Games',
      href: 'https://www.google.com/search?q=Lockers+%26+Games+Porto+Porto',
    },
    setting: 'Indoor',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Arcades'],
      },
    ],
  },
  {
    where: 'Matosinhos',
    name: {
      label: 'Lunita Park',
      href: 'https://www.google.com/search?q=Lunita+Park+Matosinhos+Porto',
    },
    setting: 'Outdoor',
    notes: [],
  },
  {
    where: 'Penafiel',
    name: { label: 'Magikland', href: 'https://magikland.pt/wp/' },
    setting: 'Outdoor',
    duration: 'Dia todo',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Até 3 anos: grátis | 4-12 anos: 12,50€ | 13-64 anos: 18,50€ | 65-75 anos: 15€ | 76+: grátis',
          'Abril a setembro',
        ],
      },
    ],
  },
  {
    where: 'Porto',
    name: {
      label: 'Museu Nacional da Imprensa',
      href: 'https://www.google.com/search?q=Museu+Nacional+da+Imprensa+Porto+Porto',
    },
    setting: 'Indoor',
    children: '10-25',
    notes: [
      {
        label: 'Schedules:',
        kind: 'times',
        items: ['Manhã: A partir das 10h', 'Tarde: A partir das 15h'],
      },
      {
        label: 'Includes:',
        kind: 'includes',
        items: ['Pão com queijo / fiambre', 'Batatas fritas', 'Sumo', 'Água', 'Rebuçados'],
      },
    ],
  },
  {
    where: 'Porto',
    name: {
      label: 'Museu da Chapelaria',
      href: 'https://www.google.com/search?q=Museu+da+Chapelaria+Porto+Porto',
    },
    setting: 'Indoor',
    ages: '4-12',
    children: '10-25',
    notes: [],
  },
  {
    where: 'Vagos',
    name: { label: 'Museu do Brincar', href: 'https://museudobrincar.com/' },
    setting: 'Indoor',
    notes: [],
  },
  {
    where: 'Rio Tinto',
    name: {
      label: 'Parque Aventura da Lipor',
      href: 'https://www.google.com/search?q=Parque+Aventura+da+Lipor+Rio+Tinto+Porto',
    },
    setting: 'Outdoor',
    cost: 'Grátis',
    notes: [],
  },
  {
    where: 'Gaia',
    name: { label: 'Play Point', href: 'https://www.google.com/search?q=Play+Point+Gaia+Porto' },
    setting: 'Indoor',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: ['Arcades'],
      },
    ],
  },
  {
    where: 'Sandim',
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
        items: ['Aluguer da sala: 200€ (10h-14h ou 15h30-19h30)'],
      },
    ],
  },
  {
    where: 'Porto',
    name: { label: 'Serralves', href: 'https://www.google.com/search?q=Serralves+Porto+Porto' },
    setting: 'Indoor/Outdoor',
    ages: '5-12',
    children: '12-30',
    notes: [],
  },
];

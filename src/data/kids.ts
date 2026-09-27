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
    cost: '9€ a 12.50€',
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
        items: [
          'Aluguer do espaço (seg-sex, exceto feriados): 150€, 3h, máx. 30 crianças (17h30-20h30, 18h00-21h00 ou 18h30-21h30)',
        ],
      },
    ],
  },
  {
    where: { label: 'Matosinhos', href: maps('Av. Menéres 868, 4450-190 Matosinhos') },
    name: { label: 'Camelot Park', href: 'https://camelotpark.pt/' },
    setting: 'Indoor',
    cost: '13.50€ a 17€',
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
        items: [
          'Menus: Merlin 13.50€, Rei Artur 15€, Camelot 17€ (tiers mais caros acrescentam sobremesa/lembranças)',
          'Monitores incluídos, Qualquer dia da semana',
          'Sinal não reembolsável; confirmar nº de crianças 48h antes',
        ],
      },
    ],
  },
  {
    where: { label: 'Porto', href: maps('Science4you Porto') },
    name: { label: 'Science4you', href: 'https://www.science4you.pt/festas-aniversario-infantis' },
    setting: 'Indoor',
    cost: 'Desde 250€ (grupo)',
    ages: '6-12',
    duration: '1h30 + lanche',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Preço por grupo, não por criança: até 12 crianças 250€, 13-18: 330€, 19-25: 420€',
          'Comida (lanche) à parte: 4€-8€/criança',
          'Realiza-se num espaço parceiro (ex: Pousada da Juventude do Porto), não num local fixo',
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
          'Aluguer da sala de eventos: 50€ a 70€',
          'Preços não publicados online — confirmar por telefone: 228 318 288',
        ],
      },
    ],
  },
  {
    where: { label: 'Valongo', href: maps('Avenida do Conhecimento 75, 4440-452 Valongo') },
    name: { label: 'Mundo do Leo', href: 'https://mundodoleo.com/pages/reservas' },
    setting: 'Indoor',
    cost: '12.50€ a 20.50€',
    ages: '4-14',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Menus: Mini 12.50€-13.50€, Standard 13.50€-14.50€, Premium 15€-16€, Health Pro 19.50€-20.50€',
          'Inclui atividades monitorizadas, lanche, pintura facial, convite digital; Premium acrescenta lembranças e prenda',
          'Zona exterior só aberta junho-setembro',
          'Sinal: 50€',
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
          'Bom para: pequenos',
          'Pacote: 150€ até 10 crianças + 15€/criança extra',
          'Fins-de-semana e feriados; bolo à parte (22€/kg)',
        ],
      },
    ],
  },
  {
    where: { label: 'Gondomar', href: maps('Rua da Cal 670, 4420-047 Gondomar') },
    name: { label: 'Gondolândia', href: 'https://www.gondolandia.com/index.php/precario' },
    setting: 'Indoor/Outdoor',
    cost: '8€/hora por criança',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Tarifa atual no site é por hora: 8€/h por criança, 2€/h por adulto acompanhante',
          'Aluguer exclusivo do parque à noite: 300€',
          'Não fica claro se as antigas festas com menu (13€-17€, volta de cavalo +2€/criança) ainda existem — confirmar por telefone: 224 672 381',
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
    cost: '13€ a 18€',
    ages: '4-14',
    children: '15-40',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Desconto de 5% com 25+ convidados, 10% com 35+ convidados',
          'Vários pacotes (Party, Party 1.5-4); preços exatos só em imagens no site — confirmar diretamente',
        ],
      },
    ],
  },
  {
    where: { label: 'Baguim do Monte', href: maps('Rua Formiga 107, 4435-706 Baguim do Monte') },
    name: { label: 'Candy Fun Park', href: 'https://candyfunpark.pt/menus-e-reservas/' },
    setting: 'Indoor',
    cost: '15.50€ a 17€',
    ages: '4-10',
    children: '10-34',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Menus: Candy 15.50€, Funny 17€, Healthy 17€',
          'Inclui bebidas, snacks, escolha de bolo, prenda para o aniversariante, convites',
          'Meias antiderrapantes à parte: 1€-1.50€/criança',
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
          'Faz parte do distrito cultural WOW Porto (The Chocolate Story)',
          'Pacote de aniversário inclui refeição ligeira + lancheira + bolo',
          'Não confirmado se existe um nível de preço mais barato',
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
    cost: '15€ a 18€',
    children: '10-40',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Não foi possível confirmar que este espaço existe — website e redes sociais não encontrados',
        ],
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
    cost: '15€ a 19€',
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
        items: [
          'Semana: 15€-16€; fim-de-semana/feriado: 16€-19€; turno noturno: +2.50€/criança',
          'Convites incluídos (máx. 25)',
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
    cost: '15€ a 20€',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Preços mostrados apenas em imagem no site — não confirmados em texto',
          'Horário: seg-sex 16h-20h, sáb/dom/feriados 9h-20h',
        ],
      },
    ],
  },
  {
    where: { label: 'Matosinhos', href: maps('Rua Sousa Aroso 560, 4450-287 Matosinhos') },
    name: { label: 'Piratas à Solta', href: 'https://www.piratasasolta.com/' },
    setting: 'Indoor',
    cost: '15€ a 19€',
    ages: '5-16',
    children: 'Min: 10',
    duration: '2h',
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
        items: [
          'Diurna (sem jantar): até 12 anos; noturna (com jantar): até 16 anos',
          '18€/criança confirmado para festa diurna de 2h sem jantar',
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
        items: [
          'Lanche não incluído',
          '5 temas de festa disponíveis',
          'Sábados e domingos, 15h-18h',
        ],
      },
    ],
  },
  {
    where: { label: 'Alfena', href: maps('Rua Real 6, 4445-188 Alfena') },
    name: { label: 'Mundo em Festa', href: 'https://www.mundoemfesta.com/festas-de-aniversario' },
    setting: 'Indoor/Outdoor',
    cost: '14.50€ a 21.50€',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Menus: Diversão 14.50€ (sem comida, min. 5 crianças), Radical 17.50€, Aventura 21.50€ (min. 10 crianças, com comida)',
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
    cost: '16€ a 25€',
    ages: '6+',
    children: 'Min: 8',
    duration: '1h - 2h30 + lanche',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Aula de surf: 18€ (grupos 8-15) ou 16€ (16-30); surf + jogos: 20€/16€; combinado com Sea Life: 25€/23€',
          'Comida não incluída — cada família traz o seu lanche',
          'Ponto de encontro: praia de Matosinhos / Praça Guilherme Pinto',
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
    cost: '16.90€ a 18.90€',
    ages: '3-13',
    children: '12-30',
    duration: '2h30',
    notes: [
      {
        label: 'Schedules:',
        kind: 'times',
        items: ['10h00 - 12h30', '14h30 - 17h00', '18h30 - 21h00 (Savage Lights, extra)'],
      },
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Menu 1 (16.90€): Bicos de Pato com Fiambre, Batata Frita, Pipocas, Água e Sumo, Bolo de Aniversário',
          'Menu 2 (18.90€): Salgados variados, Batata Frita, Pipocas, Água e Sumo, Bolo de Aniversário',
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
    where: {
      label: 'Vila do Conde',
      href: maps('Rua das Flores, Azurara, 4480-190 Vila do Conde'),
    },
    name: {
      label: 'Azurara Parque Aventura',
      href: 'https://www.azurara-parque-aventura.com/programas/aniversarios',
    },
    setting: 'Outdoor',
    cost: 'Desde 9€',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Programas por faixa etária: 3-5, 6-11, 12+',
          'Sinal não reembolsável: 50€',
          'Preço "desde 9€" é bem mais baixo que o antigo dado (17€) — confirmar por telefone: 911 735 237',
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
    cost: '14€ a 25€',
    children: 'Min: 10',
    duration: '2h - 3h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Bolo de Aniversário, Sumos, Batatas fritas, Pipocas',
          'Menus superiores acrescentam mini-cachorros ou pizza',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Festa Playcenter 14€/15€ (2h), Festa Premium 17€/19€ (2h30), Festa Supreme 23€/25€ (3h) — semana/fim-de-semana',
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
          'Qualquer dia da semana',
          '30 min de briefing antes + 30 min de sala depois da festa',
          'Horário: seg-sex 14h30-20h, sáb 9h30-20h, dom 9h30-19h, feriados 10h30-19h',
          'Preço por criança não confirmado nesta verificação',
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
    cost: '12€ a 24€',
    ages: '4+ (Fun Mini: sob 4)',
    children: 'Min: 18',
    duration: '2h',
    notes: [
      {
        label: 'Includes:',
        kind: 'includes',
        items: [
          'Pão com queijo ou fiambre',
          'Gelatina',
          'Pipocas',
          'Fruta',
          'Bolachas',
          'Batatas fritas',
          'Bebidas',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Fun Soccer 20€/17€/12€, Fun Gym 23€/18€/13€, Fun Mini 24€/19€/14€ (preço desce com mais crianças: 18, 19-30, 31+)',
          'Só fins-de-semana / feriados',
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
    cost: 'Desde 16€',
    children: 'Min: 10',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Trampolins',
          '30 min de briefing incluídos',
          'Preço "desde 16€" mais baixo que o antigo dado (18€-22€) — confirmar por telefone: 931 369 347',
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
    cost: 'Desde 13€',
    ages: '3-12',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Espaço recente (aberto em 2025) — sem website próprio, só Instagram/Facebook',
          'Preço "desde 13€" pode ser promoção de abertura — confirmar por telefone: 939 922 210',
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
          '15 temas de festa disponíveis; inclui atividade escolhida + lanche + bolo + lembrança',
          'Reserva com 5 dias úteis de antecedência; nº final de crianças até 48h antes',
          'Preço por criança não confirmado nesta verificação — a página de preços bloqueou o acesso automático',
        ],
      },
    ],
  },
  {
    where: { label: 'Gaia', href: maps('Av. Vasco da Gama 774, 4430-247 Vila Nova de Gaia') },
    name: { label: 'Feijão Verde', href: 'https://feijao-verde.com/parque/gaia' },
    setting: 'Indoor/Outdoor',
    cost: '19€ a 32€',
    children: 'Min: 10',
    duration: '1h30 - 3h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Festa Mini (1h30, 19€, sem comida), Festa Mega (2h, 21€, com lanche), Festa Premium (3h, 32€, com lanche + zona Natura)',
          'Desconto de 15% pagando tudo na reserva (promoção até 31/12/2026)',
        ],
      },
    ],
  },
  {
    where: { label: 'Matosinhos', href: maps('Rua Abade Mondego 241, 4455-489 Matosinhos') },
    name: { label: 'Kidszone', href: 'https://kidszone.jumpyard.pt/' },
    setting: 'Indoor',
    cost: '17€ a 24€',
    ages: '0-12',
    children: 'Min: 6, Máx: 25',
    duration: '3h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Pack Mini 20€ (17€ seg-sex), sem catering; Pack Midi 24€ (21€ seg-sex), com catering',
          '1 adulto acompanhante por criança entra grátis',
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
    cost: '25€ a 27€',
    ages: '5-12',
    children: '15-25',
    duration: '2h',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Menu Recife Encantado 25€ ou Oceano Saudável 27€; gasto mínimo garantido de 375€',
          'Fins-de-semana apenas, 10h ou 15h; sinal de 100€ não reembolsável',
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
          '30 min briefing + 60 min arena + 30 min lanche, meias Hangar2020 incluídas',
          'Preço por criança não publicado — confirmar ao reservar',
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
          'Bicos de pato com queijo/fiambre',
          'pipocas doces',
          'mousse de chocolate',
          'gelatina',
          'água e sumos de laranja',
          'bolo de aniversário.',
        ],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Pacote de festa não publicado no site — confirmar por email: info@worldofdiscoveries.com',
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
          'Festa Invasão: 2h em sala privada, 40 min de laser tag + lanche - 24€/pessoa',
          'Festa Apocalipse: 2h em sala privada, 40 min de laser tag + almoço/jantar - 30€/pessoa',
          'Hora extra: 10€/pessoa | Decoração temática: +30€',
          'Preços atuais não confirmados no site — confirmar por telefone: 968 177 432',
        ],
      },
    ],
  },
  {
    where: { label: 'Matosinhos', href: maps('Rua Abade Mondego 241, 4455-489 Matosinhos') },
    name: { label: 'Jumpyard', href: 'https://jumpyard.pt/matosinhos/festas-aniversario/' },
    setting: 'Indoor',
    cost: '20€ a 28€',
    ages: '4+',
    children: 'Min: 6, Máx: 25',
    duration: '1h30',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Mini 20€ (sem catering), Midi 24€, Maxi 28€ (com SkyRider); desconto de 3€/criança seg-sex',
          '1h de atividade + 30 min de sala de festas; extensível +2h por 8€/criança',
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
          '2 voos por criança, briefing/formação do instrutor, equipamento e diploma de voo incluídos',
          'Apesar do nome "Dreamfly Porto", fica na Maia (junto ao Auchan)',
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
        items: ['Sem website — presença apenas no Instagram (@carambolas_pt) e Facebook'],
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
          '75-90 min de atividades de gimnodesportivas + 30-45 min de lanche/celebração',
          'Só sábados e domingos, espaço reservado em exclusivo',
          'Preço não publicado — confirmar por telefone: 932 650 481',
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
          'Sem pacote de aniversário publicado — sem website próprio, só Instagram/Facebook',
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
          'Mega-tobogã insuflável, pista de karts, campo de futebol, escape room, trampolim, casinhas, pintura facial',
          'Preços não publicados — confirmar diretamente',
        ],
      },
    ],
  },
  {
    where: { label: 'Penafiel', href: maps('Rua Santo André 1279, 4560-221 Marecos, Penafiel') },
    name: { label: 'Magikland', href: 'https://magikland.pt/precario/' },
    setting: 'Outdoor',
    duration: 'Dia todo',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Até 2 anos: grátis | 3-12 anos: 14€-15€ (varia por época) | 13-64 anos: 22.50€-23.50€ | 65-75 anos: 17€-18€ | 76+: grátis',
          'Desconto de grupo: 10% com 50+ pessoas, 15% com 100+; grupos escolares (20+): 12.50€/aluno',
          'Aberto de março/abril a setembro',
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
        items: ['Manhã: A partir das 10h', 'Tarde: A partir das 15h'],
      },
      {
        label: 'Includes:',
        kind: 'includes',
        items: ['Pão com queijo / fiambre', 'Batatas fritas', 'Sumo', 'Água', 'Rebuçados'],
      },
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Detalhes não confirmados recentemente — página de aniversários do site não está acessível',
        ],
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
          'Fica em São João da Madeira, não no Porto',
          'Inclui lanche, atividades/jogos e visita ao museu; só um aniversário de cada vez',
          'Preço e nº de crianças não confirmados — antigo "10-25" não confirmado',
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
          'Fica perto de Aveiro, bem mais longe do Porto (60-70km) que os outros locais desta lista',
          'Entrada geral: 3€/pessoa (grátis até aos 3 anos); preços de festa não publicados',
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
    cost: 'Grátis',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Trilho ecológico: todos os dias, 8h-20h',
          'Parque Aventura: terças, quintas e fins-de-semana, maio-setembro, 10h-20h',
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
        items: ['Arcades', 'Não foi possível confirmar que este espaço existe atualmente'],
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
          'Aluguer da sala: 200€ (10h-14h ou 15h30-19h30)',
          'Nome genérico — não foi possível encontrar este espaço online para confirmar',
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
    cost: '16€ a 30€',
    ages: '5-12',
    children: '12-30',
    duration: '2h30',
    notes: [
      {
        label: 'Info:',
        kind: 'info',
        items: [
          'Preço varia por tamanho do grupo e menu: 12-15 crianças 20€-30€, 16-23: 18€-28€, 24-30: 16€-26€',
          '4 temas disponíveis; sábados, domingos e feriados, 10h-12h30 ou 14h-16h30',
          'Desconto de 10% para "Amigos de Serralves"',
        ],
      },
    ],
  },
];

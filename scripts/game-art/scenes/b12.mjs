import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478;

export default {
  'broken-telephone': () =>
    k.scene(
      ...[0, 1, 2, 3].map((i) =>
        person({
          ...CAST[i + 3],
          x: 200 + i * 210,
          left: i % 2 ? 'head' : 'down',
          right: 'down',
          mouth: i === 1 ? 'smile' : i === 3 ? 'open' : 'flat',
        }),
      ),
      k.chatBubble(200, 230, 'pink sheep', { w: 190, h: 66, size: 26 }),
      k.chatBubble(830, 230, 'pin keys?', { w: 190, h: 66, size: 26, ink: C.pink }),
      arc(250, 330, 360, 330, { bend: -30 }),
      arc(460, 330, 570, 330, { bend: -30 }),
      arc(670, 330, 780, 330, { bend: -30 }),
      label('psst…', 512, 160),
    ),
  'draw-and-pass': () =>
    k.scene(
      table(170, 854),
      k.paper(330, 330, { w: 150, h: 120, lines: 0 }),
      label('a cat on a bike', 330, 338, { size: 18, color: C.dark }),
      k.paper(512, 330, { w: 150, h: 120, lines: 0 }),
      k.raw(
        `<circle cx="490" cy="350" r="18" fill="none" stroke="${C.dark}" stroke-width="4"/><circle cx="540" cy="350" r="18" fill="none" stroke="${C.dark}" stroke-width="4"/><path d="M490 350 l25 -30 l25 30 M505 300 l10 -12 l10 12" stroke="${C.dark}" stroke-width="4" fill="none"/>`,
      ),
      k.paper(694, 330, { w: 150, h: 120, lines: 0 }),
      label('a fox racing?', 694, 338, { size: 18, color: C.pink }),
      arc(400, 250, 450, 250, { bend: -20 }),
      arc(582, 250, 632, 250, { bend: -20 }),
      person({ ...CAST[1], x: 180, left: 'down', right: [260, T - 10], mouth: 'smile' }),
      person({ ...CAST[3], x: 844, left: [764, T - 10], right: 'down', mouth: 'open' }),
    ),
  'who-am-i': () =>
    k.scene(
      person({ ...CAST[2], x: 400, left: 'head', right: 'down', mouth: 'open' }),
      k.stickyNote(400, 405, C.yellow, 64, -4),
      label('Elvis', 400, 414, { size: 18, color: C.dark }),
      k.chatBubble(400, 230, 'Am I a singer?', { w: 230, h: 66, size: 26 }),
      person({ ...CAST[5], x: 720, left: 'down', right: 'wave', mouth: 'smile' }),
      k.chatBubble(760, 230, 'Yes!', { w: 120, h: 66, size: 30, ink: C.teal }),
    ),
  'twenty-questions': () =>
    k.scene(
      person({ ...CAST[4], x: 260, left: 'down', right: 'head', mouth: 'smile' }),
      k.raw(
        `<circle cx="210" cy="220" r="10" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/><circle cx="180" cy="180" r="16" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/><ellipse cx="190" cy="110" rx="70" ry="50" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/>`,
      ),
      label('elephant', 190, 120, { size: 28, color: C.dark }),
      person({ ...CAST[7], x: 620, left: 'down', right: 'wave', mouth: 'open' }),
      person({ ...CAST[0], x: 820, left: 'head', right: 'down', mouth: 'flat' }),
      k.chatBubble(640, 230, 'Is it bigger than a car?', { w: 330, h: 66, size: 26 }),
      label('7 / 20', 860, 120, { color: C.pink }),
    ),
  'would-you-rather': () =>
    k.scene(
      k.raw(`<rect x="510" y="140" width="6" height="550" fill="${C.coral}" opacity="0.6"/>`),
      label('fly', 280, 150, { size: 54, color: C.teal }),
      label('invisible', 760, 150, { size: 54, color: C.purple }),
      person({ ...CAST[1], x: 200, left: 'out', right: 'up', mouth: 'open' }),
      person({ ...CAST[3], x: 370, left: 'up', right: 'down', mouth: 'smile' }),
      person({ ...CAST[6], x: 680, left: 'down', right: 'down', mouth: 'flat' }),
      person({ ...CAST[2], x: 850, left: 'head', right: 'down', mouth: 'smile' }),
    ),
  fishbowl: () =>
    k.scene(
      table(200, 824),
      k.raw(
        `<path d="M440 ${T} q-40 -70 10 -120 h124 q50 50 10 120 Z" fill="${C.sky}" opacity="0.7" stroke="${C.blue}" stroke-width="4"/>`,
      ),
      ...[
        [480, T - 40, 20],
        [520, T - 30, -10],
        [560, T - 46, 30],
        [500, T - 70, 5],
      ].map(([x, y, r]) => k.paper(x, y, { w: 40, h: 26, rotate: r, lines: 0 })),
      person({ ...CAST[5], x: 250, left: 'down', right: 'wave', mouth: 'open' }),
      person({ ...CAST[0], x: 800, left: 'head', right: 'down', mouth: 'open' }),
      label('1 · say  2 · one word  3 · mime', 512, 160, { size: 30 }),
    ),
  'forbidden-words': () =>
    k.scene(
      k.raw(
        `<rect x="420" y="160" width="190" height="250" rx="14" fill="${C.white}" stroke="${C.purple}" stroke-width="6"/><rect x="420" y="160" width="190" height="60" rx="14" fill="${C.purple}"/>`,
      ),
      label('BEACH', 515, 202, { size: 32, color: C.white }),
      ...['sand', 'sea', 'sun', 'towel'].map((w, i) =>
        label(w, 515, 260 + i * 40, { size: 26, color: C.red }),
      ),
      person({ ...CAST[3], x: 250, left: 'down', right: [400, 300], mouth: 'open' }),
      person({ ...CAST[4], x: 800, left: 'up', right: 'down', mouth: 'open' }),
      label('buzz!', 820, 200, { color: C.pink }),
    ),
  mafia: () =>
    k.scene(
      k.raw(
        `<rect width="1024" height="610" fill="#2E3A59"/><circle cx="860" cy="120" r="44" fill="${C.wall}"/><circle cx="880" cy="110" r="40" fill="#2E3A59"/>`,
      ),
      ...[150, 320, 700, 870].map((x, i) =>
        person({ ...CAST[i], x, blindfold: i !== 1, left: 'down', right: 'down', mouth: 'flat' }),
      ),
      person({ ...CAST[3], x: 510, left: 'down', right: [610, 380], mouth: 'flat', hat: 'bowtie' }),
      label('night falls…', 512, 150, { color: C.yellow }),
    ),
  'the-imposter': () =>
    k.scene(
      ...[0, 1, 2, 3].map((i) =>
        person({
          ...CAST[i + 1],
          x: 200 + i * 210,
          left: 'down',
          right: i === 3 ? 'head' : 'down',
          mouth: i === 3 ? 'flat' : 'smile',
        }),
      ),
      ...[0, 1, 2].map((i) =>
        k.card(200 + i * 210, 200, { w: 120, h: 70, text: 'beach', color: C.teal }),
      ),
      k.card(830, 200, { w: 120, h: 70, text: '???', color: C.red }),
      arc(420, 300, 800, 330, { bend: -60 }),
      label('who?', 620, 120, { color: C.pink }),
    ),
  'kims-game': () =>
    k.scene(
      table(200, 824),
      k.raw(`<rect x="340" y="${T - 14}" width="340" height="14" rx="4" fill="${C.brown}"/>`),
      k.apple(380, T - 34, 16),
      k.die(440, T - 34, 34, 3),
      k.coin(490, T - 28),
      k.pencil(520, T - 24, 590, T - 30),
      k.button(620, T - 30, 14, C.green),
      k.raw(
        `<path d="M640 ${T - 20} q20 -30 40 0" stroke="${C.steel}" stroke-width="6" fill="none"/>`,
      ),
      k.clock(512, 250),
      person({ ...CAST[2], x: 200, left: 'down', right: 'down', mouth: 'open' }),
      person({ ...CAST[5], x: 840, left: 'head', right: 'down', mouth: 'flat' }),
      label('1 minute to remember', 512, 150),
    ),
  'mystery-bag': () =>
    k.scene(
      k.raw(
        `<path d="M440 640 q-50 -10 -40 -110 q10 -60 50 -70 h120 q40 10 50 70 q10 100 -40 110 Z" fill="${C.purple}"/><path d="M450 460 q60 -30 120 0" stroke="${C.yellow}" stroke-width="8" fill="none"/>`,
      ),
      person({
        ...CAST[7],
        x: 300,
        blindfold: true,
        left: 'down',
        right: [470, 480],
        mouth: 'open',
      }),
      k.chatBubble(330, 230, 'a key?', { w: 150, h: 66, size: 30 }),
      label('?', 520, 580, { size: 70, color: C.yellow }),
      person({ ...CAST[0], x: 800, left: 'wave', right: 'down', mouth: 'smile' }),
    ),
  'guess-the-smell': () =>
    k.scene(
      table(200, 824),
      ...[0, 1, 2, 3].map((i) =>
        k.raw(
          `<rect x="${380 + i * 80}" y="${T - 60}" width="50" height="60" rx="6" fill="${[C.orange, C.brown, C.yellow, C.green][i]}"/><rect x="${376 + i * 80}" y="${T - 66}" width="58" height="10" rx="3" fill="${C.steel}"/><text x="${405 + i * 80}" y="${T - 22}" font-family="Inter, Arial" font-weight="800" font-size="22" fill="${C.white}" text-anchor="middle">${i + 1}</text>`,
        ),
      ),
      person({
        ...CAST[1],
        x: 260,
        blindfold: true,
        left: 'down',
        right: [370, T - 70],
        mouth: 'smile',
      }),
      k.raw(
        `<path d="M300 400 q20 -20 0 -40 q-20 -20 0 -40 M330 400 q20 -20 0 -40" stroke="${C.purple}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      ),
      k.chatBubble(300, 200, 'cinnamon!', { w: 190, h: 66, size: 28 }),
      person({ ...CAST[6], x: 820, left: 'down', right: 'down', mouth: 'smile' }),
    ),
  'whats-changed': () =>
    k.scene(
      person({ ...CAST[3], x: 300, left: 'down', right: 'down', mouth: 'smile' }),
      label('before', 300, 170),
      person({ ...CAST[3], x: 720, left: 'down', right: 'hip', mouth: 'smile', hat: 'party' }),
      k.raw(`<rect x="660" y="540" width="20" height="40" fill="${C.yellow}"/>`),
      label('after', 720, 170),
      ...[
        [720, 300],
        [790, 480],
        [668, 560],
      ].map(([x, y]) =>
        k.raw(
          `<circle cx="${x}" cy="${y}" r="38" fill="none" stroke="${C.coral}" stroke-width="5" stroke-dasharray="3 8" stroke-linecap="round"/>`,
        ),
      ),
      arc(400, 300, 600, 300, { bend: -40 }),
    ),
  'stop-categories': () =>
    k.scene(
      table(170, 854),
      k.raw(
        `<rect x="300" y="170" width="420" height="250" rx="8" fill="${C.white}" stroke="${C.grey}" stroke-width="4"/>`,
      ),
      ...['name', 'country', 'animal', 'fruit'].map((w, i) =>
        k.raw(
          `<text x="${352 + i * 105}" y="210" font-family="Inter, Arial" font-weight="700" font-size="22" fill="${C.purple}" text-anchor="middle">${w}</text><text x="${352 + i * 105}" y="270" font-family="Inter, Arial" font-weight="700" font-size="24" fill="${C.dark}" text-anchor="middle">${['Pedro', 'Peru', 'puma', 'pear'][i]}</text><path d="M${300 + (i + 1) * 105} 180 v230" stroke="${C.grey}" stroke-width="2"/>`,
        ),
      ),
      label('P', 210, 220, { size: 90, color: C.coral }),
      person({ ...CAST[4], x: 860, left: 'up', right: 'down', mouth: 'open' }),
      label('STOP!', 860, 140, { size: 44, color: C.red }),
    ),
  'whos-the-leader': () =>
    k.scene(
      ...[160, 320, 700, 860].map((x, i) =>
        person({ ...CAST[i + 1], x, left: 'up', right: 'up', mouth: 'smile' }),
      ),
      person({ ...CAST[0], x: 510, scale: 0.85, left: 'head', right: 'down', mouth: 'flat' }),
      label('?', 510, 300, { size: 60, color: C.pink }),
      k.raw(
        `<circle cx="320" cy="360" r="70" fill="none" stroke="${C.yellow}" stroke-width="5" stroke-dasharray="3 9" stroke-linecap="round"/>`,
      ),
      label('who started it?', 512, 140),
    ),
};

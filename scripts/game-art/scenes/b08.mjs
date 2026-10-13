import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478;

export default {
  'country-ambassadors': () =>
    k.scene(
      person({ ...CAST[4], x: 300, left: 'down', right: 'wave', mouth: 'open' }),
      k.chatBubble(520, 200, 'pasta, pizza…', { w: 260, h: 80, size: 30 }),
      k.raw(
        `<rect x="640" y="300" width="160" height="100" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/><rect x="640" y="300" width="53" height="100" fill="${C.green}"/><rect x="747" y="300" width="53" height="100" fill="${C.red}"/>`,
      ),
      label('?', 720, 280, { size: 50, color: C.pink }),
      person({ ...CAST[2], x: 860, left: 'head', right: 'down', mouth: 'flat' }),
    ),
  'work-haiku': () =>
    k.scene(
      person({ ...CAST[1], x: 320, left: [420, 420], right: 'down', mouth: 'open' }),
      k.paper(470, 400, { w: 160, h: 120, lines: 0 }),
      label('5 · 7 · 5', 470, 410, { size: 34, color: C.dark }),
      k.raw(
        `<path d="M640 300 q30 -60 80 -40 q-20 40 -80 40 Z" fill="${C.pink}"/><path d="M680 300 q40 -20 70 10 q-40 20 -70 -10 Z" fill="${C.pink}" opacity="0.7"/>`,
      ),
      label('haiku', 700, 180),
    ),
  'vocabulary-chain': () =>
    k.scene(
      ...[0, 1, 2].map((i) =>
        person({
          ...CAST[i + 2],
          x: 220 + i * 290,
          left: 'down',
          right: i === 1 ? 'wave' : 'down',
          mouth: i === 1 ? 'open' : 'smile',
        }),
      ),
      k.chatBubble(220, 220, 'banana', { w: 170, h: 66, size: 28 }),
      k.chatBubble(510, 220, 'apple', { w: 170, h: 66, size: 28 }),
      k.chatBubble(800, 220, 'egg…', { w: 170, h: 66, size: 28 }),
      arc(290, 180, 440, 180, { bend: -40 }),
      arc(580, 180, 730, 180, { bend: -40 }),
    ),
  'baby-photo-guessing': () =>
    k.scene(
      ...[0, 1, 2].map((i) =>
        k.raw(
          `<rect x="${300 + i * 150}" y="170" width="120" height="140" rx="6" fill="${C.white}" stroke="${C.wood}" stroke-width="8"/><circle cx="${360 + i * 150}" cy="235" r="34" fill="${[k.SKIN.light, k.SKIN.tan, k.SKIN.dark][i]}"/><circle cx="${350 + i * 150}" cy="232" r="3" fill="${C.dark}"/><circle cx="${370 + i * 150}" cy="232" r="3" fill="${C.dark}"/><path d="M${352 + i * 150} 248 q8 6 16 0" stroke="${C.mouth}" stroke-width="3" fill="none"/><text x="${360 + i * 150}" y="300" font-family="Inter, Arial" font-weight="700" font-size="22" fill="${C.label}" text-anchor="middle">${i + 1}</text>`,
        ),
      ),
      person({ ...CAST[5], x: 220, left: 'down', right: [300, 360], mouth: 'open', hat: 'veil' }),
      label('who?', 820, 400, { size: 40, color: C.pink }),
    ),
  'alphabet-cereal-words': () =>
    k.scene(
      table(200, 824),
      label('C A T', 420, T - 10, { size: 40, color: '#C98A3A' }),
      label('D O G', 600, T - 10, { size: 40, color: '#C98A3A' }),
      k.bowl(290, T, { w: 90, color: C.blue }),
      person({ ...CAST[0], x: 860, left: [700, T - 20], right: 'down', mouth: 'flat' }),
    ),
  'marshmallow-windstorm': () =>
    k.scene(
      person({ ...CAST[3], x: 230, left: 'none', right: [240, 450], mouth: 'puff' }),
      person({ ...CAST[1], x: 794, left: [784, 450], right: 'none', mouth: 'puff' }),
      table(160, 864),
      k.raw(`<rect x="508" y="${T - 4}" width="8" height="10" fill="${C.coral}"/>`),
      k.straw(245, 452, 320, 462, C.pink),
      k.straw(779, 452, 704, 462, C.green),
      ...[380, 420, 600, 640, 680].map((x) => k.marshmallow(x, T, 22)),
      arc(440, T - 40, 580, T - 40, { bend: -30 }),
    ),
  'human-ring-toss': () =>
    k.scene(
      person({ ...CAST[2], x: 720, left: 'down', right: 'down', mouth: 'open' }),
      k.hoop(720, 640, 60, C.orange),
      k.hoop(720, 610, 60, C.green),
      k.raw(
        `<ellipse cx="560" cy="300" rx="60" ry="22" fill="none" stroke="${C.pink}" stroke-width="9" transform="rotate(-10 560 300)"/>`,
      ),
      arc(330, 380, 700, 380, { bend: -150 }),
      person({ ...CAST[1], x: 250, left: 'down', right: [330, 380] }),
      label('peg', 720, 160),
    ),
  'candy-toss': () =>
    k.scene(
      person({ ...CAST[0], x: 260, left: 'down', right: [340, 420] }),
      k.candy(520, 300, C.pink, 20),
      arc(350, 400, 650, 430, { bend: -150 }),
      k.cup(680, 470, { color: C.yellow, w: 60, h: 70 }),
      person({ ...CAST[4], x: 760, left: [690, 480], right: 'down', mouth: 'open' }),
    ),
  'balloon-race': () =>
    k.scene(
      ...[300, 480, 660, 840].map((x) =>
        k.raw(`<rect x="${x}" y="640" width="10" height="60" fill="${C.coral}" opacity="0.8"/>`),
      ),
      k.balloon(512, 300, C.blue, 32),
      person({ ...CAST[3], x: 380, left: 'down', right: 'down', mouth: 'puff' }),
      person({ ...CAST[6], x: 650, left: 'down', right: 'down', mouth: 'smile' }),
      arc(440, 340, 560, 280, { bend: -30 }),
    ),
  'tissue-teamwork': () =>
    k.scene(
      ...[0, 1, 2, 3].map((i) =>
        person({
          ...CAST[i],
          x: 220 + i * 190,
          left: 'down',
          right: 'down',
          mouth: i < 2 ? 'puff' : 'smile',
        }),
      ),
      k.straw(232, 452, 300, 452, C.pink),
      k.straw(398, 452, 330, 452, C.green),
      k.raw(
        `<path d="M300 432 q14 -8 30 0 l0 40 q-16 8 -30 0 Z" fill="${C.white}" stroke="${C.grey}" stroke-width="2"/>`,
      ),
      arc(420, 360, 600, 360, { bend: -40 }),
    ),
  't-shirt-party': () =>
    k.scene(
      person({ ...CAST[2], x: 420, scale: 1.1, left: 'out', right: 'out', mouth: 'open' }),
      ...[0, 1, 2].map((i) =>
        k.raw(
          `<rect x="${366 - i * 6}" y="${490 + i * 10}" width="${108 + i * 12}" height="${130 - i * 6}" rx="28" fill="${[C.red, C.yellow, C.purple][i]}"/>`,
        ),
      ),
      k.raw(
        `<path d="M700 540 l-40 20 l14 30 l20 -8 v70 h70 v-70 l20 8 l14 -30 l-40 -20 q-20 16 -58 0 Z" fill="${C.blue}"/>`,
      ),
      person({ ...CAST[5], x: 820, left: [740, 540], right: 'down', mouth: 'smile' }),
      label('3 shirts!', 420, 150),
    ),
  'interview-time': () =>
    k.scene(
      person({ ...CAST[1], x: 320, left: 'down', right: [400, 440], mouth: 'open' }),
      k.paper(410, 440, { w: 60, h: 76 }),
      k.chatBubble(330, 230, 'First job?', { w: 200, h: 70, size: 28 }),
      person({ ...CAST[6], x: 700, left: 'wave', right: 'down', mouth: 'smile' }),
      k.chatBubble(700, 230, 'Lifeguard!', { w: 200, h: 70, size: 28 }),
      k.clock(512, 560, 40),
    ),
  'back-to-back-stand': () =>
    k.scene(
      person({ ...CAST[0], x: 470, sit: true, left: [512, 560], right: 'down', mouth: 'open' }),
      person({ ...CAST[1], x: 560, sit: true, left: 'down', right: [512, 560], mouth: 'open' }),
      k.raw(
        `<path d="M512 420 L512 300" stroke="${C.coral}" stroke-width="5" stroke-dasharray="1 12" stroke-linecap="round"/><path d="M500 312 l12 -14 l12 14" stroke="${C.coral}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      ),
      label('up!', 512, 200),
    ),
  'jump-rope-line': () =>
    k.outdoor(
      person({
        ...CAST[3],
        x: 320,
        ground: 640,
        left: [260, 560],
        right: [380, 560],
        mouth: 'open',
      }),
      k.raw(
        `<path d="M260 560 Q320 720 380 560" stroke="${C.orange}" stroke-width="6" fill="none"/>`,
      ),
      ...[0, 1, 2].map((i) =>
        person({ ...CAST[i + 4], x: 560 + i * 140, left: 'down', right: 'down', mouth: 'smile' }),
      ),
      label('10 jumps', 320, 200),
    ),
  'balloon-in-the-air': () =>
    k.scene(
      k.balloon(512, 200, C.red, 34),
      ...[0, 1, 2, 3, 4].map((i) =>
        person({
          ...CAST[i],
          x: 180 + i * 165,
          scale: 0.85,
          left: i === 2 ? [500, 300] : 'up',
          right: i === 2 ? 'down' : 'up',
          mouth: 'open',
        }),
      ),
      label('record: 47', 840, 140, { size: 32 }),
    ),
  'switch-places': () =>
    k.scene(
      ...[0, 1, 2, 3, 4].map((i) =>
        k.raw(
          `<ellipse cx="${160 + i * 175}" cy="680" rx="50" ry="14" fill="${C.coral}" opacity="0.4"/>`,
        ),
      ),
      ...[0, 2, 4].map((i) =>
        person({ ...CAST[i], x: 160 + i * 175, scale: 0.85, left: 'down', right: 'down' }),
      ),
      person({
        ...CAST[3],
        x: 420,
        scale: 0.85,
        ground: 660,
        left: 'out',
        right: 'out',
        mouth: 'open',
      }),
      arc(330, 560, 660, 560, { bend: -120 }),
      k.chatBubble(512, 180, 'Switch if you…', { w: 260, h: 70, size: 28 }),
    ),
  'count-to-20': () =>
    k.scene(
      ...[0, 1, 2, 3, 4].map((i) =>
        person({
          ...CAST[i + 1],
          x: 160 + i * 175,
          scale: 0.85,
          left: 'down',
          right: 'down',
          mouth: i === 3 ? 'open' : 'flat',
        }),
      ),
      k.chatBubble(685, 240, '7!', { w: 100, h: 60, size: 30 }),
      label('1 → 20', 300, 180, { size: 44 }),
    ),
  'trust-fall': () =>
    k.scene(
      k.raw(
        `<g transform="rotate(-24 512 690)">${person({ ...CAST[4], x: 512, left: [490, 520], right: [534, 520], mouth: 'open' })}</g>`,
      ),
      person({ ...CAST[0], x: 280, left: [360, 470], right: 'down', mouth: 'smile' }),
      person({ ...CAST[2], x: 220, scale: 0.95, left: 'down', right: [330, 520], mouth: 'smile' }),
      k.raw(`<rect x="120" y="680" width="560" height="22" rx="8" fill="${C.sky}" opacity="0.7"/>`),
      label('ready!', 260, 180),
    ),
  'rapid-icebreakers': () =>
    k.scene(
      person({ ...CAST[3], x: 300, left: 'down', right: [420, 380], mouth: 'open' }),
      k.chatBubble(330, 220, 'Beach or mountains?', { w: 310, h: 70, size: 28 }),
      person({ ...CAST[5], x: 700, left: 'wave', right: 'down', mouth: 'open' }),
      k.chatBubble(740, 220, 'Beach!', { w: 150, h: 70, size: 28 }),
      label('3 s', 520, 420, { size: 40, color: C.coral }),
    ),
  'virtual-group-map': () =>
    k.scene(
      k.raw(
        `<rect x="250" y="130" width="520" height="320" rx="14" fill="${C.sky}" stroke="${C.wood}" stroke-width="10"/><path d="M330 220 q40 -40 90 -10 q30 40 -10 70 q-60 20 -80 -60 Z M520 200 q60 -30 110 10 q20 60 -40 80 q-70 10 -70 -90 Z M600 330 q40 -10 70 20 q-10 40 -60 30 Z" fill="#BFE3A8"/>`,
      ),
      ...[
        [380, 240, C.red],
        [560, 230, C.purple],
        [640, 350, C.yellow],
      ].map(([x, y, c]) =>
        k.raw(
          `<circle cx="${x}" cy="${y}" r="12" fill="${c}"/><path d="M${x} ${y + 10} l0 18" stroke="${c}" stroke-width="5"/>`,
        ),
      ),
      person({ ...CAST[2], x: 170, left: 'down', right: [300, 300], mouth: 'open' }),
      person({ ...CAST[1], x: 880, left: 'up', right: 'down', mouth: 'smile' }),
    ),
};

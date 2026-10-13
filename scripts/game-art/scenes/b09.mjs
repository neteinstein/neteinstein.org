import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;

export default {
  'show-and-tell': () =>
    k.scene(
      person({ ...CAST[1], x: 380, left: 'down', right: [470, 400], mouth: 'open' }),
      k.raw(
        `<rect x="452" y="330" width="56" height="70" rx="6" fill="${C.orange}"/><rect x="460" y="338" width="40" height="40" fill="${C.sky}"/>`,
      ),
      k.chatBubble(380, 220, 'My first camera…', { w: 280, h: 70, size: 28 }),
      person({ ...CAST[2], x: 680, scale: 0.9, left: 'down', right: 'down', mouth: 'smile' }),
      person({ ...CAST[7], x: 850, scale: 0.9, left: 'up', right: 'down', mouth: 'open' }),
    ),
  'what-would-you-do': () =>
    k.scene(
      k.raw(
        `<ellipse cx="512" cy="250" rx="150" ry="50" fill="#F2D27A"/><rect x="502" y="140" width="14" height="110" fill="${C.brown}"/><path d="M509 150 q-60 -10 -80 30 M509 150 q60 -10 80 30 M509 150 q-30 -40 -70 -30 M509 150 q30 -40 70 -30" stroke="${C.green}" stroke-width="12" fill="none" stroke-linecap="round"/>`,
      ),
      label('?', 512, 380, { size: 60, color: C.pink }),
      ...[0, 1, 2].map((i) =>
        person({
          ...CAST[i + 3],
          x: 200 + i * 130,
          scale: 0.85,
          left: i === 1 ? 'head' : 'down',
          right: 'down',
          mouth: 'flat',
        }),
      ),
      ...[0, 1].map((i) =>
        person({
          ...CAST[i],
          x: 700 + i * 130,
          scale: 0.85,
          left: 'down',
          right: i ? 'up' : 'down',
          mouth: 'open',
        }),
      ),
    ),
  'virtual-bingo': () =>
    k.scene(
      k.raw(
        `<rect x="380" y="140" width="260" height="260" rx="10" fill="${C.white}" stroke="${C.grey}" stroke-width="4"/>`,
      ),
      ...Array.from({ length: 25 }, (_, i) =>
        k.raw(
          `<rect x="${390 + (i % 5) * 50}" y="${150 + Math.floor(i / 5) * 50}" width="42" height="42" rx="4" fill="${[0, 6, 12, 18, 24].includes(i) ? C.coral : '#F1EEE8'}"/>`,
        ),
      ),
      person({ ...CAST[4], x: 230, left: 'down', right: 'up', mouth: 'open' }),
      label('Bingo!', 820, 240, { size: 50, color: C.pink }),
      person({ ...CAST[6], x: 820, left: 'down', right: 'down', mouth: 'smile' }),
    ),
  'speed-networking': () =>
    k.scene(
      ...[0, 1, 2].map((i) => [
        person({
          ...CAST[i],
          x: 180 + i * 260,
          scale: 0.85,
          left: 'down',
          right: 'wave',
          mouth: 'open',
        }),
        person({
          ...CAST[i + 3],
          x: 280 + i * 260,
          scale: 0.85,
          left: 'down',
          right: 'down',
          mouth: 'smile',
        }),
      ]),
      k.raw(
        `<circle cx="512" cy="160" r="30" fill="${C.yellow}"/><rect x="505" y="120" width="14" height="12" rx="3" fill="${C.yellow}"/>`,
      ),
      label('3 min', 512, 240, { size: 32 }),
      arc(300, 300, 520, 300, { bend: -50 }),
    ),
  'virtual-talent-show': () =>
    k.scene(
      k.raw(
        `<rect x="300" y="560" width="424" height="60" fill="${C.red}"/><path d="M300 100 L380 100 L340 560 L300 560 Z M724 100 L644 100 L684 560 L724 560 Z" fill="${C.red}" opacity="0.85"/>`,
      ),
      person({
        ...CAST[3],
        x: 512,
        ground: 600,
        left: [460, 300],
        right: [564, 300],
        mouth: 'open',
      }),
      ...[0, 1, 2].map((i) =>
        k.ball(460 + i * 52, 230 - (i % 2) * 40, 14, [C.yellow, C.blue, C.pink][i], 'none'),
      ),
      k.star(160, 300, 18),
      k.star(860, 260, 18),
    ),
  'late-for-work': () =>
    k.scene(
      k.clock(512, 150, 50),
      person({ ...CAST[0], x: 330, left: 'out', right: 'wave', mouth: 'open' }),
      k.chatBubble(300, 280, 'A goose stole my keys!', { w: 330, h: 70, size: 26 }),
      table(620, 900),
      person({
        ...CAST[5],
        x: 760,
        ground: 720,
        scale: 0.9,
        left: 'hip',
        right: 'hip',
        mouth: 'flat',
      }),
    ),
  'this-or-that': () =>
    k.scene(
      label('coffee', 260, 180, { size: 44, color: C.brown }),
      label('or', 512, 180, { size: 32 }),
      label('tea?', 760, 180, { size: 44, color: C.teal }),
      k.raw(
        `<rect x="200" y="230" width="100" height="90" rx="10" fill="${C.brown}"/><path d="M300 250 q30 0 30 25 q0 25 -30 25" stroke="${C.brown}" stroke-width="10" fill="none"/>`,
      ),
      k.raw(
        `<rect x="710" y="240" width="100" height="80" rx="10" fill="${C.teal}"/><path d="M810 255 q26 0 26 22 q0 22 -26 22" stroke="${C.teal}" stroke-width="10" fill="none"/>`,
      ),
      ...[0, 1].map((i) =>
        person({ ...CAST[i], x: 200 + i * 110, scale: 0.85, left: 'down', right: 'down' }),
      ),
      ...[0, 1, 2].map((i) =>
        person({ ...CAST[i + 3], x: 680 + i * 110, scale: 0.85, left: 'down', right: 'down' }),
      ),
    ),
  'scavenger-hunt': () =>
    k.outdoor(
      k.tree(160),
      k.raw(`<path d="M160 620 l-10 30 h20 Z" fill="${C.brown}"/>`),
      person({ ...CAST[2], x: 380, left: 'down', right: [470, 440], mouth: 'open' }),
      k.paper(480, 430, { w: 70, h: 90, lines: 4 }),
      person({ ...CAST[4], x: 600, left: 'down', right: [680, 520], mouth: 'smile' }),
      k.raw(`<path d="M680 500 q20 -30 40 0 v60 h-40 Z" fill="#D9B48A"/>`),
      k.raw(`<ellipse cx="860" cy="660" rx="16" ry="22" fill="${C.brown}"/>`),
      label('✓ pine cone', 860, 400, { size: 28 }),
    ),
  'abc-game': () =>
    k.scene(
      k.paper(512, 280, { w: 220, h: 240, lines: 0 }),
      label('A apple ✓', 512, 220, { size: 26, color: C.dark }),
      label('B book ✓', 512, 260, { size: 26, color: C.dark }),
      label('C …', 512, 300, { size: 26, color: C.dark }),
      k.apple(200, 640, 26),
      k.raw(`<rect x="780" y="620" width="70" height="56" rx="4" fill="${C.purple}"/>`),
      person({ ...CAST[1], x: 320, left: 'down', right: [400, 300], mouth: 'open' }),
      person({ ...CAST[2], x: 700, left: [620, 300], right: 'down', mouth: 'smile' }),
    ),
  'sound-effects': () =>
    k.scene(
      person({
        ...CAST[3],
        x: 512,
        blindfold: true,
        left: 'down',
        right: [700, 420],
        mouth: 'smile',
      }),
      k.raw(
        `<path d="M430 340 q80 -50 160 0" stroke="${C.coral}" stroke-width="5" fill="none" stroke-dasharray="1 12" stroke-linecap="round"/>`,
      ),
      person({ ...CAST[5], x: 820, left: 'down', right: 'down', mouth: 'open' }),
      k.chatBubble(820, 230, 'Moooo!', { w: 170, h: 70, size: 30 }),
      person({ ...CAST[0], x: 200, scale: 0.9, left: 'down', right: 'down' }),
    ),
  'my-superhero-story': () =>
    k.scene(
      k.raw(`<path d="M470 470 L420 640 L512 600 L604 640 L554 470 Z" fill="${C.red}"/>`),
      person({ ...CAST[2], x: 512, left: 'hip', right: 'up', mouth: 'open' }),
      k.raw(`<path d="M480 520 l32 -16 l32 16 l-32 40 Z" fill="${C.yellow}"/>`),
      label('Captain Excel!', 512, 130, { size: 44, color: C.pink }),
      k.sparkle(350, 250, 18),
      k.sparkle(690, 280, 14),
    ),
  'business-pitch': () =>
    k.scene(
      k.lightbulb(330, 200),
      person({ ...CAST[0], x: 330, left: 'down', right: 'wave', mouth: 'open' }),
      person({ ...CAST[1], x: 450, scale: 0.9, left: 'down', right: 'down', mouth: 'smile' }),
      table(620, 920),
      person({
        ...CAST[6],
        x: 700,
        ground: 720,
        scale: 0.85,
        left: 'down',
        right: 'down',
        mouth: 'flat',
      }),
      person({
        ...CAST[3],
        x: 840,
        ground: 720,
        scale: 0.85,
        left: 'up',
        right: 'down',
        mouth: 'flat',
      }),
      k.card(840, 300, { w: 70, h: 50, text: '10', color: C.green }),
    ),
  'frisbee-target': () =>
    k.outdoor(
      k.hoop(780, 670, 90, C.orange),
      k.frisbee(560, 300, C.pink),
      arc(330, 400, 760, 640, { bend: -200 }),
      k.tapeLine(150, 290, 670, C.white),
      person({ ...CAST[5], x: 230, left: 'down', right: [330, 400] }),
    ),
  'cup-pass-relay': () =>
    k.scene(
      ...[0, 1, 2, 3].map((i) =>
        person({
          ...CAST[i + 1],
          x: 200 + i * 200,
          left: i === 1 ? [470, 520] : 'down',
          right: i === 2 ? [530, 520] : 'down',
          mouth: i === 1 || i === 2 ? 'open' : 'smile',
        }),
      ),
      k.cup(500, 540, { color: C.blue, w: 46, h: 54 }),
      arc(420, 420, 620, 420, { bend: -40 }),
      label('elbows only', 512, 160),
    ),
  'balloon-pass': () =>
    k.scene(
      ...[0, 1, 2, 3].map((i) =>
        person({ ...CAST[i], x: 200 + i * 200, left: 'none', right: 'none', mouth: 'smile' }),
      ),
      k.balloon(300, 470, C.green, 34),
      arc(320, 380, 480, 380, { bend: -40 }),
      label('no hands', 512, 160),
    ),
  'hula-hoop-chain': () =>
    k.scene(
      ...[0, 1, 2, 3].map((i) =>
        person({
          ...CAST[i + 2],
          x: 200 + i * 200,
          left: i ? [200 + i * 200 - 100, 560] : 'down',
          right: i < 3 ? [300 + i * 200, 560] : 'down',
          mouth: 'smile',
        }),
      ),
      k.raw(
        `<ellipse cx="400" cy="480" rx="70" ry="160" fill="none" stroke="${C.purple}" stroke-width="12" transform="rotate(-12 400 480)"/>`,
      ),
      arc(440, 280, 620, 300, { bend: -40 }),
    ),
  'water-transfer': () =>
    k.outdoor(
      k.bucket(170, 690, { w: 110, h: 90, color: C.blue }),
      k.raw(`<ellipse cx="170" cy="600" rx="54" ry="10" fill="${C.sky}"/>`),
      k.bucket(860, 690, { w: 110, h: 90, color: C.orange }),
      person({ ...CAST[3], x: 520, left: 'down', right: [610, 460], mouth: 'open' }),
      k.sponge(620, 450),
      k.raw(
        `<circle cx="610" cy="490" r="6" fill="${C.blue}"/><circle cx="625" cy="510" r="5" fill="${C.blue}"/>`,
      ),
      arc(250, 560, 800, 560, { bend: -60 }),
    ),
  'spoon-relay': () =>
    k.scene(
      person({ ...CAST[6], x: 440, left: 'down', right: [540, 470], mouth: 'flat' }),
      k.spoon(530, 472, 590, 468),
      k.ball(592, 452, 12),
      k.raw(`<path d="M820 690 l30 -80 l30 80 Z" fill="${C.orange}"/>`),
      ...[0, 1].map((i) =>
        person({
          ...CAST[i + 1],
          x: 160 + i * 110,
          scale: 0.85,
          left: 'down',
          right: i ? 'up' : 'down',
          mouth: 'open',
        }),
      ),
      arc(620, 420, 830, 580, { bend: -60 }),
    ),
  'feed-your-friend': () =>
    k.scene(
      k.chair(380, 600),
      person({ ...CAST[0], x: 380, sit: true, left: 'down', right: 'down', mouth: 'open' }),
      k.raw(
        `<path d="M340 470 h80 l-10 60 h-60 Z" fill="${C.white}" stroke="${C.grey}" stroke-width="2"/><circle cx="366" cy="440" r="7" fill="#C98A3A"/>`,
      ),
      person({
        ...CAST[5],
        x: 620,
        blindfold: true,
        left: [420, 450],
        right: [600, 500],
        mouth: 'smile',
      }),
      k.spoon(520, 460, 430, 450),
      k.cup(600, 520, { color: C.yellow, w: 40, h: 44 }),
    ),
  'drink-if': () =>
    k.scene(
      k.card(512, 180, { w: 260, h: 80, text: 'Drink if…', color: C.pink }),
      ...[0, 1, 2, 3].map((i) =>
        person({
          ...CAST[i + 2],
          x: 200 + i * 200,
          left: 'down',
          right: i % 2 ? [200 + i * 200 + 70, 520] : 'down',
          mouth: i % 2 ? 'open' : 'smile',
        }),
      ),
      k.glass(470, 540, C.orange),
      k.glass(870, 540, C.yellow),
    ),
};

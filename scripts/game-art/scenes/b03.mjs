import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478;

export default {
  'penny-pitch': () =>
    k.scene(
      k.tapeLine(130, 260, 660),
      ...[
        [560, 2],
        [640, 1],
        [720, 3],
        [800, 5],
        [880, 10],
      ].map(([x, p], i) => [
        k.cup(x, 660 - (i % 2) * 20, {
          color: [C.red, C.blue, C.green, C.purple, C.orange][i],
          w: 44,
          h: 48,
        }),
        label(String(p), x, 580 - (i % 2) * 20, { size: 26 }),
      ]),
      k.coin(520, 360, 12),
      arc(300, 420, 640, 600, { bend: -170 }),
      person({ ...CAST[0], x: 200, left: 'down', right: [300, 420] }),
    ),
  'quarter-bounce': () =>
    k.scene(
      table(200, 824),
      k.bowl(640, T, { w: 110, color: C.teal }),
      arc(340, 380, 470, T - 6, { bend: -10, head: false }),
      arc(472, T - 6, 630, T - 40, { bend: -80 }),
      k.coin(470, T - 10, 11),
      person({ ...CAST[3], x: 270, left: 'down', right: [340, 380], mouth: 'flat' }),
    ),
  'balloon-tennis': () =>
    k.scene(
      k.raw(`<rect x="505" y="610" width="14" height="90" fill="${C.coral}" opacity="0.7"/>`),
      k.balloon(512, 260, C.red, 34),
      arc(340, 360, 490, 260, { bend: -60 }),
      person({ ...CAST[1], x: 260, left: 'down', right: [340, 360] }),
      k.racket(340, 360),
      person({ ...CAST[2], x: 770, left: [690, 360], right: 'down', mouth: 'open' }),
      k.racket(690, 360),
    ),
  'pyramid-pong': () =>
    k.scene(
      table(560, 900),
      ...[
        [4, 0],
        [3, 1],
        [2, 2],
        [1, 3],
      ]
        .flatMap(([count, row]) =>
          Array.from({ length: count }, (_, i) =>
            k.cup(730 + (i - (count - 1) / 2) * 44, T - row * 0, { color: C.red, w: 40, h: 44 }),
          ),
        )
        .slice(0, 4),
      k.cup(708, T - 44, { color: C.red, w: 40, h: 44 }),
      k.cup(752, T - 44, { color: C.red, w: 40, h: 44 }),
      k.cup(730, T - 88, { color: C.red, w: 40, h: 44 }),
      k.ball(560, 300, 12),
      arc(300, 380, 720, T - 100, { bend: -160 }),
      k.tapeLine(160, 300, 660),
      person({ ...CAST[4], x: 220, left: 'down', right: [300, 380] }),
    ),
  'spoon-bounce': () =>
    k.scene(
      table(200, 824),
      k.cup(620, T, { color: C.purple, w: 54, h: 62 }),
      k.spoon(330, 440, 400, 410),
      k.ball(402, 380, 12),
      arc(410, 370, 610, T - 70, { bend: -140 }),
      person({ ...CAST[6], x: 260, left: 'down', right: [330, 442], mouth: 'flat' }),
    ),
  'chopstick-pickup': () =>
    k.scene(
      table(180, 844),
      k.bowl(320, T, { w: 110, color: C.red }),
      k.chocolates(320, T - 34, [C.red, C.yellow, C.blue, C.green, C.orange], 10),
      k.bowl(560, T, { w: 110, color: C.teal }),
      k.chopsticks(700, 400, 470, 360),
      k.raw(`<ellipse cx="466" cy="364" rx="8" ry="6" fill="${C.orange}"/>`),
      arc(340, 400, 540, 420, { bend: -60 }),
      person({ ...CAST[1], x: 770, left: [700, 402], right: 'down', mouth: 'flat' }),
    ),
  'sticky-note-toss': () =>
    k.scene(
      k.raw(
        `<circle cx="770" cy="330" r="130" fill="${C.white}" stroke="${C.coral}" stroke-width="8"/><circle cx="770" cy="330" r="80" fill="none" stroke="${C.coral}" stroke-width="8"/><circle cx="770" cy="330" r="30" fill="${C.coral}"/>`,
      ),
      k.stickyNote(760, 300, C.yellow, 34, 12),
      k.stickyNote(820, 360, C.pink, 34, -10),
      k.stickyNote(700, 360, C.green, 34, 6),
      k.stickyNote(560, 280, C.yellow, 30, 30),
      arc(330, 380, 640, 300, { bend: -110 }),
      k.tapeLine(180, 320, 660),
      person({ ...CAST[3], x: 250, left: 'down', right: [330, 380] }),
    ),
  'paperclip-chain': () =>
    k.scene(
      table(180, 844),
      ...Array.from({ length: 10 }, (_, i) => k.paperclip(420 - (i % 2) * 6, 260 + i * 22, 90)),
      ...Array.from({ length: 8 }, (_, i) =>
        k.paperclip(600 + (i % 4) * 30, T - 8 - Math.floor(i / 4) * 10, i * 40),
      ),
      person({ ...CAST[5], x: 300, left: 'down', right: [418, 248], mouth: 'open' }),
      label('longest!', 690, 160),
    ),
  'rubber-band-stack': () =>
    k.scene(
      table(240, 784),
      k.bottle(512, T, { color: C.sky, h: 190 }),
      ...Array.from({ length: 7 }, (_, i) =>
        k.raw(
          `<rect x="481" y="${T - 14 - i * 14}" width="62" height="7" rx="3" fill="${[C.red, C.yellow, C.blue, C.green, C.purple, C.orange, C.pink][i]}"/>`,
        ),
      ),
      person({ ...CAST[7], x: 680, left: [545, T - 120], right: 'down', mouth: 'flat' }),
    ),
  'post-it-cover': () =>
    k.scene(
      k.raw(
        `<rect x="420" y="160" width="260" height="260" fill="none" stroke="${C.coral}" stroke-width="6" stroke-dasharray="14 10"/>`,
      ),
      ...Array.from({ length: 16 }, (_, i) =>
        i < 11
          ? k.stickyNote(
              453 + (i % 4) * 64,
              193 + Math.floor(i / 4) * 64,
              [C.yellow, C.pink, C.green, C.blue][(i + Math.floor(i / 4)) % 4],
              60,
            )
          : '',
      ),
      person({ ...CAST[2], x: 760, left: [650, 330], right: 'down', mouth: 'flat' }),
      k.stickyNote(646, 326, C.yellow, 40, 8),
    ),
  'card-catch': () =>
    k.scene(
      k.bucket(760, 690, { w: 130, h: 90, color: C.teal }),
      k.card(560, 330, { w: 60, h: 44, rotate: -20, text: '♥', color: C.red }),
      k.card(740, 590, { w: 60, h: 44, rotate: 10, text: '♣', color: C.dark }),
      arc(330, 400, 740, 560, { bend: -160 }),
      k.tapeLine(150, 290, 660),
      person({ ...CAST[0], x: 230, left: 'down', right: [330, 400], mouth: 'flat' }),
    ),
  'sock-match': () =>
    k.scene(
      k.sock(300, 680, C.pink, -20),
      k.sock(370, 690, C.blue, 30),
      k.sock(250, 690, C.green, 60),
      k.sock(420, 670, C.yellow, -60),
      k.sock(340, 640, C.purple, 10),
      k.sock(700, 680, C.red, 0),
      k.sock(730, 680, C.red, 0),
      label('pair!', 715, 560, { size: 34, color: C.pink }),
      person({
        ...CAST[4],
        x: 520,
        scale: 0.85,
        left: [380, 620],
        right: [690, 620],
        mouth: 'open',
      }),
    ),
  'button-sort': () =>
    k.scene(
      table(180, 844),
      ...[
        [300, C.red],
        [330, C.blue],
        [360, C.yellow],
        [315, C.green],
        [345, C.red],
        [375, C.blue],
      ].map(([x, c], i) => k.button(x, T - 12 - (i > 2 ? 18 : 0), 12, c)),
      ...[C.red, C.blue, C.yellow, C.green].map((c, i) => [
        k.bowl(480 + i * 90, T, { w: 74, color: C.grey }),
        k.button(480 + i * 90, T - 22, 11, c),
      ]),
      person({ ...CAST[6], x: 760, scale: 1, left: [570, T - 40], right: 'down', mouth: 'flat' }),
    ),
  'puzzle-speed': () =>
    k.scene(
      table(180, 844),
      k.raw(`<rect x="300" y="${T - 10}" width="200" height="10" fill="${C.sky}"/>`),
      ...[0, 1, 2, 3].map((i) =>
        k.puzzle(320 + i * 42, T - 12, 38, [C.orange, C.blue, C.green, C.pink][i]),
      ),
      k.puzzle(560, T - 4, 34, C.yellow),
      k.puzzle(610, T - 2, 30, C.purple),
      person({ ...CAST[3], x: 730, left: [600, T - 30], right: 'down', mouth: 'flat' }),
      label('1 min', 400, 150),
    ),
  'toilet-paper-unroll': () =>
    k.scene(
      k.raw(
        `<path d="M420 360 C 450 520 520 560 600 640 C 640 680 720 690 800 670" stroke="${C.white}" stroke-width="30" fill="none" stroke-linecap="round"/><path d="M420 360 C 450 520 520 560 600 640 C 640 680 720 690 800 670" stroke="${C.grey}" stroke-width="2" fill="none" stroke-dasharray="2 30"/>`,
      ),
      person({ ...CAST[1], x: 330, left: 'none', right: [410, 350], mouth: 'open' }),
      k.roll(410, 370, { r: 24, h: 44 }),
      label('one hand', 640, 200),
    ),
  'ring-toss': () =>
    k.scene(
      ...[
        [620, C.green],
        [680, C.blue],
        [740, C.green],
        [650, C.red],
        [710, C.orange],
      ].map(([x, c], i) => k.bottle(x, i < 3 ? 680 : 640, { color: c, h: 100 })),
      k.raw(
        `<ellipse cx="680" cy="600" rx="26" ry="8" fill="none" stroke="${C.pink}" stroke-width="7"/>`,
      ),
      k.raw(
        `<ellipse cx="480" cy="330" rx="30" ry="12" fill="none" stroke="${C.yellow}" stroke-width="7" transform="rotate(-15 480 330)"/>`,
      ),
      arc(320, 400, 650, 520, { bend: -170 }),
      k.tapeLine(160, 300, 660),
      person({ ...CAST[2], x: 230, left: 'down', right: [320, 400] }),
    ),
  'shoe-toss': () =>
    k.scene(
      k.basket(790, 690, { w: 150, h: 100 }),
      k.shoe(780, 600, C.purple, -20),
      k.shoe(540, 280, C.red, -40),
      arc(330, 400, 760, 580, { bend: -190 }),
      k.tapeLine(160, 300, 660),
      person({ ...CAST[5], x: 230, left: 'down', right: [330, 400], mouth: 'open' }),
    ),
  'sock-ball-throw': () =>
    k.scene(
      ...[
        [500, '1'],
        [680, '3'],
        [860, '5'],
      ].map(([x, p]) => [
        k.bucket(x, 690, { w: 90, h: 70, color: [C.teal, C.purple, C.orange][Number(p) % 3] }),
        label(p, x, 580, { size: 34 }),
      ]),
      k.raw(
        `<circle cx="620" cy="300" r="20" fill="${C.pink}"/><path d="M604 296 q16 10 32 0" stroke="${C.white}" stroke-width="3" fill="none"/>`,
      ),
      arc(300, 400, 860, 600, { bend: -230 }),
      k.tapeLine(130, 270, 660),
      person({ ...CAST[7], x: 210, left: 'down', right: [300, 400] }),
    ),
  'lego-tower': () =>
    k.scene(
      table(200, 824),
      ...Array.from({ length: 12 }, (_, i) =>
        k.brick(430 + (i % 2) * 4, T - i * 22, [C.red, C.yellow, C.blue, C.green][i % 4], 44),
      ),
      k.raw(
        `<path d="M520 ${T} L520 ${T - 264}" stroke="${C.coral}" stroke-width="3"/><path d="M510 ${T - 264} h20 M510 ${T} h20" stroke="${C.coral}" stroke-width="3"/>`,
      ),
      person({ ...CAST[4], x: 670, left: [455, T - 270], right: 'down', mouth: 'open' }),
    ),
  'straw-water-transfer': () =>
    k.scene(
      table(200, 824),
      k.glass(400, T, C.blue),
      k.raw(
        `<rect x="602" y="${T - 60}" width="36" height="60" rx="5" fill="${C.sky}" opacity="0.8"/><rect x="605" y="${T - 14}" width="30" height="11" rx="4" fill="${C.blue}"/>`,
      ),
      k.straw(620, T - 80, 600, T - 200, C.pink),
      k.raw(
        `<circle cx="620" cy="${T - 70}" r="5" fill="${C.blue}"/><circle cx="621" cy="${T - 52}" r="4" fill="${C.blue}"/>`,
      ),
      arc(410, T - 90, 600, T - 120, { bend: -60 }),
      person({ ...CAST[0], x: 770, left: [600, T - 206], right: 'down', mouth: 'flat' }),
    ),
};

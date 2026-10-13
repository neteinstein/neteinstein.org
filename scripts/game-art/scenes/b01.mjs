import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478; // table top

export default {
  'cereal-scramble': () =>
    k.scene(
      label('Done!', 220, 140, { size: 46, color: C.pink }),
      table(150, 874),
      k.raw(
        `<rect x="300" y="${T - 70}" width="120" height="70" rx="4" fill="${C.yellow}"/><text x="360" y="${T - 28}" font-family="Inter, Arial" font-weight="800" font-size="24" fill="${C.red}" text-anchor="middle">CEREAL</text>`,
      ),
      k.puzzle(560, T - 4, 34, C.yellow),
      k.puzzle(610, T - 2, 30, C.orange),
      k.puzzle(660, T - 6, 34, C.yellow),
      k.puzzle(700, T - 2, 28, C.red),
      person({ ...CAST[2], x: 200, left: 'up', right: 'up', mouth: 'open' }),
      person({ ...CAST[1], x: 820, left: [710, 470], right: 'down', mouth: 'flat' }),
    ),
  'thread-it': () =>
    k.scene(
      label('10 needles', 512, 130),
      table(220, 804),
      k.raw(`<rect x="430" y="${T - 34}" width="170" height="34" rx="8" fill="${C.yellow}"/>`),
      ...[450, 480, 510, 540, 570].map((x) => k.needle(x, T - 30, 66)),
      k.raw(
        `<path d="M462 ${T - 86} q40 -60 90 -20" stroke="${C.red}" stroke-width="3" fill="none"/>`,
      ),
      person({ ...CAST[3], x: 360, left: [430, 440], right: [460, 400] }),
      person({ ...CAST[4], x: 700, left: [630, 420], right: 'down', mouth: 'flat' }),
    ),
  'scoop-it-up': () =>
    k.scene(
      table(180, 844),
      k.bowl(300, T, { w: 110 }),
      k.ball(280, T - 40, 13),
      k.ball(308, T - 42, 13),
      k.ball(322, T - 30, 13),
      k.bowl(600, T, { w: 110, color: C.green }),
      k.ball(600, T - 28, 13),
      arc(330, 380, 580, 400, { bend: -90 }),
      k.spoon(700, 430, 470, 330),
      k.ball(470, 318, 13),
      person({ ...CAST[0], x: 790, left: [700, 430], right: 'down', mouth: 'flat' }),
    ),
  'rice-bowl': () =>
    k.scene(
      table(220, 804),
      k.bowl(330, T, { w: 110, color: C.red }),
      k.raw(`<ellipse cx="330" cy="${T - 36}" rx="48" ry="12" fill="${C.white}"/>`),
      k.bowl(570, T, { w: 110, color: C.teal }),
      k.raw(`<ellipse cx="570" cy="${T - 32}" rx="22" ry="6" fill="${C.white}"/>`),
      k.chopsticks(690, 410, 470, 370),
      k.raw(
        `<circle cx="466" cy="374" r="5" fill="${C.white}"/><circle cx="474" cy="378" r="4" fill="${C.white}"/>`,
      ),
      arc(350, 400, 545, 420, { bend: -50 }),
      person({ ...CAST[5], x: 770, left: [690, 412], right: 'down', mouth: 'flat' }),
    ),
  'apple-stacks': () =>
    k.scene(
      label('3 s', 380, 130),
      table(200, 824),
      ...[0, 1, 2, 3, 4].map((i) => k.apple(380, T - 22 - i * 40, 22, i % 2 ? C.red : '#C72C38')),
      k.apple(620, T - 22, 22, C.green),
      k.apple(670, T - 22, 22, C.green),
      k.apple(645, T - 62, 22, C.green),
      person({ ...CAST[2], x: 250, left: 'up', right: 'up', mouth: 'open' }),
      person({ ...CAST[1], x: 760, left: [690, 430], right: 'down', mouth: 'flat' }),
    ),
  'yank-it': () =>
    k.scene(
      table(250, 774),
      ...[0, 1, 2, 3].map((i) => k.cup(470, T - i * 52, { color: C.red, w: 46, h: 46 })),
      ...[1, 2, 3].map((i) =>
        k.raw(
          `<rect x="430" y="${T - i * 52 + 1}" width="80" height="6" rx="2" fill="${C.white}" stroke="${C.grey}" stroke-width="2"/>`,
        ),
      ),
      k.raw(
        `<rect x="540" y="${T - 160}" width="80" height="6" rx="2" fill="${C.white}" stroke="${C.grey}" stroke-width="2" transform="rotate(-10 580 ${T - 160})"/>`,
      ),
      arc(520, T - 150, 640, T - 175, { bend: -10 }),
      person({ ...CAST[3], x: 680, left: [630, T - 160], right: 'down', mouth: 'open' }),
    ),
  'penny-stack': () =>
    k.scene(
      label('25', 420, 130, { size: 56 }),
      table(240, 784),
      k.coinStack(420, T - 6, 14),
      k.coin(520, T - 8, 10),
      k.coin(548, T - 8, 10),
      k.coin(575, T - 8, 10),
      person({ ...CAST[6], x: 620, left: 'none', right: [450, T - 110], mouth: 'flat' }),
    ),
  'mummify-me': () =>
    k.scene(
      label('1 min', 512, 120),
      person({ ...CAST[1], x: 420, left: 'front', right: 'front', mouth: 'open' }),
      k.raw(
        [520, 560, 600, 640]
          .map(
            (y, i) =>
              `<rect x="${360}" y="${y - (i % 2) * 6}" width="120" height="22" rx="8" fill="${C.white}" stroke="${C.grey}" stroke-width="2" transform="rotate(${i % 2 ? 6 : -6} 420 ${y})"/>`,
          )
          .join(''),
      ),
      k.raw(
        `<rect x="362" y="420" width="116" height="20" rx="8" fill="${C.white}" stroke="${C.grey}" stroke-width="2" transform="rotate(-8 420 430)"/>`,
      ),
      k.roll(640, 560, { r: 24, h: 46 }),
      k.raw(
        `<path d="M620 540 Q540 560 482 600" stroke="${C.white}" stroke-width="16" fill="none"/>`,
      ),
      person({ ...CAST[0], x: 700, left: [640, 520], right: 'down' }),
    ),
  'tissue-toss': () =>
    k.scene(
      ...[
        [380, 300, -20],
        [470, 210, 15],
        [600, 260, -8],
        [330, 190, 30],
        [640, 160, -25],
        [540, 330, 40],
      ].map(([x, y, r]) =>
        k.raw(
          `<path d="M${x} ${y} q40 -44 80 0 q-24 40 -80 0 Z" fill="${C.white}" stroke="${C.grey}" stroke-width="3" transform="rotate(${r} ${x + 40} ${y})"/>`,
        ),
      ),
      k.tissueBox(512, 520, 110),
      person({ ...CAST[4], x: 512, left: [470, 515], right: [560, 400], mouth: 'open' }),
    ),
  'numbers-in-order': () =>
    k.scene(
      ...[0, 1, 2, 3, 4, 5].map((i) =>
        k.card(430 + i * 66, 650, { text: String(i), w: 52, h: 66, color: C.teal }),
      ),
      k.card(150, 640, { text: '9', w: 52, h: 66, rotate: -18, color: C.teal }),
      k.card(220, 660, { text: '7', w: 52, h: 66, rotate: 12, color: C.teal }),
      person({ ...CAST[2], x: 300, left: 'up', right: 'up', mouth: 'open' }),
      arc(330, 560, 420, 610, { bend: -40 }),
    ),
  'spoon-catapult': () =>
    k.scene(
      table(120, 904),
      k.raw(
        `<path d="M260 ${T - 4} L380 ${T - 40}" stroke="${C.blue}" stroke-width="8" stroke-linecap="round"/><ellipse cx="385" cy="${T - 44}" rx="18" ry="11" fill="${C.blue}" transform="rotate(-16 385 ${T - 44})"/>`,
      ),
      arc(390, T - 60, 700, T - 60, { bend: -220 }),
      k.ball(560, 250, 14),
      k.cup(720, T, { color: C.purple, w: 60, h: 70 }),
      person({ ...CAST[3], x: 200, left: 'down', right: [262, T - 14], mouth: 'flat' }),
    ),
  'sticky-marbles': () =>
    k.scene(
      table(100, 924),
      k.raw(`<rect x="760" y="${T - 4}" width="110" height="8" rx="2" fill="${C.yellow}"/>`),
      k.marble(790, T - 9, 9, C.blue),
      k.marble(830, T - 9, 9, C.red),
      k.marble(520, T - 9, 9, C.green),
      k.raw(
        `<path d="M300 ${T - 20} L500 ${T - 20}" stroke="${C.coral}" stroke-width="4" stroke-dasharray="1 12" stroke-linecap="round"/>`,
      ),
      arc(530, T - 26, 750, T - 22, { bend: -10 }),
      person({ ...CAST[7], x: 200, left: 'down', right: [270, T - 14] }),
    ),
  'm-and-m-matchmaking': () =>
    k.scene(
      table(200, 824),
      k.chocolates(300, T - 6),
      ...[C.red, C.yellow, C.blue, C.green].map((c, i) =>
        k.cup(440 + i * 70, T, { color: c, w: 50, h: 56 }),
      ),
      k.raw(`<ellipse cx="510" cy="380" rx="9" ry="7" fill="${C.yellow}"/>`),
      arc(320, 420, 508, 412, { bend: -70 }),
      person({ ...CAST[4], x: 790, left: [522, 384], right: 'none', mouth: 'flat' }),
    ),
  'ping-pong-drop': () =>
    k.scene(
      k.chair(440, 560),
      person({ ...CAST[0], x: 440, ground: 548, scale: 0.95, left: 'down', right: [540, 300] }),
      k.ball(560, 360, 13),
      arc(560, 380, 640, GROUND_MINUS(), { bend: -20 }),
      k.cup(650, 680, { color: C.red, w: 50, h: 58 }),
    ),
  'stone-face': () =>
    k.scene(
      label('…', 512, 160, { size: 70 }),
      person({ ...CAST[3], x: 380, mouth: 'flat', left: 'down', right: 'down' }),
      person({ ...CAST[1], x: 640, mouth: 'open', left: 'head', right: 'head' }),
      k.plate(860, 560, { w: 90 }),
      k.raw(
        `<ellipse cx="860" cy="545" rx="38" ry="20" fill="${C.white}" stroke="${C.grey}" stroke-width="2"/>`,
      ),
    ),
  'candy-hands': () =>
    k.scene(
      table(200, 824),
      k.candy(330, T - 14, C.pink),
      k.candy(380, T - 14, C.purple, 20),
      k.candy(310, T - 36, C.yellow, -15),
      k.candy(360, T - 40, C.teal, 10),
      k.raw(
        `<circle cx="500" cy="${T - 14}" r="13" fill="${C.brown}"/><circle cx="540" cy="${T - 14}" r="13" fill="${C.brown}"/>`,
      ),
      k.raw(
        `<path d="M580 ${T - 6} l14 -10 l10 12 l-12 6 Z" fill="${C.pink}"/><path d="M610 ${T - 4} l16 -6 l4 12 Z" fill="${C.purple}"/>`,
      ),
      label('one hand', 440, 150),
      person({ ...CAST[2], x: 740, left: [560, T - 60], right: 'none', mouth: 'flat' }),
    ),
  'stack-it-up': () =>
    k.scene(
      table(220, 804),
      ...Array.from({ length: 9 }, (_, i) =>
        k.raw(
          `<rect x="372" y="${T - 14 - i * 15}" width="56" height="14" rx="6" fill="${i % 1 ? C.white : C.dark}"/><rect x="374" y="${T - 9 - i * 15}" width="52" height="4" fill="${C.white}"/>`,
        ),
      ),
      k.plate(720, T - 4, { w: 120 }),
      k.raw(`<rect x="692" y="${T - 22}" width="56" height="14" rx="6" fill="${C.dark}"/>`),
      person({ ...CAST[5], x: 560, left: [430, T - 160], right: 'down', mouth: 'flat' }),
    ),
  'volcanic-eruption': () =>
    k.outdoor(
      k.bottle(520, 670, { color: '#5A3420', h: 160, label: true }),
      k.splash(520, 520, '#7A4A2A', 1.6),
      k.raw(
        `<circle cx="470" cy="300" r="8" fill="#7A4A2A"/><circle cx="580" cy="320" r="7" fill="#7A4A2A"/>`,
      ),
      person({ ...CAST[2], x: 300, left: 'up', right: 'up', mouth: 'open' }),
      person({ ...CAST[1], x: 760, left: 'wave', right: 'down', mouth: 'open' }),
    ),
  'roll-the-dice': () =>
    k.scene(
      label('5 + 3 = 8', 512, 130),
      table(220, 804),
      k.die(470, T - 26, 44, 5),
      k.die(540, T - 22, 40, 3),
      k.paper(680, T - 10, { w: 80, h: 16, lines: 0 }),
      person({ ...CAST[6], x: 330, left: 'down', right: [430, T - 50], mouth: 'open' }),
      person({ ...CAST[0], x: 750, left: [690, T - 20], right: 'down', mouth: 'flat' }),
    ),
  'unstack-it': () =>
    k.scene(
      table(220, 804),
      k.jenga(470, T, 14),
      k.raw(
        `<rect x="560" y="${T - 15}" width="72" height="15" rx="2" fill="#E2B97F" stroke="#B88A55" stroke-width="2"/><rect x="560" y="${T - 30}" width="72" height="15" rx="2" fill="#E2B97F" stroke="#B88A55" stroke-width="2"/>`,
      ),
      k.raw(
        `<rect x="500" y="${T - 128}" width="40" height="15" rx="2" fill="#E2B97F" stroke="#B88A55" stroke-width="2"/>`,
      ),
      person({ ...CAST[3], x: 650, left: [545, T - 120], right: 'down', mouth: 'flat' }),
    ),
};

function GROUND_MINUS() {
  return 630;
}

import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478;

const cardHouse = (x, y, floors) => {
  const parts = [];
  for (let f = 0; f < floors; f++) {
    const pairs = floors - f;
    const base = y - f * 74;
    for (let p = 0; p < pairs; p++) {
      const cx = x + (p - (pairs - 1) / 2) * 64;
      parts.push(
        `<path d="M${cx - 28} ${base} L${cx} ${base - 70} L${cx + 28} ${base}" stroke="${C.red}" stroke-width="6" fill="none" stroke-linejoin="round"/>`,
      );
    }
    if (f < floors - 1)
      parts.push(
        `<rect x="${x - (pairs - 1) * 32 - 12}" y="${base - 74}" width="${(pairs - 1) * 64 + 24}" height="5" fill="${C.red}"/>`,
      );
  }
  return parts.join('');
};

export default {
  'card-house': () =>
    k.scene(
      table(200, 824),
      k.raw(cardHouse(480, T, 3)),
      person({ ...CAST[1], x: 720, left: [600, T - 90], right: 'down', mouth: 'flat' }),
      label('3 floors', 480, 140),
    ),
  'cheerio-spaghetti': () =>
    k.scene(
      table(200, 824),
      k.raw(
        `<ellipse cx="460" cy="${T - 8}" rx="34" ry="12" fill="${C.green}"/><rect x="457" y="${T - 260}" width="5" height="252" fill="#F2D27A"/>`,
      ),
      ...Array.from({ length: 6 }, (_, i) =>
        k.raw(
          `<ellipse cx="460" cy="${T - 20 - i * 18}" rx="18" ry="7" fill="none" stroke="#D9A066" stroke-width="7"/>`,
        ),
      ),
      k.bowl(600, T, { w: 90, color: C.blue }),
      k.raw(
        `<ellipse cx="460" cy="${T - 240}" rx="18" ry="7" fill="none" stroke="#D9A066" stroke-width="7"/>`,
      ),
      person({ ...CAST[3], x: 740, left: [480, T - 240], right: 'down', mouth: 'flat' }),
      label('10', 300, 160, { size: 56 }),
    ),
  'bubble-catch': () =>
    k.outdoor(
      k.bubble(560, 260, 26),
      k.bubble(620, 200, 18),
      k.bubble(500, 180, 22),
      k.bubble(680, 300, 16),
      k.wand(430, 420, 520, 330),
      k.bubble(520, 312, 22),
      person({ ...CAST[2], x: 360, left: 'down', right: [430, 420], mouth: 'puff' }),
      label('caught!', 760, 150),
    ),
  'beans-on-a-knife': () =>
    k.scene(
      table(180, 844),
      k.bowl(320, T, { w: 110, color: C.yellow }),
      ...[300, 320, 340, 310, 330].map((x, i) =>
        k.raw(
          `<ellipse cx="${x}" cy="${T - 38 - (i > 2 ? 8 : 0)}" rx="8" ry="5" fill="${C.brown}"/>`,
        ),
      ),
      k.bowl(570, T, { w: 110, color: C.teal }),
      k.raw(
        `<path d="M700 410 L520 380" stroke="${C.steel}" stroke-width="10" stroke-linecap="round"/><path d="M700 410 L740 418" stroke="${C.brown}" stroke-width="14" stroke-linecap="round"/><ellipse cx="540" cy="378" rx="8" ry="5" fill="${C.brown}"/><ellipse cx="558" cy="381" rx="8" ry="5" fill="${C.brown}"/>`,
      ),
      arc(350, 400, 545, 420, { bend: -50 }),
      person({ ...CAST[5], x: 790, left: [740, 418], right: 'down', mouth: 'flat' }),
    ),
  'hanger-stack': () =>
    k.scene(
      table(180, 600),
      ...Array.from({ length: 5 }, (_, i) =>
        k.hanger(560 + i * 18, T + 30 + i * 30, [C.pink, C.blue, C.green, C.purple, C.orange][i]),
      ),
      person({ ...CAST[4], x: 770, left: [650, 580], right: 'down', mouth: 'flat' }),
      label('5', 640, 150, { size: 56 }),
    ),
  'straw-tower': () =>
    k.scene(
      table(200, 824),
      k.raw(
        `<path d="M420 ${T} L480 ${T - 280} L540 ${T} M440 ${T - 90} L520 ${T - 90} M455 ${T - 180} L505 ${T - 180} M480 ${T - 280} L480 ${T - 320}" stroke="${C.pink}" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M430 ${T - 40} L530 ${T - 140}" stroke="${C.blue}" stroke-width="8" stroke-linecap="round"/><path d="M530 ${T - 40} L430 ${T - 140}" stroke="${C.yellow}" stroke-width="8" stroke-linecap="round"/>`,
      ),
      k.straw(620, T - 6, 700, T - 6, C.green),
      k.straw(625, T - 16, 705, T - 16, C.pink),
      person({ ...CAST[0], x: 300, left: 'up', right: 'up', mouth: 'open' }),
      person({ ...CAST[7], x: 760, left: [690, T - 40], right: 'down', mouth: 'flat' }),
    ),
  'red-or-black': () =>
    k.scene(
      table(200, 824),
      ...[0, 1, 2].map((i) =>
        k.card(420 + i * 3, T - 40 - i * 2, { text: '♥', color: C.red, w: 50, h: 70 }),
      ),
      ...[0, 1, 2].map((i) =>
        k.card(600 + i * 3, T - 40 - i * 2, { text: '♠', color: C.dark, w: 50, h: 70 }),
      ),
      k.card(512, 330, { text: '♦', color: C.red, w: 50, h: 70, rotate: -15 }),
      arc(500, 360, 430, 410, { bend: -30 }),
      person({ ...CAST[6], x: 300, left: 'down', right: [480, 330], mouth: 'flat' }),
    ),
  'bottle-caps': () =>
    k.scene(
      table(180, 844),
      ...[0, 1, 2, 3, 4].map((i) =>
        k.bottle(340 + i * 70, T, { color: [C.blue, C.green, C.sky, C.blue, C.green][i], h: 100 }),
      ),
      k.raw(
        `<rect x="${340 + 2 * 70 - 11}" y="${T - 140}" width="22" height="12" rx="3" fill="${C.red}" transform="rotate(20 ${340 + 2 * 70} ${T - 134})"/>`,
      ),
      person({ ...CAST[3], x: 740, left: [482, T - 130], right: 'down', mouth: 'flat' }),
    ),
  'thread-a-needle': () =>
    k.scene(
      k.raw(
        `<rect x="505" y="160" width="10" height="300" rx="5" fill="${C.steel}"/><ellipse cx="510" cy="200" rx="6" ry="24" fill="${C.wall}" stroke="${C.steel}" stroke-width="4"/>`,
      ),
      k.raw(
        `<path d="M380 300 Q450 230 506 205 Q560 180 640 230" stroke="${C.red}" stroke-width="4" fill="none"/>`,
      ),
      person({ ...CAST[1], x: 300, left: 'down', right: [380, 300], mouth: 'flat' }),
      person({ ...CAST[2], x: 720, left: [520, 420], right: 'down', mouth: 'flat' }),
    ),
  'tie-your-shoes': () =>
    k.scene(
      person({ ...CAST[4], x: 330, left: [330, 680], right: [360, 680], mouth: 'flat' }),
      // A close-up of the shoe and its bow.
      k.raw(
        `<circle cx="700" cy="420" r="170" fill="${C.white}" stroke="${C.grey}" stroke-width="6"/><path d="M590 480 L590 400 L670 400 Q700 450 790 460 Q820 470 810 490 L590 490 Z" fill="${C.ink}"/><rect x="585" y="482" width="230" height="14" rx="7" fill="${C.white}" stroke="${C.grey}" stroke-width="2"/>`,
      ),
      k.raw(
        `<path d="M680 420 q-50 -60 -70 -10 q20 30 70 10 q50 -60 70 -10 q-20 30 -70 10" stroke="${C.red}" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M680 420 l-30 60 M680 420 l26 58" stroke="${C.red}" stroke-width="7" stroke-linecap="round"/>`,
      ),
      k.raw(
        `<path d="M420 640 L560 520" stroke="${C.grey}" stroke-width="4" stroke-dasharray="2 10" stroke-linecap="round"/>`,
      ),
      label('bow!', 700, 200),
    ),
  'sock-layers': () =>
    k.scene(
      person({ ...CAST[0], x: 420, sit: true, left: [520, 600], right: 'down', mouth: 'open' }),
      ...[0, 1, 2, 3].map((i) =>
        k.raw(
          `<rect x="${500 + i * 6}" y="${640 - i * 18}" width="${130 - i * 12}" height="54" rx="20" fill="${[C.pink, C.blue, C.yellow, C.green][i]}"/>`,
        ),
      ),
      k.sock(700, 690, C.purple, -20),
      k.sock(760, 690, C.red, 30),
      k.sock(830, 690, C.teal, 0),
      label('4 socks', 600, 150),
    ),
  'button-up': () =>
    k.scene(
      person({
        ...CAST[3],
        x: 400,
        scale: 1.25,
        left: [400, 520],
        right: [420, 470],
        mouth: 'flat',
      }),
      k.raw(
        `<path d="M342 462 h116 v140 a30 30 0 0 1 -30 30 h-56 a30 30 0 0 1 -30 -30 Z" fill="${C.white}"/><path d="M400 462 L400 632" stroke="${C.grey}" stroke-width="4"/><path d="M372 462 L400 492 L428 462" stroke="${C.grey}" stroke-width="4" fill="none"/>`,
      ),
      ...[505, 540, 575, 610].map((y, i) =>
        k.raw(`<circle cx="400" cy="${y}" r="9" fill="${i < 2 ? C.blue : C.grey}"/>`),
      ),
      k.raw(
        `<circle cx="720" cy="400" r="120" fill="${C.white}" stroke="${C.grey}" stroke-width="6"/><rect x="700" y="290" width="40" height="220" fill="${C.wall}"/><path d="M720 290 L720 510" stroke="${C.grey}" stroke-width="4"/>`,
      ),
      k.button(720, 360, 22, C.blue),
      k.raw(`<ellipse cx="720" cy="450" rx="6" ry="22" fill="${C.dark}"/>`),
      label('2 of 4', 720, 170),
    ),
  'string-braid': () =>
    k.scene(
      table(200, 824),
      k.raw(`<rect x="300" y="${T - 10}" width="40" height="12" fill="${C.grey}"/>`),
      k.raw(
        `<path d="M320 ${T - 4} q30 -10 60 0 t60 0 t60 0" stroke="${C.red}" stroke-width="7" fill="none"/><path d="M320 ${T - 4} q30 10 60 0 t60 0 t60 0" stroke="${C.blue}" stroke-width="7" fill="none"/><path d="M320 ${T - 4} L500 ${T - 4}" stroke="${C.yellow}" stroke-width="7" fill="none"/>`,
      ),
      k.raw(
        `<path d="M500 ${T - 4} L600 380 M500 ${T - 4} L610 400 M500 ${T - 4} L620 420" stroke-width="6" stroke="${C.red}" fill="none"/>`,
      ),
      person({ ...CAST[5], x: 700, left: [610, 400], right: 'down', mouth: 'flat' }),
    ),
  'paper-plane-target': () =>
    k.scene(
      k.basket(800, 690, { w: 150, h: 100 }),
      k.plane(560, 260, { rotate: 15 }),
      arc(330, 380, 780, 580, { bend: -200 }),
      k.tapeLine(160, 300, 660),
      person({ ...CAST[6], x: 230, left: 'down', right: [330, 380] }),
      k.paper(140, 560, { w: 50, h: 60, lines: 0, rotate: -10 }),
    ),
  'coin-rolls': () =>
    k.scene(
      table(200, 824),
      k.coinStack(380, T - 6, 6),
      k.raw(
        `<rect x="480" y="${T - 22}" width="90" height="22" rx="10" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/><rect x="590" y="${T - 22}" width="90" height="22" rx="10" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/>`,
      ),
      label('10', 380, 140, { size: 50 }),
      person({ ...CAST[4], x: 760, left: [600, T - 40], right: 'down', mouth: 'flat' }),
    ),
  'bubble-wrap-pop': () =>
    k.scene(
      table(200, 824),
      k.raw(`<rect x="340" y="${T - 10}" width="300" height="10" fill="${C.sky}" opacity="0.6"/>`),
      ...Array.from({ length: 12 }, (_, i) =>
        k.raw(
          `<circle cx="${355 + i * 25}" cy="${T - 14}" r="10" fill="${C.sky}" opacity="${i < 7 ? 0.25 : 0.8}" stroke="${C.blue}" stroke-width="2"/>`,
        ),
      ),
      label('POP!', 470, 330, { size: 44, color: C.pink }),
      person({ ...CAST[2], x: 760, left: [560, T - 24], right: 'down', mouth: 'open' }),
    ),
  'lego-sort': () =>
    k.scene(
      table(180, 844),
      k.brick(300, T, C.red),
      k.brick(340, T, C.blue, 22),
      k.brick(320, T - 22, C.yellow),
      k.brick(280, T - 22, C.green, 22),
      ...[C.red, C.blue, C.yellow, C.green].map((c, i) => [
        k.bowl(460 + i * 90, T, { w: 76, color: C.grey }),
        k.brick(460 + i * 90, T - 18, c, 22),
      ]),
      person({ ...CAST[7], x: 770, left: [560, T - 50], right: 'down', mouth: 'flat' }),
    ),
  'yarn-ball-wind': () =>
    k.scene(
      k.raw(
        `<path d="M140 680 C 220 640 300 700 380 660 S 520 640 560 600" stroke="${C.pink}" stroke-width="7" fill="none"/>`,
      ),
      k.yarn(580, 560, 40),
      person({ ...CAST[1], x: 680, left: [600, 540], right: [560, 560], mouth: 'flat' }),
    ),
  'phone-alphabet': () =>
    k.scene(
      k.raw(
        `<rect x="440" y="150" width="150" height="260" rx="20" fill="${C.dark}"/><rect x="452" y="172" width="126" height="210" rx="6" fill="${C.white}"/>`,
      ),
      label('ABCDEFG', 515, 220, { size: 22, color: C.dark }),
      label('HIJKLM|', 515, 250, { size: 22, color: C.dark }),
      person({ ...CAST[0], x: 360, left: 'down', right: [450, 380], mouth: 'flat' }),
      label('A–Z', 780, 160, { size: 50 }),
    ),
  'cup-pattern': () =>
    k.scene(
      table(200, 824),
      k.card(300, T - 50, { w: 90, h: 100 }),
      k.raw(
        `<g transform="translate(300 ${T - 50}) scale(0.35) translate(-300 -${T - 50})">${k.cupPyramid(300, T + 30, 3, { color: C.red })}</g>`,
      ),
      ...[0, 1, 2].flatMap((row) =>
        Array.from({ length: 3 - row }, (_, i) =>
          k.cup(520 + (i - (2 - row) / 2) * 50, T - row * 46, {
            color: (i + row) % 2 ? C.blue : C.red,
            w: 46,
            h: 46,
            down: true,
          }),
        ),
      ),
      person({ ...CAST[2], x: 740, left: [600, T - 80], right: 'down', mouth: 'flat' }),
    ),
};

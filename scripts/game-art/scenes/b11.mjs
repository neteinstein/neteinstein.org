import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478;

/** A music note, for the games played to music. */
export const note = (x, y, color = C.purple) =>
  k.raw(
    `<ellipse cx="${x}" cy="${y}" rx="14" ry="10" fill="${color}" transform="rotate(-20 ${x} ${y})"/><rect x="${x + 10}" y="${y - 52}" width="5" height="52" fill="${color}"/><path d="M${x + 15} ${y - 52} q18 8 14 26" stroke="${color}" stroke-width="5" fill="none"/>`,
  );

/** A red-and-white candy cane, hook up. */
export const cane = (x, y, rotate = 0) =>
  k.raw(
    `<g transform="rotate(${rotate} ${x} ${y})"><path d="M${x} ${y} V${y - 70} a18 18 0 0 1 36 0" stroke="${C.red}" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M${x} ${y} V${y - 70} a18 18 0 0 1 36 0" stroke="${C.white}" stroke-width="12" fill="none" stroke-linecap="round" stroke-dasharray="7 9" opacity="0.9"/></g>`,
  );

export default {
  'musical-chairs': () =>
    k.scene(
      ...[400, 512, 624].map((x, i) => k.chair(x, 590, i % 2 ? -1 : 1)),
      person({ ...CAST[0], x: 230, left: 'down', right: 'out', mouth: 'open' }),
      person({
        ...CAST[1],
        x: 512,
        ground: 700,
        scale: 0.8,
        left: 'out',
        right: 'up',
        mouth: 'smile',
      }),
      person({ ...CAST[3], x: 800, left: 'out', right: 'down', mouth: 'open' }),
      arc(300, 300, 720, 300, { bend: -90 }),
      note(150, 200),
      note(880, 170, C.pink),
      label('stop!', 512, 130, { color: C.pink }),
    ),
  'hot-potato': () =>
    k.scene(
      person({ ...CAST[2], x: 200, left: 'down', right: [300, 420], mouth: 'open' }),
      person({ ...CAST[5], x: 512, left: [440, 420], right: [580, 420], mouth: 'smile' }),
      person({ ...CAST[7], x: 824, left: [724, 420], right: 'down', mouth: 'open' }),
      k.raw(
        `<ellipse cx="640" cy="330" rx="34" ry="24" fill="#B98552" transform="rotate(-20 640 330)"/><circle cx="628" cy="324" r="3" fill="${C.brown}"/><circle cx="650" cy="336" r="3" fill="${C.brown}"/>`,
      ),
      arc(560, 380, 700, 380, { bend: -110 }),
      ...[610, 640, 670].map((x) =>
        k.raw(
          `<path d="M${x} 290 q-8 -14 0 -26 q8 -12 0 -24" stroke="${C.red}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
        ),
      ),
      note(140, 200),
      label('hot!', 640, 200, { color: C.red }),
    ),
  'pass-the-parcel': () =>
    k.scene(
      ...[220, 420, 620, 820].map((x, i) =>
        person({
          ...CAST[i + 1],
          x,
          sit: true,
          left: i === 1 ? [470, 520] : 'down',
          right: i === 2 ? [570, 520] : 'down',
          mouth: i === 1 ? 'open' : 'smile',
        }),
      ),
      k.gift(520, 560, 74, C.red, C.yellow),
      k.raw(
        `<path d="M470 470 l20 -24 l18 16 l16 -20 l10 30 Z" fill="${C.green}"/><path d="M560 450 l26 -12 l4 24 Z" fill="${C.purple}"/><path d="M600 620 l30 -10 l-6 22 Z" fill="${C.green}"/>`,
      ),
      note(140, 200),
      note(880, 180, C.pink),
      label('one layer!', 520, 150),
    ),
  'pin-the-nose-on-rudolph': () =>
    k.scene(
      k.board(640, 280, { w: 300, h: 260, fill: C.white }),
      k.raw(
        `<path d="M590 200 l-30 -50 M575 175 l-30 0 M690 200 l30 -50 M705 175 l30 0" stroke="${C.brown}" stroke-width="10" stroke-linecap="round"/><ellipse cx="640" cy="280" rx="70" ry="80" fill="#B07A4F"/><circle cx="615" cy="260" r="7" fill="${C.dark}"/><circle cx="665" cy="260" r="7" fill="${C.dark}"/><ellipse cx="640" cy="330" rx="34" ry="24" fill="#D4A275"/>`,
      ),
      k.raw(
        `<circle cx="640" cy="322" r="14" fill="none" stroke="${C.coral}" stroke-width="4" stroke-dasharray="3 6"/>`,
      ),
      person({
        ...CAST[4],
        x: 330,
        blindfold: true,
        left: 'down',
        right: [470, 350],
        mouth: 'open',
      }),
      k.raw(`<circle cx="490" cy="350" r="20" fill="${C.red}"/>`),
      arc(500, 360, 620, 330, { bend: -40 }),
    ),
  'white-elephant-gift-swap': () =>
    k.scene(
      k.gift(470, 640, 80, C.red, C.yellow),
      k.gift(560, 650, 64, C.green, C.white),
      k.gift(510, 580, 58, C.purple, C.yellow),
      person({ ...CAST[3], x: 230, left: [330, 470], right: [330, 470], mouth: 'smile' }),
      k.raw(
        `<rect x="290" y="420" width="60" height="50" rx="5" fill="${C.blue}"/><rect x="314" y="420" width="12" height="50" fill="${C.yellow}"/>`,
      ),
      person({ ...CAST[6], x: 800, left: [400, 440], right: 'down', mouth: 'open' }),
      arc(720, 330, 380, 380, { bend: -70 }),
      label('steal!', 600, 220, { color: C.pink }),
    ),
  'left-right-gift-pass': () =>
    k.scene(
      ...[180, 400, 620, 840].map((x, i) =>
        person({
          ...CAST[i + 2],
          x,
          sit: true,
          left: [x - 30, 560],
          right: [x + 30, 560],
          mouth: 'smile',
        }),
      ),
      ...[180, 400, 620, 840].map((x, i) =>
        k.gift(x, 590, 54, [C.red, C.green, C.purple, C.orange][i], C.yellow),
      ),
      arc(390, 270, 210, 270, { bend: -40 }),
      arc(630, 270, 810, 270, { bend: -40 }),
      label('left…', 300, 190, { color: C.pink }),
      label('right!', 720, 190, { color: C.teal }),
    ),
  spoons: () =>
    k.scene(
      table(170, 854),
      k.spoon(470, T - 6, 520, T - 10),
      k.spoon(560, T - 4, 520, T - 14, C.grey),
      k.spoon(500, T - 2, 460, T - 18),
      ...[0, 1, 2, 3].map((i) =>
        k.card(270 + i * 22, 430, { w: 40, h: 56, rotate: -16 + i * 10, text: '7', color: C.red }),
      ),
      person({ ...CAST[1], x: 180, left: 'down', right: [280, 440], mouth: 'flat' }),
      person({ ...CAST[0], x: 840, left: [520, T - 20], right: 'down', mouth: 'open' }),
      arc(760, 340, 560, 420, { bend: -60 }),
      label('grab!', 650, 230, { color: C.pink }),
    ),
  'chocolate-game': () =>
    k.scene(
      table(170, 854),
      k.raw(
        `<rect x="430" y="${T - 22}" width="150" height="22" rx="3" fill="#6B3A1E"/><path d="M455 ${T - 22} v22 M480 ${T - 22} v22 M505 ${T - 22} v22 M530 ${T - 22} v22 M555 ${T - 22} v22" stroke="#4E2A15" stroke-width="3"/><rect x="560" y="${T - 26}" width="40" height="26" fill="${C.purple}"/>`,
      ),
      k.die(700, T - 24, 40, 6),
      person({
        ...CAST[3],
        x: 280,
        left: [420, T - 40],
        right: [460, T - 40],
        mouth: 'open',
        hat: 'party',
      }),
      k.raw(
        `<rect x="236" y="${T + 6}" width="88" height="20" rx="9" fill="${C.green}"/><rect x="296" y="${T + 16}" width="18" height="64" rx="8" fill="${C.green}"/><circle cx="420" cy="${T - 40}" r="20" fill="${C.orange}"/><circle cx="460" cy="${T - 40}" r="20" fill="${C.orange}"/>`,
      ),
      k.line(400, T - 60, 460, T - 4, { color: C.steel, width: 5 }),
      person({ ...CAST[5], x: 820, left: [720, T - 40], right: 'down', mouth: 'open' }),
      label('a 6!', 720, 300, { color: C.pink }),
    ),
  'candy-cane-hunt': () =>
    k.scene(
      k.raw(
        `<rect x="560" y="520" width="300" height="80" rx="20" fill="${C.purple}"/><rect x="540" y="470" width="40" height="130" rx="16" fill="${C.purple}"/><rect x="840" y="470" width="40" height="130" rx="16" fill="${C.purple}"/><rect x="580" y="430" width="260" height="100" rx="20" fill="#A88BDA"/>`,
      ),
      cane(700, 640, 70),
      k.raw(
        `<rect x="140" y="560" width="70" height="80" rx="8" fill="${C.orange}"/><path d="M175 560 q-40 -60 -10 -100 q20 30 10 100 q30 -70 60 -60 q-20 40 -60 60" fill="${C.green}"/>`,
      ),
      cane(182, 520, 0),
      person({
        ...CAST[7],
        x: 370,
        scale: 0.8,
        ground: 690,
        left: 'down',
        right: [470, 520],
        mouth: 'open',
      }),
      k.basket(320, 640, { w: 80, h: 50 }),
      label('found one!', 380, 200, { color: C.pink }),
    ),
  'bobbing-for-apples': () =>
    k.scene(
      person({ ...CAST[0], x: 510, left: 'none', right: 'none', mouth: 'open' }),
      k.raw(
        `<path d="M310 520 h400 l-30 150 h-340 Z" fill="${C.steel}"/><ellipse cx="510" cy="520" rx="200" ry="26" fill="${C.sky}"/>`,
      ),
      k.apple(420, 516, 20),
      k.apple(620, 520, 20, C.green),
      k.apple(512, 496, 18),
      k.splash(580, 516, C.blue, 0.4),
      person({ ...CAST[5], x: 860, left: 'up', right: 'down', mouth: 'open' }),
      label('no hands!', 200, 200, { color: C.pink }),
    ),
  'pass-the-orange': () =>
    k.scene(
      person({ ...CAST[2], x: 420, left: 'none', right: 'none', mouth: 'flat' }),
      person({ ...CAST[1], x: 560, left: 'none', right: 'none', mouth: 'flat' }),
      k.raw(
        `<circle cx="490" cy="480" r="26" fill="${C.orange}"/><circle cx="482" cy="472" r="4" fill="${C.green}"/>`,
      ),
      person({ ...CAST[6], x: 760, left: 'none', right: 'none', mouth: 'smile' }),
      person({ ...CAST[3], x: 220, left: 'none', right: 'none', mouth: 'smile' }),
      arc(510, 400, 720, 420, { bend: -60 }),
      label('chin to chin', 512, 150),
    ),
  'cereal-box-challenge': () =>
    k.scene(
      k.raw(
        `<rect x="470" y="560" width="80" height="130" rx="4" fill="${C.yellow}"/><text x="510" y="630" font-family="Inter, Arial" font-weight="800" font-size="20" fill="${C.red}" text-anchor="middle">FLAKES</text>`,
      ),
      k.line(450, 590, 570, 590, { color: C.coral, width: 4, dash: '10 8' }),
      k.line(450, 620, 570, 620, { color: C.coral, width: 4, dash: '10 8' }),
      k.raw(
        `<circle cx="640" cy="590" r="12" fill="none" stroke="${C.steel}" stroke-width="5"/><circle cx="640" cy="620" r="12" fill="none" stroke="${C.steel}" stroke-width="5"/><path d="M650 594 l50 -14 M650 616 l50 -10" stroke="${C.steel}" stroke-width="6"/>`,
      ),
      person({ ...CAST[7], x: 300, left: 'out', right: 'down', mouth: 'open' }),
      arc(360, 460, 500, 560, { bend: -40 }),
      label('lower each round', 690, 200),
    ),
  'toothpick-mint-relay': () =>
    k.scene(
      person({ ...CAST[4], x: 400, left: 'none', right: 'none', mouth: 'puff' }),
      person({ ...CAST[0], x: 624, left: 'none', right: 'none', mouth: 'puff' }),
      k.line(400, 451, 506, 444, { color: '#E8C49A', width: 5 }),
      k.line(624, 451, 518, 444, { color: '#E8C49A', width: 5 }),
      k.raw(`<circle cx="500" cy="444" r="14" fill="none" stroke="${C.sky}" stroke-width="9"/>`),
      person({ ...CAST[5], x: 850, left: 'none', right: 'none', mouth: 'smile' }),
      person({ ...CAST[2], x: 170, left: 'none', right: 'none', mouth: 'smile' }),
      label('pass the mint', 512, 200),
    ),
  'ice-cube-race': () =>
    k.scene(
      person({ ...CAST[3], x: 300, left: [380, 440], right: [400, 460], mouth: 'puff' }),
      k.raw(
        `<rect x="372" y="430" width="40" height="36" rx="6" fill="${C.sky}" stroke="${C.blue}" stroke-width="3"/>`,
      ),
      person({ ...CAST[1], x: 720, left: [650, 470], right: [690, 470], mouth: 'flat' }),
      k.raw(
        `<rect x="650" y="452" width="40" height="36" rx="6" fill="${C.sky}" stroke="${C.blue}" stroke-width="3"/>`,
      ),
      ...[392, 400, 670].map((x, i) =>
        k.raw(`<path d="M${x} ${500 + i * 40} q-6 12 0 16 q6 -4 0 -16" fill="${C.blue}"/>`),
      ),
      k.clock(512, 200),
      label('melt it!', 512, 120, { color: C.pink }),
    ),
  'thumb-wrestling': () =>
    k.scene(
      table(200, 824),
      person({ ...CAST[0], x: 300, left: 'down', right: [490, T - 40], mouth: 'flat' }),
      person({ ...CAST[7], x: 724, left: [534, T - 40], right: 'down', mouth: 'open' }),
      k.raw(
        `<rect x="470" y="${T - 66}" width="84" height="50" rx="22" fill="${k.SKIN.tan}"/><rect x="490" y="${T - 100}" width="16" height="40" rx="8" fill="${k.SKIN.tan}"/><rect x="518" y="${T - 96}" width="16" height="36" rx="8" fill="${k.SKIN.light}" transform="rotate(25 526 ${T - 60})"/>`,
      ),
      label('1, 2, 3, 4, thumb war!', 512, 200),
    ),
  'hot-hands': () =>
    k.scene(
      person({ ...CAST[2], x: 300, left: [470, 470], right: [470, 440], mouth: 'flat' }),
      person({ ...CAST[5], x: 724, left: [550, 430], right: [550, 400], mouth: 'smile' }),
      k.raw(
        `<rect x="450" y="440" width="50" height="20" rx="9" fill="${k.SKIN.dark}"/><rect x="530" y="414" width="50" height="20" rx="9" fill="${k.SKIN.fair}"/>`,
      ),
      arc(470, 500, 540, 390, { bend: 40 }),
      k.sparkle(560, 360, 20, C.yellow),
      label('slap!', 560, 250, { color: C.red }),
    ),
  'sock-wrestling': () =>
    k.scene(
      k.raw(
        `<rect x="160" y="620" width="700" height="40" rx="10" fill="${C.blue}" opacity="0.6"/>`,
      ),
      person({
        ...CAST[3],
        x: 380,
        ground: 650,
        sit: true,
        left: 'down',
        right: [480, 560],
        mouth: 'open',
      }),
      person({
        ...CAST[4],
        x: 640,
        ground: 650,
        sit: true,
        left: [540, 600],
        right: 'down',
        mouth: 'flat',
      }),
      k.sock(520, 380, C.pink, -30),
      k.sock(760, 330, C.green, 20),
      arc(500, 420, 720, 340, { bend: -70 }),
      label('keep your socks on!', 512, 160),
    ),
  'broom-balance': () =>
    k.scene(
      k.raw(
        `<rect x="590" y="110" width="12" height="280" rx="5" fill="${C.wood}" transform="rotate(6 596 390)"/><path d="M570 120 h70 l10 -60 h-90 Z" fill="${C.yellow}" transform="rotate(6 596 390)"/>`,
      ),
      person({ ...CAST[6], x: 520, left: 'down', right: [596, 392], mouth: 'flat' }),
      k.raw(
        `<path d="M560 70 q40 -20 80 0" stroke="${C.coral}" stroke-width="5" fill="none" stroke-dasharray="1 12" stroke-linecap="round"/>`,
      ),
      person({ ...CAST[1], x: 830, left: 'head', right: 'down', mouth: 'open' }),
      k.clock(200, 200),
    ),
  'keepy-uppy': () =>
    k.outdoor(
      person({ ...CAST[0], x: 480, left: 'out', right: 'out', mouth: 'flat' }),
      k.raw(
        `<circle cx="560" cy="300" r="28" fill="${C.white}" stroke="${C.dark}" stroke-width="3"/><path d="M548 290 l12 -8 l12 8 l-4 14 h-16 Z" fill="${C.dark}"/>`,
      ),
      arc(510, 600, 556, 340, { bend: -30 }),
      label('23, 24, 25…', 760, 200, { color: C.pink }),
    ),
  'elbow-coin-catch': () =>
    k.scene(
      person({ ...CAST[7], x: 420, left: 'down', right: [470, 330], mouth: 'flat' }),
      k.raw(
        `<path d="M458 372 L540 360" stroke="${C.teal}" stroke-width="17" stroke-linecap="round"/>`,
      ),
      k.coinStack(520, 350, 6),
      ...[
        [600, 300],
        [640, 340],
        [620, 250],
      ].map(([x, y]) => k.coin(x, y)),
      arc(540, 300, 650, 420, { bend: -70 }),
      person({ ...CAST[2], x: 820, left: 'head', right: 'down', mouth: 'open' }),
      label('catch them all!', 512, 150),
    ),
  'paper-football': () =>
    k.scene(
      table(170, 854),
      k.raw(
        `<path d="M480 ${T - 2} l30 -40 l30 40 Z" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/>`,
      ),
      person({ ...CAST[3], x: 200, left: 'down', right: [400, T - 14], mouth: 'flat' }),
      person({ ...CAST[1], x: 824, left: [700, 330], right: [760, 330], mouth: 'open' }),
      k.raw(
        `<path d="M700 330 v-80 M760 330 v-80 M700 330 h60" stroke="${k.SKIN.light}" stroke-width="14" stroke-linecap="round"/>`,
      ),
      arc(520, 420, 730, 300, { bend: -80 }),
      label('goal!', 730, 190, { color: C.pink }),
    ),
};

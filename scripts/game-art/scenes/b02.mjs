import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478;

export default {
  'lego-builders': () =>
    k.scene(
      table(180, 844),
      k.paper(330, T - 50, { w: 80, h: 100, lines: 2 }),
      k.raw(
        `<rect x="305" y="${T - 82}" width="22" height="12" fill="${C.red}"/><rect x="315" y="${T - 70}" width="30" height="12" fill="${C.blue}"/>`,
      ),
      k.brick(470, T, C.yellow),
      k.brick(470, T - 22, C.red),
      k.brick(480, T - 44, C.blue),
      k.brick(560, T, C.green),
      k.brick(610, T, C.red, 22),
      person({ ...CAST[7], x: 720, left: [500, T - 60], right: 'up', mouth: 'open' }),
    ),
  'paper-plane-challenge': () =>
    k.scene(
      k.tapeLine(150, 260, 650),
      person({ ...CAST[3], x: 200, left: 'down', right: [300, 400] }),
      arc(320, 380, 820, 560, { bend: -180 }),
      k.plane(560, 250, { rotate: 10 }),
      k.plane(860, 600, { rotate: 20, size: 0.8 }),
      label('furthest!', 760, 150),
    ),
  'ball-drop-bounce': () =>
    k.scene(
      table(150, 874),
      ...[560, 610, 660, 710].map((x) => k.cup(x, T, { color: C.red, w: 44, h: 52 })),
      k.ball(450, T - 12, 12),
      arc(290, 360, 450, T - 26, { bend: -60, head: false }),
      arc(452, T - 26, 610, T - 60, { bend: -110 }),
      k.ball(560, 360, 12),
      person({ ...CAST[1], x: 210, left: 'down', right: [290, 360] }),
    ),
  'dice-roll-target': () =>
    k.scene(
      k.target(640, 660, 160),
      k.die(640, 650, 34, 5),
      k.die(560, 668, 30, 2),
      k.die(760, 640, 30, 6),
      label('5', 640, 600, { size: 30, color: C.coral }),
      k.tapeLine(160, 300, 660),
      arc(300, 520, 540, 640, { bend: -90 }),
      person({ ...CAST[4], x: 220, left: 'down', right: [300, 520], mouth: 'flat' }),
    ),
  'nut-stacker': () =>
    k.scene(
      table(180, 844),
      ...Array.from({ length: 7 }, (_, i) => k.nut(420, T - 8 - i * 15, 22)),
      k.nut(560, T - 6, 16),
      k.nut(600, T - 6, 16),
      k.nut(530, T - 8, 16),
      k.chopsticks(700, 380, 445, T - 115),
      person({ ...CAST[0], x: 760, left: [700, 382], right: 'down', mouth: 'flat' }),
    ),
  'water-bottle-flip': () =>
    k.scene(
      table(380, 840),
      k.raw(
        `<g transform="rotate(150 600 300)">${k.bottle(600, 340, { color: C.sky, h: 90 })}<rect x="586" y="305" width="28" height="35" fill="${C.blue}" opacity="0.6"/></g>`,
      ),
      arc(320, 380, 640, T - 30, { bend: -180 }),
      k.raw(
        `<g>${k.bottle(720, T, { color: C.sky, h: 90 })}<rect x="706" y="${T - 30}" width="28" height="30" fill="${C.blue}" opacity="0.6"/></g>`,
      ),
      k.sparkle(760, T - 110, 14),
      person({ ...CAST[2], x: 240, left: 'down', right: [320, 380], mouth: 'open' }),
    ),
  'spoon-frog': () =>
    k.scene(
      table(150, 874),
      k.raw(
        `<path d="M300 ${T - 4} L380 ${T - 4}" stroke="${C.steel}" stroke-width="6" stroke-linecap="round"/><ellipse cx="390" cy="${T - 6}" rx="14" ry="6" fill="${C.steel}"/>`,
      ),
      k.raw(
        `<path d="M384 ${T - 12} L330 ${T - 40}" stroke="${C.steel}" stroke-width="6" stroke-linecap="round"/>`,
      ),
      k.spoon(460, 330, 500, 300),
      arc(400, T - 40, 600, T - 60, { bend: -200 }),
      ...[600, 680, 760].map((x) => k.cup(x, T, { color: C.teal, w: 50, h: 56 })),
      person({ ...CAST[5], x: 220, left: 'down', right: [300, T - 14], mouth: 'open' }),
    ),
  candelier: () => {
    const levels = [1, 2, 3, 4, 5];
    let y = T;
    const parts = [];
    for (const count of levels) {
      for (let i = 0; i < count; i++)
        parts.push(
          k.can(
            512 + (i - (count - 1) / 2) * 34,
            y,
            [C.red, C.blue, C.green, C.orange, C.purple][count - 1],
            46,
          ),
        );
      y -= 46;
      if (count < 5) {
        parts.push(k.plate(512, y, { w: 60 + count * 40 }));
        y -= 4;
      }
    }
    return k.scene(
      table(260, 764),
      parts,
      person({ ...CAST[3], x: 830, left: [700, 300], right: 'down', mouth: 'flat' }),
      label('5 levels', 200, 140),
    );
  },
  loner: () =>
    k.scene(
      k.tapeLine(100, 260, 650),
      k.tapeLine(800, 930, 650),
      k.raw(
        `<rect x="855" y="560" width="12" height="90" rx="3" fill="${C.yellow}"/><rect x="855" y="560" width="12" height="10" fill="${C.pink}"/>`,
      ),
      // A player lying on their tummy.
      k.raw(
        `<rect x="60" y="610" width="150" height="40" rx="20" fill="${C.green}"/><rect x="200" y="620" width="60" height="22" rx="10" fill="${C.ink}"/><circle cx="60" cy="600" r="34" fill="${k.SKIN.dark}"/><path d="M26 596 A34 34 0 0 1 94 596 Z" fill="${k.HAIR.black}"/><circle cx="72" cy="604" r="4" fill="${C.dark}"/><circle cx="110" cy="640" r="10" fill="${k.SKIN.dark}"/>`,
      ),
      k.marble(140, 640, 10, C.blue),
      k.marble(480, 642, 10, C.red),
      k.raw(
        `<path d="M160 640 L840 640" stroke="${C.coral}" stroke-width="4" stroke-dasharray="1 12" stroke-linecap="round"/>`,
      ),
      label('4.5 m', 512, 560),
    ),
  floatacious: () =>
    k.scene(
      k.raw(
        `<path d="M330 600 L360 690 L664 690 L694 600 Z" fill="${C.blue}" opacity="0.8"/><ellipse cx="512" cy="600" rx="182" ry="22" fill="${C.sky}"/>`,
      ),
      k.plate(512, 596, { w: 120 }),
      ...[0, 1, 2, 3, 4].map((i) =>
        k.can(
          512 + (i % 2 ? 4 : -4),
          590 - i * 50,
          [C.red, C.green, C.orange, C.blue, C.purple][i],
          50,
        ),
      ),
      person({ ...CAST[6], x: 790, left: [560, 360], right: 'down', mouth: 'flat' }),
    ),
  'wheel-of-a-deal': () =>
    k.scene(
      table(440, 584, 520),
      k.raw(`<rect x="486" y="490" width="54" height="30" rx="4" fill="${C.purple}"/>`),
      k.chair(160, 600),
      k.chair(320, 600),
      k.chair(720, 600),
      k.chair(880, 600),
      k.card(160, 568, { text: 'A', w: 40, h: 54, rotate: -8 }),
      k.card(320, 568, { text: 'K', w: 40, h: 54, rotate: 6 }),
      k.card(720, 568, { text: 'Q', w: 40, h: 54, rotate: -4 }),
      k.card(880, 568, { text: 'J', w: 40, h: 54, rotate: 8 }),
      arc(510, 470, 330, 520, { bend: -110 }),
      person({
        ...CAST[4],
        x: 512,
        ground: 720,
        scale: 0.9,
        left: [450, 470],
        right: 'down',
        mouth: 'open',
      }),
    ),
  'toilet-paper-cup-pull': () =>
    k.scene(
      table(120, 904),
      k.raw(
        `<rect x="280" y="${T - 4}" width="420" height="8" fill="${C.white}" stroke="${C.grey}" stroke-width="2"/>`,
      ),
      k.raw(`<path d="M700 ${T + 4} L760 ${T + 4}" stroke="${C.white}" stroke-width="8"/>`),
      k.cup(330, T - 4, { color: C.sky, w: 46, h: 56 }),
      k.raw(`<rect x="312" y="${T - 46}" width="36" height="8" fill="${C.blue}" opacity="0.7"/>`),
      arc(380, T - 70, 640, T - 70, { bend: -30 }),
      person({ ...CAST[1], x: 820, left: [750, T + 2], right: 'down', mouth: 'flat' }),
    ),
  'reindeer-hooves-pickup': () =>
    k.scene(
      table(180, 844),
      k.plate(330, T - 4, { w: 110 }),
      k.candy(320, T - 14, C.pink),
      k.candy(560, T - 12, C.yellow, 20),
      k.candy(600, T - 12, C.teal, -10),
      k.raw(
        `<path d="M480 380 l-6 -40 M480 380 l-24 -24 M480 380 l14 -34 M560 380 l6 -40 M560 380 l24 -24 M560 380 l-14 -34" stroke="${C.brown}" stroke-width="6" stroke-linecap="round"/>`,
      ),
      person({ ...CAST[3], x: 520, left: [440, T - 30], right: [600, T - 30], mouth: 'open' }),
      k.cup(440, T - 10, { color: C.red, w: 38, h: 44, down: true }),
      k.cup(600, T - 10, { color: C.red, w: 38, h: 44, down: true }),
    ),
  'plastic-wrap-ball': () =>
    k.scene(
      k.raw(
        `<circle cx="512" cy="560" r="70" fill="${C.sky}" opacity="0.7" stroke="${C.blue}" stroke-width="3"/><path d="M450 530 q60 -40 120 10 M455 590 q60 20 110 -20" stroke="${C.white}" stroke-width="4" fill="none"/>`,
      ),
      k.candy(480, 560, C.pink),
      k.star(540, 540, 14),
      k.die(700, 620, 40, 6),
      k.die(750, 640, 40, 6),
      label('double!', 740, 520, { size: 32, color: C.pink }),
      person({ ...CAST[0], x: 330, left: [450, 540], right: [470, 600], mouth: 'open' }),
      person({ ...CAST[1], x: 860, left: [760, 600], right: 'up', mouth: 'open' }),
    ),
  'one-handed-team-gift-wrapping': () =>
    k.scene(
      table(240, 784),
      k.gift(512, T, 90, C.red, C.yellow),
      person({ ...CAST[2], x: 360, left: 'none', right: [470, T - 50], mouth: 'flat' }),
      person({ ...CAST[5], x: 664, left: [555, T - 50], right: 'none', mouth: 'flat' }),
      label('one hand each', 512, 150),
    ),
  'christmas-scavenger-hunt': () =>
    k.scene(
      k.raw(
        `<path d="M150 610 L230 470 L310 610 Z M170 540 L230 420 L290 540 Z M185 480 L230 380 L275 480 Z" fill="${C.green}"/><rect x="220" y="610" width="20" height="30" fill="${C.brown}"/>`,
      ),
      k.star(230, 372, 20),
      k.gift(240, 690, 60, C.purple, C.yellow),
      k.chair(720, 600),
      k.gift(720, 690, 50, C.red, C.white),
      person({ ...CAST[4], x: 480, scale: 0.75, left: [600, 560], right: 'down', mouth: 'open' }),
      label('?', 640, 380, { size: 70, color: C.pink }),
    ),
  'cup-catch': () =>
    k.scene(
      k.cup(560, 250, { color: C.blue, w: 46, h: 52, down: true }),
      arc(440, 420, 540, 280, { bend: -80 }),
      k.raw(
        `<g transform="rotate(180 600 470)">${k.cupStack(600, 470, 6, { color: C.blue, w: 46 })}</g>`,
      ),
      person({ ...CAST[6], x: 512, left: [430, 430], right: [600, 470], mouth: 'flat' }),
    ),
  'one-handed-tower': () =>
    k.scene(
      label('one hand', 512, 140),
      table(260, 764),
      k.coinStack(420, T - 6, 18),
      k.coin(560, T - 8, 10),
      k.coin(590, T - 8, 10),
      person({ ...CAST[7], x: 640, left: [450, T - 140], right: 'none', mouth: 'flat' }),
    ),
  'penny-drop': () =>
    k.scene(
      person({ ...CAST[3], x: 400, left: 'down', right: 'out' }),
      k.coin(550, 380, 11),
      arc(552, 395, 556, 640, { bend: 0 }),
      k.raw(`<rect x="530" y="620" width="52" height="70" rx="6" fill="${C.sky}" opacity="0.85"/>`),
      k.coin(556, 676, 9),
    ),
  'rolling-coins': () =>
    k.scene(
      table(150, 874),
      k.raw(
        `<g transform="rotate(-90 820 ${T - 26})">${k.cup(820, T, { color: C.red, w: 52, h: 60 })}</g>`,
      ),
      k.raw(
        `<ellipse cx="520" cy="${T - 14}" rx="5" ry="14" fill="${C.yellow}" stroke="#D99A16" stroke-width="3"/>`,
      ),
      k.raw(
        `<path d="M300 ${T - 14} L500 ${T - 14}" stroke="${C.coral}" stroke-width="4" stroke-dasharray="1 12" stroke-linecap="round"/>`,
      ),
      arc(540, T - 20, 770, T - 26, { bend: -10 }),
      person({ ...CAST[2], x: 220, left: 'down', right: [300, T - 14] }),
    ),
};

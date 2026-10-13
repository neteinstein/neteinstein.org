import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478;

export default {
  'blow-the-cup': () =>
    k.scene(
      person({ ...CAST[0], x: 240, left: 'none', right: [250, 450], mouth: 'puff' }),
      table(160, 880),
      k.straw(255, 452, 330, 462, C.pink),
      k.cup(390, T, { color: C.red, w: 44, h: 50, down: true }),
      k.raw(
        `<path d="M335 455 q20 -4 30 0" stroke="${C.sky}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      ),
      arc(420, T - 30, 760, T - 30, { bend: -30 }),
      k.raw(`<rect x="800" y="${T - 4}" width="10" height="24" fill="${C.coral}"/>`),
    ),
  'blow-the-ball': () =>
    k.scene(
      person({ ...CAST[6], x: 240, left: 'none', right: [250, 450], mouth: 'puff' }),
      table(160, 880),
      k.straw(255, 452, 330, 462, C.green),
      k.ball(380, T - 13, 13),
      k.raw(
        `<path d="M335 455 q20 -4 30 0" stroke="${C.sky}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      ),
      arc(400, T - 30, 840, T - 30, { bend: -40 }),
    ),
  'marshmallow-toss': () =>
    k.scene(
      person({ ...CAST[2], x: 720, left: 'none', right: 'none', mouth: 'open' }),
      k.cup(720, 160, { color: C.blue, w: 60, h: 40 }),
      k.raw(
        `<path d="M690 170 Q720 240 750 170" stroke="${C.steel}" stroke-width="3" fill="none"/>`,
      ),
      k.marshmallow(560, 220, 20),
      arc(330, 380, 700, 130, { bend: -150 }),
      k.tapeLine(150, 290, 660),
      person({ ...CAST[1], x: 240, left: 'down', right: [330, 380] }),
    ),
  'donut-on-a-string': () =>
    k.scene(
      k.raw(`<rect x="200" y="200" width="620" height="12" rx="6" fill="${C.wood}"/>`),
      person({ ...CAST[3], x: 380, ground: 760, left: 'none', right: 'none', mouth: 'open' }),
      person({ ...CAST[5], x: 640, ground: 760, left: 'none', right: 'none', mouth: 'open' }),
      ...[400, 660].map((x) =>
        k.raw(
          `<path d="M${x} 212 L${x} 486" stroke="${C.grey}" stroke-width="3"/><circle cx="${x}" cy="512" r="28" fill="#D9A066"/><circle cx="${x}" cy="512" r="9" fill="${C.wall}"/><path d="M${x - 24} 500 q24 -16 48 0" stroke="${C.pink}" stroke-width="9" fill="none" stroke-linecap="round"/>`,
        ),
      ),
      label('no hands', 512, 150),
    ),
  'spoon-balance': () =>
    k.scene(
      person({ ...CAST[7], x: 512, scale: 1.2, left: 'hip', right: 'hip', mouth: 'flat' }),
      k.raw(
        `<ellipse cx="512" cy="370" rx="14" ry="22" fill="${C.steel}"/><rect x="508" y="380" width="8" height="70" rx="4" fill="${C.steel}"/>`,
      ),
      label('60 s', 512, 120, { size: 48 }),
    ),
  'book-on-head': () =>
    k.scene(
      k.raw(
        `<rect x="462" y="356" width="100" height="22" rx="3" fill="${C.purple}"/><rect x="466" y="360" width="92" height="6" fill="${C.white}" opacity="0.6"/>`,
      ),
      person({ ...CAST[4], x: 512, left: 'out', right: 'out', mouth: 'flat' }),
      k.raw(
        `<rect x="462" y="160" width="100" height="22" rx="3" fill="${C.purple}" transform="rotate(-4 512 171)" opacity="0"/>`,
      ),
      arc(600, 640, 860, 640, { bend: -30 }),
      k.raw(`<rect x="880" y="600" width="10" height="90" fill="${C.coral}"/>`),
    ),
  'egg-and-spoon-race': () =>
    k.outdoor(
      person({ ...CAST[3], x: 420, left: 'down', right: [520, 470], mouth: 'flat' }),
      k.spoon(500, 472, 560, 468),
      k.egg(562, 448, 20),
      person({ ...CAST[5], x: 240, left: [340, 470], right: 'down', mouth: 'open' }),
      k.spoon(320, 472, 360, 468),
      k.egg(362, 448, 20),
      k.flag(860),
    ),
  'cup-pyramid-walk': () =>
    k.scene(
      person({ ...CAST[0], x: 400, left: 'down', right: [560, 500], mouth: 'flat' }),
      k.raw(`<rect x="500" y="496" width="130" height="10" rx="4" fill="${C.wood}"/>`),
      k.cupPyramid(565, 496, 3, { color: C.red, w: 32, h: 36 }),
      table(720, 900),
      arc(640, 380, 760, 440, { bend: -60 }),
    ),
  'spaghetti-pick-up': () =>
    k.scene(
      person({ ...CAST[1], x: 440, left: 'none', right: 'none', mouth: 'flat' }),
      table(240, 820),
      k.raw(
        `<path d="M452 450 L600 ${T - 30}" stroke="#F2D27A" stroke-width="5" stroke-linecap="round"/>`,
      ),
      ...[620, 650, 680].map((x) =>
        k.raw(
          `<rect x="${x - 6}" y="${T - 30}" width="12" height="30" fill="#F2C35A" stroke="#D9A23A" stroke-width="2"/>`,
        ),
      ),
      k.raw(
        `<rect x="568" y="${T - 40}" width="10" height="26" fill="#F2C35A" stroke="#D9A23A" stroke-width="2" transform="rotate(60 573 ${T - 27})"/>`,
      ),
      k.cup(320, T, { color: C.teal, w: 50, h: 56 }),
      label('teeth only', 700, 150),
    ),
  'dizzy-line': () =>
    k.scene(
      k.tapeLine(360, 900, 660, C.coral),
      person({ ...CAST[2], x: 220, left: 'out', right: 'out', mouth: 'open' }),
      k.raw(
        `<path d="M150 350 q70 -40 140 0" stroke="${C.coral}" stroke-width="5" fill="none" stroke-dasharray="1 12" stroke-linecap="round"/><path d="M285 345 l8 6 l-10 4" stroke="${C.coral}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      ),
      label('× 10', 220, 150, { size: 48 }),
      ...[260, 300, 340].map((x, i) => k.star(x, 300 - i * 18, 10, C.yellow)),
    ),
  'mr-president': () =>
    k.scene(
      person({ ...CAST[3], x: 330, left: 'down', right: 'wave', mouth: 'open' }),
      k.chatBubble(560, 230, 'Soares, Sampaio…', { w: 300, h: 80, size: 28 }),
      person({ ...CAST[6], x: 800, left: [740, 330], right: 'down', mouth: 'flat' }),
      k.clock(740, 300, 40),
    ),
  'name-dropper': () =>
    k.scene(
      person({ ...CAST[1], x: 330, left: 'down', right: 'wave', mouth: 'open' }),
      k.chatBubble(570, 220, 'Ronaldo! Mariza!', { w: 300, h: 80, size: 28 }),
      k.star(430, 140, 16),
      k.star(720, 120, 14),
      k.star(780, 300, 12),
      label('60 s', 800, 480, { size: 44 }),
    ),
  'state-of-affairs': () =>
    k.scene(
      table(200, 824),
      k.paper(420, T - 50, { w: 120, h: 100, lines: 4 }),
      k.pencil(460, T - 30, 500, T - 100),
      label('Lisboa, Porto…', 640, 220, { size: 32 }),
      person({ ...CAST[0], x: 300, left: [400, T - 40], right: [480, T - 60], mouth: 'flat' }),
      k.clock(720, T - 40, 36),
    ),
  'name-that-tune': () =>
    k.scene(
      k.raw(
        `<rect x="460" y="420" width="104" height="160" rx="16" fill="${C.dark}"/><circle cx="512" cy="530" r="34" fill="${C.steel}"/><circle cx="512" cy="455" r="16" fill="${C.steel}"/>`,
      ),
      k.raw(
        `<path d="M420 300 v-60 l40 -10 v60" stroke="${C.purple}" stroke-width="6" fill="none"/><circle cx="412" cy="300" r="10" fill="${C.purple}"/><circle cx="452" cy="290" r="10" fill="${C.purple}"/>`,
      ),
      k.raw(
        `<path d="M600 260 v-50" stroke="${C.pink}" stroke-width="6"/><circle cx="592" cy="262" r="10" fill="${C.pink}"/>`,
      ),
      person({ ...CAST[4], x: 260, left: 'down', right: 'up', mouth: 'open' }),
      person({ ...CAST[2], x: 780, left: [700, 470], right: 'down', mouth: 'flat' }),
      k.paper(700, 470, { w: 50, h: 60 }),
    ),
  'toothpick-words': () =>
    k.scene(
      table(180, 844),
      k.raw(
        `<g stroke="#E2B97F" stroke-width="7" stroke-linecap="round" fill="none"><path d="M380 ${T - 80} v60 h36"/><path d="M440 ${T - 80} v60"/><path d="M466 ${T - 80} h40 M486 ${T - 80} v60"/></g>`,
      ),
      ...[0, 1, 2, 3].map((i) =>
        k.raw(
          `<path d="M${600 + i * 8} ${T - 6} l50 -4" stroke="#E2B97F" stroke-width="6" stroke-linecap="round"/>`,
        ),
      ),
      label('LIT', 440, 220, { size: 50 }),
      person({ ...CAST[5], x: 760, left: [640, T - 20], right: 'down', mouth: 'flat' }),
    ),
  'rhyming-hats': () =>
    k.scene(
      table(240, 784),
      ...Array.from({ length: 7 }, (_, i) =>
        k.raw(
          `<rect x="${440 - i * 2}" y="${T - 24 - i * 24}" width="${140 + i * 4}" height="24" fill="${i % 2 ? C.white : C.red}" stroke="${C.grey}" stroke-width="2"/>`,
        ),
      ),
      label('cat / hat', 512, 160),
      person({ ...CAST[7], x: 700, left: [590, T - 140], right: 'down', mouth: 'flat' }),
    ),
  'word-shout': () =>
    k.scene(
      person({ ...CAST[3], x: 330, left: 'out', right: 'up', mouth: 'open' }),
      k.card(620, 360, { w: 160, h: 100, text: 'dog', color: C.teal }),
      k.chatBubble(520, 180, 'log! fog! frog!', { w: 280, h: 80, size: 28 }),
      person({ ...CAST[6], x: 780, left: [660, 420], right: 'down', mouth: 'flat' }),
    ),
  'unscramble-race': () =>
    k.scene(
      table(200, 824),
      k.paper(460, T - 60, { w: 150, h: 120, lines: 0 }),
      label('TAC → CAT', 460, T - 70, { size: 26, color: C.dark }),
      label('GDO → ?', 460, T - 36, { size: 26, color: C.dark }),
      k.pencil(530, T - 20, 560, T - 90),
      person({ ...CAST[4], x: 300, left: [400, T - 30], right: 'down', mouth: 'flat' }),
      k.clock(700, T - 40, 36),
    ),
  'pattern-palooza': () =>
    k.scene(
      k.raw(
        `<rect x="560" y="150" width="240" height="120" rx="8" fill="${C.white}" stroke="${C.grey}" stroke-width="4"/>`,
      ),
      ...[0, 1, 2, 3, 4, 5].flatMap((c) =>
        [0, 1].map((r) =>
          k.raw(
            `<circle cx="${590 + c * 36}" cy="${190 + r * 40}" r="11" fill="${(c + r) % 3 === 0 ? C.coral : C.grey}"/>`,
          ),
        ),
      ),
      table(200, 824),
      k.raw(`<rect x="340" y="${T - 34}" width="240" height="34" rx="6" fill="#D9C4A0"/>`),
      ...[0, 1, 2, 3, 4, 5].map((c) =>
        k.raw(`<ellipse cx="${360 + c * 40}" cy="${T - 26}" rx="15" ry="8" fill="#BFA67E"/>`),
      ),
      ...[0, 3].map((c) => k.ball(360 + c * 40, T - 34, 13)),
      person({ ...CAST[1], x: 700, left: [600, T - 40], right: 'down', mouth: 'flat' }),
      k.ball(600, T - 54, 13),
    ),
  'name-game': () =>
    k.scene(
      label('B', 512, 200, { size: 120, color: C.pink }),
      person({ ...CAST[0], x: 300, left: 'down', right: 'wave', mouth: 'open' }),
      k.chatBubble(330, 250, 'Banana!', { w: 170, h: 70, size: 28 }),
      person({ ...CAST[5], x: 724, left: 'head', right: 'down', mouth: 'flat' }),
      k.chatBubble(720, 250, 'Berlin…', { w: 170, h: 70, size: 28 }),
      label('3 s', 724, 120, { size: 30, color: C.coral }),
    ),
};

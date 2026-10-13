import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478;
const cream = (x, y, w = 110) =>
  `<path d="M${x - w / 2} ${y} Q${x - w / 2} ${y - w * 0.45} ${x - w * 0.2} ${y - w * 0.5} Q${x} ${y - w * 0.85} ${x + w * 0.2} ${y - w * 0.5} Q${x + w / 2} ${y - w * 0.45} ${x + w / 2} ${y} Z" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/>`;

export default {
  'find-the-worm': () =>
    k.scene(
      person({ ...CAST[2], x: 420, left: 'none', right: 'none', mouth: 'open' }),
      table(200, 824),
      k.plate(420, T - 4, { w: 150 }),
      k.raw(cream(420, T - 8, 130)),
      k.raw(
        `<path d="M380 ${T - 30} q10 -10 20 0 t20 0" stroke="${C.green}" stroke-width="8" fill="none" stroke-linecap="round"/>`,
      ),
      k.raw(
        `<path d="M620 ${T - 10} q10 -12 20 0 t20 0 t20 0" stroke="${C.orange}" stroke-width="9" fill="none" stroke-linecap="round"/>`,
      ),
      k.raw(
        `<circle cx="402" cy="450" r="10" fill="${C.white}"/><circle cx="436" cy="456" r="8" fill="${C.white}"/>`,
      ),
      label('no hands', 700, 160),
    ),
  'bubble-battle': () =>
    k.scene(
      k.raw(
        `<ellipse cx="780" cy="420" rx="40" ry="120" fill="none" stroke="${C.orange}" stroke-width="12"/>`,
      ),
      k.bubble(520, 380, 24),
      k.bubble(600, 420, 18),
      arc(560, 390, 760, 410, { bend: -30 }),
      person({ ...CAST[1], x: 380, left: 'down', right: 'down', mouth: 'puff' }),
      k.raw(
        `<path d="M440 360 q20 6 40 12 M440 380 q20 2 40 6" stroke="${C.sky}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      ),
    ),
  'suck-it-up': () =>
    k.scene(
      person({ ...CAST[4], x: 480, left: 'none', right: [470, 420], mouth: 'puff' }),
      table(200, 824),
      k.plate(330, T - 4, { w: 120 }),
      k.chocolates(330, T - 10, [C.red, C.yellow, C.blue, C.green, C.orange], 14),
      k.plate(650, T - 4, { w: 120 }),
      k.raw(
        `<ellipse cx="640" cy="${T - 10}" rx="9" ry="7" fill="${C.red}"/><ellipse cx="660" cy="${T - 10}" rx="9" ry="7" fill="${C.blue}"/>`,
      ),
      k.straw(482, 452, 560, 470, C.pink),
      k.raw(`<ellipse cx="566" cy="468" rx="9" ry="7" fill="${C.green}"/>`),
      arc(350, 420, 630, 440, { bend: -110 }),
    ),
  'flying-feather': () =>
    k.scene(
      k.bucket(820, 690, { w: 100, h: 80, color: C.teal }),
      k.feather(560, 260, -40, C.pink),
      arc(580, 280, 800, 580, { bend: -100 }),
      person({ ...CAST[3], x: 430, left: 'down', right: 'down', mouth: 'puff' }),
      k.raw(
        `<path d="M470 330 q30 -30 60 -50 M480 345 q30 -20 70 -40" stroke="${C.sky}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      ),
      k.tapeLine(330, 530, 660),
    ),
  'elephant-march': () =>
    k.scene(
      ...[560, 620, 680, 740, 800, 860].map((x, i) =>
        i < 2
          ? k.raw(
              `<g transform="rotate(${i ? 80 : 70} ${x} 680)">${k.bottle(x, 680, { color: C.sky, h: 80 })}</g>`,
            )
          : k.bottle(x, 690, { color: C.sky, h: 80 }),
      ),
      person({ ...CAST[0], x: 400, left: 'none', right: 'none', mouth: 'open' }),
      k.raw(
        `<path d="M400 470 Q420 560 500 620" stroke="#C7B9A6" stroke-width="16" fill="none" stroke-linecap="round"/>`,
      ),
      k.ball(510, 630, 22, C.yellow, '#D7C32E'),
      label('trunk!', 400, 150),
    ),
  'pencil-flip': () =>
    k.scene(
      person({ ...CAST[6], x: 420, left: 'down', right: [540, 470], mouth: 'flat' }),
      k.raw(`<rect x="520" y="456" width="60" height="16" rx="6" fill="${k.SKIN.dark}"/>`),
      ...[0, 1, 2].map((i) =>
        k.pencil(
          500 + i * 4,
          360 - i * 18,
          590 + i * 4,
          350 - i * 18,
          [C.yellow, C.blue, C.red][i],
        ),
      ),
      arc(560, 440, 560, 380, { bend: -40, head: false }),
      label('3 pencils', 700, 160),
    ),
  'build-a-unicorn': () =>
    k.scene(
      k.chair(380, 600),
      person({ ...CAST[1], x: 380, sit: true, left: 'down', right: 'down', mouth: 'open' }),
      ...[0, 1, 2, 3].map((i) =>
        k.raw(
          `<ellipse cx="380" cy="${330 - i * 24}" rx="${30 - i * 3}" ry="12" fill="${[C.pink, '#D9A066', C.yellow, C.pink][i]}"/><ellipse cx="380" cy="${330 - i * 24}" rx="8" ry="4" fill="${C.wall}"/>`,
        ),
      ),
      person({ ...CAST[3], x: 620, left: [420, 240], right: 'down', mouth: 'flat' }),
      label('unicorn!', 700, 150),
    ),
  'candy-stack': () =>
    k.scene(
      person({ ...CAST[7], x: 400, left: 'down', right: [560, 380], mouth: 'flat' }),
      k.raw(`<rect x="400" y="378" width="200" height="12" rx="5" fill="${C.wood}"/>`),
      ...[0, 1, 2, 3].map((i) =>
        k.raw(
          `<ellipse cx="575" cy="${370 - i * 12}" rx="16" ry="6" fill="${[C.red, C.green, C.yellow, C.purple][i]}"/>`,
        ),
      ),
      k.bowl(720, 520, { w: 100, color: C.teal }),
      label('teeth only', 700, 160),
    ),
  'wanna-spoon': () =>
    k.scene(
      person({ ...CAST[5], x: 512, left: 'none', right: 'none', mouth: 'flat' }),
      table(180, 844),
      k.bowl(300, T, { w: 110 }),
      k.ball(285, T - 40, 12),
      k.ball(312, T - 42, 12),
      k.bowl(720, T, { w: 110, color: C.green }),
      k.raw(
        `<path d="M512 452 L600 440" stroke="${C.steel}" stroke-width="7" stroke-linecap="round"/><ellipse cx="612" cy="438" rx="18" ry="11" fill="${C.steel}"/>`,
      ),
      k.ball(612, 424, 12),
      arc(620, 410, 712, T - 40, { bend: -50 }),
      label('teeth only', 512, 150),
    ),
  'party-hat-stack': () =>
    k.scene(
      person({ ...CAST[2], x: 512, left: 'down', right: 'down', mouth: 'open' }),
      ...[0, 1, 2, 3].map((i) =>
        k.raw(
          `<path d="M${486} ${380 - i * 28} L512 ${310 - i * 28} L538 ${380 - i * 28} Z" fill="${[C.pink, C.blue, C.yellow, C.green][i]}"/>`,
        ),
      ),
      k.raw(`<circle cx="512" cy="224" r="8" fill="${C.yellow}"/>`),
      label('4 hats', 760, 160),
    ),
  'sweet-potato-roll': () =>
    k.scene(
      k.raw(`<rect x="150" y="600" width="10" height="100" fill="${C.coral}"/>`),
      k.sweetPotato(330, 670),
      k.crawler({ x: 400, ...CAST[3] }),
      arc(280, 650, 175, 650, { bend: -20 }),
      label('nose only', 512, 170),
    ),
  'cotton-ball-race': () =>
    k.scene(
      table(150, 874),
      k.raw(`<rect x="820" y="${T - 2}" width="10" height="20" fill="${C.coral}"/>`),
      k.raw(
        `<circle cx="600" cy="${T - 14}" r="14" fill="${C.white}" stroke="${C.grey}" stroke-width="2"/><circle cx="440" cy="${T - 14}" r="14" fill="${C.white}" stroke="${C.grey}" stroke-width="2"/>`,
      ),
      person({
        ...CAST[0],
        x: 290,
        ground: 600,
        scale: 0.85,
        left: 'none',
        right: 'none',
        mouth: 'puff',
      }),
      k.raw(
        `<path d="M300 ${T - 70} L380 ${T - 30} L560 ${T - 20}" stroke="${C.pink}" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M300 ${T - 70} L340 ${T - 50}" stroke="${C.yellow}" stroke-width="16" stroke-linecap="round"/>`,
      ),
      arc(610, T - 40, 800, T - 30, { bend: -40 }),
    ),
  'spin-doctor': () =>
    k.scene(
      table(240, 784),
      k.raw(
        `<ellipse cx="512" cy="${T - 16}" rx="6" ry="16" fill="${C.yellow}" stroke="#D99A16" stroke-width="3"/>`,
      ),
      k.raw(
        `<path d="M480 ${T - 40} q32 -20 64 0" stroke="${C.coral}" stroke-width="4" fill="none" stroke-dasharray="1 10" stroke-linecap="round"/>`,
      ),
      person({ ...CAST[4], x: 360, left: [500, T - 30], right: 'down', mouth: 'flat' }),
      person({ ...CAST[6], x: 664, left: 'down', right: 'down', mouth: 'open' }),
      label('3 s', 512, 160),
    ),
  hangover: () =>
    k.scene(
      k.raw(`<rect x="300" y="250" width="420" height="12" rx="6" fill="${C.wood}"/>`),
      ...Array.from({ length: 4 }, (_, i) => k.hanger(512, 290 + i * 62, C.steel)),
      person({ ...CAST[1], x: 760, left: [560, 470], right: 'down', mouth: 'flat' }),
      label('6 hangers', 300, 160),
    ),
  'go-the-distance': () =>
    k.scene(
      table(150, 874),
      ...[520, 640, 760].map((x) => k.shotGlass(x, T)),
      k.raw(
        `<rect x="250" y="${T - 60}" width="50" height="44" rx="8" fill="${C.yellow}"/><path d="M300 ${T - 40} L490 ${T - 60}" stroke="${C.yellow}" stroke-width="8"/>`,
      ),
      k.ball(470, T - 74, 12),
      arc(480, T - 80, 520, T - 40, { bend: -20 }),
      person({ ...CAST[3], x: 200, left: 'down', right: [262, T - 40], mouth: 'flat' }),
    ),
  'caddy-stack': () =>
    k.scene(
      table(240, 784),
      ...[0, 1, 2].map((i) =>
        k.raw(
          `<circle cx="512" cy="${T - 20 - i * 38}" r="20" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/><circle cx="505" cy="${T - 25 - i * 38}" r="2" fill="${C.grey}"/><circle cx="518" cy="${T - 16 - i * 38}" r="2" fill="${C.grey}"/>`,
        ),
      ),
      person({ ...CAST[0], x: 680, left: [540, T - 110], right: 'down', mouth: 'flat' }),
      label('3 s', 512, 220),
    ),
  'bobble-head': () =>
    k.scene(
      person({ ...CAST[5], x: 512, left: 'hip', right: 'hip', mouth: 'open' }),
      k.raw(
        `<rect x="460" y="402" width="104" height="14" fill="${C.dark}"/><rect x="494" y="390" width="36" height="28" rx="5" fill="${C.teal}"/>`,
      ),
      k.raw(
        `<path d="M420 440 q-20 -30 0 -60 M604 440 q20 -30 0 -60" stroke="${C.coral}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      ),
      label('125!', 512, 180, { size: 50 }),
    ),
  cantagious: () =>
    k.scene(
      person({ ...CAST[2], x: 512, left: [400, 470], right: [624, 470], mouth: 'flat' }),
      ...[0, 1, 2].map((i) => k.can(400, 460 - i * 52, C.grey, 50)),
      ...[0, 1, 2].map((i) => k.can(624, 460 - i * 52, C.red, 50)),
      arc(420, 270, 600, 270, { bend: -50 }),
      arc(604, 300, 424, 300, { bend: 40 }),
    ),
  'fist-or-palm': () =>
    k.scene(
      person({ ...CAST[7], x: 512, left: [440, T - 70], right: [584, T - 70], mouth: 'flat' }),
      table(260, 764),
      ...[0, 1].map((row) => [
        k.paper(440, T - 4 - row * 0, { w: 64, h: 12, lines: 0 }),
        k.paper(584, T - 4, { w: 64, h: 12, lines: 0 }),
      ]),
      k.paper(330, T - 60, { w: 70, h: 70, lines: 0, rotate: -8 }),
      k.raw(
        `<circle cx="330" cy="${T - 60}" r="20" fill="none" stroke="${C.dark}" stroke-width="5"/>`,
      ),
      k.paper(694, T - 60, { w: 70, h: 70, lines: 0, rotate: 8 }),
      k.raw(
        `<path d="M680 ${T - 40} v-32 M690 ${T - 40} v-38 M700 ${T - 40} v-34 M710 ${T - 40} v-26 M672 ${T - 46} l-8 -12" stroke="${C.dark}" stroke-width="5" stroke-linecap="round"/>`,
      ),
      k.raw(
        `<circle cx="440" cy="${T - 70}" r="17" fill="${CAST[7].skin}"/><path d="M574 ${T - 84} v-22 M584 ${T - 84} v-26 M594 ${T - 84} v-22 M604 ${T - 80} v-16" stroke="${CAST[7].skin}" stroke-width="7" stroke-linecap="round"/>`,
      ),
      label('fist · palm', 512, 140),
    ),
  'santas-balloon-lift': () =>
    k.scene(
      table(110, 290),
      k.raw(
        `<ellipse cx="170" cy="${T - 6}" rx="16" ry="6" fill="${C.red}"/><ellipse cx="220" cy="${T - 6}" rx="16" ry="6" fill="${C.green}"/>`,
      ),
      k.balloon(500, 230, C.red, 34),
      arc(500, 330, 500, 275, { bend: -30 }),
      person({ ...CAST[3], x: 500, left: 'hip', right: 'hip', mouth: 'open' }),
      k.balloon(780, 230, C.green, 30),
      person({ ...CAST[4], x: 780, left: 'hip', right: 'hip', mouth: 'open' }),
      label('head only', 640, 120),
    ),
};

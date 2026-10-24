/**
 * The /teams/icebreakers drawings, in the same kit and style as the games'.
 * Rendered with `npm run draw:icebreakers` into `src/assets/teams/icebreakers/`.
 */
import * as k from './kit.mjs';

const { C, CAST, person, label, arc } = k;

/** A laptop on a table, its screen a grid of video-call faces. */
function laptop(x, y, { w = 260, faces = 4 } = {}) {
  const h = w * 0.62;
  const cols = faces > 4 ? 3 : 2;
  const rows = Math.ceil(faces / cols);
  const pad = 10;
  const cw = (w - pad * (cols + 1)) / cols;
  const ch = (h - pad * (rows + 1)) / rows;
  const tiles = Array.from({ length: faces }, (_, index) => {
    const cx = x - w / 2 + pad + (index % cols) * (cw + pad);
    const cy = y - h + pad + Math.floor(index / cols) * (ch + pad);
    const who = CAST[index % CAST.length];
    const r = Math.min(cw, ch) * 0.24;
    return `<rect x="${cx}" y="${cy}" width="${cw}" height="${ch}" rx="6" fill="${C.sky}"/><path d="M${cx + cw / 2 - r * 1.6} ${cy + ch} q${r * 1.6} ${-r * 2.2} ${r * 3.2} 0 Z" fill="${who.shirt}"/><circle cx="${cx + cw / 2}" cy="${cy + ch * 0.45}" r="${r}" fill="${who.skin}"/><path d="M${cx + cw / 2 - r} ${cy + ch * 0.45 - r * 0.2} q${r} ${-r * 1.4} ${r * 2} 0" fill="${who.hairColor}"/>`;
  }).join('');
  return `<rect x="${x - w / 2 - 12}" y="${y - h - 12}" width="${w + 24}" height="${h + 24}" rx="12" fill="${C.dark}"/>${tiles}<path d="M${x - w / 2 - 40} ${y + 12} h${w + 80} l-20 18 h${-w - 40} Z" fill="${C.steel}"/>`;
}

/** A green visitor with antennae, for "Aliens have landed". */
function alien(x, ground = k.GROUND) {
  const head = ground - 250;
  return `<path d="M${x - 30} ${head - 50} l-24 -46 M${x + 30} ${head - 50} l24 -46" stroke="${C.green}" stroke-width="7" stroke-linecap="round"/><circle cx="${x - 54}" cy="${head - 100}" r="11" fill="${C.yellow}"/><circle cx="${x + 54}" cy="${head - 100}" r="11" fill="${C.yellow}"/><rect x="${x - 40}" y="${head + 40}" width="80" height="130" rx="34" fill="${C.green}"/><rect x="${x - 30}" y="${ground - 70}" width="20" height="70" rx="9" fill="${C.green}"/><rect x="${x + 10}" y="${ground - 70}" width="20" height="70" rx="9" fill="${C.green}"/><ellipse cx="${x}" cy="${head}" rx="66" ry="58" fill="${C.green}"/><ellipse cx="${x - 24}" cy="${head - 4}" rx="17" ry="22" fill="${C.dark}"/><ellipse cx="${x + 24}" cy="${head - 4}" rx="17" ry="22" fill="${C.dark}"/><circle cx="${x - 19}" cy="${head - 12}" r="5" fill="${C.white}"/><circle cx="${x + 29}" cy="${head - 12}" r="5" fill="${C.white}"/><path d="M${x - 14} ${head + 30} q14 10 28 0" stroke="${C.dark}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
}

/** A framed photo of a dish, for "Too Many Cooks". */
function meal(x, y, color) {
  return `<rect x="${x - 56}" y="${y - 44}" width="112" height="88" rx="8" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/><ellipse cx="${x}" cy="${y + 6}" rx="40" ry="24" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/><ellipse cx="${x}" cy="${y + 2}" rx="26" ry="14" fill="${color}"/>`;
}

export const scenes = {
  'you-can-do-what': () =>
    k.scene(
      person({ ...CAST[4], x: 512, left: [430, 380], right: [594, 380], mouth: 'open' }),
      k.ball(420, 340, 18, C.red, C.coral),
      k.ball(512, 250, 18, C.yellow, C.orange),
      k.ball(604, 340, 18, C.blue, C.teal),
      arc(430, 330, 500, 250, { bend: -40, head: false }),
      arc(524, 250, 596, 330, { bend: -40 }),
      person({ ...CAST[0], x: 190, scale: 0.85, left: 'head', right: 'down', mouth: 'open' }),
      person({ ...CAST[5], x: 834, scale: 0.85, left: 'down', right: 'head', mouth: 'open' }),
      k.chatBubble(190, 230, 'Was it you?', { w: 200, h: 62, size: 28 }),
      k.chatBubble(834, 230, 'No way!', { w: 180, h: 62, size: 28 }),
    ),
  'before-18': () =>
    k.scene(
      person({ ...CAST[3], x: 330, left: 'wave', right: [430, 470], mouth: 'open' }),
      k.raw(
        `<rect x="420" y="640" width="190" height="18" rx="9" fill="${C.purple}"/><circle cx="450" cy="672" r="14" fill="${C.dark}"/><circle cx="580" cy="672" r="14" fill="${C.dark}"/>`,
      ),
      k.chatBubble(330, 170, 'At 15 I…', { w: 200, h: 66, size: 30 }),
      person({ ...CAST[6], x: 760, sit: true, left: 'down', right: 'head', mouth: 'smile' }),
      k.chair(760, 590, -1),
      label('< 18', 760, 230, { size: 64 }),
      k.star(700, 300, 18),
      k.star(830, 280, 14, C.orange),
    ),
  'too-many-cooks': () =>
    k.scene(
      k.board(512, 230, { w: 560, h: 280 }),
      meal(372, 180, C.orange),
      meal(512, 180, C.green),
      meal(652, 180, C.red),
      label('?', 372, 300, { size: 44 }),
      label('?', 512, 300, { size: 44 }),
      label('?', 652, 300, { size: 44 }),
      person({ ...CAST[1], x: 200, scale: 0.85, left: [300, 300], right: 'down', mouth: 'open' }),
      person({ ...CAST[2], x: 824, scale: 0.85, left: 'down', right: 'head', mouth: 'smile' }),
      k.chatBubble(200, 330, 'Yours?', { w: 150, h: 58, size: 26 }),
    ),
  'name-origin': () =>
    k.scene(
      person({ ...CAST[7], x: 400, left: [470, 470], right: 'wave', mouth: 'open' }),
      k.raw(
        `<rect x="350" y="530" width="100" height="56" rx="8" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/>`,
      ),
      label('Hello', 400, 556, { size: 20, color: C.red }),
      label('my name is…', 400, 578, { size: 15, color: C.ink }),
      k.chatBubble(400, 190, 'After my grandma!', { w: 320, h: 66, size: 28 }),
      k.heart(330, 300, 26),
      person({ ...CAST[4], x: 760, scale: 0.9, left: 'down', right: 'head', mouth: 'smile' }),
    ),
  'two-truths-and-a-lie': () =>
    k.scene(
      k.board(512, 230, { w: 560, h: 280 }),
      k.stickyNote(382, 220, C.yellow, 110, -4),
      k.stickyNote(512, 220, C.green, 110, 3),
      k.stickyNote(642, 220, C.pink, 110, -2),
      label('TRUE', 382, 230, { size: 22, color: C.ink, rotate: -4 }),
      label('TRUE', 512, 230, { size: 22, color: C.ink, rotate: 3 }),
      label('LIE?', 642, 230, { size: 22, color: C.ink, rotate: -2 }),
      ...[0, 1, 2].map((i) =>
        k.raw(`<circle cx="${620 + i * 22}" cy="330" r="9" fill="${C.purple}"/>`),
      ),
      k.raw(`<circle cx="382" cy="330" r="9" fill="${C.purple}"/>`),
      person({ ...CAST[0], x: 180, scale: 0.85, left: 'down', right: [300, 320], mouth: 'open' }),
      person({ ...CAST[5], x: 844, scale: 0.85, left: [720, 330], right: 'down', mouth: 'smile' }),
    ),
  'grab-and-share': () =>
    k.scene(
      k.table(140, 884),
      laptop(512, 440, { w: 300, faces: 4 }),
      person({
        ...CAST[2],
        x: 200,
        scale: 0.8,
        ground: k.GROUND - 40,
        left: 'down',
        right: [270, 330],
        mouth: 'open',
      }),
      k.raw(
        `<rect x="250" y="300" width="50" height="56" rx="8" fill="${C.red}"/><path d="M300 312 q24 4 0 30" stroke="${C.red}" stroke-width="8" fill="none"/>`,
      ),
      k.chatBubble(240, 200, 'From Japan!', { w: 210, h: 62, size: 28 }),
      arc(330, 330, 400, 360, { bend: -30 }),
      label('Grab something!', 700, 160, { size: 38 }),
    ),
  'what-where-when': () =>
    k.scene(
      ...k.crowd(3, 230, 794, { scale: 0.9, mouth: 'open', left: 'down', right: 'wave' }, 1),
      k.chatBubble(230, 210, 'What?', { w: 160, h: 64, size: 32 }),
      k.chatBubble(512, 180, 'Where?', { w: 170, h: 64, size: 32 }),
      k.chatBubble(794, 210, 'When?', { w: 160, h: 64, size: 32 }),
      k.clock(900, 110, 30),
      k.plane(120, 110, { rotate: -15 }),
    ),
  'quiz-breaker': () =>
    k.scene(
      k.raw(`<rect x="402" y="120" width="220" height="380" rx="30" fill="${C.dark}"/>`),
      k.raw(`<rect x="418" y="150" width="188" height="320" rx="12" fill="${C.sky}"/>`),
      label('Who said', 512, 220, { size: 30, color: C.ink }),
      label('pineapple', 512, 260, { size: 30, color: C.ink }),
      label('on pizza?', 512, 300, { size: 30, color: C.ink }),
      ...[0, 1, 2].map((i) =>
        k.raw(
          `<rect x="440" y="${330 + i * 42}" width="144" height="32" rx="10" fill="${C.white}"/>`,
        ),
      ),
      person({ ...CAST[3], x: 200, scale: 0.85, left: 'down', right: 'head', mouth: 'open' }),
      person({ ...CAST[6], x: 824, scale: 0.85, left: 'head', right: 'down', mouth: 'smile' }),
      k.envelope(860, 160, 90),
      arc(820, 190, 640, 230, { bend: -60 }),
    ),
  'aliens-have-landed': () =>
    k.scene(
      k.raw(
        `<ellipse cx="200" cy="140" rx="110" ry="30" fill="${C.steel}"/><ellipse cx="200" cy="120" rx="50" ry="34" fill="${C.sky}"/><path d="M150 170 L110 400 L290 400 L250 170 Z" fill="${C.yellow}" opacity="0.35"/>`,
      ),
      alien(200),
      k.board(640, 230, { w: 500, h: 260 }),
      k.heart(470, 200, 34),
      k.lightbulb(570, 190),
      k.star(670, 200, 30),
      k.puzzle(770, 200, 46, C.purple),
      k.raw(
        `<path d="M520 300 q30 -30 60 0 t60 0 t60 0 t60 0" stroke="${C.teal}" stroke-width="8" fill="none" stroke-linecap="round"/>`,
      ),
      person({ ...CAST[1], x: 860, scale: 0.85, left: [780, 330], right: 'down', mouth: 'open' }),
    ),
  'company-story': () =>
    k.scene(
      person({ ...CAST[5], x: 512, left: 'out', right: 'wave', mouth: 'open' }),
      k.lightbulb(512, 140),
      k.chair(200, 590, 1),
      person({ ...CAST[0], x: 200, sit: true, left: 'down', right: 'down', mouth: 'smile' }),
      k.chair(824, 590, -1),
      person({ ...CAST[2], x: 824, sit: true, left: 'head', right: 'down', mouth: 'open' }),
      k.chatBubble(824, 260, 'Wow!', { w: 130, h: 60, size: 30 }),
      k.chatBubble(220, 260, 'Go team!', { w: 170, h: 60, size: 28 }),
      k.sparkle(440, 120, 18),
      k.sparkle(590, 110, 14),
    ),
};

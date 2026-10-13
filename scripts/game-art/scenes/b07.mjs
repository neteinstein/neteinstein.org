import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478;

export default {
  'blind-food-guessing': () =>
    k.scene(
      person({ ...CAST[1], x: 380, blindfold: true, left: 'down', right: 'down', mouth: 'open' }),
      k.spoon(560, 470, 420, 455),
      k.raw(`<circle cx="420" cy="448" r="9" fill="${C.orange}"/>`),
      person({ ...CAST[2], x: 640, left: [560, 470], right: 'down', mouth: 'smile' }),
      table(720, 960),
      k.bowl(780, T, { w: 70, color: C.red }),
      k.bowl(880, T, { w: 70, color: C.yellow }),
      label('?', 380, 220, { size: 70, color: C.pink }),
    ),
  'blind-portraits': () =>
    k.scene(
      person({ ...CAST[0], x: 280, left: 'down', right: [380, 480], mouth: 'flat' }),
      k.paper(400, 470, { w: 90, h: 110, lines: 0 }),
      k.raw(
        `<path d="M380 440 q20 -30 40 0 q10 30 -20 40 q-30 -6 -20 -40 M392 452 l2 0 M410 452 l2 0 M394 470 q8 6 16 0" stroke="${C.dark}" stroke-width="3" fill="none"/>`,
      ),
      person({ ...CAST[5], x: 740, left: [640, 480], right: 'down', mouth: 'smile' }),
      k.paper(620, 470, { w: 90, h: 110, lines: 0 }),
      k.raw(
        `<path d="M600 440 q30 -20 40 10 q-4 34 -30 30 q-20 -20 -10 -40" stroke="${C.dark}" stroke-width="3" fill="none"/>`,
      ),
      label('no peeking!', 512, 160),
    ),
  'topic-songs': () =>
    k.scene(
      table(200, 824),
      k.paper(440, T - 50, { w: 120, h: 100, lines: 4 }),
      k.pencil(470, T - 20, 520, T - 100),
      k.raw(
        `<path d="M600 300 v-60 l40 -10 v60" stroke="${C.purple}" stroke-width="6" fill="none"/><circle cx="592" cy="300" r="10" fill="${C.purple}"/><circle cx="632" cy="290" r="10" fill="${C.purple}"/>`,
      ),
      k.heart(700, 260, 34),
      person({ ...CAST[3], x: 300, left: [420, T - 30], right: [480, T - 60], mouth: 'flat' }),
      label('love', 650, 160),
    ),
  'guess-who': () =>
    k.scene(
      person({ ...CAST[4], x: 512, left: [450, T - 60], right: 'down', mouth: 'open' }),
      table(260, 764),
      k.card(420, T - 70, { w: 90, h: 120, text: '?', color: C.purple }),
      person({ ...CAST[2], x: 200, left: 'down', right: [300, T - 10], mouth: 'flat' }),
      person({ ...CAST[7], x: 830, left: [740, T - 10], right: 'up', mouth: 'open' }),
      label('clue 1…', 512, 150),
    ),
  'finish-the-line': () =>
    k.scene(
      person({ ...CAST[0], x: 300, left: 'down', right: 'wave', mouth: 'open' }),
      k.chatBubble(520, 200, 'To be or not…', { w: 260, h: 80, size: 30 }),
      table(560, 900),
      k.paper(700, T - 50, { w: 110, h: 100, lines: 3 }),
      person({
        ...CAST[6],
        x: 800,
        ground: 720,
        scale: 0.9,
        left: [720, T - 40],
        right: 'down',
        mouth: 'flat',
      }),
    ),
  'chain-reaction': () =>
    k.scene(
      person({ ...CAST[3], x: 300, left: 'down', right: 'wave', mouth: 'open' }),
      k.raw(
        `<rect x="460" y="190" width="120" height="80" rx="10" fill="${C.red}"/><rect x="600" y="210" width="110" height="70" rx="10" fill="${C.blue}"/><rect x="520" y="300" width="130" height="70" rx="10" fill="${C.yellow}"/>`,
      ),
      label('BRAND', 520, 242, { size: 24, color: C.white }),
      label('SHOP', 655, 255, { size: 22, color: C.white }),
      label('CAFÉ', 585, 345, { size: 24, color: C.dark }),
      k.clock(820, 470, 46),
    ),
  'marshmallow-mouth': () =>
    k.scene(
      person({ ...CAST[1], x: 360, left: [460, 420], right: 'down', mouth: 'puff' }),
      k.raw(
        `<ellipse cx="338" cy="458" rx="14" ry="12" fill="${C.cheek}"/><ellipse cx="382" cy="458" rx="14" ry="12" fill="${C.cheek}"/>`,
      ),
      k.card(480, 400, { w: 90, h: 60, text: 'pizza', color: C.teal }),
      k.chatBubble(360, 240, 'mmf mmf!', { w: 180, h: 70, size: 28 }),
      person({ ...CAST[2], x: 700, left: 'head', right: 'down', mouth: 'open' }),
      person({ ...CAST[4], x: 860, left: 'down', right: 'up', mouth: 'open' }),
    ),
  anagrams: () =>
    k.scene(
      table(200, 824),
      k.paper(500, T - 50, { w: 140, h: 100, lines: 4 }),
      k.pencil(540, T - 20, 590, T - 100),
      label('BIRTHDAY', 512, 170, { size: 48 }),
      label('→ BIRD, DAY, THY…', 512, 230, { size: 30, color: C.teal }),
      person({ ...CAST[5], x: 320, left: [460, T - 30], right: 'down', mouth: 'flat' }),
    ),
  'good-sports': () =>
    k.scene(
      table(200, 824),
      k.paper(480, T - 50, { w: 130, h: 100, lines: 4 }),
      k.raw(
        `<circle cx="680" cy="${T - 32}" r="30" fill="${C.white}" stroke="${C.dark}" stroke-width="3"/><polygon points="680,${T - 46} 692,${T - 38} 688,${T - 24} 672,${T - 24} 668,${T - 38}" fill="${C.dark}"/>`,
      ),
      person({ ...CAST[0], x: 320, left: [440, T - 30], right: 'down', mouth: 'flat' }),
      label('Porto · Benfica · Braga…', 512, 180, { size: 30 }),
    ),
  'battle-of-the-bands': () =>
    k.scene(
      label('B', 512, 220, { size: 120, color: C.pink }),
      k.raw(`<rect x="200" y="380" width="14" height="230" fill="${C.dark}"/>`),
      k.mic(207, 360),
      person({ ...CAST[7], x: 300, left: [212, 380], right: 'up', mouth: 'open' }),
      table(560, 900),
      k.paper(700, T - 50, { w: 110, h: 100, lines: 3 }),
      person({
        ...CAST[3],
        x: 800,
        ground: 720,
        scale: 0.9,
        left: [720, T - 40],
        right: 'down',
        mouth: 'flat',
      }),
    ),
  'backward-abcs': () =>
    k.scene(
      person({ ...CAST[6], x: 330, left: 'down', right: 'head', mouth: 'open' }),
      k.chatBubble(580, 220, 'Z, Y, X, W…', { w: 260, h: 80, size: 32 }),
      k.clock(800, 480, 50),
    ),
  wordsmith: () =>
    k.scene(
      table(180, 844),
      ...'GAME'
        .split('')
        .map((ch, i) =>
          k.card(380 + i * 52, T - 26, { w: 46, h: 46, text: ch, color: C.dark, fill: '#F4E2BE' }),
        ),
      ...'ST'.split('').map((ch, i) =>
        k.card(640 + i * 52, T - 26, {
          w: 46,
          h: 46,
          text: ch,
          color: C.dark,
          fill: '#F4E2BE',
          rotate: i ? 10 : -8,
        }),
      ),
      person({ ...CAST[4], x: 780, left: [690, T - 40], right: 'down', mouth: 'flat' }),
      label('4 points', 460, 200),
    ),
  'cup-shuffle': () =>
    k.scene(
      table(240, 784),
      ...[420, 512, 604].map((x) => k.cup(x, T, { color: C.red, w: 60, h: 70, down: true })),
      arc(420, T - 90, 604, T - 90, { bend: -40 }),
      arc(604, T - 90, 420, T - 90, { bend: 40 }),
      person({ ...CAST[2], x: 170, left: 'down', right: [400, T - 40], mouth: 'flat' }),
      person({ ...CAST[5], x: 880, left: [820, 420], right: 'down', mouth: 'open' }),
      label('?', 870, 220, { size: 70, color: C.pink }),
    ),
  'secret-santa': () =>
    k.scene(
      k.gift(512, 600, 110, C.red, C.yellow),
      person({ ...CAST[1], x: 300, left: 'down', right: [440, 560], mouth: 'open' }),
      k.chatBubble(300, 240, 'It was you!', { w: 220, h: 70, size: 28 }),
      person({ ...CAST[0], x: 740, left: 'down', right: 'down', mouth: 'smile', hat: 'party' }),
      label('?', 740, 160, { size: 60, color: C.pink }),
    ),
  'christmas-trivia': () =>
    k.scene(
      k.raw(
        `<path d="M120 610 L200 470 L280 610 Z M140 540 L200 420 L260 540 Z M155 480 L200 380 L245 480 Z" fill="${C.green}"/><rect x="190" y="610" width="20" height="30" fill="${C.brown}"/>`,
      ),
      k.star(200, 372, 20),
      person({ ...CAST[3], x: 420, left: 'down', right: [500, 380], mouth: 'open', hat: 'party' }),
      k.card(520, 360, { w: 90, h: 60, text: 'Q 7', color: C.red }),
      person({ ...CAST[4], x: 700, left: 'down', right: 'up', mouth: 'open' }),
      person({ ...CAST[2], x: 860, left: 'head', right: 'down', mouth: 'flat' }),
    ),
  'two-truths-and-a-lie': () =>
    k.scene(
      person({ ...CAST[5], x: 300, left: 'down', right: 'wave', mouth: 'open' }),
      k.card(560, 200, { w: 200, h: 56, text: '1 ✓', color: C.green }),
      k.card(560, 270, { w: 200, h: 56, text: '2 ✓', color: C.green }),
      k.card(560, 340, { w: 200, h: 56, text: '3 ✗', color: C.red }),
      person({ ...CAST[0], x: 800, left: 'head', right: 'down', mouth: 'flat' }),
    ),
  'wink-murder': () =>
    k.scene(
      person({ ...CAST[0], x: 220, left: 'down', right: 'down', mouth: 'smile' }),
      k.raw(`<rect x="200" y="424" width="16" height="5" rx="2" fill="${C.dark}"/>`),
      person({ ...CAST[1], x: 420, left: 'down', right: 'down', mouth: 'open' }),
      person({ ...CAST[3], x: 600, left: 'head', right: 'down', mouth: 'flat' }),
      person({ ...CAST[6], x: 820, left: [760, 380], right: 'down', mouth: 'flat' }),
      k.raw(
        `<circle cx="760" cy="360" r="30" fill="none" stroke="${C.dark}" stroke-width="7"/><path d="M738 382 l-26 26" stroke="${C.dark}" stroke-width="8" stroke-linecap="round"/>`,
      ),
      label('wink!', 220, 280, { size: 36, color: C.pink }),
    ),
  'guess-whose-workspace': () =>
    k.scene(
      k.raw(
        `<rect x="300" y="140" width="420" height="260" rx="14" fill="${C.dark}"/><rect x="318" y="158" width="384" height="224" rx="6" fill="${C.sky}"/>`,
      ),
      k.raw(
        `<rect x="360" y="330" width="300" height="12" rx="4" fill="${C.wood}"/><rect x="380" y="342" width="12" height="38" fill="${C.wood}"/><rect x="628" y="342" width="12" height="38" fill="${C.wood}"/>`,
      ),
      k.raw(
        `<rect x="440" y="270" width="80" height="58" rx="4" fill="${C.dark}"/><rect x="560" y="300" width="20" height="30" rx="4" fill="${C.red}"/>`,
      ),
      k.raw(`<path d="M380 330 l20 -40 l20 40" fill="${C.green}"/>`),
      person({ ...CAST[2], x: 200, left: 'down', right: 'head', mouth: 'flat' }),
      person({ ...CAST[5], x: 840, left: 'up', right: 'down', mouth: 'open' }),
      label('#3 — whose?', 512, 100),
    ),
  'group-storytelling': () =>
    k.scene(
      k.chatBubble(512, 180, 'Once upon a time…', { w: 340, h: 80, size: 30 }),
      ...[0, 1, 2, 3, 4].map((i) =>
        person({
          ...CAST[i],
          x: 160 + i * 175,
          scale: 0.85,
          left: i === 2 ? 'wave' : 'down',
          right: 'down',
          mouth: i === 2 ? 'open' : 'smile',
        }),
      ),
      arc(330, 380, 500, 350, { bend: -40 }),
    ),
  'heads-up-seven-up': () =>
    k.scene(
      ...[220, 512, 804].map((x, i) => [
        table(x - 110, x + 110, 520),
        k.raw(
          `<ellipse cx="${x - 10}" cy="500" rx="60" ry="22" fill="${CAST[i].shirt}"/><circle cx="${x - 40}" cy="488" r="34" fill="${CAST[i].hairColor}"/><rect x="${x + 40}" y="460" width="14" height="40" rx="7" fill="${CAST[i].skin}"/>`,
        ),
      ]),
      person({ ...CAST[6], x: 620, left: [530, 470], right: 'down', mouth: 'smile' }),
      label('heads down, thumbs up', 512, 160, { size: 34 }),
    ),
};

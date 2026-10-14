import * as k from '../kit.mjs';
import { note } from './b11.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478;
const bride = (x, extra = {}) => person({ ...CAST[1], x, hat: 'veil', ...extra });

export default {
  'toilet-paper-wedding-dress': () =>
    k.scene(
      person({ ...CAST[5], x: 420, left: 'out', right: 'out', mouth: 'smile', hat: 'veil' }),
      k.raw(
        `<path d="M374 520 h92 l60 170 h-212 Z" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/><path d="M340 600 h160 M330 640 h180" stroke="${C.grey}" stroke-width="3" stroke-dasharray="12 8"/>`,
      ),
      k.roll(640, 690),
      k.roll(700, 690),
      person({ ...CAST[2], x: 820, left: [700, 560], right: 'down', mouth: 'open' }),
      k.rope(
        [
          [700, 560],
          [600, 580],
          [480, 560],
        ],
        { color: C.white, width: 14 },
      ),
      label('15 minutes!', 512, 150),
    ),
  'the-shoe-game': () =>
    k.scene(
      k.chair(430, 590, 1),
      k.chair(594, 590, -1),
      bride(430, { sit: true, left: [380, 360], right: [480, 360], mouth: 'open' }),
      person({
        ...CAST[0],
        x: 594,
        sit: true,
        left: [544, 400],
        right: [644, 360],
        mouth: 'smile',
        hat: 'bowtie',
      }),
      k.shoe(380, 350, C.pink, -20),
      k.shoe(644, 350, C.dark, 20),
      k.chatBubble(512, 150, 'Who cooks better?', { w: 300, h: 66, size: 28 }),
    ),
  'most-likely-to': () =>
    k.scene(
      bride(512, { left: 'head', right: 'down', mouth: 'open' }),
      person({ ...CAST[3], x: 220, left: 'down', right: [400, 420], mouth: 'smile' }),
      person({ ...CAST[6], x: 804, left: [624, 420], right: 'down', mouth: 'open' }),
      k.chatBubble(512, 150, '…cry at the altar?', { w: 300, h: 66, size: 28 }),
    ),
  'dont-say-wedding': () =>
    k.scene(
      person({ ...CAST[3], x: 300, left: 'down', right: 'head', mouth: 'open' }),
      ...[0, 1, 2].map((i) =>
        k.raw(`<rect x="${270 + i * 22}" y="530" width="10" height="34" rx="3" fill="${C.wood}"/>`),
      ),
      k.chatBubble(300, 200, 'the wedd…', { w: 180, h: 66, size: 28 }),
      person({ ...CAST[7], x: 700, left: [400, 540], right: 'up', mouth: 'open' }),
      label('gotcha!', 760, 220, { color: C.pink }),
    ),
  'lip-sync-battle': () =>
    k.scene(
      k.raw(`<rect x="300" y="600" width="424" height="40" rx="6" fill="${C.purple}"/>`),
      bride(512, { ground: 600, left: [580, 400], right: 'up', mouth: 'open' }),
      k.mic(580, 400),
      note(240, 200),
      note(800, 170, C.pink),
      ...[150, 870].map((x, i) =>
        person({ ...CAST[i + 4], x, scale: 0.8, left: 'up', right: 'up', mouth: 'open' }),
      ),
      label('no singing, just miming!', 512, 120, { size: 30 }),
    ),
  'cocktail-competition': () =>
    k.scene(
      table(170, 854),
      k.glass(380, T, C.pink),
      k.glass(512, T, C.orange),
      k.glass(640, T, C.green),
      k.raw(
        `<circle cx="398" cy="${T - 58}" r="12" fill="${C.yellow}"/><path d="M500 ${T - 60} l-14 -40" stroke="${C.red}" stroke-width="5"/>`,
      ),
      bride(220, { left: 'down', right: [370, T - 30], mouth: 'open' }),
      k.raw(
        `<rect x="770" y="300" width="100" height="60" rx="8" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/>`,
      ),
      label('9/10', 820, 342, { size: 32, color: C.pink }),
      person({ ...CAST[2], x: 840, left: [820, 360], right: 'down', mouth: 'smile' }),
    ),
  'who-said-it': () =>
    k.scene(
      person({ ...CAST[3], x: 512, left: 'down', right: [600, 420], mouth: 'open' }),
      k.paper(610, 420, { w: 60, h: 76 }),
      k.chatBubble(512, 170, '"I knew on day one"', { w: 300, h: 66, size: 28 }),
      bride(200, { left: 'down', right: 'down', mouth: 'smile' }),
      person({ ...CAST[0], x: 824, left: 'down', right: 'down', mouth: 'smile', hat: 'bowtie' }),
      label('?', 200, 300, { size: 50, color: C.pink }),
      label('?', 824, 300, { size: 50, color: C.pink }),
    ),
  'lost-at-sea': () =>
    k.scene(
      k.raw(
        `<rect y="520" width="1024" height="220" fill="#7FC6E4"/><path d="M0 540 q40 -20 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" stroke="${C.white}" stroke-width="5" fill="none"/>`,
      ),
      k.raw(
        `<ellipse cx="512" cy="600" rx="300" ry="50" fill="${C.orange}"/><ellipse cx="512" cy="590" rx="250" ry="34" fill="#F7C27A"/>`,
      ),
      ...[360, 512, 664].map((x, i) =>
        person({
          ...CAST[i + 2],
          x,
          ground: 600,
          scale: 0.85,
          left: i === 1 ? 'up' : 'down',
          right: i === 0 ? [430, 440] : 'down',
          mouth: i === 1 ? 'open' : 'flat',
        }),
      ),
      k.raw(
        `<rect x="420" y="420" width="30" height="40" rx="4" fill="${C.sky}" stroke="${C.steel}" stroke-width="4"/>`,
      ),
      label('1. mirror  2. petrol  3. water…', 512, 150, { size: 30 }),
    ),
  'spiders-web': () =>
    k.outdoor(
      k.raw(
        `<rect x="250" y="200" width="24" height="490" fill="${C.brown}"/><rect x="750" y="200" width="24" height="490" fill="${C.brown}"/>`,
      ),
      k.raw(
        `<path d="M262 240 L762 300 M262 360 L762 250 M262 470 L762 420 M262 580 L762 600 M262 300 L762 520 M400 230 L380 690 M520 250 L560 690 M640 270 L620 690" stroke="${C.white}" stroke-width="5"/>`,
      ),
      person({ ...CAST[1], x: 160, left: 'down', right: 'out', mouth: 'open' }),
      person({ ...CAST[4], x: 880, left: 'up', right: 'down', mouth: 'smile' }),
      arc(200, 420, 840, 420, { bend: -40 }),
      label("don't touch the web!", 512, 140),
    ),
  'toxic-waste': () =>
    k.outdoor(
      k.raw(
        `<ellipse cx="400" cy="660" rx="170" ry="40" fill="none" stroke="${C.coral}" stroke-width="6" stroke-dasharray="14 10"/>`,
      ),
      k.bucket(400, 660, { color: C.yellow }),
      ...[380, 400, 420].map((x, i) => k.ball(x, 586 - i * 6, 12, C.green, C.teal)),
      k.raw(
        `<ellipse cx="400" cy="560" rx="60" ry="14" fill="none" stroke="${C.dark}" stroke-width="10"/>`,
      ),
      k.line(340, 560, 180, 470, { color: C.orange, width: 5 }),
      k.line(460, 560, 640, 470, { color: C.orange, width: 5 }),
      person({ ...CAST[2], x: 130, left: 'down', right: [180, 470], mouth: 'flat' }),
      person({ ...CAST[5], x: 690, left: [640, 470], right: 'down', mouth: 'open' }),
      k.bucket(890, 690, { color: C.blue }),
      label('no hands inside the circle', 512, 150),
    ),
  pipeline: () =>
    k.scene(
      ...[220, 420, 620].map((x, i) =>
        person({
          ...CAST[i + 1],
          x,
          left: [x + 30, 470],
          right: [x + 90, 470],
          mouth: i === 1 ? 'open' : 'smile',
        }),
      ),
      ...[250, 450, 650].map((x) =>
        k.raw(`<path d="M${x} 470 h60 q0 18 -30 18 q-30 0 -30 -18 Z" fill="${C.steel}"/>`),
      ),
      k.marble(470, 460, 12, C.red),
      arc(310, 430, 450, 430, { bend: -30 }),
      k.cup(860, 690, { color: C.yellow, w: 70, h: 80 }),
      label('keep it rolling', 512, 160),
    ),
  'lava-river': () =>
    k.scene(
      k.raw(
        `<rect x="180" y="620" width="660" height="80" fill="${C.orange}"/><path d="M180 640 q40 -16 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" stroke="${C.red}" stroke-width="6" fill="none"/>`,
      ),
      ...[330, 512, 690].map((x) =>
        k.raw(
          `<ellipse cx="${x}" cy="680" rx="54" ry="14" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/>`,
        ),
      ),
      person({ ...CAST[0], x: 330, ground: 680, left: 'out', right: 'down', mouth: 'flat' }),
      person({ ...CAST[6], x: 512, ground: 680, left: 'down', right: [600, 600], mouth: 'open' }),
      person({ ...CAST[3], x: 100, left: 'down', right: 'wave', mouth: 'smile' }),
      label('the floor is lava!', 512, 150, { color: C.red }),
    ),
  'all-aboard': () =>
    k.scene(
      k.raw(`<rect x="372" y="650" width="280" height="50" rx="6" fill="${C.blue}"/>`),
      ...[400, 512, 624].map((x, i) =>
        person({
          ...CAST[i + 1],
          x,
          ground: 690,
          scale: 0.9,
          left: i ? [x - 60, 420] : 'out',
          right: i < 2 ? [x + 60, 420] : 'out',
          mouth: 'open',
        }),
      ),
      k.raw(
        `<path d="M660 520 l120 0 M720 500 l40 20 l-40 20" stroke="${C.coral}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      ),
      k.raw(
        `<rect x="800" y="660" width="140" height="30" rx="6" fill="${C.blue}" opacity="0.6"/>`,
      ),
      label('fold it in half', 870, 600, { size: 26 }),
      label('all aboard!', 512, 140),
    ),
  'back-to-back-drawing': () =>
    k.scene(
      person({ ...CAST[2], x: 440, sit: true, left: [360, 470], right: 'down', mouth: 'open' }),
      person({ ...CAST[7], x: 584, sit: true, left: 'down', right: [670, 500], mouth: 'flat' }),
      k.paper(330, 440, { w: 110, h: 110, lines: 0 }),
      k.raw(
        `<circle cx="330" cy="420" r="22" fill="none" stroke="${C.red}" stroke-width="5"/><rect x="306" y="446" width="48" height="34" fill="none" stroke="${C.blue}" stroke-width="5"/>`,
      ),
      k.paper(700, 520, { w: 110, h: 110, lines: 0 }),
      k.raw(
        `<rect x="676" y="490" width="44" height="44" fill="none" stroke="${C.red}" stroke-width="5"/><circle cx="700" cy="556" r="18" fill="none" stroke="${C.blue}" stroke-width="5"/>`,
      ),
      k.chatBubble(330, 220, 'a circle on a square…', { w: 300, h: 66, size: 24 }),
      label('?', 760, 300, { size: 54, color: C.pink }),
    ),
  'blind-square': () =>
    k.scene(
      k.raw(
        `<path d="M300 660 L724 660 L724 560 L300 560 Z" fill="none" stroke="${C.orange}" stroke-width="8"/>`,
      ),
      ...[300, 512, 724].map((x, i) =>
        person({
          ...CAST[i + 3],
          x,
          blindfold: true,
          left: [x - 20, 560],
          right: [x + 20, 560],
          mouth: i === 1 ? 'open' : 'flat',
        }),
      ),
      label('is it square yet?', 512, 150),
    ),
  'group-juggle': () =>
    k.scene(
      ...[180, 400, 624, 844].map((x, i) =>
        person({
          ...CAST[i + 4],
          x,
          left: i === 0 ? [260, 400] : 'down',
          right: i === 2 ? 'up' : 'down',
          mouth: 'open',
        }),
      ),
      k.ball(300, 280, 18, C.red, C.coral),
      k.ball(520, 230, 18, C.yellow, C.orange),
      k.ball(720, 290, 18, C.blue, C.teal),
      arc(260, 380, 600, 360, { bend: -220 }),
      arc(660, 340, 860, 380, { bend: -120, color: C.purple }),
      label('say the name, then throw', 512, 110, { size: 30 }),
    ),
  'paper-bridge': () =>
    k.scene(
      table(170, 854),
      k.raw(
        `<rect x="340" y="${T - 90}" width="90" height="90" fill="${C.blue}"/><rect x="600" y="${T - 90}" width="90" height="90" fill="${C.red}"/>`,
      ),
      k.raw(
        `<path d="M410 ${T - 90} q105 30 210 0 v-14 q-105 30 -210 0 Z" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/>`,
      ),
      k.coinStack(515, T - 84, 5),
      person({ ...CAST[0], x: 200, left: 'down', right: [400, 360], mouth: 'flat' }),
      person({ ...CAST[5], x: 830, left: [600, 360], right: 'down', mouth: 'open' }),
      label('how many coins?', 512, 160),
    ),
  tibitar: () =>
    k.scene(
      person({ ...CAST[4], x: 512, left: 'head', right: 'down', mouth: 'smile' }),
      k.raw(
        `<ellipse cx="512" cy="150" rx="130" ry="56" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/><circle cx="512" cy="232" r="12" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/><circle cx="512" cy="262" r="7" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/>`,
      ),
      label('to swim', 512, 164),
      person({ ...CAST[2], x: 190, left: 'down', right: [330, 400], mouth: 'open' }),
      k.chatBubble(230, 290, 'Do you tibitar outdoors?', { w: 340, h: 62, size: 24 }),
      person({ ...CAST[6], x: 834, left: [694, 400], right: 'down', mouth: 'open' }),
      k.chatBubble(800, 290, 'Every day?', { w: 190, h: 62, size: 26 }),
    ),
};

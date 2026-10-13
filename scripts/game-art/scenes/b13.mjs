import * as k from '../kit.mjs';
import { note } from './b11.mjs';

const { C, CAST, person, label, arc } = k;

/** A sack pulled up to the waist of someone standing at `x`. */
const sack = (x, color = '#C9A27A') =>
  k.raw(
    `<path d="M${x - 58} 560 h116 l8 136 h-132 Z" fill="${color}"/><path d="M${x - 58} 560 q58 -16 116 0" stroke="#A9825A" stroke-width="6" fill="none"/>`,
  );

export default {
  'musical-statues': () =>
    k.scene(
      person({ ...CAST[1], x: 200, left: 'up', right: 'out', mouth: 'flat' }),
      person({ ...CAST[2], x: 420, left: 'wave', right: 'hip', mouth: 'flat' }),
      person({ ...CAST[7], x: 640, left: 'out', right: 'up', mouth: 'flat' }),
      person({ ...CAST[4], x: 860, left: 'hip', right: 'wave', mouth: 'open' }),
      note(300, 180),
      k.raw(
        `<path d="M280 120 l60 90" stroke="${C.red}" stroke-width="8" stroke-linecap="round"/>`,
      ),
      label('freeze!', 600, 160, { color: C.pink }),
    ),
  'simon-says': () =>
    k.scene(
      person({ ...CAST[3], x: 220, left: 'down', right: 'head', mouth: 'open', hat: 'crown' }),
      k.chatBubble(330, 170, 'Simon says: touch your nose!', { w: 400, h: 70, size: 26 }),
      ...[540, 700, 860].map((x, i) =>
        person({
          ...CAST[i + 4],
          x,
          left: 'down',
          right: i === 2 ? 'up' : 'head',
          mouth: i === 2 ? 'open' : 'smile',
        }),
      ),
      label('oops!', 880, 300, { size: 34, color: C.red }),
    ),
  'red-light-green-light': () =>
    k.outdoor(
      k.raw(`<rect x="880" y="200" width="40" height="490" fill="${C.wood}"/>`),
      person({ ...CAST[0], x: 820, left: 'down', right: [880, 380], mouth: 'open' }),
      person({ ...CAST[1], x: 220, left: 'out', right: 'down', mouth: 'flat' }),
      person({ ...CAST[2], x: 420, left: 'down', right: 'out', mouth: 'flat' }),
      person({ ...CAST[5], x: 600, left: 'up', right: 'down', mouth: 'flat' }),
      k.raw(
        `<rect x="40" y="120" width="70" height="160" rx="16" fill="${C.dark}"/><circle cx="75" cy="160" r="24" fill="${C.red}"/><circle cx="75" cy="240" r="24" fill="#3A4A52"/>`,
      ),
      label('freeze!', 420, 150, { color: C.red }),
    ),
  'whats-the-time-mr-wolf': () =>
    k.outdoor(
      person({ ...CAST[6], x: 820, left: 'up', right: 'up', mouth: 'open' }),
      k.raw(`<path d="M790 380 l-14 -40 l30 22 Z M850 380 l14 -40 l-30 22 Z" fill="${C.steel}"/>`),
      ...[180, 350, 520].map((x, i) =>
        person({ ...CAST[i], x, left: 'out', right: 'down', mouth: 'open' }),
      ),
      k.chatBubble(650, 170, 'Dinner time!', { w: 230, h: 70, size: 30, ink: C.red }),
      arc(700, 330, 560, 330, { bend: -40 }),
    ),
  'duck-duck-goose': () =>
    k.outdoor(
      ...[160, 330, 500, 670].map((x, i) =>
        person({ ...CAST[i + 1], x, sit: true, left: 'down', right: 'down', mouth: 'smile' }),
      ),
      person({ ...CAST[0], x: 860, left: 'out', right: [700, 380], mouth: 'open' }),
      k.chatBubble(700, 200, 'goose!', { w: 160, h: 66, size: 30, ink: C.pink }),
      label('duck, duck…', 320, 170),
    ),
  'sack-race': () =>
    k.outdoor(
      person({
        ...CAST[3],
        x: 280,
        ground: 650,
        left: [230, 570],
        right: [330, 570],
        mouth: 'open',
      }),
      sack(280),
      person({
        ...CAST[1],
        x: 560,
        ground: 690,
        left: [510, 600],
        right: [610, 600],
        mouth: 'smile',
      }),
      sack(600 - 40, C.orange),
      k.raw(
        `<rect x="840" y="560" width="12" height="130" fill="${C.ink}"/><path d="M852 560 h80 v40 h-80 Z" fill="${C.red}"/>`,
      ),
      arc(180, 330, 380, 330, { bend: -60 }),
      label('jump!', 450, 180),
    ),
  'three-legged-race': () =>
    k.outdoor(
      person({ ...CAST[2], x: 420, left: 'out', right: [460, 520], mouth: 'open' }),
      person({ ...CAST[5], x: 500, left: [460, 520], right: 'out', mouth: 'open' }),
      k.raw(`<rect x="430" y="640" width="60" height="18" rx="6" fill="${C.red}"/>`),
      k.raw(
        `<rect x="840" y="560" width="12" height="130" fill="${C.ink}"/><path d="M852 560 h80 v40 h-80 Z" fill="${C.red}"/>`,
      ),
      arc(560, 380, 780, 420, { bend: -60 }),
      label('inside, outside!', 460, 160),
    ),
  'wheelbarrow-race': () =>
    k.outdoor(
      k.crawler({ x: 340, ...CAST[1] }),
      k.raw(
        `<path d="M470 600 L560 560" stroke="${C.ink}" stroke-width="18" stroke-linecap="round"/>`,
      ),
      person({ ...CAST[0], x: 620, left: [560, 560], right: [570, 580], mouth: 'open' }),
      k.raw(
        `<rect x="880" y="560" width="12" height="130" fill="${C.ink}"/><path d="M892 560 h80 v40 h-80 Z" fill="${C.red}"/>`,
      ),
      arc(280, 480, 120, 500, { bend: -50 }),
      label('go, go!', 400, 200),
    ),
  'tug-of-war': () =>
    k.outdoor(
      k.rope(
        [
          [100, 520],
          [512, 528],
          [924, 520],
        ],
        { color: '#C9A27A', width: 12 },
      ),
      k.raw(
        `<rect x="505" y="510" width="14" height="34" fill="${C.red}"/><rect x="508" y="610" width="8" height="90" fill="${C.white}"/>`,
      ),
      ...[160, 300].map((x, i) =>
        person({ ...CAST[i], x, left: [x - 40, 520], right: [x + 40, 524], mouth: 'flat' }),
      ),
      ...[724, 864].map((x, i) =>
        person({ ...CAST[i + 4], x, left: [x - 40, 524], right: [x + 40, 520], mouth: 'open' }),
      ),
      label('pull!', 512, 160, { color: C.pink }),
    ),
  limbo: () =>
    k.scene(
      person({ ...CAST[3], x: 200, left: 'down', right: [300, 520], mouth: 'smile' }),
      person({ ...CAST[6], x: 824, left: [724, 520], right: 'down', mouth: 'smile' }),
      k.line(300, 520, 724, 520, { color: C.wood, width: 12 }),
      k.raw(
        `<g transform="rotate(-60 512 690)">${person({ ...CAST[1], x: 512, scale: 0.9, left: 'out', right: 'out', mouth: 'open' })}</g>`,
      ),
      note(130, 200),
      label('how low can you go?', 512, 150),
    ),
  'egg-toss': () =>
    k.outdoor(
      person({ ...CAST[0], x: 200, left: 'down', right: [290, 420], mouth: 'smile' }),
      person({ ...CAST[7], x: 824, left: [740, 440], right: [760, 450], mouth: 'open' }),
      k.egg(520, 260, 24),
      arc(300, 400, 730, 420, { bend: -260 }),
      label('one step back each time', 512, 110),
    ),
  'balloon-stomp': () =>
    k.scene(
      person({ ...CAST[2], x: 330, left: 'out', right: 'up', mouth: 'open' }),
      person({ ...CAST[5], x: 650, left: 'up', right: 'out', mouth: 'open' }),
      k.balloon(250, 640, C.green, 26),
      k.balloon(740, 640, C.pink, 26),
      k.line(290, 686, 262, 668, { color: C.steel, width: 2 }),
      k.sparkle(560, 660, 26, C.yellow),
      k.raw(
        `<path d="M520 640 l-20 -16 M600 640 l20 -16 M560 620 v-24" stroke="${C.red}" stroke-width="5" stroke-linecap="round"/>`,
      ),
      label('pop!', 560, 560, { color: C.red }),
    ),
  'stuck-in-the-mud': () =>
    k.scene(
      person({ ...CAST[1], x: 300, left: 'out', right: 'out', mouth: 'flat' }),
      k.crawler({ x: 280, ground: 700, ...CAST[2], flip: true }),
      person({ ...CAST[3], x: 700, left: 'out', right: [600, 380], mouth: 'open', hat: 'party' }),
      label('stuck!', 300, 180, { color: C.pink }),
      arc(560, 260, 420, 320, { bend: -40 }),
    ),
  'obstacle-course': () =>
    k.outdoor(
      ...[150, 230, 310].map((x) =>
        k.raw(`<path d="M${x - 20} 690 l20 -60 l20 60 Z" fill="${C.orange}"/>`),
      ),
      k.hoop(450, 670, 45, C.pink),
      k.hoop(560, 670, 45, C.teal),
      k.raw(
        `<rect x="660" y="580" width="200" height="14" fill="${C.wood}"/><rect x="670" y="590" width="12" height="100" fill="${C.wood}"/><rect x="838" y="590" width="12" height="100" fill="${C.wood}"/>`,
      ),
      person({ ...CAST[4], x: 450, ground: 640, left: 'out', right: 'up', mouth: 'open' }),
      k.clock(900, 300),
      arc(160, 560, 860, 560, { bend: -240 }),
    ),
  sardines: () =>
    k.scene(
      k.raw(
        `<rect x="560" y="200" width="300" height="490" rx="8" fill="${C.wood}"/><rect x="580" y="220" width="260" height="470" fill="#8E6A48"/>`,
      ),
      ...[620, 700, 780].map((x, i) =>
        person({ ...CAST[i + 1], x, scale: 0.85, left: 'down', right: 'head', mouth: 'flat' }),
      ),
      k.raw(`<rect x="560" y="200" width="150" height="490" fill="${C.wood}" opacity="0.4"/>`),
      person({ ...CAST[0], x: 260, left: 'down', right: 'head', mouth: 'open' }),
      label('shh…', 700, 160, { color: C.purple }),
      label('where is everyone?', 260, 220, { size: 30 }),
    ),
  'capture-the-flag': () =>
    k.outdoor(
      k.raw(`<rect x="508" y="610" width="8" height="130" fill="${C.white}"/>`),
      k.flag(120, 690, C.red),
      k.flag(900, 690, C.blue),
      person({ ...CAST[0], x: 760, left: 'out', right: [880, 560], mouth: 'open' }),
      person({ ...CAST[3], x: 400, left: 'down', right: 'out', mouth: 'open' }),
      person({ ...CAST[2], x: 220, left: 'down', right: 'wave', mouth: 'smile' }),
      arc(780, 300, 560, 300, { bend: -60 }),
      label('bring it home!', 512, 140),
    ),
  'sharks-and-minnows': () =>
    k.outdoor(
      k.raw(`<rect x="0" y="610" width="1024" height="130" fill="#9DD6EF"/>`),
      person({ ...CAST[3], x: 512, left: 'out', right: 'out', mouth: 'open' }),
      k.raw(`<path d="M480 360 l32 -50 l32 50 Z" fill="${C.steel}"/>`),
      ...[160, 300].map((x, i) =>
        person({ ...CAST[i + 1], x, scale: 0.85, left: 'out', right: 'down', mouth: 'open' }),
      ),
      person({ ...CAST[6], x: 860, scale: 0.85, left: 'up', right: 'down', mouth: 'smile' }),
      arc(320, 300, 760, 300, { bend: -120 }),
      label('fishy, fishy, cross my ocean!', 512, 130, { size: 32 }),
    ),
  'steal-the-bacon': () =>
    k.outdoor(
      k.raw(`<path d="M492 680 l20 -26 l20 26 Z" fill="${C.red}"/>`),
      person({ ...CAST[2], x: 380, left: 'down', right: [480, 600], mouth: 'open' }),
      person({ ...CAST[5], x: 640, left: [550, 600], right: 'down', mouth: 'open' }),
      label('3', 380, 580, { size: 40, color: C.white }),
      label('3', 640, 580, { size: 40, color: C.white }),
      ...[100, 180].map((x, i) =>
        person({ ...CAST[i + 4], x, scale: 0.7, left: 'down', right: 'down', mouth: 'smile' }),
      ),
      ...[850, 930].map((x, i) =>
        person({ ...CAST[i + 6], x, scale: 0.7, left: 'down', right: 'down', mouth: 'smile' }),
      ),
      label('number 3!', 512, 160, { color: C.pink }),
    ),
  'kick-the-can': () =>
    k.outdoor(
      k.tree(920),
      k.raw(
        `<ellipse cx="420" cy="680" rx="110" ry="24" fill="none" stroke="${C.coral}" stroke-width="5" stroke-dasharray="10 8"/>`,
      ),
      k.can(420, 690, C.red),
      person({ ...CAST[1], x: 220, left: 'out', right: 'up', mouth: 'open' }),
      k.sparkle(470, 600, 22),
      arc(420, 600, 640, 480, { bend: -90 }),
      person({ ...CAST[4], x: 720, scale: 0.8, left: 'head', right: 'down', mouth: 'open' }),
      label('kick!', 420, 200, { color: C.red }),
    ),
  'rock-paper-scissors-tournament': () =>
    k.scene(
      person({ ...CAST[0], x: 400, left: 'down', right: [470, 430], mouth: 'open' }),
      person({ ...CAST[3], x: 624, left: [554, 430], right: 'down', mouth: 'open' }),
      k.raw(
        `<circle cx="474" cy="430" r="22" fill="${k.SKIN.tan}"/><rect x="530" y="404" width="44" height="52" rx="8" fill="${k.SKIN.light}"/>`,
      ),
      ...[140, 240].map((x, i) =>
        person({ ...CAST[i + 4], x, scale: 0.8, left: 'up', right: 'up', mouth: 'open' }),
      ),
      ...[790, 890].map((x, i) =>
        person({ ...CAST[i + 1], x, scale: 0.8, left: 'up', right: 'up', mouth: 'open' }),
      ),
      label('rock, paper, scissors!', 512, 170),
    ),
  'giants-wizards-and-elves': () =>
    k.scene(
      person({ ...CAST[2], x: 230, scale: 1.1, left: 'up', right: 'up', mouth: 'open' }),
      label('giant', 230, 150, { color: C.teal }),
      person({ ...CAST[6], x: 512, left: 'down', right: [610, 380], mouth: 'open', hat: 'party' }),
      k.sparkle(640, 360, 22, C.purple),
      label('wizard', 512, 150, { color: C.purple }),
      person({ ...CAST[7], x: 800, scale: 0.75, left: 'head', right: 'head', mouth: 'smile' }),
      label('elf', 800, 150, { color: C.green }),
      arc(300, 240, 440, 240, { bend: -40, color: C.purple }),
      arc(590, 240, 740, 240, { bend: -40, color: C.purple }),
    ),
  ninja: () =>
    k.scene(
      person({ ...CAST[0], x: 360, left: 'down', right: [520, 420], mouth: 'flat' }),
      person({ ...CAST[3], x: 680, left: 'up', right: 'out', mouth: 'open' }),
      k.raw(
        `<rect x="306" y="398" width="108" height="12" fill="${C.red}"/><rect x="626" y="398" width="108" height="12" fill="${C.red}"/>`,
      ),
      arc(420, 330, 600, 330, { bend: -40 }),
      label('Ninja!', 512, 160, { size: 54, color: C.red }),
    ),
  'zip-zap-zop': () =>
    k.scene(
      ...[180, 400, 620, 840].map((x, i) =>
        person({
          ...CAST[i + 2],
          x,
          left: i === 1 ? [520, 420] : 'down',
          right: i === 2 ? 'down' : 'down',
          mouth: i === 1 ? 'open' : 'smile',
        }),
      ),
      label('Zip!', 400, 240, { size: 46, color: C.pink }),
      label('Zap!', 620, 240, { size: 46, color: C.teal }),
      label('Zop!', 840, 240, { size: 46, color: C.purple }),
      arc(440, 290, 600, 290, { bend: -40 }),
      arc(660, 290, 820, 290, { bend: -40 }),
    ),
  'captains-coming': () =>
    k.scene(
      person({ ...CAST[3], x: 200, left: 'down', right: 'wave', mouth: 'open', hat: 'crown' }),
      k.chatBubble(330, 170, "Captain's coming!", { w: 290, h: 70, size: 30 }),
      ...[480, 640, 800].map((x, i) =>
        person({ ...CAST[i + 4], x, left: 'down', right: [x + 40, 420], mouth: 'flat' }),
      ),
      label('salute!', 640, 300, { size: 34, color: C.pink }),
    ),
  'human-bingo': () =>
    k.scene(
      k.raw(
        `<rect x="370" y="150" width="210" height="210" rx="8" fill="${C.white}" stroke="${C.grey}" stroke-width="4"/>`,
      ),
      ...Array.from({ length: 9 }, (_, i) =>
        k.raw(
          `<rect x="${380 + (i % 3) * 64}" y="${160 + Math.floor(i / 3) * 64}" width="58" height="58" rx="4" fill="${[0, 4, 8].includes(i) ? C.yellow : '#F1EEE8'}"/>`,
        ),
      ),
      person({ ...CAST[1], x: 250, left: 'down', right: [370, 330], mouth: 'open' }),
      person({ ...CAST[2], x: 760, left: 'wave', right: 'down', mouth: 'smile' }),
      k.chatBubble(780, 200, 'Been to Japan?', { w: 240, h: 66, size: 26 }),
      label('Bingo!', 475, 420, { color: C.pink }),
    ),
  'flashlight-tag': () =>
    k.scene(
      k.raw(
        `<rect width="1024" height="740" fill="#1F2A44"/><rect y="610" width="1024" height="130" fill="#2B3A33"/>`,
      ),
      k.raw(`<path d="M320 420 L820 300 L820 640 Z" fill="${C.yellow}" opacity="0.35"/>`),
      person({ ...CAST[0], x: 220, left: 'down', right: [320, 420], mouth: 'open' }),
      k.raw(`<rect x="300" y="408" width="40" height="22" rx="5" fill="${C.steel}"/>`),
      person({ ...CAST[5], x: 760, left: 'up', right: 'up', mouth: 'open' }),
      k.tree(930, 660, '#2E5E3E'),
      label('got you!', 512, 180, { color: C.yellow }),
    ),
};

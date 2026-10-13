import * as k from '../kit.mjs';

const { C, CAST, person, table, label, arc } = k;
const T = 478;
const bride = (x, extra = {}) => person({ ...CAST[1], x, hat: 'veil', ...extra });

export default {
  'underwear-gift': () =>
    k.scene(
      bride(330, { left: 'down', right: [440, 380], mouth: 'open' }),
      k.raw(
        `<path d="M420 360 h70 l-8 26 q-27 14 -54 0 Z" fill="${C.pink}"/><path d="M432 362 q22 14 46 0" stroke="${C.white}" stroke-width="3" fill="none"/>`,
      ),
      k.raw(`<path d="M560 560 h110 l-14 120 h-82 Z" fill="${C.purple}"/>`),
      person({ ...CAST[2], x: 760, left: 'down', right: 'down', mouth: 'flat' }),
      person({ ...CAST[4], x: 900, left: 'head', right: 'down', mouth: 'smile' }),
      label('whose?', 600, 200, { color: C.pink }),
    ),
  'adult-pictionary': () =>
    k.scene(
      k.board(512, 280, { w: 300, h: 210 }),
      k.raw(
        `<path d="M440 300 q30 -70 70 0 q40 -70 70 0 q-70 70 -70 70 q0 0 -70 -70" stroke="${C.red}" stroke-width="6" fill="none"/>`,
      ),
      person({ ...CAST[3], x: 300, left: 'down', right: [400, 300], mouth: 'flat' }),
      person({ ...CAST[5], x: 760, left: 'up', right: 'down', mouth: 'open' }),
      person({ ...CAST[0], x: 880, left: 'head', right: 'down', mouth: 'open' }),
    ),
  'lingerie-shower-bingo': () =>
    k.scene(
      bride(260, { left: [340, 470], right: [380, 470], mouth: 'open' }),
      k.gift(360, 520, 80, C.pink, C.white),
      k.raw(
        `<rect x="560" y="200" width="200" height="200" rx="8" fill="${C.white}" stroke="${C.grey}" stroke-width="4"/>`,
      ),
      ...Array.from({ length: 16 }, (_, i) =>
        k.raw(
          `<rect x="${570 + (i % 4) * 47}" y="${210 + Math.floor(i / 4) * 47}" width="40" height="40" rx="4" fill="${[1, 5, 9, 13].includes(i) ? C.pink : '#F1EEE8'}"/>`,
        ),
      ),
      person({ ...CAST[2], x: 860, left: 'up', right: 'down', mouth: 'open' }),
      label('Bingo!', 860, 160, { color: C.pink }),
    ),
  'bachelorette-roulette': () =>
    k.scene(
      table(240, 784),
      k.raw(
        `<g transform="rotate(-30 512 ${T - 16})">${k.bottle(512 + 0, T + 30, { color: C.green, h: 90 })}</g>`,
      ),
      ...[360, 420, 600, 660].map((x) => k.shotGlass(x, T)),
      arc(450, T - 90, 580, T - 90, { bend: -50 }),
      bride(160, { left: 'down', right: [250, T - 30], mouth: 'open' }),
      person({ ...CAST[3], x: 880, left: 'up', right: 'down', mouth: 'open' }),
    ),
  'shot-roulette': () =>
    k.scene(
      table(200, 824),
      k.raw(
        `<ellipse cx="512" cy="${T - 20}" rx="170" ry="40" fill="${C.dark}"/><ellipse cx="512" cy="${T - 24}" rx="150" ry="32" fill="${C.red}"/><ellipse cx="512" cy="${T - 26}" rx="40" ry="10" fill="${C.yellow}"/>`,
      ),
      ...Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return k.shotGlass(
          512 + Math.cos(a) * 120,
          T - 20 + Math.sin(a) * 22,
          [C.yellow, C.green, C.orange, C.pink][i % 4],
        );
      }),
      person({ ...CAST[6], x: 120, left: 'down', right: [300, T - 40], mouth: 'open' }),
      person({ ...CAST[0], x: 910, left: 'head', right: 'down', mouth: 'puff' }),
    ),
  'bachelorette-jeopardy': () =>
    k.scene(
      k.raw(`<rect x="300" y="120" width="420" height="260" rx="8" fill="#2A3F8F"/>`),
      ...Array.from({ length: 15 }, (_, i) =>
        k.raw(
          `<rect x="${312 + (i % 5) * 82}" y="${132 + Math.floor(i / 5) * 82}" width="74" height="74" rx="4" fill="#3B57C4"/><text x="${349 + (i % 5) * 82}" y="${177 + Math.floor(i / 5) * 82}" font-family="Inter, Arial" font-weight="800" font-size="22" fill="${C.yellow}" text-anchor="middle">${(Math.floor(i / 5) + 1) * 100}</text>`,
        ),
      ),
      bride(170, { left: 'down', right: 'up', mouth: 'open' }),
      person({ ...CAST[3], x: 860, left: [800, 420], right: 'down', mouth: 'open' }),
      k.mic(800, 410),
    ),
  'pin-the-kiss': () =>
    k.scene(
      k.raw(
        `<rect x="600" y="120" width="260" height="360" rx="10" fill="${C.white}" stroke="${C.wood}" stroke-width="8"/>`,
      ),
      person({
        ...CAST[3],
        x: 730,
        ground: 470,
        scale: 0.85,
        left: 'down',
        right: 'down',
        mouth: 'smile',
        hat: 'bowtie',
      }),
      k.heart(700, 300, 26, C.red),
      k.heart(790, 180, 22, C.red),
      person({
        ...CAST[5],
        x: 400,
        blindfold: true,
        left: [520, 340],
        right: 'down',
        mouth: 'puff',
      }),
      arc(300, 600, 360, 640, { bend: 30 }),
    ),
  'prosecco-pong': () =>
    k.scene(
      table(120, 904),
      ...[
        [0, 3],
        [1, 2],
        [2, 1],
      ]
        .flatMap(([row, count]) =>
          Array.from({ length: count }, (_, i) =>
            k.raw(
              `<path d="M${180 + row * 36 - 12} ${T - 50 + (i - (count - 1) / 2) * 0} l24 0 l-6 34 l-12 0 Z" fill="${C.sky}" opacity="0.8"/>`,
            ),
          ),
        )
        .slice(0, 0),
      ...[760, 800, 840, 780, 820, 800].map((x, i) =>
        k.raw(
          `<path d="M${x - 14} ${T - 60 + (i > 2 ? 0 : 0)} h28 l-4 30 h-20 Z" fill="${C.yellow}" opacity="0.85"/><rect x="${x - 2}" y="${T - 30}" width="4" height="22" fill="${C.sky}"/><ellipse cx="${x}" cy="${T - 6}" rx="12" ry="4" fill="${C.sky}"/>`,
        ),
      ),
      k.ball(560, 300, 12),
      arc(300, 400, 780, T - 80, { bend: -180 }),
      bride(220, { left: 'down', right: [300, 400], mouth: 'flat' }),
    ),
  'whats-in-your-phone': () =>
    k.scene(
      k.phone(512, 290, { w: 160, h: 280 }),
      k.star(470, 230, 20),
      label('1000+', 540, 340, { size: 34, color: C.pink }),
      person({ ...CAST[2], x: 300, left: 'down', right: [430, 380], mouth: 'open' }),
      k.card(780, 330, { w: 140, h: 170 }),
      label('✓ selfie 1', 780, 300, { size: 20, color: C.dark }),
      label('✓ celeb 10', 780, 340, { size: 20, color: C.dark }),
      person({ ...CAST[7], x: 860, scale: 0.9, left: [800, 400], right: 'down', mouth: 'smile' }),
    ),
  'balloon-game': () =>
    k.scene(
      k.balloon(380, 230, C.purple, 32),
      k.balloon(470, 200, C.blue, 32),
      k.balloon(560, 240, C.orange, 32),
      label('EX', 470, 210, { size: 22, color: C.white }),
      k.raw(
        `<path d="M650 560 l20 -20 l10 24 l24 -10 l-14 22 l20 12 l-26 4" fill="none" stroke="${C.coral}" stroke-width="5"/>`,
      ),
      label('POP!', 690, 500, { size: 40, color: C.pink }),
      bride(780, { left: 'up', right: 'down', mouth: 'open' }),
      k.balloon(860, 210, C.red, 30),
      label('♥', 860, 220, { size: 26, color: C.white }),
    ),
  'gift-game': () =>
    k.scene(
      bride(330, { left: [430, 520], right: [480, 520], mouth: 'open' }),
      k.gift(460, 580, 90, C.teal, C.yellow),
      k.chatBubble(360, 220, 'Our trip to Porto?', { w: 280, h: 70, size: 26 }),
      person({ ...CAST[3], x: 760, left: 'down', right: 'wave', mouth: 'smile' }),
      k.gift(880, 690, 60, C.pink, C.white),
    ),
  'housewife-test': () =>
    k.scene(
      table(200, 560),
      k.raw(
        `<path d="M300 ${T - 10} h110 q20 0 20 -20 l-20 -20 h-90 q-20 0 -20 40 Z" fill="${C.steel}"/><rect x="330" y="${T - 60}" width="60" height="12" rx="4" fill="${C.dark}"/>`,
      ),
      k.raw(`<rect x="440" y="${T - 8}" width="100" height="8" fill="${C.sky}"/>`),
      bride(640, { left: [430, T - 30], right: 'down', mouth: 'flat' }),
      k.card(840, 300, { w: 120, h: 90, text: '8/10', color: C.green }),
      person({ ...CAST[2], x: 880, left: [840, 360], right: 'down', mouth: 'smile' }),
    ),
  'bachelorette-treasure-hunt': () =>
    k.outdoor(
      k.raw(
        `<rect x="120" y="240" width="200" height="370" fill="#E8C6A0"/><rect x="150" y="280" width="50" height="60" fill="${C.sky}"/><rect x="240" y="280" width="50" height="60" fill="${C.sky}"/><rect x="190" y="520" width="60" height="90" fill="${C.brown}"/>`,
      ),
      bride(460, { left: 'down', right: [560, 420], mouth: 'open' }),
      k.paper(570, 410, { w: 70, h: 90, lines: 4 }),
      k.raw(
        `<rect x="680" y="420" width="70" height="70" fill="${C.white}" stroke="${C.grey}" stroke-width="2" transform="rotate(10 715 455)"/>`,
      ),
      label('+5', 715, 390, { color: C.green }),
      person({ ...CAST[0], x: 840, left: [760, 420], right: 'down', mouth: 'smile' }),
      k.phone(760, 420, { w: 30, h: 52 }),
    ),
  'who-is-coming': () =>
    k.scene(
      bride(260, { left: 'down', right: [360, 420], mouth: 'open' }),
      k.envelope(380, 420, 90),
      label('?', 380, 340, { size: 50, color: C.pink }),
      k.raw(
        `<rect x="540" y="200" width="380" height="420" rx="12" fill="${C.purple}" opacity="0.2"/>`,
      ),
      ...[0, 1, 2].map((i) =>
        person({
          ...CAST[i + 2],
          x: 620 + i * 110,
          scale: 0.85,
          left: 'down',
          right: i === 1 ? 'up' : 'down',
          mouth: 'smile',
          hat: i === 0 ? 'party' : undefined,
        }),
      ),
      label('surprise!', 730, 170, { color: C.pink }),
    ),
  'i-love-you': () =>
    k.outdoor(
      bride(330, { left: 'down', right: [430, 420], mouth: 'open' }),
      k.phone(440, 410, { w: 36, h: 64 }),
      person({ ...CAST[6], x: 700, left: 'wave', right: 'down', mouth: 'open' }),
      k.chatBubble(700, 230, "Je t'aime!", { w: 200, h: 70, size: 30 }),
      label('Te quiero · Ich liebe dich', 400, 150, { size: 28 }),
      k.heart(560, 360, 28),
    ),
  'packing-list': () =>
    k.scene(
      k.paper(260, 300, { w: 160, h: 220, lines: 6 }),
      label('packing list', 260, 160, { size: 28 }),
      k.raw(
        `<rect x="430" y="520" width="200" height="140" rx="16" fill="${C.orange}"/><rect x="500" y="500" width="60" height="26" rx="8" fill="none" stroke="${C.dark}" stroke-width="7"/>`,
      ),
      k.raw(
        `<ellipse cx="470" cy="490" rx="22" ry="30" fill="${C.yellow}"/><path d="M462 462 l-8 -22 M470 460 l0 -26 M478 462 l8 -22" stroke="${C.green}" stroke-width="6" stroke-linecap="round"/>`,
      ),
      k.raw(
        `<ellipse cx="590" cy="500" rx="40" ry="24" fill="none" stroke="${C.blue}" stroke-width="10"/>`,
      ),
      bride(780, { left: [640, 520], right: 'down', mouth: 'open' }),
    ),
  'naming-game': () =>
    k.scene(
      bride(260, { left: 'down', right: [400, 300], mouth: 'smile' }),
      k.raw(`<path d="M380 300 l20 -60 l20 60 Z" fill="${C.yellow}"/>`),
      person({ ...CAST[2], x: 560, left: 'down', right: 'down', mouth: 'open', hat: 'party' }),
      person({ ...CAST[3], x: 720, left: 'down', right: 'down', mouth: 'smile', hat: 'crown' }),
      label('the wild one', 560, 180, { size: 26 }),
      label('the elegant one', 760, 120, { size: 26 }),
    ),
  'travel-conference': () =>
    k.scene(
      k.raw(
        `<rect x="60" y="150" width="904" height="300" rx="30" fill="${C.white}" stroke="${C.grey}" stroke-width="6"/><rect x="100" y="190" width="160" height="110" rx="12" fill="${C.sky}"/><rect x="300" y="190" width="160" height="110" rx="12" fill="${C.sky}"/><rect x="760" y="190" width="160" height="110" rx="12" fill="${C.sky}"/>`,
      ),
      bride(560, { left: [620, 380], right: 'up', mouth: 'open' }),
      k.mic(620, 370),
      k.raw(`<path d="M594 160 l0 -40 l40 14 l-40 14" fill="${C.yellow}"/>`),
      person({ ...CAST[3], x: 300, scale: 0.85, left: 'down', right: 'up', mouth: 'open' }),
      person({ ...CAST[6], x: 820, scale: 0.85, left: 'down', right: 'down', mouth: 'smile' }),
    ),
  'blind-wine-tasting': () =>
    k.scene(
      table(200, 824),
      ...[340, 440, 540].map((x, i) =>
        k.raw(
          `<g>${k.bottle(x, T, { color: ['#7A1F2B', '#E0C060', '#3C6B3A'][i], h: 140 })}<rect x="${x - 23}" y="${T - 90}" width="46" height="50" fill="${C.steel}"/><text x="${x}" y="${T - 56}" font-family="Inter, Arial" font-weight="800" font-size="24" fill="${C.white}" text-anchor="middle">${i + 1}</text></g>`,
        ),
      ),
      k.raw(
        `<path d="M650 ${T - 80} h40 q0 40 -20 46 v30 h18 v4 h-40 v-4 h18 v-30 q-20 -6 -16 -46 Z" fill="${C.sky}" opacity="0.8"/><path d="M652 ${T - 66} h36 q-2 24 -18 30 q-16 -6 -18 -30 Z" fill="#7A1F2B"/>`,
      ),
      person({ ...CAST[1], x: 800, left: [690, T - 60], right: 'down', mouth: 'flat' }),
      k.card(800, 220, { w: 90, h: 60, text: '8/10', color: C.purple }),
    ),
  'drink-bracelets': () =>
    k.scene(
      bride(380, { left: 'down', right: [520, 470], mouth: 'smile' }),
      k.raw(
        `<rect x="490" y="462" width="18" height="18" rx="4" fill="${C.pink}"/><rect x="500" y="466" width="18" height="18" rx="4" fill="${C.teal}"/>`,
      ),
      person({ ...CAST[3], x: 650, left: [540, 470], right: 'down', mouth: 'open' }),
      k.raw(`<path d="M540 470 q20 -20 30 6" stroke="${C.yellow}" stroke-width="6" fill="none"/>`),
      k.glass(790, 540, C.orange),
      label('your round!', 650, 180),
    ),
  'memory-book': () =>
    k.scene(
      k.raw(
        `<path d="M300 300 L512 330 L724 300 L724 520 L512 550 L300 520 Z" fill="${C.white}" stroke="${C.wood}" stroke-width="6"/><path d="M512 330 L512 550" stroke="${C.wood}" stroke-width="4"/>`,
      ),
      k.raw(
        `<rect x="340" y="340" width="120" height="90" fill="${C.sky}" transform="rotate(-6 400 385)"/><rect x="560" y="350" width="110" height="80" fill="${C.pink}" opacity="0.6" transform="rotate(5 615 390)"/>`,
      ),
      k.heart(400, 470, 22),
      k.star(620, 470, 16),
      bride(170, { left: 'down', right: [300, 420], mouth: 'open' }),
      person({ ...CAST[2], x: 860, left: 'wave', right: 'down', mouth: 'smile' }),
    ),
};

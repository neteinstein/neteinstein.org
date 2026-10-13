/**
 * A tiny SVG kit for the /games illustrations, in the guide's flat style:
 * a cream wall, a sand floor, round-headed people with stick arms, and a
 * box of props. Every helper returns an SVG fragment; `scene()` wraps them in
 * the 1024×740 canvas the guide's drawings share.
 *
 * Coordinates: x runs left to right, `GROUND` (690) is where feet touch the
 * floor, and the floor band starts at `FLOOR` (610).
 */

export const W = 1024;
export const H = 740;
export const FLOOR = 610;
export const GROUND = 690;

export const C = {
  wall: '#FFF7E8',
  floor: '#F0E0C4',
  wood: '#C9A27A',
  ink: '#23404F',
  dark: '#1D2B36',
  mouth: '#C0262D',
  cheek: '#F0998E',
  red: '#E3363E',
  pink: '#EF5F7A',
  coral: '#E8505B',
  teal: '#2A9D8F',
  green: '#20C08A',
  purple: '#8E70CF',
  yellow: '#FFC93C',
  orange: '#F5A030',
  blue: '#4FC3E8',
  sky: '#BFE6F5',
  white: '#FFFFFF',
  grey: '#C9D3D8',
  steel: '#9AA9B2',
  brown: '#8A5A3B',
  label: '#8E70CF',
};

export const SKIN = { light: '#EFC7A0', tan: '#CA8D5D', dark: '#8A5233', fair: '#F3D2B3' };
export const HAIR = {
  black: '#1F1F1F',
  brown: '#6B3A1E',
  blond: '#E3B04B',
  dark: '#3B2416',
  red: '#B5482A',
};

/** A small cast to draw from, so scenes stay varied without thinking about it. */
export const CAST = [
  { skin: SKIN.tan, hair: 'short', hairColor: HAIR.black, shirt: C.teal },
  { skin: SKIN.light, hair: 'long', hairColor: HAIR.blond, shirt: C.purple },
  { skin: SKIN.dark, hair: 'short', hairColor: HAIR.black, shirt: C.green },
  { skin: SKIN.light, hair: 'short', hairColor: HAIR.brown, shirt: C.red },
  { skin: SKIN.tan, hair: 'bun', hairColor: HAIR.black, shirt: C.yellow },
  { skin: SKIN.fair, hair: 'long', hairColor: HAIR.dark, shirt: C.pink },
  { skin: SKIN.dark, hair: 'bun', hairColor: HAIR.dark, shirt: C.purple },
  { skin: SKIN.light, hair: 'curly', hairColor: HAIR.red, shirt: C.teal },
];

const n = (value) => Math.round(value * 10) / 10;

export function scene(...parts) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<rect width="${W}" height="${H}" fill="${C.wall}"/>
<rect y="${FLOOR}" width="${W}" height="${H - FLOOR}" fill="${C.floor}"/>
${parts.flat(Infinity).filter(Boolean).join('\n')}
</svg>`;
}

/** An outdoor variant: sky, grass. */
export function outdoor(...parts) {
  return scene(
    `<rect width="${W}" height="${FLOOR}" fill="#DDF1F7"/>`,
    `<rect y="${FLOOR}" width="${W}" height="${H - FLOOR}" fill="#BFE3A8"/>`,
    `<circle cx="900" cy="110" r="48" fill="${C.yellow}"/>`,
    ...parts,
  );
}

/**
 * A person standing at `x` (feet on `ground`), facing us.
 * `left`/`right` place each hand: a preset ('down', 'up', 'out', 'hip',
 * 'front', 'wave', 'none') or an absolute [x, y] point.
 */
export function person({
  x,
  ground = GROUND,
  scale = 1,
  skin = SKIN.light,
  hair = 'short',
  hairColor = HAIR.brown,
  shirt = C.teal,
  left = 'down',
  right = 'down',
  mouth = 'smile',
  blindfold = false,
  sit = false,
  hat,
  flip = false,
} = {}) {
  const s = scale;
  const gy = ground;
  const headY = gy - 258 * s;
  const r = 53 * s;
  const bodyTop = gy - 182 * s;
  const bodyH = (sit ? 80 : 108) * s;
  const parts = [];

  // A veil hangs behind the head and shoulders.
  if (hat === 'veil') {
    parts.push(
      `<path d="M${n(x - r * 0.9)} ${n(headY - r * 0.7)} Q${n(x)} ${n(headY - r * 1.3)} ${n(x + r * 0.9)} ${n(headY - r * 0.7)} L${n(x + r * 1.6)} ${n(headY + r * 2.6)} L${n(x - r * 1.6)} ${n(headY + r * 2.6)} Z" fill="${C.white}" stroke="${C.grey}" stroke-width="2"/>`,
    );
  }

  // Long hair: a rounded bob behind the face.
  if (hair === 'long') {
    parts.push(
      `<rect x="${n(x - r * 1.12)}" y="${n(headY - r * 1.12)}" width="${n(r * 2.24)}" height="${n(r * 2.05)}" rx="${n(r)}" fill="${hairColor}"/>`,
    );
  }

  // Legs and feet.
  if (sit) {
    const seatY = gy - 100 * s;
    parts.push(
      `<rect x="${n(x - 26 * s)}" y="${n(seatY - 10 * s)}" width="${n(52 * s)}" height="${n(20 * s)}" rx="${n(8 * s)}" fill="${C.ink}"/>`,
      `<rect x="${n(x - 26 * s)}" y="${n(seatY)}" width="${n(18 * s)}" height="${n(95 * s)}" rx="${n(8 * s)}" fill="${C.ink}"/>`,
      `<rect x="${n(x + 8 * s)}" y="${n(seatY)}" width="${n(18 * s)}" height="${n(95 * s)}" rx="${n(8 * s)}" fill="${C.ink}"/>`,
    );
  } else {
    parts.push(
      `<rect x="${n(x - 23 * s)}" y="${n(gy - 85 * s)}" width="${n(19 * s)}" height="${n(82 * s)}" rx="${n(6 * s)}" fill="${C.ink}"/>`,
      `<rect x="${n(x + 4 * s)}" y="${n(gy - 85 * s)}" width="${n(19 * s)}" height="${n(82 * s)}" rx="${n(6 * s)}" fill="${C.ink}"/>`,
    );
  }
  parts.push(
    `<ellipse cx="${n(x - 19 * s)}" cy="${n(gy)}" rx="${n(23 * s)}" ry="${n(10 * s)}" fill="${C.ink}"/>`,
    `<ellipse cx="${n(x + 19 * s)}" cy="${n(gy)}" rx="${n(23 * s)}" ry="${n(10 * s)}" fill="${C.ink}"/>`,
  );

  // Body and neck.
  const bodyY = sit ? gy - 182 * s + 6 * s : bodyTop;
  parts.push(
    `<rect x="${n(x - 9 * s)}" y="${n(headY + r - 6 * s)}" width="${n(18 * s)}" height="${n(26 * s)}" fill="${skin}"/>`,
    `<rect x="${n(x - 46 * s)}" y="${n(bodyY)}" width="${n(92 * s)}" height="${n(bodyH)}" rx="${n(30 * s)}" fill="${shirt}"/>`,
  );

  // Arms.
  const shoulderY = bodyY + 22 * s;
  const hand = (side, pose) => {
    const sx = x + side * 38 * s;
    const presets = {
      down: [x + side * 58 * s, bodyY + 120 * s],
      up: [x + side * 70 * s, headY - 70 * s],
      out: [x + side * 150 * s, shoulderY + 10 * s],
      wave: [x + side * 95 * s, headY - 40 * s],
      front: [x + side * 30 * s, bodyY + 70 * s],
      hip: [x + side * 62 * s, bodyY + 62 * s],
      head: [x + side * 50 * s, headY - 20 * s],
    };
    if (pose === 'none') return '';
    const [hx, hy] = Array.isArray(pose) ? pose : (presets[pose] ?? presets.down);
    const ex = (sx + hx) / 2 + side * 14 * s;
    const ey = (shoulderY + hy) / 2 + 8 * s;
    return `<path d="M${n(sx)} ${n(shoulderY)} Q${n(ex)} ${n(ey)} ${n(hx)} ${n(hy)}" stroke="${shirt}" stroke-width="${n(17 * s)}" fill="none" stroke-linecap="round"/>
<circle cx="${n(hx)}" cy="${n(hy)}" r="${n(11 * s)}" fill="${skin}"/>`;
  };
  parts.push(hand(flip ? 1 : -1, left), hand(flip ? -1 : 1, right));

  // Head and face.
  parts.push(`<circle cx="${n(x)}" cy="${n(headY)}" r="${n(r)}" fill="${skin}"/>`);
  if (hair === 'short' || hair === 'long' || hair === 'bun') {
    // A cap over the top of the head, cut straight across the forehead.
    const edge = headY - r * 0.22;
    const half = Math.sqrt(r * r - (r * 0.22) ** 2);
    const grow = hair === 'long' ? 1.08 : 1.02;
    parts.push(
      `<path d="M${n(x - half * grow)} ${n(edge)} A${n(r * grow)} ${n(r * grow)} 0 0 1 ${n(x + half * grow)} ${n(edge)} Z" fill="${hairColor}"/>`,
    );
  }
  if (hair === 'bun')
    parts.push(
      `<circle cx="${n(x)}" cy="${n(headY - r - 12 * s)}" r="${n(20 * s)}" fill="${hairColor}"/>`,
    );
  if (hair === 'curly') {
    for (const [dx, dy] of [
      [-0.8, -0.35],
      [-0.45, -0.8],
      [0, -0.95],
      [0.45, -0.8],
      [0.8, -0.35],
    ])
      parts.push(
        `<circle cx="${n(x + dx * r)}" cy="${n(headY + dy * r)}" r="${n(r * 0.38)}" fill="${hairColor}"/>`,
      );
  }
  if (blindfold) {
    parts.push(
      `<rect x="${n(x - r - 2 * s)}" y="${n(headY - 16 * s)}" width="${n(2 * r + 4 * s)}" height="${n(22 * s)}" rx="${n(6 * s)}" fill="${C.dark}"/>`,
    );
  } else {
    parts.push(
      `<circle cx="${n(x - 16 * s)}" cy="${n(headY - 4 * s)}" r="${n(5.5 * s)}" fill="${C.dark}"/>`,
      `<circle cx="${n(x + 16 * s)}" cy="${n(headY - 4 * s)}" r="${n(5.5 * s)}" fill="${C.dark}"/>`,
    );
  }
  parts.push(
    `<circle cx="${n(x - 29 * s)}" cy="${n(headY + 12 * s)}" r="${n(9 * s)}" fill="${C.cheek}"/>`,
    `<circle cx="${n(x + 29 * s)}" cy="${n(headY + 12 * s)}" r="${n(9 * s)}" fill="${C.cheek}"/>`,
  );
  if (mouth === 'open')
    parts.push(
      `<ellipse cx="${n(x)}" cy="${n(headY + 20 * s)}" rx="${n(8 * s)}" ry="${n(11 * s)}" fill="${C.mouth}"/>`,
    );
  else if (mouth === 'flat')
    parts.push(
      `<rect x="${n(x - 10 * s)}" y="${n(headY + 17 * s)}" width="${n(20 * s)}" height="${n(5 * s)}" rx="${n(2.5 * s)}" fill="${C.mouth}"/>`,
    );
  else if (mouth === 'puff')
    parts.push(
      `<circle cx="${n(x)}" cy="${n(headY + 19 * s)}" r="${n(6 * s)}" fill="${C.mouth}"/>`,
    );
  else
    parts.push(
      `<path d="M${n(x - 14 * s)} ${n(headY + 13 * s)} Q${n(x)} ${n(headY + 32 * s)} ${n(x + 14 * s)} ${n(headY + 13 * s)} Z" fill="${C.mouth}"/>`,
    );
  if (hat === 'party')
    parts.push(
      `<path d="M${n(x - 26 * s)} ${n(headY - r + 10 * s)} L${n(x)} ${n(headY - r - 60 * s)} L${n(x + 26 * s)} ${n(headY - r + 10 * s)} Z" fill="${C.pink}"/><circle cx="${n(x)}" cy="${n(headY - r - 62 * s)}" r="${n(8 * s)}" fill="${C.yellow}"/>`,
    );
  if (hat === 'crown')
    parts.push(
      `<path d="M${n(x - 28 * s)} ${n(headY - r + 6 * s)} L${n(x - 28 * s)} ${n(headY - r - 26 * s)} L${n(x - 14 * s)} ${n(headY - r - 10 * s)} L${n(x)} ${n(headY - r - 32 * s)} L${n(x + 14 * s)} ${n(headY - r - 10 * s)} L${n(x + 28 * s)} ${n(headY - r - 26 * s)} L${n(x + 28 * s)} ${n(headY - r + 6 * s)} Z" fill="${C.yellow}"/>`,
    );
  if (hat === 'bowtie')
    parts.push(
      `<path d="M${n(x)} ${n(bodyY + 8 * s)} l${n(-16 * s)} ${n(-9 * s)} v${n(18 * s)} Z M${n(x)} ${n(bodyY + 8 * s)} l${n(16 * s)} ${n(-9 * s)} v${n(18 * s)} Z" fill="${C.orange}"/>`,
    );
  return parts.join('\n');
}

/** `count` people spread evenly between `from` and `to`, drawn from `CAST`. */
export function crowd(count, from, to, options = {}, offset = 0) {
  const step = count > 1 ? (to - from) / (count - 1) : 0;
  return Array.from({ length: count }, (_, index) =>
    person({
      ...CAST[(index + offset) % CAST.length],
      x: from + index * step,
      ...options,
      ...(options.each?.(index) ?? {}),
    }),
  );
}

export function table(x1, x2, top = 478) {
  return `<rect x="${x1}" y="${top}" width="${x2 - x1}" height="16" rx="5" fill="${C.wood}"/>
<rect x="${x1 + 20}" y="${top + 14}" width="15" height="${FLOOR - top - 14}" fill="${C.wood}"/>
<rect x="${x2 - 35}" y="${top + 14}" width="15" height="${FLOOR - top - 14}" fill="${C.wood}"/>`;
}

export function chair(x, seat = 590, facing = 1) {
  const back = x - facing * 40;
  return `<rect x="${x - 45}" y="${seat - 12}" width="90" height="14" rx="4" fill="${C.wood}"/>
<rect x="${back - 7}" y="${seat - 120}" width="14" height="120" rx="4" fill="${C.wood}"/>
<rect x="${x - 40}" y="${seat}" width="12" height="${GROUND - seat - 4}" fill="${C.wood}"/>
<rect x="${x + 28}" y="${seat}" width="12" height="${GROUND - seat - 4}" fill="${C.wood}"/>`;
}

export function label(
  text,
  x,
  y,
  { size = 40, color = C.label, anchor = 'middle', rotate = 0 } = {},
) {
  const safe = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return `<text x="${x}" y="${y}" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="${size}" fill="${color}" text-anchor="${anchor}"${rotate ? ` transform="rotate(${rotate} ${x} ${y})"` : ''}>${safe}</text>`;
}

/** The dotted motion arc, with an arrowhead at the end. */
export function arc(x1, y1, x2, y2, { bend = -80, color = C.coral, head = true } = {}) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 + bend;
  const angle = Math.atan2(y2 - my, x2 - mx);
  const a1 = angle + Math.PI * 0.8;
  const a2 = angle - Math.PI * 0.8;
  const tip = head
    ? `<path d="M${n(x2 + Math.cos(a1) * 18)} ${n(y2 + Math.sin(a1) * 18)} L${x2} ${y2} L${n(x2 + Math.cos(a2) * 18)} ${n(y2 + Math.sin(a2) * 18)}" stroke="${color}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
    : '';
  return `<path d="M${x1} ${y1} Q${n(mx)} ${n(my)} ${x2} ${y2}" stroke="${color}" stroke-width="5" fill="none" stroke-linecap="round" stroke-dasharray="1 12"/>${tip}`;
}

export function line(x1, y1, x2, y2, { color = C.ink, width = 6, dash } = {}) {
  return `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''} fill="none"/>`;
}

// ---- Props -------------------------------------------------------------

export function cup(x, y, { color = C.red, w = 38, h = 46, down = false } = {}) {
  // (x, y) is the bottom centre of the cup as it stands.
  const t = w / 2;
  const b = t * 0.72;
  return down
    ? `<path d="M${x - t} ${y} L${x - b} ${y - h} L${x + b} ${y - h} L${x + t} ${y} Z" fill="${color}"/><rect x="${x - t - 1}" y="${y - 5}" width="${w + 2}" height="5" rx="2" fill="${C.white}" opacity="0.5"/>`
    : `<path d="M${x - b} ${y} L${x - t} ${y - h} L${x + t} ${y - h} L${x + b} ${y} Z" fill="${color}"/><rect x="${x - t - 1}" y="${y - h}" width="${w + 2}" height="5" rx="2" fill="${C.white}" opacity="0.5"/>`;
}

/** A pyramid of upside-down cups standing on `y`. */
export function cupPyramid(x, y, rows = 3, { color = C.red, w = 34, h = 40 } = {}) {
  const parts = [];
  for (let row = 0; row < rows; row++) {
    const count = rows - row;
    for (let index = 0; index < count; index++)
      parts.push(
        cup(x + (index - (count - 1) / 2) * (w + 4), y - row * h, { color, w, h, down: true }),
      );
  }
  return parts.join('\n');
}

export function cupStack(x, y, count = 8, { color = C.blue, w = 38 } = {}) {
  const parts = [cup(x, y, { color, w, h: 46 })];
  for (let index = 1; index < count; index++)
    parts.push(
      `<rect x="${x - w / 2}" y="${y - 46 - index * 7}" width="${w}" height="5" rx="2" fill="${color}"/>`,
    );
  return parts.join('\n');
}

export function balloon(x, y, color = C.red, r = 30) {
  return `<path d="M${x} ${y + r * 1.2} q-8 30 6 60" stroke="${C.steel}" stroke-width="2.5" fill="none"/>
<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 1.2}" fill="${color}"/>
<path d="M${x - 6} ${y + r * 1.2 - 2} l6 12 l6 -12 Z" fill="${color}"/>
<ellipse cx="${x - r * 0.35}" cy="${y - r * 0.45}" rx="${r * 0.18}" ry="${r * 0.3}" fill="${C.white}" opacity="0.45"/>`;
}

export function ball(x, y, r = 14, color = C.white, stroke = C.grey) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" stroke="${stroke}" stroke-width="2"/>`;
}

export function bottle(x, y, { color = C.green, h = 110, label: tag } = {}) {
  const w = h * 0.32;
  return `<path d="M${x - w / 2} ${y} L${x - w / 2} ${y - h * 0.62} Q${x - w / 2} ${y - h * 0.75} ${x - w * 0.2} ${y - h * 0.8} L${x - w * 0.2} ${y - h} L${x + w * 0.2} ${y - h} L${x + w * 0.2} ${y - h * 0.8} Q${x + w / 2} ${y - h * 0.75} ${x + w / 2} ${y - h * 0.62} L${x + w / 2} ${y} Z" fill="${color}" opacity="0.9"/>
<rect x="${x - w * 0.22}" y="${y - h - 8}" width="${w * 0.44}" height="10" rx="3" fill="${C.red}"/>${tag ? `<rect x="${x - w / 2}" y="${y - h * 0.45}" width="${w}" height="${h * 0.22}" fill="${C.white}" opacity="0.85"/>` : ''}`;
}

export function bowl(x, y, { w = 90, color = C.blue } = {}) {
  return `<path d="M${x - w / 2} ${y - w * 0.32} Q${x - w / 2} ${y} ${x} ${y} Q${x + w / 2} ${y} ${x + w / 2} ${y - w * 0.32} Z" fill="${color}"/>
<ellipse cx="${x}" cy="${y - w * 0.32}" rx="${w / 2}" ry="${w * 0.08}" fill="${C.white}" opacity="0.35"/>`;
}

export function plate(x, y, { w = 90, color = C.white } = {}) {
  return `<ellipse cx="${x}" cy="${y}" rx="${w / 2}" ry="${w * 0.12}" fill="${color}" stroke="${C.grey}" stroke-width="3"/>`;
}

export function spoon(x1, y1, x2, y2, color = C.steel) {
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  return `${line(x1, y1, x2, y2, { color, width: 7 })}<ellipse cx="${x2}" cy="${y2}" rx="16" ry="11" fill="${color}" transform="rotate(${n(angle)} ${x2} ${y2})"/>`;
}

export function chopsticks(x1, y1, x2, y2) {
  return `${line(x1, y1, x2, y2, { color: C.brown, width: 5 })}${line(x1 + 10, y1 - 4, x2 + 4, y2 + 6, { color: C.brown, width: 5 })}`;
}

export function coin(x, y, r = 13) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.yellow}" stroke="#D99A16" stroke-width="3"/>`;
}

export function coinStack(x, y, count = 6) {
  return Array.from(
    { length: count },
    (_, index) =>
      `<ellipse cx="${x}" cy="${y - index * 7}" rx="18" ry="6" fill="${C.yellow}" stroke="#D99A16" stroke-width="2"/>`,
  ).join('\n');
}

export function card(
  x,
  y,
  { w = 54, h = 76, rotate = 0, text = '', color = C.red, fill = C.white } = {},
) {
  return `<g transform="rotate(${rotate} ${x} ${y})"><rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="7" fill="${fill}" stroke="${C.grey}" stroke-width="3"/>${
    text ? label(text, x, y + Math.min(w, h) * 0.22, { size: Math.min(w, h) * 0.55, color }) : ''
  }</g>`;
}

export function box(x, y, { w = 90, h = 70, color = C.orange, ribbon } = {}) {
  return `<rect x="${x - w / 2}" y="${y - h}" width="${w}" height="${h}" rx="6" fill="${color}"/>${
    ribbon
      ? `<rect x="${x - 6}" y="${y - h}" width="12" height="${h}" fill="${ribbon}"/><rect x="${x - w / 2}" y="${y - h / 2 - 6}" width="${w}" height="12" fill="${ribbon}"/><path d="M${x} ${y - h} q-22 -24 -26 -4 q4 10 26 4 q22 -24 26 -4 q-4 10 -26 4" fill="${ribbon}"/>`
      : ''
  }`;
}

export function apple(x, y, r = 20, color = C.red) {
  return `<circle cx="${x - r * 0.35}" cy="${y}" r="${r}" fill="${color}"/><circle cx="${x + r * 0.35}" cy="${y}" r="${r}" fill="${color}"/><path d="M${x} ${y - r} q3 -14 10 -16" stroke="${C.brown}" stroke-width="4" fill="none"/><ellipse cx="${x + 9}" cy="${y - r - 10}" rx="8" ry="4" fill="${C.green}"/>`;
}

export function flag(x, y = GROUND, color = C.yellow) {
  return `<rect x="${x - 3}" y="${y - 150}" width="6" height="150" fill="${C.ink}"/><path d="M${x + 3} ${y - 150} L${x + 63} ${y - 128} L${x + 3} ${y - 106} Z" fill="${color}" stroke="${C.ink}" stroke-width="4"/>`;
}

export function hoop(x, y, r = 50, color = C.orange) {
  return `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.3}" fill="none" stroke="${color}" stroke-width="9"/>`;
}

export function tapeLine(x1, x2, y = 650, color = C.coral) {
  return `<rect x="${x1}" y="${y - 5}" width="${x2 - x1}" height="10" rx="3" fill="${color}" opacity="0.85"/>`;
}

export function paper(x, y, { w = 70, h = 90, rotate = 0, lines = 3, color = C.white } = {}) {
  const rows = Array.from(
    { length: lines },
    (_, index) =>
      `<rect x="${x - w / 2 + 10}" y="${y - h / 2 + 16 + index * 16}" width="${w - 20 - (index % 2) * 14}" height="5" rx="2" fill="${C.grey}"/>`,
  ).join('');
  return `<g transform="rotate(${rotate} ${x} ${y})"><rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="5" fill="${color}" stroke="${C.grey}" stroke-width="3"/>${rows}</g>`;
}

export function phone(x, y, { w = 44, h = 78, rotate = 0 } = {}) {
  return `<g transform="rotate(${rotate} ${x} ${y})"><rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="8" fill="${C.dark}"/><rect x="${x - w / 2 + 5}" y="${y - h / 2 + 8}" width="${w - 10}" height="${h - 20}" rx="3" fill="${C.sky}"/></g>`;
}

export function die(x, y, size = 40, pips = 5) {
  const d = size / 4;
  const spots = {
    1: [[0, 0]],
    2: [
      [-1, -1],
      [1, 1],
    ],
    3: [
      [-1, -1],
      [0, 0],
      [1, 1],
    ],
    4: [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ],
    5: [
      [-1, -1],
      [1, -1],
      [0, 0],
      [-1, 1],
      [1, 1],
    ],
    6: [
      [-1, -1],
      [1, -1],
      [-1, 0],
      [1, 0],
      [-1, 1],
      [1, 1],
    ],
  }[pips];
  return `<rect x="${x - size / 2}" y="${y - size / 2}" width="${size}" height="${size}" rx="${size * 0.18}" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/>${spots
    .map(
      ([dx, dy]) =>
        `<circle cx="${x + dx * d}" cy="${y + dy * d}" r="${size * 0.08}" fill="${C.dark}"/>`,
    )
    .join('')}`;
}

export function star(x, y, r = 16, color = C.yellow) {
  const points = Array.from({ length: 10 }, (_, index) => {
    const radius = index % 2 ? r * 0.45 : r;
    const angle = (Math.PI / 5) * index - Math.PI / 2;
    return `${n(x + Math.cos(angle) * radius)},${n(y + Math.sin(angle) * radius)}`;
  });
  return `<polygon points="${points.join(' ')}" fill="${color}"/>`;
}

export function heart(x, y, size = 30, color = C.pink) {
  const s = size / 30;
  return `<path d="M${x} ${y + 12 * s} C${x - 30 * s} ${y - 8 * s} ${x - 14 * s} ${y - 28 * s} ${x} ${y - 12 * s} C${x + 14 * s} ${y - 28 * s} ${x + 30 * s} ${y - 8 * s} ${x} ${y + 12 * s} Z" fill="${color}"/>`;
}

export function sparkle(x, y, size = 14, color = C.yellow) {
  return `<path d="M${x} ${y - size} L${x + size * 0.25} ${y - size * 0.25} L${x + size} ${y} L${x + size * 0.25} ${y + size * 0.25} L${x} ${y + size} L${x - size * 0.25} ${y + size * 0.25} L${x - size} ${y} L${x - size * 0.25} ${y - size * 0.25} Z" fill="${color}"/>`;
}

export function shotGlass(x, y, color = C.yellow) {
  return `<path d="M${x - 14} ${y - 38} L${x + 14} ${y - 38} L${x + 10} ${y} L${x - 10} ${y} Z" fill="${C.sky}" opacity="0.9"/><path d="M${x - 12} ${y - 26} L${x + 12} ${y - 26} L${x + 10} ${y} L${x - 10} ${y} Z" fill="${color}"/>`;
}

export function glass(x, y, color = C.orange) {
  return `<rect x="${x - 18}" y="${y - 60}" width="36" height="60" rx="5" fill="${C.sky}" opacity="0.8"/><rect x="${x - 15}" y="${y - 40}" width="30" height="37" rx="4" fill="${color}"/>`;
}

export function roll(x, y, { color = C.white, r = 22, h = 50 } = {}) {
  return `<rect x="${x - r}" y="${y - h}" width="${2 * r}" height="${h}" rx="6" fill="${color}" stroke="${C.grey}" stroke-width="3"/><ellipse cx="${x}" cy="${y - h}" rx="${r}" ry="7" fill="${color}" stroke="${C.grey}" stroke-width="3"/><ellipse cx="${x}" cy="${y - h}" rx="${r * 0.35}" ry="3" fill="${C.grey}"/>`;
}

export function cookie(x, y, r = 22) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="#D9A066"/><circle cx="${x - r * 0.35}" cy="${y - r * 0.2}" r="${r * 0.13}" fill="${C.brown}"/><circle cx="${x + r * 0.3}" cy="${y + r * 0.3}" r="${r * 0.13}" fill="${C.brown}"/><circle cx="${x + r * 0.25}" cy="${y - r * 0.35}" r="${r * 0.11}" fill="${C.brown}"/>`;
}

export function marshmallow(x, y, size = 22) {
  return `<rect x="${x - size / 2}" y="${y - size}" width="${size}" height="${size}" rx="${size * 0.3}" fill="${C.white}" stroke="${C.grey}" stroke-width="2"/>`;
}

export function sock(x, y, color = C.pink, rotate = 0) {
  return `<path d="M${x} ${y - 60} L${x + 22} ${y - 60} L${x + 22} ${y - 14} Q${x + 22} ${y} ${x + 6} ${y} L${x - 26} ${y} Q${x - 36} ${y} ${x - 34} ${y - 12} Q${x - 30} ${y - 22} ${x} ${y - 24} Z" fill="${color}" transform="rotate(${rotate} ${x} ${y})"/><rect x="${x}" y="${y - 64}" width="22" height="10" fill="${C.white}" opacity="0.6" transform="rotate(${rotate} ${x} ${y})"/>`;
}

export function brick(x, y, color = C.red, w = 44) {
  const studs = Math.round(w / 22);
  return `<rect x="${x - w / 2}" y="${y - 22}" width="${w}" height="22" rx="3" fill="${color}"/>${Array.from(
    { length: studs },
    (_, index) =>
      `<rect x="${x - w / 2 + 5 + index * 22}" y="${y - 29}" width="12" height="8" rx="2" fill="${color}"/>`,
  ).join('')}`;
}

export function straw(x1, y1, x2, y2, color = C.pink) {
  return line(x1, y1, x2, y2, { color, width: 8 });
}

export function rope(points, { color = C.orange, width = 8 } = {}) {
  const [first, ...rest] = points;
  return `<path d="M${first[0]} ${first[1]} ${rest.map(([px, py]) => `T${px} ${py}`).join(' ')}" stroke="${color}" stroke-width="${width}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

export function chatBubble(
  x,
  y,
  text,
  { w = 150, h = 70, color = C.white, size = 30, ink = C.label } = {},
) {
  return `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="16" fill="${color}" stroke="${C.grey}" stroke-width="3"/><path d="M${x - 14} ${y + h / 2 - 2} l-6 22 l26 -22 Z" fill="${color}"/>${label(text, x, y + size * 0.35, { size, color: ink })}`;
}

export function board(x, y, { w = 260, h = 170, fill = C.white, frame = C.wood } = {}) {
  return `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${frame}" stroke-width="10"/>`;
}

export function hanger(x, y, color = C.steel) {
  return `<path d="M${x} ${y - 30} q0 -14 10 -14 q10 0 8 12 L${x} ${y - 20} L${x - 45} ${y + 10} L${x + 45} ${y + 10} Z" stroke="${color}" stroke-width="5" fill="none" stroke-linejoin="round"/>`;
}

export function bubble(x, y, r = 22) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.sky}" opacity="0.55" stroke="${C.blue}" stroke-width="2"/><ellipse cx="${x - r * 0.35}" cy="${y - r * 0.4}" rx="${r * 0.2}" ry="${r * 0.12}" fill="${C.white}"/>`;
}

export function envelope(x, y, w = 80, color = C.white) {
  const h = w * 0.62;
  return `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="5" fill="${color}" stroke="${C.grey}" stroke-width="3"/><path d="M${x - w / 2} ${y - h / 2} L${x} ${y + 4} L${x + w / 2} ${y - h / 2}" stroke="${C.grey}" stroke-width="3" fill="none"/>`;
}

export function tent(x, y = GROUND - 10, color = C.teal) {
  return `<path d="M${x - 110} ${y} L${x} ${y - 170} L${x + 110} ${y} Z" fill="${color}"/><path d="M${x - 30} ${y} L${x} ${y - 90} L${x + 30} ${y} Z" fill="${C.dark}" opacity="0.6"/>`;
}

export function tree(x, y = GROUND - 30, color = C.green) {
  return `<rect x="${x - 10}" y="${y - 60}" width="20" height="60" fill="${C.brown}"/><circle cx="${x}" cy="${y - 110}" r="62" fill="${color}"/><circle cx="${x - 40}" cy="${y - 80}" r="38" fill="${color}"/><circle cx="${x + 42}" cy="${y - 82}" r="36" fill="${color}"/>`;
}

export function clock(x, y, r = 34) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.white}" stroke="${C.ink}" stroke-width="5"/><path d="M${x} ${y - r * 0.6} L${x} ${y} L${x + r * 0.45} ${y + r * 0.2}" stroke="${C.ink}" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="${x - 7}" y="${y - r - 12}" width="14" height="10" rx="3" fill="${C.ink}"/>`;
}

export function mic(x, y) {
  return `<rect x="${x - 4}" y="${y}" width="8" height="46" rx="3" fill="${C.dark}"/><ellipse cx="${x}" cy="${y - 4}" rx="14" ry="17" fill="${C.steel}"/>`;
}

export function camera(x, y) {
  return `<rect x="${x - 40}" y="${y - 28}" width="80" height="56" rx="10" fill="${C.dark}"/><rect x="${x - 16}" y="${y - 38}" width="32" height="12" rx="3" fill="${C.dark}"/><circle cx="${x}" cy="${y}" r="17" fill="${C.sky}" stroke="${C.steel}" stroke-width="5"/>`;
}

export function pencil(x1, y1, x2, y2, color = C.yellow) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const tx = x2 + Math.cos(angle) * 16;
  const ty = y2 + Math.sin(angle) * 16;
  return `${line(x1, y1, x2, y2, { color, width: 12 })}<path d="M${n(x2 + Math.cos(angle + Math.PI / 2) * 6)} ${n(y2 + Math.sin(angle + Math.PI / 2) * 6)} L${n(tx)} ${n(ty)} L${n(x2 - Math.cos(angle + Math.PI / 2) * 6)} ${n(y2 - Math.sin(angle + Math.PI / 2) * 6)} Z" fill="#E8C49A"/>`;
}

export function marble(x, y, r = 11, color = C.blue) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/><circle cx="${x - r * 0.35}" cy="${y - r * 0.35}" r="${r * 0.3}" fill="${C.white}" opacity="0.7"/>`;
}

export function egg(x, y, size = 26) {
  return `<ellipse cx="${x}" cy="${y}" rx="${size * 0.75}" ry="${size}" fill="${C.white}" stroke="${C.grey}" stroke-width="3"/>`;
}

export function gift(x, y, size = 70, color = C.red, ribbon = C.yellow) {
  return box(x, y, { w: size, h: size * 0.85, color, ribbon });
}

/** Raw SVG, for one-off shapes a scene needs. */
export const raw = (svg) => svg;

export function tissueBox(x, y, w = 90) {
  return `<rect x="${x - w / 2}" y="${y - 44}" width="${w}" height="44" rx="6" fill="${C.sky}"/><ellipse cx="${x}" cy="${y - 44}" rx="${w * 0.25}" ry="6" fill="${C.white}"/><path d="M${x - 10} ${y - 44} q-14 -30 4 -40 q12 10 8 40 Z" fill="${C.white}" stroke="${C.grey}" stroke-width="2"/>`;
}

export function jenga(x, y, rows = 8, color = '#E2B97F') {
  const parts = [];
  for (let row = 0; row < rows; row++) {
    const top = y - (row + 1) * 16;
    if (row % 2)
      parts.push(
        `<rect x="${x - 36}" y="${top}" width="72" height="15" rx="2" fill="${color}" stroke="#B88A55" stroke-width="2"/>`,
      );
    else
      for (let i = 0; i < 3; i++)
        parts.push(
          `<rect x="${x - 36 + i * 24}" y="${top}" width="23" height="15" rx="2" fill="${color}" stroke="#B88A55" stroke-width="2"/>`,
        );
  }
  return parts.join('');
}

export function candy(x, y, color = C.pink, rotate = 0) {
  return `<g transform="rotate(${rotate} ${x} ${y})"><path d="M${x - 30} ${y - 10} L${x - 16} ${y} L${x - 30} ${y + 10} Z M${x + 30} ${y - 10} L${x + 16} ${y} L${x + 30} ${y + 10} Z" fill="${color}"/><ellipse cx="${x}" cy="${y}" rx="18" ry="12" fill="${color}"/></g>`;
}

export function needle(x, y, h = 70) {
  return `<rect x="${x - 2}" y="${y - h}" width="4" height="${h}" rx="2" fill="${C.steel}"/><ellipse cx="${x}" cy="${y - h + 8}" rx="3" ry="6" fill="${C.wall}" stroke="${C.steel}" stroke-width="2"/>`;
}

export function chocolates(
  x,
  y,
  colors = [C.red, C.yellow, C.blue, C.green, C.orange],
  count = 12,
) {
  return Array.from({ length: count }, (_, index) => {
    const angle = index * 2.4;
    const radius = 6 + index * 2.6;
    return `<ellipse cx="${n(x + Math.cos(angle) * radius)}" cy="${n(y - Math.abs(Math.sin(angle)) * radius * 0.35)}" rx="9" ry="7" fill="${colors[index % colors.length]}"/>`;
  }).join('');
}

export function splash(x, y, color = C.blue, size = 1) {
  return `<path d="M${x} ${y} q${-30 * size} ${-60 * size} ${-6 * size} ${-140 * size} q${10 * size} ${50 * size} ${20 * size} 0 q${-4 * size} ${80 * size} ${-14 * size} ${140 * size} Z" fill="${color}" opacity="0.75"/><circle cx="${x - 30 * size}" cy="${y - 120 * size}" r="${8 * size}" fill="${color}" opacity="0.7"/><circle cx="${x + 26 * size}" cy="${y - 100 * size}" r="${6 * size}" fill="${color}" opacity="0.7"/>`;
}

export function puzzle(x, y, size = 40, color = C.orange) {
  const s = size;
  return `<path d="M${x} ${y} h${s * 0.35} a${s * 0.15} ${s * 0.15} 0 1 1 ${s * 0.3} 0 h${s * 0.35} v${s * 0.35} a${s * 0.15} ${s * 0.15} 0 1 0 0 ${s * 0.3} v${s * 0.35} h-${s} Z" fill="${color}"/>`;
}

export function plane(x, y, { rotate = -10, color = C.white, size = 1 } = {}) {
  const s = size;
  return `<g transform="rotate(${rotate} ${x} ${y})"><path d="M${x - 50 * s} ${y} L${x + 50 * s} ${y - 6 * s} L${x - 30 * s} ${y + 22 * s} Z" fill="${color}" stroke="${C.grey}" stroke-width="3" stroke-linejoin="round"/><path d="M${x - 50 * s} ${y} L${x + 50 * s} ${y - 6 * s} L${x - 18 * s} ${y + 6 * s} Z" fill="${C.sky}" opacity="0.6"/></g>`;
}

export function can(x, y, color = C.red, h = 52) {
  return `<rect x="${x - 15}" y="${y - h}" width="30" height="${h}" rx="5" fill="${color}"/><rect x="${x - 15}" y="${y - h}" width="30" height="6" rx="3" fill="${C.steel}"/><rect x="${x - 15}" y="${y - h * 0.55}" width="30" height="${h * 0.2}" fill="${C.white}" opacity="0.5"/>`;
}

export function nut(x, y, size = 16, color = C.steel) {
  const s = size;
  return `<polygon points="${x - s},${y} ${x - s / 2},${y - s * 0.6} ${x + s / 2},${y - s * 0.6} ${x + s},${y} ${x + s / 2},${y + s * 0.6} ${x - s / 2},${y + s * 0.6}" fill="${color}" stroke="#7D8A93" stroke-width="2"/><ellipse cx="${x}" cy="${y}" rx="${s * 0.35}" ry="${s * 0.25}" fill="${C.wall}"/>`;
}

export function target(x, y, r = 90) {
  return `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.3}" fill="none" stroke="${C.coral}" stroke-width="6"/><ellipse cx="${x}" cy="${y}" rx="${r * 0.6}" ry="${r * 0.18}" fill="none" stroke="${C.coral}" stroke-width="6"/><ellipse cx="${x}" cy="${y}" rx="${r * 0.22}" ry="${r * 0.07}" fill="${C.coral}"/>`;
}

export function bucket(x, y, { w = 80, h = 70, color = C.blue } = {}) {
  return `<path d="M${x - w / 2} ${y - h} L${x - w * 0.38} ${y} L${x + w * 0.38} ${y} L${x + w / 2} ${y - h} Z" fill="${color}"/><ellipse cx="${x}" cy="${y - h}" rx="${w / 2}" ry="${w * 0.1}" fill="${C.dark}" opacity="0.25"/><path d="M${x - w / 2} ${y - h} Q${x} ${y - h - w * 0.6} ${x + w / 2} ${y - h}" stroke="${C.steel}" stroke-width="4" fill="none"/>`;
}

export function basket(x, y, { w = 120, h = 80, color = '#D9B48A' } = {}) {
  const slats = Array.from(
    { length: 5 },
    (_, i) =>
      `<rect x="${x - w / 2 + 8}" y="${y - h + 10 + i * 14}" width="${w - 16}" height="4" fill="#B88A55"/>`,
  ).join('');
  return `<path d="M${x - w / 2} ${y - h} L${x - w * 0.42} ${y} L${x + w * 0.42} ${y} L${x + w / 2} ${y - h} Z" fill="${color}"/>${slats}`;
}

export function shoe(x, y, color = C.purple, rotate = 0) {
  return `<g transform="rotate(${rotate} ${x} ${y})"><path d="M${x - 30} ${y} L${x - 30} ${y - 26} L${x - 6} ${y - 26} Q${x + 4} ${y - 10} ${x + 30} ${y - 8} Q${x + 36} ${y} ${x + 30} ${y} Z" fill="${color}"/><rect x="${x - 32}" y="${y - 3}" width="64" height="6" rx="3" fill="${C.white}"/></g>`;
}

export function stickyNote(x, y, color = C.yellow, size = 34, rotate = 0) {
  return `<rect x="${x - size / 2}" y="${y - size / 2}" width="${size}" height="${size}" fill="${color}" transform="rotate(${rotate} ${x} ${y})"/>`;
}

export function racket(x, y, color = C.white) {
  return `<rect x="${x - 4}" y="${y + 26}" width="8" height="44" rx="3" fill="${C.wood}"/><circle cx="${x}" cy="${y}" r="30" fill="${color}" stroke="${C.grey}" stroke-width="4"/>`;
}

export function button(x, y, r = 12, color = C.red) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/><circle cx="${x - r * 0.3}" cy="${y - r * 0.3}" r="${r * 0.14}" fill="${C.wall}"/><circle cx="${x + r * 0.3}" cy="${y - r * 0.3}" r="${r * 0.14}" fill="${C.wall}"/><circle cx="${x - r * 0.3}" cy="${y + r * 0.3}" r="${r * 0.14}" fill="${C.wall}"/><circle cx="${x + r * 0.3}" cy="${y + r * 0.3}" r="${r * 0.14}" fill="${C.wall}"/>`;
}

export function paperclip(x, y, rotate = 0, color = C.steel) {
  return `<path d="M${x - 14} ${y} h24 a6 6 0 0 0 0 -12 h-26 a5 5 0 0 0 0 10 h20" stroke="${color}" stroke-width="3" fill="none" transform="rotate(${rotate} ${x} ${y})"/>`;
}

export function yarn(x, y, r = 30, color = C.pink) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/><path d="M${x - r * 0.8} ${y - r * 0.4} Q${x} ${y - r * 0.9} ${x + r * 0.8} ${y - r * 0.2} M${x - r * 0.9} ${y + r * 0.1} Q${x} ${y - r * 0.4} ${x + r * 0.9} ${y + r * 0.3} M${x - r * 0.6} ${y + r * 0.6} Q${x + r * 0.2} ${y + r * 0.1} ${x + r * 0.7} ${y + r * 0.6}" stroke="${C.white}" stroke-width="3" fill="none" opacity="0.6"/>`;
}

export function wand(x1, y1, x2, y2) {
  return `${line(x1, y1, x2, y2, { color: C.purple, width: 6 })}<circle cx="${x2}" cy="${y2}" r="16" fill="none" stroke="${C.purple}" stroke-width="5"/>`;
}

export function feather(x, y, rotate = -30, color = C.pink) {
  return `<g transform="rotate(${rotate} ${x} ${y})"><path d="M${x} ${y - 40} Q${x + 18} ${y} ${x} ${y + 40} Q${x - 18} ${y} ${x} ${y - 40} Z" fill="${color}"/><path d="M${x} ${y - 40} L${x} ${y + 52}" stroke="${C.white}" stroke-width="3"/></g>`;
}

export function sweetPotato(x, y) {
  return `<ellipse cx="${x}" cy="${y}" rx="42" ry="20" fill="#B5543A" transform="rotate(-8 ${x} ${y})"/><path d="M${x - 40} ${y + 2} l-12 -4" stroke="#B5543A" stroke-width="5" stroke-linecap="round"/>`;
}

/** Someone on all fours, seen from the side, nose to the left. */
export function crawler({
  x,
  ground = GROUND,
  skin = SKIN.light,
  hairColor = HAIR.brown,
  shirt = C.teal,
  flip = false,
} = {}) {
  const d = flip ? -1 : 1;
  return `<g transform="${flip ? `translate(${2 * x} 0) scale(-1 1)` : ''}"><rect x="${x}" y="${ground - 100}" width="130" height="50" rx="24" fill="${shirt}"/><rect x="${x + 110}" y="${ground - 70}" width="18" height="68" rx="8" fill="${C.ink}"/><rect x="${x + 90}" y="${ground - 70}" width="18" height="68" rx="8" fill="${C.ink}"/><rect x="${x + 10}" y="${ground - 70}" width="16" height="66" rx="8" fill="${shirt}"/><circle cx="${x + 18}" cy="${ground - 4}" r="9" fill="${skin}"/><circle cx="${x - 20}" cy="${ground - 100}" r="38" fill="${skin}"/><path d="M${x - 58} ${ground - 108} A38 38 0 0 1 ${x + 18} ${ground - 108} Z" fill="${hairColor}"/><circle cx="${x - 36}" cy="${ground - 96}" r="4" fill="${C.dark}"/><circle cx="${x - 40}" cy="${ground - 82}" r="7" fill="${C.cheek}"/></g>`.replace(
    /^/,
    d ? '' : '',
  );
}

export function frisbee(x, y, color = C.orange, rotate = -10) {
  return `<ellipse cx="${x}" cy="${y}" rx="40" ry="12" fill="${color}" transform="rotate(${rotate} ${x} ${y})"/><ellipse cx="${x}" cy="${y - 3}" rx="26" ry="6" fill="${C.white}" opacity="0.35" transform="rotate(${rotate} ${x} ${y})"/>`;
}

export function sponge(x, y, color = C.yellow) {
  return `<rect x="${x - 30}" y="${y - 20}" width="60" height="40" rx="8" fill="${color}"/><circle cx="${x - 12}" cy="${y - 4}" r="4" fill="#E0B030"/><circle cx="${x + 10}" cy="${y + 6}" r="3" fill="#E0B030"/><circle cx="${x + 14}" cy="${y - 8}" r="3" fill="#E0B030"/>`;
}

export function lightbulb(x, y) {
  return `<circle cx="${x}" cy="${y}" r="30" fill="${C.yellow}"/><rect x="${x - 14}" y="${y + 24}" width="28" height="18" rx="4" fill="${C.steel}"/><path d="M${x - 50} ${y - 30} l-14 -10 M${x + 50} ${y - 30} l14 -10 M${x} ${y - 46} v-16" stroke="${C.yellow}" stroke-width="5" stroke-linecap="round"/>`;
}

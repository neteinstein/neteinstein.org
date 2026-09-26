/**
 * Regenerates the static brand files in `public/` from the committed artwork
 * in `src/assets/`:
 *
 *   public/favicon.ico            16/32/48 px, PNG-in-ICO
 *   public/favicon.png            192 px
 *   public/apple-touch-icon.png   180 px on an opaque background (iOS)
 *   public/og-default.jpg         1200×630 social card
 *
 *   npm run brand
 *
 * Only needed when the avatar, portrait or palette changes; the outputs are
 * committed so builds never depend on this script.
 */
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const AVATAR = 'src/assets/brand/avatar.webp';
const PORTRAIT = 'src/assets/home/portrait.webp';

// Brand palette, as sRGB approximations of the oklch accents in global.css.
const VIOLET = '#7c3aed';
const PINK = '#e8398a';
const AMBER = '#f59e3b';
const INK = '#141026';

/** Avatar on a rounded gradient tile, like the header brand mark. */
async function icon(size, { opaque = false } = {}) {
  const radius = Math.round(size * 0.22);
  const pad = Math.max(1, Math.round(size * 0.06));
  const tile = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${VIOLET}"/>
          <stop offset="0.55" stop-color="${PINK}"/>
          <stop offset="1" stop-color="${AMBER}"/>
        </linearGradient>
      </defs>
      ${opaque ? `<rect width="${size}" height="${size}" fill="${INK}"/>` : ''}
      <rect width="${size}" height="${size}" rx="${radius}" fill="url(#g)"/>
      <rect x="${pad}" y="${pad}" width="${size - pad * 2}" height="${size - pad * 2}"
            rx="${radius - pad}" fill="#ffffff"/>
    </svg>`);
  const inner = size - pad * 2;
  const avatar = await sharp(AVATAR).resize(inner, inner).png().toBuffer();
  return sharp(tile)
    .composite([{ input: avatar, left: pad, top: pad }])
    .png()
    .toBuffer();
}

/** Minimal ICO container holding PNG frames (supported by every current browser). */
function ico(frames) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);
  let offset = 6 + frames.length * 16;
  const entries = frames.map(({ size, png }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += png.length;
    return entry;
  });
  return Buffer.concat([header, ...entries, ...frames.map((frame) => frame.png)]);
}

async function ogCard() {
  const width = 1200;
  const height = 630;
  const background = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs>
        <radialGradient id="a" cx="0.15" cy="0.1" r="0.7">
          <stop offset="0" stop-color="${VIOLET}" stop-opacity="0.85"/>
          <stop offset="1" stop-color="${VIOLET}" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="b" cx="0.95" cy="0.2" r="0.6">
          <stop offset="0" stop-color="${PINK}" stop-opacity="0.75"/>
          <stop offset="1" stop-color="${PINK}" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="c" cx="0.7" cy="1.05" r="0.6">
          <stop offset="0" stop-color="${AMBER}" stop-opacity="0.7"/>
          <stop offset="1" stop-color="${AMBER}" stop-opacity="0"/>
        </radialGradient>
        <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="#ffffff" fill-opacity="0.09"/>
        </pattern>
        <linearGradient id="text" x1="0" x2="1">
          <stop offset="0" stop-color="#c4b5fd"/>
          <stop offset="0.5" stop-color="#f9a8d4"/>
          <stop offset="1" stop-color="#fcd34d"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="${INK}"/>
      <rect width="100%" height="100%" fill="url(#a)"/>
      <rect width="100%" height="100%" fill="url(#b)"/>
      <rect width="100%" height="100%" fill="url(#c)"/>
      <rect width="100%" height="100%" fill="url(#dots)"/>
      <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif" fill="#ffffff">
        <text x="72" y="118" font-size="26" font-weight="700" letter-spacing="5" fill-opacity="0.75">WELCOME TO MY LITTLE VIRTUAL HOME</text>
        <text x="68" y="262" font-size="112" font-weight="800" letter-spacing="-4">Pedro</text>
        <text x="68" y="372" font-size="112" font-weight="800" letter-spacing="-4" fill="url(#text)">Vicente</text>
        <text x="72" y="446" font-size="32" font-weight="500" fill-opacity="0.85">Improver · Tech Engineer · Podcast host</text>
        <text x="72" y="560" font-size="28" font-weight="700" fill-opacity="0.9">@neteinstein · neteinstein.org</text>
      </g>
    </svg>`);

  const portraitHeight = 470;
  const portrait = await sharp(PORTRAIT)
    .resize({ height: portraitHeight })
    .png()
    .toBuffer({ resolveWithObject: true });

  return sharp(background)
    .composite([
      {
        input: portrait.data,
        left: width - portrait.info.width - 20,
        top: height - portraitHeight,
      },
    ])
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
}

const frames = await Promise.all(
  [16, 32, 48].map(async (size) => ({ size, png: await icon(size) })),
);
await writeFile('public/favicon.ico', ico(frames));
await writeFile('public/favicon.png', await icon(192));
await writeFile('public/apple-touch-icon.png', await icon(180, { opaque: true }));
await writeFile('public/og-default.jpg', await ogCard());

console.log('Wrote public/favicon.ico, favicon.png, apple-touch-icon.png, og-default.jpg');

import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';
import satori from 'satori';
import sharp from 'sharp';

/**
 * Renders a 1200×630 social card for every built page whose `og:image` points
 * under `/og/` (BaseLayout's default for every page but home).
 *
 * The card is drawn from the page's own `og:title`, `og:description` and
 * `og:url`, read back from the built HTML — so each page, in each language,
 * gets a card that matches what it says, with nothing to wire up per page.
 * The palette and avatar follow `public/og-default.jpg` (`npm run brand`).
 */

const WIDTH = 1200;
const HEIGHT = 630;
const PAD_X = 72;
const PAD_Y = 64;

const INK = '#141026';
const VIOLET = '#7c3aed';
const PINK = '#e8398a';
const AMBER = '#f59e3b';

/** Satori reads TTF/OTF/WOFF but not WOFF2, hence the static `@fontsource` packages. */
async function loadFonts(root: URL) {
  const require = createRequire(new URL('package.json', root));
  const fonts: { name: string; weight: 400 | 600 | 800; file: [string, string] }[] = [
    {
      name: 'Bricolage',
      weight: 800,
      file: ['@fontsource/bricolage-grotesque', 'bricolage-grotesque-latin-800-normal.woff'],
    },
    {
      name: 'Bricolage',
      weight: 800,
      file: ['@fontsource/bricolage-grotesque', 'bricolage-grotesque-latin-ext-800-normal.woff'],
    },
    { name: 'Inter', weight: 400, file: ['@fontsource/inter', 'inter-latin-400-normal.woff'] },
    { name: 'Inter', weight: 400, file: ['@fontsource/inter', 'inter-latin-ext-400-normal.woff'] },
    { name: 'Inter', weight: 600, file: ['@fontsource/inter', 'inter-latin-600-normal.woff'] },
    { name: 'Inter', weight: 600, file: ['@fontsource/inter', 'inter-latin-ext-600-normal.woff'] },
  ];
  return Promise.all(
    fonts.map(async ({ name, weight, file }) => ({
      name,
      weight,
      style: 'normal' as const,
      data: await readFile(require.resolve(`${file[0]}/files/${file[1]}`)),
    })),
  );
}

interface Card {
  title: string;
  description: string;
  /** The page's public URL, shown without the scheme. */
  url: string;
}

/** A plain object tree in the shape Satori accepts in place of JSX. */
type Node = { type: string; props: Record<string, unknown> };

function h(type: string, style: Record<string, unknown>, children?: unknown, extra = {}): Node {
  return { type, props: { style, children, ...extra } };
}

function cardTree({ title, description, url }: Card, avatar: string): Node {
  const titleSize = title.length <= 22 ? 92 : title.length <= 40 ? 72 : 58;
  return h(
    'div',
    {
      // Satori sizes boxes as content-box, so the padding comes off the size or
      // the card overflows the canvas and loses its footer.
      width: WIDTH - 2 * PAD_X,
      height: HEIGHT - 2 * PAD_Y,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: `${PAD_Y}px ${PAD_X}px`,
      color: '#ffffff',
      fontFamily: 'Inter',
      backgroundColor: INK,
      backgroundImage: [
        `radial-gradient(circle at 12% 8%, ${VIOLET}d9 0%, ${VIOLET}00 55%)`,
        `radial-gradient(circle at 96% 18%, ${PINK}bf 0%, ${PINK}00 45%)`,
        `radial-gradient(circle at 70% 105%, ${AMBER}b3 0%, ${AMBER}00 45%)`,
      ].join(', '),
    },
    [
      h('div', { display: 'flex', alignItems: 'center', gap: 20 }, [
        h('img', { width: 72, height: 72, borderRadius: 18 }, undefined, {
          src: avatar,
          width: 72,
          height: 72,
        }),
        h('div', { display: 'flex', flexDirection: 'column' }, [
          h('div', { fontSize: 30, fontWeight: 600 }, 'Pedro Vicente'),
          h('div', { fontSize: 24, opacity: 0.7 }, '@neteinstein'),
        ]),
      ]),
      h('div', { display: 'flex', flexDirection: 'column', gap: 24 }, [
        h(
          'div',
          {
            fontFamily: 'Bricolage',
            fontWeight: 800,
            fontSize: titleSize,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
          },
          title,
        ),
        description
          ? h(
              'div',
              {
                display: 'block',
                fontSize: 30,
                lineHeight: 1.35,
                opacity: 0.85,
                maxWidth: 1000,
                // lineClamp alone still reserves the unclamped height and pushes
                // the footer off the card.
                maxHeight: 3 * 30 * 1.35,
                overflow: 'hidden',
                lineClamp: 3,
              },
              description,
            )
          : null,
      ]),
      h('div', { display: 'flex', alignItems: 'center', gap: 20 }, [
        h('div', {
          width: 56,
          height: 6,
          borderRadius: 3,
          backgroundImage: `linear-gradient(90deg, ${VIOLET}, ${PINK}, ${AMBER})`,
        }),
        h('div', { fontSize: 26, fontWeight: 600, opacity: 0.9 }, url),
      ]),
    ],
  );
}

const ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
};

function decode(text: string): string {
  return text.replace(/&(#x[\da-f]+|#\d+|\w+);/gi, (entity, code: string) => {
    if (code[0] === '#') {
      const point = code[1]?.toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : +code.slice(1);
      return String.fromCodePoint(point);
    }
    return ENTITIES[code.toLowerCase()] ?? entity;
  });
}

function meta(html: string, property: string): string | undefined {
  const tag = html.match(new RegExp(`<meta[^>]+property="${property}"[^>]*>`))?.[0];
  const content = tag?.match(/content="([^"]*)"/)?.[1];
  return content === undefined ? undefined : decode(content);
}

/** The fonts carry no emoji, and a missing glyph would render as a box. */
function plain(text: string): string {
  return text
    .replace(/\p{Extended_Pictographic}|\p{Emoji_Modifier}|\u{FE0F}|\u{200D}/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function htmlFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
    .map((entry) => path.join(entry.parentPath, entry.name));
}

export default function ogCards({ site, siteTitle }: { site: string; siteTitle: string }) {
  const host = new URL(site).host;
  const suffix = ` | ${siteTitle}`;
  let root = new URL(`file://${process.cwd()}/`);

  const integration: AstroIntegration = {
    name: 'og-cards',
    hooks: {
      'astro:config:done': ({ config }) => {
        root = config.root;
      },
      'astro:build:done': async ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const cards = new Map<string, Card>();

        for (const file of await htmlFiles(out)) {
          const html = await readFile(file, 'utf8');
          const image = meta(html, 'og:image');
          if (!image) continue;
          const imageUrl = new URL(image);
          if (imageUrl.host !== host || !imageUrl.pathname.startsWith('/og/')) continue;
          if (cards.has(imageUrl.pathname)) continue;

          const title = meta(html, 'og:title') ?? siteTitle;
          const pageUrl = new URL(meta(html, 'og:url') ?? site);
          cards.set(imageUrl.pathname, {
            title: plain(title.endsWith(suffix) ? title.slice(0, -suffix.length) : title),
            description: plain(meta(html, 'og:description') ?? ''),
            url: `${pageUrl.host.replace(/^www\./, '')}${pageUrl.pathname === '/' ? '' : pageUrl.pathname}`,
          });
        }

        if (cards.size === 0) return;
        const fonts = await loadFonts(root);
        const avatarPng = await sharp(fileURLToPath(new URL('src/assets/brand/avatar.webp', root)))
          .resize(144, 144)
          .png()
          .toBuffer();
        const avatar = `data:image/png;base64,${avatarPng.toString('base64')}`;

        for (const [pathname, card] of cards) {
          const svg = await satori(cardTree(card, avatar) as Parameters<typeof satori>[0], {
            width: WIDTH,
            height: HEIGHT,
            fonts,
          });
          const file = path.join(out, pathname);
          await mkdir(path.dirname(file), { recursive: true });
          await writeFile(
            file,
            await sharp(Buffer.from(svg)).jpeg({ quality: 86, mozjpeg: true }).toBuffer(),
          );
        }
        logger.info(`${cards.size} social cards written to og/`);
      },
    },
  };
  return integration;
}

/**
 * Copies an image from the crawl snapshot into `src/assets/`, right-sized for
 * the web. Google Sites served multi-megabyte PNG screenshots; committing those
 * as-is would bloat the repo for no visual gain, since Astro re-encodes them at
 * build time anyway.
 *
 *   node scripts/import-image.mjs <crawl-file> <dest-without-extension> [maxWidth]
 *
 *   node scripts/import-image.mjs 281c52b535c736c8.png src/assets/home/portrait
 *     → src/assets/home/portrait.webp
 *
 * Stills become WebP (alpha preserved), animated GIFs become animated WebP and
 * SVGs are copied untouched. The default max width (1600px) covers a full-bleed
 * hero at 2x on a typical content column; pass a smaller one for logos/icons.
 */
import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const [source, destination, maxWidthArg] = process.argv.slice(2);

if (!source || !destination) {
  console.error('usage: node scripts/import-image.mjs <crawl-file> <dest-without-ext> [maxWidth]');
  process.exit(1);
}

const input = path.isAbsolute(source)
  ? source
  : path.resolve('.crawl/assets', path.basename(source));
const maxWidth = Number(maxWidthArg ?? 1600);
await mkdir(path.dirname(path.resolve(destination)), { recursive: true });

if (input.endsWith('.svg')) {
  const out = `${destination}.svg`;
  await copyFile(input, out);
  console.log(`→ ${out}`);
  process.exit(0);
}

const animated = input.endsWith('.gif');
const image = sharp(input, { animated });
const { width = maxWidth, pages = 1 } = await image.metadata();

const out = `${destination}.webp`;
const info = await image
  .resize({ width: Math.min(width, maxWidth), withoutEnlargement: true })
  .webp({ quality: 82, effort: 5, loop: 0 })
  .toFile(out);

console.log(`→ ${out} (${info.width}×${info.height / pages}, ${(info.size / 1024).toFixed(0)} KB)`);

/**
 * Renders the /games illustrations drawn in code (`scenes.mjs`) to
 * `src/assets/games/<id>.webp`, at the 1024×740 size the guide's drawings share.
 *
 *   node scripts/game-art/render.mjs            # every scene
 *   node scripts/game-art/render.mjs a-game ... # just these
 *   node scripts/game-art/render.mjs --out dir  # somewhere else (for previews)
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';
import { scenes } from './scenes.mjs';

const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
const out = outIndex >= 0 ? args.splice(outIndex, 2)[1] : 'src/assets/games';
const ids = args.length ? args : Object.keys(scenes);

await mkdir(out, { recursive: true });
for (const id of ids) {
  const draw = scenes[id];
  if (!draw) throw new Error(`No scene for "${id}"`);
  const svg = draw();
  const image = await sharp(Buffer.from(svg)).webp({ quality: 88, effort: 6 }).toBuffer();
  await writeFile(join(out, `${id}.webp`), image);
}
console.log(`Drew ${ids.length} illustration(s) into ${out}`);

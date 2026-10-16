/**
 * Renders the illustrations drawn in code to `<set's folder>/<id>.webp`, at
 * the 1024×740 size the guides' drawings share: the /games ones (`scenes.mjs`,
 * into `src/assets/games/`) or, with `--set icebreakers`, the
 * /teams/icebreakers ones (`icebreakers.mjs`, into `src/assets/teams/icebreakers/`).
 *
 *   node scripts/game-art/render.mjs                    # every games scene
 *   node scripts/game-art/render.mjs a-game ...         # just these
 *   node scripts/game-art/render.mjs --set icebreakers  # the icebreakers
 *   node scripts/game-art/render.mjs --out dir          # somewhere else (for previews)
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';
import { scenes as games } from './scenes.mjs';
import { scenes as icebreakers } from './icebreakers.mjs';

const SETS = {
  games: { scenes: games, out: 'src/assets/games' },
  icebreakers: { scenes: icebreakers, out: 'src/assets/teams/icebreakers' },
};

const args = process.argv.slice(2);
const setIndex = args.indexOf('--set');
const set = SETS[setIndex >= 0 ? args.splice(setIndex, 2)[1] : 'games'];
if (!set) throw new Error(`Unknown set; pick one of ${Object.keys(SETS).join(', ')}`);
const { scenes } = set;
const outIndex = args.indexOf('--out');
const out = outIndex >= 0 ? args.splice(outIndex, 2)[1] : set.out;
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

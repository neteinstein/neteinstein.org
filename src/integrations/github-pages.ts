import { copyFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';

/**
 * Build-output fixes for GitHub Pages' static file server.
 *
 * With `build.format: 'file'`, `/tools` builds to `tools.html` while its
 * children build into a `tools/` directory. GitHub Pages resolves `/x` to
 * `x.html` when that is the only candidate, but its behaviour when a same-named
 * directory *without* an index exists is undocumented — it may redirect to
 * `/x/` and 404. Writing a twin `x/index.html` makes both `/x` and `/x/`
 * resolve, whichever way the server decides. The page's canonical link still
 * points at `/x`.
 */
export default function githubPages(): AstroIntegration {
  return {
    name: 'github-pages',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const twins = await addDirectoryIndexes(root);
        for (const twin of twins) logger.info(`directory index: ${path.relative(root, twin)}`);
      },
    },
  };
}

async function addDirectoryIndexes(dir: string): Promise<string[]> {
  const written: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });
  const names = new Set(entries.map((entry) => entry.name));

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const child = path.join(dir, entry.name);
    const sibling = path.join(dir, `${entry.name}.html`);
    const index = path.join(child, 'index.html');
    if (names.has(`${entry.name}.html`) && !(await exists(index))) {
      await copyFile(sibling, index);
      written.push(index);
    }
    written.push(...(await addDirectoryIndexes(child)));
  }
  return written;
}

async function exists(file: string): Promise<boolean> {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

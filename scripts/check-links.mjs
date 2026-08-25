/**
 * Verifies that every internal link in the built site resolves to a real file
 * in `dist/`.
 *
 * External URLs are deliberately not fetched: a third-party outage should never
 * turn a pull request red. Run against `dist/` after `astro build`.
 */
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

/** Every href/src value that points inside this site. */
const ATTR_PATTERN = /(?:href|src)="([^"]+)"/g;

async function htmlFiles(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith('.html')) found.push(full);
  }
  return found;
}

/**
 * Maps a site-absolute URL path to the file that serves it, mirroring Astro's
 * `build.format: 'file'` output and the Worker's `auto-trailing-slash`
 * handling: `/me` is served by `dist/me.html`, `/` by `dist/index.html`.
 */
function candidatesFor(urlPath) {
  const clean = urlPath.replace(/\/+$/, '');
  if (clean === '') return [path.join(DIST, 'index.html')];
  const base = path.join(DIST, clean);
  return [base, `${base}.html`, path.join(base, 'index.html')];
}

const pages = await htmlFiles(DIST);

// A stale or half-written dist/ would otherwise sail through with nothing to
// check — that is a failed build, not a clean link report.
if (pages.length === 0) {
  console.error('No HTML files found in dist/ — the build did not produce output.');
  process.exit(1);
}

const failures = [];
let checked = 0;

for (const page of pages) {
  const html = await readFile(page, 'utf8');
  const seen = new Set();

  for (const [, raw] of html.matchAll(ATTR_PATTERN)) {
    // Skip external, protocol-relative, and non-navigational schemes.
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(raw)) continue;
    if (raw.startsWith('#')) continue;

    const withoutHash = raw.split('#')[0].split('?')[0];
    if (!withoutHash) continue;

    // Relative links would need resolving against the page; the site emits
    // only site-absolute ones, so flag anything else rather than guessing.
    if (!withoutHash.startsWith('/')) {
      failures.push(`${rel(page)} → ${raw} (relative link — expected site-absolute)`);
      continue;
    }

    if (seen.has(withoutHash)) continue;
    seen.add(withoutHash);
    checked += 1;

    if (!candidatesFor(withoutHash).some((candidate) => existsSync(candidate))) {
      failures.push(`${rel(page)} → ${withoutHash} (no matching file in dist/)`);
    }
  }
}

function rel(file) {
  return path.relative(DIST, file);
}

console.log(`Checked ${checked} internal links across ${pages.length} pages.`);

if (failures.length > 0) {
  console.error(`\n${failures.length} broken link(s):`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log('All internal links resolve.');

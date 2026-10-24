import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { describe, expect, it } from 'vitest';
import type { Catalog } from '../../src/i18n';

/**
 * Translation drift check (`npm run check:i18n`).
 *
 * The Portuguese catalogue is keyed by the English source text, and a key with
 * no match silently falls back to English — so when English copy changes
 * without its catalogue entry, nothing fails, the PT page just quietly loses
 * its translation. This test makes that failure visible: every catalogue key
 * must still appear somewhere in the source it translates.
 */

const ROOT = join(import.meta.dirname, '../..');
const SRC = join(ROOT, 'src');

/** Where English copy lives. The PT catalogue and PT prose are the translations themselves. */
const EXCLUDED = [join(SRC, 'i18n/pt'), join(SRC, 'content/pages/pt')];
const EXTENSIONS = ['.ts', '.tsx', '.astro', '.mdx'];

function sourceFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (EXCLUDED.includes(path)) return [];
    if (entry.isDirectory()) return sourceFiles(path);
    return EXTENSIONS.some((extension) => entry.name.endsWith(extension)) ? [path] : [];
  });
}

/**
 * A file's text with quote escapes undone and concatenated literals joined, so
 * a catalogue key matches the source string however it was written ("you'll"
 * vs 'you\'ll', one literal vs `'… ' +\n  '…'`).
 */
function readable(path: string): string {
  return readFileSync(path, 'utf8')
    .replace(/\\(['"`])/g, '$1')
    .replace(/['"`]\s*\+\s*['"`]/g, '');
}

const corpus = sourceFiles(SRC).map(readable).join('\n');

/**
 * Strings assembled at runtime, which the corpus scan cannot see. Each regex
 * matches the keys one template produces and names where it is built.
 */
const ASSEMBLED: RegExp[] = [
  // `${app} on ${label}` — store links' aria labels (`store()` in `src/data/tech.ts`).
  /^.+ on (Android( App)?|iOS)$/,
];

/** One catalogue module per area, as `src/i18n/pt/index.ts` merges them. */
const modules = Object.entries(
  import.meta.glob<Record<string, Catalog>>('../../src/i18n/pt/*.ts', { eager: true }),
).filter(([path]) => !path.endsWith('/index.ts'));

describe('the Portuguese catalogue', () => {
  it('found its modules and the English sources', () => {
    expect(modules.length).toBeGreaterThan(10);
    expect(corpus.length).toBeGreaterThan(10_000);
  });

  it.each(modules.map(([path, module]) => [relative(ROOT, path), module]))(
    'has no orphaned keys in %s',
    (_path, module) => {
      const catalog = Object.values(module).find((value) => typeof value === 'object');
      const orphans = Object.keys(catalog ?? {}).filter(
        (key) => !corpus.includes(key) && !ASSEMBLED.some((pattern) => pattern.test(key)),
      );
      // An orphan is a key whose English source text no longer exists: the
      // translation silently stopped applying. Update the key to the new
      // English text (or delete the entry if the copy is gone).
      expect(orphans).toEqual([]);
    },
  );

  it('translates each English string the same way everywhere', () => {
    const translations = new Map<string, { module: string; value: string }>();
    const conflicts: string[] = [];
    for (const [path, module] of modules) {
      const catalog = Object.values(module).find((value) => typeof value === 'object') ?? {};
      for (const [key, value] of Object.entries(catalog)) {
        const first = translations.get(key);
        if (first && first.value !== value) {
          conflicts.push(
            `"${key}" is "${first.value}" in ${relative(ROOT, first.module)} but "${value}" in ${relative(ROOT, path)}`,
          );
        } else if (!first) {
          translations.set(key, { module: path, value });
        }
      }
    }
    // The merged catalogue keeps only one entry per key, so two modules
    // translating the same English text differently means one of them is
    // silently ignored everywhere.
    expect(conflicts).toEqual([]);
  });
});

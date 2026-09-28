/**
 * Compares built pages in `dist/` against the Google Sites snapshot in
 * `.crawl/report.json`, and reports original text, links and embeds that the
 * port lost. Run after `npm run build`:
 *
 *   npm run check:parity                      # every crawled page
 *   npm run check:parity -- /tesla /my-apps   # just these
 *
 * Text is compared with all whitespace and punctuation-style differences
 * normalised away, so layout changes (a paragraph split into a title and a
 * caption) still match; blocks that only partly match are reported
 * separately from ones that are missing outright. The shared footer section
 * ("Drop a 👋 …") is skipped — `Footer.astro` renders it on every page.
 *
 * A development aid, not a CI gate: some differences are deliberate.
 */
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { parseHTML } from 'linkedom';

const DIST = path.resolve(process.env.DIST ?? 'dist');
const report = JSON.parse(await readFile('.crawl/report.json', 'utf8'));

const wanted = process.argv.slice(2);
const pages = report.pages.filter(
  (page) =>
    !page.error && page.path !== '/home' && (wanted.length === 0 || wanted.includes(page.path)),
);

/** Lower-case, unify quotes/dashes/ellipses, drop whitespace and variation selectors. */
function squash(text) {
  return text
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\u2018\u2019\u201B\u2032`\u00B4]/g, "'")
    .replace(/[\u201C\u201D\u201E\u2033]/g, '"')
    .replace(/[\u2013\u2014\u2212]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/[\uFE0E\uFE0F\u200B-\u200D\u2060]/g, '')
    .replace(/\s+/g, '');
}

function words(text) {
  return text
    .normalize('NFKC')
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((word) => word.length > 2);
}

/** Canonical form for comparing hrefs: no scheme, no `www.`, no trailing slash. */
function normalizeHref(href) {
  try {
    const url = new URL(href, 'https://www.neteinstein.org');
    let host = url.hostname.replace(/^www\./, '');
    if (host === 'neteinstein.org') host = '';
    const pathname = url.pathname.replace(/\/+$/, '');
    return `${host}${pathname}${url.search}`.toLowerCase();
  } catch {
    return href.toLowerCase();
  }
}

function distFile(urlPath) {
  return urlPath === '/'
    ? path.join(DIST, 'index.html')
    : path.join(DIST, `${urlPath.replace(/^\//, '')}.html`);
}

/** Pulls identifying tokens out of an embed URL/markup: video ids, doc ids, slide keys. */
function embedTokens(source) {
  const tokens = [];
  for (const match of source.matchAll(
    /(?:youtube(?:-nocookie)?\.com\/embed\/|youtu\.be\/|[?&]v=)([\w-]{11})/g,
  ))
    tokens.push(match[1]);
  for (const match of source.matchAll(/vimeo\.com\/(?:video\/)?(\d+)/g)) tokens.push(match[1]);
  for (const match of source.matchAll(/embed_code\/key\/(\w+)/g)) tokens.push(match[1]);
  for (const match of source.matchAll(/prezi\.com\/(?:embed\/|p\/)?([\w-]{8,})/g))
    tokens.push(match[1]);
  for (const match of source.matchAll(/\/(?:document|forms|file)\/d\/(?:e\/)?([\w-]{20,})/g))
    tokens.push(match[1]);
  // The Buy Me a Coffee widget is replaced by a plain link to the same page.
  if (source.includes('BMC-Widget')) tokens.push('buymeacoffee.com/neteinstein');
  return [...new Set(tokens)];
}

let problems = 0;

for (const page of pages) {
  const file = distFile(page.path);
  if (!existsSync(file)) {
    console.log(`\n✗ ${page.path} — not built (${path.relative('.', file)} missing)`);
    problems += 1;
    continue;
  }

  const html = await readFile(file, 'utf8');
  const { document } = parseHTML(html);
  // Drop the site chrome (not section <header>s) and anything that is not visible copy.
  for (const node of document.querySelectorAll(
    'script, style, template, body > header, body > footer',
  ))
    node.remove();
  const main = document.querySelector('main') ?? document.body;
  const pageText = squash(main.textContent);
  const pageWords = new Set(words(main.textContent));
  const hrefs = new Set(
    [...main.querySelectorAll('[href], [data-embed-src], iframe[src]')].map((node) =>
      normalizeHref(
        node.getAttribute('href') ??
          node.getAttribute('data-embed-src') ??
          node.getAttribute('src'),
      ),
    ),
  );

  const sections = page.sections.filter((section) => !section.text.startsWith('Drop a 👋'));
  const blocks = [
    ...new Set(
      sections.flatMap((section) => [...section.blocks, ...section.headings.map((h) => h.text)]),
    ),
  ].filter((block) => squash(block).length > 1);

  const missing = [];
  const partial = [];
  for (const block of blocks) {
    if (pageText.includes(squash(block))) continue;
    const blockWords = words(block);
    const found = blockWords.filter((word) => pageWords.has(word)).length;
    const ratio = blockWords.length === 0 ? 0 : found / blockWords.length;
    (ratio >= 0.85 ? partial : missing).push(block);
  }

  const links = [
    ...new Set(
      sections
        .flatMap((section) => section.links.map((link) => link.href))
        .filter((href) => href && !href.startsWith('#') && !href.startsWith('mailto:')),
    ),
  ];
  const missingLinks = links.filter((href) => !hrefs.has(normalizeHref(href)));

  const embeds = sections.flatMap((section) => [...section.embeds, ...section.codeEmbeds]);
  const missingEmbeds = embeds
    .flatMap((source) => embedTokens(source).map((token) => ({ token, source })))
    .filter(({ token }) => !html.includes(token));

  const images = new Set(
    sections.flatMap((section) =>
      section.images.filter((image) => image.file).map((image) => image.file),
    ),
  ).size;
  const builtImages = main.querySelectorAll('img').length;

  const clean = missing.length + missingLinks.length + missingEmbeds.length === 0;
  problems += missing.length + missingLinks.length + missingEmbeds.length;

  console.log(
    `\n${clean ? '✓' : '✗'} ${page.path} — text ${blocks.length - missing.length - partial.length}/${blocks.length} exact` +
      `, ${partial.length} partial, ${missing.length} missing · links ${links.length - missingLinks.length}/${links.length}` +
      ` · embeds ${embeds.length - missingEmbeds.length}/${embeds.length} · images ${builtImages} built / ${images} original`,
  );
  for (const block of missing) console.log(`    missing text: ${block.slice(0, 160)}`);
  for (const block of partial) console.log(`    partial text: ${block.slice(0, 160)}`);
  for (const href of missingLinks) console.log(`    missing link: ${href}`);
  for (const { token, source } of missingEmbeds)
    console.log(`    missing embed: ${token} (${source.replace(/\s+/g, ' ').slice(0, 100)})`);
}

console.log(problems === 0 ? '\nNo parity gaps.' : `\n${problems} parity gap(s).`);
process.exitCode = problems === 0 ? 0 : 1;

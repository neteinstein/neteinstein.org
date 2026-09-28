/**
 * Snapshots the live Google Sites original so its content can be ported into
 * `src/content/` and `src/data/`.
 *
 * Run once, from a session whose egress policy allows the site:
 *
 *   npm run crawl
 *
 * Writes:
 *   .crawl/raw/<slug>.html   full HTML per page                  (gitignored — bulky)
 *   .crawl/assets/<hash>.ext every referenced image, deduplicated (gitignored — bulky)
 *   .crawl/report.json       extracted content                   (committed)
 *
 * `report.json` is the reference used to verify content parity after the port.
 * Each image entry carries the `file` it was saved as, so porting a page is a
 * matter of copying the named files into `src/assets/`.
 */
import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parseHTML } from 'linkedom';

const ORIGIN = process.env.CRAWL_ORIGIN ?? 'https://www.neteinstein.org';
const OUT = path.resolve('.crawl');
const MAX_PAGES = 200;

await mkdir(path.join(OUT, 'raw'), { recursive: true });
await mkdir(path.join(OUT, 'assets'), { recursive: true });

/** Google Sites serves page images from these hosts. */
const ASSET_HOSTS = /(?:googleusercontent\.com|gstatic\.com)$/;

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'neteinstein.org-migration/1.0' },
    redirect: 'follow',
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
}

async function seedUrls() {
  // Prefer the sitemap; fall back to crawling outward from the home page.
  try {
    const xml = await fetchText(`${ORIGIN}/sitemap.xml`);
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => loc.trim());
    if (locs.length > 0) {
      console.log(`sitemap.xml listed ${locs.length} URLs`);
      return locs;
    }
  } catch (error) {
    console.warn(`sitemap.xml unavailable (${error.message}) — crawling from /`);
  }
  return [`${ORIGIN}/`];
}

/** Google Sites rewrites some outbound links as `google.com/url?q=<target>` trackers. */
function unwrapRedirect(href) {
  try {
    const url = new URL(href);
    if (url.hostname === 'www.google.com' && url.pathname === '/url' && url.searchParams.has('q')) {
      return url.searchParams.get('q');
    }
  } catch {
    /* relative or malformed — leave as-is */
  }
  return href;
}

/** Pulls headings, text, links, images (incl. CSS backgrounds) and embeds out of one section. */
function extract(root, baseUrl) {
  const text = (node) => node.textContent.replace(/\s+/g, ' ').trim();

  const headings = [...root.querySelectorAll('h1, h2, h3, h4, h5, h6')]
    .map((node) => ({ level: Number(node.tagName.slice(1)), text: text(node) }))
    .filter((heading) => heading.text.length > 0);

  const blocks = [...root.querySelectorAll('p, li, blockquote')]
    .map(text)
    .filter((value) => value.length > 0);

  const links = [...root.querySelectorAll('a[href]')]
    .map((node) => ({ text: text(node), href: unwrapRedirect(node.getAttribute('href')) }))
    .filter((link) => link.href && !link.href.startsWith('#'));

  const images = [
    ...[...root.querySelectorAll('img[src]')].map((node) => ({
      src: node.getAttribute('src'),
      alt: node.getAttribute('alt') ?? '',
    })),
    ...[...root.querySelectorAll('[style*="background-image"]')].flatMap((node) =>
      [...(node.getAttribute('style') ?? '').matchAll(/url\(["']?([^"')]+)["']?\)/g)].map(
        ([, src]) => ({ src, alt: '', background: true }),
      ),
    ),
  ];

  const embeds = [...root.querySelectorAll('iframe, [data-url], [data-embed-open-url]')]
    .map((node) => {
      const src =
        node.getAttribute('src') ??
        node.getAttribute('data-src') ??
        node.getAttribute('data-url') ??
        node.getAttribute('data-embed-open-url');
      try {
        return src ? new URL(src, baseUrl).href : null;
      } catch {
        return null;
      }
    })
    // Custom-HTML embeds render through a generic sandbox frame; their real
    // markup is in `data-code` and captured below instead.
    .filter((src) => src && !src.includes('atari-embeds.googleusercontent.com'));

  const codeEmbeds = [...root.querySelectorAll('[data-code]')].map((node) =>
    node.getAttribute('data-code').trim(),
  );

  return { text: text(root), headings, blocks, links, images, embeds, codeEmbeds };
}

function slugFor(urlPath) {
  const clean = urlPath.replace(/^\/+|\/+$/g, '');
  return clean === '' ? 'index' : clean.replace(/\//g, '_');
}

/**
 * Google Sites image URLs are short-lived signed tokens that differ on every
 * page load, so each page's images are downloaded straight after the page is
 * fetched, and deduplicated by content hash rather than by URL.
 */
async function downloadAsset(src, baseUrl) {
  let href;
  try {
    href = new URL(src, baseUrl).href;
  } catch {
    return { error: 'malformed src' };
  }
  if (!ASSET_HOSTS.test(new URL(href).hostname)) return { error: 'external host' };

  try {
    const response = await fetch(href);
    if (!response.ok) throw new Error(`${response.status}`);
    const type = (response.headers.get('content-type') ?? 'image/jpeg').split(';')[0];
    const buffer = Buffer.from(await response.arrayBuffer());
    const hash = createHash('sha256').update(buffer).digest('hex').slice(0, 16);
    const extension = { 'image/jpeg': 'jpg', 'image/svg+xml': 'svg' }[type] ?? type.split('/')[1];
    const file = `${hash}.${extension}`;
    if (!assets.has(file)) {
      await writeFile(path.join(OUT, 'assets', file), buffer);
      assets.set(file, { file, type, bytes: buffer.length, pages: [] });
    }
    return { file };
  } catch (error) {
    return { error: error.message };
  }
}

/** Downloads a page's images a few at a time, before their signed URLs expire. */
async function downloadAll(images, baseUrl, concurrency = 8) {
  let next = 0;
  const worker = async () => {
    while (next < images.length) {
      const image = images[next++];
      Object.assign(image, await downloadAsset(image.src, baseUrl));
    }
  };
  await Promise.all(Array.from({ length: concurrency }, worker));
}

const queue = await seedUrls();
const visited = new Set();
/** @type {Map<string, { file: string, type: string, bytes: number, pages: string[] }>} */
const assets = new Map();
const pages = [];

while (queue.length > 0 && pages.length < MAX_PAGES) {
  const current = queue.shift();
  const url = new URL(current, ORIGIN);
  if (url.origin !== new URL(ORIGIN).origin) continue;

  const key = url.pathname.replace(/\/+$/, '') || '/';
  if (visited.has(key)) continue;
  visited.add(key);

  let html;
  try {
    html = await fetchText(url.href);
  } catch (error) {
    console.error(`✗ ${key} — ${error.message}`);
    pages.push({ path: key, error: error.message });
    continue;
  }

  await writeFile(path.join(OUT, 'raw', `${slugFor(key)}.html`), html, 'utf8');
  const { document } = parseHTML(html);

  // Google Sites renders each content block as a top-level <section>; the
  // role="main" wrapper only holds the page banner. The nav lives outside both,
  // so links to crawl are collected from the whole document.
  const sections = [...document.querySelectorAll('section')].map((section) =>
    extract(section, url),
  );

  const pageImages = sections.flatMap((section) => section.images);
  await downloadAll(pageImages, url);

  // Image-heavy pages outlive their tokens before every download finishes.
  // Re-fetch the page for fresh URLs and retry the failures by position — the
  // section structure is deterministic between loads.
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const failed = pageImages.flatMap((image, index) => (image.error === '403' ? [index] : []));
    if (failed.length === 0) break;
    console.log(`  ↻ ${key} — retrying ${failed.length} expired image URLs (attempt ${attempt})`);
    const { document: fresh } = parseHTML(await fetchText(url.href));
    const freshImages = [...fresh.querySelectorAll('section')].flatMap(
      (section) => extract(section, url).images,
    );
    if (freshImages.length !== pageImages.length) break;
    const retry = failed.map((index) => {
      delete pageImages[index].error;
      pageImages[index].src = freshImages[index].src;
      return pageImages[index];
    });
    await downloadAll(retry, url);
  }

  for (const image of pageImages) {
    if (image.file) {
      const entry = assets.get(image.file);
      if (!entry.pages.includes(key)) entry.pages.push(key);
    }
    // The signed URL is useless once it expires; keep the report readable.
    image.src = image.src.slice(0, 120);
  }

  for (const node of document.querySelectorAll('a[href]')) {
    try {
      const next = new URL(node.getAttribute('href'), url);
      if (next.origin === url.origin && !next.hash) queue.push(next.href);
    } catch {
      /* not a resolvable URL */
    }
  }

  // Site-wide artwork that lives outside the content sections.
  const meta = {};
  for (const [name, selector, attribute] of [
    ['ogImage', 'meta[property="og:image"]', 'content'],
    ['favicon', 'link[rel*="icon"]', 'href'],
  ]) {
    const src = document.querySelector(selector)?.getAttribute(attribute);
    if (src) meta[name] = { src: src.slice(0, 120), ...(await downloadAsset(src, url)) };
  }

  // Nav tree as Google Sites renders it — the source of truth for which URLs exist.
  const nav = [...document.querySelectorAll('nav a, [role="navigation"] a')]
    .map((node) => ({ text: node.textContent.trim(), href: node.getAttribute('href') }))
    .filter(
      (link, index, all) =>
        all.findIndex((other) => other.text === link.text && other.href === link.href) === index,
    );

  pages.push({
    path: key,
    ...meta,
    ...(key === '/' ? { nav } : {}),
    title: document.querySelector('title')?.textContent.trim() ?? '',
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
    headings: sections.flatMap((section) => section.headings),
    blocks: sections.flatMap((section) => section.blocks),
    links: sections.flatMap((section) => section.links),
    images: pageImages,
    embeds: sections.flatMap((section) => section.embeds),
    codeEmbeds: sections.flatMap((section) => section.codeEmbeds),
    sections,
  });

  console.log(`✓ ${key} — ${sections.length} sections, ${pageImages.length} images`);
}

const assetManifest = [...assets.values()];
const missing = pages
  .flatMap((page) => page.images ?? [])
  .filter((image) => image.error && image.error !== 'external host');

await writeFile(
  path.join(OUT, 'report.json'),
  `${JSON.stringify({ origin: ORIGIN, crawledAt: new Date().toISOString(), pages, assets: assetManifest }, null, 2)}\n`,
  'utf8',
);

console.log(
  `\nCrawled ${pages.length} pages and ${assetManifest.length} unique assets ` +
    `(${missing.length} failed downloads) → .crawl/report.json`,
);

/**
 * Snapshots the live Google Sites original so its content can be ported into
 * `src/content/` and `src/data/`.
 *
 * Run once, from a session whose egress policy allows the site:
 *
 *   npm run crawl
 *
 * Writes:
 *   .crawl/raw/<slug>.html   full HTML per page      (gitignored — bulky)
 *   .crawl/assets/<name>     every referenced image  (committed)
 *   .crawl/report.json       extracted content       (committed)
 *
 * `report.json` is the reference used to verify content parity after the port.
 */
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

function slugFor(urlPath) {
  const clean = urlPath.replace(/^\/+|\/+$/g, '');
  return clean === '' ? 'index' : clean.replace(/\//g, '_');
}

const queue = await seedUrls();
const visited = new Set();
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

  // Google Sites wraps real content in role="main"; fall back to <body>.
  const main = document.querySelector('[role="main"]') ?? document.body;

  const headings = [...main.querySelectorAll('h1, h2, h3, h4')].map((node) => ({
    level: Number(node.tagName.slice(1)),
    text: node.textContent.trim(),
  }));

  const blocks = [...main.querySelectorAll('p, li, blockquote')]
    .map((node) => node.textContent.trim())
    .filter((text) => text.length > 0);

  const links = [...main.querySelectorAll('a[href]')]
    .map((node) => ({ text: node.textContent.trim(), href: node.getAttribute('href') }))
    .filter((link) => link.href && !link.href.startsWith('#'));

  const images = [...main.querySelectorAll('img[src]')].map((node) => ({
    src: node.getAttribute('src'),
    alt: node.getAttribute('alt') ?? '',
  }));

  for (const image of images) {
    try {
      const absolute = new URL(image.src, url).href;
      if (ASSET_HOSTS.test(new URL(absolute).hostname)) assets.set(absolute, image.alt);
    } catch {
      /* malformed src — recorded in the report, nothing to download */
    }
  }

  for (const link of links) {
    try {
      const next = new URL(link.href, url);
      if (next.origin === url.origin) queue.push(next.href);
    } catch {
      /* not a resolvable URL */
    }
  }

  pages.push({
    path: key,
    title: document.querySelector('title')?.textContent.trim() ?? '',
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
    headings,
    blocks,
    links,
    images,
  });

  console.log(`✓ ${key} — ${headings.length} headings, ${blocks.length} blocks`);
}

// Download every image referenced by any crawled page.
let assetIndex = 0;
const assetManifest = [];
for (const [href, alt] of assets) {
  assetIndex += 1;
  const extension = path.extname(new URL(href).pathname) || '.jpg';
  const filename = `asset-${String(assetIndex).padStart(3, '0')}${extension}`;
  try {
    const response = await fetch(href);
    if (!response.ok) throw new Error(`${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(path.join(OUT, 'assets', filename), buffer);
    assetManifest.push({ filename, href, alt, bytes: buffer.length });
    console.log(`↓ ${filename} (${buffer.length} bytes)`);
  } catch (error) {
    console.error(`✗ asset ${href} — ${error.message}`);
    assetManifest.push({ filename: null, href, alt, error: error.message });
  }
}

await writeFile(
  path.join(OUT, 'report.json'),
  `${JSON.stringify({ origin: ORIGIN, crawledAt: new Date().toISOString(), pages, assets: assetManifest }, null, 2)}\n`,
  'utf8',
);

console.log(
  `\nCrawled ${pages.length} pages and ${assetManifest.length} assets → .crawl/report.json`,
);

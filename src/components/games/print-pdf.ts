import { jsPDF } from 'jspdf';
import type { Game, GameImageUrl } from '../../data/types';

type GuideGame = Game<GameImageUrl>;

/** One game as it goes into the booklet, with its chapter's name. */
export interface PrintGame {
  game: GuideGame;
  category: string;
}

/** The booklet's own copy, translated by the route. */
export interface PrintLabels {
  /** The guide's title ("Group Games"), the cover's headline. */
  title: string;
  /** With a `{count}` placeholder. */
  lead: string;
  reference: string;
  online: string;
  /** With a `{date}` placeholder. */
  printed: string;
  contents: string;
  page: string;
  materialsNeeded: string;
  noMaterials: string;
  players: string;
  age: string;
  duration: string;
  where: string;
  materials: string;
  setup: string;
  goal: string;
  rules: string;
  tips: string;
  /** File name, without the extension. */
  file: string;
}

export interface PrintBrand {
  name: string;
  /** Bare host, as the cover prints it ("pedrovicente.pt"). */
  host: string;
  /** The guide's own address, printed and linked as the reference. */
  url: string;
  /** Square avatar, cropped to a circle on the cover. */
  avatar: string;
}

// Brand colours: the light theme's `--accent`, `--accent-2`, `--accent-3`
// and `--text`, converted from OKLCH (PDF only speaks RGB).
const ACCENT: RGB = [0, 133, 152];
const DEEP: RGB = [0, 77, 90];
const AMBER: RGB = [223, 145, 26];
const INK: RGB = [11, 25, 27];
const MUTED: RGB = [92, 108, 112];
const LINE: RGB = [214, 226, 229];
const PAPER: RGB = [255, 247, 232];
type RGB = [number, number, number];

// A4 portrait, in millimetres.
const W = 210;
const H = 297;
const M = 18;
const BOTTOM = H - 20;

/**
 * Draws the selected games as an A4 booklet and downloads it: a branded
 * cover, a contents page with each game's page and everything to bring,
 * then one sheet per game. Loaded only when the visitor asks for the PDF.
 */
export async function savePdf(
  items: PrintGame[],
  labels: PrintLabels,
  brand: PrintBrand,
  locale: string,
) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const images = await Promise.all(items.map(({ game }) => toJpeg(game.image.src)));
  const avatar = await toRoundPng(brand.avatar).catch(() => undefined);

  cover(doc, items, images, avatar, labels, brand, locale);

  // Contents: written now, page numbers filled in once the sheets exist.
  doc.addPage();
  let y = heading(doc, labels.contents, M + 6);
  const slots: { page: number; y: number }[] = [];
  items.forEach(({ game, category }, index) => {
    if (y > BOTTOM - 8) {
      doc.addPage();
      y = M + 6;
    }
    doc
      .setFont('helvetica', 'bold')
      .setFontSize(11)
      .setTextColor(...ACCENT);
    doc.text(String(index + 1).padStart(2, '0'), M, y);
    doc.setTextColor(...INK);
    const title = doc.splitTextToSize(clean(game.title), W - 2 * M - 40)[0] as string;
    doc.text(title, M + 10, y);
    doc
      .setFont('helvetica', 'normal')
      .setFontSize(9)
      .setTextColor(...MUTED);
    doc.text(clean(category), M + 10, y + 4.5);
    dots(doc, M + 12 + doc.setFontSize(11).getTextWidth(title), W - M - 14, y);
    slots.push({ page: doc.getNumberOfPages(), y });
    y += 11;
  });

  // Everything to bring, game by game, as a checklist.
  y = heading(doc, labels.materialsNeeded, y + 8);
  for (const { game } of items) {
    const materials = game.materials.length ? game.materials : [labels.noMaterials];
    const lines = materials.map((item) => doc.splitTextToSize(clean(item), W - 2 * M - 8));
    const height = 7 + lines.reduce((sum, item) => sum + item.length * 4.6 + 1.4, 0);
    if (y + Math.min(height, 30) > BOTTOM) {
      doc.addPage();
      y = M + 6;
    }
    doc
      .setFont('helvetica', 'bold')
      .setFontSize(10.5)
      .setTextColor(...INK);
    doc.text(clean(game.title), M, y);
    y += 6;
    doc.setFont('helvetica', 'normal').setFontSize(10);
    for (const item of lines) {
      if (y + item.length * 4.6 > BOTTOM) {
        doc.addPage();
        y = M + 6;
      }
      if (game.materials.length) {
        doc.setDrawColor(...ACCENT).setLineWidth(0.35);
        doc.roundedRect(M + 0.5, y - 3, 3.2, 3.2, 0.6, 0.6);
        doc.setTextColor(...INK);
      } else {
        doc.setTextColor(...MUTED);
      }
      doc.text(item, M + 7, y);
      y += item.length * 4.6 + 1.4;
    }
    y += 4;
  }

  // One sheet per game.
  const starts = items.map((item, index) => {
    doc.addPage();
    const page = doc.getNumberOfPages();
    sheet(doc, item, index, images[index], labels);
    return page;
  });

  slots.forEach(({ page, y: slotY }, index) => {
    doc.setPage(page);
    doc
      .setFont('helvetica', 'bold')
      .setFontSize(11)
      .setTextColor(...INK);
    doc.text(String(starts[index]), W - M, slotY, { align: 'right' });
    doc.link(M, slotY - 5, W - 2 * M, 10, { pageNumber: starts[index] });
  });

  // Footer on every page but the cover.
  const total = doc.getNumberOfPages();
  for (let page = 2; page <= total; page++) {
    doc.setPage(page);
    doc
      .setDrawColor(...LINE)
      .setLineWidth(0.3)
      .line(M, H - 13, W - M, H - 13);
    doc
      .setFont('helvetica', 'normal')
      .setFontSize(8)
      .setTextColor(...MUTED);
    doc.text(`${brand.name} · ${brand.host} · ${clean(labels.title)}`, M, H - 8.5);
    doc.text(`${labels.page} ${page} / ${total}`, W - M, H - 8.5, { align: 'right' });
  }

  doc.save(`${labels.file}.pdf`);
}

/** The cover: brand, the guide's title, a few of the chosen drawings and the reference. */
function cover(
  doc: jsPDF,
  items: PrintGame[],
  images: (string | undefined)[],
  avatar: string | undefined,
  labels: PrintLabels,
  brand: PrintBrand,
  locale: string,
) {
  doc.setFillColor(...PAPER).rect(0, 0, W, H, 'F');
  // The site's brand gradient, as three bands.
  const band = W / 3;
  [ACCENT, DEEP, AMBER].forEach((colour, index) => {
    doc.setFillColor(...colour).rect(index * band, 0, band + 0.5, 6, 'F');
  });

  if (avatar) doc.addImage(avatar, 'PNG', M, 20, 14, 14);
  doc
    .setFont('helvetica', 'bold')
    .setFontSize(13)
    .setTextColor(...INK);
  doc.text(brand.name, M + (avatar ? 18 : 0), 26);
  doc
    .setFont('helvetica', 'normal')
    .setFontSize(10)
    .setTextColor(...ACCENT);
  doc.textWithLink(brand.host, M + (avatar ? 18 : 0), 31.5, { url: `https://${brand.host}` });

  doc
    .setFont('helvetica', 'bold')
    .setFontSize(44)
    .setTextColor(...INK);
  const title = doc.splitTextToSize(clean(labels.title), W - 2 * M) as string[];
  doc.text(title, M, 70);
  let y = 70 + (title.length - 1) * 16 + 12;
  doc
    .setFont('helvetica', 'normal')
    .setFontSize(15)
    .setTextColor(...DEEP);
  doc.text(labels.lead.replace('{count}', String(items.length)), M, y);

  // Up to four of the chosen games' drawings.
  const shown = images.slice(0, 4).filter(Boolean) as string[];
  const gap = 5;
  const cell = (W - 2 * M - gap) / 2;
  const cellH = cell * (13 / 18);
  y += 12;
  shown.forEach((image, index) => {
    const x = M + (index % 2) * (cell + gap);
    const top = y + Math.floor(index / 2) * (cellH + gap);
    doc.addImage(image, 'JPEG', x, top, cell, cellH);
    doc
      .setDrawColor(...LINE)
      .setLineWidth(0.4)
      .roundedRect(x, top, cell, cellH, 3, 3);
  });

  // Reference box.
  const boxY = H - 58;
  doc
    .setFillColor(255, 255, 255)
    .setDrawColor(...LINE)
    .setLineWidth(0.4);
  doc.roundedRect(M, boxY, W - 2 * M, 38, 4, 4, 'FD');
  doc
    .setFont('helvetica', 'bold')
    .setFontSize(8)
    .setTextColor(...ACCENT);
  doc.text(labels.reference.toUpperCase(), M + 7, boxY + 9, { charSpace: 0.6 });
  doc
    .setFont('helvetica', 'normal')
    .setFontSize(10)
    .setTextColor(...INK);
  doc.text(`${labels.online}:`, M + 7, boxY + 17);
  doc.setTextColor(...ACCENT);
  doc.textWithLink(
    brand.url.replace(/^https?:\/\//, ''),
    M + 7 + doc.getTextWidth(`${labels.online}: `),
    boxY + 17,
    {
      url: brand.url,
    },
  );
  doc.setTextColor(...INK);
  const date = new Date().toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  doc.text(labels.printed.replace('{date}', date), M + 7, boxY + 24);
  doc.setTextColor(...MUTED).setFontSize(9);
  doc.text(`© ${new Date().getFullYear()} ${brand.name}`, M + 7, boxY + 31);
}

/** A game's sheet: chapter, title, the summary facts, its drawing, then the how-to-play. */
function sheet(
  doc: jsPDF,
  { game, category }: PrintGame,
  index: number,
  image: string | undefined,
  labels: PrintLabels,
) {
  doc.setFillColor(...ACCENT).rect(0, 0, W, 3, 'F');
  doc
    .setFont('helvetica', 'bold')
    .setFontSize(8.5)
    .setTextColor(...ACCENT);
  doc.text(`${String(index + 1).padStart(2, '0')} · ${clean(category).toUpperCase()}`, M, M + 2, {
    charSpace: 0.4,
  });

  const imageW = 68;
  const textW = W - 2 * M - imageW - 8;
  doc
    .setFont('helvetica', 'bold')
    .setFontSize(22)
    .setTextColor(...INK);
  const title = doc.splitTextToSize(clean(game.title), textW) as string[];
  doc.text(title, M, M + 13);
  let y = M + 13 + (title.length - 1) * 8.5 + 9;

  const facts: [string, string][] = [
    [labels.players, game.players],
    [labels.age, game.age],
    [labels.duration, game.duration],
    [labels.where, game.setting],
  ];
  for (const [name, value] of facts) {
    doc
      .setFont('helvetica', 'bold')
      .setFontSize(7.5)
      .setTextColor(...MUTED);
    doc.text(clean(name).toUpperCase(), M, y, { charSpace: 0.4 });
    doc
      .setFont('helvetica', 'normal')
      .setFontSize(10)
      .setTextColor(...INK);
    const lines = doc.splitTextToSize(clean(value), textW) as string[];
    doc.text(lines, M, y + 4.6);
    y += 4.6 + lines.length * 4.6 + 3;
  }

  const imageTop = M + 6;
  const imageH = imageW * (13 / 18);
  if (image) {
    doc.addImage(image, 'JPEG', W - M - imageW, imageTop, imageW, imageH);
    doc
      .setDrawColor(...LINE)
      .setLineWidth(0.4)
      .roundedRect(W - M - imageW, imageTop, imageW, imageH, 3, 3);
  }
  y = Math.max(y, imageTop + imageH) + 6;

  const write = (text: string, x: number, width: number, gapAfter = 1.6) => {
    doc
      .setFont('helvetica', 'normal')
      .setFontSize(10.5)
      .setTextColor(...INK);
    const lines = doc.splitTextToSize(clean(text), width) as string[];
    for (const line of lines) {
      if (y > BOTTOM) newPage();
      doc.text(line, x, y);
      y += 5;
    }
    y += gapAfter;
  };
  const newPage = () => {
    doc.addPage();
    doc.setFillColor(...ACCENT).rect(0, 0, W, 3, 'F');
    y = M + 4;
  };
  const section = (name: string) => {
    if (y > BOTTOM - 14) newPage();
    y += 3;
    doc
      .setFont('helvetica', 'bold')
      .setFontSize(8.5)
      .setTextColor(...ACCENT);
    doc.text(clean(name).toUpperCase(), M, y, { charSpace: 0.5 });
    y += 6;
  };
  const bullets = (items: string[]) => {
    for (const item of items) {
      if (y > BOTTOM) newPage();
      doc.setFillColor(...AMBER).circle(M + 1.3, y - 1.3, 0.8, 'F');
      write(item, M + 5, W - 2 * M - 5);
    }
  };

  if (game.note) {
    doc
      .setFont('helvetica', 'italic')
      .setFontSize(9.5)
      .setTextColor(...MUTED);
    const lines = doc.splitTextToSize(clean(game.note), W - 2 * M) as string[];
    doc.text(lines, M, y);
    y += lines.length * 4.6 + 3;
  }
  if (game.goal) {
    section(labels.goal);
    write(game.goal, M, W - 2 * M);
  }
  if (game.materials.length) {
    section(labels.materials);
    bullets(game.materials);
  }
  if (game.setup.length) {
    section(labels.setup);
    bullets(game.setup);
  }
  section(labels.rules);
  game.rules.forEach((rule, step) => {
    if (y > BOTTOM) newPage();
    doc.setFillColor(...DEEP).circle(M + 2.2, y - 1.4, 2.6, 'F');
    doc.setFont('helvetica', 'bold').setFontSize(8).setTextColor(255, 255, 255);
    doc.text(String(step + 1), M + 2.2, y - 0.4, { align: 'center' });
    write(rule, M + 7, W - 2 * M - 7);
  });
  for (const round of game.questions ?? []) {
    section(round.title);
    bullets(round.questions);
  }
  if (game.tips.length) {
    section(labels.tips);
    bullets(game.tips);
  }
}

function heading(doc: jsPDF, text: string, y: number) {
  doc
    .setFont('helvetica', 'bold')
    .setFontSize(18)
    .setTextColor(...INK);
  doc.text(clean(text), M, y);
  doc.setFillColor(...ACCENT).rect(M, y + 3, 14, 1, 'F');
  return y + 14;
}

function dots(doc: jsPDF, from: number, to: number, y: number) {
  doc.setFillColor(...LINE);
  for (let x = from; x < to; x += 2) doc.circle(x, y - 0.8, 0.25, 'F');
}

/**
 * Text as the PDF's built-in Helvetica can draw it (Latin-1): links reduced
 * to their text, typographic punctuation to its plain form, emoji dropped.
 */
function clean(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '$1')
    .replace(/[“”„]/g, '"')
    .replace(/[‘’‚]/g, "'")
    .replace(/…/g, '...')
    .replace(/[–—]/g, '-')
    .replace(/€/g, 'EUR')
    .replace(/[^\n\x20-\xff]/g, '')
    .replace(/ {2,}/g, ' ')
    .trim();
}

function load(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

/** A drawing as a JPEG data URL (the PDF can't embed WebP). */
async function toJpeg(src: string): Promise<string | undefined> {
  try {
    const image = await load(src);
    const canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext('2d');
    if (!context) return undefined;
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0);
    return canvas.toDataURL('image/jpeg', 0.85);
  } catch {
    return undefined;
  }
}

/** The avatar cropped to a circle, as a PNG with transparent corners. */
async function toRoundPng(src: string): Promise<string> {
  const image = await load(src);
  const size = Math.min(image.naturalWidth, image.naturalHeight);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('No 2D context');
  context.beginPath();
  context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  context.clip();
  context.drawImage(
    image,
    (image.naturalWidth - size) / 2,
    (image.naturalHeight - size) / 2,
    size,
    size,
    0,
    0,
    size,
    size,
  );
  return canvas.toDataURL('image/png');
}

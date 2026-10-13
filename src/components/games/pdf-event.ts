/**
 * GoatCounter event for each downloaded games booklet. `GameFilter` records
 * it; `PdfCount.astro` reads its total back from the public counter.
 */
export const PDF_EVENT = 'games-pdf';

/** Fired on `document` after a booklet downloads, so the page's total can tick up. */
export const PDF_SAVED = 'games:pdf-saved';

interface GoatCounter {
  count?: (vars: { path: string; title?: string; event?: boolean }) => void;
}

/**
 * Records one download. GoatCounter's script only loads on the production
 * host (see `BaseLayout`), so elsewhere this just updates the page.
 */
export function countPdf(games: number) {
  const goatcounter = (window as { goatcounter?: GoatCounter }).goatcounter;
  goatcounter?.count?.({ path: PDF_EVENT, title: `Games PDF (${games})`, event: true });
  document.dispatchEvent(new CustomEvent(PDF_SAVED));
}

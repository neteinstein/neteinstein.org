/**
 * Hide-on-scroll for the site header and the guides' sticky search bars
 * (anything marked `data-scroll-hide`): scrolling down tucks them away above
 * the viewport, scrolling up (or reaching the top) brings them back.
 *
 * This only sets `data-scroll="down"` on <html>; `global.css` does the moving,
 * so with JS off nothing ever hides. They stay put while someone types in one
 * of them, while the mobile menu has the page locked, and whenever focus moves
 * into them.
 */

const root = document.documentElement;
/** Below this, everything is always shown. */
const TOP = 160;
/** Ignore jitter smaller than this many pixels. */
const DEAD_ZONE = 8;

let last = scrollY;
let queued = false;

function typingInBar() {
  const active = document.activeElement;
  return !!active?.closest('[data-scroll-hide]') && active.matches('input, textarea, select');
}

function update() {
  queued = false;
  const y = scrollY;
  const delta = y - last;
  if (y > TOP && Math.abs(delta) < DEAD_ZONE) return;
  last = y;

  const locked = document.body.style.overflow === 'hidden';
  if (y > TOP && delta > 0 && !locked && !typingInBar()) root.dataset.scroll = 'down';
  else delete root.dataset.scroll;
}

addEventListener(
  'scroll',
  () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  },
  { passive: true },
);

addEventListener('focusin', (event) => {
  if ((event.target as Element | null)?.closest?.('[data-scroll-hide]')) delete root.dataset.scroll;
});

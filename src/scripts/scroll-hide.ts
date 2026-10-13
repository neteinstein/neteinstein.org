/**
 * Hide-on-scroll for the site header and the guides' sticky search bars
 * (anything marked `data-scroll-hide`): scrolling down tucks them away above
 * the viewport, scrolling up (or reaching the top) brings them back.
 *
 * This sets `data-scroll="down"` on <html> and `data-stuck` on each element
 * while it is actually pinned by `position: sticky`; `global.css` only moves
 * stuck elements, so a search bar still sitting in the page flow never slides
 * over the content above it. With JS off nothing ever hides. They stay put
 * while someone types in one of them, while the mobile menu has the page
 * locked, and whenever focus moves into them.
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

/**
 * Pinned once the element has reached its sticky `top`. Tucking it away only
 * moves it further up, so a hidden element still reads as pinned.
 */
function markStuck() {
  for (const element of document.querySelectorAll<HTMLElement>('[data-scroll-hide]')) {
    const top = parseFloat(getComputedStyle(element).top) || 0;
    element.toggleAttribute('data-stuck', element.getBoundingClientRect().top <= top + 1);
  }
}

function update() {
  queued = false;
  markStuck();
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

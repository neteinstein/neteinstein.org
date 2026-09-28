/**
 * Site-wide motion runtime. Loaded once by BaseLayout as a bundled module —
 * plain DOM code, not a React island: nothing here holds UI state.
 *
 * The CSS half lives in `src/styles/global.css` under "Motion primitives".
 * BaseLayout's inline head script adds `motion-ok` to <html> (never under
 * reduced motion) and removes it again if this module has not reported in
 * shortly after load, so a failed script can never leave content invisible.
 */

declare global {
  interface Window {
    __motionReady?: boolean;
  }
}

const root = document.documentElement;

function initReveal() {
  // Grids cascade: give each direct child an index the CSS delay reads.
  for (const group of document.querySelectorAll<HTMLElement>('[data-reveal-stagger]')) {
    [...group.children].forEach((child, index) => {
      const element = child as HTMLElement;
      if (!element.hasAttribute('data-reveal')) element.setAttribute('data-reveal', '');
      element.style.setProperty('--stagger', String(index % 8));
    });
  }

  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!root.classList.contains('motion-ok')) {
    targets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  targets.forEach((target) => observer.observe(target));
}

function initSpotlight() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  let frame = 0;
  let pending: { el: HTMLElement; x: number; y: number } | null = null;

  document.addEventListener(
    'pointermove',
    (event) => {
      const el = (event.target as Element | null)?.closest<HTMLElement>('[data-spotlight]');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      pending = { el, x: event.clientX - rect.left, y: event.clientY - rect.top };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!pending) return;
        pending.el.style.setProperty('--mx', `${pending.x}px`);
        pending.el.style.setProperty('--my', `${pending.y}px`);
      });
    },
    { passive: true },
  );
}

initReveal();
initSpotlight();
window.__motionReady = true;

export {};

/**
 * The feedback talk deck on /what-i-do/improver (`FeedbackTalk.astro`). The
 * slides are a scroll-snapping strip that already works on its own — swipe,
 * scroll, or follow a chapter tab — so this only layers controls on top:
 *
 * - previous/next buttons and keys (arrows, Page Up/Down — what presenter
 *   remotes send — Home/End). "Next" first opens the current slide's pending
 *   reveal, like the original's click-by-click builds;
 * - the counter, progress bar and current chapter tab;
 * - full screen, for presenting;
 * - the session length calculator on the timing slide.
 */
import { clampSlide, formatMinutes, partMinutes, sessionMinutes, slideAt } from '../lib/slide-deck';

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

for (const deck of document.querySelectorAll<HTMLElement>('[data-deck]')) setUp(deck);

function setUp(deck: HTMLElement) {
  const stage = deck.querySelector<HTMLElement>('[data-deck-stage]');
  const track = deck.querySelector<HTMLElement>('[data-deck-track]');
  const controls = deck.querySelector<HTMLElement>('[data-deck-controls]');
  const prev = deck.querySelector<HTMLButtonElement>('[data-deck-prev]');
  const next = deck.querySelector<HTMLButtonElement>('[data-deck-next]');
  const counter = deck.querySelector<HTMLElement>('[data-deck-current]');
  const bar = deck.querySelector<HTMLElement>('[data-deck-bar]');
  const full = deck.querySelector<HTMLButtonElement>('[data-deck-full]');
  const tabList = deck.querySelector<HTMLElement>('[data-deck-chapters]');
  const tabs = [...deck.querySelectorAll<HTMLAnchorElement>('[data-deck-go]')];
  const slides = [...deck.querySelectorAll<HTMLElement>('[data-deck-slide]')];
  if (!stage || !track || !controls || !prev || !next || slides.length === 0) return;

  let index = -1;
  /** The slide a programmatic scroll is heading for; scroll events in between are ignored. */
  let heading: number | null = null;

  const pendingReveal = (slide: HTMLElement | undefined) =>
    slide?.querySelector<HTMLDetailsElement>('details[data-deck-reveal]:not([open])');

  function updateNext() {
    next!.disabled = index === slides.length - 1 && !pendingReveal(slides[index]);
  }

  function show(target: number) {
    if (target === index) return;
    slides[index]?.removeAttribute('data-active');
    index = target;
    const slide = slides[index]!;
    slide.setAttribute('data-active', '');

    if (counter) counter.textContent = String(index + 1);
    if (bar) bar.style.width = `${((index + 1) / slides.length) * 100}%`;
    prev!.disabled = index === 0;
    updateNext();

    for (const tab of tabs) {
      const current = tab.dataset.deckChapter === slide.dataset.chapter;
      if (current) {
        tab.setAttribute('aria-current', 'true');
        // Keep the tab in view inside its own row, without moving the page.
        tabList?.scrollTo({
          left: tab.offsetLeft - (tabList.clientWidth - tab.offsetWidth) / 2,
          behavior: reducedMotion.matches ? 'instant' : 'smooth',
        });
      } else {
        tab.removeAttribute('aria-current');
      }
    }
  }

  function go(target: number) {
    target = clampSlide(target, slides.length);
    if (target === index) return;
    // A long jump would flick past every slide on the way; only glide to a neighbour.
    const smooth = !reducedMotion.matches && Math.abs(target - index) === 1;
    heading = target;
    track!.scrollTo({ left: target * track!.clientWidth, behavior: smooth ? 'smooth' : 'instant' });
    show(target);
  }

  function forward() {
    const reveal = pendingReveal(slides[index]);
    if (reveal) reveal.open = true;
    else go(index + 1);
  }

  // Slides are one track wide, so a resize (full screen, rotation) leaves the
  // offset pointing between slides. Until the observer below re-aligns it,
  // the offset says nothing about which slide is showing.
  let width = track.clientWidth;
  new ResizeObserver(() => {
    if (track.clientWidth === width) return;
    width = track.clientWidth;
    if (Math.abs(track.scrollLeft - index * width) < 1) return;
    heading = index;
    track.scrollTo({ left: index * width, behavior: 'instant' });
  }).observe(track);

  let frame = 0;
  track.addEventListener(
    'scroll',
    () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (track.clientWidth !== width) return;
        const at = slideAt(track.scrollLeft, width, slides.length);
        if (heading !== null) {
          if (at !== heading) return;
          heading = null;
        }
        show(at);
      });
    },
    { passive: true },
  );
  // Whoever grabs the strip mid-glide takes over from the button that started it.
  for (const type of ['pointerdown', 'wheel', 'touchstart'] as const) {
    track.addEventListener(type, () => (heading = null), { passive: true });
  }
  // `toggle` doesn't bubble, so listen while it travels down.
  track.addEventListener('toggle', updateNext, true);

  prev.addEventListener('click', () => go(index - 1));
  next.addEventListener('click', forward);

  for (const tab of tabs) {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      go(Number(tab.dataset.deckGo));
    });
  }

  stage.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if ((event.target as Element).closest('input, select, textarea')) return;
    switch (event.key) {
      case 'ArrowRight':
      case 'PageDown':
        forward();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        go(index - 1);
        break;
      case 'Home':
        go(0);
        break;
      case 'End':
        go(slides.length - 1);
        break;
      default:
        return;
    }
    event.preventDefault();
  });

  if (full && document.fullscreenEnabled) {
    full.hidden = false;
    full.addEventListener('click', () => {
      if (document.fullscreenElement) void document.exitFullscreen();
      else void stage.requestFullscreen().then(() => track.focus());
    });
    document.addEventListener('fullscreenchange', () => {
      full.setAttribute('aria-pressed', String(document.fullscreenElement === stage));
    });
  }

  for (const timer of deck.querySelectorAll<HTMLElement>('[data-deck-timer]')) setUpTimer(timer);

  show(slideAt(track.scrollLeft, track.clientWidth, slides.length));
  controls.hidden = false;
  deck.setAttribute('data-ready', '');
}

/** The team-size slider: recomputes each part of the session and the total. */
function setUpTimer(timer: HTMLElement) {
  const input = timer.querySelector<HTMLInputElement>('input[type="range"]');
  const people = timer.querySelector<HTMLElement>('[data-deck-people]');
  const total = timer.querySelector<HTMLElement>('[data-deck-total]');
  const rows = [...timer.querySelectorAll<HTMLElement>('[data-deck-part]')];
  if (!input || !people || !total) return;

  const parts = rows.map((row) => ({
    minutes: Number(row.dataset.minutes),
    perPerson: row.dataset.perPerson !== undefined,
    value: row.querySelector<HTMLElement>('[data-deck-part-value]'),
  }));

  input.hidden = false;
  input.addEventListener('input', () => {
    const count = Number(input.value);
    people.textContent = String(count);
    for (const part of parts) {
      if (part.value) part.value.textContent = formatMinutes(partMinutes(part, count));
    }
    total.textContent = formatMinutes(sessionMinutes(parts, count));
  });
}

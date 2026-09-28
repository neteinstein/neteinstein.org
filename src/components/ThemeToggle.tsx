import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';

type Theme = 'light' | 'dark';

/**
 * Hydrates with `client:load` so it is interactive before the user can reach
 * it. The initial value is read from the DOM rather than storage, because the
 * inline script in BaseLayout has already resolved stored-vs-system preference
 * and written it to `data-theme`.
 *
 * Where the View Transitions API exists, the new theme is revealed as a circle
 * growing out of the button (CSS in global.css, `html.theme-transition`).
 */
interface Props {
  /** Accessible names for the button, already translated. */
  labels: { dark: string; light: string };
}

export default function ThemeToggle({ labels }: Props) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === 'dark' ? 'dark' : 'light');
    setMounted(true);
  }, []);

  function apply(next: Theme) {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can throw in private mode; the in-page theme still applies.
    }
  }

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!document.startViewTransition || reduced) {
      apply(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    root.style.setProperty('--vt-x', `${rect.left + rect.width / 2}px`);
    root.style.setProperty('--vt-y', `${rect.top + rect.height / 2}px`);
    root.classList.add('theme-transition');
    const transition = document.startViewTransition(() => apply(next));
    transition.finished.finally(() => root.classList.remove('theme-transition'));
  }

  const dark = mounted && theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      className="group border-line text-muted hover:text-fg relative grid size-10 place-items-center overflow-hidden rounded-xl border transition-colors"
      aria-label={dark ? labels.light : labels.dark}
      // Rendered server-side as light; suppress the label until the real value
      // is known so screen readers never announce a stale state.
      aria-live="polite"
    >
      <span
        className={[
          'absolute transition-all duration-500 ease-[var(--ease-spring)]',
          dark ? 'translate-y-0 rotate-0 opacity-100' : 'translate-y-6 rotate-90 opacity-0',
        ].join(' ')}
      >
        <SunIcon />
      </span>
      <span
        className={[
          'absolute transition-all duration-500 ease-[var(--ease-spring)]',
          dark ? '-translate-y-6 -rotate-90 opacity-0' : 'translate-y-0 rotate-0 opacity-100',
        ].join(' ')}
      >
        <MoonIcon />
      </span>
    </button>
  );
}

function MoonIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

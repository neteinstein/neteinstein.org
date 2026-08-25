import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

/**
 * Hydrates with `client:load` so it is interactive before the user can reach
 * it. The initial value is read from the DOM rather than storage, because the
 * inline script in BaseLayout has already resolved stored-vs-system preference
 * and written it to `data-theme`.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === 'dark' ? 'dark' : 'light');
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can throw in private mode; the in-page theme still applies.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-md border border-[var(--border)] p-2 text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      // Rendered server-side as light; suppress the label until the real value
      // is known so screen readers never announce a stale state.
      aria-live="polite"
    >
      {mounted && theme === 'dark' ? <SunIcon /> : <MoonIcon />}
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

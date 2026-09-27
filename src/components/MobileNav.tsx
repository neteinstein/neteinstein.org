import { useEffect, useId, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { NavItem } from '../config/site';

interface Props {
  /** Nav tree with the deploy base already applied to every href. */
  items: NavItem[];
  /** Current path in the same form as the hrefs (deploy base included). */
  current: string;
}

/**
 * The nav tree is nested (`what-i-do/*`, `porto/*`), which needs real open/close
 * state — the one part of the header that cannot be a plain Astro component.
 * Hydrated with `client:idle`: it is below the fold of attention on load.
 */
export default function MobileNav({ items, current }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape and on outside click, and lock scroll while open.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    function onPointerDown(event: PointerEvent) {
      if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  let index = 0;

  return (
    <div ref={panelRef} className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="border-line text-muted hover:text-fg grid size-10 place-items-center rounded-xl border transition-colors"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            d={open ? 'M6 6l12 12' : 'M4 7h16'}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          <path
            d={open ? 'M18 6 6 18' : 'M4 17h16'}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
      </button>

      {open && (
        <div
          id={panelId}
          className="bg-surface-raised border-line absolute inset-x-0 top-full mt-2 max-h-[calc(100dvh-6rem)] animate-[mobile-nav-in_.45s_var(--ease-out-expo)_both] overflow-y-auto rounded-2xl border p-3 shadow-[var(--shadow-lg)]"
        >
          <nav aria-label="Main">
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li
                  key={item.label}
                  style={{ '--i': index++ } as CSSProperties}
                  className="animate-[mobile-nav-item_.5s_var(--ease-out-expo)_both] [animation-delay:calc(var(--i)*35ms)]"
                >
                  {item.href ? (
                    <NavLink label={item.label} href={item.href} current={current} />
                  ) : (
                    <p className="text-accent px-3 pt-3 pb-1 font-mono text-[0.7rem] font-semibold tracking-[0.14em] uppercase">
                      {item.label}
                    </p>
                  )}
                  {item.children && (
                    <ul className="border-line ml-3 flex flex-col gap-0.5 border-l pl-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavLink label={child.label} href={child.href} current={current} small />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

function NavLink({
  label,
  href,
  current,
  small = false,
}: {
  label: string;
  href: string;
  current: string;
  small?: boolean;
}) {
  const active = trim(href) === trim(current);
  return (
    <a
      href={href}
      aria-current={active ? 'page' : undefined}
      className={[
        'flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors',
        small ? 'text-[0.95rem]' : 'font-display text-lg font-semibold',
        active
          ? 'text-fg bg-[color-mix(in_oklch,var(--accent)_13%,transparent)]'
          : 'text-fg hover:bg-[color-mix(in_oklch,var(--text)_6%,transparent)]',
      ].join(' ')}
    >
      {label}
      {active && <span aria-hidden="true" className="bg-accent size-1.5 rounded-full" />}
    </a>
  );
}

function trim(path: string): string {
  return path.replace(/\/+$/, '') || '/';
}

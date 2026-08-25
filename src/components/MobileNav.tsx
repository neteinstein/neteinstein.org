import { useEffect, useId, useRef, useState } from 'react';
import type { NavItem } from '../config/site';

interface Props {
  items: NavItem[];
  pathname: string;
}

/**
 * The nav tree is nested (`what-i-do/*`, `porto/*`), which needs real open/close
 * state — the one part of the header that cannot be a plain Astro component.
 * Hydrated with `client:idle`: it is below the fold of attention on load.
 */
export default function MobileNav({ items, pathname }: Props) {
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

  return (
    <div ref={panelRef} className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-md border border-[var(--border)] p-2 text-[var(--text-muted)]"
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
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full z-40 max-h-[80vh] overflow-y-auto border-b border-[var(--border)] bg-[var(--surface)] px-5 py-4 shadow-lg"
        >
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink item={item} pathname={pathname} />
                {item.children && (
                  <ul className="mt-1 ml-4 flex flex-col gap-1 border-l border-[var(--border)] pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavLink item={child} pathname={pathname} small />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function NavLink({
  item,
  pathname,
  small = false,
}: {
  item: NavItem;
  pathname: string;
  small?: boolean;
}) {
  const active = isActive(item.href, pathname);
  return (
    <a
      href={item.href}
      aria-current={active ? 'page' : undefined}
      className={[
        'block rounded-md px-2 py-2 transition-colors',
        small ? 'text-sm' : 'font-medium',
        active ? 'text-[var(--link)]' : 'text-[var(--text)] hover:text-[var(--link)]',
      ].join(' ')}
    >
      {item.label}
    </a>
  );
}

// Duplicated from site.ts rather than imported: keeping the island's bundle free
// of the full config module keeps the shipped JS small.
function isActive(href: string, pathname: string): boolean {
  const current = pathname.replace(/\/+$/, '') || '/';
  const target = href.replace(/\/+$/, '') || '/';
  if (target === '/') return current === '/';
  return current === target || current.startsWith(`${target}/`);
}

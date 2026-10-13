/** A guide section's collapse button, shared by the search-and-filter islands. */
export default function SectionToggle({
  collapsed,
  controls,
  title,
  labels,
  onToggle,
}: {
  collapsed: boolean;
  /** Id of the section body it hides. */
  controls: string;
  /** The section's name, for screen readers. */
  title: string;
  labels: { collapse: string; expand: string };
  onToggle: () => void;
}) {
  const text = collapsed ? labels.expand : labels.collapse;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={!collapsed}
      aria-controls={controls}
      aria-label={`${text}: ${title}`}
      className="border-line-strong bg-surface-raised text-muted hover:text-fg hover:border-accent inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors"
    >
      <svg
        className={[
          'size-4 transition-transform duration-300 ease-[var(--ease-out-expo)]',
          collapsed ? '-rotate-90' : '',
        ].join(' ')}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
      {text}
    </button>
  );
}

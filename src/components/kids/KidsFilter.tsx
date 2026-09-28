import { useMemo, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { KidsColumn, KidsColumnKey, KidsNoteList, KidsPlace } from '../../data/types';

/** The island's own copy, translated by the route. */
export interface KidsFilterLabels {
  search: string;
  placeholder: string;
  setting: string;
  all: string;
  /** With `{shown}` and `{total}` placeholders. */
  count: string;
  empty: string;
  clear: string;
  seeNoteTable: string;
  seeNoteList: string;
}

interface Props {
  places: KidsPlace[];
  columns: KidsColumn[];
  /** Accessible name of the table. */
  caption: string;
  /** Id of the note the footnote marker (`*`) links to. */
  noteId: string;
  labels: KidsFilterLabels;
}

/** Plain-text cells; `where`, `name` and `notes` are rendered by hand. */
type TextKey = Exclude<KidsColumnKey, 'where' | 'name' | 'notes'>;
const isText = (key: KidsColumnKey): key is TextKey =>
  key !== 'where' && key !== 'name' && key !== 'notes';

/**
 * Search + setting filter over the "places for kids" table, the same
 * search-and-chips pattern as the Porto guide's `PlaceFilter`. Hydrated with
 * `client:visible`: every row and card renders server-side, so the table
 * reads with JS disabled — filtering just toggles `hidden` on the rows/cards
 * already in the DOM.
 */
export default function KidsFilter({ places, columns, caption, noteId, labels }: Props) {
  const [query, setQuery] = useState('');
  const [settingId, setSettingId] = useState('all');

  const index = useMemo(() => buildIndex(places), [places]);
  const settings = useMemo(() => distinctSettings(places), [places]);
  const total = places.length;

  const needle = normalise(query.trim());
  const isVisible = (place: KidsPlace) => {
    if (settingId !== 'all' && place.setting !== settingId) return false;
    return !needle || (index.get(place) ?? '').includes(needle);
  };

  const shown = places.filter(isVisible).length;

  const reset = () => {
    setQuery('');
    setSettingId('all');
  };

  const tiles = columns.filter((column) => isText(column.key));
  const notesColumn = columns.find((column) => column.key === 'notes');

  return (
    <div>
      <div className="glass border-line sticky top-[5.25rem] z-30 -mx-2 mb-10 rounded-3xl border p-3 shadow-[var(--shadow-md)] sm:mx-0 sm:p-4">
        <div className="flex items-center gap-3">
          <label className="relative block flex-1">
            <span className="sr-only">{labels.search}</span>
            <Icon
              name="search"
              className="text-muted pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={labels.placeholder}
              className="border-line-strong bg-surface-raised text-fg placeholder:text-muted w-full rounded-2xl border py-2.5 pr-3 pl-10 text-base transition-shadow focus:shadow-[0_0_0_4px_color-mix(in_oklch,var(--accent)_18%,transparent)] focus:outline-none sm:text-sm"
            />
          </label>
          <p
            aria-live="polite"
            className="text-muted hidden shrink-0 font-mono text-xs whitespace-nowrap sm:block"
          >
            <span className="text-fg font-semibold">{shown}</span> / {total}
          </p>
        </div>

        <ChipRow
          label={labels.setting}
          allLabel={labels.all}
          value={settingId}
          options={settings.map((setting) => ({
            value: setting,
            label: setting,
            count: places.filter((place) => place.setting === setting).length,
          }))}
          allCount={total}
          onChange={setSettingId}
        />
        <p aria-live="polite" className="text-muted mt-2 font-mono text-xs sm:hidden">
          {labels.count.replace('{shown}', String(shown)).replace('{total}', String(total))}
        </p>
      </div>

      {/* ───────────── Wide screens: a real table ───────────── */}
      <div
        className="glow-ring border-line bg-surface-raised relative hidden overflow-hidden rounded-[2rem] border shadow-[var(--shadow-md)] xl:block"
        data-reveal
        data-spotlight
      >
        <div className="h-1.5 bg-[image:var(--gradient-brand)]" aria-hidden="true" />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">{caption}</caption>
            <thead>
              <tr className="border-line bg-surface-sunken/70 border-b">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    scope="col"
                    className="text-muted px-4 py-4 align-top font-mono text-[0.68rem] leading-snug font-semibold tracking-[0.1em] uppercase first:pl-7 last:pr-7"
                  >
                    <span className="text-accent mb-2 flex">
                      <ColumnGlyph column={column.key} className="size-4" />
                    </span>
                    {column.label}
                    {column.footnote && (
                      <a
                        href={`#${noteId}`}
                        className="text-accent-2 hover:text-fg ml-0.5 inline-grid min-w-5 place-items-center rounded-full text-sm leading-none font-bold transition-colors"
                      >
                        {column.footnote}
                        <span className="sr-only"> ({labels.seeNoteTable})</span>
                      </a>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {places.map((place) => (
                <tr
                  key={place.name.label}
                  hidden={!isVisible(place)}
                  className="border-line hover:bg-surface-sunken/40 border-b align-top transition-colors last:border-b-0"
                >
                  {columns.map((column) => {
                    const cell = 'px-4 py-7 first:pl-7 last:pr-7';
                    if (column.key === 'where') {
                      return (
                        <td key={column.key} className={`${cell} whitespace-nowrap`}>
                          <a
                            href={place.where.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link link-underline inline-flex items-center gap-1 font-semibold"
                          >
                            <Icon name="map-pin" className="size-3.5 shrink-0" />
                            {place.where.label}
                          </a>
                        </td>
                      );
                    }
                    if (column.key === 'name') {
                      return (
                        <th
                          key={column.key}
                          scope="row"
                          className={`${cell} font-normal whitespace-nowrap`}
                        >
                          <a
                            href={place.name.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display text-link link-underline inline text-lg leading-snug font-bold"
                          >
                            {place.name.label}
                            <Icon
                              name="arrow-up-right"
                              className="ml-0.5 inline size-4 align-[-0.1em]"
                            />
                          </a>
                        </th>
                      );
                    }
                    if (column.key === 'notes') {
                      return (
                        <td key={column.key} className={`${cell} min-w-[19rem]`}>
                          <PlaceNotes notes={place.notes} />
                        </td>
                      );
                    }
                    const value = isText(column.key) ? place[column.key] : undefined;
                    return (
                      <td key={column.key} className={cell}>
                        {!value ? (
                          <span className="text-muted" aria-hidden="true">
                            —
                          </span>
                        ) : column.key === 'setting' ? (
                          <Tag tone="accent">
                            <KidsGlyph name="house" className="text-accent size-3.5" />
                            {value}
                          </Tag>
                        ) : column.key === 'cost' ? (
                          <span className="font-display text-xl font-extrabold tracking-tight whitespace-nowrap">
                            {value}
                          </span>
                        ) : (
                          <span className="font-semibold whitespace-nowrap">{value}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ───────────── Narrow screens: one card per place ───────────── */}
      <ul className="grid gap-5 xl:hidden" data-reveal-stagger>
        {places.map((place) => (
          <li key={place.name.label} hidden={!isVisible(place)}>
            <article
              className="glow-ring border-line bg-surface-raised relative overflow-hidden rounded-3xl border shadow-[var(--shadow-md)]"
              data-spotlight
            >
              <div className="h-1.5 bg-[image:var(--gradient-brand)]" aria-hidden="true" />
              <span
                className="text-accent-2 absolute top-5 right-5 grid size-11 place-items-center rounded-2xl bg-[color-mix(in_oklch,var(--accent-2)_12%,transparent)]"
                aria-hidden="true"
              >
                <KidsGlyph name="party" className="size-5" />
              </span>

              <div className="grid gap-6 p-4 sm:p-7 md:grid-cols-[1.15fr_1fr] md:gap-8">
                <div>
                  <a
                    href={place.where.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link link-underline text-muted inline-flex items-center gap-1 text-xs font-semibold tracking-wide uppercase"
                  >
                    <Icon name="map-pin" className="size-3.5 shrink-0" />
                    {place.where.label}
                  </a>
                  <h3 className="font-display pr-14 text-2xl leading-tight font-bold tracking-tight">
                    <a
                      href={place.name.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link link-underline"
                    >
                      {place.name.label}
                      <Icon
                        name="arrow-up-right"
                        className="ml-0.5 inline size-5 align-[-0.12em]"
                      />
                    </a>
                  </h3>

                  <dl className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {tiles.map((column) => {
                      const value = isText(column.key) ? place[column.key] : undefined;
                      return (
                        <div
                          key={column.key}
                          className={[
                            'rounded-2xl p-3.5',
                            column.key === 'cost'
                              ? 'bg-[color-mix(in_oklch,var(--accent)_11%,var(--surface-raised))]'
                              : 'bg-surface-sunken',
                          ].join(' ')}
                        >
                          <dt className="text-muted flex items-start gap-1.5 font-mono text-[0.65rem] leading-snug font-semibold tracking-[0.1em] uppercase">
                            <ColumnGlyph
                              column={column.key}
                              className="text-accent mt-px size-3.5 shrink-0"
                            />
                            <span>
                              {column.label}
                              {column.footnote && (
                                <a
                                  href={`#${noteId}`}
                                  className="text-accent-2 ml-0.5 text-xs leading-none font-bold"
                                >
                                  {column.footnote}
                                  <span className="sr-only"> ({labels.seeNoteList})</span>
                                </a>
                              )}
                            </span>
                          </dt>
                          <dd
                            className={[
                              'mt-1.5 whitespace-nowrap',
                              column.key === 'cost'
                                ? 'font-display text-lg font-extrabold tracking-tight'
                                : 'font-semibold',
                            ].join(' ')}
                          >
                            {value ?? (
                              <span className="text-muted" aria-hidden="true">
                                —
                              </span>
                            )}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>

                {notesColumn && (
                  <dl className="border-line border-t pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                    <div>
                      <dt className="text-muted flex items-center gap-1.5 font-mono text-[0.65rem] font-semibold tracking-[0.1em] uppercase">
                        <ColumnGlyph column="notes" className="text-accent size-3.5" />
                        {notesColumn.label}
                      </dt>
                      <dd className="mt-3">
                        <PlaceNotes notes={place.notes} />
                      </dd>
                    </div>
                  </dl>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>

      {shown === 0 && (
        <div className="border-line-strong mt-10 rounded-3xl border border-dashed p-10 text-center">
          <p className="font-display text-xl font-semibold">{labels.empty}</p>
          <button
            type="button"
            onClick={reset}
            className="text-link link-underline mt-3 text-sm font-semibold"
          >
            {labels.clear}
          </button>
        </div>
      )}
    </div>
  );
}

interface ChipRowProps {
  label: string;
  allLabel: string;
  value: string;
  options: { value: string; label: string; count: number }[];
  allCount: number;
  onChange: (value: string) => void;
}

function ChipRow({ label, allLabel, value, options, allCount, onChange }: ChipRowProps) {
  return (
    <fieldset className="mt-3 min-w-0">
      <legend className="sr-only">{label}</legend>
      <div className="-mx-1 flex [scrollbar-width:none] gap-2 overflow-x-auto px-1 pb-1">
        {[{ value: 'all', label: allLabel, count: allCount }, ...options].map((option) => {
          const active = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={active}
              className={[
                'inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-[var(--ease-spring)] active:scale-95',
                active
                  ? 'text-on-accent border-transparent bg-[image:var(--gradient-brand)] bg-[length:200%_auto] shadow-[0_6px_18px_-8px_color-mix(in_oklch,var(--accent)_80%,transparent)]'
                  : 'border-line-strong bg-surface-raised text-muted hover:text-fg hover:border-accent',
              ].join(' ')}
            >
              {option.label}
              <span
                className={['font-mono text-[0.7rem]', active ? 'opacity-80' : 'text-muted'].join(
                  ' ',
                )}
              >
                {option.count}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function PlaceNotes({ notes }: { notes: KidsNoteList[] }) {
  return (
    <div className="space-y-4">
      {notes.map((list) => (
        <div key={list.label}>
          <p className="text-fg text-[0.8rem] font-bold">{list.label}</p>
          {list.kind === 'info' ? (
            <ul className="text-muted mt-2 space-y-1 text-sm">
              {list.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {list.items.map((item) =>
                list.kind === 'times' ? (
                  <li key={item}>
                    <Tag tone="teal" className="font-mono whitespace-nowrap">
                      <KidsGlyph name="clock" className="text-accent-4 size-3.5 shrink-0" />
                      {item}
                    </Tag>
                  </li>
                ) : (
                  <li key={item}>
                    <Tag tone="amber" className="whitespace-nowrap">
                      <Icon
                        name="check"
                        className="text-accent-3 size-3.5 shrink-0"
                        strokeWidth={3}
                      />
                      {item}
                    </Tag>
                  </li>
                ),
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function Tag({
  tone,
  className,
  children,
}: {
  tone: 'neutral' | 'accent' | 'amber' | 'teal';
  className?: string;
  children: ReactNode;
}) {
  const toneVar = { neutral: '', accent: '--accent', amber: '--accent-3', teal: '--accent-4' }[
    tone
  ];
  return (
    <span
      className={[
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        tone === 'neutral'
          ? 'border-line bg-surface-sunken text-muted'
          : 'text-fg border-[color-mix(in_oklch,var(--tag)_30%,transparent)] bg-[color-mix(in_oklch,var(--tag)_12%,transparent)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={toneVar ? ({ '--tag': `var(${toneVar})` } as CSSProperties) : undefined}
    >
      {children}
    </span>
  );
}

const ICON_PATHS = {
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3',
  'map-pin': 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  'arrow-up-right': 'M7 17 17 7M8 7h9v9',
  check: 'M20 6 9 17l-5-5',
} as const;

function Icon({
  name,
  className = 'size-5',
  strokeWidth = 2,
}: {
  name: keyof typeof ICON_PATHS;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

const KIDS_GLYPH_PATHS = {
  house: 'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z',
  euro: 'M4 10h12M4 14h9M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2',
  cake: 'M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1M2 21h20M7 8v3M12 8v3M17 8v3M7 4h.01M12 4h.01M17 4h.01',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 6v6l4 2',
  list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  party:
    'M5.8 11.3 2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10M22 13l-.82-.33c-.86-.34-1.82.2-1.98 1.11-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98-.7.11-1.22.72-1.22 1.43V7M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z',
} as const;

function KidsGlyph({
  name,
  className = 'size-4',
}: {
  name: keyof typeof KIDS_GLYPH_PATHS;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={KIDS_GLYPH_PATHS[name]} />
    </svg>
  );
}

function ColumnGlyph({ column, className }: { column: KidsColumnKey; className?: string }) {
  if (column === 'where') return <Icon name="map-pin" className={className} />;
  if (column === 'name') return <Icon name="arrow-up-right" className={className} />;
  if (column === 'setting') return <KidsGlyph name="house" className={className} />;
  if (column === 'cost') return <KidsGlyph name="euro" className={className} />;
  if (column === 'ages') return <KidsGlyph name="cake" className={className} />;
  if (column === 'children') return <UsersIcon className={className} />;
  if (column === 'duration') return <KidsGlyph name="clock" className={className} />;
  return <KidsGlyph name="list" className={className} />;
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/** Every distinct `setting` value, in the order it first appears. */
function distinctSettings(places: KidsPlace[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const place of places) {
    if (!seen.has(place.setting)) {
      seen.add(place.setting);
      result.push(place.setting);
    }
  }
  return result;
}

/** Lower-case and strip accents, so "sao bento" finds "São Bento". */
function normalise(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}

/** Place → everything searchable about it, normalised. */
function buildIndex(places: KidsPlace[]): Map<KidsPlace, string> {
  const index = new Map<KidsPlace, string>();
  for (const place of places) {
    const text = [
      place.where.label,
      place.name.label,
      place.setting,
      place.cost,
      place.ages,
      place.children,
      place.duration,
      ...place.notes.flatMap((list) => [list.label, ...list.items]),
    ]
      .filter(Boolean)
      .join(' ');
    index.set(place, normalise(text));
  }
  return index;
}

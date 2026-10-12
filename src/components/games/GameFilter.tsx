import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { Game, GameImageUrl, GameSetting, GuideCategory } from '../../data/types';

type GuideGame = Game<GameImageUrl>;

/** The island's own copy, translated by the route. */
export interface GameFilterLabels {
  search: string;
  placeholder: string;
  category: string;
  setting: string;
  all: string;
  indoor: string;
  outdoor: string;
  /** With `{shown}` and `{total}` placeholders. */
  count: string;
  empty: string;
  clear: string;
  /** A category's game count, with a `{count}` placeholder. */
  game: string;
  games: string;
  /** Screen-reader names of the card's summary facts. */
  players: string;
  age: string;
  duration: string;
  where: string;
  howToPlay: string;
  materials: string;
  setup: string;
  rules: string;
  tips: string;
  /** Leads the card's source links. */
  sources: string;
  /** Leads the title of the video a game was collected from. */
  originalName: string;
}

interface Props {
  categories: GuideCategory[];
  labels: GameFilterLabels;
}

/**
 * Search + category + indoor/outdoor filter over the group games guide.
 * Hydrated with `client:visible`: every category and card renders
 * server-side, and each card's how-to-play sheet is a native `<details>`, so
 * the whole guide reads with JS disabled.
 *
 * Filtering toggles the `hidden` attribute rather than unmounting, so anchors
 * keep their targets and the scroll-reveal state that `motion.ts` put on each
 * card survives. Following a jump link while a filter hides its target clears
 * the filters first.
 */
export default function GameFilter({ categories, labels }: Props) {
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState('all');
  const [setting, setSetting] = useState<'all' | GameSetting>('all');
  const pendingScroll = useRef<string | null>(null);

  const index = useMemo(() => buildIndex(categories), [categories]);
  const total = index.size;

  const needle = normalise(query.trim());
  const isVisible = (game: GuideGame, cid: string) => {
    if (categoryId !== 'all' && cid !== categoryId) return false;
    if (setting !== 'all' && !game.where.includes(setting)) return false;
    return !needle || (index.get(game.id) ?? '').includes(needle);
  };

  let shown = 0;
  for (const category of categories)
    for (const game of category.games) if (isVisible(game, category.id)) shown += 1;

  const filtering = needle !== '' || categoryId !== 'all' || setting !== 'all';

  const reset = () => {
    setQuery('');
    setCategoryId('all');
    setSetting('all');
  };

  // A jump link whose target is filtered out: clear the filters, then scroll
  // once it is shown again.
  useEffect(() => {
    if (!filtering) return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
      const id = decodeURIComponent(link?.getAttribute('href')?.slice(1) ?? '');
      const target = id ? document.getElementById(id) : null;
      if (!target?.closest('[data-game-guide]') || target.offsetParent !== null) return;
      event.preventDefault();
      pendingScroll.current = id;
      history.pushState(null, '', `#${id}`);
      reset();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [filtering]);

  useEffect(() => {
    if (!pendingScroll.current) return;
    document.getElementById(pendingScroll.current)?.scrollIntoView({ block: 'start' });
    pendingScroll.current = null;
  });

  const countOf = (value: GameSetting) =>
    categories.reduce(
      (sum, category) => sum + category.games.filter((game) => game.where.includes(value)).length,
      0,
    );

  return (
    <div data-game-guide>
      <div className="glass border-line sticky top-[5.25rem] z-30 -mx-2 mb-10 rounded-3xl border p-3 shadow-[var(--shadow-md)] sm:mx-0 sm:p-4">
        <div className="flex items-center gap-3">
          <label className="relative block flex-1">
            <span className="sr-only">{labels.search}</span>
            <svg
              className="text-muted pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3" />
            </svg>
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
          label={labels.category}
          allLabel={labels.all}
          value={categoryId}
          options={categories.map((category) => ({
            value: category.id,
            label: `${category.emoji} ${category.short}`,
            count: category.games.length,
          }))}
          allCount={total}
          onChange={setCategoryId}
        />
        <ChipRow
          label={labels.setting}
          allLabel={labels.all}
          small
          value={setting}
          options={[
            { value: 'indoor', label: labels.indoor, count: countOf('indoor') },
            { value: 'outdoor', label: labels.outdoor, count: countOf('outdoor') },
          ]}
          allCount={total}
          onChange={(value) => setSetting(value as 'all' | GameSetting)}
        />
        <p aria-live="polite" className="text-muted mt-2 font-mono text-xs sm:hidden">
          {labels.count.replace('{shown}', String(shown)).replace('{total}', String(total))}
        </p>
      </div>

      {categories.map((category, categoryIndex) => {
        const categoryShown = category.games.filter((game) => isVisible(game, category.id));
        return (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-title`}
            hidden={categoryShown.length === 0}
            className="mb-16 scroll-mt-[8rem] last:mb-0 sm:mb-24"
          >
            <header className="border-line mb-8 flex flex-wrap items-end gap-x-6 gap-y-3 border-b pb-6">
              <span
                className="text-gradient font-display text-6xl leading-none font-extrabold tracking-tighter sm:text-8xl"
                aria-hidden="true"
              >
                {String(categoryIndex + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <p className="eyebrow">
                  <span aria-hidden="true">{category.emoji} · </span>
                  {(category.games.length === 1 ? labels.game : labels.games).replace(
                    '{count}',
                    String(category.games.length),
                  )}
                </p>
                <h2
                  id={`${category.id}-title`}
                  className="font-display mt-1 text-3xl font-bold tracking-tight text-balance sm:text-5xl"
                >
                  {category.title}
                </h2>
              </div>
              <div className="w-full">
                <p className="text-muted max-w-3xl text-lg leading-relaxed text-pretty">
                  {category.intro}
                </p>
              </div>
            </header>

            <div className="grid items-start gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {category.games.map((game, index) => (
                <GameCard
                  key={game.id}
                  game={game}
                  labels={labels}
                  hidden={!isVisible(game, category.id)}
                  label={filtering ? `${category.emoji} ${category.short}` : undefined}
                  stagger={index % 3}
                />
              ))}
            </div>
          </section>
        );
      })}

      {shown === 0 && (
        <div className="border-line-strong rounded-3xl border border-dashed p-10 text-center">
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

interface GameCardProps {
  game: GuideGame;
  labels: GameFilterLabels;
  hidden: boolean;
  /** Category badge on the illustration — shown while filtering, when categories mix. */
  label?: string;
  /** Position in its row, for the scroll-reveal cascade. */
  stagger: number;
}

function GameCard({ game, labels, hidden, label, stagger }: GameCardProps) {
  const facts = [
    { icon: '👥', name: labels.players, value: game.players },
    { icon: '🎂', name: labels.age, value: game.age },
    { icon: '⏱', name: labels.duration, value: game.duration },
    { icon: '📍', name: labels.where, value: game.setting },
  ];
  const lists = [
    { title: labels.materials, items: game.materials },
    { title: labels.setup, items: game.setup },
  ];

  return (
    <article
      id={game.id}
      hidden={hidden}
      data-reveal
      data-spotlight
      style={{ '--stagger': stagger } as CSSProperties}
      className="group glow-ring border-line bg-surface-raised relative flex scroll-mt-[8rem] flex-col overflow-hidden rounded-3xl border shadow-[var(--shadow-sm)] transition-[translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
    >
      <div className="border-line bg-surface-sunken relative aspect-[18/13] overflow-hidden border-b">
        <img
          src={game.image.src}
          srcSet={game.image.srcSet || undefined}
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
          width={game.image.width}
          height={game.image.height}
          alt={game.image.alt}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
        />
        {label && (
          <span className="glass text-fg border-line absolute top-3 left-3 rounded-full border px-2.5 py-1 font-mono text-[0.68rem] font-semibold tracking-[0.12em] uppercase">
            {label}
          </span>
        )}
        <span
          className="text-on-accent absolute top-3 right-3 grid min-w-9 place-items-center rounded-full bg-[image:var(--gradient-brand)] px-2 py-1 font-mono text-xs font-bold shadow-[var(--shadow-md)]"
          aria-hidden="true"
        >
          {String(game.number).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl leading-snug font-bold tracking-tight text-balance">
          {game.title}
        </h3>
        <p className="text-muted mt-1 text-sm italic">
          {labels.originalName} {game.originalName}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-2">
          {facts.map((fact) => (
            <div
              key={fact.name}
              className="border-line bg-surface-sunken flex min-w-0 items-start gap-2 rounded-2xl border px-3 py-2 text-sm leading-snug"
            >
              <dt className="shrink-0">
                <span aria-hidden="true">{fact.icon}</span>
                <span className="sr-only">{fact.name}</span>
              </dt>
              <dd className="min-w-0 text-pretty">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <details className="group/sheet border-line mt-5 border-t pt-4">
          <summary className="text-link flex cursor-pointer list-none items-center justify-between gap-3 font-semibold [&::-webkit-details-marker]:hidden">
            {labels.howToPlay}
            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open/sheet:rotate-180"
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
          </summary>

          <div className="mt-4 flex flex-col gap-5 text-[0.95rem] leading-relaxed">
            {game.note && (
              <p className="text-muted rounded-2xl border border-dashed border-[var(--border-strong)] px-3 py-2 text-sm italic">
                {game.note}
              </p>
            )}
            {lists.map((list) => (
              <SheetList key={list.title} title={list.title} items={list.items} />
            ))}
            <div>
              <SheetTitle>{labels.rules}</SheetTitle>
              <ol className="flex flex-col gap-2">
                {game.rules.map((rule, step) => (
                  <li key={rule} className="flex gap-3">
                    <span
                      className="text-on-accent mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-brand)] font-mono text-xs font-bold"
                      aria-hidden="true"
                    >
                      {step + 1}
                    </span>
                    <span className="min-w-0 text-pretty">{rule}</span>
                  </li>
                ))}
              </ol>
            </div>
            <SheetList title={labels.tips} items={game.tips} />
            {game.sources.length > 0 && (
              <p className="text-muted border-line border-t pt-4 text-sm">
                <span aria-hidden="true">🎬 </span>
                {labels.sources}{' '}
                {game.sources.map((source, position) => (
                  <span key={source.href}>
                    {position > 0 && <span aria-hidden="true"> · </span>}
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link link-underline font-semibold"
                    >
                      {source.label}
                    </a>
                  </span>
                ))}
              </p>
            )}
          </div>
        </details>
      </div>
    </article>
  );
}

function SheetTitle({ children }: { children: string }) {
  return (
    <h4 className="text-muted mb-2 font-mono text-[0.7rem] font-semibold tracking-[0.14em] uppercase">
      {children}
    </h4>
  );
}

function SheetList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <SheetTitle>{title}</SheetTitle>
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              className="bg-accent-2 mt-[0.6em] inline-block size-1.5 shrink-0 rounded-full"
              aria-hidden="true"
            />
            <span className="min-w-0 text-pretty">{item}</span>
          </li>
        ))}
      </ul>
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
  small?: boolean;
}

function ChipRow({
  label,
  allLabel,
  value,
  options,
  allCount,
  onChange,
  small = false,
}: ChipRowProps) {
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
                'inline-flex shrink-0 items-center gap-2 rounded-full border font-medium whitespace-nowrap transition-all duration-300 ease-[var(--ease-spring)] active:scale-95',
                small ? 'px-3 py-1 text-xs' : 'px-3.5 py-1.5 text-sm',
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

/** Lower-case and strip accents, so "balao" finds "balão". */
function normalise(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}

/** Game id → everything searchable about it, normalised. */
function buildIndex(categories: GuideCategory[]): Map<string, string> {
  const index = new Map<string, string>();
  for (const category of categories) {
    for (const game of category.games) {
      const text = [
        category.title,
        category.short,
        game.title,
        game.originalName,
        game.players,
        game.age,
        game.duration,
        game.setting,
        game.note,
        ...game.materials,
        ...game.setup,
        ...game.rules,
        ...game.tips,
        ...game.sources.map((source) => source.label),
      ]
        .filter(Boolean)
        .join(' ');
      index.set(game.id, normalise(text));
    }
  }
  return index;
}

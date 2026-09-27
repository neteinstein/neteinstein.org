import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { GuideGroup, Place, PlacePhotoUrl, Venue } from '../data/types';

type GuidePlace = Place<PlacePhotoUrl>;

interface Props {
  groups: GuideGroup[];
}

/**
 * Search + category filter over the Porto guide. Hydrated with
 * `client:visible`: every group, subgroup and card renders server-side, so the
 * guide reads (and its jump links land) with JS disabled.
 *
 * Filtering toggles the `hidden` attribute rather than unmounting, so anchors
 * keep their targets and the scroll-reveal state that `motion.ts` put on each
 * card survives. Following a jump link while a filter hides its target clears
 * the filters first.
 */
export default function PlaceFilter({ groups }: Props) {
  const [query, setQuery] = useState('');
  const [groupId, setGroupId] = useState('all');
  const [subgroupId, setSubgroupId] = useState('all');
  const pendingScroll = useRef<string | null>(null);

  const index = useMemo(() => buildIndex(groups), [groups]);
  const total = index.size;

  const needle = normalise(query.trim());
  const isVisible = (place: GuidePlace, gid: string, sid?: string) => {
    if (groupId !== 'all' && gid !== groupId) return false;
    if (subgroupId !== 'all' && sid !== subgroupId) return false;
    return !needle || (index.get(place.id) ?? '').includes(needle);
  };

  let shown = 0;
  for (const group of groups)
    for (const { place, sid } of placesOf(group)) if (isVisible(place, group.id, sid)) shown += 1;

  const filtering = needle !== '' || groupId !== 'all';
  const selectedGroup = groups.find((group) => group.id === groupId);

  const reset = () => {
    setQuery('');
    setGroupId('all');
    setSubgroupId('all');
  };

  // A jump link (in the page's jump list or a group header) whose target is
  // filtered out: clear the filters, then scroll once it is shown again.
  useEffect(() => {
    if (!filtering) return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
      const id = decodeURIComponent(link?.getAttribute('href')?.slice(1) ?? '');
      const target = id ? document.getElementById(id) : null;
      if (!target?.closest('[data-place-guide]') || target.offsetParent !== null) return;
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

  return (
    <div data-place-guide>
      <div className="glass border-line sticky top-[5.25rem] z-30 -mx-2 mb-10 rounded-3xl border p-3 shadow-[var(--shadow-md)] sm:mx-0 sm:p-4">
        <div className="flex items-center gap-3">
          <label className="relative block flex-1">
            <span className="sr-only">Search the guide</span>
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
              placeholder="Search a dish, a place, a neighbourhood…"
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
          label="Category"
          value={groupId}
          options={groups.map((group) => ({
            value: group.id,
            label: group.short ?? group.title,
            count: countOf(group),
          }))}
          allCount={total}
          onChange={(value) => {
            setGroupId(value);
            setSubgroupId('all');
          }}
        />
        {selectedGroup?.subgroups && selectedGroup.subgroups.length > 1 && (
          <ChipRow
            label="Section"
            small
            value={subgroupId}
            options={selectedGroup.subgroups.map((subgroup) => ({
              value: subgroup.id,
              label: subgroup.title,
              count: subgroup.places.length,
            }))}
            allCount={countOf(selectedGroup)}
            onChange={setSubgroupId}
          />
        )}
        <p aria-live="polite" className="text-muted mt-2 font-mono text-xs sm:hidden">
          {shown} of {total} places
        </p>
      </div>

      {groups.map((group, groupIndex) => {
        const entries = placesOf(group);
        const groupShown = entries.filter(({ place, sid }) => isVisible(place, group.id, sid));
        return (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-title`}
            hidden={groupShown.length === 0}
            className="mb-16 scroll-mt-[8rem] last:mb-0 sm:mb-24"
          >
            <header className="border-line mb-8 flex flex-wrap items-end gap-x-6 gap-y-3 border-b pb-6">
              <span
                className="text-gradient font-display text-6xl leading-none font-extrabold tracking-tighter sm:text-8xl"
                aria-hidden="true"
              >
                {String(groupIndex + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <p className="eyebrow">
                  {entries.length} {entries.length === 1 ? 'place' : 'places'}
                </p>
                <h2
                  id={`${group.id}-title`}
                  className="font-display mt-1 text-3xl font-bold tracking-tight text-balance sm:text-5xl"
                >
                  {group.title}
                </h2>
              </div>
              {group.subgroups && group.subgroups.length > 1 && (
                <nav aria-label={`${group.title} sections`} className="w-full">
                  <ul className="flex flex-wrap gap-2">
                    {group.subgroups.map((subgroup) => (
                      <li key={subgroup.id}>
                        <a
                          href={`#${subgroup.id}`}
                          className="border-line bg-surface-raised hover:border-accent text-fg inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium transition-colors"
                        >
                          {subgroup.title}
                          <span className="text-muted font-mono text-xs">
                            {subgroup.places.length}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </header>

            {group.places && (
              <PlaceGrid
                places={group.places}
                visible={(place) => isVisible(place, group.id)}
                headingLevel={3}
                label={filtering ? (group.short ?? group.title) : undefined}
              />
            )}

            {group.subgroups?.map((subgroup) => {
              const subShown = subgroup.places.filter((place) =>
                isVisible(place, group.id, subgroup.id),
              ).length;
              return (
                <div
                  key={subgroup.id}
                  id={subgroup.id}
                  hidden={subShown === 0}
                  className="mb-14 scroll-mt-[8rem] last:mb-0"
                >
                  <h3 className="font-display mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    <span
                      className="bg-accent-2 inline-block size-2.5 shrink-0 rounded-full"
                      aria-hidden="true"
                    />
                    {subgroup.title}
                    <span
                      className="h-px flex-1 bg-[linear-gradient(to_right,var(--border-strong),transparent)]"
                      aria-hidden="true"
                    />
                  </h3>
                  <PlaceGrid
                    places={subgroup.places}
                    visible={(place) => isVisible(place, group.id, subgroup.id)}
                    headingLevel={4}
                    label={filtering ? subgroup.title : undefined}
                  />
                </div>
              );
            })}
          </section>
        );
      })}

      {shown === 0 && (
        <div className="border-line-strong rounded-3xl border border-dashed p-10 text-center">
          <p className="font-display text-xl font-semibold">Nothing matches those filters.</p>
          <button
            type="button"
            onClick={reset}
            className="text-link link-underline mt-3 text-sm font-semibold"
          >
            Clear the search
          </button>
        </div>
      )}
    </div>
  );
}

interface PlaceGridProps {
  places: GuidePlace[];
  visible: (place: GuidePlace) => boolean;
  headingLevel: 3 | 4;
  /** Category badge on each photo — shown while filtering, when cards of several sections mix. */
  label?: string;
}

function PlaceGrid({ places, visible, headingLevel, label }: PlaceGridProps) {
  // A long list opens with a wide card, when its first entry has notes to fill it.
  const feature = places.length >= 5 && (places[0]?.notes?.length ?? 0) > 0;
  return (
    <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {places.map((place, index) => (
        <PlaceCard
          key={place.id}
          place={place}
          hidden={!visible(place)}
          headingLevel={headingLevel}
          label={label}
          featured={feature && index === 0}
          stagger={index % 3}
        />
      ))}
    </div>
  );
}

interface PlaceCardProps {
  place: GuidePlace;
  hidden: boolean;
  headingLevel: 3 | 4;
  label?: string;
  featured: boolean;
  /** Position in its row, for the scroll-reveal cascade. */
  stagger: number;
}

const HALF_SIZES = '(min-width: 1024px) 12rem, (min-width: 640px) 25vw, 50vw';

function PlaceCard({ place, hidden, headingLevel, label, featured, stagger }: PlaceCardProps) {
  const Heading = `h${headingLevel}` as 'h3' | 'h4';
  const [lead] = place.venues;
  const sizes = featured
    ? '(min-width: 1024px) 38rem, (min-width: 640px) 50vw, 100vw'
    : '(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw';

  return (
    <article
      id={place.id}
      hidden={hidden}
      data-reveal
      data-spotlight
      style={{ '--stagger': stagger } as CSSProperties}
      className={[
        'group glow-ring border-line bg-surface-raised relative flex scroll-mt-[8rem] flex-col overflow-hidden rounded-3xl border shadow-[var(--shadow-sm)] transition-[translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]',
        featured ? 'lg:col-span-2 lg:flex-row' : '',
      ].join(' ')}
    >
      <div
        className={[
          'border-line bg-surface-sunken relative grid aspect-[4/3] shrink-0 overflow-hidden border-b',
          place.photos.length > 1 ? 'grid-cols-2 gap-0.5' : '',
          featured ? 'lg:aspect-auto lg:min-h-80 lg:w-[55%] lg:border-r lg:border-b-0' : '',
        ].join(' ')}
      >
        {place.photos.map((photo) => (
          <img
            key={photo.src}
            src={photo.src}
            srcSet={photo.srcSet || undefined}
            sizes={place.photos.length > 1 ? HALF_SIZES : sizes}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
          />
        ))}
        {label && (
          <span className="glass text-fg border-line absolute top-3 left-3 rounded-full border px-2.5 py-1 font-mono text-[0.68rem] font-semibold tracking-[0.12em] uppercase">
            {label}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Heading
          className={[
            'font-display leading-snug font-bold tracking-tight',
            featured ? 'text-2xl sm:text-3xl' : 'text-xl',
          ].join(' ')}
        >
          {place.title ?? (lead && <VenueName venue={lead} />)}
        </Heading>
        {place.subtitle && <p className="text-muted mt-1 text-sm italic">{place.subtitle}</p>}
        {place.notes?.map((note) => (
          <p key={note} className="text-muted mt-2.5 text-[0.95rem] leading-relaxed text-pretty">
            {note}
          </p>
        ))}

        {place.title && (
          <ul className="mt-auto flex flex-col gap-2.5 pt-5">
            {place.venues.map((venue) => (
              <li key={venue.name}>
                {venue.joiner && (
                  <span className="text-muted mb-2.5 flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[0.14em] uppercase">
                    <span className="bg-line h-px flex-1" aria-hidden="true" />
                    {venue.joiner}
                    <span className="bg-line h-px flex-1" aria-hidden="true" />
                  </span>
                )}
                <span className="flex items-start gap-2.5">
                  <svg
                    className="text-accent-2 mt-1 size-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                  <span className="min-w-0">
                    <VenueName venue={venue} />
                    {venue.note && (
                      <span className="text-muted block text-sm italic">{venue.note}</span>
                    )}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function VenueName({ venue }: { venue: Venue }) {
  if (!venue.href) return <span className="font-semibold">{venue.name}</span>;
  return (
    <a
      href={venue.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-link link-underline relative z-10 font-semibold"
    >
      {venue.name}
      <svg
        className="ml-1 inline size-3.5 align-[-0.1em]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </a>
  );
}

interface ChipRowProps {
  label: string;
  value: string;
  options: { value: string; label: string; count: number }[];
  allCount: number;
  onChange: (value: string) => void;
  small?: boolean;
}

function ChipRow({ label, value, options, allCount, onChange, small = false }: ChipRowProps) {
  return (
    <fieldset className="mt-3 min-w-0">
      <legend className="sr-only">{label}</legend>
      <div className="-mx-1 flex [scrollbar-width:none] gap-2 overflow-x-auto px-1 pb-1">
        {[{ value: 'all', label: 'All', count: allCount }, ...options].map((option) => {
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

/** Every place of a group with the id of the subgroup it sits in (if any). */
function placesOf(group: GuideGroup): { place: GuidePlace; sid?: string }[] {
  return [
    ...(group.places ?? []).map((place) => ({ place })),
    ...(group.subgroups ?? []).flatMap((subgroup) =>
      subgroup.places.map((place) => ({ place, sid: subgroup.id })),
    ),
  ];
}

function countOf(group: GuideGroup): number {
  return placesOf(group).length;
}

/** Lower-case and strip accents, so "sao bento" finds "São Bento". */
function normalise(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}

/** Place id → everything searchable about it, normalised. */
function buildIndex(groups: GuideGroup[]): Map<string, string> {
  const index = new Map<string, string>();
  for (const group of groups) {
    for (const { place, sid } of placesOf(group)) {
      const subgroup = group.subgroups?.find((candidate) => candidate.id === sid);
      const text = [
        group.title,
        subgroup?.title,
        place.title,
        place.subtitle,
        ...(place.notes ?? []),
        ...place.venues.flatMap((venue) => [venue.name, venue.note]),
      ]
        .filter(Boolean)
        .join(' ');
      index.set(place.id, normalise(text));
    }
  }
  return index;
}

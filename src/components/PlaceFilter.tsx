import { useMemo, useState } from 'react';
import type { Place, PlaceArea, PlaceCategory } from '../data/types';

interface Props {
  places: Place[];
  categoryLabels: Record<PlaceCategory, string>;
  areaLabels: Record<PlaceArea, string>;
  dietLabels: Record<string, string>;
}

type CategoryFilter = PlaceCategory | 'all';
type AreaFilter = PlaceArea | 'all';

/**
 * Search + facet filter over the Porto guide. Hydrated with `client:visible`:
 * the list renders server-side and stays readable with JS disabled, so this
 * only needs to be interactive once it scrolls into view.
 *
 * Facets are derived from the data rather than hardcoded, so adding a place in
 * a new area or category needs no change here.
 */
export default function PlaceFilter({ places, categoryLabels, areaLabels, dietLabels }: Props) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [area, setArea] = useState<AreaFilter>('all');

  const categories = useMemo(() => [...new Set(places.map((place) => place.category))], [places]);
  const areas = useMemo(() => [...new Set(places.map((place) => place.area))], [places]);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return places.filter((place) => {
      if (category !== 'all' && place.category !== category) return false;
      if (area !== 'all' && place.area !== area) return false;
      if (!needle) return true;
      return (
        place.name.toLowerCase().includes(needle) ||
        (place.notes?.toLowerCase().includes(needle) ?? false)
      );
    });
  }, [places, query, category, area]);

  if (places.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-[var(--border)] p-6 text-[var(--text-muted)]">
        This guide has not been migrated from the original site yet.
      </p>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4">
        <label className="block">
          <span className="sr-only">Search places</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or note…"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-muted)]"
          />
        </label>

        <ChipRow
          legend="Category"
          value={category}
          options={categories.map((value) => ({ value, label: categoryLabels[value] }))}
          onChange={(value) => setCategory(value as CategoryFilter)}
        />
        <ChipRow
          legend="Area"
          value={area}
          options={areas.map((value) => ({ value, label: areaLabels[value] }))}
          onChange={(value) => setArea(value as AreaFilter)}
        />
      </div>

      <p aria-live="polite" className="mb-4 text-sm text-[var(--text-muted)]">
        {visible.length} of {places.length} places
      </p>

      <ul className="grid gap-4 sm:grid-cols-2">
        {visible.map((place) => (
          <li
            key={`${place.name}-${place.area}`}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] p-4"
          >
            <h3 className="font-display font-semibold">
              {place.url ? (
                <a
                  href={place.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--link)]"
                >
                  {place.name}
                </a>
              ) : (
                place.name
              )}
            </h3>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {categoryLabels[place.category]} · {areaLabels[place.area]}
            </p>
            {place.notes && <p className="mt-2 text-sm">{place.notes}</p>}
            {place.diets && place.diets.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {place.diets.map((diet) => (
                  <li
                    key={diet}
                    className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--text-muted)]"
                  >
                    {dietLabels[diet] ?? diet}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <p className="rounded-lg border border-dashed border-[var(--border)] p-6 text-[var(--text-muted)]">
          Nothing matches those filters.
        </p>
      )}
    </div>
  );
}

interface ChipRowProps {
  legend: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

function ChipRow({ legend, value, options, onChange }: ChipRowProps) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium text-[var(--text-muted)]">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {[{ value: 'all', label: 'All' }, ...options].map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={value === option.value}
            className={[
              'rounded-full border px-3 py-1.5 text-sm transition-colors',
              value === option.value
                ? 'border-[var(--link)] text-[var(--link)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]',
            ].join(' ')}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

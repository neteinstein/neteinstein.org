# Working in this repo

Static Astro 7 site with React 19 islands, deployed to GitHub Pages by GitHub
Actions. It replaces a Google Sites original, so **preserving URLs is a hard
requirement**.

## Conventions

- **Node 22.12+.** Astro 7 will not run on older versions.
- **Astro first, React only where state is genuinely needed.** There are exactly
  three islands — `ThemeToggle` (`client:load`), `MobileNav` (`client:idle`) and
  `PlaceFilter` (`client:visible`). Everything else is zero-JS `.astro`, plus
  small vanilla `<script>`s for pure DOM effects (`src/scripts/motion.ts`,
  `VideoEmbed`, the home page's cookie button). Do not reach for a React
  component because it feels familiar; check whether an `.astro` component does
  the job first.
- **Content is data, not markup.** Prose goes in `src/content/pages/*.mdx`
  (schema in `src/content.config.ts`); structured lists go in `src/data/*.ts`
  with shapes in `src/data/types/<area>.ts` (re-exported by
  `src/data/types/index.ts`). Never inline copy into a route.
- **Annotate data exports, don't `satisfies` them.** `export const talks: Talk[]`
  widens correctly; `satisfies Talk[]` narrows to literals and drops optional
  fields from the inferred type.
- **`src/config/site.ts` owns navigation and site metadata.** Header, Footer,
  sitemap and JSON-LD all read from it. Adding a nav entry anywhere else is a
  bug.
- **Every internal link goes through `localHref()`** from `useI18n(Astro)`
  (`src/i18n/index.ts`), which wraps `withBase()` (`src/lib/url.ts`) and adds
  the locale prefix on translated pages. The site must also work under the
  `*.github.io/<repo>/` preview path; MDX links are rewritten by
  `rehype-base-links`, and `npm run check:base` fails any link that skipped
  the helper.
- **Every visible string is translatable.** English is written where it
  already lives; Portuguese is a catalogue keyed by the English text in
  `src/i18n/pt/<area>.ts`. In components, wrap literals in `t()` and pass data
  through `localize()` (both from `useI18n(Astro)`); islands get translated
  strings as props. Prose translations live in `src/content/pages/pt/*.mdx`
  and are loaded with `getPage()` (`src/i18n/content.ts`). A string with no
  entry falls back to English, so names and external titles simply get none.
- **Styling is token-based.** Semantic CSS variables (`--surface`, `--text`,
  `--accent`, …) are defined in `src/styles/global.css` and exposed to Tailwind
  as `bg-surface`, `text-muted`, `border-line`, `text-accent`, …; dark mode
  overrides the variables under `[data-theme='dark']`. Do not add `dark:`
  variants to components.
- **Motion is progressive enhancement.** Use the primitives in `global.css`
  (`data-reveal`, `data-reveal-stagger`, `data-enter`, `data-spotlight`,
  `.glow-ring`, `.text-gradient`); content must stay fully visible with JS off
  and under `prefers-reduced-motion`.
- **Images** live in `src/assets/<area>/<page>/` and render through
  `astro:assets`. Import them from the crawl with `npm run import:image`.

## Before pushing

```bash
npm run format:check && npm run lint && npm run typecheck && npm run build && npm run check:links && npm run check:base
```

CI runs exactly these, in this order.

If this checkout is a git worktree nested inside another checkout of the repo
(e.g. under `.claude/worktrees/`), Vite may resolve the outer checkout's
`tsconfig.json` and fail with `Tsconfig not found astro/tsconfigs/strict`. Run
the build from a copy outside the outer checkout instead.

## Languages

English lives at the original URLs. Portuguese mirrors every page under `/pt`
(`src/pages/pt/[...slug].astro` renders each English route), so a new page is
translated by adding catalogue entries, never by copying the route. A first
visit from a browser that prefers Portuguese is redirected to `/pt` by an
inline script in `BaseLayout`; the header switch stores an explicit choice,
which always wins.

## URL changes

Every route under `src/pages/` maps to a URL that exists on the Google Sites
original (`/tools` gets a twin `tools/index.html` at build time so GitHub Pages
serves it next to the `tools/` directory). If a route must move, add an entry to
`redirects` in `astro.config.mjs` in the same change.

## Content parity

`npm run crawl` snapshots the original into `.crawl/report.json`;
`npm run check:parity` (after a build) lists original text, links and embeds
missing from `dist/`. See the README section "Restoring content from the
original".

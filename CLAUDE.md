# Working in this repo

Static Astro 7 site with React 19 islands, deployed to GitHub Pages by GitHub
Actions. It replaces a Google Sites original, so **preserving URLs is a hard
requirement**.

## Conventions

- **Node 22.23.4+.** Astro 7 will not run on older versions.
- **Astro first, React only where state is genuinely needed.** There are exactly
  five islands — `ThemeToggle` (`client:load`), `MobileNav` (`client:idle`) and
  the three search-and-filter guides, `PlaceFilter`, `KidsFilter` and
  `GameFilter` (all `client:visible`). Everything else is zero-JS `.astro`, plus
  small vanilla `<script>`s for pure DOM effects (`src/scripts/motion.ts`,
  `src/scripts/scroll-hide.ts` for the header and search bars that tuck away
  on scroll down, `src/scripts/video-embed.ts` for `VideoEmbed` and the app
  banners, the home page's cookie button, the hero video's buttons in
  `PageHero.astro`, the /games PDF counter in `PdfCount.astro`, `src/scripts/slide-deck.ts` for
  the feedback talk deck on /what-i-do/improver). Do not reach for a React component because it feels
  familiar; check whether an `.astro` component does the job first.
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
  The fallback is silent, so `npm run check:i18n` (part of `npm test`) fails
  on any catalogue key whose English source text no longer exists; strings
  assembled at runtime are allowlisted in `tests/i18n/catalogue.test.ts`.
- **Styling is token-based.** Semantic CSS variables (`--surface`, `--text`,
  `--accent`, …) are defined in `src/styles/global.css` and exposed to Tailwind
  as `bg-surface`, `text-muted`, `border-line`, `text-accent`, …; dark mode
  overrides the variables under `[data-theme='dark']`. Do not add `dark:`
  variants to components.
- **Motion is progressive enhancement.** Use the primitives in `global.css`
  (`data-reveal`, `data-reveal-stagger`, `data-enter`, `data-spotlight`,
  `.glow-ring`, `.text-gradient`); content must stay fully visible with JS off
  and under `prefers-reduced-motion`.
- **Social cards are generated.** BaseLayout points `og:image` at
  `/og/<page>.jpg`, which `src/integrations/og-cards.ts` draws after the build
  from the page's `og:title` and `og:description`. A good `description` is the
  card; pass `ogImage` only to override it.
- **SEO metadata stays search-sized.** Keep a page's `description` under 155
  characters and its title under 45 (the layout adds " | Pedro Vicente"); when a
  heading is longer, set `metaTitle` in the MDX frontmatter. `BaseLayout` emits
  one JSON-LD graph (person, site, page, breadcrumb); pages add their own nodes
  through its `schema` prop, built with the helpers in `src/lib/schema.ts`.
- **Images** live in `src/assets/<area>/<page>/` and render through
  `astro:assets`. Import them from the crawl with `npm run import:image`.
  The /games drawings for the "More Web Games" games are drawn in code:
  scenes in `scripts/game-art/scenes/`, a small SVG kit in
  `scripts/game-art/kit.mjs`, rendered with `npm run draw:games [id…]`.

## Before pushing

```bash
npm run format:check && npm run lint && npm run typecheck && npm test && npm run build && npm run check:links && npm run check:base && npm run test:e2e
```

CI (`ci.yml`) runs exactly these, split into parallel jobs (static checks,
unit tests, build + link check, base-path build, browser smoke tests) summed
up by the required `Validate` job. Unit tests are Vitest (`tests/unit/`,
plus `tests/i18n/` — the catalogue drift check, also exposed as
`npm run check:i18n`); the pure logic they cover lives out of the islands in
`src/lib/` and the `search.ts` module next to each island, so keep it there.
`npm run test:e2e` is Playwright over the built `dist/` (`tests/e2e/`).
`lighthouse.yml` runs separately on every PR and fails when a sampled page
drops below the accessibility, SEO, best-practice or performance scores in
`lighthouserc.json`; external links are only checked weekly (`links.yml`),
never on PRs. Dependabot patch/minor PRs auto-merge on green
(`automerge.yml`).

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
original, except `/friend-apps`, `/teams/icebreakers` and `/teams/workshops` (new, no
original) and `/games`, which replaced `/tools` (now a redirect; its twin
`tools/index.html` is written at build time so GitHub Pages serves it next to
the `tools/` directory; `/tools/loopgain` redirects to `/my-apps#loopgain`). If a route must move, add
an entry to `redirects` in `astro.config.mjs` in the same change.

## Content parity

`npm run crawl` snapshots the original into `.crawl/report.json`;
`npm run check:parity` (after a build) lists original text, links and embeds
missing from `dist/`. See the README section "Restoring content from the
original".

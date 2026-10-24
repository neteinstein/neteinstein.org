# neteinstein.org

Personal site of [Pedro Vicente](https://www.pedrovicente.pt) (neteinstein) — a static
[Astro](https://astro.build) site with a few React islands, deployed to **GitHub Pages** by
GitHub Actions.

It replaces the original Google Sites site (served at both `www.neteinstein.org` and
`www.pedrovicente.pt`), keeping every published URL intact.

## Requirements

Node **22.12+** (see `.nvmrc`). Astro 7 does not run on older versions.

## Local development

```bash
npm ci
npm run dev        # http://localhost:4321
```

| Script                 | What it does                                                    |
| ---------------------- | --------------------------------------------------------------- |
| `npm run dev`          | Dev server with HMR                                             |
| `npm run build`        | Production build into `dist/`                                   |
| `npm run preview`      | Serve the built site locally                                    |
| `npm run typecheck`    | `astro check` — TypeScript plus `.astro` templates              |
| `npm run lint`         | ESLint over `.ts`, `.tsx` and `.astro`                          |
| `npm run format`       | Prettier write                                                  |
| `npm test`             | Vitest — pure logic plus the i18n drift check (`tests/`)        |
| `npm run test:e2e`     | Playwright smoke tests over `dist/` (build first)               |
| `npm run check:i18n`   | Just the catalogue drift check (see Translations)               |
| `npm run check:links`  | Verify every internal link in `dist/` resolves                  |
| `npm run check:base`   | Rebuild under a dummy base path and link-check it (see below)   |
| `npm run check:parity` | Compare `dist/` with the Google Sites snapshot (see below)      |
| `npm run crawl`        | Snapshot the original site into `.crawl/`                       |
| `npm run import:image` | Copy a crawled image into `src/assets/`, resized and as WebP    |
| `npm run brand`        | Regenerate favicons and the social card from `src/assets/brand` |

Every page except home gets its own social card at build time: `src/integrations/og-cards.ts`
draws `dist/og/<page>.jpg` from the page's title and description, in each language. Home and 404
keep the portrait card from `npm run brand`. `robots.txt` and the feed at `/rss.xml` (talks and
article highlights) are generated from `src/pages/robots.txt.ts` and `src/pages/rss.xml.ts`.

## Editing content

Content is split by shape. Neither kind needs a code change to update.

### Prose → `src/content/pages/*.mdx`

Long-form pages. Frontmatter is validated by the zod schema in `src/content.config.ts`:

```mdx
---
title: 'Why?'
description: 'Shown in search results and social cards.'
eyebrow: 'What I do' # small label above the title
highlight: ['Why?'] # title words painted with the brand gradient
lead: 'Optional intro line, rendered under the title.'
---

Body copy in Markdown/MDX.
```

Render one with `<ProsePage slug="…" />` from `src/layouts/ProsePage.astro`.

### Lists → `src/data/*.ts`

Structured lists (talks, podcasts, apps, Porto places, Tesla links, …) are typed TypeScript
arrays. Their shapes live in `src/data/types/`, one module per area, re-exported from
`src/data/types/index.ts` — so a malformed entry fails `npm run typecheck` rather than rendering
wrong.

`src/data/porto.ts` drives the filter UI on `/porto/visit-porto`; its facets are derived from the
data, so adding a place in a new category needs no component change.

### Images

Page images live in `src/assets/<area>/<page>/` and are optimised by Astro at build time
(responsive WebP `srcset`s). To bring one over from the crawl snapshot:

```bash
npm run import:image -- <crawl-file> src/assets/porto/visit-porto/francesinha [maxWidth]
```

### Translations

The site is published in English (the default, at the original URLs) and European Portuguese
(everything under `/pt`). Visitors whose browser prefers Portuguese are sent to `/pt` on their
first visit; the `EN`/`PT` switch in the header overrides that and is remembered.

- **Data and component strings** are translated by a catalogue keyed by the English text, one
  module per area in `src/i18n/pt/`. Anything without an entry renders in English — names,
  places and titles of external articles deliberately have none.
- **Prose** is translated by a same-named file in `src/content/pages/pt/`. Until one exists the
  English MDX is used.

When you change English copy, update (or add) its catalogue entry — the old key simply stops
matching and the page falls back to English. That fallback is silent, so `npm run check:i18n`
(part of `npm test`, run by CI) fails on any catalogue key whose English text no longer exists
in the source, and on the same English text translated two different ways in two modules.

### Navigation

`src/config/site.ts` is the single source of truth for the nav tree, site metadata and social
links. Header, footer, sitemap and the JSON-LD `Person` schema all read from it.

## Design & motion

The look is token-based: semantic CSS variables (`--surface`, `--text`, `--accent`, …) in
`src/styles/global.css`, re-pointed for dark mode under `[data-theme='dark']`, and exposed to
Tailwind as `bg-surface`, `text-muted`, `border-line`, etc.

Motion is progressive enhancement throughout — with JavaScript off, `prefers-reduced-motion`, or an
older browser, every page renders static and complete:

- **Scroll reveals** — `data-reveal` on any element (or `data-reveal-stagger` on a grid) fades it
  in as it enters the viewport. Driven by `src/scripts/motion.ts`, a small vanilla module.
- **Page transitions** — cross-document View Transitions (`@view-transition`), zero JS.
- **Theme toggle** — the new theme is revealed as a circle growing from the button.
- **Ambient** — drifting aurora gradients, word-by-word hero headlines, pointer spotlights and
  rotating gradient rings on cards, a scroll-progress bar.

Videos use a click-to-load facade (`VideoEmbed.astro`): no YouTube or Vimeo requests — or
cookies — until the visitor presses play.

## Restoring content from the original

Historical note: with DNS cut over to this site, the committed `.crawl/report.json` is the
snapshot of record — `npm run crawl` only works while the Google Sites original is still
reachable at its sites.google.com address.

`npm run crawl` snapshots the Google Sites original into `.crawl/`:

- `.crawl/report.json` — per page: sections, text blocks, headings, links (Google's
  `google.com/url?q=` trackers unwrapped), images and embeds (committed)
- `.crawl/raw/*.html` — full HTML per page (gitignored)
- `.crawl/assets/*` — every image, named by content hash (gitignored)

Google Sites image URLs are short-lived signed tokens, so the crawler downloads each page's images
right after fetching it, retrying with fresh URLs when they expire.

`npm run check:parity` then compares the built site against `report.json` and lists any original
text, link or embed that is missing. It is a development aid, not a CI gate — some differences are
deliberate (the shared footer, restyled headings).

## URLs

Every URL from the original site is preserved. Two of them were duplicates on Google Sites and
are handled by the `redirects` map in `astro.config.mjs`:

| From           | To                   |
| -------------- | -------------------- |
| `/home`        | `/`                  |
| `/visit-porto` | `/porto/visit-porto` |

Removing or renaming a route without adding a redirect breaks inbound links — the PR checklist
calls this out.

## Deployment

**GitHub Pages**, built and deployed by GitHub Actions. There is no server: Pages serves `dist/`.

| Workflow         | Trigger                  | Does                                                                                                                                            |
| ---------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `ci.yml`         | every PR, push to `main` | parallel jobs — static checks, unit tests, build + link checks, base-path build, browser smoke tests — summed up by the required `Validate` job |
| `lighthouse.yml` | every PR, push to `main` | Lighthouse on sample pages (`lighthouserc.json`); a11y/SEO/perf must pass                                                                       |
| `links.yml`      | Mondays, manual          | checks external links (`lychee.toml`), keeps a `broken-links` issue                                                                             |
| `deploy.yml`     | push to `main`, manual   | builds with the Pages base path and deploys to Pages                                                                                            |
| `automerge.yml`  | Dependabot PRs           | enables auto-merge for patch/minor updates once checks pass                                                                                     |

Dependabot (`.github/dependabot.yml`) opens grouped weekly updates for npm and Actions;
`automerge.yml` lets the patch/minor ones merge themselves when CI is green (majors stay
manual). Auto-merge waits on the ruleset's required checks — keep `Validate` required on
`main`, or Dependabot PRs would merge unchecked.

### Base path

With the custom domain attached, deploys build without a base path. The machinery stays,
because the site must keep working if it is ever served from
`https://neteinstein.github.io/neteinstein.org/` again: the deploy workflow reads the base path
from `actions/configure-pages` and builds with `BASE_PATH` set. Internal links therefore always
go through `withBase()` (`src/lib/url.ts`) in components; links in MDX are rewritten
automatically. CI's `check:base` job fails any link that skips it. Canonical URLs always point
at `https://www.pedrovicente.pt`.

### Domains (setup done)

The one-time setup is complete: Pages deploys from Actions on `main`, and
`www.pedrovicente.pt` is the custom domain (HTTPS enforced). For reference, the DNS that makes
it work:

- `www.pedrovicente.pt` → `CNAME` to `neteinstein.github.io`
- `pedrovicente.pt` → `A` records `185.199.108.153` … `185.199.111.153` (GitHub redirects the
  apex to `www`)
- `www.neteinstein.org` / `neteinstein.org` → 301 redirect at the registrar to
  `https://www.pedrovicente.pt`, path-preserving, since a Pages site has a single custom domain

Branch protection: keep `Validate` (the summary job of `ci.yml`) a required status check on
`main` under **Settings → Rules → Rulesets** — deploys and Dependabot auto-merge both lean on
it.

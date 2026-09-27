# neteinstein.org

Personal site of [Pedro Vicente](https://www.neteinstein.org) (neteinstein) — a static
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
| `npm run check:links`  | Verify every internal link in `dist/` resolves                  |
| `npm run check:base`   | Rebuild under a dummy base path and link-check it (see below)   |
| `npm run check:parity` | Compare `dist/` with the Google Sites snapshot (see below)      |
| `npm run crawl`        | Snapshot the original site into `.crawl/`                       |
| `npm run import:image` | Copy a crawled image into `src/assets/`, resized and as WebP    |
| `npm run brand`        | Regenerate favicons and the social card from `src/assets/brand` |

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
matching and the page falls back to English.

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

| Workflow     | Trigger                  | Does                                                 |
| ------------ | ------------------------ | ---------------------------------------------------- |
| `ci.yml`     | every PR, push to `main` | format, lint, typecheck, build, link checks          |
| `deploy.yml` | push to `main`, manual   | builds with the Pages base path and deploys to Pages |

### Base path

Until a custom domain is attached, Pages serves the site from
`https://neteinstein.github.io/neteinstein.org/`. The deploy workflow reads that base path from
`actions/configure-pages` and builds with `BASE_PATH` set, so the preview works as-is. Internal
links therefore always go through `withBase()` (`src/lib/url.ts`) in components; links in MDX are
rewritten automatically. CI's `check:base` step fails any link that skips it. Canonical URLs always
point at `https://www.neteinstein.org`.

### One-time setup

1. **Settings → Pages → Build and deployment → Source: GitHub Actions** (already enabled).
2. **Settings → Environments → `github-pages` → Deployment branches**: add `main`. Pages created
   the environment allowing only the repository's default branch; deploys from `main` are rejected
   until it is listed. (Alternatively make `main` the default branch.)
3. Merge to `main` (or run `deploy` manually) and check the site at
   `https://neteinstein.github.io/neteinstein.org/`.
4. Cut DNS over, keeping Google Sites live until this point:
   - `www.neteinstein.org` → `CNAME` to `neteinstein.github.io`
   - `neteinstein.org` → `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153` (and optionally `AAAA` `2606:50c0:8000::153` … `8003::153`)
5. **Settings → Pages → Custom domain**: `www.neteinstein.org`, then tick **Enforce HTTPS** once
   the certificate is issued. GitHub redirects the apex to `www` automatically. The next deploy
   builds without a base path.
6. `www.pedrovicente.pt` / `pedrovicente.pt`: a Pages site has one custom domain, so point this
   domain at the site with a URL redirect (301) at the registrar/DNS provider, to
   `https://www.neteinstein.org` — paths are identical, so path-preserving forwarding keeps deep
   links working.
7. Make `ci` a required status check on `main` under **Settings → Rules → Rulesets**.

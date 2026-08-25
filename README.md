# neteinstein.org

Personal site of [Pedro Vicente](https://neteinstein.org) — a static
[Astro](https://astro.build) site with a few React islands, deployed to
Cloudflare Workers.

Replaces the original Google Sites site, keeping every published URL intact.

## Requirements

Node **22.12+** (see `.nvmrc`). Astro 7 does not run on older versions.

## Local development

```bash
npm ci
npm run dev        # http://localhost:4321
```

| Script                | What it does                                       |
| --------------------- | -------------------------------------------------- |
| `npm run dev`         | Dev server with HMR                                |
| `npm run build`       | Production build into `dist/`                      |
| `npm run preview`     | Serve the built site locally                       |
| `npm run typecheck`   | `astro check` — TypeScript plus `.astro` templates |
| `npm run lint`        | ESLint over `.ts`, `.tsx` and `.astro`             |
| `npm run format`      | Prettier write                                     |
| `npm run check:links` | Verify every internal link in `dist/` resolves     |
| `npm run crawl`       | Snapshot the original site (see below)             |

## Editing content

Content is split by shape. Neither kind needs a code change to update.

### Prose → `src/content/pages/*.mdx`

Long-form pages (`home`, `me`, `why`, `improver`, `speaker`, `writer`,
`hobbies`). Frontmatter is validated by the zod schema in
`src/content.config.ts`:

```mdx
---
title: 'Improver'
description: 'Shown in search results and social cards.'
lead: 'Optional intro line, rendered above the body.'
updated: 2026-08-25 # optional
---

Body copy in Markdown/MDX.
```

Add a new prose page by creating the `.mdx` file, then a route that renders it:

```astro
---
import ProsePage from '../layouts/ProsePage.astro';
---

<ProsePage slug="my-new-page" />
```

### Lists → `src/data/*.ts`

Structured lists are typed TypeScript arrays — `talks.ts`, `podcasts.ts`,
`articles.ts`, `portoPlaces.ts`, `teslaLinks.ts`, `hobbies.ts`. Shapes live in
`src/data/types.ts`, so a malformed entry fails `npm run typecheck` rather than
rendering wrong.

`portoPlaces.ts` drives the filter UI on `/porto/visit-porto`; its category and
area chips are derived from the data, so adding a place in a new area needs no
component change.

### Navigation

`src/config/site.ts` is the single source of truth for the nav tree, site
metadata and social links. Header, footer, sitemap and the JSON-LD `Person`
schema all read from it.

## Restoring the real content

The Google Sites original could not be reached from the environment this site
was built in, so pages seeded from search-engine summaries are marked with
`TODO(content)` comments and `needsContent: true` in frontmatter.

To recover the real copy, from a machine that can reach the site:

```bash
npm run crawl        # override with CRAWL_ORIGIN=https://www.pedrovicente.pt
```

That writes `.crawl/report.json` (extracted headings, text, links and images per
page) and downloads referenced images into `.crawl/assets/`. Port the text into
the matching `.mdx` and `.ts` files, move images into `src/assets/`, and drop the
`TODO(content)` markers as you go.

Find everything still outstanding with:

```bash
grep -rn "TODO(content)" src/
```

## URLs

Every URL from the original site is preserved. Two of them were duplicates and
are handled by the `redirects` map in `astro.config.mjs`:

| From           | To                   |
| -------------- | -------------------- |
| `/home`        | `/`                  |
| `/visit-porto` | `/porto/visit-porto` |

Removing or renaming a route without adding a redirect breaks inbound links —
the PR checklist calls this out.

## Deployment

Cloudflare **Workers Static Assets** (not Pages — Cloudflare's guidance for new
projects is Workers, and Pages is maintenance-only). Configuration is in
`wrangler.jsonc`; there is no Worker script, Cloudflare just serves `dist/` from
the edge.

| Workflow      | Trigger                  | Does                                        |
| ------------- | ------------------------ | ------------------------------------------- |
| `ci.yml`      | every PR, push to `main` | format, lint, typecheck, build, link check  |
| `preview.yml` | every PR (same-repo)     | uploads a preview version, comments the URL |
| `deploy.yml`  | push to `main`           | deploys to production                       |

### One-time setup

1. Create a Cloudflare API token using the **Edit Cloudflare Workers** template.
2. Add repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
3. Merge once and confirm the Worker serves correctly on its `*.workers.dev` URL.
4. Only then attach `neteinstein.org` and `www.neteinstein.org` as Custom Domains
   on the Worker, and cut DNS over. Keep Google Sites live until that point.
5. Make `ci` a required status check on `main` under **Settings → Rules →
   Rulesets**. Rulesets require a public repository on a free account.

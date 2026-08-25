# Working in this repo

Static Astro 7 site with React 19 islands, deployed to Cloudflare Workers Static
Assets. It replaces a Google Sites original, so **preserving URLs is a hard
requirement**.

## Conventions

- **Node 22.12+.** Astro 7 will not run on older versions.
- **Astro first, React only where state is genuinely needed.** There are exactly
  three islands — `ThemeToggle` (`client:load`), `MobileNav` (`client:idle`) and
  `PlaceFilter` (`client:visible`). Everything else is zero-JS `.astro`. Do not
  reach for a React component because it feels familiar; check whether an
  `.astro` component does the job first.
- **Content is data, not markup.** Prose goes in `src/content/pages/*.mdx`
  (schema in `src/content.config.ts`); structured lists go in `src/data/*.ts`
  with shapes in `src/data/types.ts`. Never inline copy into a route.
- **Annotate data exports, don't `satisfies` them.** `export const talks: Talk[]`
  widens correctly; `satisfies Talk[]` narrows to literals and drops optional
  fields from the inferred type.
- **`src/config/site.ts` owns navigation and site metadata.** Header, Footer,
  sitemap and JSON-LD all read from it. Adding a nav entry anywhere else is a
  bug.
- **Styling is token-based.** Semantic CSS variables (`--surface`, `--text`,
  `--link`, …) are defined in `src/styles/global.css`; dark mode overrides those
  tokens under `[data-theme='dark']`. Do not add `dark:` variants to components.

## Before pushing

```bash
npm run format:check && npm run lint && npm run typecheck && npm run build && npm run check:links
```

CI runs exactly these five, in this order.

## URL changes

Every route under `src/pages/` maps to a URL that existed on the Google Sites
original. If a route must move, add an entry to `redirects` in
`astro.config.mjs` in the same change.

## Outstanding content

Pages seeded from search-engine summaries rather than the real site carry
`TODO(content)` comments and `needsContent: true` frontmatter. `npm run crawl`
snapshots the original into `.crawl/report.json` when the network allows it.
See the README section "Restoring the real content".

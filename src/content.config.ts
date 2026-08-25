import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

/**
 * Long-form prose lives here as MDX. Structured lists (talks, podcasts, Porto
 * places) live in `src/data/` as typed TS instead — see `src/data/types.ts`.
 */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Optional intro paragraph rendered above the prose by PageHeader. */
    lead: z.string().optional(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    /** Set when the original page's copy still needs recovering. */
    needsContent: z.boolean().default(false),
    /** Free-text note on what still needs recovering. Grep for TODO(content). */
    todo: z.string().optional(),
  }),
});

export const collections = { pages };

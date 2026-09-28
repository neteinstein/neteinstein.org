/**
 * Shapes for the structured content in `src/data/`, one module per area so
 * each area's types can change without touching the others. Import from
 * `../data/types` — this barrel re-exports everything.
 *
 * Each data file annotates its export (`const talks: Talk[]`), so a malformed
 * entry is an `astro check` failure rather than a runtime surprise. An explicit
 * annotation rather than `satisfies`, so optional fields survive inference.
 */
export * from './shared';
export * from './home';
export * from './tech';
export * from './talks';
export * from './podcasts';
export * from './improver';
export * from './articles';
export * from './apps';
export * from './tools';
export * from './hobbies';
export * from './porto';
export * from './kids';
export * from './tesla';

/**
 * /tools/summer-camp-games, ported from the Google Sites original
 * (https://www.neteinstein.org/tools… — crawl snapshot in `.crawl/report.json`).
 * The page title, meta description and blurb live in
 * `src/content/pages/summer-camp-games.mdx`. The /tools index itself is now
 * /games (`src/data/games.ts`); /tools/loopgain redirects to LoopGain on
 * /my-apps.
 */
import type { ToolsSiteShowcase } from './types';

import cadernoDeJogosWebsite from '../assets/tools/summer-camp-games/caderno-de-jogos-website.webp';

/** /tools/summer-camp-games: a screenshot of the Caderno de Jogos wiki page, linked to it. */
export const cadernoDeJogos: ToolsSiteShowcase = {
  href: 'https://campinacios.pedrovicente.pt/Movimento/Caderno%20de%20Jogos.html',
  label: 'Caderno de Jogos',
  image: cadernoDeJogosWebsite,
  imageAlt: 'The Caderno de Jogos wiki page, listing the book of summer camp games by name.',
};

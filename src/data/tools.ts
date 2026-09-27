/**
 * /tools, /tools/loopgain and /tools/summer-camp-games, ported from the Google
 * Sites original (https://www.neteinstein.org/tools… — crawl snapshot in
 * `.crawl/report.json`). Page titles, meta descriptions and the summer camp
 * blurb live in `src/content/pages/{tools,loopgain,summer-camp-games}.mdx`.
 */
import type { ToolsIndexEntry, ToolsSiteShowcase } from './types';

import loopgainWebsite from '../assets/tools/loopgain/loopgain-website.webp';
import cadernoDeJogosWebsite from '../assets/tools/summer-camp-games/caderno-de-jogos-website.webp';

/** /tools/loopgain: a screenshot of the LoopGain site, linked to it, then the link itself. */
export const loopgain: ToolsSiteShowcase = {
  href: 'http://www.loopgain.org',
  label: 'www.loopgain.org',
  image: loopgainWebsite,
  imageAlt:
    'The LoopGain website: “Taking your team from the comfort zone to the trust zone! From training to a methodology supported by a simple deck of cards that will make you grow personally and as a team!”',
};

/** /tools/summer-camp-games: a screenshot of the Caderno de Jogos wiki page, linked to it. */
export const cadernoDeJogos: ToolsSiteShowcase = {
  href: 'https://campinacios.pedrovicente.pt/Movimento/Caderno%20de%20Jogos.html',
  label: 'Caderno de Jogos',
  image: cadernoDeJogosWebsite,
  imageAlt: 'The Caderno de Jogos wiki page, listing the book of summer camp games by name.',
};

/** The /tools index, in menu order. */
export const toolsIndex: ToolsIndexEntry[] = [
  {
    page: 'loopgain',
    href: '/tools/loopgain',
    links: [{ label: loopgain.label, href: loopgain.href }],
    image: loopgain.image,
    imageAlt: 'The LoopGain website: “Taking your team from the comfort zone to the trust zone!”',
  },
  {
    page: 'summer-camp-games',
    href: '/tools/summer-camp-games',
    links: [{ label: cadernoDeJogos.label, href: cadernoDeJogos.href }],
    image: cadernoDeJogos.image,
    imageAlt: cadernoDeJogos.imageAlt,
  },
];

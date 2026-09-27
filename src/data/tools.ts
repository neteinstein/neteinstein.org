/**
 * /tools, /tools/loopgain and /tools/summer-camp-games, ported from the Google
 * Sites original (https://www.neteinstein.org/tools… — crawl snapshot in
 * `.crawl/report.json`). Page titles, meta descriptions and the summer camp
 * blurb live in `src/content/pages/{tools,loopgain,summer-camp-games}.mdx`.
 */
import type { ToolsDriveDocument, ToolsIndexEntry, ToolsSiteShowcase } from './types';

import loopgainWebsite from '../assets/tools/loopgain/loopgain-website.webp';

/** /tools/loopgain: a screenshot of the LoopGain site, linked to it, then the link itself. */
export const loopgain: ToolsSiteShowcase = {
  href: 'http://www.loopgain.org',
  label: 'www.loopgain.org',
  image: loopgainWebsite,
  imageAlt:
    'The LoopGain website: “Taking your team from the comfort zone to the trust zone! From training to a methodology supported by a simple deck of cards that will make you grow personally and as a team!”',
};

/** /tools/summer-camp-games: the book of games, embedded from Google Drive. */
export const cadernoDeJogos: ToolsDriveDocument = {
  name: 'Caderno de Jogos.docx',
  previewUrl:
    'https://drive.google.com/file/d/0B4t8f8mOxexXZDNkMjEzNTEtYmU0MS00MTBmLTkxYzktZTE1Y2E5NGU5NGZm/preview?resourcekey=0-CIR_NeAlZE3GCZ6ffECERw',
  openUrl:
    'https://drive.google.com/open?id=0B4t8f8mOxexXZDNkMjEzNTEtYmU0MS00MTBmLTkxYzktZTE1Y2E5NGU5NGZm&resourcekey=0-CIR_NeAlZE3GCZ6ffECERw',
  downloadUrl:
    'https://drive.google.com/uc?id=0B4t8f8mOxexXZDNkMjEzNTEtYmU0MS00MTBmLTkxYzktZTE1Y2E5NGU5NGZm&resourcekey=0-CIR_NeAlZE3GCZ6ffECERw&export=download',
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
    links: [{ label: cadernoDeJogos.name, href: cadernoDeJogos.openUrl }],
    fileName: cadernoDeJogos.name,
  },
];

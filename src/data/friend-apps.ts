/**
 * /friend-apps ("Other Apps"): apps made by family and friends, shown the same
 * way as /my-apps. Hero copy lives in `src/content/pages/friend-apps.mdx`.
 */
import type { AppListing, AppSection } from './types';

import ferramentas from '../assets/friend-apps/ferramentas-feature.webp';
import ferramentasIcon from '../assets/friend-apps/ferramentas-icon.webp';
import flipsideIcon from '../assets/friend-apps/flipside-icon.webp';
import flipside from '../assets/friend-apps/flipside-feature.webp';
import flipsideTrailerMp4 from '../assets/friend-apps/flipside-trailer.mp4?url';
import levelLiar from '../assets/friend-apps/level-liar-feature.webp';
import levelLiarIcon from '../assets/friend-apps/level-liar-icon.webp';
import levelLiarTrailerMp4 from '../assets/friend-apps/level-liar-trailer.mp4?url';
import quites from '../assets/friend-apps/quites-feature.webp';
import quitesIcon from '../assets/friend-apps/quites-icon.webp';
import tempusRemedium from '../assets/friend-apps/tempus-remedium-feature.webp';
import tempusRemediumIcon from '../assets/friend-apps/tempus-remedium-icon.webp';
import weeklyFamilyLog from '../assets/friend-apps/weekly-family-log-feature.webp';
import weeklyFamilyLogIcon from '../assets/friend-apps/weekly-family-log-icon.webp';

const ferramentasApp: AppListing = {
  id: 'ferramentas',
  title: 'Health Toolbox',
  author: 'Maria Cortês Ferreira',
  authorHref: 'https://mariacf.pt/',
  description: [
    'Simple, reliable medical calculators and clinical scales for families and doctors: doses by weight, vaccines, growth charts, risk scores and more.',
  ],
  image: ferramentas,
  imageAlt:
    'Health Toolbox: the headline "Cuidar com clareza, uma ferramenta de cada vez." next to an MCF ring with badges for doses by weight, families and doctors, above the tool categories',
  icon: ferramentasIcon,
  links: [{ store: 'web', href: 'https://mariacf.pt/ferramentas/' }],
};

const tempusRemediumApp: AppListing = {
  id: 'tempus-remedium',
  title: 'Tempus Remedium',
  author: 'Maria Cortês Ferreira',
  authorHref: 'https://mariacf.pt/',
  description: [
    "Today's medicines and doses, kept on track: what to take and when, what is running out and a history of the doses taken. No account, no server.",
  ],
  image: tempusRemedium,
  imageAlt:
    'Tempus Remedium: the "Hoje" screen with the doses for the morning, midday, evening and bedtime, above the jars of the medicines running out',
  icon: tempusRemediumIcon,
  /** English demo; the Portuguese one is its catalogue entry. */
  video: 'P1bkwbA3uXU',
  links: [
    {
      store: 'google-play',
      href: 'https://play.google.com/store/apps/details?id=org.mariacf.tempusremedium',
    },
    { store: 'web', href: 'https://app.mariacf.pt/' },
  ],
};

const quitesApp: AppListing = {
  id: 'quites',
  title: 'Quites',
  author: 'Tiago Bahia',
  description: ['Be wise when splitting bills.'],
  image: quites,
  imageAlt:
    'Quites: the app\'s header with the tagline "Paga o que deves. Ficamos quites." and two overlapping circles with a check mark, above an example group of five people',
  icon: quitesIcon,
  links: [{ store: 'web', href: 'https://tnbahia.github.io/quites/' }],
};

const weeklyFamilyLogApp: AppListing = {
  id: 'weekly-family-log',
  title: 'Weekly Family Log',
  author: 'Mário Pedro Carvalho',
  authorHref: 'https://marioc.eu/',
  description: [
    'Five minutes a week for a closer family: what went well, what was hard and a question to talk about at the table, kept over time for everyone.',
  ],
  image: weeklyFamilyLog,
  imageAlt:
    'Weekly FamilyLog: the headline "Cinco minutos por semana, uma família mais próxima." next to cards for the weekly ceremony, the history and the emotional evolution chart',
  icon: weeklyFamilyLogIcon,
  links: [{ store: 'web', href: 'https://weeklyfamilylog.marioc.eu/' }],
};

const levelLiarApp: AppListing = {
  id: 'level-liar',
  title: 'Level Liar',
  author: 'Jorge Sousa',
  authorHref: 'https://github.com/jorgesousa',
  description: [
    'An "honest" platformer in ten levels. Each one makes you a promise, and every single promise is a lie. Plays in the browser, on a phone or a computer.',
  ],
  image: levelLiar,
  imageAlt:
    'Level Liar: the title "LEVEL LIAR" over a field of "TRUST ME" text, with the line "Every single promise is a lie."',
  icon: levelLiarIcon,
  videoFile: [{ src: levelLiarTrailerMp4, type: 'video/mp4' }],
  links: [{ store: 'web', href: 'https://jorgesousa.github.io/level-liar/' }],
};

const flipsideApp: AppListing = {
  id: 'flipside',
  title: 'Flipside',
  author: 'Jorge Sousa',
  authorHref: 'https://github.com/jorgesousa',
  description: [
    'Classic arcade games, played from the wrong side: you are the apple, the brick or the ghost, and the famous hero is the computer. Plays in the browser, on a phone or a computer.',
  ],
  image: flipside,
  imageAlt:
    'Flipside: the title "FLIPSIDE" above eight game cards, Apple, Brick, Haunt, Stomped, Last One, Duck, Mole and The Ball',
  icon: flipsideIcon,
  videoFile: [{ src: flipsideTrailerMp4, type: 'video/mp4' }],
  links: [{ store: 'web', href: 'https://jorgesousa.github.io/flipside/' }],
};

/** The page's sections, in order. */
export const appSections: AppSection[] = [
  { id: 'family', title: 'Family', apps: [ferramentasApp, tempusRemediumApp] },
  {
    id: 'friends',
    title: 'Friends',
    apps: [quitesApp, weeklyFamilyLogApp, levelLiarApp, flipsideApp],
  },
];

/** Every app, in page order (the hero's icon dock). */
export const friendApps: AppListing[] = appSections.flatMap((section) => section.apps);

/**
 * /friend-apps ("Other Apps"): apps made by family and friends, shown the same
 * way as /my-apps. Hero copy lives in `src/content/pages/friend-apps.mdx`.
 */
import type { AppListing, AppSection } from './types';

import quites from '../assets/friend-apps/quites-feature.webp';
import quitesIcon from '../assets/friend-apps/quites-icon.webp';
import tempusRemedium from '../assets/friend-apps/tempus-remedium-feature.webp';
import tempusRemediumIcon from '../assets/friend-apps/tempus-remedium-icon.webp';
import weeklyFamilyLog from '../assets/friend-apps/weekly-family-log-feature.webp';
import weeklyFamilyLogIcon from '../assets/friend-apps/weekly-family-log-icon.webp';

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
  links: [
    {
      store: 'google-play',
      href: 'https://play.google.com/store/apps/details?id=org.mariacf.tempusremedium',
    },
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

/** The page's sections, in order. */
export const appSections: AppSection[] = [
  { id: 'family', title: 'Family', apps: [tempusRemediumApp] },
  { id: 'friends', title: 'Friends', apps: [quitesApp, weeklyFamilyLogApp] },
];

/** Every app, in page order (the hero's icon dock). */
export const friendApps: AppListing[] = appSections.flatMap((section) => section.apps);

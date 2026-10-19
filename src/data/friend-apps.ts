/**
 * /friend-apps: apps made by friends, shown the same way as /my-apps.
 * Hero copy lives in `src/content/pages/friend-apps.mdx`.
 */
import type { AppListing } from './types';

import quites from '../assets/friend-apps/quites-feature.webp';
import quitesIcon from '../assets/friend-apps/quites-icon.webp';
import weeklyFamilyLog from '../assets/friend-apps/weekly-family-log-feature.webp';
import weeklyFamilyLogIcon from '../assets/friend-apps/weekly-family-log-icon.webp';

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
  description: [
    'Five minutes a week for a closer family: what went well, what was hard and a question to talk about at the table, kept over time for everyone.',
  ],
  image: weeklyFamilyLog,
  imageAlt:
    'Weekly FamilyLog: the headline "Cinco minutos por semana, uma família mais próxima." next to cards for the weekly ceremony, the history and the emotional evolution chart',
  icon: weeklyFamilyLogIcon,
  links: [{ store: 'web', href: 'https://weeklyfamilylog.marioc.eu/' }],
};

/** Every friend's app, in page order. */
export const friendApps: AppListing[] = [quitesApp, weeklyFamilyLogApp];

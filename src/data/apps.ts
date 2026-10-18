/**
 * /my-apps content, ported from the Google Sites original
 * (https://www.neteinstein.org/my-apps — crawl snapshot in `.crawl/report.json`).
 * Hero copy and the FAQ are prose and live in `src/content/pages/my-apps.mdx`.
 */
import type { AppGroup, AppListing, AppStore, AppStoreBadge, AppsSupport, RichText } from './types';

import loopgain from '../assets/my-apps/loopgain-feature.webp';
import loopgainIcon from '../assets/my-apps/loopgain-icon.webp';
import familyMoments from '../assets/my-apps/family-moments-feature.webp';
import familyMomentsIcon from '../assets/my-apps/family-moments-icon.webp';
import coupleMoments from '../assets/my-apps/couple-moments-feature.webp';
import coupleMomentsIcon from '../assets/my-apps/couple-moments-icon.webp';
import smsRedirect from '../assets/my-apps/sms-redirect-feature.webp';
import smsRedirectIcon from '../assets/my-apps/sms-redirect-icon.webp';
import allowedNames from '../assets/my-apps/allowed-names-feature.webp';
import allowedNamesIcon from '../assets/my-apps/allowed-names-icon.webp';
import invoice2gdrive from '../assets/my-apps/invoice2gdrive-feature.webp';
import invoice2gdriveIcon from '../assets/my-apps/invoice2gdrive-icon.webp';
import netWorth from '../assets/my-apps/net-worth-feature.webp';
import netWorthIcon from '../assets/my-apps/net-worth-icon.webp';
import moralHazard from '../assets/my-apps/moral-hazard-feature.webp';
import moralHazardIcon from '../assets/my-apps/moral-hazard-icon.webp';
import googlePlayBadge from '../assets/my-apps/badge-google-play.webp';
import webBadge from '../assets/my-apps/badge-web.webp';

const REVOLUT = 'https://revolut.me/neteinstein';
const LOOPGAIN = 'https://www.loopgain.org';

/** Second line of the intro, under "Want to help me keep publishing apps for free?". */
export const donate: RichText = [
  'Donate on ',
  { label: 'Revolut', href: REVOLUT },
  ' or via the button below.',
];

export const support: AppsSupport = {
  title: 'Support me on Buy Me a Coffee!',
  message: 'If you want to encourage me to keep developing for free :-)',
};

export const storeBadges: Record<AppStore, AppStoreBadge> = {
  'google-play': { image: googlePlayBadge, alt: 'Get it on Google Play' },
  web: { image: webBadge, alt: 'Open it on Web' },
};

const loopgainTeams: AppListing = {
  id: 'loopgain',
  title: 'LoopGain Teams',
  description: [
    'Part of the ',
    { label: 'LoopGain', href: LOOPGAIN },
    ' toolbox — the original ',
    { label: 'feedback game for teams', href: LOOPGAIN },
    ', now as an app.',
  ],
  image: loopgain,
  imageAlt:
    'LoopGain banner: the infinity logo, the tagline "Structured feedback sessions for teams — timed & kind." and a fan of question cards',
  icon: loopgainIcon,
  video: '_Ob4dB5KpL4',
  links: [
    {
      store: 'google-play',
      href: 'https://play.google.com/store/apps/details?id=org.neteinstein.loopgain',
    },
  ],
};

const loopgainFamily: AppListing = {
  id: 'family-moments',
  title: 'LoopGain Family',
  description: ['Part of the ', { label: 'LoopGain', href: LOOPGAIN }, ' Toolbox - For Families'],
  image: familyMoments,
  imageAlt:
    'Family Moments banner: a campfire icon, the tagline "Spark deeper conversations with the people you love." and the topics Ice Breakers, Memories, Values and Future Dreams',
  icon: familyMomentsIcon,
  video: 'qvqCsuftl0Y',
  links: [
    {
      store: 'google-play',
      href: 'https://play.google.com/store/apps/details?id=org.neteinstein.family',
    },
    { store: 'web', href: 'https://family.loopgain.org' },
  ],
};

const loopgainCouples: AppListing = {
  id: 'couple-moments',
  title: 'LoopGain Couples',
  description: ['Part of the ', { label: 'LoopGain', href: LOOPGAIN }, ' Toolbox - For Couples'],
  image: coupleMoments,
  imageAlt:
    'Couple Moments banner: the app icon, the tagline "Swipe your way to deeper conversations", the badges 100% private, 5 languages and 600+ prompts, and two question cards',
  icon: coupleMomentsIcon,
  video: '5mNRw3EoWRg',
  links: [
    {
      store: 'google-play',
      href: 'https://play.google.com/store/apps/details?id=org.neteinstein.couples',
    },
    { store: 'web', href: 'https://couples.loopgain.org' },
  ],
};

const smsToolbox: AppListing = {
  id: 'sms-redirect',
  title: 'SMS Toolbox',
  description: [
    'Ever wanted to automatically forward your package delivery texts to your partner? Or anything else? Here you have it.',
  ],
  image: smsRedirect,
  imageAlt:
    'SMS Redirect & Schedule banner: a speech-bubble app icon and the tagline "Forward SMS & RCS by rule. Schedule texts for later."',
  icon: smsRedirectIcon,
  links: [
    {
      store: 'google-play',
      href: 'https://play.google.com/store/apps/details?id=com.neteinstein.smsredirect',
    },
  ],
};

const allowedNamesApp: AppListing = {
  id: 'allowed-names',
  title: 'Allowed Names in Portugal',
  description: [
    'The official list of allowed names in Portugal, extracted directly from ',
    {
      label: 'IRN',
      href: 'https://irn.justica.gov.pt/Portals/33/Regras%20Nome%20Proprio/Lista%20Nomes%20Pr%C3%B3prios.pdf?ver=WNDmmwiSO3uacofjmNoxEQ%3D%3D',
    },
    ', but easy to filter and search.',
  ],
  image: allowedNames,
  imageAlt:
    'Allowed Names in Portugal banner: a checked-list app icon and the tagline "Officially approved Portuguese first names"',
  icon: allowedNamesIcon,
  video: 'CnM1HFw-scM',
  links: [
    {
      store: 'google-play',
      href: 'https://play.google.com/store/apps/details?id=org.neteinstein.pickaname',
    },
    { store: 'web', href: 'https://nomespermitidosemportugal.neteinstein.org' },
  ],
};

const invoice2gdriveApp: AppListing = {
  id: 'invoice2gdrive',
  title: 'Invoice2Sheet',
  description: [
    'Scan the QR code on a Portuguese invoice and snap a photo: the invoice becomes a row in your Google Sheet and the photo lands in your Google Drive. No typing required.',
  ],
  image: invoice2gdrive,
  imageAlt:
    'Invoice2Sheet banner: a receipt-with-a-checkmark app icon, the tagline "Scan the QR code. Snap the invoice. It lands in your Sheet.", the points Portuguese invoice QR codes, A row in your Google Sheet and The photo in your Google Drive, and a receipt with a QR code next to a spreadsheet with a new row',
  icon: invoice2gdriveIcon,
  links: [{ store: 'web', href: 'https://invoice2sheet.pedrovicente.pt/' }],
};

const netWorthApp: AppListing = {
  id: 'net-worth',
  title: 'Net Worth',
  description: [
    'Family finances, together: import your bank statements, see where the money went, catch spending spikes before they hurt and look years ahead. Your data stays in your own Google Drive.',
  ],
  image: netWorth,
  imageAlt:
    'Net Worth banner: a rising-bar-chart app icon, the tagline "Family finances, together.", the points Import your bank statements, Catch spending spikes early and Look years ahead, and a phone showing the month\'s savings and a spending-spike alert',
  icon: netWorthIcon,
  status: 'Beta Testing',
  links: [{ store: 'web', href: 'https://networth.pedrovicente.pt/' }],
};

const moralHazardApp: AppListing = {
  id: 'moral-hazard',
  title: 'Moral Hazard',
  description: [
    'Dark-humour games about poor choices: pick the lesser of two evils, trade slices of your soul with the devil, or pre-write your own tombstone.',
  ],
  image: moralHazard,
  imageAlt:
    'Moral Hazard banner: a halo over a pair of devil horns, the tagline "Dark-humour games about poor choices." and cards for The Lesser Evil, Deal With the Devil and Epitaph Engraver',
  icon: moralHazardIcon,
  status: 'Conceptual Phase',
  links: [],
};

/** The page's sections, in order. */
export const appGroups: AppGroup[] = [
  {
    id: 'loopgain-toolbox',
    title: 'LoopGain Toolbox Apps',
    category: 'LifestyleApplication',
    apps: [loopgainTeams, loopgainFamily, loopgainCouples],
  },
  {
    id: 'utils',
    title: 'Utils',
    category: 'UtilitiesApplication',
    apps: [smsToolbox, invoice2gdriveApp, netWorthApp],
  },
  { id: 'trivia', title: 'Trivia', category: 'ReferenceApplication', apps: [allowedNamesApp] },
  { id: 'games', title: 'Games', category: 'GameApplication', apps: [moralHazardApp] },
];

/** Every app, in page order — the hero's icon dock lists them all. */
export const apps: AppListing[] = appGroups.flatMap((group) => group.apps);

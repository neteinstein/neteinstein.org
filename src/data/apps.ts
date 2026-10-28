/**
 * /my-apps content, ported from the Google Sites original
 * (https://www.neteinstein.org/my-apps — crawl snapshot in `.crawl/report.json`).
 * Hero copy and the FAQ are prose and live in `src/content/pages/my-apps.mdx`.
 */
import type {
  AppGroup,
  AppListing,
  AppPlatform,
  AppStore,
  AppTab,
  AppStoreBadge,
  AppsSupport,
  RichText,
} from './types';

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
import podcastShorts from '../assets/my-apps/podcast-shorts-feature.webp';
import podcastShortsIcon from '../assets/my-apps/podcast-shorts-icon.webp';
import calendarSync from '../assets/my-apps/calendar-sync-feature.webp';
import calendarSyncIcon from '../assets/my-apps/calendar-sync-icon.webp';
import invoice2sheetDemoMp4 from '../assets/my-apps/invoice2sheet-demo.mp4?url';
import invoice2sheetDemoWebm from '../assets/my-apps/invoice2sheet-demo.webm?url';
import podcastShortsDemoMp4 from '../assets/my-apps/podcast-shorts-demo.mp4?url';
import calendarSyncDemoMp4 from '../assets/my-apps/calendar-sync-demo.mp4?url';
import googlePlayBadge from '../assets/my-apps/badge-google-play.webp';
import webBadge from '../assets/my-apps/badge-web.webp';
import githubBadge from '../assets/my-apps/badge-github.webp';

const REVOLUT = 'https://revolut.me/neteinstein';
const BUY_ME_A_COFFEE = 'https://www.buymeacoffee.com/neteinstein';
const LOOPGAIN = 'https://www.loopgain.org';

/** Second line of the intro, under "Want to help me keep publishing apps for free?". */
export const donate: RichText = [
  'Donate on ',
  { label: 'Revolut', href: REVOLUT },
  ' or via ',
  { label: 'Buy Me A Coffee', href: BUY_ME_A_COFFEE },
  '.',
];

export const support: AppsSupport = {
  title: 'Support me on Buy Me a Coffee!',
  message: 'If you want to encourage me to keep developing for free :-)',
};

export const storeBadges: Record<AppStore, AppStoreBadge> = {
  'google-play': { image: googlePlayBadge, alt: 'Get it on Google Play' },
  web: { image: webBadge, alt: 'Open it on Web' },
  github: { image: githubBadge, alt: 'View it on GitHub' },
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
  // A silent walkthrough. H.264 first (smaller for this screen recording), VP9 for browsers without it.
  videoFile: [
    { src: invoice2sheetDemoMp4, type: 'video/mp4' },
    { src: invoice2sheetDemoWebm, type: 'video/webm' },
  ],
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

const podcastShortsApp: AppListing = {
  id: 'podcast-shorts',
  title: 'AI Podcast Short Editor',
  description: [
    'One command turns a full podcast episode into ready-to-post vertical shorts: Claude picks the moments that stand on their own, the crop follows whoever is talking and the captions light up word by word. Built at ',
    { label: 'Mindera', href: 'https://www.mindera.com' },
    '.',
  ],
  image: podcastShorts,
  imageAlt:
    'AI Podcast Short Editor demo: a two-person podcast frame with a yellow box around the speaker, turned into a vertical short captioned "So who decides what ships?", under the heading "Frames whoever\'s talking. Captions, word by word."',
  icon: podcastShortsIcon,
  platform: 'macOS',
  links: [{ store: 'github', href: 'https://github.com/Mindera/AI-Podcast-Short-Editor' }],
  // The demo from the repo's README, as published there.
  videoFile: [{ src: podcastShortsDemoMp4, type: 'video/mp4' }],
};

const calendarSyncApp: AppListing = {
  id: 'calendar-sync',
  title: 'Calendar Sync',
  description: [
    'A tiny macOS menu bar app that copies your client meetings into your main calendar, meeting link included, so colleagues stop booking you over your client standup.',
  ],
  image: calendarSync,
  imageAlt:
    'Calendar Sync demo: a client calendar next to the main calendar, where each meeting is copied as "[Calendar A] meeting name" with a Teams Join button, under the heading "Named by its calendar."',
  icon: calendarSyncIcon,
  platform: 'macOS',
  links: [{ store: 'github', href: 'https://github.com/neteinstein/Calendar-Sync' }],
  // The demo from the repo's README, as published there.
  videoFile: [{ src: calendarSyncDemoMp4, type: 'video/mp4' }],
};

/** The page's tabs — phone apps, phone games, then Mac tools — each split into sections. */
export const appPlatforms: AppPlatform[] = [
  {
    id: 'mobile',
    title: 'My Mobile Apps',
    groups: [
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
    ],
    installed: {
      label: 'Mobile Apps I have installed',
      href: 'https://medium.com/@neteinstein/my-android-apps-396cd2266040',
    },
  },
  {
    id: 'mobile-games',
    title: 'My Mobile Games',
    groups: [{ id: 'games', title: 'Games', category: 'GameApplication', apps: [moralHazardApp] }],
  },
  {
    id: 'macos',
    title: 'My macOS Apps',
    groups: [
      {
        id: 'work',
        title: 'Work Tools',
        category: 'BusinessApplication',
        apps: [calendarSyncApp],
      },
      {
        id: 'podcast-tools',
        title: 'Podcast Tools',
        category: 'MultimediaApplication',
        apps: [podcastShortsApp],
      },
    ],
    installed: {
      label: 'macOS Apps I have installed',
      href: 'https://medium.com/code-procedure-and-rants/my-software-tool-kit-94e07b731486',
    },
  },
];

/** The last tab, which leaves for /friend-apps: apps made by family and friends. */
export const otherAppsTab: AppTab = { id: 'other', title: 'Other Apps', href: '/friend-apps' };

/** Every section, in page order. */
export const appGroups: AppGroup[] = appPlatforms.flatMap((platform) => platform.groups);

/** Every app, in page order — the hero's icon dock lists them all. */
export const apps: AppListing[] = appGroups.flatMap((group) => group.apps);

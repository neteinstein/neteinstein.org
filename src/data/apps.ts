/**
 * /my-apps content, ported from the Google Sites original
 * (https://www.neteinstein.org/my-apps — crawl snapshot in `.crawl/report.json`).
 * Hero copy and the FAQ are prose and live in `src/content/pages/my-apps.mdx`.
 */
import type { AppListing, AppStore, AppStoreBadge, AppsSupport, RichText } from './types';

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
import googlePlayBadge from '../assets/my-apps/badge-google-play.webp';
import webBadge from '../assets/my-apps/badge-web.webp';

const REVOLUT = 'http://revolut.me/neteinstein';
const LOOPGAIN = 'http://www.loopgain.org';

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

export const apps: AppListing[] = [
  {
    id: 'loopgain',
    title: 'LoopGain: Teams',
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
    links: [
      {
        store: 'google-play',
        href: 'https://play.google.com/store/apps/details?id=org.neteinstein.loopgain',
      },
    ],
  },
  {
    id: 'family-moments',
    title: 'LoopGain: Family Moments',
    description: ['Part of the ', { label: 'LoopGain', href: LOOPGAIN }, ' Toolbox - For Families'],
    image: familyMoments,
    imageAlt:
      'Family Moments banner: a campfire icon, the tagline "Spark deeper conversations with the people you love." and the topics Ice Breakers, Memories, Values and Future Dreams',
    icon: familyMomentsIcon,
    links: [
      {
        store: 'google-play',
        href: 'https://play.google.com/store/apps/details?id=org.neteinstein.family',
      },
      { store: 'web', href: 'http://family.loopgain.org' },
    ],
  },
  {
    id: 'couple-moments',
    title: 'LoopGain: Couple Moments',
    description: ['Part of the ', { label: 'LoopGain', href: LOOPGAIN }, ' Toolbox - For Couples'],
    image: coupleMoments,
    imageAlt:
      'Couple Moments banner: the app icon, the tagline "Swipe your way to deeper conversations", the badges 100% private, 5 languages and 600+ prompts, and two question cards',
    icon: coupleMomentsIcon,
    links: [
      {
        store: 'google-play',
        href: 'https://play.google.com/store/apps/details?id=org.neteinstein.couples',
      },
      { store: 'web', href: 'http://couples.loopgain.org' },
    ],
  },
  {
    id: 'sms-redirect',
    title: 'SMS Redirect & Schedule',
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
  },
  {
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
    links: [
      {
        store: 'google-play',
        href: 'https://play.google.com/store/apps/details?id=org.neteinstein.pickaname',
      },
      { store: 'web', href: 'http://nomespermitidosemportugal.neteinstein.org' },
    ],
  },
];

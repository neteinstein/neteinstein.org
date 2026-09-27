/**
 * Home page content, ported from the Google Sites original
 * (https://www.neteinstein.org/ — crawl snapshot in `.crawl/report.json`).
 */
import type { Glimpse, Role, Useful } from './types';

import yellowBox from '../assets/home/yellow-box-podcast.webp';
import acorda from '../assets/home/acorda-workshop.webp';
import portoGuide from '../assets/home/porto-guide.webp';
import myApps from '../assets/home/my-apps.webp';
import teslaUtils from '../assets/home/tesla-utils.webp';

export const welcome = {
  title: 'Welcome to my little virtual home',
  /** Rendered with a 🍪 after it, as on the original. */
  cookies: 'Do you want some cookies?',
};

export const roles: Role[] = [
  { emoji: '👨‍👩‍👦‍👦', text: ['Husband & Father of 👱🏻‍♂️👨🏽👨🏼‍🦲'] },
  {
    emoji: '📱',
    text: [
      'Mobile Services Lead & Improver @ ',
      { label: 'Mindera', href: 'http://www.mindera.com' },
    ],
  },
  { emoji: '🧠', text: ['AI Coach'] },
  {
    emoji: '🔁',
    text: [
      'Helping ',
      { label: 'teams get better', href: '/what-i-do/improver' },
      ' with ',
      { label: 'LoopGain', href: 'http://www.loopgain.org' },
    ],
  },
  {
    emoji: '🎙️',
    text: ['Podcast Host @ ', { label: 'Mindera Yellow Box', href: '/what-i-do/podcasts' }],
  },
  {
    emoji: '🤖',
    past: true,
    text: ['Co-Founder of ', { label: 'GDG Porto', href: 'http://www.gdgporto.xyz' }],
  },
  {
    emoji: '🌶️',
    past: true,
    text: [
      'Used my prankster side to try to gather money for charities @ ',
      { label: 'O Que Arde Cura', href: '/what-i-do/podcasts' },
    ],
  },
];

export const glimpses: Glimpse[] = [
  {
    title: 'Why Do We Even Work?',
    href: 'https://www.wipdocumentary.com/2',
    description: [
      { label: 'Work In Progress 2', href: 'https://www.rtp.pt/programa/tv/p43838' },
      ' - A ',
      { label: 'Documentary', href: 'https://www.wipdocumentary.com/2' },
      ' by KOM and Samuel Durand exploring the future of work within companies',
    ],
    cta: { label: 'Tech Engineer', href: '/what-i-do/tech-engineer' },
    video: { provider: 'youtube', id: 'Szq-Yrad74g' },
  },
  {
    title: 'Yellow Box Podcast',
    href: '/what-i-do/podcasts',
    description: [
      'Tech, business and cultural conversations about Mindera and software engineering in general',
    ],
    cta: { label: 'Podcasts', href: '/what-i-do/podcasts' },
    image: yellowBox,
    imageAlt: 'Two hosts recording a Yellow Box podcast episode on a sofa',
  },
  {
    title: "Team Workshop for A'Corda",
    href: '/what-i-do/improver',
    description: ["A team & feedback workshop for A'Corda, a non-profit summer camp association."],
    cta: { label: 'Coach', href: '/what-i-do/improver' },
    image: acorda,
    imageAlt: "A team workshop with A'Corda volunteers gathered around a table",
  },
  {
    title: 'Is this real life or just fantasy...',
    href: '/what-i-do/talks-workshops',
    description: [
      'Why do I say we treat people like adults at Mindera? And what is all that self-organization about?',
    ],
    cta: { label: 'Talks', href: '/what-i-do/talks-workshops' },
    video: { provider: 'vimeo', id: '662771995', hash: 'cf530c4bdb' },
  },
];

export const useful: Useful[] = [
  {
    title: 'Porto Guide',
    href: '/porto/visit-porto',
    description: 'A quick guide on places to visit, eat and have fun!',
    image: portoGuide,
    imageAlt: 'Porto riverside at dusk, seen from across the Douro',
  },
  {
    title: 'My Apps',
    href: '/my-apps',
    description: "I've been developing a number of free apps.",
    image: myApps,
    imageAlt: 'Illustration of the same app running in a browser window and on a phone',
  },
  {
    title: 'Tesla Utils',
    href: '/tesla',
    description:
      'If you have a Tesla, here you can find a list of utilities: some useful, some just for fun.',
    image: teslaUtils,
    imageAlt: 'Tesla logo',
    imageFit: 'contain',
  },
];

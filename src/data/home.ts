/**
 * Home page content, ported from the Google Sites original
 * (https://www.neteinstein.org/ — crawl snapshot in `.crawl/report.json`).
 */
import type { Glimpse, Role, Useful } from './types';

import yellowBox from '../assets/home/yellow-box-podcast.webp';
import portoGuide from '../assets/home/porto-guide.webp';
import games from '../assets/home/games.webp';
import myApps from '../assets/home/my-apps.webp';
import teslaUtils from '../assets/home/tesla-utils.webp';
import acorda from '../assets/what-i-do/improver/workshop-classroom.webp';
import minderaJourneyMap from '../assets/what-i-do/tech-engineer/mindera-journey-map.webp';

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
      { label: 'Mindera', href: 'https://www.mindera.com' },
    ],
  },
  { emoji: '🧠', text: ['AI Coach'] },
  {
    emoji: '🔁',
    text: [
      'Helping ',
      { label: 'teams get better', href: '/what-i-do/improver' },
      ' with ',
      { label: 'LoopGain', href: 'https://www.loopgain.org' },
    ],
  },
  {
    emoji: '🎙️',
    text: ['Podcast Host @ ', { label: 'Mindera Yellow Box', href: '/what-i-do/podcasts' }],
  },
  {
    emoji: '🤖',
    past: true,
    text: ['Co-Founder of ', { label: 'GDG Porto', href: 'https://www.gdgporto.xyz' }],
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
    title: 'Mobile Lead, AI-Enabled SDLC Craftsman at Mindera',
    href: '/what-i-do/tech-engineer',
    description: [
      'My journey at ',
      { label: 'Mindera', href: 'https://www.mindera.com' },
      ', project by project, from Developer to Mobile Lead & AI Coach',
    ],
    cta: { label: 'Tech Engineer', href: '/what-i-do/tech-engineer' },
    image: minderaJourneyMap,
    imageAlt:
      'Hand-drawn map titled "Pedro Vicente" tracing a path from "Arrived Mindera" through flags for NAP 2016, TUI 2016, Waitrose 2016, Smartbox 2019, Rows 2020, New Look 2020, Waitrose 2021 and Kingfisher 2022, with a legend for TL (Tech Lead), BE (Back End) and DL (Delivery Lead)',
  },
  {
    title: 'Approvals Still Pending – Learning From Our AI Mistakes',
    href: '/what-i-do/talks-workshops',
    description: [
      'My talk at the Mindera AI Insights Event 2026: what our AI mistakes taught us about building software.',
    ],
    cta: { label: 'Talks', href: '/what-i-do/talks-workshops' },
    video: { provider: 'youtube', id: '8tqpijwZ7ao' },
  },
  {
    title: 'Leadership, Team Performance and Feedback Workshops',
    href: '/what-i-do/improver',
    description: ["A team & feedback workshop for A'Corda, a non-profit summer camp association."],
    cta: { label: 'Coach', href: '/what-i-do/improver' },
    image: acorda,
    imageAlt:
      'A facilitator stands by a screen while participants seated around classroom tables listen, smiling',
  },
  {
    title: 'Yellow Box Podcast',
    href: '/what-i-do/podcasts',
    description: [
      'Tech, business and cultural conversations about Mindera and software engineering in general',
    ],
    cta: { label: 'Podcasts', href: '/what-i-do/podcasts' },
    image: yellowBox,
    imageAlt: 'Pedro Vicente at a podcast microphone, next to the title "Mobile & Mindera"',
  },
];

export const useful: Useful[] = [
  {
    title: 'Porto Guide',
    href: '/porto/visit-porto',
    description: 'A quick guide on places to visit, eat and have fun!',
    image: portoGuide,
    imageAlt: 'Illustration of the Ribeira do Porto skyline at dusk, with the Dom Luís bridge',
  },
  {
    title: 'My Apps',
    href: '/my-apps',
    description: "I've been developing a number of free apps.",
    image: myApps,
    imageAlt: 'Illustration of the same app running in a browser window and on a phone',
  },
  {
    title: 'Group Games',
    href: '/games',
    description: '365 group games for parties, camps and team building, ready to play and print.',
    image: games,
    imageAlt:
      'Illustration of two people tossing a balloon to each other, framed like a card with a dice, a smiley and a star',
  },
  {
    title: 'Tesla Utils',
    href: '/tesla',
    description:
      'If you have a Tesla, here you can find a list of utilities: some useful, some just for fun.',
    image: teslaUtils,
    imageAlt: 'The Tesla logo as a glossy sticker on a dark card',
  },
];

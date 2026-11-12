/**
 * Home page content, ported from the Google Sites original
 * (https://www.neteinstein.org/ — crawl snapshot in `.crawl/report.json`).
 */
import type { Glimpse, Recent, Role } from './types';

import yellowBox from '../assets/home/yellow-box-podcast.webp';
import kid1 from '../assets/home/kids/kid-1.svg';
import kid2 from '../assets/home/kids/kid-2.svg';
import kid3 from '../assets/home/kids/kid-3.svg';
import acorda from '../assets/what-i-do/improver/workshop-classroom.webp';
import minderaJourneyMap from '../assets/what-i-do/tech-engineer/mindera-journey-map.webp';
import goodCompany from '../assets/my-apps/good-company-feature.webp';
import scamDetector from '../assets/my-apps/scam-detector-feature.webp';
import mathClash from '../assets/my-apps/math-clash-feature.webp';
import dashface from '../assets/my-apps/dashface-feature.webp';

export const welcome = {
  title: 'Welcome to my little virtual home',
  /** Rendered with a 🍪 after it, as on the original. */
  cookies: 'Do you want some cookies?',
};

export const roles: Role[] = [
  {
    emoji: '👨‍👩‍👦‍👦',
    text: ['Husband & Father of '],
    // Drawn from a photo of the boys, in the order the original's 👱🏻‍♂️👨🏽👨🏼‍🦲 listed them.
    portraits: { drawings: [kid1, kid2, kid3], label: 'three boys' },
  },
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

/**
 * What's new on the site, newest first. The home page shows the latest four,
 * so adding one pushes the oldest off — delete it here when that happens.
 */
export const recent: Recent[] = [
  {
    kind: 'Watch face',
    date: '2026-11',
    title: 'Dashface',
    href: '/my-apps#dashface',
    description:
      'A battery-friendly Wear OS watch face: health bars around the bezel, the weather and your next meetings in the middle.',
    image: dashface,
    imageAlt:
      'Dashface banner: the tagline "Your day at a glance, on your wrist." next to a round watch face showing the weather for morning, afternoon and night, the time 10:08, the next two meetings, a skin temperature bar and, around the bezel, battery bars, a trail of footprints for steps, weather icons for stress and a heartbeat line for heart rate',
    links: [
      {
        store: 'google-play',
        href: 'https://play.google.com/store/apps/details?id=org.neteinstein.dashface',
      },
    ],
  },
  {
    kind: 'New app',
    date: '2026-11',
    title: 'Good Company',
    href: '/my-apps#good-company',
    description:
      "A little CRM for friendship, now in alpha testing: birthdays, catch-ups and a gentle nudge before it's been too long.",
    image: goodCompany,
    imageAlt:
      "Good Company banner: five phones showing the home screen, a friend's page, the I'm with… check-in, the Coming up agenda in dark mode and AI ideas",
  },
  {
    kind: 'Browser extension',
    date: '2026-11',
    title: 'Scam Detector',
    href: '/my-apps#scam-detector',
    description:
      'Warns you before a fake login, a brand-new domain or a marketplace chat scam gets your money.',
    image: scamDetector,
    imageAlt:
      'Scam Detector banner: a red shield with an exclamation mark, the title and the tagline "Warns you before a fake login, a brand-new domain or a marketplace chat scam gets your money."',
  },
  {
    kind: 'New page',
    date: '2026-11',
    title: 'My Games',
    href: '/my-games',
    description:
      'Games for 2 to 4 players on one screen: MathClash, Memory Clash and Halloween Minder, free in the browser.',
    image: mathClash,
    imageAlt:
      'MathClash banner: the app icon, a blue and red square split by a diagonal with a plus and a times sign, next to the title and the tagline "Two players, one screen"',
  },
];

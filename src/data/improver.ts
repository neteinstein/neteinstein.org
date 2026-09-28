/**
 * /what-i-do/improver content, ported from the Google Sites original
 * (https://www.neteinstein.org/what-i-do/improver — crawl snapshot in
 * `.crawl/report.json`). The "Improver?" prose lives in
 * `src/content/pages/improver.mdx`; everything structured is here.
 *
 * Copy is verbatim, quirks included. Bold/italic runs mirror the original.
 */
import type {
  ImproverFamily,
  ImproverFeedback,
  ImproverIntro,
  ImproverQuote,
  ImproverWorkshops,
} from './types';

import teamImage from '../assets/what-i-do/improver/team-i-for-improvement.webp';
import deckImage from '../assets/what-i-do/improver/loopgain-feedback-decks.webp';
import classroom from '../assets/what-i-do/improver/workshop-classroom.webp';
import legoBuild from '../assets/what-i-do/improver/workshop-lego-build.webp';
import circle from '../assets/what-i-do/improver/workshop-circle.webp';
import stickTower from '../assets/what-i-do/improver/workshop-stick-tower.webp';
import cardGame from '../assets/what-i-do/improver/workshop-card-game.webp';
import familySilhouette from '../assets/what-i-do/improver/family-silhouette.webp';

const MY_APPS = '/my-apps';
const LOOPGAIN_TEAMS_APP = `${MY_APPS}#loopgain`;
const LOOPGAIN_SITE = 'https://www.loopgain.org';
/** The footer's "Drop a 👋" card, which carries every contact link. */
const CONTACT = '#contact';
const FAMILY_MOMENTS_APP = `${MY_APPS}#family-moments`;
const COUPLE_MOMENTS_APP = `${MY_APPS}#couple-moments`;
const FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLSf8F6_thSujbMg-awqkQYA4wABkjGjRGAK8bwWs-s1duE6WpQ';

/** The banner quote. */
export const quote: ImproverQuote = {
  text: '"Don\'t show up to prove, show up to improve"',
  author: 'Simon Sinek',
};

export const intro: ImproverIntro = {
  id: 'improver',
  eyebrow: 'The title',
  title: 'Improver?',
  card: {
    image: teamImage,
    alt: 'The word TEAM, with an arrow pointing at a blue letter “i” hidden inside the A',
    href: LOOPGAIN_TEAMS_APP,
    linkLabel: '(LoopGain: Teams app)',
  },
  tagline: [
    { text: 'The "I" in Team should stand for ', strong: true },
    { text: '"I"mprovement!', strong: true, mark: true },
  ],
};

export const feedback: ImproverFeedback = {
  id: 'feedback',
  eyebrow: 'LoopGain: Teams',
  title: 'Feedback',
  subtitle: "(some call it evaluation... but that's a long story)",
  story: [
    {
      text: [
        'After working in several companies and volunteer organizations, with teams from very small to very large, we found one thing that was always an issue: ',
        { text: 'Empathy-driven', strong: true, em: true, mark: true },
        { text: ' Feedback', strong: true, mark: true },
      ],
    },
    {
      text: [
        'This happened at organizations that had evaluation processes and at ones that preferred spontaneous day-to-day feedback. It happened with waterfall, with agile and with no standard methodology at all... ',
        { text: 'all lacked a common time for teams to really stop and talk!', strong: true },
      ],
    },
    {
      statement: true,
      text: [
        {
          text: 'Talk about how we feel, what we like, dislike and how to improve as a team and enjoy our work even more!',
          strong: true,
        },
      ],
    },
    {
      text: [
        'Yes, most of us gave feedback to one another, but… we were mainly addressing superficial stuff, or just work-related processes, so…',
      ],
    },
  ],
  envision: {
    lead: [{ text: 'I envision a session focused on the team', strong: true }, ':'],
    items: [
      'whether the team members liked working with each other;',
      'how the team members can improve and get even better at working with each other;',
    ],
  },
  actions: [
    { label: 'Get the App', href: LOOPGAIN_TEAMS_APP },
    { label: 'Get the deck', href: LOOPGAIN_SITE },
  ],
  training: [
    [
      'We provide training on feedback both for session moderators and teams, ',
      { text: 'reach me', href: CONTACT },
      '.',
    ],
  ],
  video: { id: '8KSUERFYJRw', title: 'What is LoopGain?' },
  deck: {
    image: deckImage,
    alt: 'Two LoopGain card boxes: the “Feedback Sessions Deck” and the Portuguese “Baralho para sessões de feedback”',
    href: LOOPGAIN_TEAMS_APP,
    linkLabel: '(LoopGain: Teams app)',
    caption: "LoopGain: Teams - Much more than a deck of cards, it's feedback for Teams made easy!",
  },
};

export const workshops: ImproverWorkshops = {
  id: 'workshops',
  eyebrow: 'Workshops',
  title: 'Improve Teams Workshops!',
  subtitle: "I've been creating workshops to improve teams for a while.",
  intro: [
    "Being part of several NGOs and working in software engineering, I've always worked with teams.",
    'That led me to build some unusual workshops that make teams question, think, smile, laugh, doubt and wonder, so they can finally understand on their own what can be improved.',
  ],
  verbs: ['question', 'think', 'smile', 'laugh', 'doubt', 'wonder'],
  modulesIntro:
    'The workshops are designed specifically for each organization, according to its preferences and needs, but they can include some of these modules.',
  modules: [
    {
      title: 'Team',
      items: [
        { emoji: '🚀', label: 'Personal growth' },
        { emoji: '🗣', label: 'Communication' },
        { emoji: '⭐️', label: 'Feedback vs. (or plus) evaluation?' },
        { emoji: '😡', label: 'Conflict & Feeling safe' },
        { emoji: '💥', label: 'Failure' },
        { emoji: '🧠', label: 'How memory tricks us' },
      ],
    },
    {
      title: 'Leadership',
      items: [
        { emoji: '✊', label: 'Do we need someone in command?' },
        { emoji: '🤝', label: 'How far can we trust, how far must we validate?' },
        { emoji: '👂', label: 'Intent-based leadership' },
        { emoji: '🙇‍♂️', label: 'Servant leadership' },
      ],
    },
    {
      title: 'Improve processes',
      items: [
        { emoji: '🅿', label: 'Purpose: Why do we do ___ ?' },
        { emoji: '📊', label: 'Performance Evaluation' },
        { emoji: '🤓', label: 'Interviews: what are the right questions? Or the right answers...' },
        { emoji: '👓', label: 'Transparency by default' },
      ],
    },
  ],
  photos: [
    {
      image: classroom,
      alt: 'A facilitator stands by a screen while participants seated around classroom tables listen, smiling',
    },
    {
      image: legoBuild,
      alt: 'A participant’s hands beside a small, multicoloured LEGO build on a sheet of notes',
    },
    {
      image: circle,
      alt: 'Participants sitting in a circle in a stone-walled room, laughing, while a standing facilitator talks',
    },
    {
      image: stickTower,
      alt: 'A group standing around a table, building a structure out of thin sticks together',
    },
    {
      image: cardGame,
      alt: 'A facilitator lays cards on a table while a group of young people seated around it watch',
    },
  ],
  cta: "Curious? Fill in the form below and let's talk 🙃",
  note: "Note: if you work at a non-profit or a school, I'm happy to do this pro bono.",
  form: {
    action: `${FORM}/formResponse`,
    fields: [
      { entry: 'entry.232342842', label: 'Name', required: true },
      { entry: 'entry.2141756413', label: 'Email', required: true, type: 'email' },
      { entry: 'entry.1107375189', label: 'Phone number', type: 'tel' },
      { entry: 'entry.168693155', label: 'Comments', type: 'textarea' },
    ],
    submitLabel: 'Send',
    successMessage: "Thanks! I'll reach out soon.",
    fallbackLabel: 'Prefer the original Google Form?',
    fallbackHref: `${FORM}/viewform`,
  },
};

export const family: ImproverFamily = {
  id: 'family',
  eyebrow: 'Family & Couple',
  title: 'LoopGain Family & Couple',
  subtitle: 'After teams...',
  status: 'Live',
  paragraphs: [
    [
      "I've been a husband for 15+ years and a father (of three) for 12 years... that experience made me want to build something to kick-start conversations and bring (more) empathy-driven feedback to families and couples.",
    ],
    [
      'This is now available on ',
      { text: 'LoopGain: Family Moments', strong: true, href: FAMILY_MOMENTS_APP },
      ' and ',
      { text: 'LoopGain: Couple Moments', strong: true, href: COUPLE_MOMENTS_APP },
      '.',
    ],
    ['If you are interested, please reach out to me for more info.'],
  ],
  illustration: {
    image: familySilhouette,
    alt: 'Silhouette of a family — two adults and two children, some with their arms raised',
  },
};

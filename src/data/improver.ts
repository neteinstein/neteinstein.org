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

const LOOPGAIN = 'http://www.loopgain.org';
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
    href: LOOPGAIN,
    linkLabel: '(LoopGain website)',
  },
  tagline: [
    { text: 'The "I" on a Team, should be from ', strong: true },
    { text: '"I"mprovement!', strong: true, mark: true },
  ],
};

export const feedback: ImproverFeedback = {
  id: 'feedback',
  eyebrow: 'LoopGain',
  title: 'Feedback',
  subtitle: "(some call it evaluation... but that's a long story)",
  story: [
    {
      text: [
        'After working in several companies and volunteer organizations, with very small too very to large teams, we found one thing that was always an issue: ',
        { text: 'Empathy driven', strong: true, em: true, mark: true },
        { text: ' Feedback', strong: true, mark: true },
      ],
    },
    {
      text: [
        'This happened while at organizations that had evaluation processes or where spontaneously day-to-day feedback was preferred. It happened while working with waterfall, agile or with no standard methodology at all... ',
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
        'Yes, most of us gave feedback to one another, but… we were mainly addressing superficial stuff, or just work related processes, so…',
      ],
    },
  ],
  envision: {
    lead: [{ text: 'I envision a session focused on the team', strong: true }, ':'],
    items: [
      'if the team members liked working with each other;',
      'how can the team members improve and be even better at working with each other;',
    ],
  },
  knowMore: { label: 'Know more.', href: LOOPGAIN },
  training: [
    ['At LoopGain we provide training on feedback both for session moderators and teams.'],
    [
      'If you want to talk more about this, check the website or ',
      { text: 'reach me', href: 'mailto:neteinstein@gmail.com' },
      '.',
    ],
  ],
  video: { id: '8KSUERFYJRw', title: 'What is LoopGain?' },
  deck: {
    image: deckImage,
    alt: 'Two LoopGain card boxes: the “Feedback Sessions Deck” and the Portuguese “Baralho para sessões de feedback”',
    href: LOOPGAIN,
    linkLabel: '(LoopGain website)',
    caption: "LoopGain - Much more than a deck of cards, it's feedback for Teams made easy!",
  },
};

export const workshops: ImproverWorkshops = {
  id: 'workshops',
  eyebrow: 'Workshops',
  title: 'Improve Teams Workshops!',
  subtitle: "I've been creating workshops to improve teams for a while.",
  intro: [
    "By being part of some NGO's and working on the Software Engineering world, working with teams was always present.",
    'That lead me to build some unusual workshops that will make the team question, think, smile, laugh, doubt, and wonder to finally be able to understand on their own what can be improved.',
  ],
  verbs: ['question', 'think', 'smile', 'laugh', 'doubt', 'wonder'],
  modulesIntro:
    'The workshops are specifically designed for each organization according to their preference/needs but they can contain some of these modules.',
  modules: [
    {
      title: 'Team',
      items: [
        { emoji: '🚀', label: 'Personal growth' },
        { emoji: '🗣', label: 'Communication' },
        { emoji: '⭐️', label: 'Feedback vs or plus Evaluation?' },
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
        { emoji: '👂', label: 'Intent based leadership' },
        { emoji: '🙇‍♂️', label: 'Servant leadership' },
      ],
    },
    {
      title: 'Improve processes',
      items: [
        { emoji: '🅿', label: 'Purpose: Why do we do ___ ?' },
        { emoji: '📊', label: 'Performance Evaluation' },
        { emoji: '🤓', label: 'Interviews: What are the right questions? Or right answers....' },
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
  cta: "Curious? Fill the form below and let's talk 🙃",
  note: "Note: If you work at a non-profit/school I'm glad to provide this pro bono.",
  form: {
    src: `${FORM}/viewform?embedded=true`,
    title: 'Improve Teams Workshops contact form (Google Forms)',
    fallbackLabel: 'Open the form in a new tab',
    height: 860,
    fallbackHref: `${FORM}/viewform`,
  },
};

export const family: ImproverFamily = {
  id: 'family',
  eyebrow: 'Family',
  title: 'LoopGain Family',
  subtitle: 'After teams...',
  status: 'Alpha',
  paragraphs: [
    "I'm a husband for 10+ years and father (of 3) for our 7... that experience made me want to build something to bootstrap conversations and bring (more) empathy driven feedback to family.",
    'This is still on "Alpha", and may in the future grow to something like LoopGain\'s deck.',
    'If you are interested please reach me for more info.',
  ],
  illustration: {
    image: familySilhouette,
    alt: 'Silhouette of a family — two adults and two children, some with their arms raised',
  },
};

/**
 * /teams/workshops — the full-day team workshop: three themes, each with a
 * few of the games and stories it uses. The intro prose lives in
 * `src/content/pages/workshops.mdx`; everything structured is here.
 *
 * Activities name a game and say what it is for, never how it runs: the
 * mechanics stay in the facilitator's notes, so they still surprise the
 * teams that later play them.
 */
import type { ImproverImage, WorkshopTheme } from './types';

import circle from '../assets/what-i-do/improver/workshop-circle.webp';

/** The Improver page's LoopGain chapter, with the app, the deck and the video. */
const LOOPGAIN = '/what-i-do/improver#feedback';

export const photo: ImproverImage = {
  image: circle,
  alt: 'Participants sitting in a circle in a stone-walled room, laughing, while a standing facilitator talks',
};

export const leadership: WorkshopTheme = {
  id: 'leadership',
  eyebrow: 'Who leads?',
  title: 'Leadership',
  subtitle: 'A leader is useful, but not indispensable.',
  intro: [
    'Does a team need someone in command? How far can it trust, and how far must it check? We look at what a leader really adds, what happens when nobody holds the wheel, and why the best leaders make people feel safe rather than watched.',
    'Fewer slides, more evidence: the team puts its own theories about leadership to the test, then compares notes with a few well-known stories.',
  ],
  topics: [
    'Do we need someone in command?',
    'Intent-based leadership',
    'How leadership emerges',
    'Performance vs. trust',
    'Speaking up to the captain',
  ],
  activities: [
    {
      emoji: '🧱',
      name: 'The LEGO Build',
      format: 'Team game',
      purpose:
        'Small teams build something together. What matters is how they get there: who ends up leading, and how much depends on communicating well.',
    },
    {
      emoji: '🃏',
      name: 'The Mind',
      format: 'Game',
      purpose:
        "Puts the room's theories about what a team needs to work as one to the test, starting with what a leader really adds.",
    },
    {
      emoji: '⚓️',
      name: 'Turn the Ship Around',
      format: 'Story',
      purpose: 'What happens when a captain stops giving orders: intent-based leadership.',
    },
    {
      emoji: '🛬',
      name: 'United Flight 173',
      format: 'Story',
      purpose:
        'A crew so absorbed in one problem that a bigger one went unsaid, and why airlines changed how crews train.',
    },
    {
      emoji: '🎖',
      name: 'Navy SEALs: performance vs. trust',
      format: 'Story',
      purpose:
        'Why the best teams pick trust over raw performance, while most companies only ever measure performance.',
    },
  ],
};

export const bestPractices: WorkshopTheme = {
  id: 'best-practices',
  eyebrow: 'What works?',
  title: 'Best practices',
  subtitle: 'Trust is built one coffee break at a time.',
  intro: [
    'What does a team need to work? Everyone in the room has an answer, and they rarely match. We start there, then look at communication, perception and the habits that turn a group of talented people into a team.',
    "Expect a few uncomfortable truths too: a team that works isn't always a pleasant one, companies often reward their stars over their teams, and what matters most is built slowly, every time someone asks a colleague for help.",
  ],
  topics: [
    'Extreme alignment',
    'Social cohesion',
    'Stars vs. teams',
    'Communication & perception',
    'Knowing yourself',
  ],
  path: {
    label: 'The action plan',
    steps: [
      'Create a safe environment',
      'Increase communication',
      'Increase trust',
      'Increase happiness and team performance',
    ],
  },
  activities: [
    {
      emoji: '💬',
      name: 'What makes a team work?',
      format: 'Quick share',
      purpose:
        'Brings out what the room believes matters most for a team, contradictions included.',
    },
    {
      emoji: '👀',
      name: 'Perception check',
      format: 'Quick game',
      purpose: 'A short reminder that communication helps, but perception gets in the way.',
    },
    {
      emoji: '🎙',
      name: 'Who gets to talk?',
      format: 'Team game',
      purpose:
        'Makes each person aware of how they take part in a conversation, and how others do.',
    },
    {
      emoji: '🪢',
      name: 'Untie the Knot',
      format: 'Team game',
      purpose: 'Teamwork and coordination, and a great warm-up for a feedback round afterwards.',
    },
    {
      emoji: '🔄',
      name: 'Flip It Over',
      format: 'Team game',
      purpose: 'Creative problem-solving where the team only succeeds if everyone does.',
    },
    {
      emoji: '🧭',
      name: 'Know yourself',
      format: 'Reflection',
      purpose:
        'Personality preferences, not as a box to put anyone in, but as a way to talk about different motivations, styles and preferences.',
    },
  ],
};

export const feedback: WorkshopTheme = {
  id: 'feedback',
  eyebrow: 'How we talk',
  title: 'Feedback',
  subtitle: 'There is no failure, just feedback.',
  intro: [
    'Most teams give each other feedback, yet few ever stop to really talk. We look at the difference between feedback and evaluation, why criticism so easily turns personal, and why avoiding conflict can hurt a team as much as a fight.',
    'It ends in practice, not theory: the team tries it for real, in a safe space, and leaves with a way to keep doing it.',
  ],
  topics: [
    'Feedback vs. evaluation',
    'Unhealthy peace vs. unhealthy conflict',
    "Ask for feedback, don't wait for it",
    'Speak from the "I", not the "we"',
    'Describe the behavior, not the person',
  ],
  activities: [
    {
      emoji: '⚖️',
      name: 'Feedback or evaluation?',
      format: 'Group exercise',
      purpose:
        'Shows what constructive feedback looks like, and how easy it is to slip into judging people instead.',
    },
    {
      emoji: '🍾',
      name: 'The failure party',
      format: 'Story',
      purpose: 'A games studio that celebrates its flops, and what it gets out of them.',
    },
    {
      emoji: '🌱',
      name: "Don't punish the behavior you want",
      format: 'Story',
      purpose: 'Why a well-meant "finally!" can undo the very change you asked for.',
    },
    {
      emoji: '💛',
      name: 'Harder to be kind than clever',
      format: 'Story',
      purpose: 'A lesson Jeff Bezos got as a boy, about the cost of being right.',
    },
  ],
  link: {
    text: 'To keep the conversation going after the workshop, LoopGain: Teams turns feedback sessions into a card game.',
    label: 'Discover LoopGain: Teams',
    href: LOOPGAIN,
  },
};

export const themes: WorkshopTheme[] = [leadership, bestPractices, feedback];

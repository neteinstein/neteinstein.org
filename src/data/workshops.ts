/**
 * /teams/workshops — the full-day team workshop: three themes, each with a
 * few of the games and stories it uses, then the wider toolbox a day can
 * draw on. The intro prose lives in `src/content/pages/workshops.mdx`;
 * everything structured is here.
 *
 * Activities name a game and say what it is for, never how it runs: the
 * mechanics stay in the facilitator's notes, so they still surprise the
 * teams that later play them.
 */
import type { ImproverImage, WorkshopTheme, WorkshopToolbox } from './types';

import circle from '../assets/what-i-do/improver/workshop-circle.webp';
import classroom from '../assets/what-i-do/improver/workshop-classroom.webp';
import legoBuild from '../assets/what-i-do/improver/workshop-lego-build.webp';
import stickTower from '../assets/what-i-do/improver/workshop-stick-tower.webp';
import cardGame from '../assets/what-i-do/improver/workshop-card-game.webp';

/** The Improver page's LoopGain chapter, with the app, the deck and the video. */
const LOOPGAIN = '/what-i-do/improver#feedback';

/**
 * The hero cycles through these; the first shows with JS off. Same photos
 * (and alts) as the Improver page's gallery, so Portuguese already has them.
 */
export const photos: ImproverImage[] = [
  {
    image: circle,
    alt: 'Participants sitting in a circle in a stone-walled room, laughing, while a standing facilitator talks',
  },
  {
    image: stickTower,
    alt: 'A group standing around a table, building a structure out of thin sticks together',
  },
  {
    image: classroom,
    alt: 'A facilitator stands by a screen while participants seated around classroom tables listen, smiling',
  },
  {
    image: legoBuild,
    alt: 'A participant’s hands beside a small, multicoloured LEGO build on a sheet of notes',
  },
  {
    image: cardGame,
    alt: 'A facilitator lays cards on a table while a group of young people seated around it watch',
  },
];

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

export const highPerformingTeams: WorkshopTheme = {
  id: 'high-performing-teams',
  eyebrow: 'What works?',
  title: 'High-performing teams',
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

export const themes: WorkshopTheme[] = [leadership, highPerformingTeams, feedback];

/**
 * The games and experiments still being tried out for the day. The Human
 * Knot is left out: it is Untie the Knot, already under High-performing teams.
 */
export const toolbox: WorkshopToolbox = {
  id: 'toolbox',
  eyebrow: 'Pick and mix',
  title: 'The toolbox',
  subtitle: 'More games and experiments to pick from.',
  intro: [
    "Beyond the core of the day there's a wider toolbox: social experiments borrowed from psychology and behavioral economics, and shorter games to wake a room up, get people talking or have them decide together. Each day picks from it, depending on what the team needs.",
    'Same rule as above: what they are called and what they are for, never how they run.',
  ],
  sets: [
    {
      title: 'Social experiments',
      intro:
        'Classic experiments, turned into something a team can live through and then talk about.',
      groups: [
        {
          emoji: '🤝',
          title: 'Trust & cooperation',
          intro: 'When it pays to cooperate, and why trust breaks so easily.',
          tools: [
            {
              name: 'The Goldfish Game',
              purpose:
                'The tragedy of the commons: how sensible individual choices add up to a collective disaster.',
            },
            {
              name: 'The Ultimatum Game',
              purpose: 'Fairness vs. pure logic: why people turn down a gain that feels unfair.',
            },
            {
              name: 'The Red/Blue Game',
              purpose:
                'Cooperation vs. betrayal, and how fragile trust is when winning comes at someone else’s expense.',
            },
            {
              name: 'The Prisoner’s Dilemma Tournament',
              purpose:
                'The strategy that wins over time, and what it says about working in a team.',
            },
            {
              name: 'The Public Goods Game',
              purpose:
                'Individual vs. collective interest, and why teams need norms so everyone carries their weight.',
            },
            {
              name: 'The Lemonade Stand',
              purpose:
                'Competition, price wars and collusion, and why cartels tempt but rarely hold.',
            },
            {
              name: 'The Pareto Trade',
              purpose: 'Negotiating for win-win: creating value instead of just claiming it.',
            },
            {
              name: 'The Dollar Auction',
              purpose: 'Irrational escalation: why we keep paying just to avoid a loss.',
            },
            {
              name: 'The Trading Game',
              purpose:
                'The endowment effect: why we overvalue our own ideas and struggle to kill a failing project.',
            },
          ],
        },
        {
          emoji: '🗳️',
          title: 'Groups & decisions',
          intro: 'How groups decide, and how they agree on something nobody wanted.',
          tools: [
            {
              name: 'The Abilene Paradox',
              purpose: 'Groupthink: going along to get along, even when nobody wants to go.',
            },
            {
              name: 'The Abilene Destination',
              purpose: 'Catching groupthink early, and why a team needs a devil’s advocate.',
            },
            {
              name: 'The Asch Experiment',
              purpose:
                'The power of conformity, and the courage it takes to be the lone dissenting voice.',
            },
            {
              name: 'The Information Cascade',
              purpose:
                'How a group reaches the wrong conclusion even when its people have good information.',
            },
            {
              name: 'The Silent Ranking',
              purpose: 'A better way to brainstorm, where silence becomes a tool.',
            },
            {
              name: 'Lost at Sea',
              purpose: 'The wisdom of the crowd: when a group is smarter than any one of us.',
            },
            {
              name: 'Desert Survival',
              purpose:
                'Consensus vs. majority: does the team use what it knows, or follow the loudest voice?',
            },
            {
              name: 'Survival on the Moon',
              purpose: 'Whether a team can get past expert intimidation and hear every voice.',
            },
            {
              name: 'The Shipwreck',
              purpose: 'Deciding together under pressure, and the hidden values behind the choice.',
            },
            {
              name: 'The Trolley Problem, live',
              purpose: 'Moral intuition: how our logic shifts as things get personal.',
            },
          ],
        },
        {
          emoji: '👑',
          title: 'Power & leadership',
          intro: 'What power, structure and resources do to the people inside a system.',
          tools: [
            {
              name: 'StarPower',
              purpose: 'Inequality and power: how they change behavior and motivation.',
            },
            {
              name: 'The King’s Court',
              purpose:
                'Arbitrary power: how quickly people adapt to a hierarchy, and how it changes them.',
            },
            {
              name: 'The Blind Polygon',
              purpose:
                'Leadership and mental models: reaching a goal when nobody sees the big picture.',
            },
            {
              name: 'The Trust Battery',
              purpose: 'How transparency, or the lack of it, affects speed and quality.',
            },
            {
              name: 'The Minefield',
              purpose:
                'Psychological safety and trust between the one who guides and the one who does.',
            },
            {
              name: 'The Success Ladder',
              purpose:
                'The Matthew effect: how a system can make people look untalented when they are just badly placed.',
            },
            {
              name: 'The Scarcity Simulation',
              purpose: 'Cognitive load: what an overworked team loses, beyond time.',
            },
          ],
        },
        {
          emoji: '📡',
          title: 'Communication & silos',
          intro: 'What gets lost between people, layers and teams.',
          tools: [
            {
              name: 'The Color Blind',
              purpose:
                'Precision of language: building words that mean the same thing to everyone.',
            },
            {
              name: 'The Zome Construction',
              purpose:
                'The mental model trap: why a team needs a shared vocabulary before it starts.',
            },
            {
              name: 'The Silent Build',
              purpose:
                'The silo effect: how perfect work in every team can still add up to failure.',
            },
            {
              name: 'The Telephone Drawing',
              purpose:
                'How a vision gets distorted on its way through the layers of an organization.',
            },
            {
              name: 'The Broken Square',
              purpose:
                'Empathy and observation: success means looking at what the whole group needs, not just your task.',
            },
            {
              name: 'The Five Square',
              purpose:
                'Collaborative vs. competitive mindsets: a team isn’t done until everyone is.',
            },
          ],
        },
        {
          emoji: '🔍',
          title: 'Bias & perception',
          intro: 'How what we expect shapes what we see, and how others see us.',
          tools: [
            {
              name: 'The Labels Party',
              purpose:
                'Expectation and bias: how labels and social cues shape confidence and behavior.',
            },
            {
              name: 'Robbers Cave, lite',
              purpose: 'Tribalism: how quickly an “us vs. them” mindset takes hold.',
            },
            {
              name: 'The Invisible Gorilla',
              purpose:
                'Selective attention: we don’t see the world as it is, we see what we look for.',
            },
            {
              name: 'The Liar’s Confidence',
              purpose:
                'The illusion of transparency: the gap between how we feel and how we come across.',
            },
          ],
        },
        {
          emoji: '🏗️',
          title: 'Teams at work',
          intro: 'What great teams do differently while they work.',
          tools: [
            {
              name: 'The Marshmallow Challenge',
              purpose: 'Iteration vs. planning: why prototyping beats theory.',
            },
            {
              name: 'Marshmallow vs. Spaghetti',
              purpose: 'The vulnerability loop: why owning up to mistakes fast beats being polite.',
            },
            {
              name: 'The Rope Pull',
              purpose:
                'Social loafing: why effort drops as a group grows, and how visible contributions help.',
            },
          ],
        },
      ],
    },
    {
      title: 'Shorter games',
      intro: 'Quick ones, to open the day, change its pace or warm up for what comes next.',
      groups: [
        {
          emoji: '⚡️',
          title: 'Energizers',
          intro: 'To bring everyone into the room, at the start or after lunch.',
          tools: [
            { name: 'Keep up the Balloons' },
            { name: 'Alternative Application', purpose: 'Creative thinking' },
            { name: 'Paper Plane Parade', purpose: 'Teamwork, creative thinking' },
            { name: 'Word Association', purpose: 'Quick thinking, communication' },
            { name: 'Caption This', purpose: 'Creative thinking, collaboration' },
            { name: 'Emoji Quiz', purpose: 'Creative thinking, problem-solving' },
            { name: 'Ninja' },
            { name: 'Frustration', purpose: 'Staying calm under pressure' },
            { name: 'Pirate’s Treasure' },
            { name: 'Stop-Walk', purpose: 'Listening skills' },
            { name: 'Lightning Scavenger Hunt' },
            { name: 'Guess the Emoji Board' },
          ],
        },
        {
          emoji: '👂',
          title: 'Communication',
          intro: 'Listening, observing and making yourself understood.',
          tools: [
            { name: 'Classification', purpose: 'Getting to know each other' },
            { name: 'Sneak a Peek', purpose: 'Observation, communication' },
            { name: 'Who am I?', purpose: 'Communication, problem-solving' },
            { name: 'Show and Tell', purpose: 'Public speaking, communication' },
            { name: 'Copy Cat', purpose: 'Listening, comprehension' },
            { name: 'Quiz Question of the Week', purpose: 'Getting people to interact' },
            { name: 'Blind Retriever', purpose: 'Listening, communication' },
            { name: '3-Question Mingle', purpose: 'Getting to know each other' },
            { name: 'The Communication Game', purpose: 'Communication, observation' },
            { name: 'Blind Drawing', purpose: 'Communication, observation, listening' },
          ],
        },
        {
          emoji: '🫶',
          title: 'Trust',
          intro: 'To get to know each other a little better.',
          tools: [
            { name: 'Two Truths, One Lie' },
            { name: 'Pen Pals' },
            { name: 'Bucket List' },
            { name: 'Team Trivia' },
            { name: 'Draw Your Mood', purpose: 'Expressing moods' },
            { name: 'Silver Linings', purpose: 'Mindset, positivity' },
            { name: 'Personal User Manuals', purpose: 'Onboarding, company culture' },
          ],
        },
        {
          emoji: '🎯',
          title: 'Deciding & solving',
          intro: 'Making decisions and solving problems together, often against the clock.',
          tools: [
            { name: 'The One Question Game', purpose: 'Communication, decision-making' },
            { name: 'This or That', purpose: 'Communication, decision-making' },
            { name: 'Birthday Line-up', purpose: 'Problem-solving, communication' },
            { name: 'Paper Tower', purpose: 'Problem-solving, collaboration' },
            { name: 'Swedish Story', purpose: 'Public speaking, deciding fast' },
            { name: 'Paper Chains', purpose: 'Communication, problem-solving, leadership' },
            { name: 'Balloon in Water', purpose: 'Solving problems with limited resources' },
          ],
        },
      ],
    },
  ],
};

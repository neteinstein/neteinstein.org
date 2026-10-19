/**
 * /teams/icebreakers — the icebreakers from Pedro Vicente's "Team icebreakers"
 * article (https://medium.com/code-procedure-and-rants/team-icebreakers-7c4996f7642c),
 * as cards in the /games guide's shape so they share its `GameFilter`. Each
 * card's `goal` is the article's "When to use it?"; `where` drives the
 * remote/in person filter. The drawings are drawn in code
 * (`scripts/game-art/icebreakers.mjs`, `npm run draw:icebreakers`).
 * Page title, lead and the intro prose live in
 * `src/content/pages/icebreakers.mdx`; the Portuguese is
 * `src/i18n/pt/icebreakers.ts`.
 */
import type { GameCategory, LinkRef } from './types';

import youCanDoWhat from '../assets/teams/icebreakers/you-can-do-what.webp';
import before18 from '../assets/teams/icebreakers/before-18.webp';
import tooManyCooks from '../assets/teams/icebreakers/too-many-cooks.webp';
import nameOrigin from '../assets/teams/icebreakers/name-origin.webp';
import twoTruthsAndALie from '../assets/teams/icebreakers/two-truths-and-a-lie.webp';
import grabAndShare from '../assets/teams/icebreakers/grab-and-share.webp';
import whatWhereWhen from '../assets/teams/icebreakers/what-where-when.webp';
import quizBreaker from '../assets/teams/icebreakers/quiz-breaker.webp';
import aliensHaveLanded from '../assets/teams/icebreakers/aliens-have-landed.webp';
import companyStory from '../assets/teams/icebreakers/company-story.webp';

/** The article this guide comes from. */
export const article: LinkRef = {
  label: 'Team icebreakers',
  href: 'https://medium.com/code-procedure-and-rants/team-icebreakers-7c4996f7642c',
};

const BOTH = 'Remote or in person';
const WHOLE_TEAM = 'The whole team';

export const icebreakerCategories: GameCategory[] = [
  {
    id: 'team-icebreakers',
    emoji: '🧊',
    title: 'Team Icebreakers',
    short: 'Team',
    intro:
      'Feeling that remote work is making the team spirit disappear? These help people get to know each other a little, beyond the small talk.',
    games: [
      {
        id: 'you-can-do-what',
        number: 1,
        title: 'You Can Do What?',
        players: WHOLE_TEAM,
        age: 'Any age',
        duration: '5 minutes per round',
        setting: BOTH,
        where: ['remote', 'in-person'],
        image: youCanDoWhat,
        goal: 'When you want to get beyond the small talk. A simple way to get people talking, and to quickly learn surprising things about people you thought you knew.',
        materials: [],
        setup: [
          'Before the meeting, ask each participant to send you a private message with a crazy skill or fact about themselves that no one knows about.',
        ],
        rules: [
          'When the meeting starts, read out one fact at a time.',
          'Everyone guesses who they think the fact belongs to.',
          'Reveal the owner, and let them tell the story behind it.',
        ],
        tips: [],
        sources: [],
      },
      {
        id: 'before-18',
        number: 2,
        title: '<18y',
        players: WHOLE_TEAM,
        age: 'Any age',
        duration: '2 minutes per person',
        setting: BOTH,
        where: ['remote', 'in-person'],
        image: before18,
        goal: 'Before a meeting: an engaging way to encourage team members to share fun or interesting stories with one another.',
        materials: [],
        setup: [],
        rules: [
          'Go around the room.',
          'Each person shares one accomplishment they had before they turned 18.',
        ],
        tips: [
          "Some will be of lesser importance, like “I bought a skateboard”, but you never know what hidden skills you'll discover in your colleagues.",
        ],
        sources: [],
      },
      {
        id: 'too-many-cooks',
        number: 3,
        title: 'Too Many Cooks',
        players: WHOLE_TEAM,
        age: 'Any age',
        duration: '2 minutes per round',
        setting: 'Remote, on a shared whiteboard',
        where: ['remote'],
        image: tooManyCooks,
        goal: "A fun icebreaker for people who don't know each other and have just been introduced.",
        materials: ['A shared online whiteboard (Miro or similar) with anonymous access'],
        setup: [
          "Create the board with anonymous access: it's really important that everyone goes in anonymously.",
        ],
        rules: [
          'Everyone uploads a photo of their favourite meal to the board.',
          'Once everyone is done, go round the photos trying to guess who added each one.',
        ],
        tips: [],
        sources: [],
      },
      {
        id: 'name-origin',
        number: 4,
        title: 'What’s the Origin of Your Name?',
        players: WHOLE_TEAM,
        age: 'Any age',
        duration: '2 minutes per person',
        setting: BOTH,
        where: ['remote', 'in-person'],
        image: nameOrigin,
        goal: "A fun icebreaker for people who don't know each other and have just been introduced.",
        materials: [],
        setup: [],
        rules: ['Each participant tells the story of why they were given their name.'],
        tips: [],
        sources: [],
      },
      {
        id: 'two-truths-and-a-lie',
        number: 5,
        title: 'Two Truths and a Lie',
        players: WHOLE_TEAM,
        age: 'Any age',
        duration: '5 minutes per round',
        setting: BOTH,
        where: ['remote', 'in-person'],
        image: twoTruthsAndALie,
        goal: "A fun icebreaker for people who don't know each other and have just been introduced, and a great way for people to show their fun, non-work side.",
        materials: ['Sticky notes (real ones, or on a shared online board)'],
        setup: [],
        rules: [
          'Each participant writes three statements about themselves on three sticky notes: two true, one a lie.',
          'Everyone adds a dot vote next to the statement they think is the lie.',
          'Once everyone has voted, reveal the right answer.',
          'Give the team the chance to ask follow-up questions.',
        ],
        tips: ['Leave a bit of time for storytelling!'],
        sources: [
          { label: 'Conceptboard template', href: 'https://conceptboard.com/load/two-truths' },
        ],
      },
      {
        id: 'grab-and-share',
        number: 6,
        title: 'Grab and Share / Show and Tell',
        players: WHOLE_TEAM,
        age: 'Any age',
        duration: '2 minutes per person',
        setting: 'Remote, on a video call',
        where: ['remote'],
        image: grabAndShare,
        goal: 'A great way for people to show their fun, non-work side.',
        materials: [],
        setup: [],
        rules: [
          'On the video call, everyone grabs something within arm’s reach.',
          'Take turns telling a story about that item: where and when did you get it? Is it meaningful?',
        ],
        tips: ['On several calls with the same people, grab something new each time.'],
        sources: [],
      },
      {
        id: 'what-where-when',
        number: 7,
        title: 'What, Where, When?',
        players: WHOLE_TEAM,
        age: 'Any age',
        duration: '5 minutes for three questions',
        setting: BOTH,
        where: ['remote', 'in-person'],
        image: whatWhereWhen,
        goal: 'Around a (virtual) water cooler. A shorter take on a trivia game.',
        materials: [],
        setup: [],
        rules: [
          'Ask everyone to answer a few pop culture questions, such as “What was the last TV show you binge-watched?” or “Where is your dream holiday destination?”.',
          'Go around for each question.',
        ],
        tips: [
          "Pop culture is always a good conversation starter: you'll quickly find teammates with the same guilty pleasures to talk them over with.",
        ],
        sources: [
          {
            label: 'Conceptboard template',
            href: 'https://conceptboard.com/load/what-where-when',
          },
        ],
      },
      {
        id: 'quiz-breaker',
        number: 8,
        title: 'Quiz Breaker',
        players: WHOLE_TEAM,
        age: 'Any age',
        duration: 'Runs on its own schedule',
        setting: 'Remote, by email or chat',
        where: ['remote'],
        image: quizBreaker,
        goal: 'Bringing remote teams closer together, so they learn more about each other while having fun.',
        materials: ['A QuizBreaker account'],
        setup: ['Add the team to QuizBreaker and pick how often it should run.'],
        rules: [
          'QuizBreaker sends everyone icebreaker questions, like the ones in “What, Where, When?”.',
          'It then quizzes the team on who gave each answer, automatically, on its schedule.',
        ],
        tips: [],
        sources: [{ label: 'QuizBreaker', href: 'https://www.quizbreaker.com/' }],
      },
    ],
  },
  {
    id: 'company-icebreakers',
    emoji: '🏢',
    title: 'Company Icebreakers',
    short: 'Company',
    intro: 'For when the idea is for the team to get to know its own company better.',
    games: [
      {
        id: 'aliens-have-landed',
        number: 9,
        title: 'Aliens Have Landed',
        players: WHOLE_TEAM,
        age: 'Adults',
        duration: '5 minutes per round',
        setting: BOTH,
        where: ['remote', 'in-person'],
        image: aliensHaveLanded,
        goal: 'Helping teams with language and cultural differences strengthen the company culture.',
        materials: ['Paper and pens, or a shared online whiteboard'],
        setup: [],
        rules: [
          "Tell the group to imagine aliens have landed on Earth and want to learn about the company. They don't speak your language or understand what you do, so it has to be explained with five symbols or pictures.",
          'Each participant draws five simple images that best describe the company’s products and culture.',
          'Take a few minutes to look at all the images together and talk through the common themes.',
        ],
        tips: ['It really lights up the group chat during a virtual meeting.'],
        sources: [],
      },
      {
        id: 'company-story',
        number: 10,
        title: 'Tell a Great Company Story',
        players: 'The whole team, or one person a day',
        age: 'Adults',
        duration: '5 minutes per round',
        setting: BOTH,
        where: ['remote', 'in-person'],
        image: companyStory,
        goal: 'When you want to stay focused on company talk. These stories help people feel more engaged with their teams, and give everyone a chance to celebrate themselves and their peers.',
        materials: [],
        setup: [],
        rules: [
          'Ask each participant (or pick one a day) to share a great experience they had at the company.',
          'It could be a brainstorming session that led to a breakthrough idea, an amazing customer service moment, or a time a teammate chipped in to get a project done before a deadline.',
        ],
        tips: [],
        sources: [],
      },
    ],
  },
];

/** "Play some games": ready-made online games for remote teams, from the article. */
export const onlineGames: (LinkRef & { description: string })[] = [
  {
    label: 'Gartic Phone',
    href: 'https://garticphone.com/',
    description: 'The telephone game, drawn: write, draw, guess, and laugh at where it ends up.',
  },
  {
    label: 'Virtual team building',
    href: 'https://www.letsroam.com/team_building_activities/virtual_team_building',
    description: "Let's Roam's list of hosted virtual team building activities.",
  },
  {
    label: 'Survive: Escape from Atlantis!',
    href: 'https://tabletopia.com/news/survive-escape',
    description: 'The board game, played online on Tabletopia.',
  },
  {
    label: 'The Great Race',
    href: 'https://yumtum.co/teams/the-great-race/',
    description: 'A virtual race around the world for teams.',
  },
  {
    label: 'Virtual Clue murder mystery',
    href: 'https://try.outbackteambuilding.com/ap-virtual-clue-murder-mystery/',
    description: 'Solve a murder mystery together, over video.',
  },
  {
    label: 'Virtual escape room',
    href: 'https://try.outbackteambuilding.com/virtual-escape-room-game/',
    description: 'Puzzle your way out of an online escape room as a team.',
  },
  {
    label: 'Virtual trivia time machine',
    href: 'https://try.outbackteambuilding.com/ap-virtual-trivia-time-machine/',
    description: 'Trivia across the decades, hosted live.',
  },
];

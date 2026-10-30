/**
 * "Don't wait for the CHAOS to think about Feedback" — the LoopGain support
 * slides (Google Slides, 139 slides), rebuilt as the deck at the end of the
 * Feedback chapter on /what-i-do/improver.
 *
 * The original's click-by-click builds are folded into `reveal`s, and its
 * meme and stock photos are left out: emoji and the drawn round table carry
 * the jokes instead. Speaker notes worth reading are kept as `note`s.
 */
import type { FeedbackTalk } from './types';

const CONTACT = '#contact';
const TIMER = { text: 'timer.pizza', href: 'https://timer.pizza/' };

const PAUL = 0;
const JOHN = 1;
const MARTHA = 2;
const ME = 3;
const JONAH = 4;
const STEWARD = 5;

export const feedbackTalk: FeedbackTalk = {
  id: 'feedback-talk',
  eyebrow: 'The talk',
  title: 'Don’t wait for the chaos to think about feedback',
  intro:
    'The slides behind LoopGain sessions: why feedback matters, how a session runs and how to facilitate one. Swipe, use the arrows or jump to a chapter.',
  seats: ['Paul', 'John', 'Martha', 'Me', 'Jonah', 'Steward'],
  chapters: [
    {
      title: 'Why feedback?',
      slides: [
        {
          kind: 'cover',
          title: ['Don’t wait for the ', { text: 'CHAOS', strong: true, mark: true }],
          subtitle: 'to think about Feedback',
          byline: 'Pedro Vicente · LoopGain',
        },
        {
          kind: 'compare',
          lead: 'Preamble: I won’t follow “dictionary definitions”, rather the mindset each one tends to relate with…',
          joiner: 'vs',
          reveal: true,
          sides: [
            {
              title: 'Feedback',
              emoji: '🌱',
              items: [
                [
                  'Is supposed to be ',
                  { text: 'nonjudgmental', strong: true },
                  ' and as neutral as possible. It provides information the person can work off of, and helps them shape or form themselves. It doesn’t assume a final view over any subject: it’s more like a view, an opinion.',
                ],
              ],
            },
            {
              title: 'Evaluation',
              emoji: '⚖️',
              items: [
                [
                  'Is a ',
                  { text: 'final decision', strong: true },
                  ', in contrast to the process of feedback. It presents a judgment: whether someone has met a goal or not. It is not given at a point when the person is able to make changes.',
                ],
              ],
            },
          ],
          note: 'Based on Nancy Alarcon’s definitions.',
        },
        {
          kind: 'statement',
          band: true,
          lead: 'Does this matter?',
          text: ['Why?'],
          reveal: [[{ text: 'Entropy!', strong: true, mark: true }]],
        },
        {
          kind: 'statement',
          text: [
            { text: 'Entropy', strong: true },
            ' is simply a measure of disorder and affects all aspects of our daily lives. In fact, you can think of it as nature’s tax.',
          ],
          body: [
            [
              'Left unchecked, disorder increases over time. Energy disperses, and systems dissolve into ',
              { text: 'chaos', strong: true, mark: true },
              '.',
            ],
          ],
        },
        {
          kind: 'statement',
          text: [
            { text: 'Entropy', del: true },
            { text: ' No feedback', strong: true },
            ' is simply a measure of disorder and affects all aspects of our daily lives. In fact, you can think of it as ',
            { text: 'nature’s', del: true },
            { text: ' team’s work', strong: true },
            ' tax.',
          ],
          body: [
            [
              'Left unchecked, disorder increases over time. Energy disperses, and ',
              { text: 'systems', del: true },
              { text: ' teams', strong: true },
              ' dissolve into ',
              { text: 'chaos', strong: true, mark: true },
              '.',
            ],
          ],
        },
      ],
    },
    {
      title: 'Work self',
      slides: [
        {
          kind: 'statement',
          band: true,
          lead: 'Have you noticed that…',
          text: ['Sometimes you can’t understand someone’s actions?'],
          emoji: '🤔',
        },
        {
          kind: 'compare',
          sides: [
            { title: '“Personal self”', emoji: '😄', items: [] },
            { title: '“Work self”', emoji: '😐', items: [] },
          ],
          outro: 'Why?',
        },
        {
          kind: 'statement',
          lead: 'For one…',
          text: [{ text: 'Work isn’t family', strong: true }],
          body: [['You can’t “fire” family.']],
          emoji: '😅',
          note: 'Besides, it often means that boundaries get violated and people are expected to show inappropriate amounts of commitment and loyalty, even when it’s not in their self-interest.',
        },
        {
          kind: 'statement',
          lead: 'So…',
          text: ['Are people using a “work personality” to protect their real self?'],
          emoji: '🎭',
          reveal: [['Are we ', { text: 'ALL', strong: true }, ' doing this at some level?']],
        },
        {
          kind: 'statement',
          lead: 'The thing is…',
          text: [
            'Human beings are ',
            { text: 'social creatures', strong: true, mark: true },
            ' — not occasionally or by accident, but always. Sociability is one of our main skills, as both cause and effect.',
          ],
        },
        {
          kind: 'statement',
          text: ['Everybody works today (at some level) with a team.'],
          emoji: '🤝',
        },
        {
          kind: 'statement',
          text: [
            'So are we somehow ',
            { text: 'afraid', strong: true, mark: true },
            ' of our team?',
          ],
          emoji: '😱',
          reveal: [['Are we just not able to ', { text: 'trust them', strong: true }, ' enough?']],
        },
        {
          kind: 'statement',
          lead: '…and if we don’t…',
          text: ['Does it actually matter? Isn’t this all fluffy unicorn bullsh*t?'],
          emoji: '🦄',
          reveal: [[{ text: 'We need to get sh*t done. 💥', strong: true }, ' Period.']],
        },
      ],
    },
    {
      title: 'Social cohesion',
      slides: [
        {
          kind: 'statement',
          lead: 'Well…',
          text: [
            'Organizations (and teams) are often run according to the ',
            { text: '“SuperChicken model”', strong: true, mark: true },
            ', where the value is placed on star employees who outperform others.',
          ],
          emoji: '🐔',
        },
        {
          kind: 'statement',
          text: [
            'But it is ',
            { text: 'social cohesion', strong: true, mark: true },
            ' that drives most high-achieving teams — built every coffee break, every time one team member asks another for help — that leads over time to great results.',
          ],
          cite: 'Margaret Heffernan',
        },
        {
          kind: 'list',
          title: ['What is ', { text: 'social cohesion', strong: true, mark: true }, '?'],
          lead: 'The extent of connectedness and solidarity among groups in society. It has two main dimensions:',
          style: 'bullet',
          items: [
            [{ text: 'the sense of belonging', strong: true }, ' to a community;'],
            [
              { text: 'the relationships among members', strong: true },
              ' within the community itself.',
            ],
          ],
        },
        {
          kind: 'statement',
          text: [{ text: 'It matters.', strong: true, mark: true }],
          emoji: '💥',
        },
        {
          kind: 'dialogue',
          title: 'When it feels like you live with a psychopath…',
          lines: [
            { emoji: '🧐', text: 'Squeeze the toothpaste properly… from the bottom!' },
            {
              emoji: '🙄',
              text: 'What does that matter? I squeeze wherever and the toothpaste comes out…',
            },
          ],
          note: 'Small things…',
        },
        {
          kind: 'statement',
          text: [
            'When it feels like you ',
            { text: 'live', del: true },
            { text: ' work', strong: true },
            ' with a psychopath…',
          ],
          emoji: '🤯',
          note: 'You know that feeling when you have worked with someone long enough that small details drive you crazy?',
        },
        {
          kind: 'statement',
          text: [
            'We are all ',
            { text: 'psychopaths', strong: true, mark: true },
            ' for someone… and we don’t know.',
          ],
          emoji: '🙈',
          note: 'Someone worked with us for 6+ months without ever mentioning it.',
        },
        {
          kind: 'statement',
          text: [
            'Have you seen ',
            { text: 'spontaneous feedback', strong: true, mark: true },
            ' kick in?',
          ],
          reveal: [
            [
              { text: 'Expectations:', strong: true },
              ' most people aren’t expecting (or used to) receiving or giving it.',
            ],
          ],
        },
        {
          kind: 'statement',
          band: true,
          lead: 'Would you ask someone if you could give them feedback…',
          text: ['…if it was just positive feedback?'],
          emoji: '🤔',
          note: 'What do you expect when someone says “Can I give you feedback?” Doesn’t it sound negative, since people usually only ask when there’s a bad part? Don’t get me started on the sh*t sandwich model…',
        },
        {
          kind: 'statement',
          band: true,
          lead: 'How many people ask for feedback…',
          text: ['…actually expecting just the positive?'],
          emoji: '🤔',
        },
        {
          kind: 'list',
          title: ['What makes a ', { text: 'great team', strong: true, mark: true }, '?'],
          lead: 'Fluffy unicorn talk again? Google’s re:Work found five things:',
          style: 'bullet',
          items: [
            [{ text: 'Psychological safety', strong: true }],
            [{ text: 'Dependability', strong: true }],
            [{ text: 'Clarity', strong: true }],
            [{ text: 'Meaning', strong: true }],
            [{ text: 'Impact', strong: true }],
          ],
        },
        {
          kind: 'statement',
          text: ['Can you feel safe with, or actually trust, someone you don’t know?'],
          emoji: '🫣',
          reveal: [
            [
              'And if you do know them, can you trust them if you don’t ',
              { text: 'understand', strong: true },
              ' them?',
            ],
          ],
        },
        {
          kind: 'statement',
          lead: 'What can build trust?',
          text: [{ text: 'Social cohesion', strong: true, mark: true }],
          body: [
            [
              'Built every coffee break, every time one team member asks another for help — that leads over time to great results.',
            ],
          ],
          emoji: '🫶',
        },
        {
          kind: 'statement',
          band: true,
          lead: 'How we did it:',
          text: ['Gut feeling and experiments'],
          emoji: '🧪',
        },
        {
          kind: 'statement',
          lead: 'Social cohesion takes time and trust.',
          text: ['So how do we ', { text: '“fast forward”', strong: true, mark: true }, ' it?'],
          emoji: '⏩',
        },
        {
          kind: 'list',
          title: ['Action plan'],
          style: 'flow',
          items: [
            ['Create a safe environment'],
            ['Increase communication'],
            ['Increase trust'],
            ['Increase happiness and team performance'],
          ],
        },
        {
          kind: 'list',
          title: ['So… we created a place where people:'],
          style: 'check',
          items: [
            ['felt safe'],
            ['got to know more about each other'],
            ['gave honest feedback'],
            ['had the expectation that feedback would happen there'],
          ],
          aside: ['Either in the same room or remotely.'],
        },
      ],
    },
    {
      title: 'A session',
      slides: [
        {
          kind: 'table',
          lead: 'It’s actually simple',
          note: 'Sit down… (If remote, post a list of names in order — alphabetically works.)',
        },
        {
          kind: 'cards',
          title: 'Four cards, one of each type',
          lead: 'The facilitator picks them before the session.',
          cards: [
            {
              type: 'Motto',
              text: '“The best teams are built on trust. The only way to trust is to know one another.”',
            },
            {
              type: 'Positive reinforcement',
              text: 'What’s something in _’s contribution to the team that you feel is undervalued? Why, and how can we change that?',
            },
            {
              type: 'Improvements',
              text: 'In what situations is communication harder with _? Why, and what can I suggest to improve it?',
            },
            {
              type: 'Personal question',
              text: 'What’s the best thing that happened to me this month, either at work or outside of it?',
            },
          ],
        },
        {
          kind: 'table',
          speaker: PAUL,
          says: [
            { text: 'Paul:', strong: true },
            ' I’ll volunteer to be the first to receive feedback.',
          ],
          aside: [
            'Remember that “your truth” is not the absolute truth. It’s just your point of view.',
          ],
        },
        {
          kind: 'statement',
          badge: 'Facilitator tip',
          text: ['Clockwise'],
          body: [['(If remote, alphabetically.)']],
          emoji: '🔃',
        },
        {
          kind: 'statement',
          badge: 'Facilitator tip',
          text: ['Be time conscious'],
          body: [
            ['Using a time timer is a good way.'],
            ['Remote: share your screen with ', TIMER, '.'],
          ],
          emoji: '⏲️',
        },
        {
          kind: 'statement',
          lead: 'A few minutes for everyone to think about it, in silence, and…',
          text: [{ text: 'GO!', strong: true, mark: true }],
          emoji: '🏁',
        },
        {
          kind: 'table',
          speaker: JOHN,
          about: PAUL,
          says: [
            { text: 'John:', strong: true },
            ' Great, I’ll start… ',
            { text: '(answers the positive and improvement questions about Paul)', em: true },
          ],
        },
        {
          kind: 'table',
          speaker: MARTHA,
          about: PAUL,
          says: [
            { text: 'Martha:', strong: true },
            ' Now me… ',
            { text: '(answers the positive and improvement questions about Paul)', em: true },
          ],
        },
        {
          kind: 'statement',
          badge: 'Facilitator tip',
          lead: 'Typical misconception:',
          text: ['Thinking that you should reply to the feedback you receive.'],
          body: [
            [
              'This is ',
              { text: 'not a conversation', strong: true },
              '. Those are opinions: you can agree or disagree, but the idea is not to discuss them (at least not there — you can catch up after).',
            ],
          ],
        },
        {
          kind: 'table',
          speaker: ME,
          about: PAUL,
          says: [
            { text: 'Me:', strong: true },
            ' ',
            { text: '(answers the positive and improvement questions about Paul)', em: true },
          ],
        },
        {
          kind: 'statement',
          badge: 'Facilitator tip',
          lead: 'Typical misconception:',
          text: ['Thinking that being honest is being rude.'],
          emoji: '🙊',
        },
        {
          kind: 'table',
          speaker: JONAH,
          about: PAUL,
          says: [
            { text: 'Jonah:', strong: true },
            ' ',
            { text: '(answers the positive and improvement questions about Paul)', em: true },
          ],
        },
        {
          kind: 'table',
          lead: 'Up until it reaches Paul again…',
          speaker: PAUL,
          says: [
            { text: 'Paul:', strong: true },
            ' Thanks for the feedback! So, about the personal question… ',
            { text: '(answers it)', em: true },
          ],
        },
        {
          kind: 'statement',
          text: [{ text: 'Great!', strong: true, mark: true }, ' Paul’s feedback loop is done.'],
          body: [['Let’s jump to the next person…']],
          emoji: '✅',
        },
        {
          kind: 'table',
          speaker: MARTHA,
          about: JOHN,
          says: [{ text: 'Martha:', strong: true }, ' So, about John…'],
        },
        {
          kind: 'statement',
          badge: 'Facilitator tip',
          text: [
            'As a rule of thumb, the session takes ',
            { text: '10 minutes per person', strong: true },
            '.',
          ],
          body: [
            ['So a team of 6 takes about an hour. Set that, and keep it visible all the time.'],
            ['Remote: share your screen with ', TIMER, '.'],
          ],
          emoji: '⏰',
        },
        {
          kind: 'table',
          speaker: STEWARD,
          about: JOHN,
          says: [{ text: 'Steward:', strong: true }, ' So, about John…'],
        },
        {
          kind: 'list',
          title: [{ text: 'All done!', strong: true, mark: true }],
          lead: 'Use 2–5 minutes to check how the team felt:',
          style: 'bullet',
          items: [['Did it work?'], ['Should we repeat it?'], ['How often?']],
        },
      ],
    },
    {
      title: 'Your questions',
      slides: [
        {
          kind: 'statement',
          text: ['“Great! I have issues within my team, I want to do it!”'],
          emoji: '🙋',
        },
        {
          kind: 'statement',
          badge: 'Typical misconception',
          text: [
            'The main goal of feedback should ',
            { text: 'not', strong: true },
            ' be to solve issues.',
          ],
          emoji: '😡',
          reveal: [
            [
              'The goal of feedback must be to ',
              { text: 'improve people (and teams)', strong: true, mark: true },
              '. Solving issues is a byproduct. 🚀',
            ],
          ],
        },
        {
          kind: 'statement',
          text: ['“Hey you. Yes, you all… bla bla bla feedback.”'],
          emoji: '🥱',
          reveal: [[{ text: 'Boring!!!', strong: true }]],
        },
        {
          kind: 'statement',
          band: true,
          lead: 'OK then… let’s play a game:',
          text: ['Build your question'],
          emoji: '❓',
        },
        {
          kind: 'rules',
          badge: 'Rules',
          title: 'Positive reinforcement',
          lead: 'Appraise what we value as good.',
          examples: [
            { bad: 'Name a good thing about John', better: 'Name 3 things… something impressive' },
          ],
        },
        {
          kind: 'rules',
          badge: 'Rules',
          title: 'Improvements',
          lead: 'Focus on actions, not on issues or the person.',
          examples: [
            {
              bad: 'What do you feel ___ does wrong?',
              better: 'What can I help ___ improve? Why?',
            },
            {
              bad: 'What are the biggest weaknesses of ___?',
              better: 'What can the team help ___ learn?',
            },
          ],
        },
        {
          kind: 'rules',
          badge: 'Rules',
          title: 'Personal question',
          lead: 'Don’t focus on teamwork. Go to the “unknown” part of each person on the team.',
          examples: [
            { bad: 'What do you like to do at work?', better: 'What is your biggest hobby?' },
          ],
        },
        {
          kind: 'statement',
          lead: 'Just to be clear…',
          text: ['I don’t think this is a ', { text: 'silver bullet', strong: true }, '.'],
          emoji: '🪄',
          reveal: [
            [
              'The silver bullet is… ',
              {
                text: 'to grow a team enough that they can define their own ways',
                strong: true,
                mark: true,
              },
              '.',
            ],
          ],
        },
        {
          kind: 'statement',
          text: ['That’s what happened with the team where all this started.'],
          emoji: '💙',
        },
        {
          kind: 'statement',
          text: ['This seems too simple to work…'],
          emoji: '🌍',
          reveal: [['…but it has already spread this far!']],
        },
        {
          kind: 'statement',
          band: true,
          lead: '⚠️ Warning ⚠️',
          text: ['There are a ton of different ways to do this.'],
          body: [['Pick what suits the team best.']],
        },
      ],
    },
    {
      title: 'Facilitator guide',
      slides: [
        {
          kind: 'statement',
          lead: 'Things to think about…',
          text: [
            'People are really different. Understanding them is a really good way to ',
            { text: 'grow a team', strong: true, mark: true },
            '.',
          ],
          emoji: '🚀',
        },
        {
          kind: 'statement',
          band: true,
          lead: 'Why do we need this?',
          text: [
            'When people say “I want to give you feedback”, there’s a negative feeling attached.',
          ],
          emoji: '🙉',
          note: 'If you wanted to give positive feedback, you probably wouldn’t ask that question.',
        },
        {
          kind: 'statement',
          band: true,
          lead: 'Why…',
          text: ['cards?'],
          emoji: '🃏',
          reveal: [
            [{ text: 'Reduce friction…', strong: true }],
            [
              'Within 2 minutes people are able to start the feedback session. Most people want a framework to start off.',
            ],
          ],
        },
        {
          kind: 'statement',
          band: true,
          lead: 'Motto?',
          text: ['What is it for?'],
          emoji: '🤫',
          reveal: [
            ['During work days we’re all probably pretty busy, rushing from meeting to meeting.'],
            [
              'To start a feedback session we need to change the mood and mindset. The motto is there for that: make a moment of silence and read it.',
            ],
            [
              'Silence without any device, although likely awkward at first, is very important to let people actually focus.',
            ],
          ],
        },
        {
          kind: 'list',
          title: ['The facilitator'],
          style: 'bullet',
          items: [
            ['Can be from the team or from outside it.'],
            ['Chooses the cards, helps set the timings and pushes the session forward.'],
            ['Takes part in the session (if from the team), or not.'],
          ],
          aside: [
            { text: 'Warning:', strong: true },
            ' facilitators from within the team get better results, as people are more comfortable.',
          ],
        },
        {
          kind: 'list',
          title: ['Before the session, the facilitator:'],
          style: 'check',
          items: [
            [
              'Picks ',
              { text: '4 cards', strong: true },
              ' from the deck, one of each type: Motto, Positive reinforcement, Improvements and Personal question. Or creates new ones.',
            ],
            ['Gets a piece of paper and a pen for each person (or a shared doc, if remote).'],
            [
              'Defines the duration and brings a ',
              { text: 'visual timer', strong: true },
              ' (personally, I use a Time Timer or ',
              TIMER,
              ').',
            ],
          ],
        },
        {
          kind: 'compare',
          lead: 'Get the team together',
          sides: [
            {
              title: 'On site',
              emoji: '🪑',
              items: [
                [{ text: 'No laptops, no phones', strong: true }, ' in the room.'],
                ['Works better for teams of fewer than 10 people.'],
                ['Basically: just gather the people who really work together.'],
              ],
            },
            {
              title: 'Remote or mixed',
              emoji: '💻',
              items: [
                ['Fully remote or mixed is fine too.'],
                ['Just define a round-table order (alphabetically, if fully remote).'],
                ['Bring the least tech possible.'],
              ],
            },
          ],
        },
        {
          kind: 'statement',
          lead: 'Start with the Motto card',
          text: [
            '“The best teams are built on trust. The only way to trust is to know one another.”',
          ],
          body: [
            [
              'The facilitator reads it and everyone stays in silence for ',
              { text: '30 seconds or more', strong: true },
              '. It moves the mood away from running-and-stress mode, to a more suitable mindset.',
            ],
          ],
        },
        {
          kind: 'list',
          title: [
            'After the silence, reveal the ',
            { text: '2 questions', strong: true, mark: true },
          ],
          lead: 'Everyone in the session answers them about everyone else:',
          style: 'bullet',
          items: [
            [
              { text: 'Positive reinforcement:', strong: true },
              ' What’s something in _’s contribution to the team that you feel is undervalued? Why, and how can we change that?',
            ],
            [
              { text: 'Improvements:', strong: true },
              ' In what situations is communication harder with _? Why, and what can I suggest to improve it?',
            ],
          ],
        },
        {
          kind: 'statement',
          badge: 'Facilitator tip',
          lead: 'Typical misconception:',
          text: ['Thinking that the answers should be work-related only.'],
          body: [
            [
              'We’re breaking that concept: speak about ',
              { text: 'what is important', strong: true },
              ', whatever that is. Remember to explain this to the team.',
            ],
          ],
        },
        {
          kind: 'compare',
          lead: 'Read the questions out loud, and write them down too — at the same time or right after.',
          sides: [
            {
              title: 'On site',
              emoji: '🪧',
              items: [['Write them on a whiteboard, or on a big piece of paper on the wall.']],
            },
            { title: 'Remote', emoji: '💬', items: [['Send them via chat.']] },
          ],
        },
        {
          kind: 'statement',
          text: ['It seems like a sh*t sandw…'],
          emoji: '🥪',
          reveal: [
            ['No. ', { text: 'Nonjudgmental', strong: true, mark: true }, ', remember? And…'],
          ],
        },
        {
          kind: 'statement',
          lead: 'Finally, the one everyone answers about themselves…',
          text: [{ text: 'Personal question', strong: true, mark: true }],
          body: [
            [
              'Example: “What’s the best thing that happened to me this month, either at work or outside of it?”',
            ],
          ],
        },
        {
          kind: 'statement',
          text: ['Set ', { text: '15 minutes', strong: true, mark: true }],
          body: [
            ['In silence, so people can think about (and note down) what they will say.'],
            ['Keep the time visible. Remote: share your screen with ', TIMER, '.'],
          ],
          emoji: '⏳',
        },
        {
          kind: 'statement',
          badge: 'Facilitator tip',
          lead: 'Typical misconception:',
          text: ['Being in silence will feel awkward with some teams.'],
          body: [['Get people on board anyway: it makes for better feedback.']],
        },
        {
          kind: 'timer',
          title: 'Time’s up! START!',
          lead: 'Give each person 10 minutes, plus 10 minutes for closing. How long for your team?',
          people: { label: 'People in the session', min: 2, max: 12, value: 6 },
          parts: [
            { label: 'Thinking, in silence', minutes: 15 },
            { label: 'Feedback rounds', minutes: 10, perPerson: true },
            { label: 'Closing', minutes: 10 },
          ],
          total: 'Whole session',
        },
      ],
    },
    {
      title: 'Questions?',
      slides: [
        {
          kind: 'statement',
          band: true,
          lead: 'How do you…',
          text: ['build the questions?'],
          reveal: [
            [
              'Questions are pre-defined to avoid negative or aggressive tones, and to drive constructive feedback.',
            ],
            [{ text: 'Positive:', strong: true }, ' created to appraise what people do best.'],
            [
              { text: 'Improvements:', strong: true },
              ' focus on actions (“how to improve”), not people.',
            ],
            [
              { text: 'Personal questions:', strong: true },
              ' made to get to know the person outside the team’s usual environment.',
            ],
            [
              'I call it empathy-driven feedback… or ',
              { text: 'LoopGain', strong: true, mark: true },
              ', for short!',
            ],
          ],
        },
        {
          kind: 'statement',
          band: true,
          lead: 'Why…',
          text: ['do a lot of questions ask for 3 things?'],
          emoji: '3️⃣',
          reveal: [
            [
              'At first, people probably won’t be able to give 3 things… but it makes them think hard, and gives them an incentive to train their eyes between sessions to notice positive things they wouldn’t even think about.',
            ],
          ],
        },
        {
          kind: 'statement',
          band: true,
          lead: 'The team has some issues…',
          text: ['How do we address them with this?'],
          reveal: [
            [
              'Build or choose the right questions. They will surface the issue without having to be explicit about it.',
            ],
          ],
        },
        {
          kind: 'statement',
          band: true,
          lead: 'Are sessions really honest?',
          text: ['Do they actually tackle the hard topics?'],
          reveal: [
            [
              'It all depends on the team. Are they actually willing to do the session, or is it just an imposed thing?',
            ],
          ],
        },
        {
          kind: 'statement',
          band: true,
          lead: 'How does culture affect it?',
          text: ['Does it work for everyone?'],
          reveal: [
            [
              'Different cultures will make it simpler or harder. Cultures that are less keen to give or receive feedback will have a harder time starting.',
            ],
          ],
        },
        {
          kind: 'statement',
          band: true,
          lead: 'Team vs one-on-one',
          text: ['When to use each one?'],
          reveal: [
            [
              'You are the right person to understand what will help. A team session improves the team’s relationships, but you might need one-on-one conversations about specific topics.',
            ],
          ],
        },
        {
          kind: 'statement',
          band: true,
          lead: 'How often should we do it?',
          text: ['Does it fit Scrum, Kanban?'],
          reveal: [['How the team works doesn’t matter. Teams are teams. People are people.']],
        },
        {
          kind: 'statement',
          band: true,
          lead: 'This is too simple…',
          text: ['Do we need help setting it up?'],
          reveal: [
            [
              'Feel free to ',
              { text: 'get in touch', href: CONTACT },
              ' and we’ll do a feedback training.',
            ],
          ],
        },
      ],
    },
    {
      title: 'Resources',
      slides: [
        {
          kind: 'links',
          title: 'Useful resources, to draw your own conclusions',
          links: [
            {
              type: 'Talk',
              source: 'Margaret Heffernan · TED',
              title: 'Forget the pecking order at work',
              href: 'https://www.ted.com/talks/margaret_heffernan_forget_the_pecking_order_at_work',
            },
            {
              type: 'Podcast',
              source: 'Freakonomics Radio · Ep. 451',
              title: 'Can I Ask You a Ridiculously Personal Question?',
              href: 'https://freakonomics.com/podcast/can-i-ask-you-a-ridiculously-personal-question-ep-451/',
            },
            {
              type: 'Guide',
              source: 'Google re:Work',
              title: 'Understand team effectiveness',
              href: 'https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness',
            },
          ],
        },
        {
          kind: 'statement',
          text: ['“Hey Pedro, we want to try it on our team!”'],
          emoji: '🙋',
          reveal: [[{ text: 'Let’s schedule it! I’ll help!', strong: true, mark: true }]],
          action: { label: 'Get in touch', href: CONTACT },
        },
        {
          kind: 'end',
          title: [
            'Hope you have wonderful ',
            { text: 'LoopGain session(s)!', strong: true, mark: true },
          ],
          tagline: 'Taking your team from the comfort zone to the trust zone!',
          credits: [
            { role: 'Created by', names: ['Pedro Vicente', 'Maria C. F. Vicente'] },
            { role: 'Illustrations by', names: ['tastingdesign.com'] },
          ],
          action: { label: 'www.loopgain.org', href: 'https://www.loopgain.org' },
        },
      ],
    },
  ],
};

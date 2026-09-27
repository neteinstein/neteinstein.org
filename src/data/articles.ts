/**
 * /what-i-do/articles content, ported from the Google Sites original
 * (https://www.neteinstein.org/what-i-do/articles — crawl snapshot in
 * `.crawl/report.json`). The intro prose lives in
 * `src/content/pages/articles.mdx`.
 */
import type {
  ArticleHighlightGroup,
  ArticleOutlet,
  AuthoredBook,
  GoodreadsBook,
  LinkRef,
  ReadingDocEmbed,
  ReadingGroup,
  RichText,
} from './types';

import mediumLogo from '../assets/what-i-do/articles/medium-logo.webp';
import pontoSjLogo from '../assets/what-i-do/articles/pontosj-logo.webp';
import bookInTheWorks from '../assets/what-i-do/articles/as-coisas-que-nunca-te-contei.webp';
import escolaDeTodos from '../assets/what-i-do/articles/uma-escola-de-todos.webp';

/** Headings of the page's sections, as the original titled them. */
export const headings = {
  articles: 'Articles',
  books: 'Books',
  mustRead: 'Must read',
  shorter: 'Shorter but also incredible',
  readLate: 'Read Late',
};

export const outlets: ArticleOutlet[] = [
  {
    name: 'Medium',
    href: 'https://medium.com/@neteinstein',
    description: 'Whatever I feel like writing at the time',
    logo: mediumLogo,
    logoAlt: 'Medium logo',
  },
  {
    name: 'PontoSJ',
    href: 'https://pontosj.pt/autor/pedro-vicente/',
    description: 'Contributor @ Education section',
    period: '2020 - 2022',
    logo: pontoSjLogo,
    logoAlt: 'PontoSJ logo',
  },
];

export const highlights: ArticleHighlightGroup[] = [
  {
    title: 'Tech highlights',
    years: [
      {
        year: '2022',
        articles: [
          {
            label:
              'Android: Firebase App Distribution — On Kotlin DSL with Multiple BuildTypes support',
            href: 'https://medium.com/p/99af73295170',
          },
        ],
      },
      {
        year: '2018',
        articles: [
          {
            label: 'Android: Multi module/Global test code coverage',
            href: 'https://medium.com/code-procedure-and-rants/global-test-code-coverage-on-android-ui-tests-unit-tests-50bcec68b16a',
          },
          {
            label: 'Android: My default Proguard configuration',
            href: 'https://medium.com/code-procedure-and-rants/android-my-standard-proguard-ffeceaf65521',
          },
          {
            label: 'Retrofit or Apollo + RxJava: How to reuse requests',
            href: 'https://medium.com/code-procedure-and-rants/retrofit-rxjava-how-to-do-one-rest-call-for-multiple-subscribers-feb263c5b992',
          },
        ],
      },
      {
        year: '2017',
        articles: [
          {
            label: 'Used modified hosts on Android Emulator',
            href: 'https://medium.com/code-procedure-and-rants/use-modified-hosts-file-on-android-emulator-4f29f5d12ac1',
          },
        ],
      },
      {
        year: '2016',
        articles: [
          {
            label: 'Not another interviews article',
            href: 'https://medium.com/code-procedure-and-rants/not-another-android-interviews-article-5b478671793b',
          },
        ],
      },
    ],
  },
  {
    title: 'Company/Team highlights',
    years: [
      {
        year: '2021',
        articles: [
          {
            label: 'The road of growth of a tech lead: stop being one',
            href: 'https://medium.com/mindera/how-should-we-measure-the-success-of-a-leader-b0e5c9d9bfee',
          },
          { label: 'What’s your (box) role?', href: 'https://medium.com/p/27fb85826a57' },
          {
            label: 'Team icebreakers',
            href: 'https://medium.com/code-procedure-and-rants/team-icebreakers-7c4996f7642c',
          },
        ],
      },
      {
        year: '2019',
        articles: [
          {
            label: 'Mindera: A story about salaries - part 2',
            href: 'https://medium.com/mindera/a-story-about-salaries-part-2-9597a1348524',
          },
        ],
      },
    ],
  },
  {
    title: 'Education highlights (in Portuguese only)',
    years: [
      {
        year: '2021',
        articles: [
          {
            label: 'O que queres ser quando fores grande?',
            href: 'https://pontosj.pt/opiniao/o-que-queres-ser-quando-fores-grande/',
          },
          {
            label: 'Pai... tenho vergonha...',
            href: 'https://pontosj.pt/opiniao/pai-tenho-vergonha/',
          },
          {
            label: 'Pai, porque é que o céu é azul?',
            href: 'https://pontosj.pt/opiniao/pai-porque-e-que-o-ceu-e-azul/',
          },
        ],
      },
      {
        year: '2016',
        articles: [
          {
            label: 'Contracto de Associação?',
            href: 'https://medium.com/me/stats/post/2a52ee799ae3?source=main_stats_page',
          },
        ],
      },
    ],
  },
];

export const books: AuthoredBook[] = [
  {
    title: 'As coisas que nunca te contei...',
    description: [
      "I have a book in the works that sums up my view of the world. I'm writing it to share with my kids when they reach adulthood; depending on how it turns out, parts of it might be shared with a broader audience.",
    ],
    image: bookInTheWorks,
    imageAlt:
      'A black leather-bound book with a gold flourish on its blank cover, on a wooden table',
  },
  {
    title: 'Uma Escola de Todos, Com Todos, Para Todos',
    href: 'https://issuu.com/apecatolica/docs/livro_escola_de__todos',
    description: [
      'I was invited to contribute to this book. You can read my contribution and find the link to the book ',
      {
        label: 'here',
        href: 'https://medium.com/@neteinstein/contractos-de-associa%C3%A7%C3%A3o-2a52ee799ae3',
      },
      '.',
    ],
    image: escolaDeTodos,
    imageAlt:
      'Cover of the book “Escola de Todos, com Todos, para Todos — Liberdade de Educação”, blue on a yellow background',
  },
];

export const mustRead = {
  heading: "Writing is fun... but there's nothing quite as good as reading a great book.",
  intro: 'So here are some must-read books.',
};

/**
 * The original embedded a Goodreads grid widget (a third-party script) of the
 * "read" shelf. These are the books from the widget's own static fallback, in
 * its order; `goodreadsProfile` is the link under the grid.
 */
export const favouriteBooks: GoodreadsBook[] = [
  {
    title: 'Influence: The Psychology of Persuasion',
    href: 'https://www.goodreads.com/book/show/28815.Influence',
  },
  {
    title: "Maverick: The Success Story Behind the World's Most Unusual Workplace",
    href: 'https://www.goodreads.com/book/show/32994.Maverick',
  },
  {
    title: 'Heroic Leadership: Best Practices from a 450-Year-Old Company That Changed the World',
    href: 'https://www.goodreads.com/book/show/143036.Heroic_Leadership',
  },
  {
    title: 'The Cambridge Quintet: A Work Of Scientific Speculation (Helix Books)',
    href: 'https://www.goodreads.com/book/show/150698.The_Cambridge_Quintet',
  },
  { title: '1984', href: 'https://www.goodreads.com/book/show/16100002-1984' },
  {
    title: 'A Condição Humana',
    href: 'https://www.goodreads.com/book/show/11173145-a-condi-o-humana',
  },
  {
    title: 'A Philosophical Investigation',
    href: 'https://www.goodreads.com/book/show/414196.A_Philosophical_Investigation',
  },
  { title: 'Body Language', href: 'https://www.goodreads.com/book/show/1033113.Body_Language' },
  {
    title: 'O Papalagui: Discursos de Tuiavii Chefe de Tribo de Tiavéa nos Mares do Sul',
    href: 'https://www.goodreads.com/book/show/11100687-o-papalagui',
  },
  {
    title: 'Viagem ao Mundo da Droga',
    href: 'https://www.goodreads.com/book/show/8797118-viagem-ao-mundo-da-droga',
  },
  {
    title: 'A Fórmula de Deus (Tomás Noronha, #2)',
    href: 'https://www.goodreads.com/book/show/2430907.A_F_rmula_de_Deus',
  },
  { title: 'Aparição', href: 'https://www.goodreads.com/book/show/2605280-apari-o' },
  {
    title: 'O Deus das Moscas',
    href: 'https://www.goodreads.com/book/show/16085233-o-deus-das-moscas',
  },
  {
    title: 'Man’s Search for Meaning',
    href: 'https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning',
  },
  {
    title: 'The Brothers Karamazov',
    href: 'https://www.goodreads.com/book/show/4934.The_Brothers_Karamazov',
  },
  {
    title: 'Crime e Castigo',
    href: 'https://www.goodreads.com/book/show/18104684-crime-e-castigo',
  },
  {
    title: 'The Curious Incident of the Dog in the Night-Time',
    href: 'https://www.goodreads.com/book/show/3438.The_Curious_Incident_of_the_Dog_in_the_Night_Time',
  },
  { title: 'Guerra e Paz', href: 'https://www.goodreads.com/book/show/18666334-guerra-e-paz' },
  {
    title: 'A Cósmetica do Inimigo',
    href: 'https://www.goodreads.com/book/show/12386453-a-c-smetica-do-inimigo',
  },
  {
    title: "Leaders Eat Last: Why Some Teams Pull Together and Others Don't",
    href: 'https://www.goodreads.com/book/show/16144853-leaders-eat-last',
  },
];

export const goodreadsProfile: LinkRef = {
  label: "Pedro Vicente's favorite books »",
  href: 'https://www.goodreads.com/user/show/8177117-pedro-vicente',
};

export const shorterIntro =
  'Books are life, but there are shorter formats that I highly recommend:';

/** Shown after the list, as on the original. */
export const shorterOrigin: RichText = [
  'This was originally ',
  { label: 'here', href: 'https://medium.com/improver/reading-list-fd282bf12654' },
  '.',
];

export const readingGroups: ReadingGroup[] = [
  {
    id: 'people',
    title: 'People',
    topics: [
      {
        title: 'Life',
        entries: [
          [
            {
              label: 'Should you live for your résumé … or your eulogy?',
              href: 'https://www.youtube.com/watch?v=MlLWTeApqIM',
            },
          ],
          [
            {
              label: 'Pursue meaning instead of happiness',
              href: 'https://www.thecut.com/2016/12/in-2017-pursue-meaning-instead-of-happiness.html',
            },
          ],
          [
            {
              label: 'World Peace Games',
              href: 'https://www.ted.com/talks/john_hunter_on_the_world_peace_game?language=pt',
            },
          ],
          [
            {
              label: 'Walk the earth (Francis was silent for 17 years)',
              href: 'https://www.ted.com/talks/john_francis_walks_the_earth',
            },
          ],
          [
            {
              label: 'What was your motivation to have children?',
              href: 'https://www.quora.com/What-was-your-motivation-to-have-children',
            },
          ],
        ],
      },
      {
        title: 'Philosophy',
        entries: [
          [
            {
              label:
                'Hannah Arendt on “Personal Responsibility Under Dictatorship:” Better to Suffer Than Collaborate',
              href: 'http://www.openculture.com/2017/01/hannah-arendt-on-personal-responsibility-under-dictatorship.html',
            },
          ],
        ],
      },
      {
        title: 'Psychology',
        entries: [
          [
            {
              label: 'How do you help a grieving friend?',
              href: 'https://www.youtube.com/watch?v=l2zLCCRT-nE&feature=youtu.be',
            },
          ],
          [
            {
              label:
                'Michio Kaku reveals how a simple test using marshmallows can predict how successful you can become.',
              href: 'https://www.facebook.com/goalcast/videos/1364151890396518/?__xts__%5B0%5D=68.ARBCwqI-FNu1ssb_IvzIYmWU_h86etF6Aq6v3wWd__zIU2lEIFLr9eSALVCt0bwkgjonpciVADH94AHTnU0FabiVx01zIMx8Eat_aXkQR1NHR-JdAdYXFvu9igVAZkoxxKs8FoBHfTQoYLII1GpU3sFgjXzyyEjlzrM7CzKBjjopnrpKGBHw8-W53ztP5LSehAvojlTmfgufih586lmDvEKTwFCtwTEt-7O9oswjD-QMDGdPXfbwJ9zRauL_wrVApLRB-zGvObxS1pN5ZctbHrhlz3IPjP2ghIHO8n_rEhUzgUQYb4cZ-NtF686mlscAEZ6nCiBe4XYgU4zuBnL1SYVipNA&__tn__=H-R',
            },
          ],
          [{ label: 'Evolution of trust', href: 'https://ncase.me/trust/' }],
          [
            {
              label: 'The Deficits of the iPhone Generation',
              href: 'https://www.thepublicdiscourse.com/2018/03/20958/',
            },
          ],
          [
            {
              label: 'How Shared Hatred Helps You Make Friends',
              href: 'https://read.medium.com/NNkBnvF',
            },
          ],
          [
            {
              label:
                'The Rosenhan experiment — conducted to determine the validity of psychiatric diagnosis. The experimenters feigned hallucinations to enter psychiatric hospitals and acted normally afterwards',
              href: 'https://en.wikipedia.org/wiki/Rosenhan_experiment',
            },
          ],
          [
            {
              label: 'With hot coffee, we see a warm heart, Yale researchers find',
              href: 'https://news.yale.edu/2008/10/23/hot-coffee-we-see-warm-heart-yale-researchers-find',
            },
            ' - (',
            {
              label: 'Tiktok version - TLDR',
              href: 'https://www.tiktok.com/@tonyrobbins/video/7130656519703612715?is_copy_url=1&is_from_webapp=v1&lang=en',
            },
            ')',
          ],
        ],
      },
      {
        title: 'Addictions',
        entries: [
          [
            {
              label: [
                {
                  em: '“The opposite of addiction is not sobriety. The opposite of addiction is connection.” ',
                },
                '— Johann Hari',
              ],
              href: 'http://t.ted.com/cXvjJRp',
            },
          ],
          [
            {
              label:
                '‘Our minds can be hijacked’: the tech insiders who fear a smartphone dystopia',
              href: 'https://www.theguardian.com/technology/2017/oct/05/smartphone-addiction-silicon-valley-dystopia?mbid=social_fb_backchannel',
            },
          ],
        ],
      },
      {
        title: 'Elderly',
        entries: [
          [
            {
              label: 'How the Elderly Lose Their Rights',
              href: 'https://www.newyorker.com/magazine/2017/10/09/how-the-elderly-lose-their-rights?mbid=social_twitter',
            },
          ],
        ],
      },
      {
        title: 'Trivia',
        entries: [
          [
            {
              label: 'How do you know you are real?',
              href: 'https://www.facebook.com/BeConstantlyCurious/videos/148330732499644/?__xts__%5B0%5D=68.ARCiFmPNgMq75xVwGw6PB50LfbHzxtsWpmwkIM-RIsQFpEIJh5a094OZ8lfT6PPiY2ZRlj9DH1vb6zrNYxXjwWF1wuH_oCplH77WpwelVjStfowFvx3GCIGJqcBuWr1EhQuFDR1e6wMqFByw3XsOe6_YjMgGwpZ3h2kH8rXZUABL3YKYA7Ag7t0TpmLcNeOisMFdmvkscILq0QCjMHtlBfUOaq1vz3Bt0UoF7xOIfnnUmh5oo4iBAXkf-ifi6_w1wE_XW9iqP0bYUF0bhgNPZU6-buX9HGh6a0CPWbqqgH9rU4IMe_ami6EEdXLae6hhAfEmJuEZHy_lnKMzZva2EEoS6Q&__tn__=H-R',
            },
          ],
          [
            {
              label: 'What is something almost everyone does wrong yet has no idea?',
              href: 'https://www.quora.com/What-is-something-almost-everyone-does-wrong-yet-has-no-idea/answer/w-w-Lenzo',
            },
          ],
          [
            {
              label: 'The True Story Of Desmond Doss Was Too Heroic Even For ‘Hacksaw Ridge’',
              href: 'https://allthatsinteresting.com/desmond-doss',
            },
          ],
          [
            {
              label: 'Nike and Boeing Are Paying Sci-Fi Writers to Predict Their Futures',
              href: 'https://onezero.medium.com/nike-and-boeing-are-paying-sci-fi-writers-to-predict-their-futures-fdc4b6165fa4',
            },
          ],
          [
            {
              label: 'To BC or BCE?',
              href: 'https://www.telegraph.co.uk/news/worldnews/australiaandthepacific/australia/8737038/To-BC-or-BCE.html',
            },
          ],
          [
            {
              label:
                '[Portuguese] Azul para os meninos e cor-de-rosa para as meninas? Nem sempre foi assim',
              href: 'https://observador.pt/especiais/azul-para-os-meninos-e-cor-de-rosa-para-as-meninas-nem-sempre-foi-assim/',
            },
          ],
        ],
      },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    topics: [
      {
        title: 'Fantasy',
        entries: [
          [
            {
              label: 'How to deal with the Tooth Fairy by Neil deGrasse Tyson',
              href: 'https://youtu.be/zIXAJFjFGRw',
            },
          ],
        ],
      },
      {
        title: 'Behavior',
        entries: [
          [
            {
              label: 'Do not punish the behaviour you want to see',
              href: 'https://twitter.com/erinscafe/status/959370479038427137/photo/1?utm_source=fb&utm_medium=fb&utm_campaign=neteinstein&utm_content=961079525638660101',
            },
          ],
        ],
      },
      {
        title: 'School',
        entries: [
          [
            {
              label: 'Case Study: Kaospilots—From Passive Listeners to Global Change Agents',
              href: 'https://link.springer.com/chapter/10.1007/978-3-319-78580-6_12',
            },
          ],
          [
            '[Portuguese] ',
            {
              label: 'Há escolas que são gaiolas e há escolas que são asas.',
              href: 'https://www.facebook.com/territorioconhecimento/videos/786258098213302/',
            },
          ],
          [
            {
              label: '‘Most Likely to Succeed’',
              href: 'https://www.inc.com/joshua-spodek/why-every-parent-should-watch-this-movie.html?fbclid=IwAR2UbWeOM3TMemb1q2yYHAd1L36JgUNLrumY9dJNG-aHef6iawOW9SkrX4A',
            },
            ' — A ',
            {
              label: 'movie',
              href: 'https://teddintersmith.com/mltsfilm/#1519880513403-7f75283c-d61a',
            },
            ' that will revolutionize how you see education, childhood, and learning',
          ],
          [{ label: 'Super Mário Effect', href: 'https://www.youtube.com/watch?v=9vJRopau0g0' }],
        ],
      },
      {
        title: 'Hobbies',
        entries: [
          [
            {
              label:
                "The summer camp experience that changes Netflix's CEO (Check the part of the interview about National Outdoor Leadership School)",
              href: 'https://tim.blog/2021/02/01/marc-randolph-transcript/',
            },
          ],
        ],
      },
      {
        title: 'Marriage',
        entries: [
          [
            {
              label: '[Portuguese] Não há casamentos estáveis',
              href: 'https://rr.sapo.pt/artigo/115360/nao-ha-casamentos-estaveis',
            },
          ],
        ],
      },
    ],
  },
  {
    id: 'organisations',
    title: 'Organisations',
    topics: [
      {
        title: 'Teams',
        entries: [
          [
            {
              label: 'It’s Not Enough to Be Right — You Also Have to Be Kind',
              href: 'https://medium.com/s/story/its-not-enough-to-be-right-you-also-have-to-be-kind-b8814111fe1',
            },
          ],
          [
            {
              label: [{ em: 'What drives the most high-achieving teams is social cohesion' }],
              href: 'https://www.youtube.com/watch?v=Vyn_xLrtZaY',
            },
            ' — Margaret Heffernan',
          ],
          [
            {
              label: 'What Google learned from its quest to build the perfect team',
              href: 'https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html',
            },
          ],
          [
            {
              label: 'Personal README experience',
              href: 'https://engineering.tes.com/post/personal-readme-experiment/',
            },
          ],
        ],
      },
      {
        title: 'Self management',
        entries: [
          [
            {
              label: 'Self management is a great idea',
              href: 'https://www.forbes.com/sites/drucker/2012/09/25/self-management-a-great-idea/#c05b99911de6',
            },
          ],
          [
            {
              label: 'Decision making',
              href: 'http://www.reinventingorganizationswiki.com/Decision_Making',
            },
          ],
          [
            {
              label: 'Self defined self management',
              href: 'https://open.buffer.com/self-management-circle/',
            },
          ],
          [
            {
              label: 'Mindera: Why we don’t have people managing other people',
              href: 'https://medium.com/mindera/why-we-dont-have-people-managing-other-people-d0d44a1d6d1a',
            },
          ],
          [{ label: 'What is holocracy?', href: 'https://www.holacracy.org/what-is-holacracy' }],
          [
            {
              label: 'Cut the bullshit: organisations with no hierarchy don’t exist',
              href: 'https://medium.com/ouishare-connecting-the-collaborative-economy/cut-the-bullshit-organizations-with-no-hierarchy-dont-exist-f0a845e73a80',
            },
          ],
          [
            {
              label: 'An Email From Elon Musk Reveals Why Managers Are Always a Bad idea',
              href: 'https://www.inc.com/chuck-blakeman/an-email-from-elon-musk-reveals-why-managers-are-always-a-bad-idea.html?cid=sf01002&sr_share=facebook',
            },
          ],
        ],
      },
      {
        title: 'Culture',
        entries: [
          [
            {
              label: 'Satya Nadella: The C In CEO Stands For Culture',
              href: 'https://www.fastcompany.com/40457741/satya-nadella-the-c-in-ceo-stands-for-culture?position=1&partner=newsletter&campaign_date=09212017&utm_content=buffer4b100&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer',
            },
          ],
          [
            {
              label: 'The Role of the Founder/CEO: You Have One Job',
              href: 'https://hackernoon.com/the-role-of-the-founder-ceo-you-have-one-job-3bbaabceadac',
            },
          ],
          [
            {
              label: 'What To Do When You Can No Longer Afford Those Flashy Office Perks',
              href: 'https://www.fastcompany.com/3056017/what-to-do-when-you-can-no-longer-afford-those-flashy-office-perks',
            },
          ],
          [
            {
              label: 'The work week is obsolete. What comes next?',
              href: 'https://medium.com/the-helm/the-work-week-is-obsolete-what-comes-next-cf37c74edf0c',
            },
          ],
        ],
      },
      {
        title: 'Day to day',
        entries: [
          [{ label: 'Impostor syndrome', href: 'https://davidwalsh.name/impostor-syndrome' }],
          [
            {
              label: 'The most dangerous phrase is: “We’ve always done it this way”',
              href: 'https://www.forbes.com/sites/cognitiveworld/2018/07/20/the-future-of-work-continues-to-be-rewritten/',
            },
          ],
          [
            {
              label: 'Don’t find a job, find a mission',
              href: 'https://www.youtube.com/watch?v=VVx6ntr5OqI&feature=youtu.be',
            },
          ],
          [
            {
              label: '[Portuguese] A matemática acaba onde começa a filosofia',
              href: 'https://24.sapo.pt/article/sapo24-blogs-sapo-pt_2016_08_24_1631971324_a-matematica-acaba-onde-comeca-a-filosofia',
            },
          ],
          [
            {
              label: 'Work, Sleep, Family, Fitness, or Friends: Pick 3',
              href: 'https://www.inc.com/jessica-stillman/work-sleep-family-fitness-or-friends-pick-3.html',
            },
          ],
        ],
      },
      {
        title: 'Evaluation / Reviews',
        entries: [
          [
            {
              label: 'Stop paying based on performance reviews',
              href: 'https://hbr.org/2014/01/stop-basing-pay-on-performance-reviews',
            },
          ],
          [
            {
              label: 'Separating compensation from performance and development',
              href: 'https://blog.betterworks.com/separating-compensation-performance-development/',
            },
          ],
          [
            {
              label: 'Annual Review: Why you should separate performance and pay',
              href: 'https://www.middlemarketcenter.org/expert-perspectives/annual-reviews-why-you-should-separate-performance-and-pay',
            },
          ],
        ],
      },
      {
        title: 'Feedback',
        entries: [
          [
            {
              label: 'Unlock honest feedback',
              href: 'https://m.signalvnoise.com/unlock-honest-feedback-from-your-employees-with-this-one-word/#.u920zk9ew',
            },
          ],
          [
            {
              label: 'Why Anonymous Feedback Does More Harm Than Good',
              href: 'https://www.fastcompany.com/3055750/why-anonymous-feedback-does-more-harm-than-good',
            },
          ],
          [
            {
              label: 'Why giving feedback is trickier than it seems',
              href: 'https://www.kqed.org/mindshift/47948/why-giving-effective-feedback-is-trickier-than-it-seems',
            },
          ],
          [
            {
              label: 'We may have missed the feedback boat',
              href: 'https://www.linkedin.com/pulse/we-may-have-missed-feedback-boat-reason-all-why-elaine-pulakos/',
            },
          ],
          [
            {
              label: 'Using neuroscience to make feedback work',
              href: 'https://www.strategy-business.com/article/Using-Neuroscience-to-Make-Feedback-Work-and-Feel-Better?gko=9ff55',
            },
          ],
          [
            {
              label: 'Spotify Squad Health Check',
              href: 'https://labs.spotify.com/2014/09/16/squad-health-check-model/',
            },
          ],
          [
            {
              label: 'Team Feedback at Mindera',
              href: 'https://medium.com/mindera/team-feedback-sessions-how-to-130b0a45b75a',
            },
          ],
          [
            {
              label: 'LoopGain — Team Feedback',
              href: 'https://medium.com/loopgain/loopgain-38bddca1809b',
            },
          ],
          [
            {
              label: 'The appraisal is dead long live the catchup',
              href: 'https://www.theguardian.com/careers/2018/feb/02/the-appraisal-is-dead-long-live-the-catchup',
            },
          ],
        ],
      },
      {
        title: 'Leadership',
        entries: [
          [
            {
              label: 'Implementing Intent based leadership with David Marquet',
              href: 'http://www.andycleff.com/2018/01/implementing-intent-based-leadership/',
            },
            ' — ',
            { label: 'Video', href: 'https://www.youtube.com/watch?v=IzJL8zX3EVk' },
          ],
          [
            {
              label: 'Simon Sinek — Finite vs Infinite Games',
              href: 'https://www.youtube.com/watch?v=Ar20m23XY_c',
            },
          ],
          [
            {
              label: 'Selfless leader is the next frontier',
              href: 'https://www.linkedin.com/pulse/self-less-leadership-next-frontier-edward-m-marshall-ph-d-/?trk=hp-feed-article-title-like',
            },
          ],
          [
            {
              label: 'Why do we need leaders',
              href: 'https://expertprogrammanagement.com/2017/02/why-do-we-need-leaders/',
            },
          ],
          [
            {
              label: 'Why good leaders make you feel safe',
              href: 'https://www.ted.com/talks/simon_sinek_why_good_leaders_make_you_feel_safe',
            },
          ],
        ],
      },
      {
        title: 'Salaries',
        entries: [
          [
            {
              label: 'Corporate Rebels — Self set salaries',
              href: 'https://corporate-rebels.com/self-set-salaries/',
            },
          ],
          [
            'A story about Salaries at Mindera —',
            {
              label: 'part 1',
              href: 'https://medium.com/mindera/a-story-about-salaries-at-mindera-908b9dca292e',
            },
            ' & ',
            {
              label: 'part 2',
              href: 'https://medium.com/mindera/a-story-about-salaries-part-2-9597a1348524',
            },
          ],
          [
            {
              label: 'Does pay influence loyalty',
              href: 'https://towardsdatascience.com/does-pay-impact-loyalty-in-tech-a-study-in-simple-data-visualization-f15e93659a6d',
            },
          ],
          [
            {
              label: 'Here’s why our team now chooses their own salaries',
              href: 'https://hanno.co/blog/choose-your-own-salary/',
            },
          ],
          [
            {
              label: 'Open salaries at Buffer',
              href: 'https://open.bufferapp.com/introducing-open-salaries-at-buffer-including-our-transparent-formula-and-all-individual-salaries/',
            },
          ],
          [
            {
              label: 'Why an open salary policy always beats secrecy',
              href: 'http://techcrunch.com/2015/03/21/why-an-open-salary-policy-always-beats-secrecy/',
            },
          ],
          [
            {
              label: 'Salary transparency at Stack Overflow',
              href: 'https://blog.stackoverflow.com/2016/07/salary-transparency/',
            },
          ],
          [
            {
              label: 'Open salaries',
              href: 'http://blog.lunarlogic.io/2016/open-salaries-outcomes/',
            },
          ],
          [
            {
              label: 'How much should you pay developers',
              href: 'http://blog.stackoverflow.com/2011/07/how-much-should-you-pay-developers/',
            },
          ],
          [
            {
              label: 'I Know the Salaries of Thousands of Tech Employees',
              href: 'https://medium.com/s/powertrip/i-know-the-salaries-of-thousands-of-tech-employees-4841bc26d753',
            },
          ],
          [
            {
              label: 'Why I never let employees negotiate a raise',
              href: 'http://www.inc.com/magazine/20090401/how-hard-could-it-be-employees-negotiate-pay-raises.html?partner=fogcreek',
            },
          ],
          [
            {
              label: 'Why you should know how much your coworkers get paid - David Burkus',
              href: 'https://www.youtube.com/watch?v=Bjy9oUh66FA',
            },
          ],
          [
            {
              label: 'What happens when you talk about salaries at Google',
              href: 'https://www.wired.com/2015/07/happens-talk-salaries-google/',
            },
          ],
        ],
      },
      {
        title: 'Meetings',
        entries: [
          [
            {
              label: 'How to Win Arguments Without Making Enemies',
              href: 'https://www.inc.com/geoffrey-james/how-to-win-arguments-without-making-enemies.html',
            },
          ],
          [
            {
              label: 'The Surprising Meeting Method I Learned From Amazon’s Jeff Bezos',
              href: 'https://www.inc.com/justin-bariso/amazons-jeff-bezos-uses-a-brilliant-and-surprising.html?cid=sf01002&sr_share=facebook',
            },
          ],
        ],
      },
      {
        title: 'Interviews',
        entries: [
          [
            {
              label: 'How to answer the dreaded salary question',
              href: 'https://www.seek.com.au/career-advice/how-to-answer-the-dreaded-salary-question',
            },
          ],
          [
            {
              label: 'Not another interviews’ article',
              href: 'https://medium.com/code-procedure-and-rants/not-another-android-interviews-article-5b478671793b',
            },
          ],
        ],
      },
      {
        title: 'Resign',
        entries: [
          [
            {
              label:
                'I told my boss that I’m going to resign, and he offered me twice my current salary if I stay, what should I do?',
              href: 'https://www.quora.com/I-told-my-boss-that-Im-going-to-resign-and-he-offered-me-twice-my-current-salary-if-I-stay-what-should-I-do/answer/Joel-Bennett-1?ch=99&share=d81d0900&srid=uwXv',
            },
          ],
        ],
      },
      {
        title: 'Entrepreneurship',
        entries: [
          [
            {
              label:
                'Why you should wait until your 40s to become an entrepreneur, according to a new study',
              href: 'https://www.weforum.org/agenda/2018/08/why-you-should-wait-until-your-40s-to-become-an-entrepreneur-according-to-a-new-study',
            },
          ],
          [
            {
              label: 'The new status symbol: it’s not what you spend — it’s how hard you work',
              href: 'https://www.theguardian.com/technology/2017/apr/24/new-status-symbol-hard-work-spending-ceos?CMP=fb_gu',
            },
          ],
          [
            {
              label: 'Our obsession with the “cult of the entrepreneur” has gone too far',
              href: 'https://qz.com/948748/our-obsession-with-the-cult-of-the-entrepreneur-has-gone-too-far/',
            },
          ],
        ],
      },
    ],
  },
  {
    id: 'technology-and-science',
    title: 'Technology and Science',
    topics: [
      {
        title: 'Software',
        entries: [
          [
            {
              label: 'Why can’t bots check “I am not a robot” checkboxes?',
              href: 'https://www.quora.com/Why-cant-bots-check-%E2%80%9CI-am-not-a-robot%E2%80%9D-checkboxes',
            },
          ],
          [
            {
              label: 'Imaginary Problems Are the Root of Bad Software',
              href: 'https://medium.com/s/story/imaginary-problems-d4f2921bd1b8',
            },
          ],
        ],
      },
      {
        title: 'Culture',
        entries: [
          [
            {
              label:
                'Larry Page has a reputation for pushing people at Google. Here’s how he pushed a young Sundar Pichai to make Google Chrome the top web browser in the world',
              href: 'https://amp.businessinsider.com/larry-page-google-chrome-sundar-pichai-goals-2018-6',
            },
          ],
          [
            {
              label: 'What Satya Nadella did at Microsoft',
              href: 'https://www.economist.com/business/2017/03/16/what-satya-nadella-did-at-microsoft',
            },
          ],
        ],
      },
      {
        title: 'Trivia',
        entries: [
          [
            {
              label:
                'How do I explain to non-programmers how complex, time-consuming, and error-prone software development is?',
              href: 'https://www.quora.com/How-do-I-explain-to-non-programmers-how-complex-time-consuming-and-error-prone-software-development-is/answer/Channing-Walton-1?ref=fb_page',
            },
          ],
          [
            {
              label:
                'How would you tell if an antique chair was actually a modern forgery? I guess you could lick it',
              href: 'https://www.vanityfair.com/style/2018/07/how-a-sneaky-furniture-expert-tricked-versailles',
            },
          ],
          [
            {
              label: 'Why every tech worker needs a humanities education',
              href: 'https://qz.com/1016900/tracy-chou-leading-silicon-valley-engineer-explains-why-every-tech-worker-needs-a-humanities-education/?utm_source=parIC&%3Futm_source=parIC&cid=sf01002&sr_share=facebook',
            },
          ],
          [
            {
              label:
                'The internet is still actually controlled by 14 people who hold 7 secret keys',
              href: 'https://www.businessinsider.com/the-internet-is-controlled-by-secret-keys-2016-10',
            },
          ],
          [
            {
              label: 'Who is the most corrupt and crooked scientist ever known?',
              href: 'https://www.quora.com/Who-is-the-most-corrupt-and-crooked-scientist-ever-known/answer/Jack-Fraser-11',
            },
          ],
        ],
      },
      {
        title: 'Politics',
        entries: [
          [
            '[Portuguese] ',
            {
              label: 'Higienização politicamente correta',
              href: 'http://visao.sapo.pt/opiniao/editorial/2018-06-14-Higienizacao-politicamente-correta',
            },
          ],
        ],
      },
      {
        title: 'Universal income',
        entries: [
          [
            {
              label: 'Universal basic income could be a real solution to poverty',
              href: 'https://www.facebook.com/TED/videos/552352048517517/?__xts__%5B0%5D=68.ARB1s-WHqQJaR5VQt9neI1d8S38GjQIRWH2zqUOX1tjJANso9RaLPZm76HQWbK2IiM6zMBXX9EXmIL9yOSJ8JI7NYAk5pagpybxqTB_Trdpjvijk1EXVFELCbJPpr1mlhmpyhi0K74jechNEmkjbGinsu4l9P6H_VmoYCqOcRgI_ukL84vqPObM9jYWOi-d4o-92vrNPp-mdn3lj94esda1hAmvyJFsVnnMCyEulapxQHuOR7P4LUZv4vA-cJ_UZvshPULEY6v_vTQsHRUDaxM1bQiW9X7JH3man_RYJq52bTA-kstOidqdA82Xsy-T5vsBlMxaq73pYjXOSxQhB&__tn__=H-R',
            },
          ],
          [
            {
              label: 'No, Finland isn’t scrapping its universal basic income experiment',
              href: 'https://www.wired.co.uk/article/finland-universal-basic-income-results-trial-cancelled',
            },
          ],
        ],
      },
      {
        title: 'Trivia',
        entries: [
          [
            {
              label: 'Change the narrative: how a Swiss group is beating rightwing populists',
              href: 'https://www.theguardian.com/world/2019/apr/07/we-had-to-fight-operation-libero-the-swiss-youth-group-taking-on-populism?CMP=fb_gu&utm_medium=Social&utm_source=Facebook#Echobox=1554648739',
            },
          ],
        ],
      },
      {
        title: 'E-vote',
        entries: [
          [
            {
              label: 'I bought used voting machines on eBay. What I found was alarming',
              href: 'https://www.wired.com/story/i-bought-used-voting-machines-on-ebay/',
            },
          ],
        ],
      },
    ],
  },
  {
    id: 'nature',
    title: 'Nature',
    topics: [
      {
        title: 'Trivia',
        entries: [
          [
            {
              label: 'We need a plan to stop polluting space before it’s too late',
              href: 'https://www.fastcompany.com/3056017/what-to-do-when-you-can-no-longer-afford-those-flashy-office-perks',
            },
          ],
          [
            {
              label: 'If you want to save the world, veganism isn’t the answer',
              href: 'https://www.theguardian.com/commentisfree/2018/aug/25/veganism-intensively-farmed-meat-dairy-soya-maize?CMP=fb_gu',
            },
          ],
          [
            {
              label: 'Should horseback riding be banned as cruel animal abuse?',
              href: 'https://www.quora.com/Should-horseback-riding-be-banned-as-cruel-animal-abuse-Just-compare-the-curvature-on-the-back-of-a-ridden-horse-vs-a-wild-horse-If-it-was-human-they-would-be-in-pain-management-for-life/answer/Robin-McGee-5?ch=3&share=0fb63306&srid=uwXv',
            },
          ],
        ],
      },
      {
        title: 'Health',
        entries: [
          [
            '[Portuguese] ',
            {
              label:
                'Em 1995, as mulheres portuguesas viviam 75 anos com saúde. Em 2018 vivem apenas 70 anos com saúde.',
              href: 'https://www.pordata.pt/Europa/Anos+de+vida+saud%C3%A1vel+aos+65+anos+por+sexo-1590',
            },
          ],
        ],
      },
    ],
  },
  {
    id: 'news',
    title: 'News',
    topics: [
      {
        title: 'Awesome',
        entries: [
          [
            {
              label:
                'A small Italian town can teach the world how to defuse controversial monuments',
              href: 'https://www.theguardian.com/commentisfree/2017/dec/06/bolzano-italian-town-defuse-controversial-monuments',
            },
          ],
        ],
      },
      {
        title: 'Studies',
        entries: [
          [
            {
              label:
                'You may think the world is falling apart. Steven Pinker is here to tell you it isn’t.',
              href: 'https://www.vox.com/2016/8/16/12486586/2016-worst-year-ever-violence-trump-terrorism',
            },
          ],
          [
            {
              label: 'The EU Suppressed a 300-Page Study That Found Piracy Doesn’t Harm Sales',
              href: 'https://gizmodo.com/the-eu-suppressed-a-300-page-study-that-found-piracy-do-1818629537',
            },
          ],
        ],
      },
      {
        title: 'Trolls',
        entries: [
          [
            {
              label: '4chan: The Skeleton Key to the Rise of Trump',
              href: 'https://medium.com/@DaleBeran/4chan-the-skeleton-key-to-the-rise-of-trump-624e7cb798cb',
            },
          ],
        ],
      },
      {
        title: 'Fake news',
        entries: [
          [
            {
              label: '‘Real’ fake research hoodwinks US journals',
              href: 'https://phys.org/news/2018-10-real-fake-hoodwinks-journals.html',
            },
          ],
          [
            {
              label:
                '[Portuguese] Revista científica publica estudo inventado por jornalistas sobre cancro',
              href: 'https://www.dn.pt/lusa/interior/revista-cientifica-publica-estudo-inventado-por-jornalistas-sobre-cancro-9615108.html',
            },
          ],
        ],
      },
      {
        title: 'Trivia',
        entries: [
          [
            {
              label:
                'If you had a key for every lock in this world, but you could only use it once, what would you use it for?',
              href: 'https://www.quora.com/If-you-had-a-key-for-every-lock-in-this-world-but-you-could-only-use-it-once-what-would-you-use-it-for/answer/Lee-Ballentine',
            },
          ],
          [
            {
              label: 'In 1989, for a few days, the 6th largest military power on Earth was… Pepsi',
              href: 'https://www.quora.com/What-is-an-interesting-fact-of-history-that-most-people-dont-know/answer/Connor-Johnson-32',
            },
          ],
          [
            {
              label: 'How to deal with a nazi march',
              href: 'https://twitter.com/CleveJones1/status/897880400982188032/photo/1?utm_source=fb&utm_medium=fb&utm_campaign=neteinstein&utm_content=898087952999477248',
            },
          ],
          [
            {
              label: '[Portuguese] O enigma do autómato turco que jogava xadrez',
              href: 'https://observador.pt/especiais/o-enigma-do-automato-turco-que-jogava-xadrez/',
            },
          ],
        ],
      },
      {
        title: 'Travel',
        entries: [
          [
            {
              label: 'This map shows travel time from London in 1881',
              href: 'https://twitter.com/conradhackett/status/944382041566654464/photo/1?utm_source=fb&utm_medium=fb&utm_campaign=neteinstein&utm_content=944897551190372352',
            },
          ],
        ],
      },
      {
        title: 'Nuclear',
        entries: [
          [
            {
              label: 'If the world were to adopt nuclear power, where would all of the waste go?',
              href: 'https://www.quora.com/If-the-world-were-to-adopt-nuclear-power-where-would-all-of-the-waste-go/answer/Michael-Karnerfors',
            },
          ],
        ],
      },
      {
        title: 'Personal Tools',
        entries: [
          [{ label: 'Myers Briggs', href: 'https://www.16personalities.com/' }],
          [{ label: 'Enneagram', href: 'https://app.trueself.io/profile/questions' }],
        ],
      },
    ],
  },
];

export const readLateIntro =
  'An unfiltered list of links I still have to read (some will move here afterwards).';

export const toReadList: ReadingDocEmbed = {
  title: 'Pedro Vicente’s To Read List',
  src: 'https://docs.google.com/document/d/14SD3mdfjCkdIRN3ePVMKLXc0JxVYZGPJwYTGe8VYtDU/preview',
  href: 'https://docs.google.com/document/d/14SD3mdfjCkdIRN3ePVMKLXc0JxVYZGPJwYTGe8VYtDU/edit#heading=h.i0b3hefj872p',
};

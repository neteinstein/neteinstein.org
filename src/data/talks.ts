/**
 * Talks & Workshops content, ported from the Google Sites original
 * (https://www.neteinstein.org/what-i-do/talks-workshops — crawl snapshot in
 * `.crawl/report.json`). Copy is verbatim, quirks included ("Set" for
 * September, dangling dashes): it is the author's own list.
 */
import type { TalkCategory, TalkLink, TalkLogYear, TalkPageCopy, TalkStat, TalkTag } from './types';

import wip2Still from '../assets/what-i-do/talks-workshops/wip2-documentary-still.webp';
import multiplatformTalk from '../assets/what-i-do/talks-workshops/multiplatform-talk.webp';
import howToGetBald from '../assets/what-i-do/talks-workshops/how-to-get-bald-slide.webp';
import tedxStage from '../assets/what-i-do/talks-workshops/tedxcoimbra-stage.webp';

export const talksPage: TalkPageCopy = {
  title: 'Talks & Workshops',
  eyebrow: 'What I do',
  highlight: ['Talks'],
  description:
    "Pedro Vicente's talks and workshops, from a Google Wave talk in 2009 to a KMP workshop in 2025: company culture, Android and mobile tech, feedback and teams, Walkabout at TEDxCoimbra, and a year-by-year list.",
  quote: "I've been speaking for so long... I still had hair when I started!",
  intro:
    'Tech is life, but life is much more than tech... and so are my talks. Scroll down to see some examples!',
  logTitle: 'A more exhaustive list (of the ones that can be public)...',
};

// Links used by both the showcase tiles and the exhaustive list.
const DROIDCON_SLIDES =
  'https://www.slideshare.net/neteinstein/a-multiplatform-multitenant-challenge-droidcon-lisbon-2023pdf';
/** The size of the frame in the original's SlideShare embed code. */
const SLIDESHARE_ASPECT = '595 / 485';
const ACORDA: TalkLink = { label: "A'Corda", href: 'https://www.instagram.com/_a.corda_/' };

export const talkCategories: TalkCategory[] = [
  {
    id: 'company-culture',
    title: 'Company Culture',
    icon: 'users',
    rows: [
      [
        {
          title: 'Why Do We Even Work?',
          subtitle:
            'Work In Progress 2 - A documentary by KOM and Samuel Durand exploring the future of work within companies',
          photo: {
            src: wip2Still,
            alt: 'Documentary still: Pedro Vicente, captioned “Software Craftsman @Mindera”, talking on a rooftop above a hazy city',
          },
        },
      ],
      [
        {
          title: 'Is this real life, or just fantasy… open your eyes..',
          video: {
            provider: 'youtube',
            id: 'Szq-Yrad74g',
            title:
              'Mindera | Is this real life, or just fantasy… open your eyes (…) by Pedro Vicente | Open Day 2022',
          },
          caption: [['Open Day - Mindera 2022']],
        },
        {
          title: 'Why do we use technology to build products we are proud of, with people we love?',
          video: {
            provider: 'youtube',
            id: 'wP-8550161c',
            title: 'Why do we use technology to build products? ~ Pedro Vicente at #TJF21 Portugal',
          },
          caption: [['Tech Jobs Fair 2021']],
        },
        {
          title: 'Employer Branding',
          video: {
            provider: 'youtube',
            id: '2hRjQUqbxmg',
            title: 'EMPLOYER BRANDING for IT Talent - [BEST PRACTICES]',
          },
          caption: [['IT Talent by Toni Gimeno Solans 2020']],
        },
      ],
    ],
  },
  {
    id: 'tech',
    title: 'Tech',
    icon: 'code',
    rows: [
      [
        {
          title: 'How to Develop a Mobile App in 2025',
          video: {
            provider: 'youtube',
            id: 'oDhik-HuMQA',
            title: 'Mindera software | How To Develop a Mobile App in 2025',
          },
          caption: [['Matosinhos 2025 - Host']],
        },
      ],
      [
        {
          title: 'Once Upon a time... a Multiplatform, multi-tenant challenge',
          photo: {
            src: multiplatformTalk,
            alt: 'A speaker in a black Mindera T-shirt raises a finger mid-talk, beside the projected slides',
          },
          slides: {
            src: 'https://www.slideshare.net/slideshow/embed_code/key/sBjbsifNS3YtIx?startSlide=1',
            title: 'A Multiplatform, Multi-Tenant Challenge - Droidcon Lisbon 2023.pdf',
            aspect: SLIDESHARE_ASPECT,
            byline: [
              {
                label: 'A Multiplatform, Multi-Tenant Challenge - Droidcon Lisbon 2023.pdf',
                href: DROIDCON_SLIDES,
              },
              ' from ',
              { label: 'Pedro Vicente', href: 'https://www.slideshare.net/neteinstein' },
            ],
          },
          caption: [['Droidcon Lisbon 2023 - Slides']],
        },
        {
          title: "Don't Make Android Bad Again",
          photo: {
            src: howToGetBald,
            alt: 'A speaker on stage beneath a giant projected close-up of a bearded face and the words “How to get bald”',
          },
          video: {
            provider: 'youtube',
            id: 'zNRIA7Wpiw8',
            title: "Commit Porto '18: Don't Make Android Bad Again (Pedro Vicente)",
          },
          caption: [
            [
              'Commit Porto 2018 - (Presentation available ',
              {
                label: 'here',
                href: 'https://pt.slideshare.net/slideshow/dont-make-android-bad-again/103802914',
                ariaLabel: "here: Don't Make Android Bad Again slides on SlideShare",
              },
              ')',
            ],
          ],
        },
      ],
    ],
  },
  {
    id: 'other-talks',
    title: 'Other Talks',
    icon: 'sparkles',
    banner: {
      src: tedxStage,
      alt: 'A speaker alone on the TEDxCoimbra stage, the red TEDx Coimbra letters behind him, facing a packed auditorium',
    },
    rows: [
      [
        {
          title: 'Feedback (with a deck of cards and a pile of emotions)',
          slides: {
            src: 'https://www.slideshare.net/slideshow/embed_code/key/eFXLnujmh2FW5j',
            title: 'Feedback (with a deck of cards and a pile of emotions) — slides',
            aspect: SLIDESHARE_ASPECT,
            href: 'https://www.slideshare.net/slideshow/embed_code/key/eFXLnujmh2FW5j',
            hrefLabel: 'Open the slides',
          },
          caption: [['Agile Connect 2020 - Slides']],
        },
        {
          title: 'Walkabout',
          video: {
            provider: 'youtube',
            id: 'dN4M98Cq5Es',
            title: 'Walkabout: Pedro Vicente at TEDxCoimbra',
          },
          caption: [
            ['TEDxCoimbra 2012'],
            [
              {
                em: [
                  '(Presentation available ',
                  {
                    label: 'here',
                    href: 'https://pt.slideshare.net/slideshow/walkabout/14824865',
                    ariaLabel: 'here: Walkabout slides on SlideShare',
                  },
                  ', and other info ',
                  {
                    label: 'here',
                    href: 'https://medium.com/improver/walkabout-tedxcoimbra-2012-1dd9c6352294',
                    ariaLabel: 'here: Walkabout at TEDxCoimbra 2012, on Medium',
                  },
                ],
              },
              ')',
            ],
          ],
        },
      ],
    ],
  },
];

/** Tone for each hashtag's chip (keys into `Tag.astro`'s tones). */
export const talkTagTones: Record<TalkTag, 'neutral' | 'accent' | 'pink' | 'amber' | 'teal'> = {
  Tech: 'accent',
  CompanyCulture: 'pink',
  Teams: 'teal',
  Feedback: 'amber',
  Education: 'neutral',
  Career: 'neutral',
  Leadership: 'neutral',
  Life: 'neutral',
  Politics: 'neutral',
  Charity: 'neutral',
};

/** "A more exhaustive list...", newest first, in the original's order. */
export const talkLog: TalkLogYear[] = [
  {
    year: '2026',
    entries: [
      {
        month: 'Set',
        event: ['Mindera AI Insights Event'],
        talk: ['Pending Approvals: An AI Story'],
        tags: ['Tech'],
      },
    ],
  },
  {
    year: '2025',
    entries: [{ month: 'Apr', event: ['KMP Workshop'], talk: [], tags: ['Tech'] }],
  },
  {
    year: '2024',
    entries: [
      {
        month: 'Dec',
        event: ['How to build a Mobile App in 2025 (Matosinhos)'],
        talk: ['Host'],
        tags: ['Tech'],
      },
      {
        month: 'Aug',
        event: ['Encontro da Província Portuguesa dos Jesuítas (Casa da Torre - Soutelo)'],
        talk: ['O impacto do digital na vida das famílias'],
        tags: ['Education'],
      },
      {
        month: 'Jun',
        event: ['Tempo de Navegar (Colégio das Caldinhas - Santo Tirso)'],
        talk: ['Uma boa gestão do tempo de ecrãs é possível?'],
        tags: ['Education'],
      },
      {
        month: 'May',
        event: ['Mindera Event (London Office)'],
        talk: ['How to create a winning mobile commerce strategy in 2024'],
        tags: ['Tech'],
      },
      {
        month: 'Jan',
        event: ['Mindera Event (Porto Office)'],
        talk: ['Once Upon a time... a Multiplatform, multi-tenant challenge (KMP)'],
        tags: ['Tech'],
      },
    ],
  },
  {
    year: '2023',
    entries: [
      {
        month: 'Oct',
        event: ['Porto Tech Hub'],
        talk: ['Once Upon a time... a Multiplatform, multi-tenant challenge (KMP)'],
        tags: ['Tech'],
      },
      {
        month: 'Sep',
        event: [
          {
            label: 'Droidcon Lisbon',
            href: 'https://www.droidcon.com/events/droidcon-lisbon-2023/',
          },
        ],
        talk: [
          {
            label: 'Once Upon a time... a Multiplatform, multi-tenant challenge (KMP)',
            href: DROIDCON_SLIDES,
          },
        ],
        tags: ['Tech'],
      },
      {
        month: 'Mar',
        event: [ACORDA],
        talk: ['How to build a great team & maintain it'],
        tags: ['Teams', 'Feedback'],
      },
    ],
  },
  {
    year: '2022',
    entries: [
      {
        month: 'Nov',
        // The original's link runs across the " - " separators, so the line stays whole.
        event: [
          {
            label: 'JornISTT - Jornadas do Internato do ACES Santo Tirso/Trofa - What is a Team?',
            href: 'https://www.instagram.com/jornistt/',
          },
          ' How to give Feedback?',
        ],
        tags: ['Teams', 'Feedback'],
      },
      {
        month: 'Nov',
        event: [
          {
            label:
              'Câmara do Porto - Talento e Promoção da Empregabilidade - Interculturalidade de equipas',
            href: 'https://www.linkedin.com/posts/neteinstein_gerir-pessoas-num-mundo-global-%C3%A9-trabalhar-activity-6995857399093846016-SxJA?utm_source=share&utm_medium=member_desktop',
          },
        ],
        tags: ['Teams'],
      },
      {
        month: 'Nov',
        event: [ACORDA],
        talk: ['How to build a great team & maintain it'],
        tags: ['Teams', 'Feedback'],
      },
      {
        month: 'Apr',
        event: ['Mindera Open Day'],
        talk: ['Is this real life, or just fantasy… open your eyes'],
        tags: ['CompanyCulture'],
      },
    ],
  },
  {
    year: '2021',
    entries: [
      {
        month: 'Oct',
        event: ['Tech Jobs Fair 2021'],
        talk: [
          {
            label:
              'Why do we use technology to build products we are proud of, with people we love',
            href: 'https://www.youtube.com/watch?v=wP-8550161c',
          },
          '?',
        ],
        tags: ['CompanyCulture'],
      },
      {
        month: 'Feb',
        event: ['CREU'],
        talk: ['Feedback Workshop (for collaborators)'],
        tags: ['Teams', 'Feedback'],
      },
      {
        month: 'Feb',
        event: ['Mindera'],
        talk: ['Feedback Workshop (Internal)'],
        tags: ['Teams', 'Feedback'],
      },
      {
        month: 'Jan',
        event: ['Colégio das Caldinhas'],
        separator: '- ',
        talk: [
          '"',
          {
            label: 'Falo com estranhos na net',
            href: 'https://www.facebook.com/colegiodascaldinhas/posts/754525531821718?__cft__[0]=AZUF-4c_fdVxu-r-R7W672NQbwdn1fgNllx5CCdqq_SfRGFuJe76dqFq_2SaIK0-zScNPA3-ajBlCB8GoxkT0CLvzdqADxCg4wtfKRAMLO7nDiSsTYXZRh5khj2odvNi33RozBy10tc3oo5S9VYNnlGeiEZNmE29_kwKaAS9ODi8pk7bwdEmYAMkVojXCJWNsnQ&__tn__=%2CO%2CP-R',
          },
          '" (Education on internet usage for kids)',
        ],
        tags: ['Education'],
      },
    ],
  },
  {
    year: '2020',
    entries: [
      {
        month: 'Mar',
        event: ['Toni Gimeno Solans'],
        talk: [
          {
            label: 'Employer Branding for IT Talent',
            href: 'https://www.youtube.com/watch?v=2hRjQUqbxmg',
          },
        ],
        tags: ['CompanyCulture'],
      },
      {
        month: 'Oct',
        event: [{ label: 'Agile Connect', href: 'https://miro.com/app/board/o9J_kpKVd8w=/' }],
        talk: ['Feedback - with a deck of cards and a pile of emotions'],
        tags: ['Teams', 'Feedback'],
      },
    ],
  },
  {
    year: '2019',
    entries: [
      {
        month: 'Oct',
        event: ['Inigo'],
        talk: ['Teams and Tech Tools: How to improve'],
        tags: ['Teams', 'Feedback'],
      },
      {
        month: 'Set',
        event: [ACORDA],
        talk: [
          {
            label: 'How to build a team',
            href: 'https://www.facebook.com/1237393003095988/photos/basw.AbrdUjKSc4sz5I45db2-eUqZw-v2BpagRunaiFtrEEm0hmUIAsySxVtAlT7lfFRnpxl7SiBDw4idvaApSU5pSxC0SXPAaBx16SBHrK4ngsKAaV1WxoKOG-gEEgBp1eyKdBuz1HlpDT__JL5ENOc-HfJc/1387073704794583/?opaqueCursor=AbpRTB5L_uSN0xhl3275nRRXsR9WCXwjF1qbD59oBfwT1Pr5fmfJUxZgKCwEOz_DGoxknCIi6Ex1T1f0jybhPJQGKDMleYFJIxqZ05xUxuNVQhGcrxmcSP41aXqP5Zn4NpCELKHIKizpclCHlUCSv2F7fGzrlGMU4NAQahWksiFzsNETVzH1x1CjpveMvkbFmEJ9WWq-ZJwWQodPv9zB92orCQ0foLzIw9ur416TrTXNGePVAnvc_kxQAaea2vRE1rJK72eZvthVXCH2c0EH3cKQAKi3pMPRiGbUzDTPvfziynT9xufaqb4uVxQtwzUU9EzAX-CY586cV22B-X4om2bxF9BLX9HIiZDnSk5gq6mhjmYJxM3nf3I9RMcvbYAk8Xv1G6X8NTN4zkSAEiRU_Ik82m0S2E31c8k3NZnTma6eiew5G4XKwkDHpiqLZIiM5iwamMrzYgrHBfR4GFiy4ZZ7jyVGvOXWaVMHzdB0vmggM0SH2u5M5JZOf8wpt8zPOPTW_Jc67v-y7SX7aR3TSm2xcyVrHrp3BZ4xzD9ofktjj9_DZpzotDOX2HiwXRc5lutiHBVIgr672bOKfDenuc3NgKa31DYQJlLoA_dlhyzDYC_vWQ2NVJHRtKQKVcrKyQ8LNTzNI3-D6ZCyDKn2E3rI4cBit588Mesdw68XM0X2Pi9PuEZ9gH6D7_E5wCIpSg7zYDA5t7H_7gc7G30cO0Fh4nkUnffX52UOaZJnymv3kwO_6AJk8OfmhNoznJPecCO3bL0IoAq6PLKJlC2UFOQgBDksgnQIYx0uNTgMd2NGC_9p1XLAcRAzivH8wmZ_HFLTRM9dDd2wOdXbeSF5iAi7',
          },
        ],
        tags: ['Teams', 'Feedback'],
      },
      {
        month: 'Jul',
        event: ['Inigo'],
        talk: ['Teams and Tech Tools: How to improve -'],
        tags: ['Teams', 'Feedback'],
      },
      {
        month: 'Apr',
        event: ['FEUP'],
        talk: [
          {
            label: 'Work (at Mindera)',
            href: 'https://www.facebook.com/jobITAlumniEIFEUP/photos/basw.AbqkfD77D9Z8a0UIJdKpYr8r6v60BOZNw-LIV8cMRBZU2SjUWYy38WWBh7SxptcbgW24cWEDApLA1l4dlNTYltofgTFA3gwkMCGWZdes_831lUhas7GY4GZtsbFse10y1KjLyPSIC7RgSrSCyIW0u6XJ/294433357672176/?opaqueCursor=Abo_Cn5ulqwEYgxqjEn1XIpRjBYkhn9zAZe9HrCSZeKB5X1mDxqNK4_52fD6tHcLERLnUVfRkA2lq6eqoyBj8xy8wqzKfk9f0_ax1BUPaHU1LtEU3UqA4uGJXCjSjb6iEK3N-7GivasMI63Sav3bpLKn7g_o3gPLxN9SUDdG-A5bVy-nzuKVphqy2uhmSoJvXS_qlavL-f4WBVHglSZwKFVmbBTc2gwvke01qRZwUgAyOIs9gLsdwjAH8EHolQVTdL8AOYf-573Db4RcI8VcmlMYCTIIzoKTL_-dlaX-ZlQrD8zJgHWEbCkcm0DNHYEKA5HuClFCl4w9riQHWS2uPc1_WsCzqkx0WgY8ykNDJWfAwBBy2MyV5i9FWV72lUzlGzPuwxGmRz3Ka0fEJ6W2p5ZsdIKTG1HTD35pvkJuG3n2AH_qt4hBlGoW81C6fq1zeD7HrWSfgoZQ8mB2j86BwqEeNvzygKHcTJY1bwcnyS37hNBMSxKj0YbRl1T40XG62s5aexfKwYz-34SEqWWJL9DNqzOPibDjdurPCp7zjnyvVEdCqtFXpFQzPF9Z9Hw6GWhiP_iqGHfQufJSlxzaS_64yeGtiY2MGmmVa-xgAp8bFoc6kptwUQ6qIWSH5zrBIExKYFuRI2u5UC47Vfr-rwnQJOUBTpDdhxVUmpspf7S0SIjv0v30JcK9tQLCSPNP2YU_BL-8Lpb6vP2g148Sy8b5-5Yy5_2aIgdUVHikiZkveEmRgNC7jVQVSi_bZL8lPCzjQKwmasTacAq2PdKjVoDN',
          },
        ],
        tags: ['Tech'],
      },
      {
        month: 'Mar',
        event: ['Talkdesk'],
        talk: [
          {
            label: 'Row Row Row Your Code (RxJava 2)',
            href: 'https://www.meetup.com/Fullstack-Porto/photos/29911981/480654572/#480654579',
          },
        ],
        tags: ['Tech'],
      },
    ],
  },
  {
    year: '2018',
    entries: [
      {
        month: 'Jun',
        event: ['Commit Porto'],
        talk: [
          {
            label: "Don't Make Android Bad Again",
            href: 'https://www.facebook.com/CommitPorto/posts/2195919284029004',
          },
        ],
        tags: ['Tech'],
      },
    ],
  },
  {
    year: '2017',
    entries: [
      {
        month: 'Nov',
        event: ['GDG DevFest Coimbra'],
        talk: [
          {
            label: "Kotlin'ize your app",
            href: 'https://www.facebook.com/AACfotografia/photos/basw.AbpBUuJeHKjSo2s35OOof0-ZlocK6zphe3UzlLAEzDK2ZG3OTU_-BGE0UId7sEkTptYBolZmHWmPOj14ZxQ_XjFY0EBKuKHnHbr7Or0VuFZPGlRIUonQNYbL8FrqsS0zgnMF4xZwtMWGV8ISBiKGkAZUlKUemS8nNPJqh0wlaMNMWQ/1947799975234819/?opaqueCursor=Abr1aV3zT_cKkFubJafmvftjWtLxtCKmTHT8NwTvXmkkFSIGzEpRUgdZVWoVKh6O2h0pPzdIlX-nH_a8MqAouoXpR3AOK1WVPhsbz3rT9nUnkCebfmUf304h9EAW23zbr0ZcCOwpdg-PI1vfEIAyhzDr67DfWEDzqGmg9uyKOzucBnQpKDEBMNVNcvf6obMX3Aalr_jerBiFQzuiImwg3P9Bzk3MPECdL-qXSSbuLZiI33kB-en0qFz9YFkB-comOuxCVwwFAPNUvVlPbBmMIUyZm4GFxURh0Mzl-ncnd9IhM3jl-WjvcbSRzLcBkP_OxOfLvkP8dO9wqoldq9o65hB9LlYfpBCdSLrjQi4GzXNuqOvElLM8Yz-mCO0teUBOjetgKEXdH1fBk9U5-0w4YQGdD0wuFGMOuV1TOFPbSRF5DJvzEyYOCzgMJRQ3DSNR2g6hVqPsocavk2MuEkMrkE2TZSaHH-Zvft3tc2SZzt7YQ8iO1FklDL6NNmnXkZ9HMGUc4ZpasISpc1tMyte1xjWb32X6_6Ij8fBDONAF18PN9vUXac6qrKPQLanJZZxSJvoTTo-NRzoeV-2uTux3l3qk',
          },
        ],
        tags: ['Tech'],
      },
      {
        month: 'Oct',
        event: ['Mindera'],
        talk: [
          {
            label: 'Kotlin 101 Workshop',
            href: 'https://www.facebook.com/minderasoftwarecraft/photos/pcb.682745808596740/682745611930093',
          },
        ],
        tags: ['Tech'],
      },
      {
        month: 'May',
        event: ['Colégio da Imaculada Conceição'],
        talk: [
          {
            label: 'Career Paths',
            href: 'https://www.facebook.com/aaacaic/photos/t.1439184217/1321926797891032/?type=3',
          },
        ],
        tags: ['Education', 'Career'],
      },
    ],
  },
  {
    year: '2016',
    entries: [
      {
        month: 'Set',
        event: ['GDG DevFest Lisboa'],
        talk: [
          {
            label: "Android's Warp Pipe",
            href: 'https://www.facebook.com/GDGLisbon/photos/a.502756046489924/1022015234564000',
          },
        ],
        tags: ['Tech'],
      },
    ],
  },
  {
    year: '2015',
    entries: [
      {
        month: 'Nov',
        event: ['Campinácios'],
        talk: ['How to lead a Summer Camp'],
        tags: ['Leadership'],
      },
      {
        month: 'Nov',
        event: ['Thing Pink/GDG Porto'],
        talk: [
          {
            label: 'Android Craftsmanship',
            href: 'https://www.facebook.com/ThingPink/photos/a.1099420083432185/1099421213432072',
          },
        ],
        tags: ['Tech'],
      },
      {
        month: 'Feb',
        event: ['WIT Academy'],
        talk: ['Maps & Location on Android'],
        tags: ['Tech'],
      },
    ],
  },
  {
    year: '2014',
    entries: [
      { month: 'Nov', event: ['Campinácios'], talk: ['Summer Camp 101'], tags: ['Leadership'] },
      { month: 'May', event: ['FEUP'], talk: ['Work (at WIT)'], tags: ['CompanyCulture'] },
    ],
  },
  {
    year: '2013',
    entries: [
      {
        month: 'Jul',
        event: ['WIT Tech Talks'],
        talk: ['Android: Performance and Optimization'],
        tags: ['Tech'],
      },
      {
        month: 'Apr',
        event: ['Colégio das Caldinhas'],
        talk: ['Walkabout (for High School students)'],
        tags: ['Life', 'Education'],
      },
    ],
  },
  {
    year: '2012',
    entries: [
      {
        month: 'Nov',
        event: ['JSD Coimbra'],
        talk: ['Palcos politikos (Invited speaker)'],
        tags: ['Politics'],
      },
      { month: 'May', event: ['Campinácios'], talk: ['Leadership'], tags: ['Leadership'] },
    ],
  },
  {
    year: '2011',
    entries: [
      {
        month: 'Mar',
        event: ['DEI/UC'],
        talk: ['The green robot comes to life - Android'],
        tags: ['Tech'],
      },
    ],
  },
  {
    year: '2010',
    entries: [
      { month: 'Dec', event: ['WIT Help'], talk: ['Casa Abrigo -'], tags: ['Charity'] },
      {
        month: 'Oct',
        event: ['TEDxCoimbra'],
        talk: [
          {
            label: 'Walkabout',
            href: 'https://www.facebook.com/TEDxCoimbra/photos/bc.AbrSmXKvyahdX0ObEzvAhYbb9OMsgF3AWBjJPrpsF3FBC6zwmAPDNXiQLzazyhKUgQSCF_-BSOrrZIzh_UZP91iSlgmUeoAiImgPEQlLbvdZGR0kjKGdThzsaFahPpovpXPZAS0NiduP7HqKzNmHV-ek/10151145744434733/?opaqueCursor=Aboy9LfoilFknuUFPGmkT64XV4Dj92x-H0fDtGVMLfGF9DuV55RuAZgZIepP9A0UgOZZqO1BzXcudsoMILGgLM79L8655yje4uM3k5VnAp1DBs_NVNt4p9Shw4bvXDNVNgxTPF_DRpvHT9DNZPHKnbuH20tI1ki7z_TKeAv0Irmg63R-9WAB76JnpFCz8VwV5MK4cBdEBuO-tC6XAyGLCNQwfExUFhpXGkH8aR4R_TdxzVitJjVz4--LBemI6xYWeMYiG3pr0NE_v99pKFK7ZATGM9FbfLdk6H84aAywx63vPMDgnOUQG_MedAoVR7mpQZfNXxhILw0pqanrL-Vgy-2MNVMXYTIJJ4OV8UFe-rwfry8YeMNItCWxcSV9jdAju3kJO5QjCChecEhMVBwvgyfHdlkQwEsIGfnl2D_qZWlH7QL-mR2A-1lmDifz9dOHoRlJFd2ROpunJhd7PoIWH9aTjFqKTXE8H1SfY9MGqcHhNg',
          },
        ],
        tags: ['Life'],
      },
      {
        month: 'May',
        event: ['DEI/UC'],
        separator: '- ',
        talk: ['Android?', { em: [' (Invited lecturer)'] }],
        tags: ['Tech'],
      },
    ],
  },
  {
    year: '2009',
    entries: [{ month: 'Nov', event: ['WIT Tech Talks'], talk: ['Google Wave'], tags: ['Tech'] }],
  },
];

/** Names from the list above, for the scrolling strip under the hero. */
export const talkStages: string[] = [
  'Droidcon Lisbon',
  'TEDxCoimbra',
  'Commit Porto',
  'GDG DevFest Coimbra',
  'GDG DevFest Lisboa',
  'Porto Tech Hub',
  'Tech Jobs Fair 2021',
  'Agile Connect',
  'Mindera Open Day',
  'Talkdesk',
  'FEUP',
  'DEI/UC',
  'WIT Tech Talks',
  "A'Corda",
  'Campinácios',
  'Colégio das Caldinhas',
];

const entries = talkLog.flatMap((year) => year.entries);

/** Big numbers for the hero — counted from the list, never typed by hand. */
export const talkStats: TalkStat[] = [
  { value: talkLog.at(-1)?.year ?? '', label: 'the oldest year on the list' },
  { value: String(entries.length), label: 'talks & workshops on the list' },
  {
    value: String(new Set(entries.flatMap((entry) => entry.tags)).size),
    label: 'different #tags',
  },
];

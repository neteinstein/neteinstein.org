/**
 * /what-i-do/tech-engineer, ported from the Google Sites original
 * (https://www.neteinstein.org/what-i-do/tech-engineer — crawl snapshot in
 * `.crawl/report.json`). The intro prose lives in
 * `src/content/pages/tech-engineer.mdx`.
 */
import type { Appearance, Footprint, PortfolioEra, TechLink, Teaching } from './types';

import whyDoWeEvenWork from '../assets/what-i-do/tech-engineer/why-do-we-even-work.webp';
import yellowBoxPodcast from '../assets/what-i-do/tech-engineer/yellow-box-podcast.webp';
import stackoverflowLogo from '../assets/what-i-do/tech-engineer/stackoverflow-logo.webp';
import mediumLogo from '../assets/what-i-do/tech-engineer/medium-logo.webp';
import githubLogo from '../assets/what-i-do/tech-engineer/github-logo.webp';
import ispgayaLogo from '../assets/what-i-do/tech-engineer/ispgaya-logo.webp';
import minderaSchoolLogo from '../assets/what-i-do/tech-engineer/mindera-school-logo.webp';
import minderaJourneyMap from '../assets/what-i-do/tech-engineer/mindera-journey-map.webp';
import minderaLogo from '../assets/what-i-do/tech-engineer/mindera-logo.webp';
import witSoftwareLogo from '../assets/what-i-do/tech-engineer/wit-software-logo.webp';
import sainsburys from '../assets/what-i-do/tech-engineer/sainsburys.webp';
import vidi from '../assets/what-i-do/tech-engineer/vidi.webp';
import kingfisher from '../assets/what-i-do/tech-engineer/kingfisher.webp';
import newLook from '../assets/what-i-do/tech-engineer/new-look.webp';
import waitroseScanPayGo from '../assets/what-i-do/tech-engineer/waitrose-scan-pay-go.webp';
import feedforward from '../assets/what-i-do/tech-engineer/feedforward.webp';
import rows from '../assets/what-i-do/tech-engineer/rows.webp';
import smartbox from '../assets/what-i-do/tech-engineer/smartbox.webp';
import coloradd from '../assets/what-i-do/tech-engineer/coloradd.webp';
import ravelin from '../assets/what-i-do/tech-engineer/ravelin.webp';
import waitroseAndroid from '../assets/what-i-do/tech-engineer/waitrose-android.webp';
import minderaPeople from '../assets/what-i-do/tech-engineer/mindera-people.webp';
import notOnTheHighStreet from '../assets/what-i-do/tech-engineer/not-on-the-high-street.webp';
import tui from '../assets/what-i-do/tech-engineer/tui.webp';
import porterMagazine from '../assets/what-i-do/tech-engineer/porter-magazine.webp';
import theEditMagazine from '../assets/what-i-do/tech-engineer/the-edit-magazine.webp';
import vodafoneBackup from '../assets/what-i-do/tech-engineer/vodafone-backup.webp';
import vodafoneCloud from '../assets/what-i-do/tech-engineer/vodafone-cloud.webp';
import joyn from '../assets/what-i-do/tech-engineer/joyn.webp';
import vodafoneUsageBasedInsurance from '../assets/what-i-do/tech-engineer/vodafone-usage-based-insurance.webp';
import edpComercial from '../assets/what-i-do/tech-engineer/edp-comercial.webp';
import oneNet from '../assets/what-i-do/tech-engineer/one-net.webp';
import activobank from '../assets/what-i-do/tech-engineer/activobank.webp';
import myVodafone from '../assets/what-i-do/tech-engineer/my-vodafone.webp';
import mbphone from '../assets/what-i-do/tech-engineer/mbphone.webp';
import vodafone360 from '../assets/what-i-do/tech-engineer/vodafone-360.webp';
import vodafoneTvNetVoz from '../assets/what-i-do/tech-engineer/vodafone-tv-net-voz.webp';
import vodacom from '../assets/what-i-do/tech-engineer/vodacom.webp';

/** Headings and the banner quote, verbatim from the original. */
export const techPage = {
  quote:
    '"There are two types of programmers: good programmers, and those that are not Jon Skeet."',
  persona: 'My "tech persona" for the last 16 years...',
  appeared: 'Appeared at:',
  footprint: 'Online footprint',
  teacher: 'Been a teacher at:',
  portfolio: 'Tech Portfolio:',
};

/** The closing link to the talks page. */
export const talksLink: TechLink = {
  label: 'I\'ve also done my fair share of "tech talks"',
  href: '/what-i-do/talks-workshops',
};

export const appearances: Appearance[] = [
  {
    title: { label: 'Why Do We Even Work?', href: 'https://www.rtp.pt/programa/tv/p43838' },
    description: [
      { label: 'Work In Progress 2', href: 'https://www.wipdocumentary.com/2' },
      ' - A Documentary by KOM and Samuel Durand exploring the Future of Work within companies',
    ],
    year: '2021',
    image: {
      src: whyDoWeEvenWork,
      alt: 'Poster for "Why Do We Even Work?", a Work In Progress documentary: a person working at a desk in front of snowy mountains',
      href: 'https://www.wipdocumentary.com/2',
    },
  },
  {
    title: {
      label: "Mindera's Yellow Box Podcast",
      href: 'https://yellowbox.mindera.com/e/6-android-then-and-now-with-pedro-vicente/',
    },
    description: [
      '"Pedro Vicente takes us down memory lane from the early days of Android app development all the way up to 2020 and the modern application development strategies and frameworks."',
    ],
    year: '2020',
    image: {
      src: yellowBoxPodcast,
      alt: 'Mindera Yellow Box podcast logo',
      href: 'https://yellowbox.mindera.com/e/6-android-then-and-now/',
    },
  },
];

export const footprints: Footprint[] = [
  {
    name: { label: 'StackOverflow', href: 'https://stackoverflow.com/users/327011/neteinstein' },
    paragraphs: [
      [
        "For a few years I was quite active on StackOverflow. It's kind of fun sharing knowledge and helping.",
      ],
      ['It ended up gaining me ~18k rep so far.'],
    ],
    stat: { value: '~18k', label: 'rep' },
    image: {
      src: stackoverflowLogo,
      alt: 'StackOverflow logo',
      href: 'https://stackoverflow.com/users/327011/neteinstein',
    },
  },
  {
    name: { label: 'Medium', href: 'https://medium.com/code-procedure-and-rants' },
    paragraphs: [
      [
        'I guess from sharing at StackOverflow I jumped to sharing more in-depth articles at Medium',
      ],
    ],
    image: {
      src: mediumLogo,
      alt: 'Medium logo',
      href: 'https://medium.com/code-procedure-and-rants',
    },
  },
  {
    name: { label: 'GitHub', href: 'https://github.com/neteinstein' },
    paragraphs: [
      ['Open sourced is something I always enjoyed.'],
      [
        'Now working on some awesome ',
        { label: 'Mindera', href: 'https://mindera.com/' },
        ' mobile-related open source projects.',
      ],
    ],
    image: {
      src: githubLogo,
      alt: 'GitHub logo',
      href: 'https://github.com/neteinstein',
    },
  },
];

export const teaching: Teaching[] = [
  {
    name: { label: 'Instituto Superior Politécnico Gaya', href: 'http://www.ispgaya.pt' },
    lines: [
      [
        'Invited Lecturer of Mobile Communications - ',
        {
          label: 'Computer Science Engineering Degree',
          href: 'http://www.ispgaya.pt/site/eng/courses/view/2',
        },
      ],
    ],
    years: '2017 to 2019',
    image: {
      src: ispgayaLogo,
      alt: 'ISPGAYA logo',
      href: 'http://www.ispgaya.pt/site/eng/courses/view/2',
    },
  },
  {
    name: { label: 'Mindera School', href: 'https://school.mindera.com/' },
    lines: [
      ["Been a teacher/tutor from Mindera School's get go on 2018."],
      ['Teaching basic programming, Java and Mobile.'],
    ],
    years: '2018 to 2020',
    image: {
      src: minderaSchoolLogo,
      alt: 'Mindera School logo: a one-eyed yellow character in a space helmet',
      href: 'https://school.mindera.com/',
    },
  },
];

/** A store link with a label that says which app it opens. */
function store(label: string, href: string, app: string): TechLink {
  return { label, href, ariaLabel: `${app} on ${label}` };
}

export const portfolio: PortfolioEra[] = [
  {
    id: 'since-2016',
    label: '2016 onwards',
    employer: {
      name: 'Mindera',
      href: 'http://www.mindera.com',
      src: minderaLogo,
      alt: 'Mindera software craft logo',
    },
    feature: {
      src: minderaJourneyMap,
      alt: 'Hand-drawn map titled "Pedro Vicente" tracing a path from "Arrived Mindera" through flags for NAP 2016, TUI 2016, Waitrose 2016, Smartbox 2019, Rows 2020, New Look 2020, Waitrose 2021 and Kingfisher 2022, with a legend for TL (Tech Lead), BE (Back End) and DL (Delivery Lead)',
      href: 'https://www.youtube.com/watch?v=pY7m-cucO6s',
      linkLabel: 'Mindera - Life, Work and Friends (Full Version)',
    },
    projects: [
      {
        name: ["Sainsbury's"],
        stints: [
          {
            lines: [['AI Coach'], ['Engineering Manager / Adviser'], ["Sainsbury's App"]],
            years: '2025 onwards',
          },
        ],
        image: {
          src: sainsburys,
          alt: "Sainsbury's app home screen on a phone, with broccoli behind it",
        },
      },
      {
        name: ['Vidi'],
        stints: [
          {
            lines: [
              ['Account Owner & Architect'],
              [
                {
                  label: 'Web',
                  href: 'https://vidi.smartbox.com/fr',
                  ariaLabel: 'Vidi on the web',
                },
              ],
            ],
            years: '2024 - 2024',
          },
        ],
        image: { src: vidi, alt: 'Vidi by Smartbox logo' },
      },
      {
        name: ['KingFisher Mobile Apps'],
        stints: [
          {
            lines: [
              ['Tech Lead'],
              [
                'B&Q - ',
                store(
                  'Android',
                  'https://play.google.com/store/apps/details?id=com.grapplemobile.bqclub&hl=en',
                  'B&Q',
                ),
                ' & ',
                store(
                  'iOS',
                  'https://apps.apple.com/gb/app/b-q-diy-home-garden-tools/id589374238',
                  'B&Q',
                ),
                ' App / TradePoint - ',
                store(
                  'Android',
                  'https://play.google.com/store/apps/details?id=com.kingfisher.tradepoint&hl=pt',
                  'TradePoint',
                ),
                ' & ',
                store(
                  'iOS',
                  'https://apps.apple.com/gb/app/tradepoint-builders-merchant/id6572295266',
                  'TradePoint',
                ),
                ' App',
              ],
            ],
            years: '2022 - 2024',
          },
        ],
        image: {
          src: kingfisher,
          alt: 'Shopping app screen listing wall and ceiling paints with ratings and prices',
        },
      },
      {
        name: ['New Look Mobile Apps'],
        stints: [
          {
            lines: [
              ['Tech Lead'],
              [
                store(
                  'Android',
                  'https://play.google.com/store/apps/details?id=com.tigerspike.newlook&hl=en&gl=US',
                  'New Look',
                ),
                ' & ',
                store(
                  'iOS',
                  'https://apps.apple.com/gb/app/new-look-fashion-online/id466391488',
                  'New Look',
                ),
                ' Apps',
              ],
            ],
            years: '2021 - 2022',
          },
        ],
        image: {
          src: newLook,
          alt: "New Look app on a phone showing women's playsuits",
        },
      },
      {
        name: [
          'Waitrose - ',
          {
            label: 'Scan Pay Go',
            href: 'https://www.waitrose.com/ecom/help-information/shopping-with-waitrose/shopping-instore/scanpaygo?srsltid=AfmBOooc-7rqea0t5EDUbuDkQ3aiNVIlRDdjNALe7Xv3eUm6Z_HOnzBc',
          },
          ' Admin App (Internal App)',
        ],
        stints: [{ lines: [['Delivery Lead']], years: '2021' }],
        image: { src: waitroseScanPayGo, alt: 'Waitrose & Partners logo' },
      },
      {
        name: ['FeedForward - Android, iOS and Web Feedback Platform'],
        stints: [{ lines: [['Internship Oversight']], years: '2021' }],
        image: { src: feedforward, alt: 'Feedforward logo' },
      },
      {
        name: ['Rows'],
        stints: [
          {
            lines: [
              [
                'BE Developer (',
                { label: 'Integrations', href: 'https://rows.com/integrations' },
                ')',
              ],
            ],
            years: '2020',
          },
        ],
        image: { src: rows, alt: 'Rows logo: overlapping green and purple rectangles' },
      },
      {
        name: ['Smartbox Mobile Apps'],
        stints: [
          {
            lines: [
              [
                'Tech Lead - ',
                store(
                  'Android',
                  'https://play.google.com/store/apps/developer?id=Smartbox+Group+LTD&hl=en_US',
                  'Smartbox apps',
                ),
                ' & ',
                store(
                  'iOS',
                  'https://apps.apple.com/us/developer/smartbox-experience-ltd/id479847438#see-all/i-phone-apps',
                  'Smartbox apps',
                ),
                ' Apps',
              ],
            ],
            years: '2019 - 2020',
          },
          { lines: [['& Account Owner']], years: '2020 - 2023' },
        ],
        image: {
          src: smartbox,
          alt: 'Smartbox app screen: "Scan your gift voucher in-app to save and retrieve it quickly and easily"',
        },
      },
      {
        name: ['ColorAdd Apps'],
        stints: [
          {
            lines: [
              [
                'Tech Oversight - ',
                store(
                  'Android',
                  'https://play.google.com/store/apps/details?id=com.coloradd.app',
                  'ColorAdd',
                ),
                ' & ',
                store(
                  'iOS',
                  'https://apps.apple.com/pt/app/coloradd-the-color-alphabet/id1548986350?l=en',
                  'ColorAdd',
                ),
              ],
            ],
            years: '2020',
          },
        ],
        image: {
          src: coloradd,
          alt: 'ColorAdd colour alphabet: the symbols for each colour above overlapping colour circles',
        },
      },
      {
        name: ["Ravelin's Android Mobile SDK"],
        stints: [
          {
            lines: [
              [
                'Tech Oversight - ',
                {
                  label: 'Android SDK',
                  href: 'https://developer.ravelin.com/libraries-and-sdks/mobile-sdk/android/',
                },
              ],
            ],
            years: '2020',
          },
        ],
        image: {
          src: ravelin,
          alt: "Ravelin's mobile SDK documentation",
          href: 'https://developer.ravelin.com/libraries-and-sdks/mobile-sdk/',
        },
      },
      {
        name: [
          {
            label: 'Waitrose Android App',
            href: 'https://play.google.com/store/apps/details?id=com.waitrose.groceries&hl=en',
          },
        ],
        stints: [
          {
            lines: [
              [
                'Tech Lead - ',
                {
                  label: 'Android App',
                  href: 'https://play.google.com/store/apps/details?id=com.waitrose.groceries&hl=en',
                  ariaLabel: 'Waitrose Android App on Google Play',
                },
              ],
            ],
            years: '2016 - 2019',
          },
        ],
        image: {
          src: waitroseAndroid,
          alt: 'Waitrose Android app on a phone listing cheeses',
          href: 'https://play.google.com/store/apps/details?id=com.waitrose.groceries&hl=en',
        },
      },
      {
        name: ['Mindera People - Android App'],
        stints: [{ lines: [['Internship Tutor']], years: '2019' }],
        image: {
          src: minderaPeople,
          alt: 'Mindera People app on Google Play',
          href: 'https://play.google.com/store/apps/details?id=org.mindera.peopleandroid&hl=en',
        },
      },
      {
        name: ['Not On The High Street App'],
        stints: [
          {
            lines: [
              [
                'Tech Oversight- ',
                store(
                  'Android App',
                  'https://play.google.com/store/apps/details?id=com.noths.giftfinder&hl=en_AU',
                  'Not On The High Street',
                ),
              ],
            ],
            years: '2016',
          },
        ],
        image: {
          src: notOnTheHighStreet,
          alt: 'Not On The High Street app on Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.noths.giftfinder&hl=en_AU',
        },
      },
      {
        name: ['TUI Travel & WYSIWYG'],
        stints: [
          {
            lines: [
              [
                store(
                  'Android App',
                  'https://play.google.com/store/apps/details?id=com.thomson.mythomson&hl=en',
                  'TUI',
                ),
                ' Dev & Lead App Dev',
              ],
            ],
            years: '2016',
          },
        ],
        image: {
          src: tui,
          alt: 'TUI Android app on Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.thomson.mythomson&hl=en',
        },
      },
      {
        name: ['PORTER Magazine by NET-A-PORTER Android App'],
        stints: [{ lines: [['Android App Dev']], years: '2016' }],
        image: { src: porterMagazine, alt: 'PORTER magazine app icon' },
      },
      {
        name: ['The Edit Magazine by NET-A-PORTER Android App'],
        stints: [{ lines: [['Android App Dev']], years: '2016' }],
        image: {
          src: theEditMagazine,
          alt: 'The Edit magazine cover from 5 November 2015: "The new color codes"',
        },
      },
    ],
  },
  {
    id: '2009-2016',
    label: '2009-2016',
    employer: {
      name: 'WIT Software',
      href: 'http://www.wit-software.com',
      src: witSoftwareLogo,
      alt: 'WIT Software logo',
    },
    projects: [
      {
        name: [
          {
            label: 'Vodafone Backup+ Android App',
            href: 'https://www.vodafone.pt/press-releases/2015/5/vodafone-portugal-lanca-servico-exclusivo-em-parceria-com-a-dropbox-vodafone-backup.html',
          },
        ],
        stints: [{ lines: [['Android App Dev & Architect']], years: '2015 - 2016' }],
        image: {
          src: vodafoneBackup,
          alt: 'Vodafone Backup+ app icon: a red circular arrow around a plus sign',
        },
      },
      {
        name: [
          {
            label: 'Vodafone Cloud Android App',
            href: 'https://www.vodafone.pt/press-releases/2011/12/vodafone-lanca-servico-vodafone-cloud-para-telemovel-tablet-e-pc.html',
          },
        ],
        stints: [{ lines: [['Android App Dev']], years: '2015' }],
        image: { src: vodafoneCloud, alt: 'Vodafone Cloud logo' },
      },
      {
        name: ['Joyn - RCS Android App'],
        stints: [{ lines: [['Android App Dev']], years: '2014' }],
        image: { src: joyn, alt: 'joyn logo' },
      },
      {
        name: [
          {
            label: 'Vodafone Usage Based Insurance',
            href: 'https://www.vodafone.com/business/iot/end-to-end-solutions/automotive/insurance-companies',
          },
        ],
        stints: [{ lines: [['Lead Android App Dev']], years: '2014' }],
        image: {
          src: vodafoneUsageBasedInsurance,
          alt: 'Vodafone "Telematics Usage-Based Insurance" brochure cover with a car on the road',
        },
      },
      {
        name: ['EDP Comercial Android App'],
        stints: [
          {
            lines: [
              [
                'Support ',
                store(
                  'Android App',
                  'https://play.google.com/store/apps/details?id=wit.edp.edpmobile&hl=en',
                  'EDP Comercial',
                ),
                ' Dev',
              ],
            ],
            years: '2013',
          },
        ],
        image: {
          src: edpComercial,
          alt: 'EDP Comercial app icon',
          href: 'https://play.google.com/store/apps/details?id=wit.edp.edpmobile&hl=en',
        },
      },
      {
        name: ['One Net Android App'],
        stints: [
          {
            lines: [
              [
                'Lead ',
                store(
                  'Android App',
                  'https://play.google.com/store/apps/details?id=pt.vodafone.onm&hl=en',
                  'One Net',
                ),
                ' Dev',
              ],
            ],
            years: '2013',
          },
        ],
        image: {
          src: oneNet,
          alt: 'One Net app icon with two gears',
          href: 'https://play.google.com/store/apps/details?id=pt.vodafone.onm&hl=en',
        },
      },
      {
        name: ['ActivoBank Android App'],
        stints: [
          {
            lines: [
              [
                'Support ',
                store(
                  'Android App',
                  'https://play.google.com/store/apps/details?id=wit.android.bcpBankingApp.activoBank&hl=en',
                  'ActivoBank',
                ),
                ' Dev',
              ],
            ],
            years: '2012',
          },
        ],
        image: {
          src: activobank,
          alt: 'ActivoBank app on a phone showing a credit card balance and recent payments',
          href: 'https://play.google.com/store/apps/details?id=wit.android.bcpBankingApp.activoBank&hl=en',
        },
      },
      {
        name: ['My Vodafone: Android App, SOS Mobile App, BlackBerry App and Mobile Website'],
        stints: [
          {
            lines: [
              [
                'Lead ',
                store(
                  'Android',
                  'https://play.google.com/store/apps/details?id=com.vodafone.mCare&hl=en',
                  'My Vodafone',
                ),
                ' & ',
                store(
                  'Blackberry',
                  'https://appworld.blackberry.com/webstore/content/40499942/?lang=en&countrycode=pt',
                  'My Vodafone',
                ),
                ' App also Lead Front End Dev',
              ],
            ],
            years: '2010 - 2013',
          },
        ],
        image: {
          src: myVodafone,
          alt: 'My Vodafone app icon',
          href: 'https://play.google.com/store/apps/details?id=com.vodafone.mCare&hl=en',
        },
      },
      {
        name: ['MBPhone Android App'],
        stints: [
          {
            lines: [
              [
                'Lead ',
                store(
                  'Android App',
                  'https://play.google.com/store/apps/details?id=wit.matm&hl=en',
                  'MBPhone',
                ),
                ' Dev',
              ],
            ],
            years: '2010',
          },
        ],
        image: {
          src: mbphone,
          alt: 'MB Phone app menu on a phone: top-ups, payments, balance and transactions',
          href: 'https://play.google.com/store/apps/details?id=wit.matm&hl=en',
        },
      },
      {
        name: ['Vodafone 360 Mobile JS Widgets'],
        stints: [{ lines: [['Front-End Dev']], years: '2009' }],
        image: { src: vodafone360, alt: 'Vodafone 360 phone showing a grid of widgets' },
      },
      {
        name: ['Vodafone TV Net Voz BackOffice'],
        stints: [{ lines: [['Backend Dev']], years: '2009' }],
        image: { src: vodafoneTvNetVoz, alt: 'Vodafone TV Net Voz logo' },
      },
      {
        name: ['Vodacom BackOffice'],
        stints: [{ lines: [['Backend Dev']], years: '2009' }],
        image: { src: vodacom, alt: 'Vodacom logo' },
      },
    ],
  },
];

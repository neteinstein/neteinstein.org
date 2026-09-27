/**
 * /tesla content, ported from the Google Sites original
 * (https://www.neteinstein.org/tesla — crawl snapshot in `.crawl/report.json`).
 *
 * On the original every tile was a screenshot linking to the site, with the
 * caption underneath as plain text. Captions and targets are kept verbatim.
 */
import type { TeslaCategory, TeslaIntro, TeslaPage, TeslaThanks } from './types';

import teslaLogo from '../assets/tesla/tesla-logo.webp';
import aBetterTheater from '../assets/tesla/abettertheater.webp';
import fullscreenTesla from '../assets/tesla/fullscreentesla.webp';
import testube from '../assets/tesla/testube.webp';
import kinetic from '../assets/tesla/kinetic-teslascreens.webp';
import sucTracker from '../assets/tesla/suc-tracker.webp';
import teslaLightShare from '../assets/tesla/teslalightshare.webp';
import tesApp from '../assets/tesla/tes-app.webp';
import technologyBloggers from '../assets/tesla/technologybloggers.webp';
import teslaWebApps from '../assets/tesla/teslawebapps.webp';
import motherFrunker from '../assets/tesla/motherfrunker.webp';
import inCarWeb from '../assets/tesla/incarweb.webp';
import teslaTv from '../assets/tesla/teslatv.webp';
import aBetterRoutePlanner from '../assets/tesla/abetterrouteplanner.webp';
import comparaErvilhas from '../assets/tesla/compara-ervilhas.webp';
import mobie from '../assets/tesla/mobie.webp';
import uveMunicipios from '../assets/tesla/uve-municipios.webp';
import teslaClubPortugal from '../assets/tesla/tesla-club-portugal.webp';
import teslaTap from '../assets/tesla/teslatap-fluids-identifier.webp';
import myInstants from '../assets/tesla/myinstants.webp';
import awesomeTesla from '../assets/tesla/awesome-tesla.webp';

export const page: TeslaPage = {
  title: 'Tesla',
  eyebrow: 'Tesla',
  /** What the home page's "Things that can be useful" card calls this page. */
  heading: 'Tesla Utils',
  highlight: ['Utils'],
  description:
    'Useful websites to open on a Tesla browser — entertainment, routing & charging, utils and fun — ' +
    'gathered on one page, so you only need to bookmark this one.',
};

export const intro: TeslaIntro = {
  lead: 'A little page I created to maintain useful websites to open on a Tesla browser.',
  bookmark:
    'Instead of needing to type each of these URLs to bookmark... just bookmark this one! 😉',
  logo: teslaLogo,
  logoAlt: 'Tesla logo',
};

export const categories: TeslaCategory[] = [
  {
    id: 'entertainment',
    title: 'Entertainment',
    sites: [
      {
        label: 'abettertheater.com',
        href: 'https://members.abettertheater.com/',
        image: aBetterTheater,
        imageAlt:
          'Streaming service logos — Netflix, ESPN, fuboTV, YouTube, Hulu, Pluto TV — on a black launcher',
      },
      {
        label: 'fullscreentesla.com',
        href: 'https://www.fullscreentesla.com/',
        image: fullscreenTesla,
        imageAlt:
          'Rounded app tiles for 9Anime, Apple TV, GeForce Now, Google, HackerNews, Peacock, Plex and Prime Video',
      },
      {
        label: 'testube.app',
        href: 'https://testube.app/',
        image: testube,
        imageAlt:
          'Rows of pill-shaped buttons for YouTube, Netflix, Disney+, Sling, ESPN, FOX Sports, Plex and Twitch',
      },
      {
        label: 'kinetic.com/teslascreens',
        href: 'https://kinetic.com/teslascreens/',
        image: kinetic,
        imageAlt:
          'Brushed-metal panel under a TESLA wordmark with glowing blue buttons labelled KITT, Matrix, Future 1, Future 2 and HAL',
      },
      {
        label: 'suc-tracker.eu',
        href: 'https://suc-tracker.eu/',
        image: sucTracker,
        imageAlt:
          'Dark map of Portugal and Spain dotted with Supercharger price markers, one in Matosinhos selected',
      },
      {
        label: 'teslalightshare.io',
        href: 'https://teslalightshare.io/',
        image: teslaLightShare,
        imageAlt:
          'TeslaLightShare home page, “Share and download custom Tesla Light Shows”, with Halloween, Christmas, Themes and Fun categories',
      },
      {
        label: 'tes.app',
        href: 'https://tes.app/',
        image: tesApp,
        imageAlt:
          'Hands on a Tesla steering wheel next to the touchscreen, captioned “Apps for Tesla — Enter www.tes.app in your Tesla browser!”',
      },
      {
        label: 'technologybloggers.org/t/',
        href: 'https://www.technologybloggers.org/t/',
        image: technologyBloggers,
        imageAlt: '“Web Apps for Teslas” page with a big Go Full Screen button and instructions',
      },
      {
        label: 'teslawebapps.com',
        href: 'https://teslawebapps.com/',
        image: teslaWebApps,
        imageAlt:
          'Grid of app icons including A Better Route Planner, Waze, PlugShare, ChargePoint, Google Maps and Apple Carplay',
      },
      {
        label: 'motherfrunker.ca',
        href: 'https://motherfrunker.ca/app/index.php',
        image: motherFrunker,
        imageAlt: '“MF’s Web App” page with round Calculator, Stickies and View All Apps icons',
      },
      {
        label: 'incarweb.app',
        href: 'http://incarweb.app',
        image: inCarWeb,
        imageAlt:
          'Dark launcher with icons for Reminders, Notes, Mail, Calculator, Microsoft 365, Gmail, Google Drive and Keep',
      },
      {
        label: 'app.teslatv.uk',
        href: 'https://app.teslatv.uk/',
        image: teslaTv,
        imageAlt:
          'White tiles with the iPlayer, ITV, Netflix, Plex, Apple TV+, UKTV Play, Disney+ and Virgin TV logos',
      },
    ],
  },
  {
    id: 'routing-charging',
    title: 'Routing & Charging',
    sites: [
      {
        label: 'A Better Routeplanner',
        href: 'https://abetterrouteplanner.com/',
        image: aBetterRoutePlanner,
        imageAlt: 'A Better Routeplanner’s trip panel over a dark street map',
      },
      {
        label: '(PT) Compara Ervilhas',
        href: 'https://comparaervilhas.pt/',
        image: comparaErvilhas,
        imageAlt: 'Light map of Portugal and western Spain',
      },
      {
        label: '(PT) Mobi.e',
        href: 'https://www.mobie.pt/utilizar-a-rede',
        image: mobie,
        imageAlt:
          'Mobi.E page on how to charge an electric vehicle, with a charging cable plugged into a car',
      },
    ],
  },
  {
    id: 'utils',
    title: 'Utils',
    sites: [
      {
        label: '(PT) Municipios com Isenção para Elétricos',
        href: 'https://www.uve.pt/page/municipios-com-isencao-desconto-no-pagamento-de-estacionamento-para-veiculos-eletricos/',
        image: uveMunicipios,
        imageAlt:
          'UVE article on municipalities with parking exemptions or discounts for electric vehicles, illustrated with parked cars',
      },
      {
        label: '(PT) Tesla Club Portugal',
        href: 'https://teslaclubportugal.com/superchargers/',
        image: teslaClubPortugal,
        imageAlt: 'Tesla Club Portugal’s Superchargers page, with a row of Teslas in the header',
      },
      {
        label: 'Tesla fluids identifier',
        href: 'https://teslatap.com/articles/tesla-fluids-identifier/',
        image: teslaTap,
        imageAlt:
          'TeslaTap’s “Tesla Fluid Leak Identifier” article, showing a puddle beside a parked Tesla',
      },
    ],
  },
  {
    id: 'fun',
    title: 'Fun',
    sites: [
      {
        label: 'My instants (for horn sounds)',
        href: 'https://www.myinstants.com/en/trending/us/',
        image: myInstants,
        imageAlt: 'Myinstants trending page: a grid of big, glossy, coloured sound buttons',
      },
    ],
  },
  {
    id: 'others',
    title: 'Others',
    sites: [
      {
        label: 'awesome-tesla',
        href: 'https://github.com/rjohnson3/awesome-tesla',
        image: awesomeTesla,
        imageAlt:
          'The awesome-tesla GitHub repository README: “A curated list of awesome resources for Tesla vehicles”',
      },
    ],
  },
];

export const thanks: TeslaThanks = {
  title: 'Thank for using this!',
  message:
    'If this was useful to you (and you think it makes sense) send me a contribution via the blue icon next to it. 1€ or less is more than enough, and will incentivise me to continue updating it.',
  widgetMessage: 'I feel grateful for any incentive to continue improving this!',
};

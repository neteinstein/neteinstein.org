import type { Hobby } from './types';
import oQueArdeCuraLogo from '../assets/hobbies/o-que-arde-cura-logo.webp';
import bsAsymmetry from '../assets/hobbies/bs-asymmetry-principle.webp';
import gdgPortoLogo from '../assets/hobbies/gdg-porto-logo.webp';
import campinaciosLogo from '../assets/hobbies/campinacios-logo.webp';

/** Alt text for the Sketchplanations comic, shown on /hobbies/hobbies and /hobbies/myths. */
export const bsAsymmetryAlt =
  'Sketchplanations comic "The BS asymmetry principle: the amount of energy needed to refute BS is an order of magnitude bigger than to produce it". One stick figure bets the Moon is made of cheese, with a tiny effort bar. The other answers with spectrographic analysis, orbit calculations and a rocket trip, with a huge effort bar. The first replies: "Hm, yeah… I\'m still thinking cheese." Footnote: aka Brandolini\'s law.';

export { bsAsymmetry };

/**
 * The blocks of /hobbies/hobbies, in the original order. Their prose lives in
 * `src/content/pages/hobbies.mdx`, keyed by `id`.
 */
export const hobbies: Hobby[] = [
  {
    id: 'o-que-arde-cura',
    kicker: 'Host @ O Que Arde Cura - Charity & Comedy',
    title: 'O Que Arde Cura',
    shortTitle: 'O Que Arde Cura',
    href: 'http://www.oqueardecura.pt',
    visual: {
      kind: 'logo',
      fit: 'cover',
      image: oQueArdeCuraLogo,
      alt: 'O Que Arde Cura! logo: the name hand-lettered in white inside a red chilli pepper',
    },
    visualLinked: true,
    videos: [
      { id: '8ETXcfv8yis', title: 'O que é "O Que Arde Cura?"' },
      { id: 'q7WBN5UKkts', title: 'Best of T1E1' },
      { id: 'JoBxNwsDQ5c', title: 'Best of T1E6' },
    ],
  },
  {
    id: 'bullshit-buster',
    title: 'Bullshit Buster',
    shortTitle: 'Bullshit Buster',
    href: '/hobbies/myths',
    visual: { kind: 'illustration', image: bsAsymmetry, alt: bsAsymmetryAlt },
  },
  {
    id: 'gdg-porto',
    kicker: 'Co-founder @ GDG Porto - Dev Community',
    title: 'Google Developers Group Porto',
    shortTitle: 'GDG Porto',
    href: 'https://gdgporto.xyz/',
    visual: {
      kind: 'logo',
      fit: 'cover',
      image: gdgPortoLogo,
      alt: 'GDG Porto logo: red, blue, green and yellow angle brackets over the grey outline of a bridge',
    },
    visualLinked: true,
  },
  {
    id: 'campinacios',
    kicker: 'Summer Camp movement',
    title: 'Campinácios',
    shortTitle: 'Campinácios',
    href: 'http://www.campinacios.org',
    visual: {
      kind: 'logo',
      image: campinaciosLogo,
      alt: 'Campinácios logo: a green tent under a yellow sun on a red disc marked IHS, above the word Campinácios',
    },
    visualLinked: true,
  },
];

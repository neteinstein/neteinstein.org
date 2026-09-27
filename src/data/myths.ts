import type { MythGroup, MythsIntro } from './types';
import { bsAsymmetry, bsAsymmetryAlt } from './hobbies';
import paradoxComic from '../assets/hobbies/paradox-of-tolerance-comic.webp';
import flatEarthMeme from '../assets/hobbies/flat-earth-solar-system-meme.webp';
import caetanoMisquote from '../assets/hobbies/marcello-caetano-misquote.webp';
import bookCover from '../assets/hobbies/confidencias-no-exilio-cover.webp';
import bookPages206 from '../assets/hobbies/confidencias-no-exilio-pages-206-207.webp';
import bookPages208 from '../assets/hobbies/confidencias-no-exilio-pages-208-209.webp';

/** The opening block of /hobbies/myths; the question itself is the page title. */
export const mythsIntro: MythsIntro = {
  preface: 'Simple:',
  quote: {
    text: '“We should delicately and subtly undermine the idea that truth and facts are possible in the first place. Once the people have become doubtful about the truth of anything, all kinds of things will be open to us.”',
    attribution: '― Philip Pullman',
  },
  stance:
    'I refuse to accept that due to the higher effort required bullshit can spread untouched. You can quote me on that.',
  figure: { image: bsAsymmetry, alt: bsAsymmetryAlt },
};

/**
 * The myths, grouped as on the original. Their prose lives in
 * `src/content/pages/myths.mdx`, keyed by `id`.
 */
export const mythGroups: MythGroup[] = [
  {
    id: 'global',
    title: 'Global Myths',
    myths: [
      {
        id: 'paradox-of-tolerance',
        title: 'Popper never believed anything like this implies.',
        figure: {
          image: paradoxComic,
          alt: 'Widely shared comic "The Paradox of Tolerance by philosopher Karl Popper*". It asks whether a tolerant society should tolerate intolerance and answers no; panels show a protester holding a "Behead those who insult Islam" sign and rows of black-flag militants, and a cartoon Popper concludes that defending tolerance requires not tolerating the intolerant, and that any movement preaching intolerance must be outside the law.',
        },
      },
      {
        id: 'flat-earth',
        title: 'The stupidest one: flat Earth',
        figure: {
          image: flatEarthMeme,
          alt: 'Meme captioned "Crazy how nature does that": a solar system diagram where every planet is a sphere except Earth, drawn as a flat map.',
        },
      },
    ],
  },
  {
    id: 'portuguese',
    title: 'Portuguese Myths',
    myths: [
      {
        id: 'citacao-enganadora',
        title: '"Citação" enganadora',
        lang: 'pt',
        figure: {
          image: caetanoMisquote,
          alt: 'Imagem partilhada nas redes: fotografia de Marcelo Caetano ao lado da citação que lhe é atribuída sobre o 25 de Abril, "Em poucas décadas estaremos reduzidos à indigência…", seguida de "Veremos alçados ao Poder analfabetos, meninos mimados, escroques de toda a espécie…".',
        },
        sources: [
          {
            image: bookCover,
            alt: 'Capa, lombada e contracapa do livro "Marcello Caetano – Confidências no Exílio", de Joaquim Veríssimo Serrão, edição Verbo.',
          },
          {
            image: bookPages206,
            alt: 'Páginas 206 e 207 de "Confidências no Exílio".',
          },
          {
            image: bookPages208,
            alt: 'Páginas 208 e 209 de "Confidências no Exílio"; no topo da página 208, a citação: "Sem o Ultramar estamos reduzidos à indigência, ou seja, à caridade das nações ricas…".',
          },
        ],
      },
    ],
  },
];

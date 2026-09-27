/**
 * Images for /what-i-do/why, ported from the Google Sites original
 * (https://www.neteinstein.org/what-i-do/why — crawl snapshot in
 * `.crawl/report.json`). The page's copy lives in `src/content/pages/why.mdx`.
 *
 * The original closed with these two GIFs side by side; the first was also the
 * page's social image, so it now fronts the hero and the second sits beside
 * the closing "Why not?".
 */
import type { ImageMetadata } from 'astro';

import smileBlink from '../assets/what-i-do/why/smile-blink.webp';
import deadpanStare from '../assets/what-i-do/why/deadpan-stare.webp';

/** An image and its alt text. */
interface Picture {
  src: ImageMetadata;
  alt: string;
}

export const heroGif: Picture = {
  src: smileBlink,
  alt: 'Animated GIF: a bearded man in glasses and a navy polo shirt smiles at the camera and slowly blinks',
};

export const closingGif: Picture = {
  src: deadpanStare,
  alt: 'Animated GIF: a close-up of the same man, a small headset microphone at his cheek, staring into the camera with a deadpan look',
};

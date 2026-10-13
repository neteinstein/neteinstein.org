import type { VideoRef } from './types';

/** The prize behind the easter egg (src/pages/easter-egg.astro). */
export const easterEggVideo: VideoRef & { title: string } = {
  provider: 'youtube',
  id: 'dJGbS2lgCpI',
  title: 'Arraial do Grão - Tino de Rans',
};

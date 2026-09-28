import type { HobbyFigure, TrueStory } from './types';
import jeep from '../assets/hobbies/jeep-stuck-in-mud.webp';

/**
 * The /hobbies/storyteller list, in the original order. Only "Wiretapping"
 * links out on the original.
 */
export const stories: TrueStory[] = [
  { year: 2005, text: ['How to almost get beaten at a bar'] },
  {
    year: 2007,
    text: [
      {
        label: 'Wiretapping',
        href: 'https://medium.com/improver/era-uma-vez-as-escutas-telef%C3%B3nicas-e-portugal-1fc75dfc1c5b',
      },
      '...',
    ],
  },
  { year: 2007, text: ['Secret Enemy, or how I ended up sleeping in a hole'] },
  { year: 2007, text: ['Yes, a minivan can go down a mountain fire road'] },
  { year: 2009, text: ['How "The Bats" were actually "carnivorous"'] },
  { year: 2010, text: ['Yes, "Pepins de la mer" exist'] },
  { year: 2010, text: ['How we found someone floating'] },
  { year: 2010, text: ["Don't drink hot sauce at the library"] },
  {
    year: 2011,
    text: [
      "One time at summer camp... methylene blue appeared and then... hot sauce at McDonald's",
    ],
  },
  { year: 2012, text: ['How my internet "nickname" got me into TEDx'] },
  { year: 2016, text: ['How to stop people from stealing food at work'] },
  { year: 2016, text: ["It's San Francisco time, Goooogleeee!"] },
  { year: 2018, text: ["Crawl, this is the little people's room."] },
  { year: 2018, text: ["Drills to help at someone's home..."] },
  { year: 2019, text: ['Dragon in rectangular packages and ants as an appetizer'] },
  { year: 2019, text: ["Don't make assumptions: they might get someone to eat jars of jelly"] },
  { year: 2019, text: ["Don't say the Portuguese don't offer you enough food"] },
  { year: 2020, text: ['A house, and how difficult it is to get electricity'] },
  {
    year: 2021,
    text: ['How my father is really worse than me with chocolates and candies that... are hot'],
  },
  { year: 2021, text: ['How to do a remote Squid Game...'] },
  { year: 2023, text: ['Or how to jump from second-floor balconies...'] },
  { year: 2023, text: ["Porto or Madrid? It's all the same when flying from Dublin"] },
  { year: 2025, text: ['"Crickets" in the office'] },
  { text: ['...'] },
];

/** The photo beside "Are you bored?" — the jeep story it mentions. */
export const jeepPhoto: HobbyFigure = {
  image: jeep,
  alt: 'A white off-road jeep stuck in a muddy puddle on a dirt track, with trees behind it',
};

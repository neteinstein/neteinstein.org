/**
 * Single source of truth for site metadata and navigation.
 *
 * Header, Footer, the sitemap and the JSON-LD Person schema all read from here.
 * Adding a page means adding it to `NAV` once — never hardcode a nav entry
 * anywhere else.
 */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  label: string;
  href: string;
  /** Key into the icon map in `src/components/SocialIcon.astro`. */
  icon: 'github' | 'linkedin' | 'medium' | 'slideshare' | 'mail';
}

export const SITE = {
  url: 'https://neteinstein.org',
  title: 'Pedro Vicente',
  tagline: 'Improver, Husband & Father',
  description:
    'Personal site of Pedro Vicente (neteinstein) — Mobile Services Lead & Improver at ' +
    'Mindera, podcast host, speaker, and creator of the LoopGain feedback game.',
  author: 'Pedro Vicente',
  locale: 'en',
  /** Used as the OpenGraph fallback image. Relative to `public/`. */
  ogImage: '/og-default.png',
} as const;

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Me', href: '/me' },
  {
    label: 'What I Do',
    href: '/what-i-do/why',
    children: [
      { label: 'Why "neteinstein"?', href: '/what-i-do/why' },
      { label: 'Talks & Workshops', href: '/what-i-do/talks-workshops' },
      { label: 'Podcasts', href: '/what-i-do/podcasts' },
      { label: 'Articles', href: '/what-i-do/articles' },
    ],
  },
  { label: 'Improver', href: '/improver' },
  { label: 'Speaker', href: '/speaker' },
  { label: 'Writer', href: '/writer' },
  {
    label: 'Porto',
    href: '/porto/visit-porto',
    children: [
      { label: 'Visit Porto', href: '/porto/visit-porto' },
      { label: 'With Kids', href: '/porto/with-kids' },
    ],
  },
  { label: 'Hobbies', href: '/hobbies/hobbies' },
  { label: 'Tesla', href: '/tesla' },
];

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/neteinstein', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/neteinstein/', icon: 'linkedin' },
  { label: 'Medium', href: 'https://neteinstein.medium.com', icon: 'medium' },
  { label: 'SlideShare', href: 'https://www.slideshare.net/neteinstein', icon: 'slideshare' },
];

/**
 * True when `href` is the current page, or an ancestor of it. Used by Header
 * and MobileNav to mark the active branch of the nav tree.
 */
export function isActive(href: string, pathname: string): boolean {
  const current = normalize(pathname);
  const target = normalize(href);
  if (target === '/') return current === '/';
  return current === target || current.startsWith(`${target}/`);
}

function normalize(path: string): string {
  const stripped = path.replace(/\/+$/, '');
  return stripped === '' ? '/' : stripped;
}

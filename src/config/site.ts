/**
 * Single source of truth for site metadata and navigation.
 *
 * Header, Footer, the sitemap and the JSON-LD Person schema all read from here.
 * Adding a page means adding it to `NAV` once — never hardcode a nav entry
 * anywhere else.
 *
 * Every `href` here is site-absolute and base-free (`/tesla`, not
 * `/neteinstein.org/tesla`). Components pass them through `withBase()` from
 * `src/lib/url.ts` when rendering, so the same config works on the custom
 * domain and on the `*.github.io/<repo>/` preview URL.
 */

export interface NavItem {
  label: string;
  /**
   * Omitted for pure groups ("What I do", "Hobbies", "Porto") — the Google
   * Sites original had no page at those paths, so neither do we.
   */
  href?: string;
  children?: NavLeaf[];
}

export interface NavLeaf {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Key into the icon map in `src/components/SocialIcon.astro`. */
  icon: 'github' | 'linkedin' | 'x' | 'medium' | 'slideshare' | 'stackoverflow' | 'mail';
  /** Shown in the footer's one-line "@neteinstein - LinkedIn - Twitter - GitHub" row. */
  footer?: boolean;
}

export const SITE = {
  url: 'https://www.pedrovicente.pt',
  title: 'Pedro Vicente',
  handle: 'neteinstein',
  tagline: 'Welcome to my little virtual home',
  description:
    'Pedro Vicente (neteinstein) — husband & father, Mobile Services Lead & Improver at Mindera, ' +
    'podcast host, speaker and creator of the LoopGain feedback game.',
  author: 'Pedro Vicente',
  /** OpenGraph fallback image. Relative to `public/`. */
  ogImage: '/og-default.jpg',
} as const;

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'What I do',
    children: [
      { label: 'Tech Engineer', href: '/what-i-do/tech-engineer' },
      { label: 'Talks & Workshops', href: '/what-i-do/talks-workshops' },
      { label: 'Podcasts', href: '/what-i-do/podcasts' },
      { label: 'Improver', href: '/what-i-do/improver' },
      { label: 'Articles', href: '/what-i-do/articles' },
      { label: 'Why?', href: '/what-i-do/why' },
    ],
  },
  { label: 'My Apps', href: '/my-apps' },
  { label: 'Tools', href: '/tools' },
  {
    label: 'Hobbies',
    children: [
      { label: 'Storyteller', href: '/hobbies/storyteller' },
      { label: 'Hobbies', href: '/hobbies/hobbies' },
      { label: 'Myths', href: '/hobbies/myths' },
    ],
  },
  {
    label: 'Porto',
    children: [
      { label: 'Visit Porto', href: '/porto/visit-porto' },
      { label: 'With Kids', href: '/porto/with-kids' },
    ],
  },
  { label: 'Tesla', href: '/tesla' },
];

export const SOCIALS: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/neteinstein/',
    icon: 'linkedin',
    footer: true,
  },
  { label: 'Twitter', href: 'https://www.twitter.com/neteinstein', icon: 'x', footer: true },
  { label: 'GitHub', href: 'https://github.com/neteinstein', icon: 'github', footer: true },
  { label: 'Medium', href: 'https://medium.com/@neteinstein', icon: 'medium' },
  { label: 'SlideShare', href: 'https://www.slideshare.net/neteinstein', icon: 'slideshare' },
  {
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/327011/neteinstein',
    icon: 'stackoverflow',
  },
];

/** Every leaf page in the nav, in menu order. Used by the sitemap and 404 page. */
export function navPages(): NavLeaf[] {
  return NAV.flatMap((item) => [
    ...(item.href ? [{ label: item.label, href: item.href }] : []),
    ...(item.children ?? []),
  ]);
}

/**
 * True when `href` is the current page, or an ancestor of it. Used by Header
 * and MobileNav to mark the active branch of the nav tree. `pathname` must
 * already have the deploy base stripped (see `stripBase`).
 */
export function isActive(href: string | undefined, pathname: string): boolean {
  if (!href) return false;
  const current = normalize(pathname);
  const target = normalize(href);
  if (target === '/') return current === '/';
  return current === target || current.startsWith(`${target}/`);
}

/** A group is active when any of its children is. */
export function isGroupActive(item: NavItem, pathname: string): boolean {
  return (
    isActive(item.href, pathname) ||
    (item.children ?? []).some((child) => isActive(child.href, pathname))
  );
}

function normalize(path: string): string {
  const stripped = path.replace(/\/+$/, '');
  return stripped === '' ? '/' : stripped;
}

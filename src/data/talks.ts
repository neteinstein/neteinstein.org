import type { Talk } from './types';

/**
 * TODO(content): seeded from search-engine summaries of
 * https://www.neteinstein.org/what-i-do/talks-workshops because the live site
 * could not be crawled (see README → "Restoring the real content"). Dates,
 * locations and links marked below need verifying against the original page,
 * and the full back-catalogue is almost certainly longer than this.
 */
export const talks: Talk[] = [
  {
    title: 'Pending Approvals: An AI Story',
    event: 'Mindera AI Insights Event',
    date: '2026-09',
    type: 'talk',
  },
  {
    title: 'Once Upon a Time… a Multiplatform, Multi-Tenant Challenge (KMP)',
    event: 'Droidcon Lisbon',
    location: 'Lisbon, Portugal',
    date: '2023',
    type: 'talk',
    description: 'Building a multiplatform, multi-tenant mobile product with Kotlin Multiplatform.',
    slidesUrl:
      'https://www.slideshare.net/neteinstein/a-multiplatform-multitenant-challenge-droidcon-lisbon-2023pdf',
  },
  {
    title: 'How to Build a Great Team & Maintain It',
    event: 'Porto Tech Hub',
    location: 'Porto, Portugal',
    date: '2023', // TODO(content): confirm year
    type: 'talk',
    description: 'On teams, trust and making feedback a habit rather than an event.',
  },
  {
    title: 'Feedback Workshop', // TODO(content): confirm exact title
    event: 'CREU',
    location: 'Porto, Portugal',
    date: '2023', // TODO(content): confirm date
    type: 'workshop',
    description: 'A feedback workshop run for CREU collaborators.',
  },
  {
    title: 'Mobile Commerce Strategy', // TODO(content): confirm exact title
    event: 'Commit Porto',
    location: 'Porto, Portugal',
    date: '2018',
    type: 'talk',
  },
  {
    title: 'Mobile App Development', // TODO(content): confirm exact title
    event: 'GDG DevFest',
    location: 'Porto, Portugal',
    date: '2017', // TODO(content): confirm year
    type: 'talk',
  },
];

/**
 * European Portuguese, keyed by the English source text. One module per area
 * of the site, mirroring `src/data/`; `ui` holds the shared chrome. Prose
 * lives in `src/content/pages/pt/*.mdx` instead.
 */
import type { Catalog } from '..';
import { apps } from './apps';
import { articles } from './articles';
import { feedbackTalk } from './feedback-talk';
import { friendApps } from './friend-apps';
import { games } from './games';
import { hobbies } from './hobbies';
import { home } from './home';
import { icebreakers } from './icebreakers';
import { improver } from './improver';
import { podcasts } from './podcasts';
import { porto } from './porto';
import { portoKids } from './porto-kids';
import { talks } from './talks';
import { tech } from './tech';
import { tesla } from './tesla';
import { tools } from './tools';
import { ui } from './ui';
import { workshops } from './workshops';

export const pt: Catalog = {
  ...ui,
  ...home,
  ...tech,
  ...talks,
  ...podcasts,
  ...improver,
  ...feedbackTalk,
  ...icebreakers,
  ...workshops,
  ...articles,
  ...apps,
  ...friendApps,
  ...tools,
  ...games,
  ...hobbies,
  ...porto,
  ...portoKids,
  ...tesla,
};

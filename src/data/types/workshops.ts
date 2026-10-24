/** Shapes for /teams/workshops. */
import type { ImproverChapter } from './improver';
import type { LinkRef } from './shared';

/**
 * One game, exercise or story from the workshop: its name and what it is
 * for. Deliberately nothing on how it runs, so it still surprises the people
 * who later play it.
 */
export interface WorkshopActivity {
  emoji: string;
  name: string;
  /** What kind of moment it is: "Team game", "Quick game", "Story"… */
  format: string;
  purpose: string;
}

/** A short sequence the theme builds towards, drawn as connected steps. */
export interface WorkshopPath {
  label: string;
  steps: string[];
}

/** A link out at the end of a theme, with a line saying why. */
export interface WorkshopLink extends LinkRef {
  text: string;
}

/** One of the day's themes. Rendered as a numbered chapter, like /what-i-do/improver. */
export interface WorkshopTheme extends ImproverChapter {
  /** A paragraph or two on what the theme covers. */
  intro: string[];
  /** What the conversation touches on, as short labels. */
  topics: string[];
  path?: WorkshopPath;
  activities: WorkshopActivity[];
  link?: WorkshopLink;
}

/** A game or experiment from the wider toolbox. */
export interface WorkshopTool {
  name: string;
  /** What it is for. Left out when the group's `intro` already says it. */
  purpose?: string;
}

/** Toolbox entries that explore the same thing ("Trust & cooperation", "Energisers"…). */
export interface WorkshopToolGroup {
  emoji: string;
  title: string;
  /** What the whole group is for. */
  intro: string;
  tools: WorkshopTool[];
}

/** One kind of toolbox entry: social experiments, shorter games. */
export interface WorkshopToolSet {
  title: string;
  intro: string;
  groups: WorkshopToolGroup[];
}

/** The games and experiments a day can draw on beyond the three themes. */
export interface WorkshopToolbox extends ImproverChapter {
  intro: string[];
  sets: WorkshopToolSet[];
}

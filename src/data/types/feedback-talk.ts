/**
 * Shapes for the feedback talk on /what-i-do/improver: the "Don't wait for the
 * CHAOS to think about Feedback" slides, rebuilt as an in-page deck. Each slide
 * is one of a few layouts, picked by `kind`; `TalkSlide.astro` renders them.
 */
import type { ImproverText } from './improver';
import type { LinkRef } from './shared';

interface SlideBase {
  /** Corner tab, as the original marks its asides ("Facilitator tip"). */
  badge?: string;
  /** Small print that is part of the slide itself. */
  aside?: ImproverText;
  /** The presenter's note from the original deck, shown as such. */
  note?: string;
}

/** The title slide. */
export interface CoverSlide extends SlideBase {
  kind: 'cover';
  title: ImproverText;
  subtitle: string;
  byline: string;
}

/**
 * One big line — a question, a claim, a quote. `reveal` holds back what the
 * original showed on the next click, behind a toggle the deck's "next" opens
 * first.
 */
export interface StatementSlide extends SlideBase {
  kind: 'statement';
  /** Smaller line set above `text`. */
  lead?: string;
  text: ImproverText;
  /** Paragraphs under `text`. */
  body?: ImproverText[];
  /** Large decorative emoji beside the statement. */
  emoji?: string;
  /** Who said it, when `text` is a quote. */
  cite?: string;
  reveal?: ImproverText[];
  /** Set `lead` and `text` on a dark band, like the original's section headers. */
  band?: boolean;
  action?: LinkRef;
}

export interface CompareSide {
  title: string;
  emoji?: string;
  /** One paragraph, or several shown as a list. */
  items: ImproverText[];
}

/** Two things side by side ("Feedback vs Evaluation", "On site / Remote"). */
export interface CompareSlide extends SlideBase {
  kind: 'compare';
  lead?: string;
  sides: [CompareSide, CompareSide];
  /** Word set between the two sides ("vs"). */
  joiner?: string;
  /** Hide each side's items behind its own toggle. */
  reveal?: boolean;
  /** Closing line under both sides ("Why?"). */
  outro?: string;
}

export interface ListSlide extends SlideBase {
  kind: 'list';
  title: ImproverText;
  lead?: string;
  /** `check`: a ticked checklist; `flow`: steps joined by arrows; `bullet`: plain. */
  style: 'check' | 'flow' | 'bullet';
  items: ImproverText[];
}

/** A "Build your question" rule: what to aim for, and bad → better examples. */
export interface RulesSlide extends SlideBase {
  kind: 'rules';
  title: string;
  lead: string;
  examples: { bad: string; better: string }[];
}

/**
 * The round table the original keeps coming back to: who is talking
 * (`speaker`) about whom (`about`), as indexes into `FeedbackTalk.seats`.
 */
export interface TableSlide extends SlideBase {
  kind: 'table';
  lead?: string;
  speaker?: number;
  about?: number;
  says?: ImproverText;
}

/** The four card types of a LoopGain session, with an example of each. */
export interface CardsSlide extends SlideBase {
  kind: 'cards';
  title: string;
  lead?: string;
  cards: { type: string; text: string }[];
}

/** A short exchange, played back as chat bubbles. */
export interface DialogueSlide extends SlideBase {
  kind: 'dialogue';
  title: string;
  lines: { emoji: string; text: string }[];
}

/** One part of a session, timed in minutes, or in minutes per person. */
export interface SessionPart {
  label: string;
  minutes: number;
  perPerson?: boolean;
}

/** How long a session takes, for a team size the reader picks. */
export interface TimerSlide extends SlideBase {
  kind: 'timer';
  title: string;
  lead: string;
  people: { label: string; min: number; max: number; value: number };
  parts: SessionPart[];
  total: string;
}

export interface LinksSlide extends SlideBase {
  kind: 'links';
  title: string;
  links: { type: string; source: string; title: string; href: string }[];
}

/** The closing slide: sign-off, credits and where to get the deck. */
export interface EndSlide extends SlideBase {
  kind: 'end';
  title: ImproverText;
  tagline: string;
  credits: { role: string; names: string[] }[];
  action: LinkRef;
}

export type TalkSlide =
  | CoverSlide
  | StatementSlide
  | CompareSlide
  | ListSlide
  | RulesSlide
  | TableSlide
  | CardsSlide
  | DialogueSlide
  | TimerSlide
  | LinksSlide
  | EndSlide;

export interface TalkChapter {
  /** Short label for the chapter tabs. */
  title: string;
  slides: TalkSlide[];
}

export interface FeedbackTalk {
  /** Fragment id for in-page links; slides get `<id>-<n>`. */
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Who sits at the round table, clockwise from the top. */
  seats: string[];
  chapters: TalkChapter[];
}

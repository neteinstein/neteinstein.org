/** Shapes for /porto/visit-porto — the "So you're coming to Porto?" city guide. */
import type { ImageMetadata } from 'astro';
import type { RichText } from './home';

/** A photo as the data file holds it: a local asset plus its alt text. */
export interface PlacePhoto {
  image: ImageMetadata;
  alt: string;
}

/**
 * A photo resolved to plain URLs by the route (`getImage()`), so it can cross
 * into the `PlaceFilter` island as a serialisable prop.
 */
export interface PlacePhotoUrl {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
}

/** One restaurant, bar, sight or activity named under a guide entry. */
export interface Venue {
  name: string;
  /** Where the name links on the original. Absent when the original left it unlinked. */
  href?: string;
  /** The italic aside the original puts under the name — "(classy)", "Tip: …". */
  note?: string;
  /** The word the original puts before this venue — "Or", "or" — kept as written. */
  joiner?: string;
}

/** One entry of the guide: what to try (or see, or do) and where. */
export interface Place<Photo = PlacePhoto> {
  /** Anchor id — unique across the page. */
  id: string;
  /** The dish or what-to-expect headline. Absent when the original only named the venue. */
  title?: string;
  /** Small aside printed right under the headline — "(Little hot dogs)". */
  subtitle?: string;
  /** Tips and descriptions, one paragraph each. */
  notes?: string[];
  venues: Venue[];
  photos: Photo[];
}

/** A titled run of places under a group — "Vegan", "Places to visit - Gaia". */
export interface PlaceSubgroup<Photo = PlacePhoto> {
  id: string;
  title: string;
  places: Place<Photo>[];
}

/**
 * A top-level category of the guide — "Where to eat?", "Have a drink/Tea".
 * Groups the original split further carry `subgroups`; the rest list their
 * places directly.
 */
export interface PlaceGroup<Photo = PlacePhoto> {
  id: string;
  title: string;
  /** Short label for filter chips and the jump list. Defaults to `title`. */
  short?: string;
  /** Photo behind the group's tile in the jump list. */
  cover: PlacePhoto;
  places?: Place<Photo>[];
  subgroups?: PlaceSubgroup<Photo>[];
}

/** The copy that opens the page, above the guide. */
export interface PortoIntro {
  /** Caption for the hero photo. */
  heroCaption: string;
  hero: PlacePhoto;
  recommendTitle: string;
  /**
   * "eat mostly tradicional food", … — each points at a group of the guide.
   * `emphasis` is the word the original sets in italics.
   */
  recommend: { text: string; emphasis?: string; group: string }[];
  history: string;
  support: RichText;
  jumpTitle: string;
  jumpHint: string;
  /** Extra jump links the original lists after the groups ("Quiz Game"). */
  jumpExtras: { label: string; href: string; photo?: PlacePhoto }[];
  /** The Buy Me a Coffee widget's `data-message`. */
  supportMessage: string;
  /** Label of the closing note (its text is the MDX body). */
  triviaLabel: string;
}

/** A guide group as the `PlaceFilter` island receives it: photos as URLs, no cover. */
export type GuideGroup = Omit<PlaceGroup<PlacePhotoUrl>, 'cover'>;

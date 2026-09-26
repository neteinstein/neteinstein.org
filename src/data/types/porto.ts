/** Shapes for /porto/*. */

export type PlaceCategory = 'eat' | 'drink' | 'dessert' | 'visit' | 'activity';
export type PlaceArea = 'porto' | 'gaia' | 'matosinhos' | 'other';

export interface Place {
  name: string;
  category: PlaceCategory;
  area: PlaceArea;
  notes?: string;
  diets?: string[];
  url?: string;
}

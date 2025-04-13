export interface Scenius {
  id: string;
  name: string;
  category: string;
  motto: string;
  timePeriod: string;
  description: string;
  coreActivity: string;
  values: string[];
  opposition: string;
  keyFigures: string[];
  geographicLocation: string;
  institutionalHub: string;
  notableProducts: string[];
  legacy: string;
  impactScore: number;
  historicalSignificance: string;
  organizationalForm: string;
  century: number;
  imageUrl?: string;
}

export type SceniusFilter = {
  category?: string;
  century?: number;
  location?: string;
  impactScore?: number;
};

export type SortOption = 'impactScore' | 'century' | 'name'; 
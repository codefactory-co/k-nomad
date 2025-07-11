export interface City {
  id: number;
  name: string;
  tagline: string;
  rating: number;
  cost: string;
  internet: string;
  likes: number;
  dislikes: number;
  image: string;
  badges: string[];
  scores: {
    livingCost: number;
    internet: number;
    workEnvironment: number;
    transportation: number;
    english: number;
    safety: number;
    culture: number;
    community: number;
  };
  region: string;
  description?: string;
}

export interface Stats {
  activeNomads: number;
  totalCities: number;
  avgRating: number;
}

export type Region = '수도권' | '경상권' | '전라권' | '강원권' | '제주권' | '충청권';
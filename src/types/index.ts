export interface City {
  id: number;
  name: string;
  tagline: string;
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
  budget: string;
  environment: string;
  bestSeason: string;
  description?: string;
}

export interface Stats {
  activeNomads: number;
  totalCities: number;
}

export type Region = '전체' | '수도권' | '경상도' | '전라도' | '강원도' | '제주도' | '충청도';

export type Budget = '100만원' | '100~200만원' | '200만원+';

export type Environment = '자연친화' | '도심선호' | '카페작업' | '코워킹 필수';

export type Season = '봄' | '여름' | '가을' | '겨울';
// Content types - can be imported anywhere

export interface Category {
  id: number;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

export interface DessertFeature {
  name: string;
  value: string;
}

export interface Dessert {
  id: number;
  title: string;
  slug: string;
  categorySlug: string;
  description: string;
  composition: string;
  features: DessertFeature[];
  images: string[];
}

export interface PortfolioItem {
  id: number;
  image: string;
  title?: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  clientPhoto?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface About {
  photo: string;
  story: string;
  philosophy: string;
  certificates: string[];
}

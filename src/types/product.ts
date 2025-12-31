export interface ProductSpecs {
  frame: string;
  fork: string;
  gears: string;
  brakes: string;
  wheels: string;
  weight: string;
  suspension?: string;
  motor?: string;
  battery?: string;
  range?: string;
  extras?: string;
}

export interface Product {
  id: string;
  name: string;
  category: "mountain" | "road" | "city" | "electric" | "kids";
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  specs: ProductSpecs;
  sizes: string[];
  colors: string[];
  featured?: boolean;
  bestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

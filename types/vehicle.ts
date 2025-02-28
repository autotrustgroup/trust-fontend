export type VehicleType =
  | "sedan"
  | "suv"
  | "truck"
  | "hatchback"
  | "crossover"
  | "sports"
  | "electric"
  | "hybrid"
  | "luxury"
  | "convertible"
  | "wagon"
  | "diesel";

export type VehicleCondition = "new" | "used" | "certified";

export interface VehicleBase {
  id: string | number;
  name: string;
  image: string;
  href: string;
}

export interface Vehicle extends VehicleBase {
  price: number;
  mileage: string | number;
  year: number;
  condition: VehicleCondition;
  type: VehicleType;
  tags: string[];
  make: string;
  model: string;
  trim?: string;
  exteriorColor?: string;
  interiorColor?: string;
  fuelType?: string;
  transmission?: string;
  engine?: string;
  features?: string[];
  description?: string;
  location?: string;
  vin?: string;
  dealershipId?: string | number;
  isReserved?: boolean;
  isFeatured?: boolean;
  isGuide?: boolean;
}

export interface VehicleSummary extends VehicleBase {
  price?: number;
  type?: VehicleType;
  tags?: string[];
}

export interface SearchParams {
  query?: string;
  condition?: VehicleCondition;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  makes?: string[];
  models?: string[];
  types?: VehicleType[];
  tags?: string[];
  sortBy?: string;
  page?: number;
  limit?: number;
}

export type TrendingSearchTerm = string;

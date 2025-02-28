/**
 * Types for vehicle search results
 */

/**
 * Interface for dealer information in vehicle listings
 */
export interface Dealer {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  siteUrl: string;
}

/**
 * Interface for vehicle listing data
 */
export interface VehicleListing {
  id: number;
  sponsored?: boolean;
  condition: "New" | "Used" | "Certified";
  title: string;
  price: number | string;
  msrp?: number;
  priceDrop?: number;
  estimatedPayment?: number;
  fairDeal?: boolean;
  year: number;
  make: string;
  model: string;
  mileage: number;
  dealer: Dealer;
  location: string;
  dealerSiteUrl: string;
  imageUrl: string;
  imageCount: number;
  features?: string[];
  exteriorColor?: string;
  interiorColor?: string;
  fuelType?: string;
  transmission?: string;
  bodyStyle?: string;
  stockNumber?: string;
}

/**
 * Interface for pagination data in search results
 */
export interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  resultsPerPage: number;
}

/**
 * Interface for search results API response
 */
export interface SearchResultsResponse {
  listings: VehicleListing[];
  pagination: PaginationData;
  filters: {
    [key: string]: any;
  };
}

export interface SearchResultsData {
  totalResults: number;
  resultsPerPage: number;
  currentPage: number;
  filters: {
    [key: string]: any;
  };
  sort: {
    field: string;
    direction: "asc" | "desc";
  };
  listings: VehicleListing[];
}

export type SortOption = {
  id: string;
  label: string;
  field: string;
  direction: "asc" | "desc";
};

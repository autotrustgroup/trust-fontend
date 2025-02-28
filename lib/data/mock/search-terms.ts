import { TrendingSearchTerm } from "@/types/vehicle";

// Mock data for trending search terms
export const trendingSearchTerms: TrendingSearchTerm[] = [
  "Used Under $15K",
  "Used Electric",
  "Used Truck",
  "Used SUV Under $15K",
  "Used Mercedes-Benz",
  "Used Porsche 911",
  "Lincoln Nautilus Under $60K",
];

// Search term categories for organization
export const searchCategories = {
  price: [
    "Under $15K",
    "Under $20K",
    "Under $30K",
    "Under $50K",
    "Under $60K",
    "Under $100K",
  ],
  condition: ["New", "Used", "Certified"],
  vehicleType: [
    "Sedan",
    "SUV",
    "Truck",
    "Electric",
    "Hybrid",
    "Luxury",
    "Sports",
  ],
  make: [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Tesla",
    "Porsche",
    "Lincoln",
  ],
  popular: [
    "Best Fuel Economy",
    "Best Safety Ratings",
    "Family Friendly",
    "Off-Road Ready",
    "Best Resale Value",
  ],
};

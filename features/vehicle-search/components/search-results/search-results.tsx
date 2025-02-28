"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { CarListingCard } from "./car-listing-card";
import { VehicleListing } from "../../types/search-results";

interface SearchResultsProps {
  searchResults?: VehicleListing[];
}

// Enhanced mock data matching the car-listings component
const mockListings: VehicleListing[] = [
  {
    id: 1,
    sponsored: true,
    condition: "New",
    title: "2024 Audi Q5 Premium Plus",
    price: 53990,
    year: 2024,
    make: "Audi",
    model: "Q5 Premium Plus",
    mileage: 8,
    dealer: {
      id: "d1",
      name: "Audi Seattle",
      rating: 4.8,
      reviews: 318,
      location: "Seattle, WA",
      siteUrl: "/#",
    },
    location: "Seattle, WA",
    dealerSiteUrl: "/#",
    imageUrl:
      "https://images.unsplash.com/photo-1614026480418-bd11fde6f3a7?q=80&w=600&auto=format&fit=crop",
    imageCount: 34,
    features: ["AWD", "Leather Seats", "Navigation", "Panoramic Roof"],
    exteriorColor: "Glacier White Metallic",
    interiorColor: "Black",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyStyle: "SUV",
    stockNumber: "A2413",
  },
  {
    id: 2,
    condition: "Used",
    title: "2022 Audi A4 S Line",
    price: 38995,
    year: 2022,
    make: "Audi",
    model: "A4 S Line",
    mileage: 12355,
    dealer: {
      id: "d2",
      name: "Bellevue Luxury Motors",
      rating: 4.6,
      reviews: 212,
      location: "Bellevue, WA",
      siteUrl: "/#",
    },
    location: "Bellevue, WA",
    dealerSiteUrl: "/#",
    imageUrl:
      "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?q=80&w=600&auto=format&fit=crop",
    imageCount: 28,
    features: ["AWD", "Leather Seats", "Premium Sound", "Sport Package"],
    exteriorColor: "Mythos Black Metallic",
    interiorColor: "Charcoal",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyStyle: "Sedan",
    stockNumber: "BP4217",
  },
  {
    id: 3,
    condition: "Certified",
    title: "2023 Audi e-tron GT",
    price: 104888,
    year: 2023,
    make: "Audi",
    model: "e-tron GT",
    mileage: 5322,
    dealer: {
      id: "d3",
      name: "Audi Bellevue",
      rating: 4.9,
      reviews: 416,
      location: "Bellevue, WA",
      siteUrl: "/#",
    },
    location: "Bellevue, WA",
    dealerSiteUrl: "/#",
    imageUrl:
      "https://images.unsplash.com/photo-1617814076668-8dfc6572a822?q=80&w=600&auto=format&fit=crop",
    imageCount: 42,
    features: [
      "All-Electric",
      "Premium Plus",
      "Sport Wheels",
      "Performance Package",
    ],
    exteriorColor: "Daytona Gray Pearl",
    interiorColor: "Black",
    fuelType: "Electric",
    transmission: "Automatic",
    bodyStyle: "Sedan",
    stockNumber: "GT2023",
  },
  {
    id: 4,
    condition: "Used",
    title: "2021 Audi Q7 Prestige",
    price: 62450,
    year: 2021,
    make: "Audi",
    model: "Q7 Prestige",
    mileage: 28455,
    dealer: {
      id: "d4",
      name: "University Audi",
      rating: 4.7,
      reviews: 285,
      location: "Seattle, WA",
      siteUrl: "/#",
    },
    location: "Seattle, WA",
    dealerSiteUrl: "/#",
    imageUrl:
      "https://images.unsplash.com/photo-1581465689543-e5066752673e?q=80&w=600&auto=format&fit=crop",
    imageCount: 31,
    features: [
      "3rd Row Seating",
      "Premium Audio",
      "Heads-up Display",
      "Panoramic Roof",
    ],
    exteriorColor: "Navarra Blue Metallic",
    interiorColor: "Nougat Brown",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyStyle: "SUV",
    stockNumber: "QS7521",
  },
];

/**
 * Component to display vehicle search results
 */
export function SearchResults({
  searchResults = mockListings,
}: SearchResultsProps) {
  return (
    <div className="space-y-4">
      {searchResults.map((listing) => (
        <CarListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}

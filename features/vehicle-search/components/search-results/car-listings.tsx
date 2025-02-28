"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CarListingCard } from "./car-listing-card";
import { VehicleListing } from "../../types/search-results";
import { mockListings } from "../../data/mock-listings";

/**
 * Props for the CarListings component
 */
interface CarListingsProps {
  listings?: VehicleListing[];
}

/**
 * Component to display vehicle search results as a list of car listings
 */
export function CarListings({ listings = mockListings }: CarListingsProps) {
  return (
    <div className="space-y-6">
      {listings.map((listing) => (
        <CarListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}

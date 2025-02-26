import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { CarListingCard } from "./car-listing-card";

// Mock data matching the image
const mockListings = [
  {
    id: 1,
    sponsored: true,
    condition: "New" as const,
    title: "2025 Toyota GR86 Premium",
    price: "Not Priced",
    msrp: 35084,
    dealer: {
      name: "Kolosso Toyota",
      rating: 4.9,
      reviews: 2603,
    },
    location: "Appleton, WI",
    dealerSiteUrl: "/#",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-25%20at%2012.42.07-DUqzt6Wj0AynwMJ1sea4t1EUEKIUdh.png",
    imageCount: 1,
  },
  {
    id: 2,
    condition: "Used" as const,
    title: "2023 Toyota Camry XSE",
    price: 32998,
    dealer: {
      name: "CarMax",
      rating: 4.8,
      reviews: 1205,
    },
    location: "Seattle, WA",
    dealerSiteUrl: "/#",
    imageUrl: "/placeholder.svg",
    imageCount: 32,
  },
  // Add more listings as needed
];

export function SearchResults() {
  return (
    <div className="space-y-4">
      {mockListings.map((listing) => (
        <CarListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}

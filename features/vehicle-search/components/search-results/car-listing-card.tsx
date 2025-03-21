"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VehicleListing } from "../../types/search-results";

export type CarListingCardProps = Omit<VehicleListing, "dealer"> & {
  dealer: {
    name: string;
    rating: number;
    reviews: number;
  };
  id: number; // Ensure id is required
};

/**
 * Card component for displaying vehicle listing information
 */
export function CarListingCard({
  id,
  sponsored,
  condition,
  title,
  price,
  msrp,
  dealer,
  location,
  dealerSiteUrl,
  imageUrl,
  imageCount,
}: CarListingCardProps) {
  return (
    <div className="flex bg-white border border-gray-200 rounded-sm hover:shadow-md transition-all">
      {/* Image Section - Clickable */}
      <Link
        href={`/vehicledetail/${id}`}
        className="relative w-[40%] min-h-[240px] block"
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-l-sm"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <button
          className="absolute top-2 right-2 px-3 py-1 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-full transition-colors shadow-md z-10"
          onClick={(e) => e.stopPropagation()} // Prevent navigation when clicking save
        >
          Save
        </button>
        <div className="absolute bottom-2 right-2 px-2 py-1 text-xs text-white bg-grey-900/70 rounded">
          {imageCount} / {imageCount}
        </div>
      </Link>

      {/* Content Section */}
      <div className="flex-1 p-4 relative flex flex-col">
        <div className="absolute top-2 right-2 flex items-center">
          <Heart className="w-5 h-5 text-gray-400 mr-1" />
          <span className="text-sm text-gray-600">Save</span>
        </div>

        {/* Header with condition and title - Clickable */}
        <div className="mb-2">
          {sponsored && (
            <span className="text-xs font-medium text-blue-600 mr-2">
              Sponsored
            </span>
          )}
          <span className="text-xs font-medium text-gray-600">{condition}</span>
          <Link href={`/vehicledetail/${id}`}>
            <h2 className="text-lg font-semibold mt-1 hover:text-blue-600 transition-colors">
              {title}
            </h2>
          </Link>
        </div>

        {/* Price information */}
        <div className="mb-2">
          <div className="text-lg font-bold">
            {typeof price === "number" ? `$${price.toLocaleString()}` : price}
          </div>
          {msrp && (
            <div className="text-sm text-gray-600">
              MSRP ${msrp.toLocaleString()}
            </div>
          )}
        </div>

        {/* Dealer info */}
        <div className="flex items-center mb-1">
          <span className="text-sm font-medium mr-1">{dealer.name}</span>
          <div className="flex items-center text-sm text-gray-600">
            <Star
              className="w-3.5 h-3.5 text-yellow-500 mr-0.5"
              fill="currentColor"
            />
            <span>
              {dealer.rating.toFixed(1)} ({dealer.reviews.toLocaleString()}{" "}
              reviews)
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-3.5 h-3.5 mr-1" />
          <span>{location}</span>
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between">
          <a
            href={dealerSiteUrl}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
            onClick={(e) => e.stopPropagation()} // Prevent navigation to details when clicking this button
          >
            Check availability
          </a>
          <Link
            href={`/vehicledetail/${id}`}
            className="px-3 py-2 text-sm text-blue-600 font-medium hover:text-blue-800 hover:underline"
          >
            More info
          </Link>
        </div>
      </div>
    </div>
  );
}

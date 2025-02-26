"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star, MapPin } from "lucide-react";

interface CarListingCardProps {
  sponsored?: boolean;
  condition: "New" | "Used";
  title: string;
  price: number | "Not Priced";
  msrp?: number;
  dealer: {
    name: string;
    rating: number;
    reviews: number;
  };
  location: string;
  dealerSiteUrl: string;
  imageUrl: string;
  imageCount: number;
}

export function CarListingCard({
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
    <div className="flex bg-white border border-gray-200 rounded-sm">
      {/* Image Section */}
      <div className="relative w-[40%] min-h-[240px]">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-l-sm"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <button className="absolute top-2 right-2 px-3 py-1 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-full transition-colors shadow-md">
          Save
        </button>
        <div className="absolute bottom-2 right-2 px-2 py-1 text-xs text-white bg-black/70 rounded">
          {imageCount} / {imageCount}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4 relative flex flex-col">
        <div className="absolute top-2 right-2 flex items-center">
          <Heart className="w-5 h-5 text-gray-400 mr-1" />
          <span className="text-sm text-gray-600">Save</span>
        </div>

        {/* Header */}
        <div className="space-y-1 mb-3">
          {sponsored && (
            <p className="text-xs text-gray-500 font-medium">Sponsored</p>
          )}
          <p className="text-sm font-medium">{condition}</p>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>

        {/* Price */}
        <div className="mb-3">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold">
              {price === "Not Priced"
                ? "Not Priced"
                : `$${price.toLocaleString()}`}
            </p>
            {msrp && (
              <p className="text-sm text-gray-600 mt-1">
                MSRP ${msrp.toLocaleString()}
              </p>
            )}
          </div>
        </div>

        {/* Dealer Info */}
        <div className="mb-4">
          <p className="font-medium mb-1">{dealer.name}</p>
          <div className="flex items-center gap-1 mb-2">
            <span className="font-medium">{dealer.rating}</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#8B45F7] text-[#8B45F7]"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({dealer.reviews.toLocaleString()} reviews)
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between">
          <Link
            href={dealerSiteUrl}
            className="text-[#8B45F7] text-sm font-medium hover:underline"
          >
            View on dealer's site
          </Link>
          <button className="px-6 py-2.5 bg-white text-black text-sm font-medium rounded transition-colors border border-black hover:bg-black hover:text-white">
            Check availability
          </button>
        </div>
      </div>
    </div>
  );
}

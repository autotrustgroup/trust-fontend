"use client";

import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VehicleInfoProps {
  data: {
    title: string;
    price: number;
    dealer: {
      name: string;
      rating: number;
      reviews: number;
      location: string;
    };
  };
  onCheckAvailability: () => void;
}

export function VehicleInfo({ data, onCheckAvailability }: VehicleInfoProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Great Deal</Badge>
            <span className="text-sm text-green-600 font-medium">
              $3,200 below market
            </span>
          </div>
        </div>
        <Button variant="outline" size="icon">
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      {/* Price */}
      <div className="mb-6">
        <p className="text-3xl font-bold">${data.price.toLocaleString()}</p>
      </div>

      {/* Dealer Info */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-bold">{data.dealer.name}</h3>
          <Badge variant="secondary" className="font-normal">
            Dealer
          </Badge>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <span className="font-medium mr-1">{data.dealer.rating}</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#8B45F7] text-[#8B45F7]"
                />
              ))}
            </div>
          </div>
          <span className="text-sm text-gray-600">
            ({data.dealer.reviews.toLocaleString()} reviews)
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{data.dealer.location}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <Button
          onClick={onCheckAvailability}
          className="w-full bg-[#8B45F7] hover:bg-[#7B3BE3] text-white"
        >
          Check availability
        </Button>
        <Button variant="outline" className="w-full">
          Get pre-qualified
        </Button>
      </div>

      {/* Additional Info */}
      <p className="mt-4 text-xs text-gray-500">
        By clicking "Check Availability," you authorize BMW Seattle and its
        affiliates to contact you by texts/calls which may include marketing and
        be by autodialer. Consent is not required to purchase. Msg/data rates
        may apply.
      </p>
    </div>
  );
}

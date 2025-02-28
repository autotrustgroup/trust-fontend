"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { vehicleService } from "@/lib/data/api/vehicle-service";
import { Vehicle, VehicleType } from "@/types/vehicle";
import { Skeleton } from "@/components/ui/skeleton";

interface VehicleShowcaseProps {
  category: VehicleType;
  className?: string;
}

export default function PopularVehicleShowcase({
  category,
}: VehicleShowcaseProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const results = await vehicleService.getVehiclesByCategory(category);
        setVehicles(results.slice(0, 5)); // Get first 5 results
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        setError("Failed to load vehicles. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicles();
  }, [category]);

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">All new {category}</h2>
        <p className="text-gray-600 mb-4">
          Experience the best way to search new {category.toLowerCase()}
        </p>
        <Link
          href={`/shop/new-${category.toLowerCase()}`}
          className="text-black font-medium hover:underline"
        >
          Shop new {category.toLowerCase()}
        </Link>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="aspect-[4/3] w-full h-48 rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-10">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => {
              setIsLoading(true);
              setError(null);
              vehicleService
                .getVehiclesByCategory(category)
                .then((results) => {
                  setVehicles(results.slice(0, 5));
                  setIsLoading(false);
                })
                .catch((err) => {
                  console.error(err);
                  setError("Failed to load vehicles. Please try again later.");
                  setIsLoading(false);
                });
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Vehicle Grid */}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {vehicles.length > 0 ? (
            vehicles.map((vehicle) => (
              <div key={vehicle.id} className="group">
                <div className="aspect-[4/3] relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium mb-2">{vehicle.name}</h3>
                <Link
                  href={vehicle.href}
                  className="text-black hover:underline"
                >
                  {vehicle.isGuide
                    ? `Watch ${category}101 Series Now`
                    : "Shop now"}
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">
                No vehicles found for this category.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Footer Links */}
      {!isLoading && !error && (
        <div className="flex gap-6 pt-4">
          <Link
            href={`/${category.toLowerCase()}`}
            className="text-black font-medium hover:underline"
          >
            See more {category.toLowerCase()}
          </Link>
          <Link
            href="/shop/all"
            className="text-black font-medium hover:underline"
          >
            Shop all cars
          </Link>
        </div>
      )}
    </section>
  );
}

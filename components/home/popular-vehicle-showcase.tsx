"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { vehicleService } from "@/lib/data/api/vehicle-service";
import { Vehicle, VehicleType } from "@/types/vehicle";
import { useEffect, useState } from "react";
import ProductCard from "../ui/ProductCard";

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
        setVehicles(results.slice(0, 5));
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
                <ProductCard
                  title={vehicle.name}
                  imageUrl={vehicle.image}
                  buttonText="Shop Now"
                />
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
      {/* {!isLoading && !error && (
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
      )} */}
    </section>
  );
}

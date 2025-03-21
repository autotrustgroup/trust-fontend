"use client";

import { vehicleService } from "@/lib/data/api/vehicle-service";
import Link from "next/link";
import * as React from "react";
// import { trendingSearchTerms } from "@/lib/data/mock/search-terms";
import { Vehicle } from "@/types/vehicle";
import TrendingSearchCard from "./cards/TrendingSearchCard";
import CategoryNav from "./category-nav";
// import { VehicleCategory } from "@/lib/data";

export default function TrendingSearches() {
  const [selectedSearch, setSelectedSearch] =
    React.useState<string>("Used Under $15K");
  const [vehicles, setVehicles] = React.useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  // Fetch vehicles when selected search changes
  React.useEffect(() => {
    const fetchVehicles = async () => {
      setIsLoading(true);
      try {
        const results = await vehicleService.searchVehiclesByTerm(
          selectedSearch
        );
        setVehicles(results);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicles();
  }, [selectedSearch]);

  return (
    <div className="w-full">
      {/* Search Categories */}
      <div className="mb-2">
        <CategoryNav
          selectedCategory={"Electric"}
          onCategoryChange={setSelectedSearch}
        />
      </div>

      {/* Results count */}
      {/* <p className="text-sm text-gray-600 mb-4">
        Showing {vehicles.length} {vehicles.length === 1 ? "result" : "results"}{" "}
        for "{selectedSearch}"
      </p> */}

      {/* Loading state */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-gray-200"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 rounded mb-2 w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {vehicles.length > 0 ? (
              vehicles.map((vehicle) => (
                <div key={vehicle.id}>
                  <TrendingSearchCard
                    name={vehicle.name}
                    image={vehicle.image}
                    price={vehicle.price}
                    mileage={vehicle.mileage}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">
                  No vehicles found matching &quot;{selectedSearch}&quot;
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Try another search term
                </p>
              </div>
            )}
          </div>

          {/* Footer Link */}
          {vehicles.length > 0 && (
            <div className="mt-4">
              <Link
                href={`/search?q=${encodeURIComponent(selectedSearch)}`}
                className="inline-flex underline items-center font-medium"
              >
                See more {selectedSearch}
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}

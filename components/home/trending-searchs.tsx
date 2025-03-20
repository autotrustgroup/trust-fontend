"use client";

import { vehicleService } from "@/lib/data/api/vehicle-service";
import { trendingSearchTerms } from "@/lib/data/mock/search-terms";
import { cn } from "@/lib/utils";
import { Vehicle } from "@/types/vehicle";
import { ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import TrendingSearchCard from "./cards/TrendingSearchCard";

export default function TrendingSearches() {
  const [selectedSearch, setSelectedSearch] =
    React.useState<string>("Used Under $15K");
  const [vehicles, setVehicles] = React.useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

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

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      {/* Search Categories */}
      <div className="relative mb-8">
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mb-4"
        >
          {trendingSearchTerms.map((search) => (
            <button
              key={search}
              onClick={() => setSelectedSearch(search)}
              className={cn(
                "h-10 px-5 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center",
                selectedSearch === search
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
                  : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-100"
              )}
            >
              {selectedSearch === search && <Search className="w-4 h-4 mr-2" />}
              {search}
            </button>
          ))}
        </div>

        {/* Scroll button */}
        <div className="absolute right-0 top-0 hidden h-full md:flex items-center">
          <button
            onClick={scrollRight}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm hover:bg-gray-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-600 mb-4">
        Showing {vehicles.length} {vehicles.length === 1 ? "result" : "results"}{" "}
        for "{selectedSearch}"
      </p>

      {/* Loading state */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm animate-pulse"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
                  No vehicles found matching "{selectedSearch}"
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Try another search term
                </p>
              </div>
            )}
          </div>

          {/* Footer Link */}
          {vehicles.length > 0 && (
            <div className="mt-8 text-center">
              <Link
                href={`/search?q=${encodeURIComponent(selectedSearch)}`}
                className="inline-flex items-center justify-center h-12 px-6 font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-md hover:opacity-90 transition-opacity"
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

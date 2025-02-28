"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  FilterPanel,
  LocationFilter,
  SortControls,
  CarListings,
} from "@/features/vehicle-search/components/search-results";
import { VehicleListing } from "@/features/vehicle-search/types/search-results";
import { mockListings } from "@/features/vehicle-search/data/mock-listings";

export default function ResultsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("price-asc");
  const [location, setLocation] = useState("Naperville, IL");
  const [radius, setRadius] = useState(30);
  const totalResults = 1253;

  // Handle radius change
  const handleRadiusChange = (newRadius: number) => {
    setRadius(newRadius);
  };

  // Handle sort change
  const handleSortChange = (newSort: string) => {
    setSortOption(newSort);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with location filter */}
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <LocationFilter
            location={location}
            radius={radius}
            onRadiusChange={handleRadiusChange}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar with filters */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-20">
              <FilterPanel
                totalMatches={totalResults}
                selectedMake="Ford"
                onClearFilters={() => console.log("Clear filters")}
                onSaveSearch={() => console.log("Save search")}
              />
            </div>
          </div>

          {/* Results area */}
          <div className="w-full lg:w-3/4">
            {/* Search results header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">
                Ford Vehicles in Naperville, IL
              </h1>
              <p className="text-gray-600">
                Showing electric vehicles within {radius} miles of your location
              </p>
            </div>

            {/* Sort controls */}
            <div className="mb-6">
              <SortControls
                sortOption={sortOption}
                onSortChange={handleSortChange}
                totalResults={totalResults}
              />
            </div>

            {/* Car listings */}
            <CarListings listings={mockListings} />

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </Button>

                {[...Array(5)].map((_, i) => {
                  const page = currentPage <= 3 ? i + 1 : currentPage + i - 2;
                  if (page > 0 && page <= Math.ceil(totalResults / 24)) {
                    return (
                      <Button
                        key={i}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </Button>
                    );
                  }
                  return null;
                })}

                <Button
                  variant="outline"
                  disabled={currentPage >= Math.ceil(totalResults / 24)}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter signup */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 mt-12 py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Get notified about new vehicles
          </h2>
          <p className="mb-6">
            Sign up to receive alerts when vehicles that match your search
            criteria become available.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Button size="lg">Sign Up</Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Auto Trust</h3>
            <p className="text-gray-300">
              Find your perfect vehicle with confidence. We connect you with
              trusted dealers nationwide.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Browse By</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Make & Model</li>
              <li>Body Style</li>
              <li>Price Range</li>
              <li>Featured Vehicles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Buying Guide</li>
              <li>Financing Options</li>
              <li>Vehicle History</li>
              <li>Car Reviews</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Support Center</li>
              <li>Dealer Partnership</li>
              <li>Careers</li>
              <li>Media Inquiries</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2024 Auto Trust. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

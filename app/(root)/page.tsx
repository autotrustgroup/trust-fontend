"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchForm } from "@/features/vehicle-search";
import WelcomeSection from "../../components/features/home/welcome-section";
import CategoryNav from "../../components/features/home/category-nav";
import PopularVehicleShowcase from "@/components/features/home/popular-vehicle-showcase";
import CompareSection from "../../components/features/home/compare-section";
import NewsSection from "../../components/features/home/news-section";
import Footer from "../../components/layout/footer";
import { VehicleType } from "@/types/vehicle";
import TrendingSearches from "@/components/features/home/trending-searchs";

// Custom fallback components for TrendingSearches
const TrendingSearchesFallback = () => (
  <div className="p-4 bg-white rounded-lg shadow-sm">
    <p className="text-center text-gray-500">
      Unable to load trending searches. Please try again later.
    </p>
    <button
      onClick={() => window.location.reload()}
      className="mt-2 mx-auto block text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
    >
      Retry
    </button>
  </div>
);

const TrendingSearchesLoading = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
    <div className="h-6 bg-gray-200 rounded w-2/3"></div>
    <div className="h-6 bg-gray-200 rounded w-1/2"></div>
    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
  </div>
);

// Helper function to convert VehicleType to CategoryNav expected format
const toCategoryNavFormat = (
  category: VehicleType
): "Electric" | "SUV" | "Sedan" | "Pickup Truck" => {
  switch (category) {
    case "electric":
      return "Electric";
    case "suv":
      return "SUV";
    case "sedan":
      return "Sedan";
    case "truck":
      return "Pickup Truck";
    default:
      return "Electric"; // fallback
  }
};

// Helper function for the reverse conversion
const toVehicleType = (
  category: "Electric" | "SUV" | "Sedan" | "Pickup Truck"
): VehicleType => {
  switch (category) {
    case "Electric":
      return "electric";
    case "SUV":
      return "suv";
    case "Sedan":
      return "sedan";
    case "Pickup Truck":
      return "truck";
    default:
      return "electric"; // fallback
  }
};

export default function Page() {
  const [selectedCategory, setSelectedCategory] =
    useState<VehicleType>("electric");
  const [trendingSearchesError, setTrendingSearchesError] = useState(false);
  const [isTrendingLoading, setIsTrendingLoading] = useState(true);

  // Handle category change with proper type conversion
  const handleCategoryChange = (
    category: "Electric" | "SUV" | "Sedan" | "Pickup Truck"
  ) => {
    setSelectedCategory(toVehicleType(category));
  };

  // Handle trending searches loading state
  useEffect(() => {
    // Simulate loading state for trending searches
    const timer = setTimeout(() => {
      setIsTrendingLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Enhanced Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1540066019964-1b2d4cdc4a41?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury car on the road"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay with text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-6 md:px-12 lg:px-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-xl mb-4 md:mb-6 leading-tight tracking-tight">
            Find your dream car today
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-lg mb-6 md:mb-8 leading-relaxed">
            Discover the perfect vehicle for your lifestyle with our extensive
            inventory
          </p>
        </div>

        {/* Search Form */}
        <div className="absolute -bottom-[88px] left-0 right-0 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
          <SearchForm className="shadow-lg rounded-lg border border-gray-100" />
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 mt-24 md:mt-28 lg:mt-32">
        {/* 2. Welcome Section with card-based design */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 lg:p-10 mb-16 md:mb-20 shadow-sm transition-shadow duration-300 hover:shadow-md">
          <WelcomeSection />
        </section>

        {/* 3. Popular Categories with improved spacing */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
              Popular categories
            </h2>
            <Link
              href="/all-categories"
              className="text-blue-600 hover:text-indigo-700 transition-colors duration-300 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded-sm"
              aria-label="View all vehicle categories"
            >
              View all categories
            </Link>
          </div>
          <div className="bg-white rounded-xl p-1 md:p-2 shadow-sm hover:shadow-md transition-all duration-300">
            <CategoryNav
              selectedCategory={toCategoryNavFormat(selectedCategory)}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </section>

        {/* 4. Vehicle Showcase with shadow effect */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}{" "}
            Vehicles
          </h2>
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8 border border-gray-100">
            <PopularVehicleShowcase category={selectedCategory} />
          </div>
        </section>

        {/* 5. Trending Searches with improved visual appeal */}
        <section className="mb-16 md:mb-20 bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
            Trending searches
          </h2>
          <div className="relative min-h-[150px]">
            {trendingSearchesError ? (
              <TrendingSearchesFallback />
            ) : isTrendingLoading ? (
              <TrendingSearchesLoading />
            ) : (
              <TrendingSearches />
            )}
          </div>
        </section>

        {/* 6. Compare Section with enhanced visuals */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
              Compare vehicles
            </h2>
            <Link
              href="/compare"
              className="text-blue-600 hover:text-indigo-700 transition-colors duration-300 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded-sm"
              aria-label="See all vehicle comparisons"
            >
              See all comparisons
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8 border border-gray-100">
            <CompareSection />
          </div>
        </section>

        {/* 7. News Section with card-based design */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
              Latest automotive news
            </h2>
            <Link
              href="/news"
              className="text-blue-600 hover:text-indigo-700 transition-colors duration-300 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded-sm"
              aria-label="View all automotive news"
            >
              View all news
            </Link>
          </div>
          <NewsSection />
        </section>

        {/* Call to action section */}
        <section className="mb-16 md:mb-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 md:p-10 lg:p-12 text-white text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
            Ready to find your perfect vehicle?
          </h2>
          <p className="mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
            Our expert team is ready to help you find the right car at the right
            price
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shopping/new-cars"
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
              aria-label="Browse our selection of new cars"
            >
              Browse new cars
            </Link>
            <Link
              href="/shopping/used-cars"
              className="bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
              aria-label="Find used vehicles in our inventory"
            >
              Find used vehicles
            </Link>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <Footer />
    </div>
  );
}

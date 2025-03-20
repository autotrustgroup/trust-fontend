"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/common-components/container";
import CategoryNav from "@/components/home/category-nav";
import CompareSection from "@/components/home/compare-section";
import NewsSection from "@/components/home/news-section";
import SellYourCar from "@/components/home/banners/sell-your-car";
import PopularVehicleShowcase from "@/components/home/popular-vehicle-showcase";
import TrendingSearches from "@/components/home/trending-searchs";
import WelcomeSection from "@/components/home/welcome-section";
import { SearchForm } from "@/features/vehicle-search";
import { VehicleType } from "@/types/vehicle";
import YourGarage from "@/components/home/banners/your-gurage";
import ResearchNewVehicles from "@/components/home/banners/research-new-vehicles";

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
    <Container>
      <div className="min-h-screen bg-white">
        {/* 1. Enhanced Hero Section */}
        <section className="relative">
          {/* Overlay with text */}
          <div
            className="flex flex-col justify-between min-h-[330px] bg-black"
            style={{
              backgroundImage: "url('/hero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white max-w-lg p-5"
              style={{ lineHeight: "80px" }}
            >
              <span className="bg-[rgba(33,33,33,.75)] px-2">
                Imagine the possibilities
              </span>
            </h1>

            <div className="flex align-middle items-center text-lg md:text-xl text-white/90 bg-black max-w-[370px] px-3 py-2">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/nissanLogo.png"
                  alt="Cars.com"
                  width={115}
                  height={45}
                  className="h-[45px] w-[115px] object-contain"
                />
              </Link>
              <div className="ml-4 text-xs">
                <div className="inline">
                  <span className="uppercase font-bold">Sponsored:</span> Buckle
                  up for your next{" "}
                  <span className="flex items-center align-middle gap-1">
                    adventure.{" "}
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Interface / External_Link">
                        <path
                          id="Vector"
                          d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
                          stroke="white"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <div className="">The Nissan Now Sales Event</div>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div className="">
            <SearchForm className="shadow-lg border border-gray-100" />
          </div>
        </section>

        <main>
          {/* 2. Welcome Section with card-based design */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 lg:p-10 mb-16 md:mb-20 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <WelcomeSection />
          </section>

          {/* 3. Popular Categories with improved spacing */}
          <section className="mb-1 md:mb-0.5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
              <h2 className="font-bold text-grey-900 text-h2 leading-tight">
                Popular categories
              </h2>
            </div>
            <CategoryNav
              selectedCategory={toCategoryNavFormat(selectedCategory)}
              onCategoryChange={handleCategoryChange}
            />
          </section>

          {/* 4. Vehicle Showcase with shadow effect */}
          <section className="mb-16 md:mb-20">
            <PopularVehicleShowcase category={selectedCategory} />
          </section>
          {/* Banners */}
          <section>
            <YourGarage />
            <SellYourCar />
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

          {/* Banners 2 */}
          <section>
          <ResearchNewVehicles />
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
              Our expert team is ready to help you find the right car at the
              right price
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
        {/* <Footer /> */}
      </div>
    </Container>
  );
}

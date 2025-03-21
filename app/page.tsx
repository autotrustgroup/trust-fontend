"use client";

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
import HeroSection from "@/components/common-components/HeroSection/heroSection";
import { popularSearch } from "@/components/home/constants/popular-search";
import dynamic from "next/dynamic";

const CustomAccordion = dynamic(
  () => import("@/components/common-components/CutomAccordion"),
  {
    ssr: false,
  }
);
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
      <Container>
        {/* 1. Enhanced Hero Section */}
        <section className="relative">
          {/* Overlay with text */}
          <HeroSection
            backgroundImage={"/hero.png"}
            heading={"Imagine the possibilities"}
            sponsorLogo={"/nissanLogo.png"}
            sponsorTextPrimary={"Buckle up for your next"}
            sponsorTextSecondary={"adventure."}
            sponsorTextTertiary={"The Nissan Now Sales Event"}
          />

          {/* Search Form */}
          <div className="">
            <SearchForm className="shadow-lg border border-gray-100" />
          </div>
        </section>

        {/* 2. Welcome Section with card-based design */}
        {/* <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 lg:p-10 mb-16 md:mb-20 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <WelcomeSection />
          </section> */}

        {/* 3. Popular Categories with improved spacing */}
        <section className="my-6 md:my-8">
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
      </Container>
      {/* 5. Trending Searches with improved visual appeal */}
      <section className="mb-16 md:mb-20 bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100">
        <Container>
          <h2 className="text-h2 font-bold mb-2 text-black">
            Trending searches near you
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
        </Container>
      </section>
      <Container>
        {/* Banners 2 */}
        <section>
          <ResearchNewVehicles />
        </section>

        {/* 6. Compare Section with enhanced visuals */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 md:mb-8">
            <h2 className="text-h2 font-bold leading-tight">
              Compare top rated vehicles
            </h2>
          </div>
          <CompareSection />
        </section>

        {/* 7. News Section with card-based design */}
        <section className="mb-16 md:mb-20">
          <NewsSection />
        </section>

        {/* Call to action section */}
        {/* <section className="mb-16 md:mb-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 md:p-10 lg:p-12 text-white text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
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
          </section> */}
      </Container>
      <section className="md:py-16 bg-gray-50 border-gray-100 ">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
            <h2 className="font-bold text-grey-900 text-h2 leading-tight">
              Popular searches
            </h2>
          </div>
          <CustomAccordion data={popularSearch} />
        </Container>
      </section>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchForm from "../../components/features/search-form/search-form";
import CategoryNav from "../../components/features/home/category-nav";
import VehicleShowcase from "../../components/features/home/vehicle-showcase";
import CompareSection from "../../components/features/home/compare-section";
import NewsSection from "../../components/features/home/news-section";
import Footer from "../../components/layout/footer";
import TrendingSearches from "@/components/features/home/trending-searchs";
import type { VehicleCategory } from "@/lib/data";
import { vehicleData } from "@/lib/data";
import RecentlyViewed from "@/components/features/home/recently-viewed";
import PopularCategories from "@/components/features/home/popular-categories";
import LocalInventory from "@/components/features/home/local-inventory";
import SellYourCar from "@/components/features/home/sell-your-car";
import PopularSearches from "@/components/features/home/popular-searches";

export default function Page() {
  const [selectedCategory, setSelectedCategory] =
    useState<VehicleCategory>("Electric");
  const [recentlyViewedVehicles, setRecentlyViewedVehicles] = useState<any[]>(
    []
  );

  // Simulate recently viewed vehicles from local storage
  useEffect(() => {
    // This would normally come from localStorage or user session
    setRecentlyViewedVehicles(
      [
        {
          id: 1,
          year: 2022,
          make: "Honda",
          model: "CR-V Hybrid",
          price: 35900,
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.02.04-y9CrUgHuyjpgSTV6CGn4wQm3fzf5eb.png",
          mileage: "12,420",
          dealer: "Honda of Seattle",
          location: "Seattle, WA",
        },
        {
          id: 2,
          year: 2023,
          make: "Toyota",
          model: "Camry Hybrid XLE",
          price: 32400,
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.02.04-y9CrUgHuyjpgSTV6CGn4wQm3fzf5eb.png",
          mileage: "8,630",
          dealer: "Toyota of Bellevue",
          location: "Bellevue, WA",
        },
        {
          id: 3,
          year: 2022,
          make: "Kia",
          model: "EV6 GT-Line AWD",
          price: 47990,
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.02.04-y9CrUgHuyjpgSTV6CGn4wQm3fzf5eb.png",
          mileage: "15,780",
          dealer: "Kia of Everett",
          location: "Everett, WA",
        },
        {
          id: 4,
          year: 2023,
          make: "Ford",
          model: "F-150 Platinum",
          price: 58720,
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.02.04-y9CrUgHuyjpgSTV6CGn4wQm3fzf5eb.png",
          mileage: "5,320",
          dealer: "Ford of Kirkland",
          location: "Kirkland, WA",
        },
      ].slice(0, 4)
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with prominent single vehicle */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.02.04-y9CrUgHuyjpgSTV6CGn4wQm3fzf5eb.png"
          alt="Imagine the possibilities"
          fill
          className="object-cover"
          priority
        />

        {/* Hero text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-12 bg-gradient-to-r from-black/40 to-transparent">
          <h1 className="text-5xl font-bold text-white mb-4 max-w-md">
            Imagine the possibilities
          </h1>
          <p className="text-xl text-white max-w-md mb-8">
            Find your perfect vehicle today
          </p>
        </div>

        {/* Search Form - positioned at bottom of hero */}
        <div className="absolute -bottom-[60px] left-0 right-0 mx-auto max-w-5xl px-4">
          <SearchForm className="shadow-xl rounded-lg" />
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 mt-24">
        {/* Recently Viewed Section */}
        {recentlyViewedVehicles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Welcome back!</h2>
            <p className="text-gray-600 mb-6">
              Check out the vehicles you've recently viewed
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <RecentlyViewed vehicles={recentlyViewedVehicles} />
            </div>
          </section>
        )}

        {/* Popular Categories with Icons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Popular categories</h2>
          <PopularCategories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        {/* Vehicle Showcase - All New EVs */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All new EVs</h2>
            <Link
              href="/shop/all-evs"
              className="text-blue-600 hover:underline"
            >
              See more electric cars
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            Experience the latest electric vehicles with cutting-edge technology
          </p>
          <VehicleShowcase category="Electric" />
        </section>

        {/* Local Trending Section */}
        <section className="mb-16 bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            Trending searches near you
          </h2>
          <LocalInventory />
        </section>

        {/* Sell Your Car Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Sell your car your way</h2>
          <SellYourCar />
        </section>

        {/* Compare Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Compare top rated vehicles
          </h2>
          <CompareSection />
        </section>

        {/* Research & New Vehicle Section */}
        <section className="mb-16 bg-gray-100 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Ready for a new ride?</h2>
              <h3 className="text-xl mb-4">Explore the latest vehicles</h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Find your perfect match</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Compare prices across dealers</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Get expert buying advice</span>
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
                Explore new models
              </button>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg"
                alt="New vehicle research"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">News & reviews</h2>
          <NewsSection />
        </section>

        {/* Popular Searches */}
        <section className="mb-16 bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Popular searches</h2>
          <PopularSearches />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

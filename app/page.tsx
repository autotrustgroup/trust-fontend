"use client";

import { useState } from "react";
import Image from "next/image";
import SearchForm from "../components/features/search/SearchForm";
import WelcomeSection from "../components/features/home/welcome-section";
import CategoryNav from "../components/features/home/category-nav";
import VehicleShowcase from "../components/features/home/vehicle-showcase";
import CompareSection from "../components/features/home/compare-section";
import NewsSection from "../components/features/home/news-section";
import Footer from "../components/layout/footer";
import type { VehicleCategory } from "@/lib/data";
import TrendingSearches from "@/components/features/home/trending-searchs";

export default function Page() {
  const [selectedCategory, setSelectedCategory] =
    useState<VehicleCategory>("Electric");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.02.04-y9CrUgHuyjpgSTV6CGn4wQm3fzf5eb.png"
          alt="2025 Polestar 3 Electric SUV"
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-0">
          <div className="container mx-auto h-full relative">
            <div className="absolute top-8 left-4 bg-black/80 p-4">
              <h1 className="text-4xl font-bold text-white">
                Imagine the
                <br />
                possibilities
              </h1>
            </div>
          </div>
        </div> */}

        {/* Search Form */}
        <div className="absolute -bottom-[88px] left-0 right-0">
          <SearchForm />
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 mt-24">
        {/* Welcome Section */}
        <WelcomeSection />

        {/* Popular Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Popular categories</h2>
          <CategoryNav
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        {/* Vehicle Showcase */}
        <VehicleShowcase category={selectedCategory} />

        <TrendingSearches />

        {/* Compare Section */}
        <CompareSection />

        {/* News Section */}
        <NewsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

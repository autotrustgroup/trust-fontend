"use client";

import { useState } from "react";
import Image from "next/image";
import SearchForm from "./components/SearchForm";
import CategoryNav from "./components/category-nav";
import VehicleShowcase from "./components/vehicle-showcase";
import CompareSection from "./components/compare-section";
import NewsSection from "./components/news-section";
import Footer from "./components/footer";
import type { VehicleCategory } from "@/lib/data";

export default function Page() {
  const [selectedCategory, setSelectedCategory] =
    useState<VehicleCategory>("Electric");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-22%20at%2019.36.34-9MtAIlMAsrnCZeSGUqx8EymIcmleLW.png"
          alt="White SUV on city street"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0">
          <div className="container mx-auto h-full relative">
            <div className="absolute top-8 left-4 bg-black/80 p-4">
              <h1 className="text-4xl font-bold text-white">
                Imagine the
                <br />
                possibilities
              </h1>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="absolute -bottom-[88px] left-0 right-0">
          <SearchForm />
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 mt-24">
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

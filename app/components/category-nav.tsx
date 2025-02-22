"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VehicleCategory } from "@/lib/data";

// Categories from the screenshot
const categories = [
  "Electric",
  "SUV",
  "Sedan",
  "Pickup Truck",
  "Luxury",
  "Crossover",
  "Hybrid",
  "Diesel",
  "Coupe",
  "Hatchback",
  "Wagon",
  "Convertible",
] as const;

interface CategoryNavProps {
  selectedCategory: VehicleCategory;
  onCategoryChange: (category: VehicleCategory) => void;
  className?: string;
}

export default function CategoryNav({
  selectedCategory,
  onCategoryChange,
  className,
}: CategoryNavProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mb-4"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category as VehicleCategory)}
            className={cn(
              "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors",
              "hover:bg-gray-200",
              selectedCategory === category
                ? "bg-black text-white hover:bg-black/90"
                : "bg-[#F3F3F3] text-gray-900"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Scroll button - only show on desktop when content overflows */}
      <div className="absolute right-0 top-0 hidden h-full md:flex items-center">
        <button
          onClick={scrollRight}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

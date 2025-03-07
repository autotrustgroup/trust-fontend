"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VehicleCategory } from "@/lib/data";

// Categories as simple text
const categories = [
  { id: "Electric", name: "Electric" },
  { id: "SUV", name: "SUV" },
  { id: "Sedan", name: "Sedan" },
  { id: "Pickup Truck", name: "Pickup Truck" },
  { id: "Luxury", name: "Luxury" },
  { id: "Crossover", name: "Crossover" },
  { id: "Hybrid", name: "Hybrid" },
  { id: "Diesel", name: "Diesel" },
  { id: "Coupe", name: "Coupe" },
  { id: "Hatchback", name: "Hatchback" },
  { id: "Wagon", name: "Wagon" },
  { id: "Convertible", name: "Convertible" },
];

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
        className="flex gap-3 overflow-x-auto py-2 scrollbar-hide"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id as VehicleCategory)}
            className={cn(
              "px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors",
              selectedCategory === category.id
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Scroll button - only show on desktop when content overflows */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center">
        <button
          onClick={scrollRight}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 border border-gray-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

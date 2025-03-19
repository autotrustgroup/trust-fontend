"use client";

import * as React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
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
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  // Handle scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  // Handle scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  // Check scroll position and update button visibility
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setIsAtStart(container.scrollLeft <= 0);
      setIsAtEnd(
        Math.ceil(container.scrollLeft + container.clientWidth) >=
          container.scrollWidth
      );
    }
  };

  React.useEffect(() => {
    // Set up scroll event listener
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    // Cleanup on component unmount
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={cn("relative", className)}>
      {/* Gradient overlay with minimized white effect */}
      {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white" style={{backgroundSize: '100% 80%'}} /> */}

      <div
        ref={scrollContainerRef}
        className="flex gap-3 py-2 overflow-x-auto hide-scrollbar"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id as VehicleCategory)}
            className={cn(
              "px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors",
              selectedCategory === category.id
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800 hover:bg-black hover:text-white"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Scroll buttons - Left and Right */}
      <div
        className={cn(
          "absolute gradient-transparent-white-left pr-4 left-0 top-1/2 -translate-y-1/2 hidden md:flex items-center",
          { "md:hidden": isAtStart }
        )}
      >
        <button
          onClick={scrollLeft}
          className={cn(
            "flex h-10 w-10 group items-center justify-center rounded-full bg-black shadow-md border border-gray-100 transition-colors",
            { "opacity-0 pointer-events-none": isAtStart }
          )}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
      </div>

      <div
        className={cn(
          "absolute gradient-transparent-white-right pl-4 right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center",
          { "md:hidden": isAtEnd }
        )}
      >
        <button
          onClick={scrollRight}
          className={cn(
            "flex h-10 w-10 group items-center justify-center rounded-full bg-black shadow-md border border-gray-100 transition-colors ",
            { "opacity-0 pointer-events-none": isAtEnd }
          )}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}

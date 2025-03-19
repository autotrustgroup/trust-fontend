"use client";

import type { VehicleCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { categories } from "./constants/category";

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

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={cn("relative", className)}>
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
                ? "bg-grey-900 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-grey-900 hover:text-white"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div
        className={cn(
          "absolute gradient-transparent-white-left pr-4 left-0 top-1/2 -translate-y-1/2 hidden md:flex items-center",
          { "md:hidden": isAtStart }
        )}
      >
        <button
          onClick={scrollLeft}
          className={cn(
            "flex h-10 w-10 group items-center justify-center rounded-full bg-grey-900 shadow-md border border-gray-100 transition-colors",
            { "opacity-0 pointer-events-none": isAtStart }
          )}
          aria-label="Scroll left"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
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
            "flex h-10 w-10 group items-center justify-center rounded-full bg-grey-900 shadow-md border border-gray-100 transition-colors ",
            { "opacity-0 pointer-events-none": isAtEnd }
          )}
          aria-label="Scroll right"
        >
          <ArrowRight className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}

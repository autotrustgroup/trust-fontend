"use client";

import { ChevronDown } from "lucide-react";
import type { SortOption } from "@/types";

interface SortControlsProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  totalResults: number;
}

export function SortControls({
  sortOption,
  onSortChange,
  totalResults,
}: SortControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 border border-gray-200 rounded-lg">
      <p className="text-gray-600">
        <span className="font-semibold">{totalResults}</span> vehicles available
      </p>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-gray-600">
          Sort by:
        </label>
        <div className="relative">
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="appearance-none bg-white border rounded px-3 py-1.5 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B45F7]"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="year-desc">Year: Newest First</option>
            <option value="year-asc">Year: Oldest First</option>
            <option value="mileage-asc">Mileage: Low to High</option>
            <option value="mileage-desc">Mileage: High to Low</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-400" />
        </div>
      </div>
    </div>
  );
}

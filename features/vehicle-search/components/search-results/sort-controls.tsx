"use client";

import { ChevronDown, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { SortOption } from "../../types/search-results";

interface SortControlsProps {
  sortOption: string;
  onSortChange: (option: string) => void;
  totalResults?: number;
}

/**
 * Controls for sorting search results
 */
export default function SortControls({
  sortOption,
  onSortChange,
  totalResults = 0,
}: SortControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 sm:p-5 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600">
          <ArrowUpDown className="h-4 w-4" />
        </div>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">
            {totalResults.toLocaleString()}
          </span>{" "}
          vehicles available
        </p>
      </div>

      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="hidden sm:flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900 rounded-md border border-gray-200 hover:border-gray-300 bg-white transition-colors">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Filters</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900 rounded-md border border-gray-200 hover:border-gray-300 bg-white transition-colors">
            <span>Save search</span>
          </button>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <label
            htmlFor="sort"
            className="text-sm text-gray-600 whitespace-nowrap"
          >
            Sort by:
          </label>
          <div className="relative">
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1.5 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Year: Newest First</option>
              <option value="year-asc">Year: Oldest First</option>
              <option value="mileage-asc">Mileage: Low to High</option>
              <option value="mileage-desc">Mileage: High to Low</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { MapPin, ChevronDown } from "lucide-react";

interface LocationFilterProps {
  location?: string;
  radius?: number;
  onLocationChange?: (location: string) => void;
  onRadiusChange?: (radius: number) => void;
}

/**
 * Filter for location-based search results
 */
export default function LocationFilter({
  location = "Seattle, WA",
  radius = 25,
  onLocationChange,
  onRadiusChange,
}: LocationFilterProps) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4 text-sm">
      <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors group cursor-pointer">
        <MapPin className="h-4 w-4 text-blue-600 group-hover:text-blue-700 transition-colors" />
        <span className="font-medium">{location}</span>
        <span className="text-gray-400 mx-1">—</span>
        <div className="relative">
          <select
            aria-label="Change search radius"
            className="appearance-none bg-transparent pr-6 py-1 pl-0 cursor-pointer text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors border-none"
            value={radius}
            onChange={(e) => onRadiusChange?.(Number(e.target.value))}
          >
            <option value="25">25 miles</option>
            <option value="50">50 miles</option>
            <option value="75">75 miles</option>
            <option value="100">100 miles</option>
            <option value="200">200 miles</option>
          </select>
          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <button className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">
          Edit location
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded px-1">
          <span>Advanced search</span>
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

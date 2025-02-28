"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Heart, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface FilterPanelProps {
  totalMatches?: number;
  onFilterChange?: (filters: Record<string, any>) => void;
  onSaveSearch?: () => void;
  onClearFilters?: () => void;
  selectedMake?: string;
  initialFilters?: Record<string, any>;
}

// Define the type for sections
interface FilterSections {
  [key: string]: boolean;
  basics: boolean;
  models: boolean;
  price: boolean;
  financing: boolean;
  dealRating: boolean;
}

/**
 * Comprehensive filter panel for search results
 */
export default function FilterPanel({
  totalMatches = 10000,
  onFilterChange,
  onSaveSearch,
  onClearFilters,
  selectedMake = "Toyota",
  initialFilters = {},
}: FilterPanelProps) {
  const [sections, setSections] = useState<FilterSections>({
    basics: true,
    models: true,
    price: true,
    financing: false,
    dealRating: true,
  });

  const [filters, setFilters] = useState({
    condition: initialFilters.condition || "all",
    make: initialFilters.make || selectedMake,
    distance: initialFilters.distance || 30,
    zip: initialFilters.zip || "",
    includeShippable: initialFilters.includeShippable || true,
    models: initialFilters.models || [],
    minPrice: initialFilters.minPrice || 0,
    maxPrice: initialFilters.maxPrice || 200000,
    minYear: initialFilters.minYear || 0,
    maxYear: initialFilters.maxYear || 2025,
    showElectric: initialFilters.showElectric || false,
    dealRating: initialFilters.dealRating || [],
  });

  const [paymentType, setPaymentType] = useState<"full" | "monthly">("full");

  // Update parent component when filters change
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  }, [filters, onFilterChange]);

  const toggleSection = (section: string) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Update filter handlers
  const updateFilter = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleModel = (model: string) => {
    setFilters((prev) => {
      const currentModels = [...(prev.models || [])];
      const modelIndex = currentModels.indexOf(model);

      if (modelIndex >= 0) {
        currentModels.splice(modelIndex, 1);
      } else {
        currentModels.push(model);
      }

      return { ...prev, models: currentModels };
    });
  };

  const toggleDealRating = (rating: string) => {
    setFilters((prev) => {
      const currentRatings = [...(prev.dealRating || [])];
      const ratingIndex = currentRatings.indexOf(rating);

      if (ratingIndex >= 0) {
        currentRatings.splice(ratingIndex, 1);
      } else {
        currentRatings.push(rating);
      }

      return { ...prev, dealRating: currentRatings };
    });
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">
            {totalMatches.toLocaleString()}+ matches
          </span>
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={onClearFilters}
          >
            Clear
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2">
          {filters.showElectric && (
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm">
              Electric
              <button
                className="hover:text-gray-700"
                onClick={() => updateFilter("showElectric", false)}
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          )}

          {filters.includeShippable && (
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm">
              Shippable
              <button
                className="hover:text-gray-700"
                onClick={() => updateFilter("includeShippable", false)}
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          )}

          {filters.make !== "all" && (
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm">
              {filters.make}
              <button
                className="hover:text-gray-700"
                onClick={() => updateFilter("make", "all")}
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          )}
        </div>

        {/* Save Search Button */}
        <button
          className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-full text-sm hover:border-gray-400"
          onClick={onSaveSearch}
        >
          <Heart className="h-4 w-4" />
          Save search
        </button>

        {/* Basics Section */}
        <div className="pt-2">
          <h2 className="text-lg font-semibold mb-4">Basics</h2>
          <div className="space-y-3">
            {/* New/Used Dropdown */}
            <div className="relative">
              <select
                className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={filters.condition}
                onChange={(e) => updateFilter("condition", e.target.value)}
              >
                <option value="all">New & Used</option>
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Make Dropdown */}
            <div className="relative">
              <select
                className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={filters.make}
                onChange={(e) => updateFilter("make", e.target.value)}
              >
                <option value="all">All Makes</option>
                <option value="Ford">Ford</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Distance and ZIP */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <select
                  className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={filters.distance}
                  onChange={(e) =>
                    updateFilter("distance", parseInt(e.target.value))
                  }
                >
                  <option value="30">30 miles</option>
                  <option value="50">50 miles</option>
                  <option value="100">100 miles</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              <input
                type="text"
                placeholder="ZIP"
                value={filters.zip}
                onChange={(e) => updateFilter("zip", e.target.value)}
                className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Include shippable cars */}
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox
                className="mt-0.5 rounded border-gray-300"
                checked={filters.includeShippable}
                onCheckedChange={(checked) =>
                  updateFilter("includeShippable", !!checked)
                }
              />
              <span className="text-sm">Include shippable cars</span>
            </label>

            {/* Electric Vehicles */}
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox
                className="mt-0.5 rounded border-gray-300"
                checked={filters.showElectric}
                onCheckedChange={(checked) =>
                  updateFilter("showElectric", !!checked)
                }
              />
              <span className="text-sm">Show electric vehicles</span>
            </label>
          </div>
        </div>

        {/* Models Section - conditionally rendered based on make */}
        {filters.make !== "all" && (
          <div className="pt-4 border-t">
            <h2 className="text-lg font-semibold mb-4">
              {filters.make} models
            </h2>
            <div className="space-y-3">
              {filters.make === "Ford" && (
                <>
                  {[
                    ["F-150", "7,862"],
                    ["F-150 Lightning", "6"],
                    ["Mustang", "115"],
                    ["Explorer", "1,111"],
                    ["Bronco", "578"],
                    ["Escape", "2,258"],
                  ].map(([model, count]) => (
                    <label
                      key={model}
                      className="flex items-start gap-2 cursor-pointer"
                    >
                      <Checkbox
                        className="mt-0.5 rounded border-gray-300"
                        checked={filters.models?.includes(model)}
                        onCheckedChange={() => toggleModel(model)}
                      />
                      <span className="text-sm flex-1">
                        {model}
                        <span className="text-gray-500 ml-1">({count})</span>
                      </span>
                    </label>
                  ))}
                </>
              )}

              {filters.make === "Audi" && (
                <>
                  {[
                    ["A4", "7,862"],
                    ["Q5", "6"],
                    ["e-tron", "115"],
                    ["Q7", "1,111"],
                    ["A6", "578"],
                    ["Q3", "2,258"],
                  ].map(([model, count]) => (
                    <label
                      key={model}
                      className="flex items-start gap-2 cursor-pointer"
                    >
                      <Checkbox
                        className="mt-0.5 rounded border-gray-300"
                        checked={filters.models?.includes(model)}
                        onCheckedChange={() => toggleModel(model)}
                      />
                      <span className="text-sm flex-1">
                        {model}
                        <span className="text-gray-500 ml-1">({count})</span>
                      </span>
                    </label>
                  ))}
                </>
              )}
            </div>
          </div>
        )}

        {/* Price & Payment Section */}
        <div className="pt-4 border-t">
          <h2 className="text-lg font-semibold mb-4">Price & payment</h2>

          {/* Payment Type Toggle */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-full mb-4">
            <button
              className={cn(
                "py-2 text-sm font-medium rounded-full transition-colors",
                paymentType === "full" ? "bg-white shadow" : "hover:bg-gray-50"
              )}
              onClick={() => setPaymentType("full")}
            >
              Full Price
            </button>
            <button
              className={cn(
                "py-2 text-sm font-medium rounded-full transition-colors",
                paymentType === "monthly"
                  ? "bg-white shadow"
                  : "hover:bg-gray-50"
              )}
              onClick={() => setPaymentType("monthly")}
            >
              Monthly
            </button>
          </div>

          {/* Price Range */}
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <select
                className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={filters.minPrice}
                onChange={(e) =>
                  updateFilter("minPrice", parseInt(e.target.value))
                }
              >
                <option value="0">Lowest</option>
                <option value="10000">$10,000</option>
                <option value="20000">$20,000</option>
                <option value="30000">$30,000</option>
                <option value="40000">$40,000</option>
                <option value="50000">$50,000</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={filters.maxPrice}
                onChange={(e) =>
                  updateFilter("maxPrice", parseInt(e.target.value))
                }
              >
                <option value="200000">Highest</option>
                <option value="50000">$50,000</option>
                <option value="75000">$75,000</option>
                <option value="100000">$100,000</option>
                <option value="150000">$150,000</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Deal Rating Section */}
        <div className="pt-4 border-t">
          <h2 className="text-lg font-semibold mb-4">Deal rating</h2>
          <div className="space-y-3">
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox
                className="mt-0.5 rounded border-gray-300"
                checked={filters.dealRating?.includes("great")}
                onCheckedChange={() => toggleDealRating("great")}
              />
              <span className="text-sm flex items-center gap-2">
                <span className="text-purple-600">+ Great Deal</span>
                <span className="text-gray-500">(14,153)</span>
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox
                className="mt-0.5 rounded border-gray-300"
                checked={filters.dealRating?.includes("good")}
                onCheckedChange={() => toggleDealRating("good")}
              />
              <span className="text-sm flex items-center gap-2">
                <span className="text-green-600">✓ Good Deal</span>
                <span className="text-gray-500">(60,392)</span>
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox
                className="mt-0.5 rounded border-gray-300"
                checked={filters.dealRating?.includes("fair")}
                onCheckedChange={() => toggleDealRating("fair")}
              />
              <span className="text-sm flex items-center gap-2">
                <span className="text-orange-600">→ Fair Deal</span>
                <span className="text-gray-500">(24,413)</span>
              </span>
            </label>

            {/* Year Range */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="relative">
                <select
                  className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={filters.minYear}
                  onChange={(e) =>
                    updateFilter("minYear", parseInt(e.target.value))
                  }
                >
                  <option value="0">Oldest</option>
                  <option value="2018">2018</option>
                  <option value="2020">2020</option>
                  <option value="2022">2022</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={filters.maxYear}
                  onChange={(e) =>
                    updateFilter("maxYear", parseInt(e.target.value))
                  }
                >
                  <option value="2025">Newest</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

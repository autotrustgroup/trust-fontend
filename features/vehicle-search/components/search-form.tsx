"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

import { useSearchForm } from "../hooks/use-search-form";
import { getTrendingSearches } from "../api/search-service";

import SearchNavigationBar from "./search-navigation-bar";
import CarsForSalesForm from "./cars-for-sales-form";
import SellYourCarForm from "./sell-your-car-form";

interface SearchFormProps {
  className?: string;
}

/**
 * Main search form component with tabs for different search types
 */
export default function SearchForm({ className }: SearchFormProps) {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);

  // Use our custom hook for form state management
  const {
    formState,
    buyParams,
    sellParams,
    switchTab,
    updateBuyParams,
    updateSellParams,
    submitBuyForm,
    submitSellForm,
  } = useSearchForm();

  // Handle form submission
  const handleBuySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitBuyForm()) {
      router.push("/shopping/results");
    }
  };

  const handleSellSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitSellForm()) {
      console.log("Sell form submitted successfully");
      // Handle successful submission (e.g., show confirmation, redirect)
    }
  };

  // Load trending searches
  useEffect(() => {
    const loadTrendingSearches = async () => {
      const searches = await getTrendingSearches();
      setTrendingSearches(searches.slice(0, 4)); // Show only first 4 trending searches
    };

    loadTrendingSearches();
  }, []);

  // Handle click outside to remove focus effect
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".search-form-container")) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={cn(
        "w-full bg-white rounded-2xl overflow-hidden transition-all duration-300 search-form-container backdrop-blur-sm",
        isFocused
          ? "shadow-xl ring-2 ring-indigo-100 border-2 border-indigo-200"
          : "shadow-md hover:shadow-lg border-2 border-gray-200",
        className
      )}
      onClick={() => setIsFocused(true)}
      style={{ borderRadius: "16px" }}
    >
      {/* Navigation Tabs - Enhanced with better visual hierarchy */}
      <div className="border-b border-gray-200">
        <SearchNavigationBar
          activeTab={formState.activeTab}
          onTabChange={switchTab}
        />
      </div>

      {/* Main content with improved spacing and visual hierarchy */}
      <div className="container mx-auto p-4 sm:p-4">
        <div className="h-[230px] overflow-y-auto custom-scrollbar px-1">
          {formState.activeTab === "buy" ? (
            <div className="space-y-4 py-1">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-800 text-base hidden md:block">
                  Find your perfect vehicle
                </h2>
                <div className="flex items-center gap-2 text-xs text-indigo-600 ml-auto">
                  <MapPin className="h-3 w-3" />
                  <span className="font-medium">Chicago, IL</span>
                </div>
              </div>

              <CarsForSalesForm
                searchParams={buyParams}
                onParamsChange={updateBuyParams}
                onSubmit={handleBuySubmit}
              />

              {/* Popular searches section with better visual design */}
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
                  <Sparkles className="h-2.5 w-2.5 text-indigo-500 mr-1" />
                  Popular:
                </span>
                {trendingSearches.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 cursor-pointer bg-blue-50/80 px-2.5 py-1 rounded-md transition-colors duration-200 border border-blue-100/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4 py-1">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-800 text-base">
                  Sell your car in 3 easy steps
                </h2>
                <p className="text-xs text-gray-600 ml-auto">
                  Get a competitive offer in minutes, not days
                </p>
              </div>

              <SellYourCarForm
                sellParams={sellParams}
                onParamsChange={updateSellParams}
                onSubmit={handleSellSubmit}
              />

              <div className="px-2 text-xs flex items-center bg-gray-50 p-2 rounded-md">
                <Search className="h-3 w-3 text-indigo-500 mr-2" />
                <span className="text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer font-medium transition-colors duration-200">
                  Not sure about selling? Get a free valuation first
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(99, 102, 241, 0.2);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(99, 102, 241, 0.4);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(99, 102, 241, 0.2) transparent;
        }
      `}</style>

      {/* Enhanced visual footer with improved accessibility and micro-interactions */}
      <div className="bg-gradient-to-r from-gray-50 via-blue-50/40 to-indigo-50/30 py-2 px-4 text-xs text-gray-700 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="flex items-center">
            <Search className="h-3.5 w-3.5 text-indigo-500 mr-1.5" />
            <span className="font-medium">
              {formState.activeTab === "buy"
                ? "1,432,571 vehicles available"
                : "Sell in minutes, not days"}
            </span>
          </div>
          <div>
            {formState.activeTab === "buy" ? (
              <button className="group flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200">
                Advanced search
                <ChevronRight className="h-3.5 w-3.5 ml-1 transform group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            ) : (
              <button className="group flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200">
                Learn more about our selling process
                <ChevronRight className="h-3.5 w-3.5 ml-1 transform group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

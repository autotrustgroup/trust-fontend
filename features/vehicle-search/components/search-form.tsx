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
    <div className={"w-full bg-[#f0f2f1]"} onClick={() => setIsFocused(true)}>
      {/* Navigation Tabs - Enhanced with better visual hierarchy */}
      <div className="">
        <SearchNavigationBar
          activeTab={formState.activeTab}
          onTabChange={switchTab}
        />
      </div>

      {/* Main content with improved spacing and visual hierarchy */}
      <div className="mx-auto p-4 sm:p-4">
        <div className="h-[230px] overflow-y-auto custom-scrollbar px-1">
          {formState.activeTab === "buy" ? (
            <div className="space-y-4 py-1">
              <CarsForSalesForm
                searchParams={buyParams}
                onParamsChange={updateBuyParams}
                onSubmit={handleBuySubmit}
              />
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
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
      className={"w-full min-h-[217px] bg-[#f0f2f1]"}
      onClick={() => setIsFocused(true)}
    >
      {/* Navigation Tabs - Enhanced with better visual hierarchy */}
      <div className="">
        <SearchNavigationBar
          activeTab={formState.activeTab}
          onTabChange={switchTab}
        />
      </div>

      {/* Main content with improved spacing and visual hierarchy */}
      <div className="mx-auto  px-4">
        <div className="overflow-y-auto custom-scrollbar">
          {formState.activeTab === "buy" ? (
            <div className="space-y-4 pt-4 pb-8">
              <CarsForSalesForm
                searchParams={buyParams}
                onParamsChange={updateBuyParams}
                onSubmit={handleBuySubmit}
              />
            </div>
          ) : (
            <div className="space-y-4 py-1">
              <SellYourCarForm
                sellParams={sellParams}
                onParamsChange={updateSellParams}
                onSubmit={handleSellSubmit}
              />
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

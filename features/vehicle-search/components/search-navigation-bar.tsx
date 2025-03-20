"use client";

import React from "react";
import { CarFront, BadgeDollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchFormState } from "../types/search-params";

interface NavigationBarProps {
  activeTab: SearchFormState["activeTab"];
  onTabChange: (tab: SearchFormState["activeTab"]) => void;
}

/**
 * Navigation tabs for the search form to switch between buying and selling modes
 */
const SearchNavigationBar: React.FC<NavigationBarProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="px-4">
      <div className="flex border-b border-gray-200 mb-4">
        <button
          onClick={() => onTabChange("buy")}
          className={`pt-4 px-4 text-base font-medium flex border-b-4 items-center gap-2 relative py-1 ${
            activeTab === "buy"
              ? "text-black-600 font-bold border-black"
              : "text-gray-600 border-transparent"
          }`}
          aria-label="Shop for cars"
          aria-pressed={activeTab === "buy"}
        >
          <span>Shop cars for sale</span>
        </button>
        <button
          onClick={() => onTabChange("sell")}
          className={`pt-4 border-b-4 px-4 text-base font-medium flex items-center gap-2 relative py-1 ${
            activeTab === "sell"
              ? "text-black-600 font-bold border-black "
              : "text-gray-600 border-transparent"
          }`}
          aria-label="Sell your car"
          aria-pressed={activeTab === "sell"}
        >
          <span>Sell your car</span>
        </button>
      </div>
    </div>
  );
};

export default SearchNavigationBar;

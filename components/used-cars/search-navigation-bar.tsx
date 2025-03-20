"use client";

import React from "react";
import { CarFront, BadgeDollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchFormState } from "@/features/vehicle-search/types/search-params-used-cars";

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
          onClick={() => onTabChange("make")}
          className={`pt-4 px-4 text-base font-medium flex border-b-4 items-center gap-2 relative py-1 ${
            activeTab === "make"
              ? "text-black-600 font-bold border-black"
              : "text-gray-600 border-transparent"
          }`}
          aria-label="Make"
          aria-pressed={activeTab === "make"}
        >
          <span>Make</span>
        </button>
        <button
          onClick={() => onTabChange("style")}
          className={`pt-4 border-b-4 px-4 text-base font-medium flex items-center gap-2 relative py-1 ${
            activeTab === "style"
              ? "text-black-600 font-bold border-black "
              : "text-gray-600 border-transparent"
          }`}
          aria-label="Body style"
          aria-pressed={activeTab === "style"}
        >
          <span>Body style</span>
        </button>
        <button
          onClick={() => onTabChange("electric")}
          className={`pt-4 border-b-4 px-4 text-base font-medium flex items-center gap-2 relative py-1 ${
            activeTab === "electric"
              ? "text-black-600 font-bold border-black "
              : "text-gray-600 border-transparent"
          }`}
          aria-label="Electric"
          aria-pressed={activeTab === "electric"}
        >
          <span>Electric</span>
        </button>
      </div>
    </div>
  );
};

export default SearchNavigationBar;

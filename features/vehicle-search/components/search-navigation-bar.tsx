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
    <div className="pt-4 px-4">
      <div className="flex border-b border-gray-200 ">
        <button
          onClick={() => onTabChange("buy")}
          className={`pt-5 px-4 text-base font-medium flex items-center gap-2 relative py-1 ${
            activeTab === "buy"
              ? "text-black-600 font-bold border-black border-b-2"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
          }`}
          aria-label="Shop for cars"
          aria-pressed={activeTab === "buy"}
        >
          {/* <CarFront
            className={cn(
              "w-4 h-4 transition-all duration-200",
              activeTab === "buy" ? "text-black-600" : "text-gray-500"
            )}
          /> */}
          <span>Shop cars for sale</span>
          {/* {activeTab === "buy" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black-600 rounded-t-full"></div>
          )} */}
        </button>
        <button
          onClick={() => onTabChange("sell")}
          className={`pt-5 px-4 text-base font-medium flex items-center gap-2 relative py-1 ${
            activeTab === "sell"
              ? "text-black-600 font-bold border-black border-b-2"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
          }`}
          aria-label="Sell your car"
          aria-pressed={activeTab === "sell"}
        >
          {/* <BadgeDollarSign
            className={cn(
              "w-4 h-4 transition-all duration-200",
              activeTab === "sell" ? "text-black-600" : "text-gray-500"
            )}
          /> */}
          <span>Sell your car</span>
          {/* {activeTab === "sell" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black-600 rounded-t-full"></div>
          )} */}
        </button>
      </div>
    </div>
  );
};

export default SearchNavigationBar;

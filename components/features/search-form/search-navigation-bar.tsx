import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface StateProps {
  activeTab: "buy" | "sell";
  setActiveTab: (tab: "buy" | "sell") => void;
}

const NavigationBar: React.FC<StateProps> = ({
  activeTab,
  setActiveTab,
}: StateProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex border-b border-[#E5E5E5]">
        <button
          onClick={() => setActiveTab("buy")}
          className={cn(
            "py-4 px-6 text-sm font-medium",
            activeTab === "buy"
              ? "border-b-2 border-black -mb-[1px] text-black"
              : "text-gray-600"
          )}
        >
          Shop cars for sale
        </button>
        <button
          onClick={() => setActiveTab("sell")}
          className={cn(
            "py-4 px-6 text-sm font-medium",
            activeTab === "sell"
              ? "border-b-2 border-black -mb-[1px] text-black"
              : "text-gray-600"
          )}
        >
          Sell your car
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;

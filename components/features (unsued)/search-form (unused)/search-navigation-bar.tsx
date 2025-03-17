import React from "react";
import { cn } from "@/lib/utils";
import { CarFront, BadgeDollarSign } from "lucide-react";

interface StateProps {
  activeTab: "buy" | "sell";
  setActiveTab: (tab: "buy" | "sell") => void;
}

const NavigationBar: React.FC<StateProps> = ({
  activeTab,
  setActiveTab,
}: StateProps) => {
  return (
    <div className="container mx-auto px-3 py-0.5">
      <div className="flex">
        <button
          onClick={() => setActiveTab("buy")}
          className={cn(
            "py-3 px-4 text-xs font-medium flex items-center gap-2 transition-all duration-200 relative",
            activeTab === "buy"
              ? "text-indigo-600 font-semibold"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
          )}
          aria-label="Shop for cars"
          aria-pressed={activeTab === "buy"}
        >
          <CarFront
            className={cn(
              "w-4 h-4 transition-all duration-200",
              activeTab === "buy" ? "text-indigo-600" : "text-gray-500"
            )}
          />
          <span>Shop cars for sale</span>
          {activeTab === "buy" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-t-full"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab("sell")}
          className={cn(
            "py-3 px-4 text-xs font-medium flex items-center gap-2 transition-all duration-200 relative",
            activeTab === "sell"
              ? "text-indigo-600 font-semibold"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
          )}
          aria-label="Sell your car"
          aria-pressed={activeTab === "sell"}
        >
          <BadgeDollarSign
            className={cn(
              "w-4 h-4 transition-all duration-200",
              activeTab === "sell" ? "text-indigo-600" : "text-gray-500"
            )}
          />
          <span>Sell your car</span>
          {activeTab === "sell" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-t-full"></div>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;

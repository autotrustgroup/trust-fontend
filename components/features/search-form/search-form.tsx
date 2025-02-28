"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import NavigationBar from "./search-navigation-bar";
import CarsForSalesForm from "./cars-for-sales-form";
import SellYourCarForm from "./sell-you-car-form";

interface SearchFormProps {
  className?: string;
}

export default function SearchForm({ className }: SearchFormProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (activeTab === "buy") {
      router.push("/shopping/results");
    } else {
      // Handle sell form submission
      console.log("Submitting sell form");
    }
  };

  return (
    <div className={cn("w-full bg-[#F3F3F3]", className)}>
      {/* Navigation Tabs */}
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Form Content */}
      <div className="container mx-auto p-4">
        {activeTab === "buy" ? (
          <CarsForSalesForm handleSubmit={handleSubmit} />
        ) : (
          <SellYourCarForm handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}

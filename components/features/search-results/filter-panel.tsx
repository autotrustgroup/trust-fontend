"use client";

import { useState } from "react";
import { ChevronDown, Heart, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export function FilterPanel() {
  const [sections, setSections] = useState({
    basics: true,
    models: true,
    price: true,
    financing: false,
    dealRating: true,
  });

  const [paymentType, setPaymentType] = useState<"full" | "monthly">("full");

  const toggleSection = (section: string) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">10,000+ matches</span>
          <button className="text-sm text-blue-600 hover:underline">
            Clear
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm">
            Shippable
            <button className="hover:text-gray-700">
              <X className="h-4 w-4" />
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm">
            Toyota
            <button className="hover:text-gray-700">
              <X className="h-4 w-4" />
            </button>
          </span>
        </div>

        {/* Save Search Button */}
        <button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-full text-sm hover:border-gray-400">
          <Heart className="h-4 w-4" />
          Save search
        </button>

        {/* Basics Section */}
        <div className="pt-2">
          <h2 className="text-lg font-semibold mb-4">Basics</h2>
          <div className="space-y-3">
            {/* New/Used Dropdown */}
            <div className="relative">
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>New & Used</option>
                <option>New</option>
                <option>Used</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Make Dropdown */}
            <div className="relative">
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Toyota</option>
                <option>Honda</option>
                <option>Ford</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Distance and ZIP */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>30 miles</option>
                  <option>50 miles</option>
                  <option>100 miles</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              <input
                type="text"
                placeholder="ZIP"
                className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Include shippable cars */}
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox className="mt-0.5 rounded border-gray-300" />
              <span className="text-sm">Include shippable cars</span>
            </label>
          </div>
        </div>

        {/* Toyota Models Section */}
        <div className="pt-4 border-t">
          <h2 className="text-lg font-semibold mb-4">Toyota models</h2>
          <div className="space-y-3">
            {[
              ["4Runner", "7,862"],
              ["4Runner Hybrid", "6"],
              ["86", "115"],
              ["Avalon", "1,111"],
              ["Avalon Hybrid", "578"],
              ["bZ4X", "2,258"],
            ].map(([model, count]) => (
              <label
                key={model}
                className="flex items-start gap-2 cursor-pointer"
              >
                <Checkbox className="mt-0.5 rounded border-gray-300" />
                <span className="text-sm flex-1">
                  {model}
                  <span className="text-gray-500 ml-1">({count})</span>
                </span>
              </label>
            ))}
          </div>
        </div>

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
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Lowest</option>
                <option>$10,000</option>
                <option>$20,000</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Highest</option>
                <option>$50,000</option>
                <option>$100,000</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Deal Rating Section */}
        <div className="pt-4 border-t px-4">
          <h2 className="text-lg font-semibold mb-4">Deal rating</h2>
          <div className="space-y-3">
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox className="mt-0.5 rounded border-gray-300" />
              <span className="text-sm flex items-center gap-2">
                <span className="text-purple-600">+ Great Deal</span>
                <span className="text-gray-500">(14,153)</span>
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox className="mt-0.5 rounded border-gray-300" />
              <span className="text-sm flex items-center gap-2">
                <span className="text-green-600">✓ Good Deal</span>
                <span className="text-gray-500">(60,392)</span>
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox className="mt-0.5 rounded border-gray-300" />
              <span className="text-sm flex items-center gap-2">
                <span className="text-orange-600">→ Fair Deal</span>
                <span className="text-gray-500">(24,413)</span>
              </span>
            </label>

            {/* Year Range */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="relative">
                <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Oldest</option>
                  {Array.from({ length: 30 }, (_, i) => 2024 - i)
                    .reverse()
                    .map((year) => (
                      <option key={year}>{year}</option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Newest</option>
                  {Array.from({ length: 30 }, (_, i) => 2024 - i).map(
                    (year) => (
                      <option key={year}>{year}</option>
                    )
                  )}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Mileage Dropdown */}
            <div className="relative mt-2">
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Any mileage</option>
                <option>Under 30,000</option>
                <option>Under 60,000</option>
                <option>Under 90,000</option>
                <option>Under 120,000</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Vehicle History Section */}
        <div className="pt-4 border-t px-4">
          <h2 className="text-lg font-semibold mb-4">Vehicle history</h2>
          <div className="space-y-3">
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox className="mt-0.5 rounded border-gray-300" />
              <span className="text-sm flex items-center gap-2">
                Clean title
                <span className="text-gray-500">(193,226)</span>
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox className="mt-0.5 rounded border-gray-300" />
              <span className="text-sm flex items-center gap-2">
                No accidents reported
                <span className="text-gray-500">(159,931)</span>
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox className="mt-0.5 rounded border-gray-300" />
              <span className="text-sm flex items-center gap-2">
                Personal use only (non fleet)
                <span className="text-gray-500">(159,204)</span>
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox className="mt-0.5 rounded border-gray-300" />
              <span className="text-sm flex items-center gap-2">
                Single owner
                <span className="text-gray-500">(155,068)</span>
              </span>
            </label>
          </div>
        </div>

        {/* Style Section */}
        <div className="pt-4 border-t px-4">
          <h2 className="text-lg font-semibold mb-4">Style</h2>
          <div className="space-y-3">
            {/* Body Style Dropdown */}
            <div className="relative">
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Body style</option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Truck</option>
                <option>Coupe</option>
                <option>Convertible</option>
                <option>Van</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Cab Type Dropdown */}
            <div className="relative">
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Cab type</option>
                <option>Crew Cab</option>
                <option>Extended Cab</option>
                <option>Regular Cab</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Exterior Color Dropdown */}
            <div className="relative">
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Exterior color</option>
                <option>Black</option>
                <option>White</option>
                <option>Silver</option>
                <option>Gray</option>
                <option>Red</option>
                <option>Blue</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Interior Color Dropdown */}
            <div className="relative">
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Interior color</option>
                <option>Black</option>
                <option>Gray</option>
                <option>Tan</option>
                <option>Beige</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Performance Section */}
        <div className="pt-4 border-t px-4 pb-4">
          <h2 className="text-lg font-semibold mb-4">Performance</h2>
          <div className="space-y-3">
            {/* Transmission Dropdown */}
            <div className="relative">
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Transmission</option>
                <option>Automatic</option>
                <option>Manual</option>
                <option>CVT</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Drivetrain Dropdown */}
            <div className="relative">
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Drivetrain</option>
                <option>AWD</option>
                <option>FWD</option>
                <option>RWD</option>
                <option>4WD</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Cylinders Dropdown */}
            <div className="relative">
              <select className="w-full h-12 px-3 border border-gray-300 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Cylinders</option>
                <option>4 cylinders</option>
                <option>6 cylinders</option>
                <option>8 cylinders</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

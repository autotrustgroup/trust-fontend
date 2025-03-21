"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { VehicleMakeSearchParams } from "@/features/vehicle-search/types/search-params-used-cars";
import { Checkbox } from "../ui/checkbox";

interface ElectricProps {
  searchParams?: VehicleMakeSearchParams;
  onParamsChange?: (params: Partial<VehicleMakeSearchParams>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * Form component for searching cars for sale
 */
const ElectricForm = ({
  searchParams = {},
  onParamsChange,
  onSubmit,
}: ElectricProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    onParamsChange?.({ [name]: value });
  };

  return (
    <form onSubmit={onSubmit} className="grid">
      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-1">
        {/* Buy form content with improved styling */}
        <div className="border border-b-0 md:border-b border-gray-500 px-4 pt-2 pb-4 md:pb-0 w-full appearance-none bg-white rounded-t-lg h-full gap-2 grid md:gap-0">
          <label className="text-xs text-[#555]">Fuel type</label>

          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="md:grid-cols-1 mb-4">
              <div className="w-fit">
                <label className="flex items-start gap-2 cursor-pointer">
                  <Checkbox className="mt-0.5 rounded border-gray-300" />
                  <span className="text-base flex items-center gap-2">
                    Electric
                  </span>
                </label>
              </div>
            </div>
            <div className="md:grid-cols-1">
              <div className="w-fit">
                <label className="flex items-start gap-2 cursor-pointer">
                  <Checkbox className="mt-0.5 rounded border-gray-300" />
                  <span className="text-base flex items-center gap-2">
                    Hybrid
                  </span>
                </label>
              </div>
            </div>
            <div className="md:grid-cols-1">
              <div className="w-fit">
                <label className="flex items-start gap-2 cursor-pointer">
                  <Checkbox className="mt-0.5 rounded border-gray-300" />
                  <span className="text-base flex items-center gap-2">
                    Plug-In-Hybrid
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second row with enhanced visual appeal */}
      <div className="grid grid-cols-4 md:grid-cols-7">
        <div className="col-span-4 md:col-span-2">
          <div className="relative h-full w-full">
            <select
              name="price"
              className="border border-r border-gray-500 px-4 pt-6 pb-2 w-full appearance-none bg-white pr-8 h-full md:border-t-0 md:rounded-bl-lg border-b-0 md:border-b md:border-r"
              value={searchParams.price || "2000"}
              onChange={handleChange}
              aria-label="Price"
            >
              <option value="">No max price</option>
              <option value="2000">$2,000</option>
              <option value="4000">$4,000</option>
              <option value="6000">$6,000</option>
              <option value="8000">$8,000</option>
              <option value="10000">$10,000</option>
              <option value="15000">$15,000</option>
              <option value="20000">$20,000</option>
              <option value="25000">$25,000</option>
              <option value="30000">$30,000</option>
              <option value="35000">$35,000</option>
              <option value="40000">$40,000</option>
              <option value="45000">$45,000</option>
              <option value="50000">$50,000</option>
              <option value="60000">$60,000</option>
              <option value="70000">$70,000</option>
              <option value="80000">$80,000</option>
              <option value="90000">$90,000</option>
              <option value="100000">$100,000</option>
            </select>
            <label className="absolute top-2 left-4 text-xs text-gray-500">
              Price
            </label>
            <ChevronDownIcon className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="col-span-2 md:col-span-2">
          <div className="relative h-full w-full">
            <select
              name="radius"
              className="border border-gray-500 px-4 pt-6 pb-2 w-full appearance-none bg-white pr-8 h-full md:border-t-0 md:border-l-0 border-r-0 md:border-r"
              value={searchParams.radius || 30}
              onChange={handleChange}
              aria-label="Select search radius"
            >
              <option value="10">10 miles</option>
              <option value="20">20 miles</option>
              <option value="30">30 miles</option>
              <option value="50">50 miles</option>
              <option value="100">100 miles</option>
              <option value="250">250 miles</option>
              <option value="500">500 miles</option>
            </select>
            <label className="absolute top-2 left-4 text-xs text-gray-500">
              Distance
            </label>
            <ChevronDownIcon className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="col-span-2 md:col-span-1">
          <Input
            className="md:border-0 md:border-b border-gray-500 h-full w-full bg-white peer md:border-r"
            type="text"
            name="zipCode"
            label="ZIP Code"
            value={searchParams.zipCode}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-4 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 border-gray-500 border border-t-0 border-l-0 font-semibold flex justify-center md:rounded-br-md rounded-b-lg md:rounded-bl-none"
            aria-label="Search for vehicles"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default ElectricForm;

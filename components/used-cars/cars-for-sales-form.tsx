"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { VehicleSearchParams } from "@/features/vehicle-search";

interface CarsForSalesFormProps {
  searchParams?: VehicleSearchParams;
  onParamsChange?: (params: Partial<VehicleSearchParams>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * Form component for searching cars for sale
 */
const CarsForSalesForm: React.FC<CarsForSalesFormProps> = ({
  searchParams = {},
  onParamsChange,
  onSubmit,
}) => {
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
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Buy form content with improved styling */}
        <div className="md:col-span-4">
          <div className="relative h-full">
            <select
              name="vehicleType"
              className="border border-gray-500 px-4 pt-6 pb-2 w-full appearance-none bg-white pr-8 h-full md:rounded-tl-lg md:rounded-tr-none rounded-t-lg border-b-0 md:border-b"
              value={searchParams.vehicleType || "used"}
              onChange={handleChange}
              aria-label="Select vehicle type"
            >
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="certified">Certified Pre-Owned</option>
            </select>
            <label className="absolute top-2 left-4 text-xs text-gray-500">
              New/used
            </label>
            <ChevronDownIcon className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="relative h-full">
            <select
              name="make"
              className="border border-gray-500 px-4 pt-6 pb-2 w-full appearance-none bg-white pr-8 h-full md:border-l-0 border-b-0 md:border-b"
              value={searchParams.make || ""}
              onChange={handleChange}
              aria-label="Select vehicle make"
            >
              <option value="">Any make</option>
              <option value="ford">Ford</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
              <option value="tesla">Tesla</option>
            </select>
            <label className="absolute top-2 left-4 text-xs text-gray-500">
              Make
            </label>
            <ChevronDownIcon className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="relative h-full">
            <select
              name="model"
              className="border border-gray-500 px-4 pt-6 pb-2 w-full appearance-none bg-white pr-8 h-full md:border-l-0 md:rounded-tr-lg border-b-0 md:border-b"
              value={searchParams.model || ""}
              onChange={handleChange}
              aria-label="Select vehicle model"
            >
              <option value="">Any model</option>
              <option value="mach-e">Mustang Mach-E</option>
              <option value="f150">F-150</option>
              <option value="bronco">Bronco</option>
              <option value="explorer">Explorer</option>
              <option value="escape">Escape</option>
            </select>
            <label className="absolute top-2 left-4 text-xs text-gray-500">
              Model
            </label>
            <ChevronDownIcon className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Second row with enhanced visual appeal */}
      <div className="grid grid-cols-4 md:grid-cols-12">
        <div className="col-span-2 md:col-span-4">
          <div className="relative h-full w-full">
            <select
              name="radius"
              className="border border-gray-500 px-4 pt-6 pb-2 w-full appearance-none bg-white pr-8 h-full md:border-t-0 md:rounded-bl-lg border-r-0 md:border-r"
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

        <div className="col-span-2 md:col-span-4">
          <Input
            className="md:border-0 md:border-b border-gray-500 h-full w-full bg-white peer md:border-r"
            type="text"
            name="zipCode"
            label="ZIP Code"
            value={searchParams.zipCode}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-4 md:col-span-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 border-gray-500 border border-t-0 border-l-0 font-semibold flex justify-center md:rounded-br-md rounded-b-lg md:rounded-bl-none"
            aria-label="Search for vehicles"
          >
            Show matches
          </button>
        </div>
      </div>
    </form>
  );
};

export default CarsForSalesForm;

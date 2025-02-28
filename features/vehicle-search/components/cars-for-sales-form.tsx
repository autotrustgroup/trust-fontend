"use client";

import React from "react";
import { ChevronDown, Search, MapPin, Filter } from "lucide-react";
import { VehicleSearchParams } from "../types/search-params";

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
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    onParamsChange?.({ [name]: value });
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
        {/* Buy form content with improved styling */}
        <div className="md:col-span-3">
          <div className="relative group">
            <select
              name="vehicleType"
              className="w-full h-[45px] pl-3 pr-8 bg-white border border-gray-200 rounded-xl text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-400 shadow-sm text-sm"
              value={searchParams.vehicleType || "used"}
              onChange={handleChange}
              aria-label="Select vehicle type"
            >
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="certified">Certified Pre-Owned</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-600 group-hover:text-indigo-600 transition-colors duration-200">
              New/used
            </label>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="relative group">
            <select
              name="make"
              className="w-full h-[45px] pl-3 pr-8 bg-white border border-gray-200 rounded-xl text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-400 shadow-sm text-sm"
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
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-600 group-hover:text-indigo-600 transition-colors duration-200">
              Make
            </label>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative group">
            <select
              name="model"
              className="w-full h-[45px] pl-3 pr-8 bg-white border border-gray-200 rounded-xl text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-400 shadow-sm text-sm"
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
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-600 group-hover:text-indigo-600 transition-colors duration-200">
              Model
            </label>
          </div>
        </div>
      </div>

      {/* Second row with enhanced visual appeal */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
        <div className="md:col-span-3">
          <div className="relative group">
            <select
              name="radius"
              className="w-full h-[45px] pl-3 pr-8 bg-white border border-gray-200 rounded-xl text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-400 shadow-sm text-sm"
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
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-600 group-hover:text-indigo-600 transition-colors duration-200">
              Distance
            </label>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="relative group">
            <input
              type="text"
              name="zipCode"
              className="w-full h-[45px] pl-8 pr-3 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-400 shadow-sm text-sm"
              value={searchParams.zipCode || ""}
              onChange={handleChange}
              maxLength={5}
              placeholder="Enter ZIP"
              aria-label="Enter ZIP code"
            />
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-600 pointer-events-none transition-colors duration-200" />
            <label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-600 group-hover:text-indigo-600 transition-colors duration-200">
              ZIP
            </label>
          </div>
        </div>

        <div className="md:col-span-5">
          <button
            type="submit"
            className="w-full h-[45px] bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:translate-y-[-1px] active:translate-y-[1px] text-sm"
            aria-label="Search for vehicles"
          >
            <Search className="h-3.5 w-3.5" />
            <span>Show matches</span>
            <Filter className="h-3.5 w-3.5 ml-1 opacity-80" />
          </button>
        </div>
      </div>

      {/* Advanced filters toggle - new section */}
      <div className="hidden md:flex justify-end">
        <button
          type="button"
          className="text-xs font-medium text-gray-600 hover:text-indigo-600 flex items-center gap-1.5 py-1 px-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
          aria-label="Show advanced filters"
        >
          <Filter className="h-3 w-3" />
          Advanced filters
        </button>
      </div>
    </form>
  );
};

export default CarsForSalesForm;

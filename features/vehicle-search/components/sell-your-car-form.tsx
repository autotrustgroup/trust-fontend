"use client";

import React, { useState } from "react";
import { ChevronDown, Car, Hash, CheckCircle, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SellVehicleParams,
  IdentifierType,
  SellingOption,
} from "../types/search-params";

interface SellYourCarFormProps {
  sellParams?: SellVehicleParams;
  onParamsChange?: (params: Partial<SellVehicleParams>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * Form component for selling a car
 */
const SellYourCarForm: React.FC<SellYourCarFormProps> = ({
  sellParams = {
    identifierType: "license-plate",
    identifier: "",
    zipCode: "",
    sellingOption: "instant-offer",
  },
  onParamsChange,
  onSubmit,
}) => {
  // Map the identifierType to UI state
  const [identifierType, setIdentifierType] = useState<"plate" | "vin">(
    sellParams.identifierType === "license-plate" ? "plate" : "vin"
  );

  // Map the sellingOption to UI state
  const [sellType, setSellType] = useState<"instant" | "self">(
    sellParams.sellingOption === "instant-offer" ? "instant" : "self"
  );

  // Handle identifier type change
  const handleIdentifierTypeChange = (type: "plate" | "vin") => {
    setIdentifierType(type);
    onParamsChange?.({
      identifierType: type === "plate" ? "license-plate" : "vin",
    });
  };

  // Handle selling option change
  const handleSellTypeChange = (type: "instant" | "self") => {
    setSellType(type);
    onParamsChange?.({
      sellingOption: type === "instant" ? "instant-offer" : "sell-yourself",
    });
  };

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onParamsChange?.({ [name]: value });
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
      {/* Identifier Type Toggle with improved styling */}
      <div className="flex justify-between gap-4">
        <div className="inline-flex rounded-full bg-gray-100/80 p-1 shadow-sm">
          <button
            type="button"
            onClick={() => handleIdentifierTypeChange("plate")}
            className={cn(
              "px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5",
              identifierType === "plate"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-gray-700 hover:bg-white/60"
            )}
            aria-label="Use license plate"
            aria-pressed={identifierType === "plate"}
          >
            <Car className="h-3.5 w-3.5" />
            License plate
          </button>
          <button
            type="button"
            onClick={() => handleIdentifierTypeChange("vin")}
            className={cn(
              "px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5",
              identifierType === "vin"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-gray-700 hover:bg-white/60"
            )}
            aria-label="Use VIN"
            aria-pressed={identifierType === "vin"}
          >
            <Hash className="h-3.5 w-3.5" />
            VIN
          </button>
        </div>

        <div className="flex items-center gap-1 text-xs text-indigo-600">
          <CheckCircle className="h-3 w-3" />
          <span className="font-medium">Instant quote</span>
        </div>
      </div>

      {/* Input Fields with enhanced visuals */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
        <div className="md:col-span-9">
          <div className="relative group">
            <input
              type="text"
              name="identifier"
              value={sellParams.identifier}
              onChange={handleInputChange}
              placeholder={identifierType === "plate" ? "License plate" : "VIN"}
              className="w-full h-[45px] px-4 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 shadow-sm text-sm"
              aria-label={
                identifierType === "plate" ? "Enter license plate" : "Enter VIN"
              }
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              {identifierType === "plate" ? (
                <Car className="h-3.5 w-3.5 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200" />
              ) : (
                <Hash className="h-3.5 w-3.5 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200" />
              )}
            </div>
            <label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-600 group-hover:text-indigo-600 transition-colors duration-200">
              {identifierType === "plate" ? "License plate" : "VIN"}
            </label>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="relative group">
            <select
              name="zipCode"
              value={sellParams.zipCode}
              onChange={handleInputChange}
              className="w-full h-[45px] pl-3 pr-8 bg-white border border-gray-200 rounded-xl appearance-none text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 shadow-sm"
              aria-label="Enter ZIP code"
            >
              <option value="" disabled>
                ZIP Code
              </option>
              <option value="60606">60606</option>
              <option value="90210">90210</option>
              <option value="10001">10001</option>
              <option value="75001">75001</option>
              <option value="33101">33101</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400 group-hover:text-indigo-500 transition-colors duration-200" />
            <label className="absolute -top-2 left-2 px-1 text-xs font-medium bg-white text-gray-600 group-hover:text-indigo-600 transition-colors duration-200">
              ZIP Code
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
        <div className="md:col-span-9">
          <label className="flex items-center gap-2 cursor-pointer group p-2 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
            <div className="relative flex items-center justify-center">
              <input
                type="radio"
                name="sellingOption"
                value="instant-offer"
                checked={sellParams.sellingOption === "instant-offer"}
                onChange={() => handleSellTypeChange("instant")}
                className="sr-only"
                aria-label="Select instant offer"
              />
              <div
                className={cn(
                  "w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-200",
                  sellType === "instant"
                    ? "border-indigo-500 bg-indigo-100/50"
                    : "border-gray-300 group-hover:border-gray-400"
                )}
              >
                {sellType === "instant" && (
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                )}
              </div>
            </div>
            <div>
              <span className="text-xs text-gray-800 group-hover:text-indigo-600 transition-colors font-medium">
                Instant offer
              </span>
            </div>
            {sellType === "instant" && (
              <CheckCircle className="h-3 w-3 text-indigo-500 ml-auto" />
            )}
          </label>
        </div>

        <div className="md:col-span-3">
          <button
            type="submit"
            className="h-[45px] w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:translate-y-[-1px] active:translate-y-[1px] text-sm"
            aria-label="Get car value estimate"
          >
            <DollarSign className="h-3.5 w-3.5" />
            Get estimate
          </button>
        </div>
      </div>

      {/* Privacy notice */}
      <div className="text-xs text-gray-500 mt-1">
        By continuing, you agree to our{" "}
        <a href="#" className="text-indigo-600 hover:underline">
          Privacy Policy
        </a>
      </div>
    </form>
  );
};

export default SellYourCarForm;

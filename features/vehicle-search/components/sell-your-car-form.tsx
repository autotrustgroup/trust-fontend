"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronDown,
  Car,
  Hash,
  CheckCircle,
  DollarSign,
  ChevronDownIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SellVehicleParams } from "../types/search-params";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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
    <form onSubmit={onSubmit} className="">
      {/* Identifier Type Toggle with improved styling */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
        <div className="">
          <div className="flex p-1 border border-black rounded-full  bg-white">
            <div className="relative inline-flex w-full lg:w-[350px] ">
              <div
                className={cn(
                  "absolute top-0 bottom-0 left-0 w-1/2 bg-black rounded-full transition-all duration-300",
                  identifierType === "vin"
                    ? "translate-x-full"
                    : "translate-x-0"
                )}
              ></div>
              <button
                type="button"
                onClick={() => handleIdentifierTypeChange("plate")}
                className={cn(
                  "relative px-3 py-1.5 text-base font-medium rounded-full flex items-center gap-1.5 w-1/2 justify-center transition-all duration-300",
                  identifierType === "plate"
                    ? "text-white font-semibold"
                    : "text-gray-700"
                )}
                aria-label="Use license plate"
                aria-pressed={identifierType === "plate"}
              >
                License plate
              </button>
              <button
                type="button"
                onClick={() => handleIdentifierTypeChange("vin")}
                className={cn(
                  "relative px-3 py-1.5 text-base font-medium rounded-full flex items-center gap-1.5 w-1/2 justify-center transition-all duration-300",
                  identifierType === "vin"
                    ? "text-white font-semibold"
                    : "text-gray-700"
                )}
                aria-label="Use VIN"
                aria-pressed={identifierType === "vin"}
              >
                VIN
              </button>
            </div>
          </div>
          {identifierType === "plate" ? (
            <div className="grid grid-cols-6 my-4 gap-4">
              <div className="col-span-4">
                <Input
                  className="rounded-lg border border-gray-500 h-full w-full bg-white peer"
                  type="text"
                  name="identifier"
                  label="Enter license plate"
                  value={sellParams.identifier}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-2">
                <div className="md:col-span-4">
                  <div className="relative h-full">
                    <select
                      name="zipCode"
                      className="border border-gray-500 px-4 pt-6 pb-2 w-full appearance-none bg-white pr-8 h-full rounded-lg"
                      value={sellParams.zipCode || 30}
                      onChange={handleInputChange}
                      aria-label="Enter ZIP code"
                    >
                      <option value="10">AT</option>
                      <option value="20">OT</option>
                      <option value="30">OH</option>
                      <option value="50">AD</option>
                      <option value="100">CV</option>
                      <option value="250">WF</option>
                      <option value="500">QW</option>
                    </select>
                    <label className="absolute top-2 left-4 text-xs text-gray-500">
                      State
                    </label>
                    <ChevronDownIcon className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="my-4 flex flex-col gap-1">
              <Input
                className="rounded-lg border border-gray-500 h-full w-full bg-white peer"
                type="text"
                name="identifier"
                label="VIN"
                value={sellParams.identifier}
                onChange={handleInputChange}
              />
              <a href="#" className="underline font-semibold">
                Where to locate your VIN?
              </a>
            </div>
          )}
        </div>

        <div className="">
          <div className="flex flex-col gap-4">
            <p className="text-base font-normal">Estimate car value for:</p>
            <RadioGroup defaultValue="instant" className="text-nowrap">
              <div className="flex flex-col gap-4 text-base font-normal">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="instant" id="instant" />
                  <Label htmlFor="instant" className="cursor-pointer">
                    Instant offer
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="listing" id="listing" />
                  <Label htmlFor="listing" className="cursor-pointer">
                    Selling it yourself on Cars.com
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col gap-2">
            <div className="w-full">
              <button
                type="submit"
                className="w-full lg:w-fit px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform active:translate-y-[1px] text-sm"
                aria-label="Get car value estimate"
              >
                Get estimate
              </button>
            </div>
            <div className="text-xs mt-1 leading-5">
              By clicking here, you authorize Cars.com to continue with
              collecting your information. We only save this data to provide you
              a listing to sell your car. We value and protect your privacy.
              <a href="#" className="underline font-semibold">
                Cars.com Privacy Notice
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy notice */}
    </form>
  );
};

export default SellYourCarForm;

"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFormProps {
  className?: string;
}

export default function SearchForm({ className }: SearchFormProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const [identifierType, setIdentifierType] = useState<"plate" | "vin">(
    "plate"
  );
  const [sellType, setSellType] = useState<"instant" | "self">("instant");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (activeTab === "buy") {
      router.push("/search");
    } else {
      // Handle sell form submission
      console.log("Submitting sell form");
    }
  };

  return (
    <div className={cn("w-full bg-[#F3F3F3]", className)}>
      {/* Navigation Tabs */}
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

      {/* Form Content */}
      <div className="container mx-auto p-4">
        {activeTab === "buy" ? (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Buy form content */}
              <div className="md:col-span-3">
                <div className="relative">
                  <select
                    className="w-full h-12 pl-3 pr-8 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    defaultValue="new"
                  >
                    <option value="new">New</option>
                    <option value="used">Used</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
                  <label className="absolute -top-2 left-3 text-xs bg-white px-1 text-gray-500">
                    New/used
                  </label>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="relative">
                  <select
                    className="w-full h-12 pl-3 pr-8 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    defaultValue="ford"
                  >
                    <option value="ford">Ford</option>
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
                  <label className="absolute -top-2 left-3 text-xs bg-white px-1 text-gray-500">
                    Make
                  </label>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative">
                  <select
                    className="w-full h-12 pl-3 pr-8 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    defaultValue="mach-e"
                  >
                    <option value="mach-e">Mustang Mach-E</option>
                    <option value="f150">F-150</option>
                    <option value="bronco">Bronco</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
                  <label className="absolute -top-2 left-3 text-xs bg-white px-1 text-gray-500">
                    Model
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <div className="relative">
                  <select
                    className="w-full h-12 pl-3 pr-8 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    defaultValue="30"
                  >
                    <option value="10">10 miles</option>
                    <option value="20">20 miles</option>
                    <option value="30">30 miles</option>
                    <option value="50">50 miles</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
                  <label className="absolute -top-2 left-3 text-xs bg-white px-1 text-gray-500">
                    Distance
                  </label>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full h-12 pl-3 pr-3 bg-white border border-[#E5E5E5] rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    defaultValue="60606"
                  />
                  <label className="absolute -top-2 left-3 text-xs bg-white px-1 text-gray-500">
                    ZIP
                  </label>
                </div>
              </div>

              <div className="md:col-span-5">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#7963F7] hover:bg-[#6952E9] text-white rounded font-medium transition-colors"
                >
                  Show 89 matches
                </button>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Identifier Type Toggle */}
              <div className="inline-flex rounded-[32px] bg-black p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setIdentifierType("plate")}
                  className={cn(
                    "px-6 py-2.5 text-sm font-medium rounded-[28px] transition-all duration-200",
                    identifierType === "plate"
                      ? "bg-white text-black shadow-sm"
                      : "text-white hover:bg-white/10"
                  )}
                >
                  License plate
                </button>
                <button
                  type="button"
                  onClick={() => setIdentifierType("vin")}
                  className={cn(
                    "px-6 py-2.5 text-sm font-medium rounded-[28px] transition-all duration-200",
                    identifierType === "vin"
                      ? "bg-white text-black shadow-sm"
                      : "text-white hover:bg-white/10"
                  )}
                >
                  VIN
                </button>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <input
                    type="text"
                    placeholder={
                      identifierType === "plate" ? "License plate" : "VIN"
                    }
                    className="w-full h-12 px-4 bg-white border border-[#E5E5E5] rounded-md text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <div className="relative">
                    <select
                      className="w-full h-12 pl-4 pr-10 bg-white border border-[#E5E5E5] rounded-md appearance-none text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        State
                      </option>
                      <option value="--">--</option>
                      <option value="CA">CA</option>
                      <option value="NY">NY</option>
                      {/* Add more states */}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-medium mb-4">
                  Estimate car value for:
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="sellType"
                        value="instant"
                        checked={sellType === "instant"}
                        onChange={(e) =>
                          setSellType(e.target.value as "instant" | "self")
                        }
                        className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#7963F7] checked:border-[6px] transition-all duration-200"
                      />
                    </div>
                    <span className="text-base text-gray-900 group-hover:text-gray-700">
                      Instant offer
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="sellType"
                        value="self"
                        checked={sellType === "self"}
                        onChange={(e) =>
                          setSellType(e.target.value as "instant" | "self")
                        }
                        className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#7963F7] checked:border-[6px] transition-all duration-200"
                      />
                    </div>
                    <span className="text-base text-gray-900 group-hover:text-gray-700">
                      Selling it yourself on Cars.com
                    </span>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="h-12 px-8 bg-[#7963F7] hover:bg-[#6952E9] text-white font-medium rounded-md transition-colors duration-200"
                >
                  Get estimate
                </button>
                <p className="text-sm text-gray-500 leading-relaxed">
                  By clicking here, you authorize Cars.com to continue with
                  collecting your information. We only save this data to provide
                  you a listing to sell your car. We value and protect your
                  privacy.{" "}
                  <a
                    href="#"
                    className="text-gray-900 underline hover:text-black"
                  >
                    Cars.com Privacy Notice
                  </a>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

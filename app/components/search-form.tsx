"use client";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFormProps {
  className?: string;
}

export default function SearchForm({ className }: SearchFormProps) {
  return (
    <div className={cn("w-full bg-[#F3F3F3] py-4", className)}>
      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 border-b border-[#E5E5E5]">
        <div className="flex gap-6">
          <button className="pb-4 text-sm font-medium border-b-2 border-black -mb-[1px]">
            Shop cars for sale
          </button>
          <button className="pb-4 text-sm font-medium text-gray-600">
            Sell your car
          </button>
        </div>
      </div>

      {/* Search Form */}
      <div className="container mx-auto px-4 pt-4">
        <form className="grid gap-y-3">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* New/Used Dropdown */}
            <div className="md:col-span-2">
              <div className="relative">
                <select
                  className="w-full h-12 px-4 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none"
                  defaultValue="used"
                >
                  <option value="new">New</option>
                  <option value="used">Used</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                <label className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-600">
                  New/used
                </label>
              </div>
            </div>

            {/* Make Dropdown */}
            <div className="md:col-span-2">
              <div className="relative">
                <select
                  className="w-full h-12 px-4 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none"
                  defaultValue="ford"
                >
                  <option value="ford">Ford</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                <label className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-600">
                  Make
                </label>
              </div>
            </div>

            {/* Model Dropdown */}
            <div className="md:col-span-1">
              <div className="relative">
                <select
                  className="w-full h-12 px-4 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none"
                  defaultValue=""
                >
                  <option value="">All models</option>
                  <option value="mustang">Mustang</option>
                  <option value="f150">F-150</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                <label className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-600">
                  Model
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* Distance Dropdown */}
            <div className="md:col-span-2">
              <div className="relative">
                <select
                  className="w-full h-12 px-4 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none"
                  defaultValue="30"
                >
                  <option value="10">10 miles</option>
                  <option value="20">20 miles</option>
                  <option value="30">30 miles</option>
                  <option value="50">50 miles</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                <label className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-600">
                  Distance
                </label>
              </div>
            </div>

            {/* ZIP Input */}
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-white border border-[#E5E5E5] rounded focus:outline-none"
                  defaultValue="98101"
                />
                <label className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-600">
                  ZIP
                </label>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1">
              <button
                type="submit"
                className="w-full h-12 bg-[#7963F7] hover:bg-[#6952E9] text-white rounded font-medium transition-colors"
              >
                Show 1,606 matches
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

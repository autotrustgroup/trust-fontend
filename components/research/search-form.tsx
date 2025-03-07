"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SearchForm() {
  const router = useRouter();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/research/cars/${make}/${model}/${year}`);
  };

  const years = Array.from({ length: 25 }, (_, i) => 2025 - i);

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Year Selection */}
        <div className="relative">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full h-12 pl-3 pr-10 bg-white border border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B45F7]"
          >
            <option value="">Select Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Make Selection */}
        <div className="relative">
          <select
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="w-full h-12 pl-3 pr-10 bg-white border border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B45F7]"
          >
            <option value="">Select Make</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
            <option value="chevrolet">Chevrolet</option>
            <option value="bmw">BMW</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Model Selection */}
      <div className="relative">
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full h-12 pl-3 pr-10 bg-white border border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B45F7]"
        >
          <option value="">Select Model</option>
          <option value="camry">Camry</option>
          <option value="corolla">Corolla</option>
          <option value="rav4">RAV4</option>
          <option value="civic">Civic</option>
          <option value="accord">Accord</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-12 bg-[#8B45F7] hover:bg-[#7B3BE3] text-white font-medium"
      >
        Research
      </Button>

      {/* Popular Searches */}
      <div className="pt-4">
        <p className="text-sm text-gray-600 mb-2">Popular searches:</p>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            className="text-sm"
            onClick={() => {
              setMake("toyota");
              setModel("camry");
              setYear("2025");
            }}
          >
            2025 Toyota Camry
          </Button>
          <Button
            type="button"
            variant="outline"
            className="text-sm"
            onClick={() => {
              setMake("honda");
              setModel("cr-v");
              setYear("2025");
            }}
          >
            2025 Honda CR-V
          </Button>
          <Button
            type="button"
            variant="outline"
            className="text-sm"
            onClick={() => {
              setMake("ford");
              setModel("f-150");
              setYear("2025");
            }}
          >
            2025 Ford F-150
          </Button>
        </div>
      </div>
    </form>
  );
}

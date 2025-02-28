"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

export function SearchForm() {
  const router = useRouter();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here, e.g., redirect to a search results page
    router.push(`/search?make=${make}&model=${model}&price=${price}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

        {/* Price Selection */}
        <div className="relative">
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full h-12 pl-3 pr-10 bg-white border border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B45F7]"
          >
            <option value="">Select Price</option>
            <option value="10000">Under $10,000</option>
            <option value="20000">Under $20,000</option>
            <option value="30000">Under $30,000</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full h-12 bg-[#8B45F7] hover:bg-[#7B3BE3] text-white font-medium rounded-md transition-colors"
      >
        Search
      </button>
    </form>
  );
}

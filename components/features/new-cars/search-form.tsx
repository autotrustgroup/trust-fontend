"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";

export function SearchForm() {
  const router = useRouter();
  const [make, setMake] = useState("alfa-romeo");
  const [model, setModel] = useState("tonale");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/new-cars/search?make=${make}&model=${model}`);
  };

  const selectClasses =
    "w-full h-12 pl-4 pr-10 bg-white rounded-[32px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B45F7] border-0";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Make Selection */}
        <div className="relative">
          <select
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className={selectClasses}
          >
            <option value="alfa-romeo">Alfa Romeo</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes-Benz</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Model Selection */}
        <div className="relative">
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className={selectClasses}
          >
            <option value="tonale">Tonale</option>
            <option value="giulia">Giulia</option>
            <option value="stelvio">Stelvio</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="w-full h-12 bg-[#8B45F7] hover:bg-[#7B3BE3] text-white rounded-[32px] flex items-center justify-center gap-2 transition-colors"
      >
        <Search className="w-5 h-5" />
        Search
      </button>
    </form>
  );
}

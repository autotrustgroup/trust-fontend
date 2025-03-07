"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ResearchHero() {
  const [activeTab, setActiveTab] = useState<"model" | "type">("model");

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-[32px] font-bold pt-8 mb-6">Research & reviews</h1>

        {/* Hero Image Section */}
        <div className="relative mb-12">
          <div className="aspect-[16/7] relative rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.27.06-8QbLRgrUHb1AlXaXOxgcen73xRn1G3.png"
              alt="2025 Polestar 3"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Research Form Section */}
        <div className="w-full bg-[#F3F3F3] mt-12">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-[24px] font-bold mb-4">Research cars</h2>

            {/* Tabs */}
            <div className="flex gap-6 mb-4">
              <button
                onClick={() => setActiveTab("model")}
                className={cn(
                  "text-[15px] pb-2 border-b-2 transition-colors",
                  activeTab === "model"
                    ? "border-black font-semibold"
                    : "border-transparent text-gray-600 hover:text-black"
                )}
              >
                By model
              </button>
              <button
                onClick={() => setActiveTab("type")}
                className={cn(
                  "text-[15px] pb-2 border-b-2 transition-colors",
                  activeTab === "type"
                    ? "border-black font-semibold"
                    : "border-transparent text-gray-600 hover:text-black"
                )}
              >
                By type
              </button>
            </div>

            <p className="text-[15px] text-gray-600 mb-6">
              Learn more about the car you're interested in before you buy.
            </p>

            {/* Form */}
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Make Dropdown */}
              <div>
                <label className="block text-[13px] text-gray-600 mb-1.5">
                  Make
                </label>
                <div className="relative">
                  <select
                    defaultValue="polestar"
                    className="w-full h-[52px] px-3 bg-white border border-gray-200 rounded-[3px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B45F7]"
                  >
                    <option value="polestar">Polestar</option>
                    <option value="tesla">Tesla</option>
                    <option value="bmw">BMW</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Model Dropdown */}
              <div>
                <label className="block text-[13px] text-gray-600 mb-1.5">
                  Model
                </label>
                <div className="relative">
                  <select
                    defaultValue="3"
                    className="w-full h-[52px] px-3 bg-white border border-gray-200 rounded-[3px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B45F7]"
                  >
                    <option value="3">3</option>
                    <option value="2">2</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Year Dropdown */}
              <div>
                <label className="block text-[13px] text-gray-600 mb-1.5">
                  Year
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-[52px] px-3 bg-white border border-gray-200 rounded-[3px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B45F7]"
                  >
                    <option value="">All years</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Research Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full h-[52px] px-8 bg-[#8B45F7] hover:bg-[#7B3BE3] text-white font-medium rounded-[3px] transition-colors"
                >
                  Research
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

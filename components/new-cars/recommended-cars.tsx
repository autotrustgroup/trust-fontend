"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  "Best Of award winners",
  "Best Of award finalists",
  "American Made Index qualifiers",
  "Best Value Compact car",
  "Best Value Subcompact SUV",
  "Best Value Compact SUV",
] as const;

type Category = (typeof categories)[number];

const recommendedCars = [
  {
    id: 1,
    name: "2025 Hyundai Palisade",
    price: 37200,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
  },
  {
    id: 2,
    name: "2025 RAM 1500",
    price: 40275,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
  },
  {
    id: 3,
    name: "2025 Hyundai Santa Fe",
    price: 34300,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
  },
  {
    id: 4,
    name: "2025 Toyota Land Cruiser",
    price: 56700,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
  },
  {
    id: 5,
    name: "2025 Kia EV9",
    price: 54900,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
  },
  {
    id: 6,
    name: "2025 Genesis Electrified GV70",
    price: 66950,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
  },
];

export function RecommendedCars() {
  const [activeCategory, setActiveCategory] = useState<Category>(
    "Best Of award winners"
  );

  return (
    <section className="py-12">
      <h2 className="text-[28px] leading-[36px] font-bold mb-8 px-4">
        Our recommendations
      </h2>

      {/* Categories */}
      <div className="mb-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 min-w-max px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap",
                activeCategory === category
                  ? "bg-grey-900 text-white"
                  : "bg-[#F3F3F3] text-black hover:bg-[#E5E5E5]"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-4">
        {recommendedCars.map((car) => (
          <div
            key={car.id}
            className="w-full bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.08)] p-3"
          >
            <div className="relative aspect-[4/3] mb-3">
              <Image
                src={car.image || "/placeholder.svg"}
                alt={car.name}
                fill
                className="object-contain"
                sizes="(min-width: 1280px) 16.666vw, (min-width: 1024px) 25vw, (min-width: 768px) 33.333vw, 50vw"
              />
            </div>
            <div className="space-y-2">
              <p className="text-[24px] leading-[32px] font-bold">
                ${car.price.toLocaleString()}
              </p>
              <p className="text-[14px] leading-[20px] text-black">
                {car.name}
              </p>
              <button className="flex items-center justify-center gap-2 w-full text-[14px] leading-[20px] border border-[#E5E5E5] rounded-full px-4 py-2 hover:bg-[#F3F3F3] transition-colors">
                <Plus className="w-4 h-4" />
                Compare
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

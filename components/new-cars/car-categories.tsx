"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { categoryData } from "@/lib/new-car-categories";

const categories = [
  "EVs",
  "SUVs",
  "Sedans",
  "Pickup trucks",
  "Coupes",
  "Hatchbacks",
  "Wagons",
  "Convertibles",
  "Vans",
] as const;

type Category = (typeof categories)[number];

// Mock data for each category
// const categoryData = {
//   EVs: [
//     {
//       id: 1,
//       name: "2025 Tesla Model 3",
//       price: 42990,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 2,
//       name: "2025 Chevrolet Bolt EUV",
//       price: 37500,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 3,
//       name: "2025 Ford Mustang Mach-E",
//       price: 45995,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 4,
//       name: "2025 Hyundai IONIQ 5",
//       price: 41450,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 5,
//       name: "2025 Kia EV6",
//       price: 42600,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 6,
//       name: "2025 Volkswagen ID.4",
//       price: 38995,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//   ],
//   SUVs: [
//     {
//       id: 1,
//       name: "2025 Volkswagen Atlas",
//       price: 38200,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 2,
//       name: "2025 Ford Expedition Max",
//       price: 61150,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 3,
//       name: "2025 Jeep Grand Wagoneer",
//       price: 84945,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 4,
//       name: "2025 Mercedes-Benz GLS",
//       price: 178450,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 5,
//       name: "2025 Toyota RAV4",
//       price: 44265,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 6,
//       name: "2025 Honda CR-V",
//       price: 61850,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//   ],
//   Sedans: [
//     {
//       id: 1,
//       name: "2025 Toyota Camry",
//       price: 26420,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 2,
//       name: "2025 Honda Accord",
//       price: 27295,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 3,
//       name: "2025 BMW 3 Series",
//       price: 43300,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 4,
//       name: "2025 Mercedes-Benz C-Class",
//       price: 44900,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 5,
//       name: "2025 Lexus ES",
//       price: 41400,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 6,
//       name: "2025 Audi A4",
//       price: 40300,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//   ],
//   "Pickup trucks": [
//     {
//       id: 1,
//       name: "2025 Ford F-150",
//       price: 34585,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 2,
//       name: "2025 Chevrolet Silverado",
//       price: 35600,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 3,
//       name: "2025 RAM 1500",
//       price: 37410,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 4,
//       name: "2025 Toyota Tundra",
//       price: 38965,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 5,
//       name: "2025 GMC Sierra 1500",
//       price: 36910,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 6,
//       name: "2025 Nissan Titan",
//       price: 39700,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//   ],
//   Coupes: [
//     {
//       id: 1,
//       name: "2025 BMW 4 Series",
//       price: 47400,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 2,
//       name: "2025 Mercedes-Benz C-Class",
//       price: 49550,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 3,
//       name: "2025 Audi A5",
//       price: 46200,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 4,
//       name: "2025 Lexus RC",
//       price: 45800,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 5,
//       name: "2025 Infiniti Q60",
//       price: 43300,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 6,
//       name: "2025 Porsche 911",
//       price: 106100,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//   ],
//   Hatchbacks: [
//     {
//       id: 1,
//       name: "2025 Volkswagen Golf GTI",
//       price: 30530,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 2,
//       name: "2025 Honda Civic Type R",
//       price: 42895,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 3,
//       name: "2025 Hyundai Veloster N",
//       price: 32925,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 4,
//       name: "2025 Toyota GR Corolla",
//       price: 35900,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 5,
//       name: "2025 Mazda 3",
//       price: 22550,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 6,
//       name: "2025 Mini Cooper",
//       price: 25800,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//   ],
//   Wagons: [
//     {
//       id: 1,
//       name: "2025 Volvo V60",
//       price: 41900,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 2,
//       name: "2025 Audi A4 allroad",
//       price: 45500,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 3,
//       name: "2025 Mercedes-Benz E-Class",
//       price: 68400,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 4,
//       name: "2025 Porsche Panamera Sport",
//       price: 99000,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 5,
//       name: "2025 Subaru Outback",
//       price: 28895,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 6,
//       name: "2025 Volvo V90",
//       price: 51800,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//   ],
//   Convertibles: [
//     {
//       id: 1,
//       name: "2025 Porsche 911",
//       price: 114000,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 2,
//       name: "2025 BMW 4 Series",
//       price: 54200,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 3,
//       name: "2025 Mercedes-Benz C-Class",
//       price: 55400,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 4,
//       name: "2025 Chevrolet Corvette",
//       price: 69200,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 5,
//       name: "2025 Mazda MX-5 Miata",
//       price: 28400,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 6,
//       name: "2025 Audi A5",
//       price: 51900,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//   ],
//   Vans: [
//     {
//       id: 1,
//       name: "2025 Honda Odyssey",
//       price: 37340,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 2,
//       name: "2025 Toyota Sienna",
//       price: 35385,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 3,
//       name: "2025 Chrysler Pacifica",
//       price: 37020,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 4,
//       name: "2025 Kia Carnival",
//       price: 32900,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 5,
//       name: "2025 Mercedes-Benz Sprinter",
//       price: 38300,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//     {
//       id: 6,
//       name: "2025 Ford Transit",
//       price: 45200,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.30.56-QvzHIIwDslYppYvW034XlpNZE9h3ZZ.png",
//     },
//   ],
// };

export function CarCategories() {
  const [activeCategory, setActiveCategory] = useState<Category>("SUVs");

  return (
    <section className="py-8">
      {/* Categories */}
      <div className="mb-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 min-w-max px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
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

      {/* Car Models */}
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-4 pb-4">
            {categoryData[activeCategory].map((car) => (
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
                  <button className="flex items-center gap-2 text-[14px] leading-[20px] border border-[#E5E5E5] rounded-full px-4 py-2 hover:bg-[#F3F3F3] transition-colors w-full justify-center">
                    <Plus className="w-4 h-4" />
                    Compare
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See All Link */}
        <div className="absolute right-4 -bottom-8">
          <Link
            href={`/new-cars/${activeCategory.toLowerCase()}`}
            className="text-[14px] leading-[20px] font-medium hover:underline inline-flex items-center"
          >
            See all {activeCategory}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-1"
            >
              <path
                d="M3 13L13 3M13 3H7M13 3V9"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const trendingSearches = [
  "Used Under $15K",
  "Used Electric",
  "Used Truck",
  "Used SUV Under $15K",
  "Used Mercedes-Benz",
  "Used Porsche 911",
  "Lincoln Nautilus Under $60K",
] as const;

const trendingVehicles = [
  {
    id: 1,
    name: "Used Nissan Altima",
    price: 10974,
    mileage: "93,227",
    image: "/placeholder.svg",
    href: "/vehicle/nissan-altima-1",
  },
  {
    id: 2,
    name: "Used Jeep Grand Cherokee",
    price: 13692,
    mileage: "104,428",
    image: "/placeholder.svg",
    href: "/vehicle/jeep-grand-cherokee-1",
  },
  {
    id: 3,
    name: "Used Cadillac ATS",
    price: 9949,
    mileage: "68,554",
    image: "/placeholder.svg",
    href: "/vehicle/cadillac-ats-1",
  },
  {
    id: 4,
    name: "Used Jeep New Compass",
    price: 12989,
    mileage: "100,392",
    image: "/placeholder.svg",
    href: "/vehicle/jeep-compass-1",
  },
  {
    id: 5,
    name: "Used Mazda CX-7",
    price: 8990,
    mileage: "57,412",
    image: "/placeholder.svg",
    href: "/vehicle/mazda-cx7-1",
  },
  {
    id: 6,
    name: "Used Nissan Altima",
    price: 13949,
    mileage: "88,472",
    image: "/placeholder.svg",
    href: "/vehicle/nissan-altima-2",
  },
  {
    id: 7,
    name: "Used Scion xD",
    price: 8977,
    mileage: "81,268",
    image: "/placeholder.svg",
    href: "/vehicle/scion-xd-1",
  },
  {
    id: 8,
    name: "Used Toyota Yaris iA",
    price: 14995,
    mileage: "50,790",
    image: "/placeholder.svg",
    href: "/vehicle/toyota-yaris-1",
  },
  {
    id: 9,
    name: "Used Nissan Altima",
    price: 14949,
    mileage: "98,579",
    image: "/placeholder.svg",
    href: "/vehicle/nissan-altima-3",
  },
  {
    id: 10,
    name: "Used Honda Crosstour",
    price: 8468,
    mileage: "194,459",
    image: "/placeholder.svg",
    href: "/vehicle/honda-crosstour-1",
  },
];

export default function TrendingSearches() {
  const [selectedSearch, setSelectedSearch] =
    React.useState<string>("Used Under $15K");
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Trending searches near you</h2>

      {/* Search Categories */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mb-4"
        >
          {trendingSearches.map((search) => (
            <button
              key={search}
              onClick={() => setSelectedSearch(search)}
              className={cn(
                "h-9 px-4 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                selectedSearch === search
                  ? "bg-black text-white"
                  : "bg-[#F3F3F3] text-gray-900 hover:bg-gray-200"
              )}
            >
              {search}
            </button>
          ))}
        </div>

        {/* Scroll button */}
        <div className="absolute right-0 top-0 hidden h-full md:flex items-center">
          <button
            onClick={scrollRight}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white shadow-md hover:bg-gray-900"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {trendingVehicles.map((vehicle) => (
          <Link key={vehicle.id} href={vehicle.href} className="group block">
            <div className="aspect-[4/3] relative mb-3 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={vehicle.image || "/placeholder.svg"}
                alt={vehicle.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium mb-1">{vehicle.name}</h3>
            <p className="text-lg font-bold">
              ${vehicle.price.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">{vehicle.mileage} mi.</p>
          </Link>
        ))}
      </div>

      {/* Footer Link */}
      <div>
        <Link
          href="/used-under-15k"
          className="text-black font-medium hover:underline"
        >
          See more Used Under $15K
        </Link>
      </div>
    </section>
  );
}

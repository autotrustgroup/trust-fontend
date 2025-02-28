import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

const popularSearches = [
  {
    id: 1,
    title: "Toyota RAV4 for sale",
    href: "/shop/toyota-rav4",
  },
  {
    id: 2,
    title: "Honda CR-V for sale",
    href: "/shop/honda-crv",
  },
  {
    id: 3,
    title: "Research popular electric cars",
    href: "/research/electric-vehicles",
  },
  {
    id: 4,
    title: "SUVs under 30k",
    href: "/shop/suvs?price=30000",
  },
  {
    id: 5,
    title: "Best family cars 2024",
    href: "/research/best-family-cars-2024",
  },
  {
    id: 6,
    title: "Ford F-150 for sale",
    href: "/shop/ford-f150",
  },
  {
    id: 7,
    title: "Used cars under $20,000",
    href: "/shop/used?price=20000",
  },
  {
    id: 8,
    title: "Hybrid cars near me",
    href: "/shop/hybrid?near=me",
  },
];

const PopularSearches: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {popularSearches.map((search) => (
        <Link
          key={search.id}
          href={search.href}
          className="py-3 flex justify-between items-center hover:bg-gray-200 px-4 rounded-md transition-colors group"
        >
          <span className="text-gray-700">{search.title}</span>
          <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
        </Link>
      ))}
    </div>
  );
};

export default PopularSearches;

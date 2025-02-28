import React from "react";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { VehicleCategory } from "@/lib/data";

interface PopularCategoriesProps {
  selectedCategory: VehicleCategory;
  onCategoryChange: (category: VehicleCategory) => void;
}

const categories = [
  {
    id: "suv",
    name: "SUV",
    icon: "/placeholder.svg",
    href: "/shop/suv",
  },
  {
    id: "sedan",
    name: "Sedan",
    icon: "/placeholder.svg",
    href: "/shop/sedan",
  },
  {
    id: "pickup",
    name: "Pickup",
    icon: "/placeholder.svg",
    href: "/shop/pickup",
  },
  {
    id: "electric",
    name: "Electric",
    icon: "/placeholder.svg",
    href: "/shop/electric",
  },
  {
    id: "luxury",
    name: "Luxury",
    icon: "/placeholder.svg",
    href: "/shop/luxury",
  },
  {
    id: "sports",
    name: "Sports",
    icon: "/placeholder.svg",
    href: "/shop/sports",
  },
  {
    id: "hatchback",
    name: "Hatchback",
    icon: "/placeholder.svg",
    href: "/shop/hatchback",
  },
  {
    id: "convertible",
    name: "Convertible",
    icon: "/placeholder.svg",
    href: "/shop/convertible",
  },
];

const PopularCategories: React.FC<PopularCategoriesProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mb-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group flex flex-col items-center"
            onClick={(e) => {
              e.preventDefault();
              onCategoryChange(category.name as VehicleCategory);
            }}
          >
            <div
              className={`
              w-20 h-20 rounded-full flex items-center justify-center mb-2
              ${
                selectedCategory.toLowerCase() === category.id
                  ? "bg-[#7963F7] text-white"
                  : "bg-gray-100 text-gray-700 group-hover:bg-gray-200"
              } transition-colors
            `}
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span
              className={`text-sm font-medium ${
                selectedCategory.toLowerCase() === category.id
                  ? "text-[#7963F7]"
                  : "text-gray-800"
              }`}
            >
              {category.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
        <div className="flex space-x-4">
          {["All", "New", "Used", "Certified"].map((type) => (
            <button
              key={type}
              className="px-6 py-2 rounded-full border border-gray-300 hover:border-[#7963F7] hover:bg-gray-50 whitespace-nowrap"
            >
              {type} cars
            </button>
          ))}
          {["Under $15K", "$15K-$25K", "$25K-$40K", "Over $40K"].map(
            (price) => (
              <button
                key={price}
                className="px-6 py-2 rounded-full border border-gray-300 hover:border-[#7963F7] hover:bg-gray-50 whitespace-nowrap"
              >
                {price}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;

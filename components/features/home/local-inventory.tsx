import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, MapPinIcon } from "lucide-react";

const localInventory = [
  {
    id: 1,
    year: 2020,
    make: "Ford",
    model: "Escape",
    price: 18995,
    mileage: "42,587",
    image: "/placeholder.svg",
    dealer: "Ford of Seattle",
    location: "Seattle, WA",
    distance: "3 mi away",
  },
  {
    id: 2,
    year: 2022,
    make: "Toyota",
    model: "RAV4",
    price: 26799,
    mileage: "18,320",
    image: "/placeholder.svg",
    dealer: "Toyota of Bellevue",
    location: "Bellevue, WA",
    distance: "12 mi away",
  },
  {
    id: 3,
    year: 2021,
    make: "Honda",
    model: "CR-V",
    price: 24995,
    mileage: "32,150",
    image: "/placeholder.svg",
    dealer: "Honda of Kirkland",
    location: "Kirkland, WA",
    distance: "8 mi away",
  },
  {
    id: 4,
    year: 2019,
    make: "Chevrolet",
    model: "Traverse",
    price: 22500,
    mileage: "56,870",
    image: "/placeholder.svg",
    dealer: "Chevy of Renton",
    location: "Renton, WA",
    distance: "15 mi away",
  },
];

const LocalInventory: React.FC = () => {
  return (
    <div>
      <div className="flex items-center mb-4 text-gray-600">
        <MapPinIcon className="w-5 h-5 mr-2" />
        <span>Seattle, WA 98101 - </span>
        <button className="text-blue-600 hover:underline ml-1">
          Change location
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {localInventory.map((vehicle) => (
          <Link
            href={`/vehicledetail/${vehicle.id}`}
            key={vehicle.id}
            className="bg-white rounded-lg shadow overflow-hidden transition-shadow hover:shadow-md"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={vehicle.image}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                {vehicle.distance}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-gray-900">
                  ${vehicle.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500">
                  {vehicle.mileage} mi
                </span>
              </div>
              <div className="text-gray-600 text-sm">{vehicle.dealer}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/shop/near-me"
          className="inline-flex items-center text-blue-600 hover:underline font-medium"
        >
          See all vehicles near you
          <ExternalLinkIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default LocalInventory;

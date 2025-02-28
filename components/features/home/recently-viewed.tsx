import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon } from "lucide-react";

interface Vehicle {
  id: number;
  year: number;
  make: string;
  model: string;
  price: number;
  image: string;
  mileage: string;
  dealer: string;
  location: string;
}

interface RecentlyViewedProps {
  vehicles: Vehicle[];
}

const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ vehicles }) => {
  return (
    <>
      {vehicles.map((vehicle) => (
        <Link
          href={`/vehicledetail/${vehicle.id}`}
          key={vehicle.id}
          className="relative group bg-white rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md"
        >
          <div className="aspect-[4/3] relative">
            <Image
              src={vehicle.image}
              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              fill
              className="object-cover"
            />
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
            <div className="flex items-center text-gray-600 text-sm">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>
                {vehicle.dealer} - {vehicle.location}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RecentlyViewed;

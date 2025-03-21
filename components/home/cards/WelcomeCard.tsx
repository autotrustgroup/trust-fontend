import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Car = {
  id: number;
  name: string;
  image?: string;
  price: string;
  saved: boolean;
};

type WelcomeCardProps = {
  car: Car;
};

const WelcomeCard: React.FC<WelcomeCardProps> = ({ car }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
      <CardContent className="p-0 relative">
        {/* Save Button */}
        <div className="absolute top-2 right-2 z-10">
          <button
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              car.saved
                ? "bg-red-500 text-white"
                : "bg-white/80 text-gray-600 hover:text-red-500"
            }`}
          >
            <Heart
              className="h-4 w-4"
              fill={car.saved ? "currentColor" : "none"}
            />
          </button>
        </div>

        {/* Car Image */}
        <div className="relative">
          <Image
            src={car.image || "/placeholder.svg"}
            alt={car.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover transition-transform hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1">
            New arrival
          </div>
        </div>

        {/* Car Details */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
            {car.name}
          </h3>
          <p className="text-blue-700 font-bold mb-3">{car.price}</p>

          <div className="flex justify-between items-center">
            <Link
              href={`/car/${car.id}`}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              View details
            </Link>
            <span className="text-xs text-gray-500">Added 2 days ago</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;

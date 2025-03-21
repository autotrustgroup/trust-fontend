import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Vehicle = {
  id: string | number;
  name: string;
  image?: string;
  price: string | number;
};

type PopularVehicleCardProps = {
  vehicle: Vehicle;
};

const PopularVehicleCard: React.FC<PopularVehicleCardProps> = ({ vehicle }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 transition-all hover:shadow-xl">
      <CardContent className="p-0 relative">
        <div className="relative">
          <Image
            src={vehicle.image || "/placeholder.svg"}
            alt={vehicle.name}
            width={320}
            height={200}
            className="w-full h-44 object-cover "
          />
        </div>

        <div className="p-4">
          <h3 className="font-regular mb-2  line-clamp-1">{vehicle.name}</h3>
          <div className="flex justify-between items-center">
            <Link
              href={`/vehicle/${vehicle.id}`}
              className="text-gray-900 font-bold group-hover:underline group-hover:decoration-purple-600 group-hover:decoration-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularVehicleCard;

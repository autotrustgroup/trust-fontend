import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type TrendingSearchCardProps = {
  name: string;
  image: string;
  price: string | number;
  mileage: string | number;
};

const TrendingSearchCard: React.FC<TrendingSearchCardProps> = ({
  name,
  image,
  price,
  mileage,
}) => {
  return (
    <Card className="h-full flex flex-col border border-gray-200 group hover:cursor-pointer">
      <CardContent className="p-0 flex flex-col flex-grow">
        <div className="relative">
          <Image
            src={image}
            alt={name}
            width={300}
            height={200}
            className="w-full h-44 object-cover"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-bold mb-1  group-hover:underline group-hover:decoration-purple-600 group-hover:decoration-2">
            {name}
          </h3>
          <p className="text-grey-900 text-bodylg font-bold mb-1">{price}</p>
          <p className="text-gray-500 text-bodysm mt-auto">{mileage} mi.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingSearchCard;

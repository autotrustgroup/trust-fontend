import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type CarCategory = {
  title: string;
  category: string;
  imageSrc: string;
  link: string;
};

const UsedCarCard: React.FC<{ category: CarCategory }> = ({ category }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 transition-all hover:shadow-xl group">
      <CardContent className="p-0 relative">
        <div className="relative">
          <Image
            src={category.imageSrc || "/placeholder.svg"}
            alt={category.title}
            width={320}
            height={200}
            className="w-full h-44 object-cover"
          />
        </div>

        <div className="p-4">
          <p className="text-sm text-gray-500 uppercase">{category.category}</p>
          <h3 className="text-lg font-medium text-gray-900 group-hover:underline group-hover:decoration-purple-600 group-hover:decoration-2">
            {category.title}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsedCarCard;

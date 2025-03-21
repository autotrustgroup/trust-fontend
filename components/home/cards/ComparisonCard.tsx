import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ComparisonCardProps = {
  cars: string[];
  image1: string;
  image2: string;
  link: string;
};

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  cars,
  image1,
  image2,
  link,
}) => {
  return (
    <Link href={link} passHref>
      <Card className="overflow-hidden border border-gray-200 transition-all rounded-xl shadow-lg ">
        <CardContent className="p-2 flex flex-col items-center text-center">
          <div className="relative w-full h-20 flex justify-center gap-2">
            <div className="relative w-1/2 ">
              <Image
                src={image1}
                alt="First vehicle"
                layout="fill"
                objectFit="contain"
                className="rounded-md transform scale-x-[-1]"
              />
            </div>

            <div className="relative w-1/2 ">
              <Image
                src={image2}
                alt="Second vehicle"
                layout="fill"
                objectFit="contain"
                className="rounded-md "
              />
            </div>
          </div>

          <h3 className="mt-4 text-bodymd font-normal text-gray-900 line-clamp-1">
            {cars.join(" vs ")}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ComparisonCard;

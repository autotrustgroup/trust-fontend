import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

type CategoryCardProps = {
  title: string;
  description: string;
  link: string;
  linkText: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  link,
  linkText,
}) => {
  return (
    <Card className="overflow-hidden border border-gray-200 transition-all hover:shadow-xl relative">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="p-3 flex-grow"></div>
        <div className="p-3  border-gray-200">
          <h3 className="font-bold text-h2 text-nowrap mb-2">{title}</h3>
          <p className="text-gray-900 text-bodymd mb-4">{description}</p>
          <Link
            href={link}
            className="text-gray-900 font-bold hover:underline hover:decoration-purple-600 hover:decoration-2"
          >
            {linkText}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;

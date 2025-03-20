import React from "react";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
  buttonText?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  buttonText,
}) => {
  return (
    <div className="group max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      )}

      <div className="px-6 py-4">
        <div className="font-regular mb-2 ">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {tags && (
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {buttonText && (
        <div className="px-6 py-4">
          <button className="text-gray-900 font-bold group-hover:underline group-hover:decoration-purple-600 group-hover:decoration-2">
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

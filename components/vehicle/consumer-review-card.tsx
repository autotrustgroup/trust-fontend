import { Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReviewCardProps {
  rating: number;
  title: string;
  date: string;
  author: string;
  location: string;
  ownsVehicle: boolean;
  content: string;
}

export function ConsumerReviewCard({
  rating,
  title,
  date,
  author,
  location,
  ownsVehicle,
  content,
}: ReviewCardProps) {
  return (
    <div className="border border-gray-200 rounded-sm p-6">
      {/* Rating */}
      <div className="flex items-center gap-2 mb-2">
        <span className="font-medium">{rating.toFixed(1)}</span>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-4 h-4 fill-[#8B45F7] text-[#8B45F7]"
            />
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-2">{title}</h3>

      {/* Meta information */}
      <div className="space-y-1 mb-4">
        <p className="text-[15px] text-gray-600">{date}</p>
        <p className="text-[15px]">
          By {author} from {location}
        </p>
        {ownsVehicle && (
          <p className="text-[15px] font-medium">Owns this car</p>
        )}
      </div>

      {/* Content */}
      <p className="text-[15px] text-gray-900 mb-4">{content}</p>

      {/* Show full review button */}
      <Button
        variant="link"
        className="text-[15px] font-medium text-gray-900 p-0 h-auto hover:no-underline flex items-center"
      >
        Show full review
        <ChevronDown className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
}

import { Star } from "lucide-react";

interface Rating {
  label: string;
  score: number;
}

interface ConsumerReviewsProps {
  year: number;
  make: string;
  model: string;
  overallRating: number;
  totalReviews: number;
  recommendationRate: number;
  ratings: Rating[];
}

export function ConsumerReviews({
  year,
  make,
  model,
  overallRating,
  totalReviews,
  recommendationRate,
  ratings,
}: ConsumerReviewsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-3">Consumer reviews</h2>
      <p className="text-[15px] text-gray-600 mb-4">
        See what others are saying about the {year} {make} {model}.
      </p>

      {/* Overall Rating */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl font-bold">{overallRating}</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${
                  star <= Math.floor(overallRating)
                    ? "fill-[#8B45F7] text-[#8B45F7]"
                    : star <= overallRating
                    ? "fill-[#8B45F7]/50 text-[#8B45F7]"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-600 text-sm">
            ({totalReviews} reviews)
          </span>
        </div>
        <p className="text-[15px] text-gray-600">
          {recommendationRate}% of drivers recommend this car
        </p>
      </div>

      {/* Rating Breakdown */}
      <div className="space-y-4">
        <h3 className="text-[15px] font-medium">
          Rating breakdown (out of 5):
        </h3>
        {ratings.map((rating) => (
          <div key={rating.label} className="flex items-center justify-between">
            <span className="text-[15px] text-gray-900">{rating.label}</span>
            <div className="flex items-center gap-4">
              <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8B45F7] rounded-full"
                  style={{ width: `${(rating.score / 5) * 100}%` }}
                />
              </div>
              <span className="text-[15px] font-medium w-8">
                {rating.score}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-[15px] font-medium mt-6">
        Most recent consumer reviews
      </h3>
    </div>
  );
}

import { ConsumerReviewCard } from "./consumer-review-card";

interface RecentReviewsProps {
  reviews: Array<{
    rating: number;
    title: string;
    date: string;
    author: string;
    location: string;
    ownsVehicle: boolean;
    content: string;
  }>;
}

export function RecentReviews({ reviews }: RecentReviewsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Most recent consumer reviews</h3>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <ConsumerReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
}

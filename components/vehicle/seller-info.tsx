import { ArrowUpRight, Star } from "lucide-react";

interface SellerInfoProps {
  dealer: {
    name: string;
    rating: number;
    reviews: number;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    description: string;
  };
  vehicle: {
    year: number;
    make: string;
    model: string;
    notes: string;
  };
}

export function SellerInfo({ dealer, vehicle }: SellerInfoProps) {
  // Generate array of stars based on rating
  const fullStars = Math.floor(dealer.rating);
  const hasHalfStar = dealer.rating % 1 >= 0.5;
  const stars = Array(5)
    .fill(0)
    .map((_, i) => {
      if (i < fullStars) return "full";
      if (i === fullStars && hasHalfStar) return "half";
      return "empty";
    });

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Seller's info</h2>

      {/* Dealer Name and Rating */}
      <h3 className="text-xl font-semibold mb-2">{dealer.name}</h3>
      <div className="flex items-center gap-2 mb-4">
        <span className="font-medium">{dealer.rating}</span>
        <div className="flex">
          {stars.map((type, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                type === "full"
                  ? "fill-[#8B45F7] text-[#8B45F7]"
                  : type === "half"
                  ? "fill-[#8B45F7]/50 text-[#8B45F7]"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <a href="#" className="text-gray-600 hover:underline">
          ({dealer.reviews.toLocaleString()} reviews)
        </a>
      </div>

      {/* Address */}
      <p className="text-[15px] text-gray-900 mb-6">
        {dealer.address.street} {dealer.address.city}, {dealer.address.state}{" "}
        {dealer.address.zip}
      </p>

      {/* Action Links */}
      <div className="space-y-2 mb-8">
        <a
          href="#"
          className="inline-flex items-center text-[15px] font-medium text-gray-900 hover:underline"
        >
          View this car on seller's website
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </a>
        <br />
        <a
          href="#"
          className="inline-flex items-center text-[15px] font-medium text-gray-900 hover:underline"
        >
          Visit {dealer.name}
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      {/* Seller's Notes */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">
          Seller's notes about this car
        </h3>
        <p className="text-[15px] text-gray-900 mb-4">{vehicle.notes}</p>
        <p className="text-[15px] text-gray-900 mb-4">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </p>
        <p className="text-[15px] text-gray-900 whitespace-pre-line">
          {dealer.description}
        </p>
      </div>

      {/* Check Recalls Link */}
      <a
        href="#"
        className="inline-flex items-center text-[15px] font-medium text-gray-900 hover:underline"
      >
        Check for recalls
        <ArrowUpRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
}

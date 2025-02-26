import { MapPin } from "lucide-react";

interface DealGaugeProps {
  price: number;
  comparisonModel: string;
  comparisonYear: number;
  marketRange: {
    min: number;
    current: number;
    max: number;
    average: number;
  };
}

export function DealGauge({
  price,
  comparisonModel,
  comparisonYear,
  marketRange,
}: DealGaugeProps) {
  // Calculate the position of the current price marker (0-100%)
  const position =
    ((price - marketRange.min) / (marketRange.max - marketRange.min)) * 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-0.5 mb-4">
        <h2 className="text-[28px] font-bold leading-tight">Deal Gauge™</h2>
        <p className="text-xs text-gray-600">Powered by Cars.com</p>
      </div>

      <p className="text-[15px] leading-normal mb-6">
        We compared this car with similar {comparisonYear} {comparisonModel}{" "}
        based on price, mileage, features, condition, and{" "}
        <button className="text-black underline font-medium inline-block">
          several other factors
        </button>
        .
      </p>

      {/* Price Indicator with Map Pin */}
      <div className="relative mb-12">
        <div
          className="absolute"
          style={{
            left: `${position}%`,
            top: "-24px",
            transform: "translateX(-50%)",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-12 h-12 bg-[#00694B] rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 w-3 h-3 bg-[#00694B]" />
            </div>
            <div className="text-center mt-2">
              <p className="text-xl font-bold">${price.toLocaleString()}</p>
              <p className="text-sm text-gray-600">This is a good deal.</p>
            </div>
          </div>
        </div>

        {/* Price Range Line */}
        <div className="relative pt-20">
          {/* Base line */}
          <div className="h-[1px] bg-black w-full" />

          {/* Gray market range bar */}
          <div className="absolute top-[19px] left-1/2 -translate-x-1/2 w-[60%] h-[3px] bg-gray-200 rounded-full" />

          {/* Price Points */}
          <div className="flex justify-between mt-2 text-sm">
            <span>${(marketRange.min / 1000).toFixed(1)}K</span>
            <span>${(marketRange.average / 1000).toFixed(1)}K</span>
            <span>${(27000 / 1000).toFixed(1)}K</span>
            <span>${(marketRange.max / 1000).toFixed(1)}K</span>
          </div>

          {/* Label */}
          <p className="text-center text-xs text-gray-600 mt-1">
            Avg. market price range
          </p>
        </div>
      </div>
    </div>
  );
}

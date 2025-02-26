import Image from "next/image";
import Link from "next/link";
import { Battery, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface SimilarVehicle {
  id: string;
  condition: "Used";
  year: number;
  make: string;
  model: string;
  trim?: string;
  price: number;
  priceDropAmount?: number;
  image: string;
  mileage: number;
  deal?: {
    type: "Good Deal" | "Great Deal";
    underAmount: number;
  };
  evBattery?: {
    rating: "Good" | "Excellent" | "Outstanding";
  };
  isHotCar?: boolean;
}

const similarVehicles: SimilarVehicle[] = [
  {
    id: "1",
    condition: "Used",
    year: 2021,
    make: "Tesla",
    model: "Model 3",
    trim: "Standard Range Plus",
    price: 24000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-25%20at%2018.25.18-G6oWKGixvaJ3uyRFDnOscrlJ8GsLmK.png",
    mileage: 24368,
    deal: {
      type: "Good Deal",
      underAmount: 163,
    },
    evBattery: {
      rating: "Excellent",
    },
    isHotCar: true,
  },
  {
    id: "2",
    condition: "Used",
    year: 2022,
    make: "Audi",
    model: "e-tron",
    trim: "Premium",
    price: 29200,
    priceDropAmount: 200,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-25%20at%2018.25.18-G6oWKGixvaJ3uyRFDnOscrlJ8GsLmK.png",
    mileage: 33424,
    deal: {
      type: "Good Deal",
      underAmount: 0,
    },
    evBattery: {
      rating: "Outstanding",
    },
    isHotCar: true,
  },
  {
    id: "3",
    condition: "Used",
    year: 2020,
    make: "Chevrolet",
    model: "Bolt EV",
    trim: "Premier",
    price: 15900,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-25%20at%2018.25.18-G6oWKGixvaJ3uyRFDnOscrlJ8GsLmK.png",
    mileage: 28226,
    deal: {
      type: "Great Deal",
      underAmount: 623,
    },
    evBattery: {
      rating: "Excellent",
    },
  },
  {
    id: "4",
    condition: "Used",
    year: 2018,
    make: "Chevrolet",
    model: "Volt",
    trim: "Premier",
    price: 15700,
    priceDropAmount: 100,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-25%20at%2018.25.18-G6oWKGixvaJ3uyRFDnOscrlJ8GsLmK.png",
    mileage: 69199,
    deal: {
      type: "Great Deal",
      underAmount: 373,
    },
    evBattery: {
      rating: "Good",
    },
  },
];

function CarCard({ vehicle }: { vehicle: SimilarVehicle }) {
  return (
    <Link
      href={`/vehicle/${vehicle.id}`}
      className="group block bg-white rounded-sm transition-all duration-200 hover:shadow-md shadow-sm border border-gray-200 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-sm">
        <Image
          src={vehicle.image || "/placeholder.svg"}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-3 space-y-1">
        {/* Condition */}
        <div className="text-[12px] text-gray-500">{vehicle.condition}</div>

        {/* Title */}
        <h3 className="text-[14px] font-medium transition-colors group-hover:text-[#0066ff]">
          {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
        </h3>

        {/* Mileage */}
        <p className="text-[12px] text-gray-500">
          {vehicle.mileage.toLocaleString(undefined, { useGrouping: true })} mi.
        </p>

        {/* Price and Price Drop */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">
            ${vehicle.price.toLocaleString()}
          </span>
          {vehicle.priceDropAmount && (
            <span className="text-[12px] text-gray-500">
              ${vehicle.priceDropAmount} price drop
            </span>
          )}
        </div>

        {/* Badges */}
        <div className="space-y-1 mt-1">
          {vehicle.deal && (
            <div
              className={cn(
                "inline-flex px-1.5 py-0.5 text-[11px] rounded-full items-center",
                vehicle.deal.type === "Great Deal"
                  ? "bg-[#F4F1FF] text-[#7963F7]"
                  : "bg-[#ECFDF3] text-[#027A48]"
              )}
            >
              {vehicle.deal.type}
              {vehicle.deal.underAmount > 0 &&
                ` | $${vehicle.deal.underAmount} under`}
            </div>
          )}

          {vehicle.evBattery && (
            <div className="flex items-center gap-1 text-[11px] text-gray-700">
              <Battery className="w-3 h-3" />
              EV Battery Rating | {vehicle.evBattery.rating}
            </div>
          )}

          {vehicle.isHotCar && (
            <div className="flex items-center gap-1 text-[11px] text-gray-700">
              <Flame className="w-3 h-3 text-[#8B45F7]" />
              Hot Car
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export function SimilarVehicles() {
  return (
    <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-md">
      <h2 className="text-[28px] font-bold mb-6">
        Similar cars at this dealership
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {similarVehicles.map((vehicle) => (
          <CarCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>

      <Link
        href="#"
        className="text-[15px] text-[#0066ff] hover:underline font-medium"
      >
        View all cars at this dealership
      </Link>
    </div>
  );
}

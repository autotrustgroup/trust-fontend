import Image from "next/image";
import Link from "next/link";
import { vehicleData, type VehicleCategory } from "@/lib/data";

interface VehicleShowcaseProps {
  category: VehicleCategory;
  className?: string;
}

export default function VehicleShowcase({
  category,
  className,
}: VehicleShowcaseProps) {
  const vehicles = vehicleData[category] || [];

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">All new {category}</h2>
        <p className="text-gray-600 mb-4">
          Experience the best way to search new {category.toLowerCase()}
        </p>
        <Link
          href={`/shop/new-${category.toLowerCase()}`}
          className="text-black font-medium hover:underline"
        >
          Shop new {category.toLowerCase()}
        </Link>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="group">
            <div className="aspect-[4/3] relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={vehicle.image || "/placeholder.svg"}
                alt={vehicle.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium mb-2">{vehicle.name}</h3>
            <Link href={vehicle.href} className="text-black hover:underline">
              {vehicle.isGuide ? `Watch ${category}101 Series Now` : "Shop now"}
            </Link>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="flex gap-6 pt-4">
        <Link
          href={`/${category.toLowerCase()}`}
          className="text-black font-medium hover:underline"
        >
          See more {category.toLowerCase()}
        </Link>
        <Link
          href="/shop/all"
          className="text-black font-medium hover:underline"
        >
          Shop all cars
        </Link>
      </div>
    </section>
  );
}

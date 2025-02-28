import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart, Eye, Car } from "lucide-react";

// Mock data for recommended cars
const recommendedCars = [
  {
    id: 1,
    name: "2024 Hyundai Accent SE",
    price: "$18,500",
    image:
      "https://images.unsplash.com/photo-1567818735868-e71b99932e29?q=80&w=1000&auto=format&fit=crop",
    saved: true,
  },
  {
    id: 2,
    name: "2024 Toyota Camry",
    price: "$27,999",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000&auto=format&fit=crop",
    saved: false,
  },
  {
    id: 3,
    name: "2024 Honda Civic",
    price: "$23,750",
    image:
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1000&auto=format&fit=crop",
    saved: false,
  },
  {
    id: 4,
    name: "2024 Nissan Altima",
    price: "$25,999",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop",
    saved: true,
  },
];

export default function WelcomeSection() {
  return (
    <section className="my-12 bg-white rounded-lg shadow-sm p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
          <p className="text-gray-600 mt-1">
            Here are some cars we think you'll like
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-blue-500 text-blue-600 hover:bg-blue-50"
          >
            <Eye className="mr-2 h-4 w-4" />
            Saved searches
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Car className="mr-2 h-4 w-4" />
            My garage
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedCars.map((car) => (
          <Card
            key={car.id}
            className="overflow-hidden border border-gray-200 transition-all hover:shadow-md"
          >
            <CardContent className="p-0 relative">
              <div className="absolute top-2 right-2 z-10">
                <button
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    car.saved
                      ? "bg-red-500 text-white"
                      : "bg-white/80 text-gray-600 hover:text-red-500"
                  }`}
                >
                  <Heart
                    className="h-4 w-4"
                    fill={car.saved ? "currentColor" : "none"}
                  />
                </button>
              </div>
              <div className="relative">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1">
                  New arrival
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                  {car.name}
                </h3>
                <p className="text-blue-700 font-bold mb-3">{car.price}</p>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/car/${car.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    View details
                  </Link>
                  <span className="text-xs text-gray-500">
                    Added 2 days ago
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/recommended"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          View all recommended vehicles
          <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

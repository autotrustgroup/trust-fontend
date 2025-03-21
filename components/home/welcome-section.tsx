import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart, Eye, Car } from "lucide-react";
import WelcomeCard from "./cards/WelcomeCard";

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
          <WelcomeCard key={car.id} car={car} />
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

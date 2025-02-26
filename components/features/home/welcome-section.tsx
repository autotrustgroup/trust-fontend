import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data for recommended cars
const recommendedCars = [
  {
    id: 1,
    name: "2024 Hyundai Accent SE",
    price: "$18,500",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "2024 Toyota Camry",
    price: "$27,999",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "2024 Honda Civic",
    price: "$23,750",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "2024 Nissan Altima",
    price: "$25,999",
    image: "/placeholder.svg",
  },
];

export default function WelcomeSection() {
  return (
    <section className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Welcome back!</h2>
        <div className="flex gap-2">
          <Button variant="outline">Create preference</Button>
          <Button>Recent searches</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedCars.map((car) => (
          <Card key={car.id} className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={car.image || "/placeholder.svg"}
                alt={car.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{car.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">
                  {car.price}
                </p>
                <Link
                  href={`/car/${car.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View details
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

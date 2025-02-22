import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CarListings() {
  // This is a placeholder for the listings
  const listings = [
    {
      id: 1,
      title: "2024 Hyundai Accent SE",
      price: "$18,500",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "2024 Toyota Camry",
      price: "$27,999",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "2024 Honda Civic",
      price: "$23,750",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "2024 Nissan Altima",
      price: "$25,999",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {listings.map((car) => (
        <Card key={car.id}>
          <CardContent className="p-4">
            <Image
              src={car.image || "/placeholder.svg"}
              alt={car.title}
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold">{car.title}</h3>
            <p className="text-purple-600 font-semibold">{car.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

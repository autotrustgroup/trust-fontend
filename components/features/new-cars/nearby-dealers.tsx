import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const dealers = [
  {
    id: 1,
    name: "City Auto Mall",
    location: "Chicago, IL",
    distance: "5 miles",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Sunshine Motors",
    location: "Evanston, IL",
    distance: "12 miles",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Lakeview Car Center",
    location: "Oak Park, IL",
    distance: "8 miles",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Midwest Auto Group",
    location: "Naperville, IL",
    distance: "15 miles",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Windy City Motors",
    location: "Schaumburg, IL",
    distance: "20 miles",
    image: "/placeholder.svg",
  },
];

export function NearbyDealers() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Dealers near you</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {dealers.map((dealer) => (
          <Card key={dealer.id}>
            <CardContent className="p-4">
              <div className="relative aspect-video mb-4">
                <Image
                  src={dealer.image || "/placeholder.svg"}
                  alt={dealer.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold mb-2">{dealer.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{dealer.location}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                {dealer.distance} away
              </p>
              <Link
                href={`/dealers/${dealer.id}`}
                className="text-[#8B45F7] text-sm font-medium hover:underline"
              >
                View Inventory
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

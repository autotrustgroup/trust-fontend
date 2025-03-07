import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const comparisons = [
  {
    id: 1,
    cars: ["2025 Honda Civic", "2025 Toyota Corolla"],
    image: "/placeholder.svg",
  },
  {
    id: 2,
    cars: ["2025 Ford F-150", "2025 Chevrolet Silverado 1500"],
    image: "/placeholder.svg",
  },
  {
    id: 3,
    cars: ["2025 Tesla Model 3", "2025 BMW i4"],
    image: "/placeholder.svg",
  },
];

export function PopularComparisons() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Popular comparisons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comparisons.map((comparison) => (
          <Card key={comparison.id}>
            <CardContent className="p-4">
              <div className="relative aspect-video mb-4">
                <Image
                  src={comparison.image || "/placeholder.svg"}
                  alt={`${comparison.cars[0]} vs ${comparison.cars[1]}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold mb-2">
                {comparison.cars.join(" vs ")}
              </h3>
              <Link
                href={`/compare/${comparison.cars[0]
                  .split(" ")
                  .join("-")}-vs-${comparison.cars[1].split(" ").join("-")}`}
                className="text-[#8B45F7] text-sm font-medium hover:underline"
              >
                Compare Now
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

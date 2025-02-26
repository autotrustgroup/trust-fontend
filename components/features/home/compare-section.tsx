import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CompareSection() {
  const comparisons = [
    {
      id: 1,
      cars: ["2024 Tesla Model 3", "2024 BMW i4"],
      image: "/placeholder.svg",
    },
    {
      id: 2,
      cars: ["2024 Honda Accord", "2024 Toyota Camry"],
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">
        Compare top rated vehicles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {comparisons.map((comparison) => (
          <Card key={comparison.id}>
            <CardContent className="p-4">
              <Image
                src={comparison.image || "/placeholder.svg"}
                alt={`Compare ${comparison.cars.join(" vs ")}`}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <p className="text-sm text-muted-foreground">
                {comparison.cars.join(" vs ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

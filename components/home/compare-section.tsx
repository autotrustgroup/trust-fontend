import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronRight, BarChart } from "lucide-react";

export default function CompareSection() {
  const comparisons = [
    {
      id: 1,
      cars: ["2024 Tesla Model 3", "2024 BMW i4"],
      image:
        "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=1000&auto=format&fit=crop",
      category: "Electric Sedans",
      advantages: ["Performance", "Range", "Technology"],
    },
    {
      id: 2,
      cars: ["2024 Honda Accord", "2024 Toyota Camry"],
      image:
        "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=1000&auto=format&fit=crop",
      category: "Midsize Sedans",
      advantages: ["Reliability", "Fuel Economy", "Resale Value"],
    },
    {
      id: 3,
      cars: ["2024 Ford F-150", "2024 Chevrolet Silverado"],
      image:
        "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1000&auto=format&fit=crop",
      category: "Full-Size Trucks",
      advantages: ["Towing Capacity", "Payload", "Off-Road Capability"],
    },
  ];

  return (
    <section className="my-16 bg-gradient-to-r from-blue-50 to-indigo-50 py-10 px-6 rounded-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <BarChart className="mr-2 h-6 w-6 text-blue-600" />
            Compare top rated vehicles
          </h2>
          <p className="text-gray-600 mt-1">
            See how popular models stack up against each other
          </p>
        </div>
        <Link
          href="/comparisons"
          className="text-blue-600 font-medium flex items-center mt-2 md:mt-0 hover:text-blue-800"
        >
          View all comparisons
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comparisons.map((comparison) => (
          <Card
            key={comparison.id}
            className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image
                  src={comparison.image || "/placeholder.svg"}
                  alt={`Compare ${comparison.cars.join(" vs ")}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-semibold block">
                    {comparison.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="flex-1 text-gray-800 font-medium truncate">
                    {comparison.cars[0]}
                  </div>
                  <ArrowRight className="h-4 w-4 mx-2 text-gray-400" />
                  <div className="flex-1 text-gray-800 font-medium truncate text-right">
                    {comparison.cars[1]}
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-gray-700">
                    Key Comparison Points:
                  </h4>
                  <ul className="text-sm text-gray-600 pl-4 list-disc">
                    {comparison.advantages.map((advantage, index) => (
                      <li key={index}>{advantage}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/comparisons/${comparison.id}`}
                  className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md inline-flex items-center hover:bg-blue-700 transition-colors"
                >
                  Compare now
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

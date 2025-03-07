import Image from "next/image";
import Link from "next/link";

const vehicleStyles = [
  { name: "Sedans", image: "/styles/sedan.png" },
  { name: "Trucks", image: "/styles/truck.png" },
  { name: "SUVs/Crossovers", image: "/styles/suv.png" },
  { name: "Coupes", image: "/styles/coupe.png" },
  { name: "Hatchbacks", image: "/styles/hatchback.png" },
  { name: "Sport/Muscle", image: "/styles/sports.png" },
  { name: "Convertibles", image: "/styles/convertible.png" },
  { name: "Wagons", image: "/styles/wagon.png" },
  { name: "Mini-SUVs", image: "/styles/mini-suv.png" },
  { name: "Hybrids", image: "/styles/hybrid.png" },
  { name: "Electric", image: "/styles/electric.png" },
];

export function VehicleStyles() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Shop Used Vehicles by Style</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vehicleStyles.map((style) => (
          <Link
            key={style.name}
            href={`/used-cars/style/${style.name.toLowerCase()}`}
            className="group"
          >
            <div className="bg-gray-100 rounded-lg p-4 text-center transition-shadow hover:shadow-md">
              <div className="relative h-32 mb-4">
                <Image
                  src={style.image || "/placeholder.svg"}
                  alt={`${style.name}`}
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <p className="text-sm font-medium">Used {style.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

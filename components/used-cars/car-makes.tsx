import Image from "next/image";
import Link from "next/link";

const carMakes = [
  { name: "Audi", logo: "/logos/audi.svg" },
  { name: "BMW", logo: "/logos/bmw.svg" },
  { name: "Chevrolet", logo: "/logos/chevrolet.svg" },
  { name: "Ford", logo: "/logos/ford.svg" },
  { name: "Honda", logo: "/logos/honda.svg" },
  { name: "Hyundai", logo: "/logos/hyundai.svg" },
  { name: "Jeep", logo: "/logos/jeep.svg" },
  { name: "Kia", logo: "/logos/kia.svg" },
  { name: "Lexus", logo: "/logos/lexus.svg" },
  { name: "Mazda", logo: "/logos/mazda.svg" },
  { name: "Mercedes-Benz", logo: "/logos/mercedes.svg" },
  { name: "Porsche", logo: "/logos/porsche.svg" },
  { name: "Subaru", logo: "/logos/subaru.svg" },
  { name: "Tesla", logo: "/logos/tesla.svg" },
  { name: "Toyota", logo: "/logos/toyota.svg" },
  { name: "Volkswagen", logo: "/logos/volkswagen.svg" },
];

export function CarMakes() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Used Cars for Sale by Make</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
        {carMakes.map((make) => (
          <Link
            key={make.name}
            href={`/used-cars/${make.name.toLowerCase()}`}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="relative w-16 h-16">
              <Image
                src={make.logo || "/placeholder.svg"}
                alt={`${make.name} logo`}
                fill
                className="object-contain transition-transform group-hover:scale-110"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="text-sm text-blue-600 hover:underline">
          Additional Vehicle Categories
        </button>
      </div>
    </section>
  );
}

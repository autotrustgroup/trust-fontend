import Image from "next/image";
import Link from "next/link";

const popularCars = [
  { make: "Toyota", model: "Camry", image: "/cars/toyota-camry.jpg" },
  { make: "Honda", model: "Civic", image: "/cars/honda-civic.jpg" },
  { make: "Ford", model: "F-150", image: "/cars/ford-f150.jpg" },
  {
    make: "Chevrolet",
    model: "Silverado",
    image: "/cars/chevrolet-silverado.jpg",
  },
  { make: "Nissan", model: "Altima", image: "/cars/nissan-altima.jpg" },
  { make: "Honda", model: "CR-V", image: "/cars/honda-crv.jpg" },
];

export function PopularUsedCars() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Popular Used Cars</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {popularCars.map((car) => (
          <Link
            key={`${car.make}-${car.model}`}
            href={`/used-cars/${car.make.toLowerCase()}/${car.model.toLowerCase()}`}
            className="group"
          >
            <div className="bg-gray-100 rounded-lg p-4 text-center transition-shadow hover:shadow-md">
              <div className="relative h-32 mb-4">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={`${car.make} ${car.model}`}
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <p className="text-sm font-medium">
                {car.make} {car.model}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

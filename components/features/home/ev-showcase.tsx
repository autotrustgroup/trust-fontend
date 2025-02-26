import Image from "next/image";
import Link from "next/link";

// MOCK DATA - Replace with real data fetching
const evModels = [
  {
    id: 1,
    name: "Tesla Model 3",
    image: "/placeholder.svg?height=200&width=300",
    href: "/shop/tesla-model-3",
  },
  {
    id: 2,
    name: "Tesla Model S",
    image: "/placeholder.svg?height=200&width=300",
    href: "/shop/tesla-model-s",
  },
  {
    id: 3,
    name: "Nissan Leaf",
    image: "/placeholder.svg?height=200&width=300",
    href: "/shop/nissan-leaf",
  },
  {
    id: 4,
    name: "Tesla Model Y",
    image: "/placeholder.svg?height=200&width=300",
    href: "/shop/tesla-model-y",
  },
  {
    id: 5,
    name: "Ford Mustang Mach-E",
    image: "/placeholder.svg?height=200&width=300",
    href: "/shop/ford-mustang-mach-e",
  },
  {
    id: 6,
    name: "Ford F-150 Lightning",
    image: "/placeholder.svg?height=200&width=300",
    href: "/shop/ford-f150-lightning",
  },
  {
    id: 7,
    name: "BMW i3",
    image: "/placeholder.svg?height=200&width=300",
    href: "/shop/bmw-i3",
  },
  {
    id: 8,
    name: "Volkswagen ID.4",
    image: "/placeholder.svg?height=200&width=300",
    href: "/shop/volkswagen-id4",
  },
  {
    id: 9,
    name: "What to know before purchasing an EV",
    image: "/placeholder.svg?height=200&width=300",
    href: "/ev101",
    isGuide: true,
  },
];

export default function EVShowcase() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">All new EVs</h2>
        <p className="text-gray-600 mb-4">
          Experience the best way to search new cars
        </p>
        <Link
          href="/shop/new-cars"
          className="text-black font-medium hover:underline"
        >
          Shop new cars
        </Link>
      </div>

      {/* EV Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {evModels.map((model) => (
          <div key={model.id} className="group">
            <div className="aspect-[4/3] relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={model.image || "/placeholder.svg"}
                alt={model.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium mb-2">{model.name}</h3>
            <Link href={model.href} className="text-black hover:underline">
              {model.isGuide ? "Watch EV101 Series Now" : "Shop now"}
            </Link>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="flex gap-6 pt-4">
        <Link
          href="/electric-cars"
          className="text-black font-medium hover:underline"
        >
          See more electric cars
        </Link>
        <Link
          href="/shop/all"
          className="text-black font-medium hover:underline"
        >
          Shop all cars
        </Link>
      </div>
    </section>
  );
}

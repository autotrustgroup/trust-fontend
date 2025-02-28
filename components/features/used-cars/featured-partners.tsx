import Image from "next/image";

const partners = [
  { name: "AutoNation", logo: "/logos/autonation.png" },
  { name: "CarMax", logo: "/logos/carmax.png" },
  { name: "Carvana", logo: "/logos/carvana.png" },
  { name: "Vroom", logo: "/logos/vroom.png" },
];

export function FeaturedPartners() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center">
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={150}
              height={75}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

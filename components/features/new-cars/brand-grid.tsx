import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const brands = [
  {
    name: "Acura",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=242,y=188,w=48,h=48",
  },
  {
    name: "Alfa Romeo",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=457,y=188,w=48,h=48",
  },
  {
    name: "Aston Martin",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=672,y=188,w=48,h=48",
  },
  {
    name: "Audi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=887,y=188,w=48,h=48",
  },
  {
    name: "Bentley",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=1102,y=188,w=48,h=48",
  },
  {
    name: "BMW",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=1317,y=188,w=48,h=48",
  },
  {
    name: "Bugatti",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=242,y=339,w=48,h=48",
  },
  {
    name: "Buick",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=457,y=339,w=48,h=48",
  },
  {
    name: "Cadillac",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=672,y=339,w=48,h=48",
  },
  {
    name: "Chevrolet",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=887,y=339,w=48,h=48",
  },
  {
    name: "Chrysler",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=1102,y=339,w=48,h=48",
  },
  {
    name: "Dodge",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.48.24-lt2geO4OnP5KlCkYu6eF3dJKBf6g3n.png#x=1317,y=339,w=48,h=48",
  },
];

export function BrandGrid() {
  return (
    <section className="py-12 bg-[#141817]">
      <div className="container mx-auto px-4">
        <h2 className="text-[28px] leading-9 font-bold text-white mb-8">
          Browse new cars by brand
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/new-cars/${brand.name.toLowerCase()}`}
              className="flex flex-col items-center p-6 bg-[#1C1F1E] rounded-lg hover:bg-[#262929] transition-colors group"
            >
              <div className="w-12 h-12 relative mb-3">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={48}
                  height={48}
                  className="object-contain brightness-[0.9] group-hover:brightness-100 transition-all"
                />
              </div>
              <span className="text-[14px] leading-5 text-[#E5E5E5] group-hover:text-white">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <Link
            href="/new-cars/brands"
            className="inline-flex items-center text-[14px] leading-5 text-white font-medium hover:text-gray-200"
          >
            See all brands
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

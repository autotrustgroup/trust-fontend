import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "Alfa Romeo",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.33.01-pQiiD4AU1b5vA7Sdram2wFk8428ZNw.png#x=132,y=185,w=48,h=48",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.33.01-pQiiD4AU1b5vA7Sdram2wFk8428ZNw.png#x=36,y=119,w=238,h=156",
    href: "/research/alfa-romeo",
  },
  {
    name: "Nissan",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.33.01-pQiiD4AU1b5vA7Sdram2wFk8428ZNw.png#x=347,y=185,w=48,h=48",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.33.01-pQiiD4AU1b5vA7Sdram2wFk8428ZNw.png#x=251,y=119,w=238,h=156",
    href: "/research/nissan",
  },
  {
    name: "Kia",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.33.01-pQiiD4AU1b5vA7Sdram2wFk8428ZNw.png#x=562,y=185,w=48,h=48",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.33.01-pQiiD4AU1b5vA7Sdram2wFk8428ZNw.png#x=466,y=119,w=238,h=156",
    href: "/research/kia",
  },
  {
    name: "Volvo",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.33.01-pQiiD4AU1b5vA7Sdram2wFk8428ZNw.png#x=777,y=185,w=48,h=48",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.33.01-pQiiD4AU1b5vA7Sdram2wFk8428ZNw.png#x=681,y=119,w=238,h=156",
    href: "/research/volvo",
  },
];

export function ResearchByBrand() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-[28px] font-bold mb-6">Research by brand</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="relative aspect-[3/2] rounded-lg overflow-hidden group"
            >
              {/* Background Image */}
              <Image
                src={brand.image || "/placeholder.svg"}
                alt={`${brand.name} cars`}
                fill
                className="object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-grey-900/50 group-hover:bg-grey-900/40 transition-colors" />

              {/* Logo and Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-lg font-medium">
                  {brand.name}
                </span>
              </div>
            </Link>
          ))}

          {/* See All Brands Card */}
          <Link
            href="/research/brands"
            className="relative aspect-[3/2] rounded-lg border border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors"
          >
            <span className="text-lg font-medium">See all brands</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

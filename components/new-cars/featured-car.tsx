import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedCar() {
  return (
    <section className="py-12 bg-[#E6F4F5] rounded-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">2025 Cadillac Escalade</h2>
            <p className="text-gray-600 mb-6">Starting at $79,795 MSRP</p>
            <Button asChild>
              <Link href="/new-cars/cadillac-escalade">Learn More</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/cars/cadillac-escalade.jpg"
              alt="2025 Cadillac Escalade"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

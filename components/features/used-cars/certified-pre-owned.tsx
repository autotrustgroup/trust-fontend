import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CertifiedPreOwned() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Certified Pre-Owned Vehicles
            </h2>
            <p className="text-lg mb-6">
              Get the reliability of a new car with the affordability of a used
              one. Certified Pre-Owned vehicles undergo rigorous inspections and
              come with extended warranties.
            </p>
            <Button className="bg-[#8B45F7] hover:bg-[#7B3BE3] text-white">
              Shop Certified Pre-Owned
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/certified-pre-owned.jpg"
              alt="Certified Pre-Owned Vehicle"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

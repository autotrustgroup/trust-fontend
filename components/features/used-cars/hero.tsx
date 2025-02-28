import Image from "next/image";
import { SearchForm } from "./search-form";

export function UsedCarsHero() {
  return (
    <div className="relative bg-gradient-to-r from-[#FF9B3F] to-[#FFC700] h-[400px]">
      <div className="container mx-auto px-4 h-full relative">
        <div className="pt-12">
          <h1 className="text-4xl font-bold text-white mb-8">
            Used Cars for Sale
          </h1>
          <div className="max-w-xl">
            <SearchForm />
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute right-0 bottom-0 w-[600px] h-[300px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usecars-mCAOMq9Tsl9XqrWwH09a5hpPOo71RQ.png"
            alt="Toyota Camry"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

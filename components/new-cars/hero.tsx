import Image from "next/image";
import Link from "next/link";
import { SearchForm } from "@/components/new-cars/search-form";

export function NewCarHero() {
  return (
    <div className="relative bg-[#141817] min-h-[600px]">
      <div className="container mx-auto px-4 pt-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-300 mb-8">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span>New cars</span>
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-white text-5xl font-bold mb-8">
            Find your
            <br />
            next <span className="text-[#8B45F7]">new car</span>
          </h1>

          <div className="max-w-xl">
            <SearchForm />
          </div>

          <div className="mt-12">
            <p className="text-gray-400 mb-2">Featured</p>
            <Link
              href="/new-cars/alfa-romeo/tonale"
              className="text-white hover:underline inline-flex items-center"
            >
              Alfa Romeo Tonale
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M3 13L13 3M13 3H7M13 3V9"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute right-0 bottom-0 w-[65%] h-[90%]">
          <Image
            src="/cars/alfa-romeo-tonale.png" // You'll need to add this image to your public folder
            alt="Alfa Romeo Tonale"
            fill
            className="object-contain object-right-bottom"
            priority
            sizes="(max-width: 768px) 100vw, 65vw"
          />
        </div>
      </div>
    </div>
  );
}

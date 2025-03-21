import Container from "@/components/common-components/container";
import HeroSection from "@/components/common-components/HeroSection/heroSection";
import UsedCarCard from "@/components/home/cards/UsedCarCard";
import { usedcarcategories } from "@/components/home/constants/usedcars";
import SearchForm from "@/components/used-cars/search-form";
import Link from "next/link";

export default function UsedCarsPage() {
  return (
    <Container>
      <div className="pt-7">
        {/* BreadCrumb */}
        <div className="text-sm flex items-center mb-6">
          <Link
            href="/"
            className="underline hover:decoration-purple-600 hover:decoration-2"
          >
            Home
          </Link>
          <span className="mx-2 text-[#a3aeac]">/</span>{" "}
          <span>Cars for sale</span>
        </div>

        {/* Title */}
        <div className="">
          <h1 className="font-semibold text-[52px]">Cars For Sale</h1>
        </div>

        <section className="relative">
          {/* Overlay with text */}
          <HeroSection
            backgroundImage={"/hero.png"}
            heading={"Imagine the possibilities"}
            sponsorLogo={"/nissanLogo.png"}
            sponsorTextPrimary={"Buckle up for your next"}
            sponsorTextSecondary={"adventure."}
            sponsorTextTertiary={"The Nissan Now Sales Event"}
          />
        </section>
        <section>
          <div className="">
            <SearchForm className="shadow-lg border border-gray-100" />
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto py-12">
          <h2 className="text-h1 font-bold text-gray-900">
            Find new & used cars for sale
          </h2>
          <p className="text-gray-900 text-bodylg mb-6">
            Tools and buying guides for car shoppers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usedcarcategories.map((category) => (
              <UsedCarCard key={category.title} category={category} />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}

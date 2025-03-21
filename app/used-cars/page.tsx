import Container from "@/components/common-components/container";
import HeroSection from "@/components/common-components/HeroSection/heroSection";
import SearchForm from "@/components/used-cars/search-form";

export default function UsedCarsPage() {
  return (
    <Container>
      <div className="pt-7">
        {/* BreadCrumb */}
        <div className="text-sm flex items-center mb-6">
          <a
            href="/"
            className="underline hover:decoration-purple-600 hover:decoration-2"
          >
            Home
          </a>
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

          {/* Search Form */}
          <div className="">
            <SearchForm className="shadow-lg border border-gray-100" />
          </div>
        </section>
      </div>
    </Container>
  );
}

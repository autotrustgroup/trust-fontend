"use client";
import Link from "next/link";
import Container from "@/components/common-components/container";
import HeroSection from "@/components/common-components/HeroSection/heroSection";
import UsedCarCard from "@/components/home/cards/UsedCarCard";
import { usedcarcategories } from "@/components/home/constants/usedcars";
import SearchForm from "@/components/used-cars/search-form";
import { popularSearch, faqs, newsTips, helpTopics } from "./constant";
import dynamic from "next/dynamic";
import Image from "next/image";

const CustomAccordion = dynamic(
  () => import("@/components/common-components/CutomAccordion"),
  {
    ssr: false,
  }
);

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
        <section className="pt-12">
          <h2 className="text-[28px] leading-[36px] font-bold mb-8 ">
            Popular searches
          </h2>
          <CustomAccordion data={popularSearch} />
        </section>
        <section className="pt-12">
          <h2 className="text-[28px] leading-[36px] font-bold mb-4 ">
            News & tips when buying a car
          </h2>
          <p className="pb-10 text-lg">
            The latest stories and useful tips from Cars.com experts help you
            shop smart.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-8">
            {newsTips.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start gap-4"
              >
                <div className="w-full md:w-1/3 flex-shrink-0 relative">
                  <Image
                    src={item.image}
                    alt="2024 Cars.com Affordability Report"
                    width={238}
                    height={158}
                    className="h-auto w-full object-cover rounded"
                  />
                </div>
                <div className="flex flex-col h-full justify-between">
                  <h3 className="text-lg font-normal">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    {item.description}
                  </p>
                  <p className="mt-2 font-semibold text-sm">
                    <Link
                      href="#"
                      className="underline hover:decoration-purple-600 hover:decoration-2"
                    >
                      {item.link}
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="p-3 mt-4 border border-grey-800 text-gray-800 rounded-full px-5 font-semibold font-base w-full md:w-fit hover:bg-gray-200">
            Browse all articles
          </button>
          <hr className="mt-6 mb-6 border-black" />
        </section>
        <section className="pt-12">
          <h2 className="text-[28px] leading-[36px] font-bold mb-8 ">
            Used car buying, financing, and warranty FAQ
          </h2>
          <CustomAccordion data={faqs} />
        </section>
        <section className="py-12">
          <h2 className="text-[28px] leading-[36px] font-bold mb-8 ">
            Were you looking for more on these related topics?
          </h2>
          <div className="space-y-6">
            {helpTopics.map((topic, index) => (
              <div key={topic.title}>
                <h3 className=" text-base mb-1">{topic.title}</h3>

                <p className="text-sm text-gray-700 mb-2">
                  {topic.description}
                </p>

                <Link
                  href={topic.link.href}
                  className="underline hover:decoration-primary-600 hover:decoration-2 font-semibold text-sm"
                >
                  {topic.link.label}
                </Link>

                {index < helpTopics.length - 1 && (
                  <hr className="mt-4 border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}

"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Award {
  winner: {
    year: number;
    make: string;
    model: string;
    link: string;
  };
  nominees: Array<{
    year: number;
    make: string;
    model: string;
    link: string;
  }>;
  seeWhyLink: string;
}

const awards: Record<string, Award> = {
  "Best of the Year": {
    winner: {
      year: 2025,
      make: "Hyundai",
      model: "Santa Fe",
      link: "/research/hyundai/santa-fe",
    },
    nominees: [
      {
        year: 2025,
        make: "Volkswagen",
        model: "ID. Buzz",
        link: "/research/volkswagen/id-buzz",
      },
      {
        year: 2025,
        make: "Toyota",
        model: "Camry",
        link: "/research/toyota/camry",
      },
      {
        year: 2025,
        make: "RAM",
        model: "1500",
        link: "/research/ram/1500",
      },
      {
        year: 2025,
        make: "Honda",
        model: "Civic Hybrid",
        link: "/research/honda/civic-hybrid",
      },
      {
        year: 2025,
        make: "Hyundai",
        model: "IONIQ 5 N",
        link: "/research/hyundai/ioniq-5-n",
      },
    ],
    seeWhyLink: "/awards/2025/best-of-year-winner-hyundai-santa-fe",
  },
  "Best Pickup Truck": {
    winner: {
      year: 2025,
      make: "RAM",
      model: "1500",
      link: "/research/ram/1500",
    },
    nominees: [
      {
        year: 2025,
        make: "Ford",
        model: "F-150",
        link: "/research/ford/f-150",
      },
      {
        year: 2025,
        make: "Ford",
        model: "Ranger",
        link: "/research/ford/ranger",
      },
    ],
    seeWhyLink: "/awards/2025/best-pickup-ram-1500",
  },
  "Best Electric Vehicle": {
    winner: {
      year: 2025,
      make: "Kia",
      model: "EV9",
      link: "/research/kia/ev9",
    },
    nominees: [
      {
        year: 2025,
        make: "Hyundai",
        model: "IONIQ 6",
        link: "/research/hyundai/ioniq-6",
      },
      {
        year: 2025,
        make: "Lucid",
        model: "Air",
        link: "/research/lucid/air",
      },
    ],
    seeWhyLink: "/awards/2025/best-electric-vehicle-kia-ev9",
  },
  "Best SUV": {
    winner: {
      year: 2025,
      make: "Toyota",
      model: "Land Cruiser",
      link: "/research/toyota/land-cruiser",
    },
    nominees: [
      {
        year: 2025,
        make: "Honda",
        model: "Pilot",
        link: "/research/honda/pilot",
      },
      {
        year: 2025,
        make: "Jeep",
        model: "Wrangler",
        link: "/research/jeep/wrangler",
      },
    ],
    seeWhyLink: "/awards/2025/best-suv-toyota-land-cruiser",
  },
  "Best Luxury Car": {
    winner: {
      year: 2025,
      make: "Genesis",
      model: "Electrified GV70",
      link: "/research/genesis/electrified-gv70",
    },
    nominees: [
      {
        year: 2025,
        make: "RAM",
        model: "1500",
        link: "/research/ram/1500",
      },
      {
        year: 2025,
        make: "Lexus",
        model: "LC 500",
        link: "/research/lexus/lc-500",
      },
    ],
    seeWhyLink: "/awards/2025/best-luxury-car-genesis-electrified-gv70",
  },
};

export function BestOfAwards() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Best of the Year": true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-[32px] font-bold mb-2">2025 Best of Awards</h2>
        <p className="text-[15px] text-gray-600 mb-8">
          See all of the winners and nominees.
        </p>

        <div className="divide-y">
          {Object.entries(awards).map(([category, data]) => (
            <div key={category} className="py-6">
              <button
                onClick={() => toggleSection(category)}
                className="w-full flex items-center justify-between text-left group"
              >
                <h3 className="text-[22px] font-bold">{category}</h3>
                <ChevronDown
                  className={cn(
                    "w-6 h-6 text-gray-400 transition-transform",
                    openSections[category] ? "rotate-180" : ""
                  )}
                />
              </button>

              {openSections[category] && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-8">
                  <div className="space-y-1">
                    <Link
                      href={data.winner.link}
                      className="text-[15px] font-medium hover:text-[#0066ff] hover:underline"
                    >
                      {data.winner.year} {data.winner.make} {data.winner.model}
                    </Link>
                    <p className="text-[13px] text-gray-600">Winner</p>
                  </div>

                  {data.nominees.map((nominee, index) => (
                    <div key={index} className="space-y-1">
                      <Link
                        href={nominee.link}
                        className="text-[15px] font-medium hover:text-[#0066ff] hover:underline"
                      >
                        {nominee.year} {nominee.make} {nominee.model}
                      </Link>
                      <p className="text-[13px] text-gray-600">Nominee</p>
                    </div>
                  ))}

                  <div className="md:col-start-4 md:justify-self-end">
                    <Link
                      href={data.seeWhyLink}
                      className="text-[15px] font-medium hover:text-[#0066ff] hover:underline"
                    >
                      See why the {data.winner.year} {data.winner.make}{" "}
                      {data.winner.model} won {category}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

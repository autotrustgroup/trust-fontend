"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Section {
  title: string;
  isOpen: boolean;
}

export function ReadyToBuy() {
  const [sections, setSections] = useState<Record<string, boolean>>({
    type: true,
    price: true,
    make: true,
    models: true,
    city: true,
  });

  const toggleSection = (section: string) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-[28px] leading-9 font-bold mb-8">
          Ready to buy? Shop new cars now
        </h2>

        {/* Previous sections remain the same */}

        {/* Shop by Make */}
        <div className="border-t border-[#E5E5E5]">
          <button
            onClick={() => toggleSection("make")}
            className="w-full py-4 flex items-center justify-between text-left"
          >
            <span className="text-[15px] leading-6 font-semibold">
              Shop new cars by make
            </span>
            {sections.make ? (
              <ChevronUp className="w-5 h-5 text-[#595959]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#595959]" />
            )}
          </button>

          {sections.make && (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 pb-6">
              <Link
                href="/new-cars/ford"
                className="text-[15px] leading-6 hover:underline"
              >
                New Ford cars for sale
              </Link>
              <Link
                href="/new-cars/mercedes-benz"
                className="text-[15px] leading-6 hover:underline"
              >
                New Mercedes-Benz cars for sale
              </Link>
              <Link
                href="/new-cars/land-rover"
                className="text-[15px] leading-6 hover:underline"
              >
                New Land Rover cars for sale
              </Link>
              <Link
                href="/new-cars/ineos"
                className="text-[15px] leading-6 hover:underline"
              >
                New INEOS cars for sale
              </Link>
              <Link
                href="/new-cars/chevrolet"
                className="text-[15px] leading-6 hover:underline"
              >
                New Chevrolet cars for sale
              </Link>
              <Link
                href="/new-cars/ram"
                className="text-[15px] leading-6 hover:underline"
              >
                New RAM cars for sale
              </Link>
              <Link
                href="/new-cars/dodge"
                className="text-[15px] leading-6 hover:underline"
              >
                New Dodge cars for sale
              </Link>
              <Link
                href="/new-cars/fiat"
                className="text-[15px] leading-6 hover:underline"
              >
                New FIAT cars for sale
              </Link>
              <Link
                href="/new-cars/honda"
                className="text-[15px] leading-6 hover:underline"
              >
                New Honda cars for sale
              </Link>
              <Link
                href="/new-cars/buick"
                className="text-[15px] leading-6 hover:underline"
              >
                New Buick cars for sale
              </Link>
              <Link
                href="/new-cars/infiniti"
                className="text-[15px] leading-6 hover:underline"
              >
                New INFINITI cars for sale
              </Link>
              <Link
                href="/new-cars/aston-martin"
                className="text-[15px] leading-6 hover:underline"
              >
                New Aston Martin cars for sale
              </Link>
              <Link
                href="/new-cars/hyundai"
                className="text-[15px] leading-6 hover:underline"
              >
                New Hyundai cars for sale
              </Link>
              <Link
                href="/new-cars/volkswagen"
                className="text-[15px] leading-6 hover:underline"
              >
                New Volkswagen cars for sale
              </Link>
              <Link
                href="/new-cars/mitsubishi"
                className="text-[15px] leading-6 hover:underline"
              >
                New Mitsubishi cars for sale
              </Link>
              <Link
                href="/new-cars/bentley"
                className="text-[15px] leading-6 hover:underline"
              >
                New Bentley cars for sale
              </Link>
              <Link
                href="/new-cars/nissan"
                className="text-[15px] leading-6 hover:underline"
              >
                New Nissan cars for sale
              </Link>
              <Link
                href="/new-cars/bmw"
                className="text-[15px] leading-6 hover:underline"
              >
                New BMW cars for sale
              </Link>
              <Link
                href="/new-cars/genesis"
                className="text-[15px] leading-6 hover:underline"
              >
                New Genesis cars for sale
              </Link>
              <Link
                href="/new-cars/vinfast"
                className="text-[15px] leading-6 hover:underline"
              >
                New VinFast cars for sale
              </Link>
              <Link
                href="/new-cars/toyota"
                className="text-[15px] leading-6 hover:underline"
              >
                New Toyota cars for sale
              </Link>
              <Link
                href="/new-cars/cadillac"
                className="text-[15px] leading-6 hover:underline"
              >
                New Cadillac cars for sale
              </Link>
              <Link
                href="/new-cars/chrysler"
                className="text-[15px] leading-6 hover:underline"
              >
                New Chrysler cars for sale
              </Link>
              <Link
                href="/new-cars/lotus"
                className="text-[15px] leading-6 hover:underline"
              >
                New Lotus cars for sale
              </Link>
              <Link
                href="/new-cars/kia"
                className="text-[15px] leading-6 hover:underline"
              >
                New Kia cars for sale
              </Link>
              <Link
                href="/new-cars/audi"
                className="text-[15px] leading-6 hover:underline"
              >
                New Audi cars for sale
              </Link>
              <Link
                href="/new-cars/mini"
                className="text-[15px] leading-6 hover:underline"
              >
                New MINI cars for sale
              </Link>
              <Link
                href="/new-cars/mclaren"
                className="text-[15px] leading-6 hover:underline"
              >
                New McLaren cars for sale
              </Link>
              <Link
                href="/new-cars/jeep"
                className="text-[15px] leading-6 hover:underline"
              >
                New Jeep cars for sale
              </Link>
              <Link
                href="/new-cars/lincoln"
                className="text-[15px] leading-6 hover:underline"
              >
                New Lincoln cars for sale
              </Link>
              <Link
                href="/new-cars/polestar"
                className="text-[15px] leading-6 hover:underline"
              >
                New Polestar cars for sale
              </Link>
              <Link
                href="/new-cars/rolls-royce"
                className="text-[15px] leading-6 hover:underline"
              >
                New Rolls-Royce cars for sale
              </Link>
              <Link
                href="/new-cars/gmc"
                className="text-[15px] leading-6 hover:underline"
              >
                New GMC cars for sale
              </Link>
              <Link
                href="/new-cars/volvo"
                className="text-[15px] leading-6 hover:underline"
              >
                New Volvo cars for sale
              </Link>
              <Link
                href="/new-cars/alfa-romeo"
                className="text-[15px] leading-6 hover:underline"
              >
                New Alfa Romeo cars for sale
              </Link>
              <Link
                href="/new-cars/fisker"
                className="text-[15px] leading-6 hover:underline"
              >
                New Fisker cars for sale
              </Link>
              <Link
                href="/new-cars/subaru"
                className="text-[15px] leading-6 hover:underline"
              >
                New Subaru cars for sale
              </Link>
              <Link
                href="/new-cars/lexus"
                className="text-[15px] leading-6 hover:underline"
              >
                New Lexus cars for sale
              </Link>
              <Link
                href="/new-cars/jaguar"
                className="text-[15px] leading-6 hover:underline"
              >
                New Jaguar cars for sale
              </Link>
              <Link
                href="/new-cars/mazda"
                className="text-[15px] leading-6 hover:underline"
              >
                New Mazda cars for sale
              </Link>
              <Link
                href="/new-cars/acura"
                className="text-[15px] leading-6 hover:underline"
              >
                New Acura cars for sale
              </Link>
              <Link
                href="/new-cars/maserati"
                className="text-[15px] leading-6 hover:underline"
              >
                New Maserati cars for sale
              </Link>
            </div>
          )}
        </div>

        {/* Popular Models */}
        <div className="border-t border-[#E5E5E5]">
          <button
            onClick={() => toggleSection("models")}
            className="w-full py-4 flex items-center justify-between text-left"
          >
            <span className="text-[15px] leading-6 font-semibold">
              Popular new models for sale
            </span>
            {sections.models ? (
              <ChevronUp className="w-5 h-5 text-[#595959]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#595959]" />
            )}
          </button>

          {sections.models && (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 pb-6">
              <Link
                href="/new-cars/acura-integra"
                className="text-[15px] leading-6 hover:underline"
              >
                New Acura Integra for sale
              </Link>
              <Link
                href="/new-cars/ford-bronco"
                className="text-[15px] leading-6 hover:underline"
              >
                New Ford Bronco for sale
              </Link>
              <Link
                href="/new-cars/honda-civic"
                className="text-[15px] leading-6 hover:underline"
              >
                New Honda Civic for sale
              </Link>
              <Link
                href="/new-cars/nissan-rogue"
                className="text-[15px] leading-6 hover:underline"
              >
                New Nissan Rogue for sale
              </Link>
              <Link
                href="/new-cars/cadillac-escalade"
                className="text-[15px] leading-6 hover:underline"
              >
                New Cadillac Escalade for sale
              </Link>
              <Link
                href="/new-cars/ford-maverick"
                className="text-[15px] leading-6 hover:underline"
              >
                New Ford Maverick for sale
              </Link>
              <Link
                href="/new-cars/jeep-grand-cherokee"
                className="text-[15px] leading-6 hover:underline"
              >
                New Jeep Grand Cherokee for sale
              </Link>
              <Link
                href="/new-cars/toyota-sequoia"
                className="text-[15px] leading-6 hover:underline"
              >
                New Toyota Sequoia for sale
              </Link>
              <Link
                href="/new-cars/dodge-charger"
                className="text-[15px] leading-6 hover:underline"
              >
                New Dodge Charger for sale
              </Link>
              <Link
                href="/new-cars/ford-mustang"
                className="text-[15px] leading-6 hover:underline"
              >
                New Ford Mustang for sale
              </Link>
              <Link
                href="/new-cars/jeep-wrangler"
                className="text-[15px] leading-6 hover:underline"
              >
                New Jeep Wrangler for sale
              </Link>
              <Link
                href="/new-cars/toyota-tacoma"
                className="text-[15px] leading-6 hover:underline"
              >
                New Toyota Tacoma for sale
              </Link>
              <Link
                href="/new-cars/dodge-hornet"
                className="text-[15px] leading-6 hover:underline"
              >
                New Dodge Hornet for sale
              </Link>
              <Link
                href="/new-cars/honda-accord"
                className="text-[15px] leading-6 hover:underline"
              >
                New Honda Accord for sale
              </Link>
              <Link
                href="/new-cars/land-rover-defender"
                className="text-[15px] leading-6 hover:underline"
              >
                New Land Rover Defender for sale
              </Link>
              <Link
                href="/new-cars/toyota-tundra"
                className="text-[15px] leading-6 hover:underline"
              >
                New Toyota Tundra for sale
              </Link>
            </div>
          )}
        </div>

        {/* Cars by City */}
        <div className="border-t border-b border-[#E5E5E5]">
          <button
            onClick={() => toggleSection("city")}
            className="w-full py-4 flex items-center justify-between text-left"
          >
            <span className="text-[15px] leading-6 font-semibold">
              New cars by popular city
            </span>
            {sections.city ? (
              <ChevronUp className="w-5 h-5 text-[#595959]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#595959]" />
            )}
          </button>

          {sections.city && (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 pb-6">
              <Link
                href="/new-cars/atlanta-ga"
                className="text-[15px] leading-6 hover:underline"
              >
                New cars in Atlanta, GA
              </Link>
              <Link
                href="/new-cars/dallas-tx"
                className="text-[15px] leading-6 hover:underline"
              >
                New cars in Dallas, TX
              </Link>
              <Link
                href="/new-cars/los-angeles-ca"
                className="text-[15px] leading-6 hover:underline"
              >
                New cars in Los Angeles, CA
              </Link>
              <Link
                href="/new-cars/phoenix-az"
                className="text-[15px] leading-6 hover:underline"
              >
                New cars in Phoenix, AZ
              </Link>
              <Link
                href="/new-cars/chicago-il"
                className="text-[15px] leading-6 hover:underline"
              >
                New cars in Chicago, IL
              </Link>
              <Link
                href="/new-cars/denver-co"
                className="text-[15px] leading-6 hover:underline"
              >
                New cars in Denver, CO
              </Link>
              <Link
                href="/new-cars/new-york-ny"
                className="text-[15px] leading-6 hover:underline"
              >
                New cars in New York, NY
              </Link>
              <Link
                href="/new-cars/san-diego-ca"
                className="text-[15px] leading-6 hover:underline"
              >
                New cars in San Diego, CA
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

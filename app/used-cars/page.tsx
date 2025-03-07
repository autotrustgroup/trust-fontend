import { UsedCarsHero } from "@/components/used-cars/hero";
import { PriceRangeSearch } from "@/components/used-cars/price-range-search";
import { BuyingGuide } from "@/components/used-cars/buying-guides";
import { CertifiedPreOwned } from "@/components/used-cars/certified-pre-owned";
import { PriceRanges } from "@/components/used-cars/price-ranges";
import { CarsByOwner } from "@/components/used-cars/cars-by-owner";
import { FeaturedPartners } from "@/components/used-cars/featured-partners";
import { CarMakes } from "@/components/used-cars/car-makes";
import { VehicleStyles } from "@/components/used-cars/vehicle-styles";
import { ShoppingTips } from "@/components/used-cars/shopping-tips";
import { PopularUsedCars } from "@/components/used-cars/popular-used-cars";

export default function UsedCarsPage() {
  return (
    <main className="min-h-screen bg-white">
      <UsedCarsHero />
      <PriceRangeSearch />
      <div className="container mx-auto px-4 py-8">
        <BuyingGuide />
        <CertifiedPreOwned />
        <PriceRanges />
        <CarsByOwner />
        <FeaturedPartners />
        <CarMakes />
        <VehicleStyles />
        <ShoppingTips />
        <PopularUsedCars />
      </div>
    </main>
  );
}

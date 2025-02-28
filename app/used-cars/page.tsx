import { UsedCarsHero } from "@/components/features/used-cars/hero";
import { PriceRangeSearch } from "@/components/features/used-cars/price-range-search";
import { BuyingGuide } from "@/components/features/used-cars/buying-guides";
import { CertifiedPreOwned } from "@/components/features/used-cars/certified-pre-owned";
import { PriceRanges } from "@/components/features/used-cars/price-ranges";
import { CarsByOwner } from "@/components/features/used-cars/cars-by-owner";
import { FeaturedPartners } from "@/components/features/used-cars/featured-partners";
import { CarMakes } from "@/components/features/used-cars/car-makes";
import { VehicleStyles } from "@/components/features/used-cars/vehicle-styles";
import { ShoppingTips } from "@/components/features/used-cars/shopping-tips";
import { PopularUsedCars } from "@/components/features/used-cars/popular-used-cars";

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

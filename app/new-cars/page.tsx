import { NewCarHero } from "@/components/new-cars/hero";
import { CarCategories } from "@/components/new-cars/car-categories";
import { RecommendedCars } from "@/components/new-cars/recommended-cars";
import { FeaturedCar } from "@/components/new-cars/featured-car";
import { BrandGrid } from "@/components/new-cars/brand-grid";
import { PopularComparisons } from "@/components/new-cars/popular-comparisons";
import { LatestNews } from "@/components/new-cars/latest-news";
import { NearbyDealers } from "@/components/new-cars/nearby-dealers";
import { ReadyToBuy } from "@/components/new-cars/ready-to-buy";

export default function NewCarsPage() {
  return (
    <main className="min-h-screen bg-white">
      <NewCarHero />
      <div className="container mx-auto px-4 py-8">
        <CarCategories />
        <RecommendedCars />
        <FeaturedCar />
        <BrandGrid />
        <PopularComparisons />
        <LatestNews />
        <NearbyDealers />
        <ReadyToBuy />
      </div>
    </main>
  );
}

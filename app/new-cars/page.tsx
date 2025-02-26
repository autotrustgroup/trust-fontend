import { NewCarHero } from "@/components/features/new-cars/hero";
import { CarCategories } from "@/components/features/new-cars/car-categories";
import { RecommendedCars } from "@/components/features/new-cars/recommended-cars";
import { FeaturedCar } from "@/components/features/new-cars/featured-car";
import { BrandGrid } from "@/components/features/new-cars/brand-grid";
import { PopularComparisons } from "@/components/features/new-cars/popular-comparisons";
import { LatestNews } from "@/components/features/new-cars/latest-news";
import { NearbyDealers } from "@/components/features/new-cars/nearby-dealers";
import { ReadyToBuy } from "@/components/features/new-cars/ready-to-buy";
import Footer from "@/components/layout/footer";

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
      <Footer />
    </main>
  );
}

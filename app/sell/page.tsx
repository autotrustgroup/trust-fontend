import { InstantOffer } from "@/components/features/sell-your-car/instant-offer";
import { ExploreOptions } from "@/components/features/sell-your-car/explore-options";
import { ExpertAdvice } from "@/components/features/sell-your-car/expert-advice";
import { FAQ } from "@/components/features/sell-your-car/faq";
import Footer from "@/components/layout/footer";

export default function SellYourCarPage() {
  return (
    <main className="min-h-screen bg-white">
      <InstantOffer />
      <ExploreOptions />
      <ExpertAdvice />
      <FAQ />
      <Footer />
    </main>
  );
}

import { InstantOffer } from "@/components/sell-your-car/instant-offer";
import { ExploreOptions } from "@/components/sell-your-car/explore-options";
import { ExpertAdvice } from "@/components/sell-your-car/expert-advice";
import { FAQ } from "@/components/sell-your-car/faq";
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

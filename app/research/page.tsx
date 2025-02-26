import { ResearchHero } from "@/components/features/research/hero";
import { ResearchByBrand } from "@/components/features/research/research-by-brand";
import { BestOfAwards } from "@/components/features/research/best-of-awards";
import { ResearchGuides } from "@/components/features/research/research-guides";
import { ExpertAdvice } from "@/components/features/research/expert-advice";
import Footer from "@/components/layout/footer";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white">
      <ResearchHero />

      <div className="container mx-auto px-4 py-8">
        <ResearchByBrand />
        <BestOfAwards />
        <ResearchGuides />
        <ExpertAdvice />
      </div>
      <Footer />
    </main>
  );
}

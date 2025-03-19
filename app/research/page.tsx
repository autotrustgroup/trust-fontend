import { ResearchHero } from "@/components/research/hero";
import { ResearchByBrand } from "@/components/research/research-by-brand";
import { BestOfAwards } from "@/components/research/best-of-awards";
import { ResearchGuides } from "@/components/research/research-guides";
import { ExpertAdvice } from "@/components/research/expert-advice";

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
    </main>
  );
}

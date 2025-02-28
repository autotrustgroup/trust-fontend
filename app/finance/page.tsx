import { FinanceHero } from "@/components/features/finance/hero";
import { HowItWorks } from "@/components/features/finance/how-it-works";
import { FinanceNews } from "@/components/features/finance/news";
import { FinanceFAQ } from "@/components/features/finance/faq";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function FinancePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Finance", href: "/financing" },
          ]}
        /> */}
        <FinanceHero />
        <HowItWorks />
        <FinanceNews />
        <FinanceFAQ />
      </div>
    </main>
  );
}

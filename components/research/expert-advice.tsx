import Link from "next/link";

const tools = [
  {
    title: "Side-by-side comparisons",
    description: "Choose up to four models or see popular comparisons.",
    link: "/compare-models",
    linkText: "Compare models",
  },
  {
    title: "Payment calculator",
    description: "Estimate your monthly car payments.",
    link: "/calculate-payments",
    linkText: "Calculate payments",
  },
  {
    title: "Certified pre-owned cars",
    description: "Search, compare or research CPO programs.",
    link: "/certified-pre-owned",
    linkText: "Shop & learn CPO",
  },
  {
    title: "Car reviews",
    description: "Read car reviews written by consumers.",
    link: "/consumer-reviews",
    linkText: "Search consumer reviews",
  },
  {
    title: "New and redesigned cars",
    description: "View brand-new models and redesigned cars.",
    link: "/new-cars",
    linkText: "View new and redesigned cars",
  },
  {
    title: "Need to ship your car?",
    description: "Secure shipping for your car purchase.",
    link: "/car-shipping",
    linkText: "Ship a car",
  },
];

export function ExpertAdvice() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-[32px] font-bold mb-8">Tools & expert advice</h2>

        <div className="divide-y">
          {tools.map((tool, index) => (
            <div key={index} className="py-6 first:pt-0 last:pb-0">
              <h3 className="text-[22px] font-bold mb-1">{tool.title}</h3>
              <p className="text-[15px] text-gray-600 mb-3">
                {tool.description}
              </p>
              <Link
                href={tool.link}
                className="text-[15px] font-medium hover:text-[#0066ff] hover:underline"
              >
                {tool.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

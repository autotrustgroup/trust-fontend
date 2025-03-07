import Link from "next/link";

const priceRanges = [
  "Under $10,000",
  "$10,000 - $20,000",
  "$20,000 - $30,000",
  "$30,000 - $40,000",
  "$40,000 - $50,000",
  "Over $50,000",
];

export function PriceRanges() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Shop by Price Range</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {priceRanges.map((range) => (
          <Link
            key={range}
            href={`/used-cars/price-range/${range
              .toLowerCase()
              .replace(/\s/g, "-")}`}
            className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <span className="text-sm font-medium">{range}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

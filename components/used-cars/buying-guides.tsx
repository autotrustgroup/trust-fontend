import Link from "next/link";

export function BuyingGuide() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Used Car Buying Guide</h2>
        <p className="text-lg mb-8">
          Buying a used car can be a great way to save money, but it's important
          to do your research and know what to look for.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Key Steps:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Determine your budget</li>
              <li>Research reliable makes and models</li>
              <li>Check vehicle history reports</li>
              <li>Inspect the car thoroughly</li>
              <li>Take a test drive</li>
              <li>Negotiate the price</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Helpful Resources:</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/used-car-checklist"
                  className="text-blue-600 hover:underline"
                >
                  Used Car Inspection Checklist
                </Link>
              </li>
              <li>
                <Link
                  href="/financing-options"
                  className="text-blue-600 hover:underline"
                >
                  Understanding Financing Options
                </Link>
              </li>
              <li>
                <Link
                  href="/car-value-guide"
                  className="text-blue-600 hover:underline"
                >
                  How to Determine a Fair Price
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

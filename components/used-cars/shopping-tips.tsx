import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usecars-mCAOMq9Tsl9XqrWwH09a5hpPOo71RQ.png",
    title: "Should You Buy a Used Car This Month?",
    excerpt:
      "With the state of the used car market like it might be this month, take the pros and cons of buying now. We'll provide details of what you need to k...",
    href: "/tips/should-you-buy-used-car",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usecars-mCAOMq9Tsl9XqrWwH09a5hpPOo71RQ.png",
    title: "Best Toyota Models Years to Buy Used",
    excerpt:
      "Looking for a reliable used Toyota? Here are the best model years to consider...",
    href: "/tips/best-toyota-models",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usecars-mCAOMq9Tsl9XqrWwH09a5hpPOo71RQ.png",
    title: "Best Pre-Purchase Steps to Take",
    excerpt:
      "Essential steps to take before buying a used car to ensure you make a smart purchase...",
    href: "/tips/pre-purchase-steps",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usecars-mCAOMq9Tsl9XqrWwH09a5hpPOo71RQ.png",
    title: "Certified Pre-Owned vs. Used Cars: What's Different?",
    excerpt:
      "Understanding the key differences between CPO and regular used cars...",
    href: "/tips/cpo-vs-used",
  },
];

export function ShoppingTips() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">
        Used Car Shopping & Buying Tips
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Image
            src={articles[0].image || "/placeholder.svg"}
            alt={articles[0].title}
            width={600}
            height={400}
            className="rounded-lg"
          />
          <h3 className="text-xl font-bold">{articles[0].title}</h3>
          <p className="text-gray-600">{articles[0].excerpt}</p>
        </div>
        <div className="grid gap-6">
          {articles.slice(1).map((article, index) => (
            <Link key={index} href={article.href} className="flex gap-4 group">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={200}
                height={150}
                className="rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="font-bold group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/tips"
          className="inline-flex h-10 px-6 items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          See Used Car News & Reviews
        </Link>
      </div>
    </section>
  );
}

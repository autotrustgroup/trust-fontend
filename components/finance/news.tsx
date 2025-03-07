import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2015.21.26-KQZiIunz4EhKYhFeTvYNbbiCXP4f13.png",
    category: "News",
    title: "How to Win the Car Financing Game",
    author: "By Jane Ulitskaya",
    date: "Feb. 2023",
    href: "/news/how-to-win-car-financing-game",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2015.21.26-KQZiIunz4EhKYhFeTvYNbbiCXP4f13.png",
    category: "News",
    title: "Can a CPO Car Help You Get a Better Auto Loan Rate?",
    author: "By Jane Ulitskaya",
    date: "Jan. 2023",
    href: "/news/cpo-car-better-loan-rate",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2015.21.26-KQZiIunz4EhKYhFeTvYNbbiCXP4f13.png",
    category: "News",
    title: "How to Get Preapproved for a Car Loan — and Why You Should",
    author: "By Fred Meier",
    date: "Dec. 2022",
    href: "/news/how-to-get-preapproved-car-loan",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2015.21.26-KQZiIunz4EhKYhFeTvYNbbiCXP4f13.png",
    category: "News",
    title: "Can You Get a Car Loan With Bad Credit?",
    author: "By Fred Meier",
    date: "Nov. 2022",
    href: "/news/car-loan-bad-credit",
  },
];

export function FinanceNews() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">
        News & tips when financing a car
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.href}
            className="group block bg-white rounded-lg overflow-hidden transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-600 mb-2">
                {article.category}
              </div>
              <h3 className="font-bold mb-2 group-hover:text-[#8B45F7] transition-colors">
                {article.title}
              </h3>
              <div className="text-sm text-gray-600">
                {article.author}
                <br />
                {article.date}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-right">
        <Link
          href="/finance/tips"
          className="text-sm font-medium hover:text-[#8B45F7]"
        >
          View all finance tips →
        </Link>
      </div>
    </section>
  );
}

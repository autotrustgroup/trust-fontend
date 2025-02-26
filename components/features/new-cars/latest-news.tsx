import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredArticle = {
  tag: "Featured",
  title: "137,000 Kia Seltos, Soul SUVs Recalled for Engine Damage, Fire Risk",
  description:
    "Kia's latest recall affects its Seltos and Soul compact SUVs and is prompted by engine damage that could result in a stall or fire.",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.50.30-OHvUmxlwVgezprm5GWbXg4yiYohYuA.png",
  link: "/news/kia-seltos-soul-recall-2025",
};

const sidebarArticles = [
  {
    title: "What Are the Most Reliable Cars and Brands?",
    description:
      "Read on to see which vehicles and brands rose to the top of J.D. Power's 2025 U.S. Vehicle Dependability Study in terms of reliability.",
    link: "/news/most-reliable-cars-2025",
  },
  {
    title: "What Should I Know About Driving My 4x4 in the Snow?",
    description:
      "With snow now hitting the U.S. in places that aren't used to it, here are our top four tips for getting through it safely and effectively.",
    link: "/news/4x4-snow-driving-tips",
  },
  {
    title: "All-New 2025 Audi A5 Replaces Previous A5 and A4",
    description:
      "The new mid-size 2025 Audi A5 sedan replaces both its predecessor and its mechanical twin, the A4, and starts at $48,995 (including destination).",
    link: "/news/2025-audi-a5-reveal",
  },
];

export function LatestNews() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-[28px] leading-9 font-bold mb-8">
          Latest news from cars.com
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <article>
            <Link href={featuredArticle.link} className="group">
              <div className="relative aspect-[16/9] mb-4">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt="Yellow Kia Seltos SUV"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="space-y-3">
                <span className="text-[13px] leading-5 font-medium text-[#595959]">
                  {featuredArticle.tag}
                </span>
                <h3 className="text-[22px] leading-7 font-bold group-hover:text-[#0066ff] transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-[15px] leading-6 text-[#262626]">
                  {featuredArticle.description}
                  <span className="ml-1 text-[#0066ff] font-medium hover:underline">
                    Read more
                  </span>
                </p>
              </div>
            </Link>
          </article>

          {/* Sidebar Articles */}
          <div className="space-y-8">
            {sidebarArticles.map((article, index) => (
              <article
                key={index}
                className="pb-8 border-b border-[#E5E5E5] last:border-0"
              >
                <Link href={article.link} className="group">
                  <h3 className="text-[22px] leading-7 font-bold mb-2 group-hover:text-[#0066ff] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[15px] leading-6 text-[#262626]">
                    {article.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* See All News Link */}
        <div className="flex justify-end mt-8">
          <Link
            href="/news"
            className="inline-flex items-center text-[14px] leading-5 font-medium text-black hover:text-[#0066ff]"
          >
            See all news
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

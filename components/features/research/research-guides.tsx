import Image from "next/image";
import Link from "next/link";

const guides = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.36.41-vDX9A113LwynUQbZD6U3eb2EeRsJle.png#x=82,y=98,w=418,h=220",
    category: "News",
    title: "What's the Best Time of Year to Buy a Car?",
    author: "By Jane Ulitskaya and Stef Schrader",
    date: "August 27, 2024",
    href: "/research/guides/best-time-to-buy-car",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.36.41-vDX9A113LwynUQbZD6U3eb2EeRsJle.png#x=440,y=98,w=418,h=220",
    category: "News",
    title: "Cars.com Buying Guide: How to Buy a Car",
    author: "By Mike Hanley",
    date: "June 8, 2020",
    href: "/research/guides/how-to-buy-car",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.36.41-vDX9A113LwynUQbZD6U3eb2EeRsJle.png#x=798,y=98,w=418,h=220",
    category: "News",
    title: "How to Buy a Car Online",
    author: "By Kelsey Mays",
    date: "October 12, 2020",
    href: "/research/guides/how-to-buy-car-online",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.36.41-vDX9A113LwynUQbZD6U3eb2EeRsJle.png#x=82,y=463,w=418,h=220",
    category: "News",
    title:
      "Used-Car Prices Are Finally Dropping; Here's What to Expect in 2023",
    author: "By Jane Ulitskaya",
    date: "December 27, 2022",
    href: "/research/guides/used-car-prices-dropping",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.36.41-vDX9A113LwynUQbZD6U3eb2EeRsJle.png#x=440,y=463,w=418,h=220",
    category: "News",
    title: "Is the Inventory Shortage Coming to an End?",
    author: "By Jane Ulitskaya",
    date: "January 9, 2023",
    href: "/research/guides/inventory-shortage-update",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2001.36.41-vDX9A113LwynUQbZD6U3eb2EeRsJle.png#x=798,y=463,w=418,h=220",
    category: "News",
    title: "What to Know Before Purchasing an Electric Vehicle: A Buying Guide",
    author: "By Cars.com Editors",
    date: "October 22, 2024",
    href: "/research/guides/ev-buying-guide",
  },
];

export function ResearchGuides() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-[32px] font-bold mb-8">
          Car research guides & news
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Link
              key={index}
              href={guide.href}
              className="group block bg-white rounded-lg overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[1.9/1]">
                <Image
                  src={guide.image || "/placeholder.svg"}
                  alt={guide.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-4">
                <div className="text-[13px] text-gray-600 mb-2">
                  {guide.category}
                </div>
                <h3 className="text-[22px] font-bold leading-tight mb-2 group-hover:text-[#0066ff] transition-colors">
                  {guide.title}
                </h3>
                <div className="space-y-1">
                  <p className="text-[13px] text-gray-600">{guide.author}</p>
                  <p className="text-[13px] text-gray-600">{guide.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0-nZrnlZo5HL6gftXsE3iNBlTKR8mZnn.png#x=230,y=550,w=300,h=200",
    title: "How to Sell Your Car Privately: 5 Tips to Simplify the Process",
    author: "By Jane Johnson",
    href: "/advice/how-to-sell-car-privately",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0-nZrnlZo5HL6gftXsE3iNBlTKR8mZnn.png#x=550,y=550,w=300,h=200",
    title: "Should You Trade in Your Car or Sell it Privately?",
    author: "By Jane Johnson",
    href: "/advice/trade-in-vs-private-sale",
  },
];

export function ExpertAdvice() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">
          Get expert advice on selling your car online
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="group block bg-white rounded-lg overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#8B45F7] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600">{article.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

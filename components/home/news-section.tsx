import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Newspaper, Clock } from "lucide-react";

export default function NewsSection() {
  const articles = [
    {
      id: 1,
      title: "2024 Electric Vehicle Buying Guide",
      excerpt:
        "Everything you need to know about buying an electric vehicle in 2024, including range, charging, and top models.",
      category: "Buying Guide",
      image:
        "https://images.unsplash.com/photo-1593941707882-a5bfb1060f25?q=80&w=1000&auto=format&fit=crop",
      date: "February 22, 2024",
      author: "Jane Smith",
    },
    {
      id: 2,
      title: "Top 10 Most Popular Cars of 2024",
      excerpt:
        "These are the most popular vehicles according to sales data and consumer interest through the first quarter of 2024.",
      category: "Industry Trends",
      image:
        "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1000&auto=format&fit=crop",
      date: "February 21, 2024",
      author: "John Doe",
    },
    {
      id: 3,
      title: "Car Maintenance Tips for Spring",
      excerpt:
        "Essential maintenance tips to get your vehicle ready for spring driving after the winter season.",
      category: "Maintenance",
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000&auto=format&fit=crop",
      date: "February 18, 2024",
      author: "Robert Johnson",
    },
  ];

  return (
    <section className="my-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Newspaper className="mr-2 h-6 w-6 text-blue-600" />
            Latest automotive news & reviews
          </h2>
          <p className="text-gray-600 mt-1">
            Stay informed with the latest industry updates and expert reviews
          </p>
        </div>
        <Link
          href="/news"
          className="text-blue-600 font-medium flex items-center mt-2 md:mt-0 hover:text-blue-800"
        >
          View all articles
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
          >
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={600}
                  height={350}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-medium px-3 py-1">
                  {article.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{article.date}</span>
                  </div>
                  <Link
                    href={`/news/${article.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    Read more
                    <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/subscribe-newsletter"
          className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-md flex items-center transition-colors"
        >
          Subscribe to our newsletter
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

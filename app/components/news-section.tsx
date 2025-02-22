import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsSection() {
  const articles = [
    {
      id: 1,
      title: "2024 Electric Vehicle Buying Guide",
      image: "/placeholder.svg",
      date: "February 22, 2024",
    },
    {
      id: 2,
      title: "Top 10 Most Popular Cars of 2024",
      image: "/placeholder.svg",
      date: "February 21, 2024",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">News & reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardContent className="p-0">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={600}
                height={400}
                className="w-full rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground">{article.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

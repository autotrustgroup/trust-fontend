export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Hyundai Expands Complimentary EV Charger Offer to More Models",
    excerpt:
      "Everything you need to know about buying an electric vehicle in 2024, including range, charging, and top models.",
    category: "Buying Guide",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1000&auto=format&fit=crop",
    date: "February 22, 2024",
    author: "Jane Smith",
  },
  {
    id: 2,
    title: "Should You Take on a 72- or 84-Month Car Loan?",
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
    title: "Here Are the 10 Cheapest New SUVs You Can Buy Right Now",
    excerpt:
      "Essential maintenance tips to get your vehicle ready for spring driving after the winter season.",
    category: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000&auto=format&fit=crop",
    date: "February 18, 2024",
    author: "Robert Johnson",
  },
  {
    id: 4,
    title: "Which SUVs, Minivans and Sedans Have the Most Cargo Space?",
    excerpt:
      "Essential maintenance tips to get your vehicle ready for spring driving after the winter season.",
    category: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000&auto=format&fit=crop",
    date: "February 18, 2024",
    author: "Robert Johnson",
  },
];

export const TRENDING_NEWS: string[] = [
  "Is the 2024 Chevrolet Trailblazer a Good SUV? 3 Pros, 4 Cons",
  "Is the 2024 Hyundai Kona a Good SUV? 6 Pros, 3 Cons",
  "Is the 2025 Chevrolet Equinox EV a Good Electric SUV? 5 Pros, 3 Cons",
  "Mercedes SUVs: There Are Many So Which is Right for You",
  "U.S.-Built 2025 Hyundai Ioniq 5 Priced From $43,975",
];

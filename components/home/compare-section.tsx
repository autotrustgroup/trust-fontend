import ComparisonCard from "./cards/ComparisonCard";

export default function CompareSection() {
  const comparisons = [
    {
      id: 1,
      cars: ["2024 Tesla Model 3", "2024 BMW i4"],
      image1:
        "https://platform.cstatic-images.com/medium/in/v2/stock_photos/07827872-c533-4f5f-8931-3a911250aaf0/96548bd5-fb31-4570-b31a-517e2ebe5408.png",
      image2:
        "https://platform.cstatic-images.com/medium/in/v2/stock_photos/42b42641-78e5-49a1-80b7-240b76aa6a3f/7f362d35-6f24-4f70-9131-fc42754c35dd.png",
      category: "Electric Sedans",
      advantages: ["Performance", "Range", "Technology"],
      link: "/comparison",
    },
    {
      id: 2,
      cars: ["2024 Honda Accord", "2024 Toyota Camry"],
      image1:
        "https://platform.cstatic-images.com/medium/in/v2/stock_photos/77aeca88-d0af-4824-bbfd-d84ce2538524/1af0ca3f-5236-47a5-a487-32b49ec94f27.png",
      image2:
        "https://platform.cstatic-images.com/medium/in/v2/stock_photos/bc5d4734-5bf0-4fda-acf3-265023f70310/a417d9ea-b2bf-40b1-80cc-24c0e84ea083.png",
      category: "Midsize Sedans",
      advantages: ["Reliability", "Fuel Economy", "Resale Value"],
      link: "/comparison",
    },
    {
      id: 3,
      cars: ["2024 Ford F-150", "2024 Chevrolet Silverado"],
      image1:
        "https://platform.cstatic-images.com/medium/in/v2/stock_photos/3e412f81-b730-4772-9991-e0fdd827d017/c750a3d6-f4d4-429c-beed-497b7d27698f.png",
      image2:
        "https://platform.cstatic-images.com/medium/in/v2/stock_photos/1f42c568-5c91-4bda-8428-2b5952d5f621/cbacf211-ac55-498f-8fba-352f9af19096.png",
      category: "Full-Size Trucks",
      advantages: ["Towing Capacity", "Payload", "Off-Road Capability"],
      link: "/comparison",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {comparisons.map((comparison) => (
        <ComparisonCard
          key={comparison.id}
          cars={comparison.cars}
          image1={comparison.image1}
          image2={comparison.image2}
          link={comparison.link}
        />
      ))}
    </div>
  );
}

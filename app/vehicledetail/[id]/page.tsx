"use client";

import { useState } from "react";
import { ImageGallery } from "@/components/features/vehicle/image-gallery";
import { VehicleInfo } from "@/components/features/vehicle/vehicle-info";
import { DealGauge } from "@/components/features/vehicle/deal-gauge";
import { BasicInfo } from "@/components/features/vehicle/basic-info";
import { Features } from "@/components/features/vehicle/features";
import { PriceHistory } from "@/components/features/vehicle/price-history";
import { VehicleHistory } from "@/components/features/vehicle/vehicle-history";
import { SellerInfo } from "@/components/features/vehicle/seller-info";
import { SimilarVehicles } from "@/components/features/vehicle/similar-vehicles";
import { ContactSellerForm } from "@/components/features/vehicle/contact-seller-form";
import { PrequalifiedSection } from "@/components/features/vehicle/prequalified-section";
import { ConsumerReviews } from "@/components/features/vehicle/consumer-reviews";
import { QuestionSection } from "@/components/features/vehicle/questions-section";
import { RecentReviews } from "@/components/features/vehicle/recent-reviews";
import { mockReviews } from "@/lib/mock-reviews";
import Footer from "@/components/layout/footer";
import { PaymentCalculator } from "@/components/features/vehicle/payment-calculator";
import { mockPriceHistory } from "@/lib/price-history-mock";

// Mock data - replace with actual data fetching
// interface VehicleData {
//     id: string;
//     title: string;
//     price: number;
//     images: string[];
//     dealer: {
//         name: string;
//         rating: number;
//         reviews: number;
//         location: string;
//         address: string;
//         phone: string;
//     };
//     specs: {
//         exteriorColor: string;
//         interiorColor: string;
//         mileage: string;
//         transmission: string;
//         drivetrain: string;
//         engine: string;
//         vin: string;
//         stock: string;
//         mpg: {
//             city: number;
//             highway: number;
//         };
//     };
//     features: {
//         convenience: string[];
//         safety: string[];
//         entertainment: string[];
//         exterior: string[];
//     };
//     priceHistory: {
//         date: string;
//         price: number;
//     }[];
//     dealGauge: {
//         rating: string;
//         marketComparison: number;
//         marketRange: {
//             min: number;
//             max: number;
//             average: number;
//         };
//     };
//     history: {
//         accidents: number;
//         owners: number;
//         serviceRecords: boolean;
//         rentalUse: boolean;
//         lastReported: string;
//     };
// }

const vehicleData = {
  id: "6aba792c-4246-49b7-99d6-ebdeca86b1a1",
  title: "2023 Audi S8 Prestige TFSI quattro Tiptronic",
  price: 47888,
  images: [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-VehicleDetailsPage-yTU9SLP9ZF4j9mgCQZViYeiRLJMdXO.png",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ],
  dealer: {
    name: "BMW Seattle",
    rating: 4.9,
    reviews: 2603,
    location: "Seattle, WA",
    address: "1002 Airport Way S, Seattle, WA 98134",
    phone: "(206) 328-8787",
  },
  vehicle: {
    year: 2023,
    make: "Audi",
    model: "S8",
    notes: "Prestige TFSI quattro Tiptronic",
    trim: "Prestige TFSI quattro Tiptronic",
    body: "Sedan",
    condition: "Used",
    mileage: 10234,
    vin: "WAAFD8PN123456",
    stock: "P123456",
    price: 47888,
    exteriorColor: "Gray",
    interiorColor: "Black",
    transmission: "Automatic",
    drivetrain: "AWD",
    engine: "4.0L V8 gasoline direct injection TFSI",
  },
  specs: {
    exteriorColor: "Gray",
    interiorColor: "Black",
    mileage: "10,234",
    transmission: "Automatic",
    drivetrain: "AWD",
    engine: "4.0L V8 gasoline direct injection TFSI",
    vin: "WAUW2AFD8PN123456",
    stock: "P123456",
    mpg: {
      city: 15,
      highway: 23,
    },
  },
  featuress: {
    convenience: [
      "Adaptive Cruise Control",
      "Remote Start",
      "Keyless Entry",
      "Push Button Start",
    ],
    safety: [
      "Lane Departure Warning",
      "Forward Collision Warning",
      "Blind Spot Monitor",
      "360-degree Camera",
    ],
    entertainment: [
      "Premium Sound System",
      "Apple CarPlay",
      "Android Auto",
      "Navigation System",
    ],
    exterior: [
      "LED Headlights",
      "Panoramic Sunroof",
      "Power Folding Mirrors",
      '20" Alloy Wheels',
    ],
  },
  priceHistory: [
    { date: "2024-01-01", price: 49888 },
    { date: "2024-01-15", price: 48888 },
    { date: "2024-02-01", price: 47888 },
  ],
  dealGauge: {
    rating: "Great Deal",
    marketComparison: -3200, // Amount below market average
    marketRange: {
      min: 45000,
      max: 52000,
      average: 51088,
    },
  },
  history: {
    accidents: 0,
    owners: 1,
    serviceRecords: true,
    rentalUse: false,
    lastReported: "2024-01-15",
  },
  features: {
    convenience: ["Keyless Start"],
    entertainment: ["Apple CarPlay®/Android Auto®", "Bluetooth®", "USB Port"],
    safety: [
      "Automatic Emergency Braking",
      "Backup Camera",
      "Blind Spot Monitor",
      "Brake Assist",
      "Lane Departure Warning",
      "Rear Cross Traffic Alert",
      "Stability Control",
    ],
    additional: [
      "headlight control - auto highbeam",
      "keyless entry",
      "apple carplay/android auto",
      "collision warning system",
      "parking distance sensors",
      "parking assistance",
    ],
  },
};

// Add mock data for consumer reviews
const consumerReviewsData = {
  year: 2022,
  make: "Nissan",
  model: "Leaf",
  overallRating: 3.8,
  totalReviews: 5,
  recommendationRate: 80,
  ratings: [
    { label: "Comfort", score: 3.4 },
    { label: "Interior", score: 3.4 },
    { label: "Performance", score: 3.8 },
    { label: "Value", score: 4.2 },
    { label: "Exterior", score: 3.4 },
    { label: "Reliability", score: 4.2 },
  ],
};

// Add mock data for deal gauge
const dealGaugeData = {
  price: 25900,
  comparisonModel: "Tesla Model 3",
  comparisonYear: 2022,
  marketRange: {
    min: 23900,
    current: 25900,
    max: 28500,
    average: 25400,
  },
};

export default function VehicleDetailsPage() {
  const [showCheckAvailability, setShowCheckAvailability] = useState(false);
  const [showPrequalified, setShowPrequalified] = useState(false);
  const handleContactClick = () => {
    // Add contact functionality here
    console.log("Contact seller clicked");
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Images and Details */}
          <div className="space-y-6">
            <ImageGallery images={vehicleData.images} />
            <DealGauge {...dealGaugeData} />
            <BasicInfo specs={vehicleData.specs} />
            <Features features={vehicleData.features} />

            <VehicleHistory history={vehicleData.history} />
            <SellerInfo
              dealer={vehicleData.dealer}
              vehicle={vehicleData.vehicle}
            />
            <QuestionSection onContactClick={handleContactClick} />
            <ConsumerReviews {...consumerReviewsData} />
            <RecentReviews reviews={mockReviews} />
          </div>

          {/* Right Column - Vehicle Info and Forms */}
          <div className="lg:sticky lg:top-6 space-y-4">
            <ContactSellerForm />
            <PrequalifiedSection />
            <PriceHistory data={mockPriceHistory} />
            <PaymentCalculator basePrice={25900} apr={7.0} salesTax={10.25} />
          </div>
        </div>
        <SimilarVehicles currentVehicle={vehicleData} />
      </div>
      <Footer />
    </div>
  );
}

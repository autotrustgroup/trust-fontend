"use client";

import { useEffect, useState } from "react";
import { ImageGallery } from "@/components/vehicle/image-gallery";
import { VehicleInfo } from "@/components/vehicle/vehicle-info";
import { DealGauge } from "@/components/vehicle/deal-gauge";
import { BasicInfo } from "@/components/vehicle/basic-info";
import { Features } from "@/components/vehicle/features";
import { PriceHistory } from "@/components/vehicle/price-history";
import { VehicleHistory } from "@/components/vehicle/vehicle-history";
import { SellerInfo } from "@/components/vehicle/seller-info";
import { SimilarVehicles } from "@/components/vehicle/similar-vehicles";
import { ContactSellerForm } from "@/components/vehicle/contact-seller-form";
import { PrequalifiedSection } from "@/components/vehicle/prequalified-section";
import { ConsumerReviews } from "@/components/vehicle/consumer-reviews";
import { QuestionSection } from "@/components/vehicle/questions-section";
import { RecentReviews } from "@/components/vehicle/recent-reviews";
import { PaymentCalculator } from "@/components/vehicle/payment-calculator";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { vehicleService } from "@/lib/data/api/vehicle-service";
import {
  getPriceHistoryData,
  getVehicleReviews,
} from "@/lib/data/services/vehicle-detail-service";
import { VehicleDetailData } from "@/lib/data/mock/vehicle-detail";
import { useParams } from "next/navigation";

export default function VehicleDetailsPage() {
  const [showCheckAvailability, setShowCheckAvailability] = useState(false);
  const [showPrequalified, setShowPrequalified] = useState(false);
  const params = useParams();
  const id = params?.id as string;

  // States for all vehicle data
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [vehicleData, setVehicleData] = useState<any>(null);
  const [similarVehicles, setSimilarVehicles] = useState<any[]>([]);

  // Fetch vehicle data
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      setIsLoading(true);
      try {
        // Get transformed vehicle data
        const data = await vehicleService.getTransformedVehicleData(id);
        if (!data) {
          throw new Error("Vehicle not found");
        }

        // Enhance vehicleInfoData with real car images
        if (data.vehicleInfoData) {
          // Replace any placeholder images with high-quality car images from Unsplash
          data.vehicleInfoData.images = [
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", // Main car image
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", // Interior
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", // Side view
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", // Front angle
            "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", // Rear view
          ];
        }

        setVehicleData(data);

        // Get similar vehicles
        const similar = await vehicleService.getSimilarVehicles(id);
        setSimilarVehicles(similar);
      } catch (err) {
        console.error("Error fetching vehicle data:", err);
        setError("Failed to load vehicle data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Handle contact functionality
  const handleContactClick = () => {
    console.log("Contact seller clicked");
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="w-full py-8 px-4 sm:px-6 md:py-12 bg-white">
        <div className="container mx-auto max-w-screen-xl text-center py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
            <div className="h-40 bg-gray-200 rounded mb-6"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
          <p className="mt-6 text-gray-500">Loading vehicle details...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="w-full py-8 px-4 sm:px-6 md:py-12 bg-white">
        <div className="container mx-auto max-w-screen-xl text-center py-20">
          <div className="text-red-500 text-xl mb-4">Error</div>
          <p>{error}</p>
          <Link
            href="/search"
            className="mt-6 inline-block text-indigo-600 hover:text-blue-700 hover:underline transition-colors duration-200"
          >
            Return to search
          </Link>
        </div>
      </div>
    );
  }

  // If no data is available
  if (!vehicleData) {
    return (
      <div className="w-full py-8 px-4 sm:px-6 md:py-12 bg-white">
        <div className="container mx-auto max-w-screen-xl text-center py-20">
          <p>Vehicle not found</p>
          <Link
            href="/search"
            className="mt-6 inline-block text-indigo-600 hover:text-blue-700 hover:underline transition-colors duration-200"
          >
            Return to search
          </Link>
        </div>
      </div>
    );
  }

  // Destructure the vehicle data for easier access
  const {
    vehicleInfoData,
    vehicleHistoryData,
    sellerInfoData,
    dealGaugeData,
    consumerReviewsData,
    features,
    specs,
    reviews,
    priceHistory,
  } = vehicleData;

  return (
    <div className="w-full py-8 px-4 sm:px-6 md:py-12 lg:py-16 bg-white min-h-screen">
      <div className="container mx-auto max-w-screen-xl">
        {/* Breadcrumb navigation with enhanced accessibility */}
        <nav className="mb-8 text-sm font-medium" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center text-gray-500">
            <li className="flex items-center">
              <Link
                href="/"
                className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 rounded-sm transition-colors duration-200"
                aria-label="Go to homepage"
              >
                Home
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <Link
                href="/search"
                className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 rounded-sm transition-colors duration-200"
                aria-label="Go to search page"
              >
                Search
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li className="text-indigo-600 font-semibold" aria-current="page">
              {vehicleInfoData.title}
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left column (55%) - Enhanced with consistent styling */}
          <div className="w-full lg:w-[55%] space-y-8 md:space-y-10">
            {/* Image Gallery - Enhanced with shadow and rounded corners */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <ImageGallery images={vehicleInfoData.images} />
            </div>

            {/* Vehicle Info - Enhanced with better padding and shadow */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <VehicleInfo
                data={{
                  title: vehicleInfoData.title,
                  price: vehicleInfoData.price,
                  dealer: vehicleInfoData.dealer,
                }}
                onCheckAvailability={() => setShowCheckAvailability(true)}
              />
            </div>

            {/* Deal Gauge - Enhanced styling */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <DealGauge
                price={dealGaugeData.price}
                comparisonModel={dealGaugeData.comparisonModel}
                comparisonYear={dealGaugeData.comparisonYear}
                marketRange={dealGaugeData.marketRange}
              />
            </div>

            {/* Basic Info - Enhanced with better typography */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
                Features & Specs
              </h2>
              <BasicInfo specs={specs} />
            </div>

            {/* Features - Enhanced with improved styling */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Features features={features} />
            </div>

            {/* Vehicle History - Enhanced with better styling */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <VehicleHistory history={vehicleHistoryData} />
            </div>

            {/* Seller Info - Enhanced with better styling */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
                Seller Information
              </h2>
              <SellerInfo
                dealer={sellerInfoData.dealer}
                vehicle={sellerInfoData.vehicle}
              />
            </div>

            {/* Consumer Reviews - Enhanced with better styling */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
                Consumer Reviews
              </h2>
              <ConsumerReviews
                year={consumerReviewsData.year}
                make={consumerReviewsData.make}
                model={consumerReviewsData.model}
                overallRating={consumerReviewsData.overallRating}
                totalReviews={consumerReviewsData.totalReviews}
                recommendationRate={consumerReviewsData.recommendationRate}
                ratings={consumerReviewsData.ratings}
              />
            </div>

            {/* Recent Reviews - Enhanced with better styling */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
                Recent Reviews
              </h2>
              <RecentReviews reviews={reviews} />
            </div>

            {/* Question Section - Enhanced with better styling */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
                Questions
              </h2>
              <QuestionSection onContactClick={handleContactClick} />
            </div>

            {/* Similar Vehicles - Enhanced with better styling */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
                Similar Vehicles
              </h2>
              <SimilarVehicles vehicles={similarVehicles} />
            </div>
          </div>

          {/* Right column (45%) - Enhanced with spacing and styling */}
          <div className="w-full lg:w-[45%] space-y-8 md:space-y-10 mt-8 lg:mt-0">
            {/* Contact Seller Form - Enhanced with better styling */}
            <div className="bg-gradient-to-r from-white-600 to-indigo-700 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              {/* <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
                Contact Seller
              </h2> */}
              <ContactSellerForm />
            </div>

            {/* Prequalified Section - Enhanced with better styling */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <PrequalifiedSection />
            </div>

            {/* Price History - Enhanced with better styling */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
                Price History
              </h2>
              <PriceHistory data={priceHistory} />
            </div>

            {/* Payment Calculator - Enhanced with better styling */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <PaymentCalculator
                basePrice={vehicleInfoData.price}
                apr={4.9}
                salesTax={8.2}
              />
            </div>

            {/* Back to top button with enhanced animations */}
            <div className="fixed bottom-6 right-6 lg:hidden z-50">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-105 active:scale-95"
                aria-label="Back to top"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Call to action section with enhanced styling */}
        <section className="mt-16 mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 md:p-10 text-white text-center transform transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Interested in similar vehicles?
          </h2>
          <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
            Browse our inventory to find other vehicles that match your
            preferences
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shopping/new-cars"
              className="bg-white text-indigo-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
            >
              Browse new cars
            </Link>
            <Link
              href="/shopping/used-cars"
              className="bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
            >
              Find used vehicles
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

import { mockReviews } from "@/lib/mock-reviews";
import { mockPriceHistory } from "@/lib/price-history-mock";
import { VehicleDetailData } from "../mock/vehicle-detail";

/**
 * Transforms vehicle detail data to match the VehicleInfo component props
 */
export function transformVehicleInfoData(vehicleData: VehicleDetailData) {
  // Format mileage as string with commas if it's a number
  const formattedMileage =
    typeof vehicleData.mileage === "string"
      ? vehicleData.mileage
      : vehicleData.mileage.toLocaleString() + " mi";

  // Default MPG values if specs or mpg is undefined
  const mpg = vehicleData.specs?.mpg || { city: 0, highway: 0 };

  // Use high-quality car images from Unsplash
  const carImages = [
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", // Main car image
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", // Interior
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", // Side view
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", // Front angle
    "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", // Rear view
  ];

  return {
    id: vehicleData.id.toString(),
    title: vehicleData.name,
    price: vehicleData.price,
    images: carImages,
    dealer: vehicleData.dealer,
    vehicle: {
      year: vehicleData.year,
      make: vehicleData.make,
      model: vehicleData.model,
      notes: vehicleData.trim || "Standard",
      trim: vehicleData.trim || "Standard",
      mileage: formattedMileage,
      mpg: mpg,
    },
  };
}

/**
 * Transforms vehicle detail data to match the VehicleHistory component props
 */
export function transformVehicleHistoryData(vehicleData: VehicleDetailData) {
  // Default vehicle history if undefined
  const history = vehicleData.vehicleHistory || {
    accidents: 0,
    owners: 1,
    serviceRecords: false,
    rentalUse: false,
    lastReported: "",
  };

  return {
    accidents:
      history.accidents === 0
        ? "None reported"
        : `${history.accidents} reported`,
    oneOwner: history.owners === 1,
    personalUse: !history.rentalUse,
    openRecall: "None reported", // Default value as this might not be in API
  };
}

/**
 * Transforms vehicle detail data to match the SellerInfo component props
 */
export function transformSellerInfoData(vehicleData: VehicleDetailData) {
  // Ensure dealer data exists with defaults
  const dealer = vehicleData.dealer || {
    name: "Auto Trust Dealership",
    rating: 4.5,
    reviews: 0,
    location: "Unknown",
    address: "123 Main St, Seattle, WA 98101",
    phone: "(555) 555-5555",
  };

  // Safely parse address components
  let street = "",
    city = "",
    state = "WA",
    zip = "98101";

  try {
    if (dealer.address) {
      const parts = dealer.address.split(",");
      street = parts[0]?.trim() || "";
      city = parts[1]?.trim() || "";

      if (parts[2]) {
        const stateZip = parts[2].trim().split(" ");
        state = stateZip[1] || "WA";
        zip = stateZip[2] || "98101";
      }
    }
  } catch (error) {
    console.warn("Error parsing dealer address:", error);
  }

  return {
    dealer: {
      name: dealer.name,
      rating: dealer.rating,
      reviews: dealer.reviews,
      address: {
        street,
        city,
        state,
        zip,
      },
      description:
        "Family-owned dealership specializing in quality pre-owned vehicles at competitive prices.", // Default value as this might not be in API
    },
    vehicle: {
      year: vehicleData.year,
      make: vehicleData.make,
      model: vehicleData.model,
      notes: vehicleData.trim || "Standard",
    },
  };
}

/**
 * Transforms vehicle detail data to match the DealGauge component props
 */
export function transformDealGaugeData(vehicleData: VehicleDetailData) {
  // Default deal gauge values
  const defaultMarketRange = {
    min: vehicleData.price * 0.9,
    max: vehicleData.price * 1.1,
    average: vehicleData.price,
  };

  // Use deal gauge data if available, otherwise use defaults
  const marketRange = vehicleData.dealGauge?.marketRange || defaultMarketRange;

  return {
    price: vehicleData.price,
    comparisonModel: `${vehicleData.make} ${vehicleData.model}`,
    comparisonYear: vehicleData.year,
    marketRange: {
      min: marketRange.min,
      current: vehicleData.price,
      max: marketRange.max,
      average: marketRange.average,
    },
  };
}

/**
 * Creates consumer reviews data for a vehicle
 * This might come from a separate API endpoint in a real app
 */
export function getConsumerReviewsData(vehicleData: VehicleDetailData) {
  return {
    year: vehicleData.year,
    make: vehicleData.make,
    model: vehicleData.model,
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
}

/**
 * Helper for generating vehicle features data
 */
export function transformFeaturesData(vehicleData: VehicleDetailData) {
  // Default empty features if none provided
  return (
    vehicleData.features || {
      convenience: [],
      entertainment: [],
      safety: [],
      additional: [],
    }
  );
}

/**
 * Helper for getting vehicle specs
 */
export function getVehicleSpecs(vehicleData: VehicleDetailData) {
  // Default empty specs if none provided
  return (
    vehicleData.specs || {
      exteriorColor: vehicleData.exteriorColor || "N/A",
      interiorColor: vehicleData.interiorColor || "N/A",
      mileage:
        typeof vehicleData.mileage === "string"
          ? vehicleData.mileage
          : vehicleData.mileage?.toLocaleString() + " mi" || "N/A",
      transmission: vehicleData.transmission || "N/A",
      drivetrain: "N/A",
      engine: vehicleData.engine || "N/A",
      vin: vehicleData.vin || "N/A",
      stock: "N/A",
      mpg: {
        city: 0,
        highway: 0,
      },
    }
  );
}

/**
 * Helper for getting mock reviews for a vehicle
 */
export function getVehicleReviews() {
  return mockReviews;
}

/**
 * Helper for getting price history data
 */
export function getPriceHistoryData() {
  return mockPriceHistory;
}

/**
 * Comprehensive method that transforms all vehicle data in one call
 */
export function transformVehicleData(vehicleData: VehicleDetailData) {
  return {
    vehicleInfoData: transformVehicleInfoData(vehicleData),
    vehicleHistoryData: transformVehicleHistoryData(vehicleData),
    sellerInfoData: transformSellerInfoData(vehicleData),
    dealGaugeData: transformDealGaugeData(vehicleData),
    consumerReviewsData: getConsumerReviewsData(vehicleData),
    features: transformFeaturesData(vehicleData),
    specs: getVehicleSpecs(vehicleData),
    reviews: getVehicleReviews(),
    priceHistory: getPriceHistoryData(),
  };
}

import { SearchParams, Vehicle, VehicleType } from "@/types/vehicle";
import { buildSearchQuery, filterVehicles, sortVehicles } from "../filters";
import { trendingSearchTerms } from "../mock/search-terms";
import {
  mockDetailedVehicles,
  VehicleDetailData,
} from "../mock/vehicle-detail";
import { mockVehicles, vehiclesByCategory } from "../mock/vehicles";
import { transformVehicleData } from "../services/vehicle-detail-service";

// Simulate network delay for mock API calls
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Vehicle service for handling vehicle data operations
 * This mimics a future API client that would make actual HTTP requests
 */
export const vehicleService = {
  /**
   * Get all vehicles with optional filtering
   */
  getVehicles: async (params?: SearchParams): Promise<Vehicle[]> => {
    // Simulate API delay
    await delay(300);

    if (!params) return mockVehicles;

    // Apply filters and sorting
    let filteredVehicles = filterVehicles(mockVehicles, params);

    // Apply sorting if specified
    if (params.sortBy) {
      filteredVehicles = sortVehicles(filteredVehicles, params.sortBy);
    }

    // Apply pagination if specified
    if (params.page !== undefined && params.limit) {
      const startIndex = (params.page - 1) * params.limit;
      filteredVehicles = filteredVehicles.slice(
        startIndex,
        startIndex + params.limit
      );
    }

    return filteredVehicles;
  },

  /**
   * Get a single vehicle by ID
   */
  getVehicleById: async (id: string | number): Promise<Vehicle | undefined> => {
    await delay(200);
    return mockVehicles.find((v) => v.id.toString() === id.toString());
  },

  /**
   * Get detailed information for a vehicle by ID
   */
  getVehicleDetailById: async (
    id: string | number
  ): Promise<VehicleDetailData | undefined> => {
    await delay(200);
    // Find the vehicle in our mock detailed vehicles
    const detailedVehicle = mockDetailedVehicles.find(
      (v) => v.id.toString() === id.toString()
    );

    if (detailedVehicle) {
      return detailedVehicle;
    }

    // If not found in detailed vehicles, try to map from basic vehicles
    const basicVehicle = mockVehicles.find(
      (v) => v.id.toString() === id.toString()
    );
    if (!basicVehicle) return undefined;

    // Create a proper VehicleDetailData from a basic Vehicle
    const vehicleDetail: VehicleDetailData = {
      ...basicVehicle,
      dealer: {
        name: "Auto Trust Dealership",
        rating: 4.5,
        reviews: 120,
        location: basicVehicle.location || "Seattle, WA",
        address: "1002 Airport Way S, Seattle, WA 98134",
        phone: "(206) 328-8787",
      },
      specs: {
        exteriorColor: basicVehicle.exteriorColor || "N/A",
        interiorColor: basicVehicle.interiorColor || "N/A",
        mileage:
          typeof basicVehicle.mileage === "string"
            ? basicVehicle.mileage
            : basicVehicle.mileage.toLocaleString() + " mi",
        transmission: basicVehicle.transmission || "Automatic",
        drivetrain: basicVehicle.type === "suv" ? "AWD" : "FWD",
        engine: basicVehicle.engine || "2.0L 4-Cylinder",
        vin: basicVehicle.vin || "N/A",
        stock: "S12345",
        mpg: {
          city: 25,
          highway: 34,
        },
      },
      features: {
        convenience: basicVehicle.features?.slice(0, 2) || [
          "Keyless Entry",
          "Push Button Start",
        ],
        safety: basicVehicle.features?.slice(2, 4) || [
          "Lane Departure Warning",
          "Backup Camera",
        ],
        entertainment: basicVehicle.features?.slice(4, 6) || [
          "Bluetooth",
          "Apple CarPlay",
        ],
        additional: basicVehicle.features?.slice(6, 8) || [
          "LED Headlights",
          "Alloy Wheels",
        ],
      },
      priceHistory: [
        { date: "2024-02-01", price: basicVehicle.price + 2000 },
        { date: "2024-02-15", price: basicVehicle.price + 1000 },
        { date: "2024-03-01", price: basicVehicle.price },
      ],
      dealGauge: {
        rating: "Fair Deal",
        marketComparison: -1200,
        marketRange: {
          min: basicVehicle.price - 3000,
          max: basicVehicle.price + 3000,
          average: basicVehicle.price + 1200,
        },
      },
      vehicleHistory: {
        accidents: 0,
        owners: 1,
        serviceRecords: true,
        rentalUse: false,
        lastReported: "2024-01-15",
      },
    };

    return vehicleDetail;
  },

  /**
   * Get transformed vehicle data ready for use in components
   */
  getTransformedVehicleData: async (id: string | number) => {
    const vehicleDetail = await vehicleService.getVehicleDetailById(id);
    if (!vehicleDetail) return null;

    return transformVehicleData(vehicleDetail);
  },

  /**
   * Get similar vehicles based on a vehicle's make, model, or type
   * Updated to support both vehicle type or ID-based lookup
   */
  getSimilarVehicles: async (
    vehicleIdOrType: string | number | VehicleType
  ): Promise<Vehicle[]> => {
    await delay(200);

    // If we have a vehicle type, return vehicles by category
    if (
      typeof vehicleIdOrType === "string" &&
      Object.keys(vehiclesByCategory).includes(vehicleIdOrType as string)
    ) {
      const type = vehicleIdOrType as VehicleType;
      return vehiclesByCategory[type].slice(0, 4);
    }

    // Otherwise, assume it's a vehicle ID
    const vehicle = await vehicleService.getVehicleById(vehicleIdOrType);
    if (!vehicle) return [];

    // Find similar vehicles based on type and make, excluding the original vehicle
    return mockVehicles
      .filter(
        (v) =>
          (v.type === vehicle.type || v.make === vehicle.make) &&
          v.id.toString() !== vehicleIdOrType.toString()
      )
      .slice(0, 4);
  },

  /**
   * Get vehicles by category
   */
  getVehiclesByCategory: async (
    category: VehicleType,
    limit = 10
  ): Promise<Vehicle[]> => {
    await delay(200);
    return vehiclesByCategory[category].slice(0, limit);
  },

  /**
   * Get trending search terms
   */
  getTrendingSearchTerms: async (): Promise<string[]> => {
    await delay(100);
    return trendingSearchTerms;
  },

  /**
   * Search vehicles by query string
   */
  searchVehicles: async (query: string): Promise<Vehicle[]> => {
    await delay(200);
    const searchParams = buildSearchQuery(query);
    return vehicleService.getVehicles(searchParams);
  },

  /**
   * Get featured vehicles
   */
  getFeaturedVehicles: async (limit: number = 5): Promise<Vehicle[]> => {
    await delay(200);
    return mockVehicles.filter((v) => v.isFeatured).slice(0, limit);
  },

  /**
   * Search vehicles by trending search term
   */
  searchVehiclesByTerm: async (term: string): Promise<Vehicle[]> => {
    await delay(400);

    // Extract keywords from the term to create a more flexible search
    const keywords = term.toLowerCase().split(" ");

    // Filter vehicles based on the search term
    return mockVehicles
      .filter((vehicle) => {
        // Check if it matches price ranges like "Under $15K"
        if (term.includes("Under") && term.includes("$")) {
          const priceLimit =
            parseInt(term.match(/\$(\d+)K/)?.[1] || "0") * 1000;
          return priceLimit > 0 && vehicle.price < priceLimit;
        }

        // Check for "Used" condition
        if (term.includes("Used") && vehicle.condition !== "used") {
          return false;
        }

        // Check for vehicle types (SUV, Truck, etc.)
        if (term.includes("SUV") && vehicle.type !== "suv") {
          return false;
        }

        if (term.includes("Truck") && vehicle.type !== "truck") {
          return false;
        }

        if (term.includes("Electric") && vehicle.type !== "electric") {
          return false;
        }

        // Check for specific makes
        const hasMake = keywords.some((keyword) =>
          vehicle.make.toLowerCase().includes(keyword)
        );

        // Check for specific models
        const hasModel = keywords.some((keyword) =>
          vehicle.model.toLowerCase().includes(keyword)
        );

        // If the term includes a make or model keyword, require that match
        if (
          (term.includes("Porsche") ||
            term.includes("Mercedes") ||
            term.includes("Lincoln")) &&
          !(hasMake || hasModel)
        ) {
          return false;
        }

        // If we've passed all the filters, include the vehicle
        return true;
      })
      .slice(0, 5); // Limit to 5 results
  },
};

/**
 * API service for vehicle search operations
 */

import { VehicleSearchParams, SellVehicleParams } from "../types/search-params";

/**
 * Search for vehicles based on provided parameters
 */
export async function searchVehicles(params: VehicleSearchParams) {
  try {
    // In a real implementation, this would make an API call to your backend
    console.log("Searching vehicles with params:", params);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return mock data for now
    return {
      success: true,
      totalResults: 120,
      results: Array(10)
        .fill(null)
        .map((_, i) => ({
          id: `car-${i}`,
          make: params.make || "Toyota",
          model: params.model || "Camry",
          year: 2020 + Math.floor(i / 3),
          price: 20000 + i * 1500,
          mileage: 12000 + i * 5000,
          exteriorColor: ["Black", "White", "Silver", "Red"][i % 4],
          image: `https://placehold.co/600x400?text=Car+${i + 1}`,
        })),
    };
  } catch (error) {
    console.error("Error searching vehicles:", error);
    return {
      success: false,
      error: "Failed to search vehicles",
    };
  }
}

/**
 * Submit a request to sell a vehicle
 */
export async function submitSellRequest(params: SellVehicleParams) {
  try {
    // In a real implementation, this would make an API call to your backend
    console.log("Submitting sell request with params:", params);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return mock response for now
    return {
      success: true,
      requestId: "sell-req-" + Math.random().toString(36).substring(2, 10),
      message: "Your request has been submitted successfully!",
    };
  } catch (error) {
    console.error("Error submitting sell request:", error);
    return {
      success: false,
      error: "Failed to submit sell request",
    };
  }
}

/**
 * Get trending searches for the search form
 */
export async function getTrendingSearches() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Return mock trending searches
    return [
      "Toyota Camry",
      "Honda Civic",
      "Tesla Model 3",
      "Ford F-150",
      "Jeep Wrangler",
      "BMW 3 Series",
      "Subaru Outback",
      "Chevrolet Tahoe",
    ];
  } catch (error) {
    console.error("Error fetching trending searches:", error);
    return [];
  }
}

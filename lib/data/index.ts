// Export mock data
export * from "./mock/vehicles";
export * from "./mock/search-terms";

// Export filters and utilities
export * from "./filters";

// Export API services
export * from "./api/vehicle-service";

// Environment configuration
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

/**
 * Utility to determine if we should use mock data or real API
 * This can be controlled via environment variables
 */
export const shouldUseMockData = (): boolean => {
  return (
    process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true" ||
    !process.env.NEXT_PUBLIC_API_URL
  );
};

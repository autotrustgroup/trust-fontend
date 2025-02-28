/**
 * Barrel file for the vehicle search feature
 */

// Re-export components
export * from "./components";

// Re-export search results components
export * from "./components/search-results";

// Re-export hooks
export { useSearchForm } from "./hooks/use-search-form";

// Re-export API functions
export {
  searchVehicles,
  submitSellRequest,
  getTrendingSearches,
} from "./api/search-service";

// Re-export types
export * from "./types/search-params";
export * from "./types/search-results";

/**
 * API endpoints configuration
 */

/**
 * Vehicle search endpoints
 */
export const SEARCH_ENDPOINTS = {
  SEARCH_VEHICLES: "/vehicles/search",
  TRENDING_SEARCHES: "/vehicles/trending-searches",
  SELL_REQUEST: "/vehicles/sell-request",
};

/**
 * Vehicle listings endpoints
 */
export const LISTINGS_ENDPOINTS = {
  VEHICLE_CATEGORIES: "/vehicles/categories",
  RECOMMENDED_VEHICLES: "/vehicles/recommended",
  FEATURED_VEHICLES: "/vehicles/featured",
  VEHICLE_DETAILS: (id: string) => `/vehicles/${id}`,
};

/**
 * Dealer endpoints
 */
export const DEALER_ENDPOINTS = {
  NEARBY_DEALERS: "/dealers/nearby",
  DEALER_BRANDS: "/dealers/brands",
  DEALER_DETAILS: (id: string) => `/dealers/${id}`,
};

/**
 * User endpoints
 */
export const USER_ENDPOINTS = {
  PROFILE: "/user/profile",
  PREFERENCES: "/user/preferences",
  SAVED_SEARCHES: "/user/saved-searches",
  SAVED_VEHICLES: "/user/saved-vehicles",
};

/**
 * Authentication endpoints
 */
export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  REFRESH_TOKEN: "/auth/refresh-token",
  RESET_PASSWORD: "/auth/reset-password",
};

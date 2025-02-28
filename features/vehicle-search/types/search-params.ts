/**
 * Types for vehicle search parameters and form state
 */

export type VehicleType = "new" | "used" | "certified";

export type SellingOption = "instant-offer" | "sell-yourself";

export type IdentifierType = "license-plate" | "vin";

export interface SearchFormState {
  activeTab: "buy" | "sell";
}

export interface VehicleSearchParams {
  make?: string;
  model?: string;
  minPrice?: number;
  maxPrice?: number;
  zipCode?: string;
  radius?: number;
  vehicleType?: VehicleType;
  year?: number;
  bodyStyle?: string;
}

export interface SellVehicleParams {
  identifierType: IdentifierType;
  identifier: string;
  zipCode: string;
  sellingOption: SellingOption;
}

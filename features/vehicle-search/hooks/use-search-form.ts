"use client";

import { useState } from "react";
import {
  SearchFormState,
  VehicleSearchParams,
  SellVehicleParams,
} from "../types/search-params";

/**
 * Hook for managing search form state and validation
 */
export function useSearchForm() {
  const [formState, setFormState] = useState<SearchFormState>({
    activeTab: "buy",
  });

  const [buyParams, setBuyParams] = useState<VehicleSearchParams>({
    zipCode: "",
    radius: 50,
    vehicleType: "used",
  });

  const [sellParams, setSellParams] = useState<SellVehicleParams>({
    identifierType: "license-plate",
    identifier: "",
    zipCode: "",
    sellingOption: "instant-offer",
  });

  // Function to switch between buy and sell tabs
  const switchTab = (tab: "buy" | "sell") => {
    setFormState({ ...formState, activeTab: tab });
  };

  // Function to update buy search parameters
  const updateBuyParams = (params: Partial<VehicleSearchParams>) => {
    setBuyParams({ ...buyParams, ...params });
  };

  // Function to update sell vehicle parameters
  const updateSellParams = (params: Partial<SellVehicleParams>) => {
    setSellParams({ ...sellParams, ...params });
  };

  // Function to validate buy form
  const validateBuyForm = (): boolean => {
    return !!buyParams.zipCode;
  };

  // Function to validate sell form
  const validateSellForm = (): boolean => {
    return !!(sellParams.identifier && sellParams.zipCode);
  };

  // Function to submit buy form
  const submitBuyForm = () => {
    if (validateBuyForm()) {
      console.log("Submitting buy form with params:", buyParams);
      // TODO: Implement actual submission logic
      return true;
    }
    return false;
  };

  // Function to submit sell form
  const submitSellForm = () => {
    if (validateSellForm()) {
      console.log("Submitting sell form with params:", sellParams);
      // TODO: Implement actual submission logic
      return true;
    }
    return false;
  };

  return {
    formState,
    buyParams,
    sellParams,
    switchTab,
    updateBuyParams,
    updateSellParams,
    validateBuyForm,
    validateSellForm,
    submitBuyForm,
    submitSellForm,
  };
}

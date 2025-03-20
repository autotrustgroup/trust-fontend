"use client";

import { useState } from "react";
import { VehicleSearchParams, SellVehicleParams } from "../types/search-params";
import {
  SearchFormState,
  VehicleMakeSearchParams,
} from "../types/search-params-used-cars";

/**
 * Hook for managing search form state and validation
 */
export function useSearchUsedCarForm() {
  const [formState, setFormState] = useState<SearchFormState>({
    activeTab: "make",
  });

  const [makeParams, setMakeParams] = useState<VehicleMakeSearchParams>({
    zipCode: "",
    radius: 50,
    vehicleType: "used",
    price: "",
  });
  const [electricParams, setElectricParams] = useState<VehicleMakeSearchParams>(
    {
      zipCode: "",
      radius: 50,
      vehicleType: "used",
      price: "",
    }
  );

  const [bodyStyleParams, setBodyStyleParams] =
    useState<VehicleMakeSearchParams>({
      zipCode: "",
      radius: 50,
      vehicleType: "used",
      price: "",
    });

  // Function to switch between buy and sell tabs
  const switchTab = (tab: "make" | "style" | "electric") => {
    setFormState({ ...formState, activeTab: tab });
  };

  const updateMakeParams = (params: Partial<VehicleMakeSearchParams>) => {
    setMakeParams({ ...makeParams, ...params });
  };

  const updateElectricParams = (params: Partial<VehicleMakeSearchParams>) => {
    setElectricParams({ ...makeParams, ...params });
  };

  const updateBodyStyleParams = (params: Partial<VehicleMakeSearchParams>) => {
    setBodyStyleParams({ ...bodyStyleParams, ...params });
  };

  const validateElectricForm = (): boolean => {
    return !!electricParams.zipCode;
  };
  // Function to validate Make form
  const validateMakeForm = (): boolean => {
    return !!makeParams.zipCode;
  };
  // Function to validate Body Style form
  const validateBodyStyleForm = (): boolean => {
    return !!bodyStyleParams.zipCode;
  };

  // Function to submit make form
  const submitMakeForm = () => {
    if (validateMakeForm()) {
      console.log("Submitting buy form with params:", makeParams);
      // TODO: Implement actual submission logic
      return true;
    }
    return false;
  };

  // Function to submit body style form
  const submitBodyStyleForm = () => {
    if (validateBodyStyleForm()) {
      console.log("Submitting buy form with params:", bodyStyleParams);
      // TODO: Implement actual submission logic
      return true;
    }
    return false;
  };

  // Function to submit make form
  const submitElectricForm = () => {
    if (validateElectricForm()) {
      console.log("Submitting buy form with params:", electricParams);
      // TODO: Implement actual submission logic
      return true;
    }
    return false;
  };

  return {
    electricParams,
    updateElectricParams,
    submitElectricForm,
    validateElectricForm,
    bodyStyleParams,
    updateBodyStyleParams,
    submitBodyStyleForm,
    validateBodyStyleForm,
    formState,
    makeParams,
    switchTab,
    updateMakeParams,
    validateMakeForm,
    submitMakeForm,
  };
}

"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  VehicleSearchParams,
  SellVehicleParams,
  SearchFormState,
} from "@/features/vehicle-search/types/search-params";
import {
  searchVehicles,
  submitSellRequest,
} from "@/features/vehicle-search/api/search-service";

interface SearchHistoryItem {
  id: string;
  params: VehicleSearchParams;
  timestamp: number;
}

interface VehicleSearchState {
  // Form state
  formState: SearchFormState;
  buyParams: VehicleSearchParams;
  sellParams: SellVehicleParams;

  // Search history
  searchHistory: SearchHistoryItem[];

  // Search results
  isLoading: boolean;
  error: string | null;
  results: any[]; // Replace with proper vehicle type
  totalResults: number;

  // Actions
  switchTab: (tab: "buy" | "sell") => void;
  updateBuyParams: (params: Partial<VehicleSearchParams>) => void;
  updateSellParams: (params: Partial<SellVehicleParams>) => void;
  executeSearch: () => Promise<void>;
  executeSellRequest: () => Promise<void>;
  clearSearchHistory: () => void;
  removeSearchHistoryItem: (id: string) => void;
}

export const useVehicleSearchStore = create<VehicleSearchState>()(
  persist(
    (set, get) => ({
      // Initial state
      formState: {
        activeTab: "buy",
      },
      buyParams: {
        zipCode: "",
        radius: 50,
        vehicleType: "used",
      },
      sellParams: {
        identifierType: "license-plate",
        identifier: "",
        zipCode: "",
        sellingOption: "instant-offer",
      },
      searchHistory: [],
      isLoading: false,
      error: null,
      results: [],
      totalResults: 0,

      // Actions
      switchTab: (tab) => set({ formState: { activeTab: tab } }),

      updateBuyParams: (params) =>
        set((state) => ({
          buyParams: { ...state.buyParams, ...params },
        })),

      updateSellParams: (params) =>
        set((state) => ({
          sellParams: { ...state.sellParams, ...params },
        })),

      executeSearch: async () => {
        const { buyParams } = get();

        // Validate required fields
        if (!buyParams.zipCode) {
          set({ error: "ZIP code is required" });
          return;
        }

        set({ isLoading: true, error: null });

        try {
          const response = await searchVehicles(buyParams);

          if (response.success) {
            set({
              results: response.results,
              totalResults: response.totalResults,
              isLoading: false,
              // Add to search history
              searchHistory: [
                {
                  id: Date.now().toString(),
                  params: { ...buyParams },
                  timestamp: Date.now(),
                },
                ...get().searchHistory,
              ].slice(0, 10), // Keep only 10 most recent searches
            });
          } else {
            set({
              error: response.error || "Failed to search vehicles",
              isLoading: false,
            });
          }
        } catch (error) {
          set({
            error:
              error instanceof Error
                ? error.message
                : "An unknown error occurred",
            isLoading: false,
          });
        }
      },

      executeSellRequest: async () => {
        const { sellParams } = get();

        // Validate required fields
        if (!sellParams.identifier || !sellParams.zipCode) {
          set({ error: "Identifier and ZIP code are required" });
          return;
        }

        set({ isLoading: true, error: null });

        try {
          const response = await submitSellRequest(sellParams);

          if (response.success) {
            set({ isLoading: false });
            // Handle successful submission
            console.log("Sell request submitted successfully:", response);
          } else {
            set({
              error: response.error || "Failed to submit sell request",
              isLoading: false,
            });
          }
        } catch (error) {
          set({
            error:
              error instanceof Error
                ? error.message
                : "An unknown error occurred",
            isLoading: false,
          });
        }
      },

      clearSearchHistory: () => set({ searchHistory: [] }),

      removeSearchHistoryItem: (id) =>
        set((state) => ({
          searchHistory: state.searchHistory.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "vehicle-search-storage",
      partialize: (state) => ({
        buyParams: state.buyParams,
        sellParams: state.sellParams,
        searchHistory: state.searchHistory,
      }),
    }
  )
);

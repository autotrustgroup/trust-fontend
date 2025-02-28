# Vehicle Search Feature

This module contains all components, hooks, and utilities related to vehicle search functionality.

## Components

### Search Form Components

- `SearchForm` - Main search form component with tabs for different search types
- `CarsForSalesForm` - Form for searching cars for sale
- `SellYourCarForm` - Form for selling a car
- `SearchNavigationBar` - Navigation tabs for switching between search modes

### Search Results Components

- `SearchResults` - Component to display vehicle search results
- `CarListingCard` - Card for displaying individual vehicle listing information
- `CarListings` - Grid display of vehicle listings
- `SortControls` - Controls for sorting search results
- `LocationFilter` - Filter for location-based search results
- `FilterPanel` - Comprehensive filter panel for search results

## Hooks

- `useSearchForm` - Hook for managing search form state and validation
- `useSearchHistory` - Hook for managing user search history

## API

- `search-service.ts` - API functions for vehicle search operations

## Types

- `search-params.ts` - TypeScript types for search parameters and filters
- `search-results.ts` - TypeScript types for search results and listings

## State Management

- Integration with Zustand store for global state management

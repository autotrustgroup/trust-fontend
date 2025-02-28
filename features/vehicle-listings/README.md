# Vehicle Listings Feature

This feature module handles the presentation and interaction with vehicle listings throughout the application.

## Components

### Vehicle Detail

The `vehicle-detail` component provides a comprehensive view of a single vehicle listing. It includes:

- Image gallery with thumbnails
- Vehicle specifications
- Pricing information
- Dealer details
- Features and options
- Similar vehicles recommendations

### Usage

```tsx
// In a page component
import { VehicleDetailPage } from "@/features/vehicle-listings/components/vehicle-detail";

export default function VehicleDetailPageWrapper() {
  const id = "123"; // Get this from params or props
  return <VehicleDetailPage id={id} />;
}
```

## Future Enhancements

Planned enhancements for this feature include:

1. Add vehicle comparison functionality
2. Implement saved vehicles/favorites
3. Add vehicle history report integration
4. Implement dealer contact form
5. Add payment calculator

## Components

- `CarCategories` - Grid display of vehicle categories
- `RecommendedCars` - Showcase of recommended vehicles
- `FeaturedCar` - Highlighted featured vehicle component
- `VehicleCard` - Reusable card component for displaying vehicle information
- `VehicleListingFilters` - Filters for vehicle listings

## Hooks

- `useVehicleListings` - Hook for managing vehicle listings data and filtering
- `useVehicleCategories` - Hook for fetching and managing vehicle categories

## API

- `listings-service.ts` - API functions for vehicle listings operations
- `categories-service.ts` - API functions for vehicle categories

## Types

- `vehicle-listings.ts` - TypeScript types for vehicle listings and categories

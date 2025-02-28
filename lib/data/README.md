# Data Organization

This directory contains the data layer for the Auto Trust application. It's designed to provide a clean separation between UI components and data sources, making it easier to switch from mock data to real API endpoints in the future.

## Directory Structure

```
/lib/data/
  ├── index.ts                # Main exports and configuration
  ├── filters.ts              # Filtering and sorting utilities
  ├── /mock/                  # Mock data files
  │   ├── vehicles.ts         # Vehicle mock data
  │   └── search-terms.ts     # Search terms mock data
  └── /api/                   # API service layer
      └── vehicle-service.ts  # Vehicle API service
```

## Usage

### Importing Data

```typescript
// Import from the main data index
import { vehicleService, mockVehicles, trendingSearchTerms } from "@/lib/data";

// Or import specific modules
import { vehicleService } from "@/lib/data/api/vehicle-service";
import { mockVehicles } from "@/lib/data/mock/vehicles";
```

### Using the Vehicle Service

The vehicle service provides methods that mimic future API calls:

```typescript
// Get all vehicles with optional filtering
const vehicles = await vehicleService.getVehicles({
  condition: "used",
  maxPrice: 15000,
  types: ["sedan", "suv"],
});

// Get a single vehicle by ID
const vehicle = await vehicleService.getVehicleById(123);

// Get vehicles by category
const suvs = await vehicleService.getVehiclesByCategory("suv");

// Search vehicles by search term
const results = await vehicleService.searchVehiclesByTerm(
  "Used SUV Under $15K"
);
```

### Using Filters Directly

You can also use the filter utilities directly:

```typescript
import {
  filterVehicles,
  sortVehicles,
  buildSearchQuery,
} from "@/lib/data/filters";
import { mockVehicles } from "@/lib/data/mock/vehicles";

// Build search params from a search term
const searchParams = buildSearchQuery("Used SUV Under $15K");

// Filter vehicles
const filteredVehicles = filterVehicles(mockVehicles, searchParams);

// Sort vehicles
const sortedVehicles = sortVehicles(filteredVehicles, "price-asc");
```

## Transitioning to Real API

When you're ready to connect to a real backend API:

1. Update the `.env.local` file:

   ```
   NEXT_PUBLIC_API_URL=https://api.yourdomain.com
   NEXT_PUBLIC_USE_MOCK_DATA=false
   ```

2. Modify the service implementations in `/api/` to make real HTTP requests instead of returning mock data.

3. No changes to your components will be necessary if they're using the service layer.

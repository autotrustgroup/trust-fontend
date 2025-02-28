# Features Directory

This directory contains feature modules organized by domain. Each feature is a self-contained module with its own components, hooks, API functions, and types.

## Structure

Each feature follows this structure:

```
feature-name/
├── components/    # Feature-specific UI components
├── hooks/         # Custom hooks for this feature
├── api/           # API integrations for this feature
└── types/         # TypeScript types specific to this feature
```

## Current Features

- `vehicle-search/` - Vehicle search functionality including search forms and filters
- `vehicle-listings/` - Vehicle listing components including categories, recommended cars
- `dealers/` - Dealer-related functionality including nearby dealers and brand listings

## Guidelines

1. Keep feature code isolated from other features to maintain clear boundaries
2. Use shared UI components from `components/ui` when possible
3. Document feature-specific types in the feature's `types` directory
4. Place feature-specific API calls in the feature's `api` directory

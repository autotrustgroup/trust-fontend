# Stores Directory

This directory contains global state management using Zustand stores.

## Structure

```
stores/
├── vehicle-search.ts      # Search-related state
├── user-preferences.ts    # User preferences state
└── auth.ts                # Authentication state
```

## Guidelines

1. Keep stores focused on a specific domain
2. Use slices for complex stores
3. Document store interfaces with TypeScript
4. Prefer small, composable stores over large monolithic ones
5. Use selectors for derived state
6. Implement persistence where needed (e.g., user preferences)

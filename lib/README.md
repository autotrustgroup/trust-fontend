# Library Directory

This directory contains shared utilities, hooks, and API clients that are used across multiple features.

## Structure

```
lib/
├── api/        # Core API functionality
│   ├── client.ts           # Base API client
│   ├── endpoints.ts        # API endpoints
│   └── error-handling.ts   # API error handling
├── utils/      # Utility functions
│   ├── formatting.ts       # Formatting helpers
│   ├── validation.ts       # Validation helpers
│   └── url.ts              # URL manipulation
└── hooks/      # Shared hooks
    ├── use-media-query.ts  # Hook for responsive design
    ├── use-debounce.ts     # Hook for debouncing values
    └── use-local-storage.ts # Hook for local storage
```

## Guidelines

1. Keep utilities focused on a single responsibility
2. Document all functions with JSDoc comments
3. Write unit tests for utility functions
4. Avoid feature-specific code in this directory (use feature modules instead)

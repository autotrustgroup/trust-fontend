# Auto Trust - Car Marketplace

A modern car marketplace built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

This project follows a feature-first architecture with clear separation of concerns:

```
/
├── app/                    # Next.js App Router
│   ├── (root)/             # Marketing pages
│   ├── new-cars/           # New cars pages
│   ├── used-cars/          # Used cars pages
│   ├── sell/               # Sell your car pages
│   ├── finance/            # Finance pages
│   ├── research/           # Research pages
│   └── vehicledetail/      # Vehicle detail pages
├── components/             # Legacy components (being migrated)
│   ├── ui/                 # UI components
│   ├── features/           # Feature components
│   └── layout/             # Layout components
├── features/               # Feature modules (new structure)
│   ├── vehicle-search/     # Vehicle search functionality
│   │   ├── components/     # Feature-specific components
│   │   ├── hooks/          # Feature-specific hooks
│   │   ├── api/            # Feature-specific API
│   │   └── types/          # Feature-specific types
│   ├── vehicle-listings/   # Vehicle listings functionality
│   └── dealers/            # Dealer functionality
├── lib/                    # Shared utilities
│   ├── api/                # API client and utilities
│   ├── utils/              # Utility functions
│   └── hooks/              # Shared hooks
├── stores/                 # Global state management
├── types/                  # Global TypeScript types
└── public/                 # Static assets
```

## Features

- Vehicle search with filters
- New and used car listings
- Sell your car functionality
- Dealer directory
- Vehicle comparison
- Finance calculator

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Architecture

This project follows these architectural principles:

1. **Feature-First Organization**: Code is organized by domain features rather than technical concerns
2. **Separation of Concerns**: UI components, business logic, and data access are separated
3. **Domain-Driven Design**: Features have clear boundaries and encapsulate their own logic
4. **Shared UI Components**: Reusable UI components are shared across features
5. **Global State Management**: Zustand is used for global state management

## Migration Strategy

We are currently migrating from a page-based structure to a feature-based structure. The migration follows these steps:

1. Create the new feature-based structure
2. Migrate components one feature at a time
3. Update imports to use the new structure
4. Remove legacy components once migration is complete

## Contributing

Please follow these guidelines when contributing to this project:

1. Create new features in the `features/` directory
2. Use shared UI components from `components/ui/`
3. Follow the TypeScript and ESLint rules
4. Write tests for new functionality

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

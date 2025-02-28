import { SearchParams, Vehicle } from "@/types/vehicle";

/**
 * Builds a search query object from a search term string
 * @param searchTerm The search term to parse
 * @returns A SearchParams object with the appropriate filters
 */
export const buildSearchQuery = (searchTerm: string): SearchParams => {
  const query: SearchParams = {};

  // Parse condition
  if (searchTerm.toLowerCase().includes("new")) {
    query.condition = "new";
  } else if (searchTerm.toLowerCase().includes("used")) {
    query.condition = "used";
  } else if (searchTerm.toLowerCase().includes("certified")) {
    query.condition = "certified";
  }

  // Parse price ranges
  if (searchTerm.toLowerCase().includes("under $15k")) {
    query.maxPrice = 15000;
  } else if (searchTerm.toLowerCase().includes("under $20k")) {
    query.maxPrice = 20000;
  } else if (searchTerm.toLowerCase().includes("under $30k")) {
    query.maxPrice = 30000;
  } else if (searchTerm.toLowerCase().includes("under $50k")) {
    query.maxPrice = 50000;
  } else if (searchTerm.toLowerCase().includes("under $60k")) {
    query.maxPrice = 60000;
  } else if (searchTerm.toLowerCase().includes("under $100k")) {
    query.maxPrice = 100000;
  }

  // Parse vehicle types
  if (searchTerm.toLowerCase().includes("suv")) {
    query.types = ["suv"];
  } else if (searchTerm.toLowerCase().includes("truck")) {
    query.types = ["truck"];
  } else if (searchTerm.toLowerCase().includes("sedan")) {
    query.types = ["sedan"];
  } else if (searchTerm.toLowerCase().includes("electric")) {
    query.types = ["electric"];
  } else if (searchTerm.toLowerCase().includes("hybrid")) {
    query.types = ["hybrid"];
  } else if (searchTerm.toLowerCase().includes("luxury")) {
    query.tags = ["luxury"];
  } else if (searchTerm.toLowerCase().includes("sports")) {
    query.types = ["sports"];
  }

  // Parse makes
  const makes = [
    "toyota",
    "honda",
    "ford",
    "chevrolet",
    "bmw",
    "mercedes-benz",
    "audi",
    "tesla",
    "porsche",
    "lincoln",
  ];

  for (const make of makes) {
    if (searchTerm.toLowerCase().includes(make)) {
      query.makes = [make];
      break;
    }
  }

  // Parse models
  if (searchTerm.toLowerCase().includes("porsche 911")) {
    query.makes = ["porsche"];
    query.models = ["911"];
  } else if (searchTerm.toLowerCase().includes("lincoln nautilus")) {
    query.makes = ["lincoln"];
    query.models = ["nautilus"];
  }

  return query;
};

/**
 * Filters vehicles based on search parameters
 * @param vehicles Array of vehicles to filter
 * @param params Search parameters to apply
 * @returns Filtered array of vehicles
 */
export const filterVehicles = (
  vehicles: Vehicle[],
  params: SearchParams
): Vehicle[] => {
  return vehicles.filter((vehicle) => {
    // Filter by condition
    if (params.condition && vehicle.condition !== params.condition) {
      return false;
    }

    // Filter by price range
    if (params.minPrice && vehicle.price < params.minPrice) {
      return false;
    }
    if (params.maxPrice && vehicle.price > params.maxPrice) {
      return false;
    }

    // Filter by year range
    if (params.minYear && vehicle.year < params.minYear) {
      return false;
    }
    if (params.maxYear && vehicle.year > params.maxYear) {
      return false;
    }

    // Filter by make
    if (params.makes && params.makes.length > 0) {
      if (
        !params.makes.some(
          (make) => vehicle.make.toLowerCase() === make.toLowerCase()
        )
      ) {
        return false;
      }
    }

    // Filter by model
    if (params.models && params.models.length > 0) {
      if (
        !params.models.some(
          (model) => vehicle.model.toLowerCase() === model.toLowerCase()
        )
      ) {
        return false;
      }
    }

    // Filter by vehicle type
    if (params.types && params.types.length > 0) {
      if (!params.types.includes(vehicle.type)) {
        return false;
      }
    }

    // Filter by tags
    if (params.tags && params.tags.length > 0) {
      if (!params.tags.some((tag) => vehicle.tags.includes(tag))) {
        return false;
      }
    }

    return true;
  });
};

/**
 * Sorts vehicles based on sort option
 * @param vehicles Array of vehicles to sort
 * @param sortBy Sort option
 * @returns Sorted array of vehicles
 */
export const sortVehicles = (
  vehicles: Vehicle[],
  sortBy?: string
): Vehicle[] => {
  if (!sortBy) return vehicles;

  const sortedVehicles = [...vehicles];

  switch (sortBy) {
    case "price-asc":
      return sortedVehicles.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sortedVehicles.sort((a, b) => b.price - a.price);
    case "year-asc":
      return sortedVehicles.sort((a, b) => a.year - b.year);
    case "year-desc":
      return sortedVehicles.sort((a, b) => b.year - a.year);
    case "mileage-asc":
      return sortedVehicles.sort((a, b) => {
        const mileageA =
          typeof a.mileage === "string"
            ? parseInt(a.mileage.replace(/,/g, ""))
            : a.mileage;
        const mileageB =
          typeof b.mileage === "string"
            ? parseInt(b.mileage.replace(/,/g, ""))
            : b.mileage;
        return mileageA - mileageB;
      });
    case "mileage-desc":
      return sortedVehicles.sort((a, b) => {
        const mileageA =
          typeof a.mileage === "string"
            ? parseInt(a.mileage.replace(/,/g, ""))
            : a.mileage;
        const mileageB =
          typeof b.mileage === "string"
            ? parseInt(b.mileage.replace(/,/g, ""))
            : b.mileage;
        return mileageB - mileageA;
      });
    default:
      return sortedVehicles;
  }
};

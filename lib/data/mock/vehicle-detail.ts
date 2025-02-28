import { Vehicle } from "@/types/vehicle";

// API Response Mock Structure for detailed vehicle information
export interface VehicleDetailData extends Omit<Vehicle, "features"> {
  dealer: {
    name: string;
    rating: number;
    reviews: number;
    location: string;
    address: string;
    phone: string;
  };
  specs: {
    exteriorColor: string;
    interiorColor: string;
    mileage: string;
    transmission: string;
    drivetrain: string;
    engine: string;
    vin: string;
    stock: string;
    mpg: {
      city: number;
      highway: number;
    };
  };
  features: {
    convenience: string[];
    entertainment: string[];
    safety: string[];
    additional: string[];
  };
  priceHistory: {
    date: string;
    price: number;
  }[];
  dealGauge: {
    rating: string;
    marketComparison: number;
    marketRange: {
      min: number;
      max: number;
      average: number;
    };
  };
  vehicleHistory: {
    accidents: number;
    owners: number;
    serviceRecords: boolean;
    rentalUse: boolean;
    lastReported: string;
  };
}

// Mock API response - represents data from backend for a single vehicle detail
export const mockVehicleDetail: VehicleDetailData = {
  id: "6aba792c-4246-49b7-99d6-ebdeca86b1a1",
  name: "2023 Audi S8 Prestige TFSI quattro Tiptronic",
  price: 47888,
  image:
    "https://images.unsplash.com/photo-1619767886293-4ce94289ab5f?q=80&w=1000&auto=format&fit=crop",
  href: "/vehicledetail/6aba792c-4246-49b7-99d6-ebdeca86b1a1",
  mileage: 10234,
  year: 2023,
  condition: "used",
  type: "luxury",
  tags: ["luxury", "audi", "sedan"],
  make: "Audi",
  model: "S8",
  trim: "Prestige TFSI quattro Tiptronic",
  exteriorColor: "Gray",
  interiorColor: "Black",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "4.0L V8 gasoline direct injection TFSI",
  description:
    "Meticulously maintained Audi S8 with TFSI quattro technology offering a perfect blend of luxury and performance.",
  location: "Seattle, WA",
  vin: "WAAFD8PN123456",
  dealer: {
    name: "BMW Seattle",
    rating: 4.9,
    reviews: 2603,
    location: "Seattle, WA",
    address: "1002 Airport Way S, Seattle, WA 98134",
    phone: "(206) 328-8787",
  },
  specs: {
    exteriorColor: "Gray",
    interiorColor: "Black",
    mileage: "10,234",
    transmission: "Automatic",
    drivetrain: "AWD",
    engine: "4.0L V8 gasoline direct injection TFSI",
    vin: "WAUW2AFD8PN123456",
    stock: "P123456",
    mpg: {
      city: 15,
      highway: 23,
    },
  },
  features: {
    convenience: [
      "Adaptive Cruise Control",
      "Remote Start",
      "Keyless Entry",
      "Push Button Start",
    ],
    safety: [
      "Lane Departure Warning",
      "Forward Collision Warning",
      "Blind Spot Monitor",
      "360-degree Camera",
    ],
    entertainment: [
      "Premium Sound System",
      "Apple CarPlay",
      "Android Auto",
      "Navigation System",
    ],
    additional: [
      "LED Headlights",
      "Panoramic Sunroof",
      "Power Folding Mirrors",
      '20" Alloy Wheels',
    ],
  },
  priceHistory: [
    { date: "2024-01-01", price: 49888 },
    { date: "2024-01-15", price: 48888 },
    { date: "2024-02-01", price: 47888 },
  ],
  dealGauge: {
    rating: "Great Deal",
    marketComparison: -3200, // Amount below market average
    marketRange: {
      min: 45000,
      max: 52000,
      average: 51088,
    },
  },
  vehicleHistory: {
    accidents: 0,
    owners: 1,
    serviceRecords: true,
    rentalUse: false,
    lastReported: "2024-01-15",
  },
};

// Enhanced mock data for the second vehicle
export const mockVehicleDetail2: VehicleDetailData = {
  id: "8cdf912e-5339-48a9-bc62-fc97a42f3b23",
  name: "2022 Tesla Model 3 Long Range",
  price: 38990,
  image:
    "https://images.unsplash.com/photo-1619767886293-4ce94289ab5f?q=80&w=1000&auto=format&fit=crop",
  href: "/vehicledetail/8cdf912e-5339-48a9-bc62-fc97a42f3b23",
  mileage: 15782,
  year: 2022,
  condition: "used",
  type: "electric",
  tags: ["electric", "tesla", "sedan", "eco-friendly"],
  make: "Tesla",
  model: "Model 3",
  trim: "Long Range",
  exteriorColor: "White",
  interiorColor: "Black",
  fuelType: "Electric",
  transmission: "Automatic",
  engine: "Electric Dual Motor",
  description:
    "Tesla Model 3 with long range battery and dual motor all-wheel drive. Includes Full Self-Driving capability.",
  location: "Seattle, WA",
  vin: "7YJ314HGNLR789012",
  dealer: {
    name: "Tesla Seattle",
    rating: 4.7,
    reviews: 1845,
    location: "Seattle, WA",
    address: "425 Westlake Ave N, Seattle, WA 98109",
    phone: "(206) 682-5600",
  },
  specs: {
    exteriorColor: "White",
    interiorColor: "Black",
    mileage: "15,782",
    transmission: "Automatic",
    drivetrain: "AWD",
    engine: "Electric Dual Motor",
    vin: "7YJ314HGNLR789012",
    stock: "T789012",
    mpg: {
      city: 0,
      highway: 0,
    },
  },
  features: {
    convenience: [
      "Autopilot",
      "360-degree Camera System",
      "Keyless Entry",
      "Remote Start",
    ],
    safety: [
      "Automatic Emergency Braking",
      "Lane Departure Warning",
      "Forward Collision Warning",
      "Blind Spot Monitoring",
    ],
    entertainment: [
      "15-inch Touchscreen",
      "Premium Audio System",
      "Streaming Services",
      "Wireless Charging",
    ],
    additional: [
      "Glass Roof",
      "19-inch Wheels",
      "LED Headlights",
      "Heated Seats",
    ],
  },
  priceHistory: [
    { date: "2024-01-15", price: 41990 },
    { date: "2024-02-01", price: 40490 },
    { date: "2024-02-15", price: 38990 },
  ],
  dealGauge: {
    rating: "Fair Deal",
    marketComparison: -500, // Amount below market average
    marketRange: {
      min: 36500,
      max: 43000,
      average: 39490,
    },
  },
  vehicleHistory: {
    accidents: 0,
    owners: 1,
    serviceRecords: true,
    rentalUse: false,
    lastReported: "2023-12-10",
  },
};

// List of example detailed vehicles for similar vehicle showcases
export const mockDetailedVehicles: VehicleDetailData[] = [
  mockVehicleDetail,
  mockVehicleDetail2,
  // Add more vehicles as needed
];

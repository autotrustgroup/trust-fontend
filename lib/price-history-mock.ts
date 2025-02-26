// Types for price history data
interface PricePoint {
  date: string;
  price: number;
  change?: number;
  marketAverage: number;
  marketRangeLow: number;
  marketRangeHigh: number;
}

interface PriceHistoryData {
  history: PricePoint[];
  totalReduction: number;
  listedDays: number;
  chartData: {
    dates: string[];
    prices: number[];
    marketAverage: number[];
    marketRangeLow: number[];
    marketRangeHigh: number[];
  };
}

// Mock data matching the graph
export const mockPriceHistory: PriceHistoryData = {
  history: [
    {
      date: "2/09/25",
      price: 26500,
      marketAverage: 26700,
      marketRangeLow: 25900,
      marketRangeHigh: 27500,
    },
    {
      date: "2/11/25",
      price: 26500,
      marketAverage: 26600,
      marketRangeLow: 25800,
      marketRangeHigh: 27400,
    },
    {
      date: "2/13/25",
      price: 26500,
      marketAverage: 26500,
      marketRangeLow: 25700,
      marketRangeHigh: 27300,
    },
    {
      date: "2/15/25",
      price: 25900,
      change: -600,
      marketAverage: 26400,
      marketRangeLow: 25600,
      marketRangeHigh: 27200,
    },
  ],
  totalReduction: 600,
  listedDays: 17,
  chartData: {
    dates: ["2/9", "2/11", "2/13", "2/15"],
    prices: [26500, 26500, 26500, 25900],
    marketAverage: [26700, 26600, 26500, 26400],
    marketRangeLow: [25900, 25800, 25700, 25600],
    marketRangeHigh: [27500, 27400, 27300, 27200],
  },
};

// Helper function to format price for display
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Helper function to format price in K format
export function formatPriceK(price: number): string {
  return `$${(price / 1000).toFixed(0)}K`;
}

// Y-axis tick values for the chart
export const yAxisTicks = [25000, 26000, 27000, 28000].map(formatPriceK);

export type { PricePoint, PriceHistoryData };

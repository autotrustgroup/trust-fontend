"use client";

import { useMemo } from "react";
import type { PriceHistoryData } from "@/lib/price-history-mock";
import { formatPrice, yAxisTicks } from "@/lib/price-history-mock";

interface PriceHistoryProps {
  data: PriceHistoryData;
}

export function PriceHistory({ data }: PriceHistoryProps) {
  const { history, totalReduction, listedDays, chartData } = data;

  // Calculate graph dimensions and scales
  const graphHeight = 160; // Actual height of the graph area
  const graphWidth = 300; // Actual width of the graph area

  // Calculate positions for the price line
  const points = useMemo(() => {
    const maxPrice = 28000; // From yAxisTicks
    const minPrice = 25000; // From yAxisTicks
    const priceRange = maxPrice - minPrice;

    return chartData.prices
      .map((price, index) => {
        const x = (index / (chartData.dates.length - 1)) * graphWidth;
        const y = graphHeight - ((price - minPrice) / priceRange) * graphHeight;
        return `${x},${y}`;
      })
      .join(" ");
  }, [chartData.prices, chartData.dates.length, graphHeight]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-[28px] font-bold mb-6">Price history</h2>
      <div className="space-y-1 mb-6">
        <p className="text-[15px]">
          Listed <span className="font-medium">{listedDays} days</span> ago.
        </p>
        <p className="text-[15px]">
          <span className="font-medium">{formatPrice(totalReduction)}</span>{" "}
          total price reduction!
        </p>
      </div>

      {/* Graph Container */}
      <div className="relative h-[200px] mb-6 border border-gray-200 rounded-sm p-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-600 -translate-x-2">
          {yAxisTicks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>

        {/* Graph Area */}
        <div className="relative h-full ml-8">
          <svg
            className="w-full h-full"
            viewBox={`0 0 ${graphWidth} ${graphHeight}`}
            preserveAspectRatio="none"
          >
            {/* Market range area */}
            <path
              d={`M ${points} L ${graphWidth},${graphHeight} L 0,${graphHeight} Z`}
              fill="rgba(139, 69, 247, 0.1)"
            />
            {/* Price line */}
            <polyline
              points={points}
              fill="none"
              stroke="#8B45F7"
              strokeWidth="2"
            />
            {/* Price points */}
            {chartData.prices.map((_, index) => {
              const [x, y] = points.split(" ")[index].split(",");
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="white"
                  stroke="#8B45F7"
                  strokeWidth="2"
                />
              );
            })}
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-600 translate-y-4">
          {chartData.dates.map((date) => (
            <span key={date}>{date}</span>
          ))}
        </div>

        {/* Legend */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs text-gray-600 translate-y-8">
          <div className="flex items-center gap-1">
            <span className="w-4 h-[1px] bg-[#8B45F7]"></span>
            <span>Avg. market price</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-4 h-3 bg-[#8B45F7]/10"></span>
            <span>Avg. market range</span>
          </div>
        </div>
      </div>

      {/* Price History Table */}
      <table className="w-full text-[15px]">
        <tbody>
          {history.map((item, index) => (
            <tr
              key={index}
              className={index === 0 ? "" : "border-t border-gray-100"}
            >
              <td className="py-3">{item.date}</td>
              <td className="py-3 text-right text-gray-600">
                {item.change
                  ? `-${formatPrice(Math.abs(item.change))}`
                  : "Listed"}
              </td>
              <td className="py-3 text-right font-medium">
                {formatPrice(item.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-4 text-xs text-gray-500">
        Total price amount is based on price change information provided by the
        seller.
      </p>
    </div>
  );
}

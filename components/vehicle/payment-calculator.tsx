"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentCalculatorProps {
  basePrice: number;
  apr: number;
  salesTax: number;
}

export function PaymentCalculator({
  basePrice,
  apr,
  salesTax,
}: PaymentCalculatorProps) {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState(72);

  const terms = [36, 48, 60, 72];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-[28px] font-bold mb-6">Customize your payment</h2>

      {/* Payment Amount */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-[#8B45F7] text-4xl font-bold">$487</span>
          <span className="text-[#8B45F7] text-xl">/mo*</span>
        </div>
        <p className="text-[15px] text-gray-600">
          Based on est. car price of ${basePrice.toLocaleString()} at {apr}%
          APR* and {salesTax}% sales tax.
        </p>
        <button
          onClick={() => setShowBreakdown(!showBreakdown)}
          className="text-[15px] font-medium mt-2 flex items-center hover:underline"
        >
          Show breakdown
          <ChevronDown className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Credit Rating Dropdown */}
      <div className="mb-4">
        <label className="block text-[15px] mb-2">Your credit rating</label>
        <div className="relative">
          <select className="w-full h-12 px-4 border border-gray-200 rounded-sm bg-white appearance-none text-[15px]">
            <option>Excellent (780 - 850)</option>
            <option>Very Good (740 - 779)</option>
            <option>Good (670 - 739)</option>
            <option>Fair (580 - 669)</option>
            <option>Poor (300 - 579)</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* ZIP Code */}
      <div className="mb-4">
        <label className="block text-[15px] mb-2">ZIP (optional)</label>
        <input
          type="text"
          defaultValue="60606"
          className="w-full h-12 px-4 border border-gray-200 rounded-sm"
          maxLength={5}
        />
      </div>

      {/* Trade-in and Down Payment */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-[15px] mb-2">
            Net trade-in value (optional)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">$</span>
            <input
              type="text"
              defaultValue="0"
              className="w-full h-12 pl-8 pr-4 border border-gray-200 rounded-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-[15px] mb-2">
            Down payment (optional)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">$</span>
            <input
              type="text"
              defaultValue="0"
              className="w-full h-12 pl-8 pr-4 border border-gray-200 rounded-sm"
            />
          </div>
        </div>
      </div>

      {/* Loan Length */}
      <div className="mb-6">
        <label className="block text-[15px] mb-2">
          Length of loan (in months)
        </label>
        <div className="grid grid-cols-4 gap-2">
          {terms.map((term) => (
            <button
              key={term}
              onClick={() => setSelectedTerm(term)}
              className={cn(
                "h-12 rounded-sm border text-[15px] font-medium transition-colors",
                selectedTerm === term
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-200 hover:border-gray-300"
              )}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-xs text-gray-500 space-y-4">
        <p>
          *Estimated payments are calculated by Cars.com and are for
          informational purposes only. We've estimated your taxes based on your
          provided ZIP code. These estimates do not include title, registration
          fees, lien fees, or any other fees that may be imposed by a
          governmental agency in connection with the sale and financing of the
          vehicle. Other taxes may apply. These estimates do not represent a
          financial offer or a guarantee of credit from the seller. Actual terms
          vary by lender.
        </p>
        <p>
          <span className="font-medium">About your privacy:</span> Cars.com is
          asking for your ZIP and credit rating because it helps us to make an
          educated guess at your sales tax and loan interest rate. These two
          factors can greatly change your monthly payment.
        </p>
      </div>
    </div>
  );
}

import { Check } from "lucide-react";

export function PrequalifiedSection() {
  return (
    <div className="bg-white rounded-lg p-6 mt-4">
      <h3 className="text-lg font-semibold mb-4">Get prequalified</h3>

      <ul className="space-y-3 mb-6">
        <li className="flex items-center gap-3">
          <Check className="h-5 w-5 text-[#8B45F7]" />
          <span className="text-sm">No impact to your credit score.</span>
        </li>
        <li className="flex items-center gap-3">
          <Check className="h-5 w-5 text-[#8B45F7]" />
          <span className="text-sm">
            Get an instant, personalized offer with real monthly payments on
            this car.
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Check className="h-5 w-5 text-[#8B45F7]" />
          <span className="text-sm">
            Know your offer before visiting the dealership.
          </span>
        </li>
      </ul>

      <button
        type="button"
        className="w-full h-12 bg-grey-900 hover:bg-grey-900/90 text-white font-medium rounded-md transition-colors"
      >
        Get prequalified
      </button>
    </div>
  );
}

import { ArrowUpRight } from "lucide-react";

interface VehicleHistoryProps {
  history: {
    accidents: string;
    oneOwner: boolean;
    personalUse: boolean;
    openRecall: string;
  };
}

export function VehicleHistory({ history }: VehicleHistoryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Vehicle history by CARFAX</h2>
      </div>

      <a
        href="#"
        className="inline-flex items-center text-[15px] font-medium text-gray-900 hover:underline mb-6"
      >
        Free CARFAX Report
        <ArrowUpRight className="w-4 h-4 ml-1" />
      </a>

      <div className="divide-y border-t border-gray-200">
        <div className="py-4 grid grid-cols-2 gap-4">
          <dt className="text-[15px] text-gray-900">Accidents or damage</dt>
          <dd className="text-[15px] text-gray-900">{history.accidents}</dd>
        </div>

        <div className="py-4 grid grid-cols-2 gap-4">
          <dt className="text-[15px] text-gray-900">1-owner vehicle</dt>
          <dd className="text-[15px] text-gray-900">
            {history.oneOwner ? "Yes" : "No"}
          </dd>
        </div>

        <div className="py-4 grid grid-cols-2 gap-4">
          <dt className="text-[15px] text-gray-900">Personal use only</dt>
          <dd className="text-[15px] text-gray-900">
            {history.personalUse ? "Yes" : "No"}
          </dd>
        </div>

        <div className="py-4 grid grid-cols-2 gap-4">
          <dt className="text-[15px] text-gray-900">Open recall</dt>
          <dd className="text-[15px] text-gray-900">{history.openRecall}</dd>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-500 leading-relaxed">
        The vehicle history information is supplied by third parties. Cars.com
        and the Seller are not responsible for the accuracy of such information.
        Cars.com provides this service and materials without representations or
        warranties of any kind, either expressed or implied. Please see{" "}
        <a href="#" className="text-gray-900 hover:underline">
          Cars.com Terms and Conditions
        </a>{" "}
        for further information.
      </p>
    </div>
  );
}

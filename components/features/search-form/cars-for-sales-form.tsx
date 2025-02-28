import React from "react";
import { ChevronDown } from "lucide-react";

interface FuncProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CarsForSalesForm: React.FC<FuncProps> = ({ handleSubmit }: FuncProps) => {
  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Buy form content */}
        <div className="md:col-span-3">
          <div className="relative">
            <select
              className="w-full h-12 pl-3 pr-8 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              defaultValue="new"
            >
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
            <label className="absolute -top-2 left-3 text-xs bg-white px-1 text-gray-500">
              New/used
            </label>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="relative">
            <select
              className="w-full h-12 pl-3 pr-8 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              defaultValue="ford"
            >
              <option value="ford">Ford</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
            <label className="absolute -top-2 left-3 text-xs bg-white px-1 text-gray-500">
              Make
            </label>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative">
            <select
              className="w-full h-12 pl-3 pr-8 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              defaultValue="mach-e"
            >
              <option value="mach-e">Mustang Mach-E</option>
              <option value="f150">F-150</option>
              <option value="bronco">Bronco</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
            <label className="absolute -top-2 left-3 text-xs bg-white px-1 text-gray-500">
              Model
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-3">
          <div className="relative">
            <select
              className="w-full h-12 pl-3 pr-8 bg-white border border-[#E5E5E5] rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              defaultValue="30"
            >
              <option value="10">10 miles</option>
              <option value="20">20 miles</option>
              <option value="30">30 miles</option>
              <option value="50">50 miles</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
            <label className="absolute -top-2 left-3 text-xs bg-white px-1 text-gray-500">
              Distance
            </label>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="relative">
            <input
              type="text"
              className="w-full h-12 pl-3 pr-3 bg-white border border-[#E5E5E5] rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              defaultValue="60606"
            />
            <label className="absolute -top-2 left-3 text-xs bg-white px-1 text-gray-500">
              ZIP
            </label>
          </div>
        </div>

        <div className="md:col-span-5">
          <button
            type="submit"
            className="w-full h-12 bg-[#7963F7] hover:bg-[#6952E9] text-white rounded font-medium transition-colors"
          >
            Show 89 matches
          </button>
        </div>
      </div>
    </form>
  );
};

export default CarsForSalesForm;

"use client";

import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ExploreOptions() {
  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-bold mb-4">Explore your options</h2>
          <p className="text-[15px] text-gray-600 mb-12">
            Either way you go, there's{" "}
            <span className="font-medium">no obligation</span> and{" "}
            <span className="font-medium">no contact</span> for getting started
            with an instant estimate.
          </p>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-[#8B45F7] flex-shrink-0 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 14H12C11.4477 14 11 14.4477 11 15V25C11 25.5523 11.4477 26 12 26H28C28.5523 26 29 25.5523 29 25V15C29 14.4477 28.5523 14 28 14Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M14 20H26M14 23H22"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Enter vehicle details
                </h3>
                <p className="text-[15px] text-gray-600">
                  Provide your license plate and a few vehicle details to get
                  started in seconds.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-[#8B45F7] flex-shrink-0 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0294 11 11 15.0294 11 20C11 24.9706 15.0294 29 20 29Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 16V20L23 23"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Get instant estimates
                </h3>
                <p className="text-[15px] text-gray-600">
                  See what you can expect to make by selling to a local dealer
                  or a private buyer.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-[#8B45F7] flex-shrink-0 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29 20H25L22 29L18 11L15 20H11"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Ready? Go.</h3>
                <p className="text-[15px] text-gray-600">
                  If you're ready to be contacted, submit your vehicle for a
                  cash offer or to be listed on Cars.com!
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="max-w-xl mx-auto">
              {/* License Plate/VIN Toggle */}
              <div className="inline-flex rounded-full p-1 bg-[#141817] mb-6">
                <button className="px-6 py-2 rounded-full bg-white text-sm font-medium">
                  License plate
                </button>
                <button className="px-6 py-2 rounded-full text-white text-sm font-medium">
                  VIN
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="License plate" className="h-12" />
                  <div className="relative">
                    <select className="w-full h-12 pl-3 pr-10 bg-white border rounded-md appearance-none">
                      <option value="">State</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      {/* Add more states */}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="py-4">
                  <p className="text-sm font-medium mb-3">
                    Estimate car value for:
                  </p>
                  <RadioGroup defaultValue="instant">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="instant" id="instant" />
                      <Label htmlFor="instant">Instant offer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="listing" id="listing" />
                      <Label htmlFor="listing">
                        Selling it yourself on Cars.com
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button className="w-full bg-[#141817] hover:bg-[#2A2C2B] text-white h-12">
                  Get estimate
                </Button>

                <p className="text-xs text-gray-500">
                  By clicking here, you authorize Cars.com to continue with
                  collecting your information. We only save this data to provide
                  you a listing to sell your car. We value and protect your
                  privacy.{" "}
                  <Link href="#" className="text-[#8B45F7] hover:underline">
                    Cars.com Privacy Notice
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function ContactSellerForm() {
  const [subject, setSubject] = useState("Check availability");

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Suggested next steps</h2>
      </div>

      <div className="border-b pb-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold">Contact seller</h3>
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </div>

        <a
          href="tel:(510) 246-3902"
          className="text-lg font-medium hover:underline"
        >
          (510) 246-3902
        </a>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="sr-only">
              First name
            </Label>
            <Input
              id="firstName"
              placeholder="First name"
              className="h-11 rounded-md border-gray-300 placeholder:text-gray-500"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="sr-only">
              Last name
            </Label>
            <Input
              id="lastName"
              placeholder="Last name"
              className="h-11 rounded-md border-gray-300 placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="h-11 rounded-md border-gray-300 placeholder:text-gray-500"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="sr-only">
              Phone (optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Phone (optional)"
              className="h-11 rounded-md border-gray-300 placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="relative">
          <Label htmlFor="subject" className="sr-only">
            Subject
          </Label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full h-11 px-3 rounded-md border border-gray-300 bg-white appearance-none"
          >
            <option value="Check availability">Check availability</option>
            <option value="Request more info">Request more info</option>
            <option value="Schedule test drive">Schedule test drive</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        <div>
          <Label htmlFor="comments" className="sr-only">
            Comments
          </Label>
          <Textarea
            id="comments"
            placeholder="I'd like to know if the Used 2016 Nissan Leaf SL you have listed on Cars.com for $6,340 is still available."
            className="min-h-[120px] rounded-md border-gray-300 placeholder:text-gray-500"
          />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox id="tradeIn" className="mt-1" />
          <Label htmlFor="tradeIn" className="text-sm leading-none">
            I have a trade in
          </Label>
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-[#8B45F7] hover:bg-[#7B3BE3] text-white font-medium rounded-md transition-colors"
        >
          Check availability
        </button>

        <p className="text-xs text-gray-500 leading-relaxed">
          By clicking here, you authorize Cars.com and its sellers/partners to
          contact you by text/calls which may include marketing and be by
          autodialer. Calls may be prerecorded. You also agree to our{" "}
          <a href="#" className="text-[#8B45F7] hover:underline">
            Privacy Notice
          </a>
          . Consent is not required to purchase goods/services.
        </p>
      </form>
    </div>
  );
}

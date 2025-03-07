"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function InstantOffer() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">Sell your car your way</h1>
          <p className="text-lg text-gray-600">
            Quickly and securely cash-in your offer from a local dealer, or
            create a free listing to sell it yourself on Cars.com
          </p>
        </div>

        <Tabs defaultValue="instant-offer" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="instant-offer">Get instant offer</TabsTrigger>
            <TabsTrigger value="list">List on Cars.com</TabsTrigger>
          </TabsList>

          <TabsContent
            value="instant-offer"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Instant Offer Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Get instant offer</h2>
                <p className="text-gray-600">
                  Take the next step to get an exact, no obligation cash offer
                  on your car from a local dealer right now, and then get paid
                  after a quick inspection of your vehicle's condition at the
                  dealership.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#8B45F7] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Sell your car quickly</h3>
                    <p className="text-sm text-gray-600">
                      Get your offer online and quickly complete the transaction
                      with a short appointment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#8B45F7] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">
                      Transact with full transparency
                    </h3>
                    <p className="text-sm text-gray-600">
                      With an exact offer upfront and a fully transparent
                      inspection report, there's no need for haggling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#8B45F7] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Secure easy payment</h3>
                    <p className="text-sm text-gray-600">
                      Get paid directly from your local neighborhood dealership
                      if you choose to move forward.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#8B45F7] hover:bg-[#7B3BE3]">
                Get your instant offer
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] mt-8 lg:mt-16">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2015.21.26-KQZiIunz4EhKYhFeTvYNbbiCXP4f13.png"
                alt="People selling a car"
                fill
                className="object-contain"
                priority
              />
            </div>
          </TabsContent>

          <TabsContent value="list">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    List your car on Cars.com
                  </h2>
                  <p className="text-gray-600">
                    Quickly and easily create a free listing at your own asking
                    price and wait for interested shoppers to contact you
                    directly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#8B45F7] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">List your car for free.</h3>
                      <p className="text-sm text-gray-600">
                        There are no costs or hidden fees to selling your car
                        yourself on Cars.com.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#8B45F7] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Set your own price.</h3>
                      <p className="text-sm text-gray-600">
                        Use Cars.com's insights into your vehicle's market value
                        to set your asking price.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#8B45F7] flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">
                          Transact with Caramel.
                        </h3>
                        <span className="text-xs font-medium text-white bg-[#8B45F7] px-2 py-0.5 rounded">
                          NEW
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        We've partnered with Caramel to level-up your Cars.com
                        listing. Give verified buyers a handy way to add
                        financing, vehicle protection, insurance, and delivery.
                        Caramel will handle the paperwork, DMV, and get you paid
                        safely.{" "}
                        <Link
                          href="#"
                          className="text-[#8B45F7] hover:underline"
                        >
                          How it works
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <p className="text-sm">
                    Already have a listing?{" "}
                    <Link href="#" className="text-[#8B45F7] hover:underline">
                      View Your Garage
                    </Link>
                  </p>
                  <p className="text-sm">
                    Want expert advice on how to sell your used car?{" "}
                    <Link href="#" className="text-[#8B45F7] hover:underline">
                      Check it out.
                    </Link>
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <RadioGroup defaultValue="license" className="flex gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="license" id="license" />
                    <Label htmlFor="license">License plate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vin" id="vin" />
                    <Label htmlFor="vin">VIN</Label>
                  </div>
                </RadioGroup>

                <div className="space-y-4">
                  <div>
                    <Input placeholder="License plate" className="h-12" />
                  </div>
                  <div className="relative">
                    <select className="w-full h-12 pl-3 pr-10 bg-white border rounded-md appearance-none">
                      <option value="">State</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      {/* Add more states */}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                  <Button className="w-full bg-[#8B45F7] hover:bg-[#7B3BE3]">
                    Get started
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-4">
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

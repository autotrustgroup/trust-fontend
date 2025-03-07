import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function PriceRangeSearch() {
  return (
    <div className="bg-[#002B5C] py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-white text-lg">Used Cars by Price</h2>
            <div className="flex items-center gap-2">
              <span className="text-white">$</span>
              <Input
                type="number"
                placeholder="per month"
                className="w-32 h-10 bg-white"
              />
              <Button className="bg-[#FF4D00] hover:bg-[#E64500] text-white">
                Continue
              </Button>
            </div>
          </div>

          <div className="relative w-[300px] h-[100px]">
            <Image
              src="/illustrations/cars-people.svg"
              alt="Cars and people illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function FinanceHero() {
  return (
    <div className="grid lg:grid-cols-[45%,55%] gap-8 items-start py-12">
      <div>
        <h1 className="text-[32px] font-bold mb-12">Financing</h1>
        <div className="space-y-8">
          <h2 className="text-[22px] font-bold">Prequalify now</h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#8B45F7] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">
                  Real rates, real monthly payment
                </p>
                <p className="text-[15px] text-gray-600">
                  See your personalized rate from our network of lenders.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#8B45F7] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">No impact to your credit</p>
                <p className="text-[15px] text-gray-600">
                  Prequalification with our lenders will not affect your credit
                  score.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#8B45F7] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">It only takes a few minutes</p>
                <p className="text-[15px] text-gray-600">
                  Answer a few basic questions and instantly see your
                  personalized results.
                </p>
              </div>
            </li>
          </ul>
          <div className="space-y-4">
            <Button className="h-12 px-8 bg-[#8B45F7] hover:bg-[#7B3BE3] text-white text-[15px]">
              Get prequalified
            </Button>
            <div className="text-[15px]">
              Already prequalified?{" "}
              <Link href="/sign-in" className="text-[#8B45F7] hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[16/10] relative rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2015.40.01-ermu1cycSSM7KJlEOVEn9JkyhhKHSM.png"
            alt="White Toyota truck at sunset with person drinking coffee"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

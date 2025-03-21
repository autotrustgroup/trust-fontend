import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HowItWorks() {
  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-bold mb-2">How it works</h2>
          <p className="text-[15px] text-gray-600 mb-12">
            We make it easy — find the right car with the right features for the
            right budget.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="text-[56px] font-bold text-[#141817] opacity-20">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-[18px] font-bold">
                  Start with getting prequalified
                </h3>
                <p className="text-[15px] text-gray-600">
                  Fill out a simple form in a few minutes, with no impact on
                  your credit.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-[56px] font-bold text-[#141817] opacity-20">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-[18px] font-bold">
                  Search by your monthly budget
                </h3>
                <p className="text-[15px] text-gray-600">
                  Once you're prequalified, enter your preferred down payment,
                  loan length, and monthly budget to see all the possibilities
                  in your budget.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-[56px] font-bold text-[#141817] opacity-20">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-[18px] font-bold">
                  Select an offer on the car you love
                </h3>
                <p className="text-[15px] text-gray-600">
                  Each prequalified offer is unique to the car. Select a car,
                  view your vehicle specific prequalified offers, and take it to
                  your local dealership.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="h-12 px-6 border-black rounded-full hover:bg-grey-900 hover:text-white transition-colors group"
            >
              Get prequalified
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="text-[15px]">
              Not ready to prequalify?{" "}
              <Link
                href="/calculator"
                className="text-black underline underline-offset-4 hover:text-[#8B45F7]"
              >
                Estimate your monthly car loan payment.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

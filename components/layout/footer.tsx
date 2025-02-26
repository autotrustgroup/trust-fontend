import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Buying & Selling */}
          <div>
            <h3 className="text-[15px] font-bold mb-4">Buying & Selling</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/financing" className="text-[15px] hover:underline">
                  Financing
                </Link>
              </li>
              <li>
                <Link
                  href="/find-a-car"
                  className="text-[15px] hover:underline"
                >
                  Find a Car
                </Link>
              </li>
              <li>
                <Link
                  href="/find-a-dealer"
                  className="text-[15px] hover:underline"
                >
                  Find a Dealer
                </Link>
              </li>
              <li>
                <Link
                  href="/listings-by-city"
                  className="text-[15px] hover:underline"
                >
                  Listings by City
                </Link>
              </li>
              <li>
                <Link
                  href="/certified-pre-owned"
                  className="text-[15px] hover:underline"
                >
                  Certified Pre-Owned
                </Link>
              </li>
              <li>
                <Link
                  href="/car-payment-calculators"
                  className="text-[15px] hover:underline"
                >
                  Car Payment Calculators
                </Link>
              </li>
              <li>
                <Link
                  href="/car-reviews-and-ratings"
                  className="text-[15px] hover:underline"
                >
                  Car Reviews & Ratings
                </Link>
              </li>
              <li>
                <Link
                  href="/compare-side-by-side"
                  className="text-[15px] hover:underline"
                >
                  Compare Side by Side
                </Link>
              </li>
              <li>
                <Link
                  href="/fraud-awareness"
                  className="text-[15px] hover:underline"
                >
                  Fraud Awareness
                </Link>
              </li>
              <li>
                <Link
                  href="/sell-your-car"
                  className="text-[15px] hover:underline"
                >
                  Sell Your Car
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Our Brand */}
          <div>
            <h3 className="text-[15px] font-bold mb-4">Explore Our Brand</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.newcars.com"
                  className="text-[15px] hover:underline inline-flex items-center"
                >
                  NewCars.com
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.dealerrater.com"
                  className="text-[15px] hover:underline inline-flex items-center"
                >
                  DealerRater
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </li>
            </ul>

            <h3 className="text-[15px] font-bold mt-8 mb-4">
              For Dealer Partners
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/platform-login"
                  className="text-[15px] hover:underline inline-flex items-center"
                >
                  Platform Log-In
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/cars-commerce-overview"
                  className="text-[15px] hover:underline inline-flex items-center"
                >
                  Cars Commerce Overview
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.cars.com"
                  className="text-[15px] hover:underline inline-flex items-center"
                >
                  Cars.com
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/dealer-inspire"
                  className="text-[15px] hover:underline inline-flex items-center"
                >
                  Dealer Inspire
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/accutrade"
                  className="text-[15px] hover:underline inline-flex items-center"
                >
                  AccuTrade
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/cars-commerce-media-network"
                  className="text-[15px] hover:underline inline-flex items-center"
                >
                  Cars Commerce Media Network
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-[15px] font-bold mb-4">Our Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-cars-com"
                  className="text-[15px] hover:underline"
                >
                  About Cars.com
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-cars-com"
                  className="text-[15px] hover:underline"
                >
                  Contact Cars.com
                </Link>
              </li>
              <li>
                <Link
                  href="/investor-relations"
                  className="text-[15px] hover:underline inline-flex items-center"
                >
                  Investor Relations
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[15px] hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/licensing-and-reprints"
                  className="text-[15px] hover:underline inline-flex items-center"
                >
                  Licensing & Reprints
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </li>
              <li>
                <Link href="/site-map" className="text-[15px] hover:underline">
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-[15px] hover:underline">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Mobile App */}
          <div>
            <h3 className="text-[15px] font-bold mb-4">Our Mobile App</h3>
            <div className="flex flex-col gap-3 mb-8">
              <Link href="https://apps.apple.com/app/cars-com/id353263726">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.55.32-vJtUcZ3wXRMruVqdMqFDTOV5O4ikRv.png#x=830,y=76,w=234,h=69"
                  alt="Download on the App Store"
                  width={117}
                  height={35}
                  className="h-[35px] w-auto"
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.cars.android">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.55.32-vJtUcZ3wXRMruVqdMqFDTOV5O4ikRv.png#x=942,y=76,w=234,h=69"
                  alt="Get it on Google Play"
                  width={117}
                  height={35}
                  className="h-[35px] w-auto"
                />
              </Link>
            </div>

            <h3 className="text-[15px] font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.tiktok.com/@carsdotcom"
                className="hover:opacity-80"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.55.32-vJtUcZ3wXRMruVqdMqFDTOV5O4ikRv.png#x=847,y=169,w=32,h=32"
                  alt="TikTok"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://www.facebook.com/CarsDotCom"
                className="hover:opacity-80"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.55.32-vJtUcZ3wXRMruVqdMqFDTOV5O4ikRv.png#x=891,y=169,w=32,h=32"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://www.youtube.com/user/CarsDotCom"
                className="hover:opacity-80"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.55.32-vJtUcZ3wXRMruVqdMqFDTOV5O4ikRv.png#x=935,y=169,w=32,h=32"
                  alt="YouTube"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://www.instagram.com/carsdotcom"
                className="hover:opacity-80"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.55.32-vJtUcZ3wXRMruVqdMqFDTOV5O4ikRv.png#x=979,y=169,w=32,h=32"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://www.pinterest.com/carsdotcom"
                className="hover:opacity-80"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.55.32-vJtUcZ3wXRMruVqdMqFDTOV5O4ikRv.png#x=1023,y=169,w=32,h=32"
                  alt="Pinterest"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-gray-600 mb-4">
            <Link href="/terms" className="hover:underline">
              Terms & Conditions of Use
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:underline">
              Privacy Notice
            </Link>
            <span>•</span>
            <Link href="/california-privacy" className="hover:underline">
              California Privacy Notice
            </Link>
            <span>•</span>
            <button className="hover:underline">My Privacy Choices</button>
            <span>•</span>
            <button className="hover:underline">Cookie Preferences</button>
            <span>•</span>
            <Link href="/accessibility" className="hover:underline">
              Accessibility Statement
            </Link>
            <span>•</span>
            <Link href="/ad-choices" className="hover:underline">
              Ad Choices
            </Link>
          </div>
          <p className="text-[13px] text-gray-600">
            © 2025 Cars.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

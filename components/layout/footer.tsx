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
            <div className="flex flex-row gap-4 mb-8">
              <Link
                href="https://apps.apple.com/app/cars-com/id353263726"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.cars.android"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </Link>
            </div>

            <h3 className="text-[15px] font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.tiktok.com/@carsdotcom"
                className="hover:opacity-80 transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M19.321 5.562a5.122 5.122 0 01-3.585-1.475A5.123 5.123 0 0114.26.502h-4.163v16.594c0 1.151-.498 2.11-1.491 2.873a4.441 4.441 0 01-2.738.922 4.476 4.476 0 01-3.154-1.305A4.478 4.478 0 011.41 16.432a4.478 4.478 0 011.305-3.154 4.476 4.476 0 013.154-1.305c.46-.001.918.07 1.356.211v-4.27a8.877 8.877 0 00-1.356-.105c-2.351 0-4.47.953-6.012 2.495S-2.639 9.926-2.639 12.277c0 2.351.953 4.47 2.495 6.012s3.661 2.495 6.012 2.495c2.351 0 4.47-.953 6.012-2.495s2.495-3.661 2.495-6.012V6.955a9.308 9.308 0 005.688 1.936v-4.235c-.249.001-.498-.03-.742-.094z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://www.facebook.com/CarsDotCom"
                className="hover:opacity-80 transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/user/CarsDotCom"
                className="hover:opacity-80 transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/carsdotcom"
                className="hover:opacity-80 transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#515BD4] via-[#DD2A7B] to-[#FEDA77] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://zaolo.com/carsdotcom"
                className="hover:opacity-80 transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 rounded-full bg-[#34A853] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5.339 13.375c-.452.452-1.174.452-1.626 0l-1.148-1.148a.603.603 0 0 1-.178-.429v-4.466a.605.605 0 0 1 1.21 0v4.194l1.004 1.004a.452.452 0 0 0 .64 0 .452.452 0 0 0 0-.64l-1.644-1.644v-2.914a.605.605 0 0 1 1.21 0v2.642l1.532 1.532c.452.452.452 1.174 0 1.626zm-8.184-3.167a.605.605 0 0 1-.605-.605v-2.57a.905.905 0 0 1 .905-.905h1.667a.605.605 0 0 1 0 1.21h-1.667v2.265a.605.605 0 0 1-.605.605h.305zm-.91 2.272a.605.605 0 0 1-.605-.605v-1.667a.605.605 0 0 1 1.21 0v1.667a.605.605 0 0 1-.605.605zm5.335-5.167a.83.83 0 1 1 0-1.66.83.83 0 0 1 0 1.66z" />
                  </svg>
                </div>
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

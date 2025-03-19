import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../common-components/container";
export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-8">
      <div className="">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Buying & Selling */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Buying & Selling</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/financing"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Financing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/find-a-car"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Find a Car
                  </Link>
                </li>
                <li>
                  <Link
                    href="/find-a-dealer"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Find a Dealer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/listings-by-city"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Listings by City
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certified-pre-owned"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Certified Pre-Owned
                  </Link>
                </li>
                <li>
                  <Link
                    href="/car-payment-calculators"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Car Payment Calculators
                  </Link>
                </li>
                <li>
                  <Link
                    href="/car-reviews-and-ratings"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Car Reviews & Ratings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/compare-side-by-side"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Compare Side by Side
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fraud-awareness"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Fraud Awareness
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sell-your-car"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Sell Your Car
                  </Link>
                </li>
              </ul>
            </div>
            {/* Explore Our Brand */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Explore Our Brand</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.newcars.com"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 inline-flex items-center font-semibold"
                  >
                    NewCars.com
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.dealerrater.com"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 inline-flex items-center font-semibold"
                  >
                    DealerRater
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </li>
              </ul>
              <h3 className="text-sm font-semibold mt-8 mb-4">
                For Dealer Partners
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/platform-login"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 inline-flex items-center font-semibold"
                  >
                    Platform Log-In
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cars-commerce-overview"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 inline-flex items-center font-semibold"
                  >
                    Cars Commerce Overview
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.cars.com"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 inline-flex items-center font-semibold"
                  >
                    Cars.com
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dealer-inspire"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 inline-flex items-center font-semibold"
                  >
                    Dealer Inspire
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accutrade"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 inline-flex items-center font-semibold"
                  >
                    AccuTrade
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cars-commerce-media-network"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 inline-flex items-center font-semibold"
                  >
                    Cars Commerce Media Network
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </li>
              </ul>
            </div>
            {/* Our Company */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Our Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about-cars-com"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    About Cars.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-cars-com"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Contact Cars.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investor-relations"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 inline-flex items-center font-semibold"
                  >
                    Investor Relations
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/licensing-and-reprints"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 inline-flex items-center font-semibold"
                  >
                    Licensing & Reprints
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-map"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Site Map
                  </Link>
                </li>
                <li>
                  <Link
                    href="/feedback"
                    className="text-sm underline hover:decoration-purple-600 hover:decoration-2 font-semibold"
                  >
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            {/* Our Mobile App */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Our Mobile App</h3>
              <div className="flex flex-row gap-4 mb-8">
                <Link
                  href="https://apps.apple.com/app/cars-com/id353263726"
                  className="transition-transform mt-2"
                >
                  <Image
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="w-auto"
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.cars.android"
                  className="transition-transform "
                >
                  <Image
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    width={145}
                    height={60}
                  />
                </Link>
              </div>
              <h3 className="text-sm font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <Link
                  href="https://www.tiktok.com/@carsdotcom"
                  className=" transition-transform "
                >
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <svg
                      fill="white"
                      width="20px"
                      height="20px"
                      viewBox="0 0 512 512"
                      id="icons"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.facebook.com/CarsDotCom"
                  className=" transition-transform "
                >
                  <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="white"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.youtube.com/user/CarsDotCom"
                  className=" transition-transform "
                >
                  <div className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="white"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/carsdotcom"
                  className=" transition-transform "
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#515BD4] via-[#DD2A7B] to-[#FEDA77] flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="white"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://zaolo.com/carsdotcom"
                  className=" transition-transform "
                >
                  <div className="w-10 h-10 rounded-full bg-[#e60023] flex items-center justify-center">
                    <svg
                      width="33"
                      height="33"
                      fill="white"
                      viewBox="0 0 33 33"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.3395 21.7893C13.5522 25.9318 12.6712 29.8868 9.74708 31.9487C8.8661 25.7069 11.0404 21.0208 12.0526 16.0535C10.3282 13.1669 12.2588 7.33737 15.8015 8.78068C20.2627 10.5427 11.9402 19.54 17.526 20.6646C23.1118 21.7893 25.7923 10.5239 22.1933 6.85001C16.9824 1.54536 7.04789 6.7188 8.21004 14.329C8.50995 16.2035 10.4219 16.747 8.97856 19.315C5.64206 18.5652 4.62987 15.941 4.76108 12.4171C5.16652 6.94664 9.45933 2.56671 14.9205 2.05145C21.2186 1.33917 27.1419 4.35701 28.0416 10.299C28.8663 16.9532 25.0987 24.226 18.2945 23.7012C16.8261 23.4377 15.4581 22.7764 14.3395 21.7893Z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
        {/* Legal Footer */}
        <div className="h-[1px] w-full bg-gray-200"></div>
        <Container>
          <div className="pt-8">
            <div className="flex flex-col md:flex-row  gap-x-4 gap-y-2 text-[13px] text-gray-600 mb-4">
              <Link
                href="/terms"
                className="underline text-sm hover:decoration-purple-600 hover:decoration-2 font-semibold"
              >
                Terms & Conditions of Use
              </Link>
              <Link
                href="/privacy"
                className="underline text-sm hover:decoration-purple-600 hover:decoration-2 font-semibold"
              >
                Privacy Notice
              </Link>
              <Link
                href="/california-privacy"
                className="underline text-sm hover:decoration-purple-600 hover:decoration-2 font-semibold"
              >
                California Privacy Notice
              </Link>
              <Link
                href="about/ccpa-privacy-notice"
                className="flex gap-2 underline text-sm hover:decoration-purple-600 hover:decoration-2 font-semibold"
              >
                My Privacy Choices
                <Image
                  src="https://www.cars.com/svg/generic/privacyoptions.svg"
                  alt="My Privacy Choices"
                  width={0}
                  height={14}
                  className="h-[14px] w-auto"
                />
              </Link>
              <Link
                href=""
                className="underline text-sm hover:decoration-purple-600 hover:decoration-2 font-semibold"
              >
                Cookie Preferences
              </Link>
              <Link
                href="/accessibility"
                className="underline text-sm hover:decoration-purple-600 hover:decoration-2 font-semibold"
              >
                Accessibility Statement
              </Link>
              <Link
                href="/ad-choices"
                className="underline text-sm hover:decoration-purple-600 hover:decoration-2 font-semibold"
              >
                Ad Choices
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              © 2025 Cars.com. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

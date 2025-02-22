import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Popular Searches */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Popular searches</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between py-2 text-sm text-gray-600 hover:text-gray-900">
              Popular used cars for sale
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="w-full flex items-center justify-between py-2 text-sm text-gray-600 hover:text-gray-900">
              Popular new cars for sale
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="w-full flex items-center justify-between py-2 text-sm text-gray-600 hover:text-gray-900">
              Research popular new cars
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="w-full flex items-center justify-between py-2 text-sm text-gray-600 hover:text-gray-900">
              Research popular used cars
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Buying & Selling</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Find a Car
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Car Values
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Car Dealers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Car Research
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Car Dealers</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Dealer Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Dealer Admin
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Dealer Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Dealer Advertising
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Corporate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Site Map
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Do Not Sell
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* App Store Badges and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-300">
          <div className="flex gap-4 mb-6 md:mb-0">
            <Link href="#" className="hover:opacity-80">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-10"
              />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Get it on Google Play"
                width={120}
                height={40}
                className="h-10"
              />
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Pinterest"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-600 mt-8">
          <Link href="#" className="hover:text-gray-900">
            Terms & Conditions
          </Link>
          <span>•</span>
          <Link href="#" className="hover:text-gray-900">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="#" className="hover:text-gray-900">
            California Privacy Notice
          </Link>
          <span>•</span>
          <Link href="#" className="hover:text-gray-900">
            Accessibility Statement
          </Link>
          <span>•</span>
          <Link href="#" className="hover:text-gray-900">
            Ad Choices
          </Link>
        </div>
      </div>
    </footer>
  );
}

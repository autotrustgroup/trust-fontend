import React from "react";
import Image from "next/image";
import Link from "next/link";

const SellYourCar: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Option 1: Sell it yourself */}
      <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6">
          <h3 className="text-xl font-bold mb-3">Sell it yourself</h3>
          <p className="text-gray-600 mb-4">
            List your car for free and connect with real buyers in your area.
          </p>
          <ul className="text-gray-700 mb-4 space-y-2">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Create a listing in minutes</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Reach thousands of local buyers</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Manage offers and negotiate your best price</span>
            </li>
          </ul>
          <Link
            href="/sell/by-owner"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
          >
            Get started
          </Link>
        </div>
        <div className="w-full md:w-40">
          <Image
            src="/placeholder.svg"
            alt="Sell it yourself"
            width={160}
            height={160}
            className="w-full"
          />
        </div>
      </div>

      {/* Option 2: Instant offer */}
      <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6">
          <h3 className="text-xl font-bold mb-3">Get an instant offer</h3>
          <p className="text-gray-600 mb-4">
            Sell your car quickly with a cash offer from trusted dealers.
          </p>
          <ul className="text-gray-700 mb-4 space-y-2">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Get a real offer in minutes</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No need to meet with strangers</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Schedule pickup or drop-off at your convenience</span>
            </li>
          </ul>
          <Link
            href="/sell/instant-offer"
            className="inline-block px-6 py-3 bg-[#7963F7] text-white rounded-md font-medium hover:bg-[#6952E9] transition"
          >
            Get an offer
          </Link>
        </div>
        <div className="w-full md:w-40">
          <Image
            src="/placeholder.svg"
            alt="Get an instant offer"
            width={160}
            height={160}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SellYourCar;

import Link from "next/link";
import React from "react";
import Image from "next/image";

const YourGarage = () => {
    return (
        <div className="md:flex-row flex flex-col-reverse justify-center py-10 border-b">
            <div className="flex flex-col gap-4 items-start md:w-1/2">
                <h1 className="text-2xl font-bold">Your Garage</h1>
                <p className="text-lg font-semibold">Add your car. Track its value.</p>
                <p className="pr-10">
                    Add your car to Your Garage to track its market value and cash in when
                    the time is right to sell.{" "}
                    <Link className="font-bold underline" href="/">
                        Learn more
                    </Link>
                </p>
                <button className="p-3 mt-4 border border-grey-800 text-gray-800 rounded-full px-5 font-semibold font-base w-full md:w-fit hover:bg-gray-200">
                    Get started
                </button>
                <p>
                    Already have an account? {" "}
                    <Link className="font-bold underline" href="/">
                        Sign in.
                    </Link>
                </p>
            </div>

            <div className="flex justify-center lg:justify-end items-center md:mr-16 lg:w-1/2">
                <Image
                    src="https://www.cars.com/images/garage-landing/garage-hero.webp"
                    alt="Garage Image"
                    width={343}
                    height={264}
                    style={{filter: "hue-rotate(310deg)"}}
                />
            </div>
        </div>
    )
}

export default YourGarage
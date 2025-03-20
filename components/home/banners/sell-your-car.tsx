import React from "react";
import Image from "next/image";

const SellYourCar = () => {
    return (
        <div className="md:flex md:flex-row flex flex-col-reverse justify-between py-10">
            <div className="md:w-2/3">
                <h1 className="text-2xl font-bold">Sell your car your way</h1>
                <div className="md:flex md:flex-row flex flex-col  justify-between gap-5 items-center py-6">
                    <div className="flex gap-2 items-center ">
                        <Image
                            src="https://www.cars.com/images/sell/explore-ready-go.png"
                            alt="Get an offer online"
                            width={72}
                            height={72}
                        />
                        <p>
                            <strong>Get an offer online</strong> and quickly complete the transaction with a
                            local dealer.
                        </p>
                    </div>

                    <div className="text-gray-400 flex flex-col items-center gap-1">
                        <div className="w-px h-4 bg-gray-400"></div>
                        <span className="font-semibold text-grey-600">OR</span>
                        <div className="w-px h-4 bg-gray-400"></div>
                    </div>


                    <div className="flex gap-2 items-center pr-3">
                        <Image
                            src="https://www.cars.com/images/sell/explore-enter-details.png"
                            alt="Get an offer online"
                            width={72}
                            height={72}
                        />
                        <p className="text-base">
                            <strong>List your car for free.</strong> Set your own price and
                            easily showcase your car on Cars.com.
                        </p>
                    </div>
                </div>

                <button className="p-3 mt-4 border border-grey-800 text-gray-800 rounded-full px-5 font-semibold font-base w-full md:w-fit hover:bg-gray-200">
                    Get started
                </button>

            </div>

            <div className="md:w-1/3 flex justify-center md:justify-end">
                <Image
                    src="https://www.cars.com/images/sell/sale-dealer-woman-brand-colors.png"
                    alt="Garage Image"
                    width={330}
                    height={178}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default SellYourCar
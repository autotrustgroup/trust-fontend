// import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const ResearchNewVehicles = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-4 justify-between">
      <div className="flex-2 bg-primary-50 rounded-xl flex flex-col-reverse md:flex-row justify-between items-center px-4 md:pl-10 lg:pl-16 md:px-10 p-5 lg:w-3/5 relative overflow-hidden">
        <div className="z-10" >
          <h2 className="text-lg md:text-2xl font-bold">
            Ready for a new ride?
            <br />
            Explore the latest vehicles
          </h2>
          <ul className="mt-4 text-sm">
            <li className="flex items-center gap-2">
              {/* <FaCheck className="text-black" />  */}
              View latest models
            </li>
            <li className="flex items-center gap-2">
              {/* <FaCheck className="text-black" /> */}
               Compare vehicles side-by-side
            </li>
            <li className="flex items-center gap-2">
              {/* <FaCheck className="text-black" />  */}
              Discover award-winning cars
            </li>
          </ul>

          <div className="mt-6 flex flex-col md:flex-row gap-3 text-sm">
            <button className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:opacity-70">
              Research new cars ✦
            </button>
            <button className="border border-black px-5 py-2 rounded-full font-semibold  hover:bg-gray-200">
              Compare cars →
            </button>
          </div>
        </div>

          <Image
            width={242}
            height={190}
            src="https://www.cars.com/images/binoculars.png"
            alt="Illustration"
            className="md:absolute -right-14 overflow-hidden -z-0"
            style={{filter: "hue-rotate(60deg)"}}
          />
      </div>

      <div className="flex-1 bg-grey-50 text-xs relative rounded-xl p-6 pl-8 lg:w-2/5">
      <div className="flex flex-col justify-between w-3/5">
        <p className="font-semibold text-gray-600 mb-1">Featured storefront</p>
        <h2 className="text-xl md:text-2xl font-bold leading-8">Alfa Romeo</h2>
        <p className="text-gray-700 mb-5 leading-5">
        Alfa Romeo combines Italian elegance with cutting-edge performance, delivering a driving experience that is both thrilling and refined.
        </p>
        <button className="border border-black px-5 py-2 rounded-full font-bold mt-2 w-fit hover:bg-gray-200">
          About this brand
        </button>
        </div>
        <Image width={160} height={155} className="absolute right-4 top-1/4 opacity-10" src="/alpha-romeo.svg" alt="alpha-romeo" />
      </div>
    </div>
  );
};

export default ResearchNewVehicles;
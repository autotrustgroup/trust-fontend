import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  backgroundImage: string;
  heading: string;
  sponsorLogo: string;
  sponsorTextPrimary: string;
  sponsorTextSecondary: string;
  sponsorTextTertiary: string;
}

const HeroSection = ({
  backgroundImage,
  heading,
  sponsorLogo,
  sponsorTextPrimary,
  sponsorTextSecondary,
  sponsorTextTertiary,
}: HeroSectionProps) => {
  return (
    <div
      className="flex flex-col justify-between min-h-[330px] bg-grey-900"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1
        className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white max-w-lg p-5"
        style={{ lineHeight: "80px" }}
      >
        <span className="bg-[rgba(33,33,33,.75)] px-2">{heading}</span>
      </h1>

      <div className="flex align-middle items-center text-lg md:text-xl text-white/90 bg-grey-900 max-w-[370px] px-3 py-2">
        <Link href="/" className="flex-shrink-0">
          <Image
            src={`${sponsorLogo}`}
            alt="Cars.com"
            width={115}
            height={45}
            className="h-[45px] w-[115px] object-contain"
          />
        </Link>
        <div className="ml-4 text-xs">
          <div className="inline">
            <span className="uppercase font-bold">Sponsored:</span>{" "}
            {sponsorTextPrimary ?? ""}{" "}
            <span className="flex items-center align-middle gap-1">
              {sponsorTextSecondary ?? ""}{" "}
              <svg
                width="10px"
                height="10px"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Interface / External_Link">
                  <path
                    id="Vector"
                    d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
                    stroke="white"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div className="">{sponsorTextTertiary}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

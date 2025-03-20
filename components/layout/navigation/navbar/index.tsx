"use client";

import { SignInModal } from "@/components/auth/sign-in-modal";
import Container from "@/components/common-components/container";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };
  const navigation = [
    { name: "Cars for Sale", link: "/used-cars" },
    { name: "New Cars", link: "/new-cars" },
    { name: "Research & Reviews", link: "/research" },
    { name: "News & Videos", link: "/news" },
    { name: "Sell Your Car", link: "/sell" },
    { name: "Financing", link: "/finance" },
  ];
  return (
    <header className="shadow-[0_.1px_11px_2px_rgba(68,89,88,0.11)]">
      <Container>
        <nav className="h-14 flex items-center justify-between">
          <div className="flex gap-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Cars.com"
                width={85}
                height={35}
                className="h-[35px] w-[85px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((items, index) => (
                <Link
                  key={index}
                  href={items.link}
                  className={`text-sm hover:underline text-nowrap ${
                    pathname === items.link && "underline"
                  }`}
                >
                  {items.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <Button variant="ghost" className="p-0" onClick={openSignInModal}>
                <span className="font-normal hover:underline ">Sign In</span>
                {/* <User className="h-4 w-4" /> */}
              </Button>
              <div className="h-5 w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
                    fill="#1C274C"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
                    fill="#1C274C"
                  />
                </svg>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="flex justify-end text-primary hover:text-primary/90"
            >
              <Menu className="h-10 w-10" />
            </Button>
          </div>
        </nav>
      </Container>

      {/* Sign In Modal */}
      <SignInModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
    </header>
  );
}

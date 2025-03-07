"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import { useState } from "react";
import { SignInModal } from "@/components/auth/sign-in-modal";

export default function Navbar() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-23%20at%2014.11.32-zT42QzyDt4okQlfufPnqJwm51FTJuQ.png"
            alt="Cars.com"
            width={120}
            height={40}
            className="h-10 w-auto"
          /> */}
          LOGO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/used-cars"
            className="text-sm font-semibold text-foreground hover:text-primary"
          >
            Used Cars
          </Link>
          <Link
            href="/new-cars"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            New Cars
          </Link>
          <Link
            href="/research"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Research & Reviews
          </Link>
          <Link
            href="/news"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            News & Videos
          </Link>
          <Link
            href="/sell"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Sell Your Car
          </Link>
          <Link
            href="/finance"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Financing
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="hidden md:flex items-center gap-2"
            onClick={openSignInModal}
          >
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary hover:text-primary/90"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Sign In Modal */}
      <SignInModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
    </header>
  );
}

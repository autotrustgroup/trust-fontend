"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would validate the email and proceed to next step
      console.log("Continuing with email:", email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real implementation, you would show password step or redirect to provider
    } catch (error) {
      console.error("Error during login flow:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Signing in with ${provider}`);
    // Here you would implement the social login logic
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden bg-white rounded-2xl shadow-xl transition-all duration-300 ease-in-out animate-in fade-in-50 zoom-in-95">
        <div className="relative">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-xl font-bold text-center">
              Sign in or create an account
            </DialogTitle>
          </DialogHeader>

          <div className="px-6 pt-4 pb-8 space-y-6">
            {/* Social Login Buttons */}
            <button
              className="w-full border border-gray-300 rounded-full py-3 px-4 flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors duration-200 bg-white shadow-sm hover:shadow-md"
              onClick={() => handleSocialLogin("Google")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Sign in with Google
              </span>
            </button>

            <button
              className="w-full border border-gray-300 rounded-full py-3 px-4 flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors duration-200 bg-white shadow-sm hover:shadow-md"
              onClick={() => handleSocialLogin("Facebook")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="11" fill="#1877F2" />
                <path
                  d="M15.5 12H13V10C13 9.297 13.297 9 14 9H15.5V6.5H13.25C11.347 6.5 10 7.703 10 9.75V12H8V14.5H10V21.5H13V14.5H15.5V12Z"
                  fill="white"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Sign in with Facebook
              </span>
            </button>

            <button
              className="w-full border border-gray-300 rounded-full py-3 px-4 flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors duration-200 bg-white shadow-sm hover:shadow-md"
              onClick={() => handleSocialLogin("Apple")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  d="M17.05 20.28c-.98.95-2.05.88-3.09.44-1.09-.46-2.09-.48-3.2 0-1.44.62-2.2.44-3.06-.46C2.72 15.25 3.63 7.1 8.9 6.84c1.19.04 2.02.41 2.75.47.45-.17 1.7-.65 3.13-.54 2.25.2 3.24 1.05 3.97 1.86-4.42 2.42-3.5 7.15.3 8.36-.56 1.22-1.14 2.38-2 3.3zM12.03 6.3c-.26-2.2 1.68-4.02 3.65-4.3.31 2.21-1.56 4.04-3.65 4.3z"
                  fill="#000"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Sign in with Apple
              </span>
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleContinue} className="space-y-5">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 rounded-full border-gray-300 bg-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200"
                  required
                  aria-label="Email"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-grey-900 text-white h-12 hover:bg-gray-800 transition-colors duration-200 shadow-sm hover:shadow-md font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Continue"
                )}
              </Button>
            </form>

            {/* Privacy Notice */}
            <div className="text-xs text-gray-500 mt-6">
              By signing in or creating an account, you agree to our{" "}
              <a
                href="#"
                className="underline font-medium text-gray-700 hover:text-black transition-colors"
              >
                Privacy Notice
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline font-medium text-gray-700 hover:text-black transition-colors"
              >
                Terms of Service
              </a>
            </div>

            {/* Dealer Link */}
            <div className="text-sm text-gray-700 mt-2 text-center">
              Are you a{" "}
              <a
                href="#"
                className="underline font-medium text-black hover:text-blue-600 transition-colors"
              >
                dealer
              </a>
              ?
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

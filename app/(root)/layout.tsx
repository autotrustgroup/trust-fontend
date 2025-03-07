import Navbar from "@/components/layout/navigation/navbar";
import React from "react";
import { ReactNode } from "react";
import Footer from "@/components/layout/footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;

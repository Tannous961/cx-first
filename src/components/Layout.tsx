import React from "react";
import { HeaderSection } from "../screens/HomePage/sections/HeaderSection/HeaderSection";
import { FooterSection } from "../screens/HomePage/sections/FooterSection";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col w-full min-h-screen bg-white overflow-hidden">
    <HeaderSection />
    {children}
    <FooterSection />
  </div>
); 
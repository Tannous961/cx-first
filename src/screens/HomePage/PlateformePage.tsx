import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { FooterSection } from "./sections/FooterSection";
import ClientLogosSection from "./sections/ClientLogosSection";
import { ContactUsSection } from "./sections/ContactUsSection/ContactUsSection";

export default function PlateformePage() {
  return (
    <main className="flex flex-col w-full items-start relative bg-white overflow-hidden min-h-screen">
      <HeaderSection />
      <ClientLogosSection />
      <ContactUsSection />
      <FooterSection />
    </main>
  );
} 
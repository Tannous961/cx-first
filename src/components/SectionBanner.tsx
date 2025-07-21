import React from "react";

interface SectionBannerProps {
  title: string;
  subtitle: string;
  image: string;
  breadcrumb?: React.ReactNode;
}

export const SectionBanner: React.FC<SectionBannerProps> = ({ title, subtitle, image, breadcrumb }) => {
  return (
    <section className="flex w-full h-[360px]">
      {/* Colonne gauche : dégradé + texte */}
      <div className="flex flex-col justify-center px-16 py-12 w-1/2 bg-custom-hero-gradient text-white relative z-1">
        {breadcrumb && (
          <nav className="mb-4 text-sm opacity-80">{breadcrumb}</nav>
        )}
        <h1 className="text-5xl font-bold mb-8">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>
      {/* Colonne droite : image */}
      <div className="w-1/2 h-full relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          style={{ filter: "brightness(0.7)" }}
        />
        {/* Overlay dégradé pour fondu */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#000d1b]" />
      </div>
    </section>
  );
}; 
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { FooterSection } from "./sections/FooterSection";
import ClientLogosSection from "./sections/ClientLogosSection";
import { API_URL } from "../../lib/config";
import { ContactUsSection } from "./sections/ContactUsSection/ContactUsSection";

interface AboutZone {
  title?: string;
  description?: string;
  image?: { url: string }[];
}

interface AboutData {
  bannerImage?: { url: string };
  leftzone1?: AboutZone[];
  leftzone2?: AboutZone[];
  rightzone?: AboutZone[];
  bannerTitle?: string;
  bannerDescription?: string;
  leftzonetop?: AboutZone[];
  rightzonecenter?: AboutZone[];
  leftzonebottom?: AboutZone[];
}

export default function AboutPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lang = params.get("lang") || "fr";
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/abouts?locale=${lang}&populate=bannerImage&populate[leftzonetop][populate][0]=image&populate[rightzonecenter][populate][0]=image&populate[leftzonebottom][populate][0]=image`)
      .then(res => res.json())
      .then(json => {
        const about = json.data && json.data[0]
          ? json.data[0].attributes || json.data[0]
          : null;
        setData(about);
      });
  }, [lang]);

  if (!data) return <div style={{ minHeight: 300, textAlign: "center", padding: 40 }}>Aucune donnée à afficher.</div>;

  // Helper pour fallback image
  const getImage = (fallback: string, img?: { url: string }) => (img && img.url) ? img.url : fallback;

  return (
    <main className="flex flex-col w-full min-h-screen bg-white overflow-hidden">
      <HeaderSection />
      {/* Bannière */}
      <section className="flex w-full h-[360px]">
        <div className="flex flex-col justify-center px-16 py-12 w-1/2 bg-custom-hero-gradient text-white relative z-1">
          <nav className="mb-4 text-sm opacity-80">
            <span className="opacity-70">🏠 &gt; </span>
            <a href="/ressources" className="underline">Ressources</a>
            <span> &gt; À propos</span>
          </nav>
          <h1 className="text-5xl font-bold mb-8">{data.bannerTitle || "À propos"}</h1>
          <p className="text-xl">{data.bannerDescription || "Découvrez notre équipe et notre mission"}</p>
        </div>
        <div className="w-1/2 h-full relative">
          <img
            src={
              data.bannerImage && data.bannerImage.url
                ? data.bannerImage.url.startsWith('http')
                  ? data.bannerImage.url
                  : `${API_URL}${data.bannerImage.url}`
                : "/about-people.jpg"
            }
            alt="Bannière À propos"
            className="object-cover w-full h-full"
            style={{ filter: "brightness(0.7)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#000d1b]" />
        </div>
      </section>

      {/* Sections dynamiques */}
      <section
        className="w-full bg-white py-20 px-0 flex flex-col gap-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/lines left.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
          backgroundSize: "cover",
          opacity: 1,
        }}
      >
        {/* leftzonetop */}
        {data.leftzonetop && data.leftzonetop.map((zone, i) => (
          <div key={"leftzonetop-"+i} className="flex flex-row items-center justify-between max-w-6xl mx-auto gap-12 relative z-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{zone.title || "Titre"}</h2>
              <p className="text-grey-800 text-lg">{zone.description || "Description"}</p>
            </div>
            {zone.image && zone.image.length > 0 && zone.image[0].url && (
              <div className="flex-1 flex justify-end">
                <img
                  src={zone.image[0].url.startsWith('http') ? zone.image[0].url : `${API_URL}${zone.image[0].url}`}
                  alt={zone.title || "Image"}
                  className="rounded-2xl w-[350px] h-[220px] object-cover"
                />
              </div>
            )}
          </div>
        ))}
        {/* rightzonecenter */}
        {data.rightzonecenter && data.rightzonecenter.map((zone, i) => (
          <div key={"rightzonecenter-"+i} className="flex flex-row-reverse items-center justify-between max-w-6xl mx-auto gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{zone.title || "Titre"}</h2>
              <p className="text-grey-800 text-lg">{zone.description || "Description"}</p>
            </div>
            {zone.image && zone.image.length > 0 && zone.image[0].url && (
              <div className="flex-1 flex justify-end">
                <img
                  src={zone.image[0].url.startsWith('http') ? zone.image[0].url : `${API_URL}${zone.image[0].url}`}
                  alt={zone.title || "Image"}
                  className="rounded-2xl w-[350px] h-[220px] object-cover"
                />
              </div>
            )}
          </div>
        ))}
        {/* leftzonebottom */}
        {data.leftzonebottom && data.leftzonebottom.map((zone, i) => (
          <div key={"leftzonebottom-"+i} className="flex flex-row items-center justify-between max-w-6xl mx-auto gap-12 relative z-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{zone.title || "Titre"}</h2>
              <p className="text-grey-800 text-lg">{zone.description || "Description"}</p>
            </div>
            {zone.image && zone.image.length > 0 && zone.image[0].url && (
              <div className="flex-1 flex justify-end">
                <img
                  src={zone.image[0].url.startsWith('http') ? zone.image[0].url : `${API_URL}${zone.image[0].url}`}
                  alt={zone.title || "Image"}
                  className="rounded-2xl w-[350px] h-[220px] object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </section>

      <ClientLogosSection />
      <ContactUsSection />
      <FooterSection />
    </main>
  );
} 
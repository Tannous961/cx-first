import { ContactUsSection } from "./sections/ContactUsSection/ContactUsSection";
import { DashboardSection } from "./sections/DashboardSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { InformationSection } from "./sections/InformationSection";
import { MetricsOverviewSection } from "./sections/MetricsOverviewSection";
import { SolutionsSection } from "./sections/SolutionsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { VideoShowcaseSection } from "./sections/VideoShowcaseSection";
import ClientLogosSection from "./sections/ClientLogosSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Partner logos data
  const partnerLogos = [
    { 
      alt: "Renault GROUP blanc",
      src: "/RENAULT GROUP blanc.svg",
      type: "image",
    },
    {
      type: "group",
      backgroundImage: "/group.png",
    },
    {
      type: "complex",
      images: [
        {
          src: "/g2906.png",
          alt: "G",
          className: "absolute w-1.5 h-2 top-7 left-0",
        },
        {
          src: "/g2910.png",
          alt: "G",
          className: "absolute w-2 h-2 top-7 left-[7px]",
        },
        {
          src: "/g2914.png",
          alt: "G",
          className: "absolute w-px h-2 top-7 left-4",
        },
        {
          src: "/g2918.png",
          alt: "G",
          className: "absolute w-[7px] h-2 top-7 left-5",
        },
        {
          src: "/g2922.png",
          alt: "G",
          className: "absolute w-1.5 h-2 top-7 left-7",
        },
        {
          src: "/g2926.png",
          alt: "G",
          className: "absolute w-[3px] h-px top-8 left-[35px]",
        },
        {
          src: "/g2930.png",
          alt: "G",
          className: "absolute w-[7px] h-2 top-7 left-10",
        },
        {
          src: "/g2934.png",
          alt: "G",
          className: "absolute w-[9px] h-2 top-7 left-[49px]",
        },
        {
          src: "/g2938.png",
          alt: "G",
          className: "absolute w-[7px] h-2 top-7 left-[59px]",
        },
        {
          src: "/g2942.png",
          alt: "G",
          className: "absolute w-2 h-2 top-7 left-[66px]",
        },
        {
          src: "/g2946.png",
          alt: "G",
          className: "absolute w-px h-2 top-7 left-[76px]",
        },
        {
          src: "/g2950.png",
          alt: "G",
          className: "absolute w-[7px] h-2 top-7 left-20",
        },
      ],
      background: {
        src: "/g2964.png",
        className: "absolute w-[65px] h-[25px] top-0 left-[11px]",
      },
    },
    {
      type: "logo",
      content: [
        {
          className:
            "absolute w-[30px] h-[23px] top-0 left-0 bg-[url(/vector-107.svg)] bg-[100%_100%]",
          image: {
            src: "/clip-path-group-1.png",
            alt: "Clip path group",
            className: "absolute w-[30px] h-[23px] top-0 left-0",
          },
        },
        {
          src: "/group-1.png",
          alt: "Group",
          className: "absolute w-[53px] h-[11px] top-[7px] left-[34px]",
        },
      ],
    },
    {
      alt: "Douglas blanc",
      src: "/image copy copy.png",
      type: "image",
    },
    {
      type: "complex-logo",
      image: {
        src: "/group-2.png",
        alt: "Group",
        className: "absolute w-[87px] h-2.5 top-[59px] left-0",
      },
      
    },
    {
      type: "text-logo",
      image: {
        src: "/ALAIN AFFLELOU blanc.svg",
        alt: "Alain AFFLELOU",
        className: "absolute w-[87px] h-2.5 top-[38px] left-0",
      },
    },
    {
      type: "text-logo",
      image: {
        src: "/walibi.png",
        alt: "Walibi",
        className: "absolute w-[87px] h-[22px] top-8 left-0",
      },
    },
  ];

  return (
    <main className="flex flex-col w-full items-start relative bg-white overflow-hidden">
      <HeaderSection />

      {/* Hero Section */}
      <div className="flex flex-col w-full items-start gap-[50px] px-[80px] py-8 bg-[linear-gradient(180deg,rgba(0,13,27,1)_60%,rgba(119,192,224,1)_89%,rgba(255,255,255,1)_100%)]">
        <div className="flex flex-col items-center gap-10 w-full">
          {/* Main Heading */}
          <h1 className="w-full mt-[-1.00px] font-h1 font-[number:var(--h1-font-weight)] text-white text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
            Tout votre vécu clientss.&nbsp;&nbsp;
            <br />
            En un seul endroit.
          </h1>

          {/* Blue Glow Effect */}
          <div className="absolute w-[570px] h-[542px] top-[306px] left-[387px] bg-blue rounded-[284.92px/271.1px] blur-[219.3px] opacity-50" />

          {/* Background Line Image */}
          <div className="absolute w-[1680px] h-[1025px] top-[340px] left-1/2 transform -translate-x-1/2">
            <img
              className="absolute inset-0 w-full h-full z-0"
              alt="Line Top"
              src="/line top.svg"
            />
          </div>

          {/* AI Agent Card */}
          <Card className="w-[624px] border border-solid border-[#eff6ff] rounded-2xl bg-transparent">
            <CardContent className="flex flex-col items-start justify-center gap-2.5 p-4">
              <div className="flex items-start gap-2.5 w-full">
                <img
                  className="w-[23px] h-[24px]"
                  alt="Ai"
                  src="/ai-magic-icon.svg"
                />
                <div className="font-body-bold-medium font-[number:var(--body-bold-medium-font-weight)] text-white text-[length:var(--body-bold-medium-font-size)] tracking-[var(--body-bold-medium-letter-spacing)] leading-[var(--body-bold-medium-line-height)] whitespace-nowrap [font-style:var(--body-bold-medium-font-style)]">
                  AI CX Agent
                </div>
              </div>
              <p className="font-body-medium font-[number:var(--body-medium-font-weight)] text-white text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                CX First vous offre une vision claire et consolidée de
                l&apos;expérience client et de la performance business. <br />
                Une seule plateforme pour aligner les équipes, piloter les
                priorités stratégiques et orienter les décisions à fort impact. <br />
                Fini les silos, place à l&apos;action.
              </p>
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="flex items-start justify-center gap-2.5 py-5 w-full z-[12]">
            <Button className="bg-blue rounded-md px-16 py-2.5 h-13">
              <span className="font-body-big font-[number:var(--body-big-font-weight)] text-white text-[length:var(--body-big-font-size)] text-center tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] whitespace-nowrap [font-style:var(--body-big-font-style)]">
                Echangez avec un expert
              </span>
            </Button>
            <Button
              variant="outline"
              className="px-16 py-2.5 h-13 rounded-md border-2 border-solid border-[#5dc2e4]"
            >
              <span className="font-body-big font-[number:var(--body-big-font-weight)] text-blue text-[length:var(--body-big-font-size)] text-center tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] whitespace-nowrap [font-style:var(--body-big-font-style)]">
                En savoir plus
              </span>
            </Button>
          </div>
        </div>

        {/* Integration Icons Section */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative w-[1237.63px] h-[100px]">
            {/* Integration Icons */}
            <div className="absolute w-[43px] h-[149px] top-[93px] left-0">
            </div>

            <div className="absolute w-[43px] h-[151px] top-[65px] left-[136px]">
            </div>

            <div className="absolute w-[43px] h-[149px] top-[93px] left-[1195px]">
              <div className="absolute w-[43px] h-[43px] top-[105px] left-0 bg-white rounded-[10px]">
                <img
                  className="absolute w-[31px] h-[29px] top-[7px] left-1.5"
                  alt="Group"
                  src="/group-2608620.png"
                />
              </div>
            </div>

          </div>

          {/* Dashboard Visualization */}
          <div className="relative w-full max-w-[1238px] h-[575px] mt-[-90px] flex justify-center">
            <img
              className="w-full h-full object-contain"
              alt="CX First Dashboard Analytics Visualization"
              src="/dashboard-visualization.svg"
            />
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <ClientLogosSection />
      <SolutionsSection showFiltersAndBlogCards={false} />
      <VideoShowcaseSection />
      <InformationSection />
      <DashboardSection />
      <MetricsOverviewSection />
      <TestimonialsSection />
      <ContactUsSection />
      <FooterSection />
    </main>
  );
};

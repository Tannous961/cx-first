import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import PlayButtonIcon from '../components/ui/PlayButtonIcon';

// Define footer link data for mapping
const productLinks = [
  { text: "Fonctionnalités" },
  { text: "Solutions" },
  { text: "Tarifs" },
  { text: "Cas clients" },
];

const legalLinks = [
  { text: "Mentions légales" },
  { text: "Politique de confidentialité" },
  { text: "CGU" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-center px-[30px] py-16 relative bg-dark-blue">
      <div className="flex items-start gap-8 pt-0 pb-10 px-0 relative max-w-[1440px]">
        {/* Logo Section */}
        <div className="flex flex-col items-start justify-center relative">
          <img
            className="relative w-[142px] h-[57px]"
            alt="CX First Logo"
            src="/cx-first-logo.svg"
          />
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col w-[252px] items-start gap-4 relative">
          <div className="mt-[-1.00px] text-white text-[length:var(--body-bold-medium-font-size)] leading-[var(--body-bold-medium-line-height)] relative self-stretch font-body-bold-medium font-[number:var(--body-bold-medium-font-weight)] tracking-[var(--body-bold-medium-letter-spacing)] [font-style:var(--body-bold-medium-font-style)]">
            NEWSLETTER
          </div>
          <div className="relative self-stretch font-body-medium font-[number:var(--body-medium-font-weight)] text-light-grey-blue text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
            Recevez nos dernières actualités
          </div>
          <div className="flex items-center relative self-stretch w-full">
            <div className="flex-grow">
              <Input
                className="h-10 min-w-[200px] rounded-[12px_0px_0px_12px] px-4 py-[9.5px] text-grey bg-white font-body-regular-small font-[number:var(--body-regular-small-font-weight)] text-[length:var(--body-regular-small-font-size)] tracking-[var(--body-regular-small-letter-spacing)] leading-[var(--body-regular-small-line-height)] [font-style:var(--body-regular-small-font-style)]"
                placeholder="Votre email"
              />
            </div>
            <Button
              className="h-10 px-4 py-2.5 bg-blue rounded-[0px_12px_12px_0px] flex items-center justify-center"
              variant="default"
            >
              <img className="w-5 h-5" alt="Svg" src="/svg.svg" />
            </Button>
          </div>
        </div>

        {/* Product Links Section */}
        <div className="flex flex-col w-[304px] items-start gap-5 relative">
          <div className="mt-[-1.00px] text-white text-[length:var(--body-bold-medium-font-size)] leading-[var(--body-bold-medium-line-height)] relative self-stretch font-body-bold-medium font-[number:var(--body-bold-medium-font-weight)] tracking-[var(--body-bold-medium-letter-spacing)] [font-style:var(--body-bold-medium-font-style)]">
            PRODUIT
          </div>
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
            {productLinks.map((link, index) => (
              <button
                key={`product-link-${index}`}
                className="inline-flex flex-col items-start relative"
              >
                <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-light-grey-blue text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
                  {link.text}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="flex flex-col w-[304px] items-start gap-5 relative">
          <div className="mt-[-1.00px] text-white text-[length:var(--body-bold-medium-font-size)] leading-[var(--body-bold-medium-line-height)] relative self-stretch font-body-bold-medium font-[number:var(--body-bold-medium-font-weight)] tracking-[var(--body-bold-medium-letter-spacing)] [font-style:var(--body-bold-medium-font-style)]">
            LÉGAL
          </div>
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
            {legalLinks.map((link, index) => (
              <button
                key={`legal-link-${index}`}
                className="inline-flex flex-col items-start relative"
              >
                <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-light-grey-blue text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
                  {link.text}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col w-[190px] items-start gap-[19px] relative">
          <div className="mt-[-1.00px] text-white text-[length:var(--body-bold-medium-font-size)] leading-[var(--body-bold-medium-line-height)] relative self-stretch font-body-bold-medium font-[number:var(--body-bold-medium-font-weight)] tracking-[var(--body-bold-medium-letter-spacing)] [font-style:var(--body-bold-medium-font-style)]">
            SOCIAL
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Partager 1">
              <svg width="101" height="43" viewBox="0 0 101 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21.8477 0.287109C33.4456 0.287109 42.8477 9.68913 42.8477 21.2871C42.8477 32.8851 33.4456 42.2871 21.8477 42.2871C10.2497 42.2871 0.847656 32.8851 0.847656 21.2871C0.847656 9.68913 10.2497 0.287109 21.8477 0.287109ZM14.8058 13.8753C12.8303 13.8754 11.2242 15.6208 11.2241 17.7873V24.7869C11.2242 26.9446 12.8222 28.6988 14.8058 28.6989H29.6305C31.6141 28.6989 33.2204 26.9534 33.2124 24.7869V17.7873C33.2123 15.6296 31.6141 13.8753 29.6305 13.8753H14.8058Z" fill="white"/>
                <path d="M26.1076 21.1775L19.8712 17.5812V24.7737L26.1076 21.1775Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M79.8477 0.287109C91.4456 0.287109 100.848 9.68913 100.848 21.2871C100.848 32.8851 91.4456 42.2871 79.8477 42.2871C68.2497 42.2871 58.8477 32.8851 58.8477 21.2871C58.8477 9.68913 68.2497 0.287109 79.8477 0.287109ZM84.4648 18.291C82.4415 18.2078 81.3007 19.4067 80.901 19.923C80.7928 20.0645 80.7428 20.1478 80.7428 20.1478V18.6073H77.2873V30.1313H80.901V24.7192C80.901 23.9365 80.8426 23.1036 81.234 22.3875C81.567 21.7881 82.1666 21.4883 82.8411 21.4883C84.8391 21.4883 84.881 23.2946 84.881 23.4617V30.1812H88.4947V22.6623C88.4947 20.0895 87.1874 18.5741 84.881 18.3243C84.7478 18.3077 84.6063 18.2994 84.4648 18.291ZM71.492 30.098H75.1058V18.574H71.492V30.098ZM73.2989 12.8871C72.1401 12.8871 71.2006 13.8266 71.2006 14.9854C71.2006 16.1443 72.1401 17.0837 73.2989 17.0837C74.4577 17.0837 75.3972 16.1442 75.3972 14.9854C75.3972 13.8266 74.4577 12.8871 73.2989 12.8871Z" fill="white"/>
              </svg>
            </a>
            <a href="#" aria-label="Partager 2">
              {/* Placez ici le second SVG à ajouter */}
            </a>
          </div>
          
        </div>
      </div>

      {/* Copyright Section */}
      <Separator className="w-[1336px] border-[#5dc2e4]" />
      <div className="flex flex-col w-full items-center pt-[33px] pb-0 px-0 relative">
        <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-light-grey-blue text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
          © 2025 CX First. Tous droits réservés.
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute w-[592px] h-[728px] top-[293px] left-[424px] bg-blue rounded-[295.88px/364px] blur-[219.3px]" />
    </footer>
  );
};

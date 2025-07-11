import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { useLocation, useNavigate } from "react-router-dom";

export const HeaderSection = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Gestion de la langue
  const LANGUAGES = [
    {
      code: "fr",
      flag: "/french-flag.svg",
      labels: { fr: "Français", en: "French", es: "Francés" },
    },
    {
      code: "en",
      flag: "/english-flag.svg",
      labels: { fr: "Anglais", en: "English", es: "Inglés" },
    },
    {
      code: "es",
      flag: "/spanish-flag.svg",
      labels: { fr: "Espagnol", en: "Spanish", es: "Español" },
    },
  ] as const;
  const params = new URLSearchParams(location.search);
  const currentLang = params.get("lang") || "fr";
  const setLang = (lang: string) => {
    params.set("lang", lang);
    navigate({ pathname: location.pathname, search: params.toString() });
  };

  // Navigation menu items
  const navItems = [
    { label: "Plateforme", path: "/plateforme" },
    { label: "Témoignages", path: "/temoignages" },
    { label: "Solution", path: "/use-cases", dropdown: [
      { label: "Use cases", path: "/use-cases" },
      { label: "Secteur d'activités", path: "/secteurs" },
    ] },
    { label: "Ressources", path: "/ressources", dropdown: [
      { label: "Ressources", path: "/ressources" },
      { label: "Blogs", path: "/blogs" },
    ] },
    { label: "A propos", path: "/a-propos" },
  ];

  // Integration icons data
  const integrationIcons = [
    {
      top: "top-[93px]",
      left: "left-0",
      bg: "bg-white",
      img: "/vector.svg",
      imgClass: "w-0.5 h-3 top-3.5 left-[18px]",
    },
    {
      top: "top-0",
      left: "left-0",
      bg: "bg-[#34e0a1]",
      img: "/group-2608643.png",
      imgClass: "w-9 h-[37px] top-[3px] left-[3px]",
    },
    {
      top: "top-[31px]",
      left: "left-[409px]",
      bg: "bg-[#03363d]",
      img: "/group-2608628.png",
      imgClass: "w-[34px] h-[26px] top-[9px] left-[5px]",
    },
    {
      top: "top-0",
      left: "left-0",
      bg: "bg-white",
      img: "/group-2608616.png",
      imgClass: "w-7 h-[29px] top-[7px] left-[7px]",
    },
    {
      top: "top-0",
      left: "left-[104px]",
      bg: "bg-[#ff7a59]",
      imgClass: "w-8 h-[34px] top-[5px] left-[5px]",
    },
    {
      top: "top-[77px]",
      left: "left-[922px]",
      bg: "bg-[#51ca5e]",
      img: "/group-2608644.png",
      imgClass: "w-[31px] h-[33px] top-[5px] left-1.5",
    },
    {
      top: "top-[107px]",
      left: "left-0",
      bg: "bg-white",
      img: "/group-2608621.png",
      imgClass: "w-[34px] h-8 top-[5px] left-1",
    },
    {
      top: "top-0",
      left: "left-0",
      bg: "bg-white",
      img: "/star.png",
      imgClass: "w-8 h-[31px] top-[7px] left-[5px]",
    },
    {
      top: "top-[31px]",
      left: "left-[785px]",
      bg: "bg-[#ff4a00]",
      img: "/zapier.svg",
      imgClass: "w-8 h-[33px] top-[5px] left-[5px]",
    },
    {
      top: "top-0",
      left: "left-0",
      bg: "bg-white",
      img: "/jira.png",
      imgClass: "w-[38px] h-[38px] top-[3px] left-[3px]",
    },
    {
      top: "top-[105px]",
      left: "left-0",
      bg: "bg-white",
      img: "/group-2608620.png",
      imgClass: "w-[31px] h-[29px] top-[7px] left-1.5",
    },
    {
      top: "top-[77px]",
      left: "left-[273px]",
      bg: "bg-[#1877f2]",
      imgClass: "w-[37px] h-[37px] left-[3px]",
    },
  ];

  // Ajout de la fonction utilitaire pour extraire la langue courante
  function getCurrentLang(search: string): 'fr' | 'en' | 'es' {
    const params = new URLSearchParams(search);
    const lang = params.get("lang");
    if (lang === "en" || lang === "es") return lang;
    return "fr";
  }

  const LanguageDropdown = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = getCurrentLang(location.search) as 'fr' | 'en' | 'es';
    const currentLangObj = LANGUAGES.find(l => l.code === currentLang) ?? LANGUAGES[0];
    const currentLabel = currentLangObj.labels[currentLang];
    const currentFlag = currentLangObj.flag;

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      }
      if (open) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [open]);

    const handleSelect = (lang: string) => {
      const params = new URLSearchParams(location.search);
      params.set("lang", lang);
      navigate({ pathname: location.pathname, search: params.toString() });
      setOpen(false);
    };

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center gap-2 px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <img src={currentFlag} alt="flag" className="w-5 h-5" />
          <span>{currentLabel}</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </button>
        {open && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg" role="listbox">
            {LANGUAGES.map((lang) => (
              <li
                key={lang.code}
                className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 ${currentLang === lang.code ? "font-bold bg-gray-50" : ""}`}
                onClick={() => handleSelect(lang.code)}
                role="option"
                aria-selected={currentLang === lang.code}
              >
                <img src={lang.flag} alt={lang.labels[lang.code]} className="w-5 h-5" />
                <span>{lang.labels[currentLang]}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <header className="flex flex-col items-start w-full bg-custom-hero-gradient">
      {/* Navigation Bar */}
      <div className="flex w-full items-center justify-center gap-10 pt-[30px] pb-[30px] px-[30px]">
        {/* Logo */}
        <div className="flex flex-col items-start justify-center ml-[30px]">
          <a href="/">
            <img
              className="w-[142px] h-[57px] cursor-pointer"
              alt="CX First Logo"
              src="/cx-first-logo.svg"
            />
          </a>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex items-center gap-7">
            {navItems.map((item, index) => (
              <NavigationMenuItem
                key={index}
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                className="relative"
              >
                {item.dropdown ? (
                  <span
                    className={
                      `font-body-medium font-[number:var(--body-medium-font-weight)] text-white text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)] cursor-pointer` +
                      (location.pathname === item.path ? " font-bold" : " font-normal")
                    }
                  >
                    {item.label}
                  </span>
                ) : (
                  <NavigationMenuLink
                    className={
                      `font-body-medium font-[number:var(--body-medium-font-weight)] text-white text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]` +
                      (location.pathname === item.path ? " font-bold" : " font-normal")
                    }
                    href={item.path}
                  >
                    {item.label}
                  </NavigationMenuLink>
                )}
                {item.dropdown && openDropdown === item.label && (
                  <div
                    className="absolute left-0 top-full bg-white rounded shadow-lg z-50 min-w-[200px] flex flex-col"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.path}
                        className="px-6 py-3 text-dark-blue font-medium border-b last:border-b-0 border-blue-50 transition-colors"
                        style={{ zIndex: 50 }}
                        onClick={() => setOpenDropdown(null)}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgb(93, 194, 228)'}
                        onMouseLeave={e => e.currentTarget.style.background = ''}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="flex flex-col w-[308px] items-start gap-2.5 mr-[30px]">
          <Button className="w-full bg-blue rounded-md px-16 py-2.5 h-13">
            <span className="font-body-big font-[number:var(--body-big-font-weight)] text-white text-[length:var(--body-big-font-size)] text-center tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] whitespace-nowrap [font-style:var(--body-big-font-style)]">
              Echangez avec nos experts
            </span>
          </Button>
        </div>

        {/* Language Selector */}
        <LanguageDropdown />
      </div>
    </header>
  );
};

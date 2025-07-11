import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../lib/config";

// Type pour les données Strapi (flexible)
interface EchangeExpert {
  title?: string;
  description?: string;
  hero_title?: string;
  hero_subtitle?: string;
}

export const ContactUsSection = (): JSX.Element | null => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lang = params.get("lang") || "fr";
  const [data, setData] = useState<EchangeExpert | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/echange-expert?locale=${lang}`)
      .then(res => res.json())
      .then(json => {
        setData(json.data[0] ?? null); // Correction ici : plus de .attributes
      });
  }, [lang]);

  if (!data) return null;

  // Mapping flexible : on prend hero_title/hero_subtitle si dispo, sinon title/description
  const title = data.hero_title || data.title || "";
  const description = data.hero_subtitle || data.description || "";

  return (
    <section className="w-full bg-dark-blue py-[120px] px-[30px] flex justify-center">
      <div className="flex flex-col items-center gap-[35px] max-w-[848px]">
        <div className="flex flex-col items-center gap-5 z-[2]">
          <h2 className="font-h2 font-[number:var(--h2-font-weight)] text-light-grey-blue text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] w-full">
            {title}
          </h2>

          <p className="font-body-text-1-regular font-[number:var(--body-text-1-regular-font-weight)] text-light-grey-blue text-[length:var(--body-text-1-regular-font-size)] text-center tracking-[var(--body-text-1-regular-letter-spacing)] leading-[var(--body-text-1-regular-line-height)] [font-style:var(--body-text-1-regular-font-style)] w-full">
            {description}
          </p>
        </div>

        <Button
          className="bg-blue text-white px-16 py-2.5 rounded-md hover:bg-blue/90"
          size="lg"
        >
          <span className="font-body-big font-[number:var(--body-big-font-weight)] text-[length:var(--body-big-font-size)] tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] [font-style:var(--body-big-font-style)]">
            Echangez avec un expert
          </span>
        </Button>
      </div>
    </section>
  );
};

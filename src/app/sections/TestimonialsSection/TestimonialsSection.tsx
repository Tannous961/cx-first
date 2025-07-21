import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Grâce à la facilité d'utilisation de CX First et à une équipe réactive et attentive, notre collaboration est d'une qualité exceptionnelle. Je recommande vivement CX First.",
      name: "Jeanne Lubric",
      position: "Directrice Générale Carrefour France",
      image: "/women-face.png",
    },
    {
      quote:
        "L'accessibilité et la facilité d'utilisation de CX First, combinées à un support client fiable et attentif, font de notre collaboration une expérience des plus agréables. Je n'hésite pas à recommander CX First.",
      name: "Kylian Posu",
      position: "Directeur Expérience Client Futuroscope",
      image: "/a-guy-.png",
    },
    {
      quote:
        "La simplicité d'utilisation de CX First et l'accompagnement par des professionnels à l'écoute rendent notre partenariat extrêmement satisfaisant. Je recommande sans réserve CX First.",
      name: "Sofia Kouli",
      position: "Directrice Générale Carrefour France",
      image: "/a-women.png",
    },
  ];

  const clientLogos = [
    { alt: "Renault GROUP blanc", src: "/renault-group-blanc.svg" },
    { alt: "Group 29", src: "/group-29.png", isDiv: true },
    { alt: "G logos", src: "", isComplexLogo: true },
    { alt: "Vector logos", src: "", isVectorLogo: true },
    { alt: "Douglas blanc", src: "/douglas-blanc.svg" },
    { alt: "Complex logo", src: "", isComplexIcon: true },
    { alt: "Alain AFFLELOU", src: "/alain-afflelou-1.png", isTextLogo: true },
    { alt: "Walibi", src: "/walibi-1.png", isTextLogo: true },
  ];

  return (
    <section className="flex flex-col items-center gap-16 py-8 px-[30px] relative w-full bg-color-bg">
      <div className="flex w-full max-w-[1440px] items-center justify-center gap-[78px] relative" style={{ zIndex: 13 }}>
        <div className="flex flex-col items-center justify-center relative w-full">
          <header className="flex flex-col items-start gap-6 pt-[60px] pb-[50px] px-0 relative w-full">
            <h2 className="relative w-full font-h1 font-[number:var(--h1-font-weight)] text-dark-blue text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
              Plus de 150 clients déjà connectés
            </h2>

            <p className="relative w-full font-body-big font-[number:var(--body-big-font-weight)] text-grey text-[length:var(--body-big-font-size)] text-center tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] [font-style:var(--body-big-font-style)]">
              Ils en parlent mieux que nous : découvrez comment CX First a
              concrètement changé la donne pour nos clients.
            </p>
          </header>

          <div className="flex flex-col items-center justify-center px-2 py-0 relative w-full h-auto sm:px-4 md:px-8">
            <div className="flex flex-col items-center gap-6 w-full md:flex-row md:justify-center md:items-stretch">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={`testimonial-${index}`}
                  className="flex flex-col items-start gap-4 p-6 w-full max-w-xs md:w-[416px] md:h-[420px] bg-white rounded-xl overflow-hidden shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]"
                >
                  <CardContent className="relative self-stretch w-full h-auto p-0 pr-0">
                    <div className="absolute w-[11px] top-0 left-0 opacity-30 text-blue text-[70px] leading-[76px] whitespace-nowrap [font-family:'DM_Sans',Helvetica] font-bold tracking-[0]">
                      &#34;
                    </div>
                    <div className="relative pt-6 pl-6 pr-6 [font-family:'DM_Sans',Helvetica] font-normal italic text-grey text-lg tracking-[0] leading-[29.2px]">
                      {testimonial.quote}
                    </div>
                  </CardContent>
                  <div className="flex items-center gap-4 relative self-stretch w-full mt-auto">
                    <Avatar className="relative w-16 h-16 bg-white rounded-full overflow-hidden border-2 border-solid border-[#ffffff] shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]">
                      <AvatarImage
                        className="w-16 h-16 object-cover"
                        alt={`Photo of ${testimonial.name}`}
                        src={testimonial.image}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-bold-medium font-[number:var(--body-bold-medium-font-weight)] text-dark-blue text-[length:var(--body-bold-medium-font-size)] tracking-[var(--body-bold-medium-letter-spacing)] leading-[var(--body-bold-medium-line-height)] [font-style:var(--body-bold-medium-font-style)]">
                        {testimonial.name}
                      </div>
                      <div className="relative self-stretch font-body-medium font-[number:var(--body-medium-font-weight)] text-grey text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-2.5 py-10">
            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2.5 px-16 py-2.5 rounded-md border-2 border-solid border-[#5dc2e4] bg-transparent"
            >
              <span className="relative w-fit mt-[-2.00px] font-body-big font-[number:var(--body-big-font-weight)] text-blue text-[length:var(--body-big-font-size)] text-center tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] whitespace-nowrap [font-style:var(--body-big-font-style)]">
                Voir tout
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

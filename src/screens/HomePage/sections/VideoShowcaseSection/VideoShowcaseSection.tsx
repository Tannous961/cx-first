import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const VideoShowcaseSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 pt-16 pb-[104px] px-[38px] relative w-full bg-[#020817]">
      {/* Background glow effects */}
      <div className="absolute w-[1067px] h-[544px] -top-10 left-[253px]">
        <div className="absolute w-[552px] h-[544px] top-0 left-[515px] bg-blue rounded-[276.23px/272px] blur-[219.3px]" />
        <div className="absolute w-[472px] h-[465px] top-[58px] left-0 bg-blue rounded-[235.97px/232.36px] blur-[219.3px]" />
      </div>

      {/* Section header au-dessus de tout */}
      <header className="flex flex-col items-center gap-4 w-full relative z-20">
        <h2 className="mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-white opacity-100 text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap [font-style:var(--h2-font-style)]">
          Découvrez CX First en action
        </h2>
        <p className="font-body-medium font-[number:var(--body-medium-font-weight)] text-white opacity-100 text-[length:var(--body-medium-font-size)] text-center tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
          Voyez comment notre plateforme peut transformer votre approche de la
          gestion des
          <br />
          données client.
        </p>
      </header>

      {/* Video card */}
      <Card className="w-[820px] h-[509px] bg-dark-blue rounded-[25px] overflow-hidden border-none">
        <CardContent className="p-0 h-full relative">
          <div className="relative w-[708px] h-[480px] top-[123px] left-14 bg-[url(/lines left.svg)] bg-cover bg-[50%_50%]">
            {/* Play button */}
            <div className="relative w-10 h-10 top-[91px] left-[314px] bg-dark-blue rounded-[20px]">
              <img
                className="absolute w-[33px] h-[33px] top-[3px] left-[3px]"
                alt="Play button"
                src="/polygon-1.svg"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

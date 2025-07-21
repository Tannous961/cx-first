import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const MetricsOverviewSection = () => {
  // Data for metrics to enable mapping
  const metrics = [
    {
      value: "1M+",
      label: "Data Flow",
    },
    {
      value: "600%",
      label: "Return on investment",
    },
    {
      value: "40k+",
      label: "Global customers",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16 py-0 pb-[62px] px-[30px] w-full relative bg-white overflow-hidden z-[0]">
      <div className="absolute w-[994px] h-[1106px] top-[15px] right-0 z-[0]" style={{backgroundImage: 'url(/lines right.svg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <img
          className="w-full h-full object-cover opacity-1"
          alt="Background graphic"
          src="/lines right.svg"
        />
      </div>

      <div className="flex flex-col items-center gap-5 z-[2]">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col w-[260px] h-[260px] items-center justify-center gap-2.5 p-px relative rounded-[70px] overflow-hidden">
            <img
              className="w-[251.05px] h-[151.59px]"
              alt="Union graphic"
              src="/union.svg"
            />
          </div>

          <h1 className="text-dark-blue text-[length:var(--h1-font-size)] text-center leading-[var(--h1-line-height)] w-full font-h1 font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] [font-style:var(--h1-font-style)]">
            Évoluer en fonction de vos besoins
          </h1>
        </div>

        <p className="font-body-big font-[number:var(--body-big-font-weight)] text-dark-blue text-[length:var(--body-big-font-size)] text-center tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] [font-style:var(--body-big-font-style)] w-full">
          Nos clients comptent sur CX First pour traiter leur données
          d&apos;expérience client
        </p>
      </div>

      <Card className="w-[768px] border-none shadow-none bg-transparent">
        <CardContent className="flex items-start gap-4 p-0">
          {metrics.map((metric, index) => (
            <React.Fragment key={`metric-${index}`}>
              <div className="flex flex-col items-center gap-5 flex-1">
                <div className="flex flex-col items-start gap-3 w-full">
                  <div className="w-full mt-[-1.00px] [font-family:'DM_Sans_24pt-Black',Helvetica] font-black text-blue text-6xl text-center tracking-[-1.20px] leading-[72px]">
                    {metric.value}
                  </div>
                  <div className="w-full text-dark-blue text-[length:var(--body-bold-big-font-size)] text-center leading-[var(--body-bold-big-line-height)] font-body-bold-big font-[number:var(--body-bold-big-font-weight)] tracking-[var(--body-bold-big-letter-spacing)] [font-style:var(--body-bold-big-font-style)]">
                    {metric.label}
                  </div>
                </div>
              </div>
              {index < metrics.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-auto self-stretch"
                />
              )}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

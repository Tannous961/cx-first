'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { ApiResult } from '@/services/api';
import type { HomePageData } from '@/services/home';

type VideoShowcaseSectionProps = {
  homepageData: ApiResult<HomePageData> | null;
};

export const VideoShowcaseSection = ({
  homepageData,
}: VideoShowcaseSectionProps) => {
  const [videoIsDisplayed, setVideoIsDisplayed] = useState<boolean>(false);

  return (
    <section className='flex flex-col items-center gap-12 pt-16 pb-[104px] px-[38px] relative w-full bg-[#020817] overflow-hidden'>
      {/* Background glow effects */}
      <div className='absolute w-[1067px] h-[544px] -top-10 left-[253px]'>
        <div className='absolute w-[552px] h-[544px] top-0 left-[515px] bg-blue rounded-[276.23px/272px] blur-[219.3px]' />
        <div className='absolute w-[472px] h-[465px] top-[58px] left-0 bg-blue rounded-[235.97px/232.36px] blur-[219.3px]' />
      </div>

      {/* Section header au-dessus de tout */}
      <header className='flex flex-col items-center gap-4 w-full relative z-20'>
        <h2 className='mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-white opacity-100 text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap [font-style:var(--h2-font-style)]'>
          {homepageData?.data?.video?.title || 'Découvrez CX First en action'}
        </h2>
        <p className='w-[580px] font-body-medium font-[number:var(--body-medium-font-weight)] text-white opacity-100 text-[length:var(--body-medium-font-size)] text-center tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]'>
          {homepageData?.data?.video?.description ||
            'Voyez comment notre plateforme peut transformer votre approche de la gestion des données client.'}
        </p>
      </header>

      {!!homepageData?.data?.video?.imageVideo?.url &&
        !!homepageData?.data?.video?.video?.url && (
          <Card className='w-[820px] h-[509px] bg-dark-blue rounded-[25px] overflow-hidden border-none'>
            <CardContent className='p-0 h-full relative'>
              {/* <div className='relative w-10 h-10 top-[91px] left-[314px] bg-dark-blue rounded-[20px]'></div> */}
              {!videoIsDisplayed && (
                <button
                  type='button'
                  onClick={() => {
                    setVideoIsDisplayed(true);
                  }}
                >
                  <Image
                    className='absolute w-full h-full top-0 left-0 object-cover cursor-pointer'
                    alt={
                      homepageData.data.video.imageVideo.alternativeText || ''
                    }
                    src={homepageData.data.video.imageVideo.url}
                    width={homepageData.data.video.imageVideo.width}
                    height={homepageData.data.video.imageVideo.height}
                  />
                </button>
              )}
              {videoIsDisplayed && (
                <video
                  className='absolute w-full h-full top-0 left-0 object-cover'
                  controls
                  autoPlay
                >
                  <source
                    src={homepageData.data.video.video.url}
                    type={homepageData.data.video.video.mime}
                  />
                </video>
              )}
            </CardContent>
          </Card>
        )}
    </section>
  );
};

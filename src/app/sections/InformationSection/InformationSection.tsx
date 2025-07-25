'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { ApiResult } from '@/services/api';
import type { HomePageData } from '@/services/home';

type InformationSectionProps = {
  homepageData: ApiResult<HomePageData> | null;
};

export const InformationSection = ({
  homepageData,
}: InformationSectionProps) => {
  const [currentBlock, setCurrentBlock] = useState(1);

  const infoBlocks = [
    {
      icon: '/icon-graph.svg',
      title: 'Qualimetrie',
      description: homepageData?.data?.informationCXQuali?.qualimetrie,
      image: homepageData?.data?.informationCXQuali?.imageQualimetrie?.url,
    },
    {
      icon: '/icon-increase.svg',
      title: 'CX first',
      description: homepageData?.data?.informationCXQuali?.cxfirst,
      image: homepageData?.data?.informationCXQuali?.imageCxfirst?.url,
    },
  ];

  return (
    <section className='w-full flex flex-col items-center justify-center px-[30px] py-20 relative bg-white overflow-hidden'>
      <div className='flex flex-row items-center justify-center gap-16 w-full max-w-[1240px] mx-auto'>
        <div
          className='absolute w-[994px] h-[1106px] -top-0.5 left-[-215px]'
          style={{
            backgroundImage: 'url(/line left.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Image
            className='w-full h-full object-cover opacity-1'
            alt='Background pattern'
            src='/lines left.svg'
            width={994}
            height={1106}
          />
        </div>

        <div className='flex flex-col items-start gap-8 relative w-1/2 min-w-[320px] max-w-[600px]'>
          <div className='flex items-center justify-center gap-8 relative self-stretch w-full'>
            <div className='flex flex-col w-[324px] items-center justify-center gap-2.5'>
              <svg
                width='325'
                height='115'
                viewBox='0 0 325 115'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-[255.83px] h-[102px]'
              >
                <g clipPath='url(#clip0_407_9144)'>
                  <path
                    d='M59.7576 27.3324H72.1353V14.6074H59.7576C46.0683 14.6074 34.9316 25.5997 34.9316 39.1117C34.9316 52.6236 46.0683 63.6159 59.7576 63.6159H72.1353V50.891H59.7576C53.1772 50.891 47.8237 45.6068 47.8237 39.1117C47.8237 32.6165 53.1772 27.3324 59.7576 27.3324Z'
                    fill='#000D1B'
                  />
                  <path
                    d='M159.716 26.671V14.6074H125.355V63.6159H138.18V46.1016H154.058V34.4345H138.113V26.671H159.716Z'
                    fill='#000D1B'
                  />
                  <path
                    d='M118.349 14.6074H103.278L94.3471 27.8979L85.416 14.6074H70.3457L86.8117 39.1117L70.3457 63.6159H85.416L94.3471 50.3254L103.278 63.6159H118.349L101.882 39.1117L118.349 14.6074Z'
                    fill='#000D1B'
                  />
                  <path
                    d='M174.914 14.6074H162.021V63.6159H174.914V14.6074Z'
                    fill='#000D1B'
                  />
                  <path
                    d='M252.656 14.6074V26.7374H265.333V63.6159H278.091V26.7374H290.764V14.6074H252.656Z'
                    fill='#000D1B'
                  />
                  <path
                    d='M214.18 52.49C209.498 52.49 205.689 49.9893 203.549 46.105C210.898 44.1944 215.567 38.2763 215.567 30.6849C215.567 26.1473 213.84 22.0432 210.705 19.1295C207.567 16.2134 203.128 14.6074 198.207 14.6074H177.217V63.6159H189.974V47.309C191.439 51.9997 194.347 56.2151 198.267 59.2928C202.697 62.7701 208.036 64.6074 213.706 64.6074H218.579V52.5084L214.18 52.49H214.18ZM197.135 35.6245H190.042V25.8122H197.135C200.688 25.8122 202.809 27.6585 202.809 30.7512C202.809 33.8439 200.635 35.6245 197.135 35.6245Z'
                    fill='#000D1B'
                  />
                  <path
                    d='M233.099 26.7693L250.644 26.7354V14.6074H235.716C230.882 14.6074 226.41 16.0089 223.125 18.5545C220.657 20.4662 218.987 22.8876 218.18 25.6825C217.809 26.9668 217.619 28.3303 217.619 29.7597C217.619 37.2793 222.91 42.9515 231.433 44.5634L237.922 45.7519C239.186 45.9908 242.126 46.8237 242.126 49.3888C242.126 51.0755 240.742 52.4431 239.034 52.4461L220.616 52.4795V64.6074H236.386C243.4 64.6074 247.742 61.9172 250.151 59.6609C251.996 57.9322 253.371 55.8171 254.181 53.5328C254.729 51.9867 255.018 50.3628 255.018 48.7284C255.018 41.0413 249.417 35.2419 240.405 33.5951L234.038 32.4041C230.875 31.8305 230.276 30.9567 230.276 29.5438C230.285 28.0106 231.546 26.7718 233.099 26.7693Z'
                    fill='#000D1B'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_407_9144'>
                    <rect
                      width='255.833'
                      height='50'
                      fill='white'
                      transform='translate(34.9316 14.6074)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <p className="self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-grey text-lg tracking-[0] leading-[18px] whitespace-pre-wrap">
            {homepageData?.data?.informationCXQuali?.description || ''}
          </p>

          {infoBlocks.map((block, index) => (
            <div
              key={`info-block-${index}`}
              className='flex items-start gap-8 relative self-stretch w-full'
              onMouseEnter={() => setCurrentBlock(index)}
            >
              <div className='flex w-[82px] h-[82px] items-center justify-center p-2.5 relative bg-blue rounded-xl'>
                {index === 0 ? (
                  <svg
                    width='63'
                    height='63'
                    viewBox='0 0 63 63'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='relative flex-1 h-[62px]'
                  >
                    <path
                      d='M49.1046 17.9158C49.1046 15.9469 47.5073 14.3496 45.5384 14.3496H18.1561C16.1872 14.3496 14.5898 15.9469 14.5898 17.9158V45.2981C14.5898 47.267 16.1872 48.8644 18.1561 48.8644H45.5384C47.5073 48.8644 49.1046 47.267 49.1046 45.2981V17.9158ZM25.9575 25.9231V45.8158H20.6869V25.9231H25.9575ZM34.2252 17.3981V45.8158H28.9546V17.3981H34.2252ZM42.4898 34.4481V45.8158H37.2223V34.4481H42.4898ZM54.3752 45.2981C54.3752 50.1776 50.4178 54.135 45.5384 54.135H18.1561C13.2766 54.135 9.32227 50.1776 9.32227 45.2981V17.9158C9.32227 13.0364 13.2766 9.08203 18.1561 9.08203H45.5384C50.4178 9.08203 54.3752 13.0364 54.3752 17.9158V45.2981Z'
                      fill='white'
                    />
                  </svg>
                ) : index === 1 ? (
                  <svg
                    width='63'
                    height='63'
                    viewBox='0 0 63 63'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='relative flex-1 h-[62px]'
                  >
                    <path
                      d='M24.9903 32.8929C25.3725 32.1718 25.9486 31.4228 26.8392 30.9518C27.7719 30.4589 28.7121 30.4471 29.4608 30.5938C30.153 30.7296 30.7671 31.0135 31.2143 31.2442C31.6587 31.4736 32.1606 31.7709 32.5323 31.9826C34.2005 32.9324 35.2515 33.3198 36.6541 32.5701C37.3908 32.176 38.177 31.3465 38.9329 30.0038C39.673 28.6887 40.2668 27.0944 40.7273 25.4912C41.184 23.9006 41.4887 22.3793 41.6777 21.2509C41.7718 20.6893 41.8339 20.2302 41.8746 19.9169C41.8948 19.7614 41.9098 19.6422 41.9187 19.5641C41.9231 19.5254 41.9262 19.4961 41.9281 19.4786L41.9304 19.4594L41.9714 19.1986C42.2337 17.9158 43.4305 17.0148 44.7612 17.1488C46.18 17.2924 47.2125 18.5584 47.0697 19.9774C47.0519 19.9751 46.8472 19.9557 44.5011 19.7195L47.0718 19.9796L47.0717 19.9839C47.0715 19.9867 47.0699 19.9904 47.0695 19.9946C47.0686 20.0031 47.0664 20.0147 47.0649 20.0288C47.0618 20.0578 47.0589 20.0995 47.053 20.1507C47.0413 20.2534 47.0235 20.4007 46.9996 20.5847C46.9518 20.9525 46.8789 21.4735 46.7731 22.1047C46.5623 23.3627 46.219 25.0856 45.693 26.9174C45.1707 28.7358 44.4447 30.7449 43.4363 32.5367C42.4438 34.3002 41.05 36.0795 39.0894 37.1276C35.096 39.2621 31.7862 37.5049 29.9739 36.4729C29.6412 36.2834 29.3871 36.1433 29.1626 36.0177C28.118 37.8427 26.6142 40.027 25.3655 41.7656C24.6446 42.7693 23.9844 43.6608 23.5044 44.2996C23.265 44.6182 23.0681 44.8737 22.9321 45.0519C22.8642 45.1408 22.8125 45.2125 22.7759 45.2602C22.7576 45.284 22.7423 45.3028 22.7326 45.3154C22.7278 45.3217 22.7244 45.3269 22.7217 45.3303L22.7174 45.3346C21.8449 46.4634 20.2218 46.6711 19.0929 45.7986C17.9646 44.9264 17.7552 43.305 18.6267 42.1763L18.6311 42.172C18.633 42.1695 18.636 42.1641 18.6397 42.1593C18.648 42.1486 18.6626 42.1335 18.6787 42.1125C18.7121 42.0691 18.7599 42.0031 18.824 41.9191C18.9532 41.7499 19.1412 41.5022 19.3726 41.1944C19.8364 40.5771 20.4765 39.7184 21.1707 38.7519C22.5859 36.7815 24.1411 34.4945 24.9903 32.8929Z'
                      fill='white'
                    />
                    <path
                      d='M49.9815 17.9178C49.9815 15.9489 48.3842 14.3516 46.4153 14.3516H19.033C17.0641 14.3516 15.4668 15.9489 15.4668 17.9178V45.3001C15.4668 47.269 17.0641 48.8663 19.033 48.8663H46.4153C48.3842 48.8663 49.9815 47.269 49.9815 45.3001V17.9178ZM55.2521 45.3001C55.2521 50.1795 51.2948 54.1369 46.4153 54.1369H19.033C14.1536 54.1369 10.1992 50.1795 10.1992 45.3001V17.9178C10.1992 13.0383 14.1536 9.08398 19.033 9.08398H46.4153C51.2948 9.08398 55.2521 13.0383 55.2521 17.9178V45.3001Z'
                      fill='white'
                    />
                  </svg>
                ) : (
                  <Image
                    className='relative flex-1 h-[62px]'
                    alt={`Icon for ${block.title}`}
                    src={block.icon}
                    width={63}
                    height={63}
                  />
                )}
              </div>

              <div className='flex flex-col items-start gap-2 relative flex-1'>
                <h3 className='self-stretch mt-[-1.00px] font-body-huge-bold font-[number:var(--body-huge-bold-font-weight)] text-grey text-[length:var(--body-huge-bold-font-size)] tracking-[var(--body-huge-bold-letter-spacing)] leading-[var(--body-huge-bold-line-height)] [font-style:var(--body-huge-bold-font-style)]'>
                  {block.title}
                </h3>

                <p className='self-stretch font-body-medium font-[number:var(--body-medium-font-weight)] text-grey text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]'>
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {infoBlocks[currentBlock].image && (
          <Card className='flex-1 overflow-hidden shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] rounded-xl w-[480px] max-w-[480px]'>
            <CardContent className='p-0'>
              <div className='relative w-full h-[420px] overflow-hidden'>
                <Image
                  className='absolute w-[480px] h-[420px] top-0 left-0 object-cover'
                  alt={infoBlocks[currentBlock].title}
                  src={infoBlocks[currentBlock].image}
                  width={480}
                  height={320}
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

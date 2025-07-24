import { ContactUsSection } from './sections/ContactUsSection/ContactUsSection';
import { DashboardSection } from './sections/DashboardSection';
import { HeaderSection } from './sections/HeaderSection/HeaderSection';
import { InformationSection } from './sections/InformationSection';
import { MetricsOverviewSection } from './sections/MetricsOverviewSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { VideoShowcaseSection } from './sections/VideoShowcaseSection';
import { ClientLogosSection } from './sections/ClientLogosSection';
import { BannerSection } from './sections/BannerSection';
import { getHomePageData, getEchangeExpertData } from '@/services/home';

// Todo : Ajouter un type pour le prop contactUsData (défini dans ContactUsSection.tsx actuellement)
export default async function Home() {
  // Todo : Langue à récupérer depuis un cookie
  const lang = 'fr';
  const [homepageData, contactUsData] = await Promise.all([
    getHomePageData(lang),
    getEchangeExpertData(lang),
  ]);

  // Partner logos data
  const partnerLogos = [
    {
      alt: 'Renault GROUP blanc',
      src: '/RENAULT GROUP blanc.svg',
      type: 'image',
    },
    {
      type: 'group',
      backgroundImage: '/group.png',
    },
    {
      type: 'complex',
      images: [
        {
          src: '/g2906.png',
          alt: 'G',
          className: 'absolute w-1.5 h-2 top-7 left-0',
        },
        {
          src: '/g2910.png',
          alt: 'G',
          className: 'absolute w-2 h-2 top-7 left-[7px]',
        },
        {
          src: '/g2914.png',
          alt: 'G',
          className: 'absolute w-px h-2 top-7 left-4',
        },
        {
          src: '/g2918.png',
          alt: 'G',
          className: 'absolute w-[7px] h-2 top-7 left-5',
        },
        {
          src: '/g2922.png',
          alt: 'G',
          className: 'absolute w-1.5 h-2 top-7 left-7',
        },
        {
          src: '/g2926.png',
          alt: 'G',
          className: 'absolute w-[3px] h-px top-8 left-[35px]',
        },
        {
          src: '/g2930.png',
          alt: 'G',
          className: 'absolute w-[7px] h-2 top-7 left-10',
        },
        {
          src: '/g2934.png',
          alt: 'G',
          className: 'absolute w-[9px] h-2 top-7 left-[49px]',
        },
        {
          src: '/g2938.png',
          alt: 'G',
          className: 'absolute w-[7px] h-2 top-7 left-[59px]',
        },
        {
          src: '/g2942.png',
          alt: 'G',
          className: 'absolute w-2 h-2 top-7 left-[66px]',
        },
        {
          src: '/g2946.png',
          alt: 'G',
          className: 'absolute w-px h-2 top-7 left-[76px]',
        },
        {
          src: '/g2950.png',
          alt: 'G',
          className: 'absolute w-[7px] h-2 top-7 left-20',
        },
      ],
      background: {
        src: '/g2964.png',
        className: 'absolute w-[65px] h-[25px] top-0 left-[11px]',
      },
    },
    {
      type: 'logo',
      content: [
        {
          className:
            'absolute w-[30px] h-[23px] top-0 left-0 bg-[url(/vector-107.svg)] bg-[100%_100%]',
          image: {
            src: '/clip-path-group-1.png',
            alt: 'Clip path group',
            className: 'absolute w-[30px] h-[23px] top-0 left-0',
          },
        },
        {
          src: '/group-1.png',
          alt: 'Group',
          className: 'absolute w-[53px] h-[11px] top-[7px] left-[34px]',
        },
      ],
    },
    {
      alt: 'Douglas blanc',
      src: '/image copy copy.png',
      type: 'image',
    },
    {
      type: 'complex-logo',
      image: {
        src: '/group-2.png',
        alt: 'Group',
        className: 'absolute w-[87px] h-2.5 top-[59px] left-0',
      },
    },
    {
      type: 'text-logo',
      image: {
        src: '/ALAIN AFFLELOU blanc.svg',
        alt: 'Alain AFFLELOU',
        className: 'absolute w-[87px] h-2.5 top-[38px] left-0',
      },
    },
    {
      type: 'text-logo',
      image: {
        src: '/walibi.png',
        alt: 'Walibi',
        className: 'absolute w-[87px] h-[22px] top-8 left-0',
      },
    },
  ];

  return (
    <>
      <HeaderSection />
      <BannerSection />
      <ClientLogosSection />
      <SolutionsSection showFiltersAndBlogCards={false} />
      <VideoShowcaseSection />
      <InformationSection />
      <DashboardSection />
      <MetricsOverviewSection />
      <TestimonialsSection />
      <ContactUsSection data={contactUsData} />
    </>
  );
}

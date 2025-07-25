import { type Metadata } from 'next';
import { getHomePageData, getEchangeExpertData } from '@/services/home';
import { getGlobalData } from '@/services/global';

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

export async function generateMetadata(): Promise<Metadata> {
  const [globalData, homepageData] = await Promise.all([
    getGlobalData('fr'),
    getHomePageData('fr'),
  ]);

  return {
    title: homepageData?.data?.title || globalData?.data?.siteName || '',
    description:
      homepageData?.data?.description ||
      globalData?.data?.siteDescription ||
      '',
  };
}

export default async function Home() {
  // Todo : Langue à récupérer depuis un cookie
  const lang = 'fr';
  const [homepageData, contactUsData] = await Promise.all([
    getHomePageData(lang),
    getEchangeExpertData(lang),
  ]);

  return (
    <>
      <HeaderSection />
      <BannerSection homepageData={homepageData} />
      <ClientLogosSection />
      <SolutionsSection
        homepageData={homepageData}
        showFiltersAndBlogCards={false}
      />
      <VideoShowcaseSection homepageData={homepageData} />
      <InformationSection homepageData={homepageData} />
      <DashboardSection homepageData={homepageData} />
      <MetricsOverviewSection homepageData={homepageData} />
      <TestimonialsSection homepageData={homepageData} />
      <ContactUsSection contactUsData={contactUsData} />
    </>
  );
}

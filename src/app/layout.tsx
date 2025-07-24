import type { Metadata } from 'next';
import { DM_Sans, Montserrat, Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { FooterSection } from './sections/FooterSection';
import { getFooterData, getGlobalData } from '@/services/global';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const globalData = await getGlobalData('fr');

  return {
    title: globalData?.data?.siteName || '',
    description: globalData?.data?.siteDescription || '',
    icons: {
      icon: globalData?.data?.favicon?.url || '',
    },
    openGraph: {
      title: globalData?.data?.defaultSeo?.metaTitle || '',
      description: globalData?.data?.defaultSeo?.metaDescription || '',
      images: [
        {
          url: globalData?.data?.defaultSeo?.shareImage?.url || '',
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = 'fr';
  const [footerData] = await Promise.all([getFooterData(lang)]);

  // Todo : récupérer la langue actuelle
  return (
    <html lang='en'>
      <body
        className={`${dmSans.variable} ${montserrat.variable} ${inter.variable} antialiased`}
      >
        <SpeedInsights />
        <main className='flex flex-col w-full items-start relative bg-white overflow-hidden'>
          {children}
          <FooterSection footer={footerData} />
        </main>
      </body>
    </html>
  );
}

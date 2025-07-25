'use client';

import { Button } from '@/components/ui/button';
import type { ApiResult } from '@/services/api';
import type { HomePageData } from '@/services/home';

type DashboardSectionProps = {
  homepageData: ApiResult<HomePageData> | null;
};

export const DashboardSection = ({ homepageData }: DashboardSectionProps) => {
  // Article data for mapping
  const articles = [
    {
      id: 1,
      title: 'Réduire le Customer Effort Score de 30% en 90 jours',
      description:
        'Le Customer Effort Score (CES) est devenu un indicateur clé de performance pour les revendeurs',
      tag: 'Ipsum',
      bgClass: 'bg-dark-blue',
      textClass: 'text-white',
      bgImage: 'bg-[url(/group-2608688.png)]',
      hasReadMore: true,
    },
    {
      id: 2,
      title: "Comment réussir votre transformation de l'expérience client",
      description:
        "L'expérience client (CX) s'est imposée comme le différenciateur stratégique ultime dans un environnement où la concurrence est devenu le",
      tag: 'Ipsum',
      bgClass: '',
      textClass: 'text-dark-blue',
      bgImage: 'bg-[url(/group-2608688-1.png)]',
      hasReadMore: true,
    },
    {
      id: 3,
      title: "L'IA conversationnelle transforme l'expérience client !",
      description:
        "La relation entre les entreprises et leurs clients connait une révolution silencieuse mais profonde qui permet d'engager l'ensemble des",
      tag: 'Ipsum',
      bgClass: '',
      textClass: 'text-dark-blue',
      bgImage: 'bg-[url(/group-2608688-2.png)]',
      hasReadMore: true,
    },
  ];

  return (
    <section className='flex flex-col items-start pt-0 pb-20 px-[30px] relative w-full flex-[0_0_auto] bg-white max-w-[1240px] mx-auto'>
      <div className='flex items-center justify-between pt-[72px] pb-8 px-0 relative w-full max-w-[1240px] mx-auto'>
        <h2 className='font-h1 font-[number:var(--h1-font-weight)] text-dark-blue text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]'>
          {homepageData?.data?.lastArticle?.[0]?.title ||
            'Nos derniers articles'}
        </h2>

        <Button
          variant='outline'
          className='px-16 py-2.5 rounded-md border-2 border-solid border-[#5dc2e4] bg-transparent'
        >
          <span className='font-body-big font-[number:var(--body-big-font-weight)] text-blue text-[length:var(--body-big-font-size)] tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] [font-style:var(--body-big-font-style)]'>
            Voir tout
          </span>
        </Button>
      </div>

      <div className='flex items-center justify-center gap-8 relative w-full max-w-[1240px] mx-auto'>
        {articles.map((article, idx) => (
          <div
            key={article.id}
            className='relative group overflow-hidden rounded-2xl shadow-md bg-white transition-all duration-300 cursor-pointer'
            style={{ width: 400, height: 550, padding: 0 }}
            tabIndex={0}
          >
            {/* Overlay blanc (sous l'image décorative) */}
            <div className='absolute inset-0 z-0 bg-white opacity-100 group-hover:opacity-0 transition-all duration-300' />
            {/* Image décorative toujours visible (optionnelle, à adapter si besoin) */}
            <img
              src='/lines right.svg'
              alt=''
              aria-hidden='true'
              className='absolute right-0 bottom-0 z-10 pointer-events-none select-none'
              style={{ width: '70%', opacity: 1 }}
            />
            {/* Image de fond + overlay au hover */}
            <div className='absolute inset-0 z-20 transition-all duration-300 group-hover:opacity-100 opacity-0'>
              <div
                className={`w-full h-full object-cover ${article.bgImage} bg-cover bg-center`}
              />
              <div className='absolute inset-0 bg-black bg-opacity-60' />
            </div>
            {/* Contenu principal (au-dessus de tout) */}
            <div
              className='relative z-30 flex flex-col h-full'
              style={{
                paddingTop: '14.5rem',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
                paddingBottom: '4.5rem',
              }}
            >
              <span
                style={{
                  background: '#5DC2E4',
                  color: '#000D1B',
                  borderRadius: 12,
                  padding: '2px 16px',
                  fontSize: 14,
                  fontWeight: 500,
                  marginBottom: 16,
                  alignSelf: 'flex-start',
                }}
              >
                {article.tag}
              </span>
              <h3 className='font-bold text-2xl mb-3 mt-0 leading-tight transition-colors duration-300 text-[#000D1B] group-hover:text-white'>
                {article.title}
              </h3>
              <p className='text-base opacity-80 mb-4 transition-colors duration-300 text-[#000D1B] group-hover:text-white'>
                {article.description}
              </p>
              {/* Lien 'En savoir plus' visible uniquement au hover */}
              {article.hasReadMore && (
                <a
                  href='#'
                  tabIndex={-1}
                  className='mt-auto text-[#5DC2E4] font-medium inline-flex items-center gap-1 group-hover:underline transition-opacity duration-300 opacity-0 group-hover:opacity-100'
                  onClick={(e) => e.stopPropagation()}
                >
                  En savoir plus <span aria-hidden>→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

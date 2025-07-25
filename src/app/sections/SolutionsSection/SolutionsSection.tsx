'use client';

import { useState, useEffect } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FilterBar } from '@/components/FilterBar';
import { BlogCard } from '@/components/BlogCard';
import type { ApiResult } from '@/services/api';
import type { HomePageData } from '@/services/home';

function getPageFromUrl() {
  if (typeof window === 'undefined') return 1;
  const params = new URLSearchParams('/');
  const page = parseInt(params.get('page') || '1', 10);
  return isNaN(page) || page < 1 ? 1 : page;
}

type SolutionsSectionProps = {
  homepageData: ApiResult<HomePageData> | null;
  showFiltersAndBlogCards?: boolean;
};

// Ajout d'un prop pour contrôler l'affichage des filtres et BlogCards
export const SolutionsSection = ({
  homepageData,
  showFiltersAndBlogCards = true,
}: SolutionsSectionProps) => {
  const solutionCards = [
    {
      id: 'connect',
      title:
        homepageData?.data?.solutionInfos?.connect?.[0]?.title || 'CONNECT.',
      description:
        homepageData?.data?.solutionInfos?.connect?.[0]?.description ||
        "Centralisez toutes vos données d'expérience client et business dans une plateforme unique.",
      icon: '/icon-connect.svg',
      variant: 'primary',
      hasLearnMore: true,
    },
    {
      id: 'explore',
      title:
        homepageData?.data?.solutionInfos?.explore?.[0]?.title || 'EXPLORE.',
      description:
        homepageData?.data?.solutionInfos?.explore?.[0]?.description ||
        'Diffusez des données fiables aux bons utilisateurs.',
      icon: '/icon-explore.svg',
      variant: 'secondary',
    },
    {
      id: 'deploy',
      title: homepageData?.data?.solutionInfos?.deploy?.[0]?.title || 'DEPLOY.',
      description:
        homepageData?.data?.solutionInfos?.deploy?.[0]?.description ||
        "Embarquez et impliquez les équipes grâce à des modules d'alerting, de gestion et suivi de plans d'actions, d'auto-évaluation, de to-do lists…",
      icon: '/icon-deploy.svg',
      variant: 'secondary',
    },
  ];

  const filters = ['Toutes', 'Data', 'Alerting', 'Gestion', 'Suivi', 'CMS'];
  const [selected, setSelected] = useState(filters[0]);

  // 9 articles fictifs
  const blogCards = [
    {
      image: '/alain-afflelou.png',
      badge: 'Ipsum',
      title: 'Optimiser votre expérience client avec Hippopotamus',
      description:
        "L'expérience client (CX) s'est imposée comme le différenciateur stratégique ultime dans un environnement où la concurrence est devenu le...",
    },
    {
      image: '/douglas-blanc.png',
      badge: 'Dolor',
      title: 'La data au service de la performance retail',
      description:
        "Découvrez comment la data permet d'optimiser les parcours clients et d'améliorer la performance commerciale dans le secteur du retail...",
    },
    {
      image: '/walibi.png',
      badge: 'Sit',
      title: "Impliquer les équipes grâce à l'alerting et au suivi",
      description:
        "L'alerting et le suivi des plans d'actions sont essentiels pour embarquer les équipes et garantir la satisfaction client durablement...",
    },
    {
      image: '/about-office-1.jpg',
      badge: 'Retail',
      title: "L'innovation dans le parcours client",
      description:
        "Comment innover dans le parcours client pour se différencier et fidéliser durablement ? Exemples concrets et retours d'expérience...",
    },
    {
      image: '/about-office-2.jpg',
      badge: 'Banque',
      title: "Digitalisation de l'expérience bancaire",
      description:
        'La digitalisation transforme la relation client dans la banque. Découvrez les bonnes pratiques pour une expérience fluide et humaine...',
    },
    {
      image: '/about-office-3.jpg',
      badge: 'Automobile',
      title: "L'expérience client dans l'automobile",
      description:
        "Du showroom à l'après-vente, chaque étape compte pour fidéliser les clients dans l'automobile. Nos conseils pour performer...",
    },
    {
      image: '/testimonials-hero.jpg',
      badge: 'Luxe',
      title: "L'excellence du service dans le luxe",
      description:
        "Dans le secteur du luxe, l'excellence du service est un must. Découvrez comment les grandes maisons s'organisent...",
    },
    {
      image: '/about-people.jpg',
      badge: 'Tech',
      title: "L'IA au service de la satisfaction client",
      description:
        "L'intelligence artificielle révolutionne la gestion de l'expérience client. Cas d'usage et retours terrain...",
    },
    {
      image: '/a-guy-.png',
      badge: 'Autres',
      title: "L'importance de l'écoute client",
      description:
        "Écouter ses clients, c'est progresser. Méthodes et outils pour mieux capter la voix du client et agir efficacement...",
    },
  ];

  // Pagination
  const ARTICLES_PER_PAGE = 6;
  const totalPages = Math.ceil(blogCards.length / ARTICLES_PER_PAGE);
  const [page, setPage] = useState(getPageFromUrl());

  // useEffect(() => {
  //   const onPopState = () => setPage(getPageFromUrl());
  //   window.addEventListener('popstate', onPopState);
  //   return () => window.removeEventListener('popstate', onPopState);
  // }, []);

  // useEffect(() => {
  //   if (window.location.search !== `?page=${page}`) {
  //     window.history.pushState({}, '', `?page=${page}`);
  //   }
  // }, [page]);

  const paginatedCards = blogCards.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );

  return (
    <section className='w-full justify-center pt-20 pb-10 px-[30px] flex items-center relative bg-white'>
      <div className='flex flex-col items-start justify-center gap-20 relative'>
        <div className='flex flex-col w-full max-w-[1240px] items-center gap-5 relative'>
          <h2 className='relative w-fit mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-dark-blue text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap [font-style:var(--h2-font-style)]'>
            {homepageData?.data?.solutionInfos?.title ||
              'Une solution complète pour vos données'}
          </h2>

          <p className='relative max-w-[1027px] font-body-big font-[number:var(--body-big-font-weight)] text-grey text-[length:var(--body-big-font-size)] text-center tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] [font-style:var(--body-big-font-style)]'>
            {homepageData?.data?.solutionInfos?.description ||
              `Reprenez le contrôle de l&apos;expérience client : alignez vos
            données, vos équipes et vos décisions dans une plateforme unique,
            pensée pour piloter la performance en continu et à tous les niveaux
            de l&apos;organisation.`}
          </p>
        </div>
        {showFiltersAndBlogCards && (
          <>
            <div className='flex justify-center w-full'>
              <FilterBar
                filters={filters}
                selected={selected}
                onSelect={setSelected}
              />
            </div>
            {/* Grille de 3 colonnes sous le filtre, fond blanc */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1240px] mx-auto my-8 bg-white'>
              {paginatedCards.map((card, idx) => (
                <BlogCard key={idx} {...card} />
              ))}
            </div>
            {/* Pagination SEO-friendly */}
            <nav
              className='flex justify-center items-center gap-2 mb-8'
              aria-label='Pagination'
            >
              {page > 1 && (
                <a
                  href={`?page=${page - 1}`}
                  className='px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300'
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page - 1);
                  }}
                >
                  Précédent
                </a>
              )}
              {Array.from({ length: totalPages }).map((_, i) => (
                <a
                  key={i}
                  href={`?page=${i + 1}`}
                  aria-current={page === i + 1 ? 'page' : undefined}
                  className={`px-3 py-2 rounded ${
                    page === i + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(i + 1);
                  }}
                >
                  {i + 1}
                </a>
              ))}
              {page < totalPages && (
                <a
                  href={`?page=${page + 1}`}
                  className='px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300'
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  Suivant
                </a>
              )}
            </nav>
          </>
        )}
        <div className='flex items-start gap-8 relative'>
          {solutionCards.map((card) => (
            <div
              className='group flex flex-col items-start gap-8 px-8 py-4 relative h-[400px] rounded-lg shadow-shadow-1 hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer transition-colors bg-white text-dark-blue border-0'
              style={{
                transition: 'background 0.3s, color 0.3s',
                border: 'none',
              }}
              onMouseEnter={(e) => (
                (e.currentTarget.style.background = 'rgba(0,13,27,1)'),
                (e.currentTarget.style.color = 'white')
              )}
              onMouseLeave={(e) => (
                (e.currentTarget.style.background = 'white'),
                (e.currentTarget.style.color = '')
              )}
              key={card.id}
            >
              <Card className='flex flex-col items-start gap-8 p-0 relative h-full bg-transparent text-inherit shadow-none'>
                <CardContent className='p-0 flex flex-col h-full border-none'>
                  {card.id === 'connect' ? (
                    <svg
                      width='61'
                      height='61'
                      viewBox='0 0 61 61'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='relative w-[60px] h-[60px] transition-colors duration-300 group-hover:text-white group-hover:[&_*]:fill-white'
                    >
                      <path
                        d='M38.2316 22.0765C41.1339 22.0765 43.4867 19.7329 43.4867 16.842C43.4867 13.951 41.1339 11.6074 38.2316 11.6074C35.3293 11.6074 32.9766 13.951 32.9766 16.842C32.9766 19.7329 35.3293 22.0765 38.2316 22.0765Z'
                        fill='#000D1B'
                      />
                      <path
                        d='M23.3823 22.0749C26.2844 22.0749 28.6374 19.731 28.6374 16.8403C28.6374 13.9497 26.2844 11.6074 23.3823 11.6074C20.4803 11.6074 18.1289 13.9513 18.1289 16.842C18.1289 19.7327 20.4819 22.0765 23.384 22.0765L23.3823 22.0749Z'
                        fill='#000D1B'
                      />
                      <path
                        d='M34.1208 45.5346C34.1208 47.7962 35.9621 49.6303 38.2326 49.6303C40.503 49.6303 42.3443 47.7962 42.3443 45.5346V28.926H44.848L38.2326 23.2285L31.6172 28.926H34.1208V45.5346Z'
                        fill='#000D1B'
                      />
                      <path
                        d='M19.2693 45.5346C19.2693 47.7962 21.1106 49.6303 23.381 49.6303C25.6515 49.6303 27.4928 47.7962 27.4928 45.5346V28.926H29.9964L23.381 23.2285L16.7656 28.926H19.2693V45.5346Z'
                        fill='#000D1B'
                      />
                    </svg>
                  ) : card.id === 'explore' ? (
                    <svg
                      width='61'
                      height='61'
                      viewBox='0 0 61 61'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='relative w-[60px] h-[60px] transition-colors duration-300 group-hover:text-white group-hover:[&_*]:fill-white'
                    >
                      <path
                        d='M13.6973 45.7715C13.6973 48.0332 15.546 49.8673 17.8257 49.8673C20.1054 49.8673 21.9541 48.0332 21.9541 45.7715V29.1626H24.4678L17.8257 23.4648L11.1836 29.1626H13.6973V45.7715Z'
                        fill='#000D1B'
                      />
                      <path
                        d='M25.7422 45.7719C25.7422 48.0336 27.5909 49.8677 29.8706 49.8677C32.1504 49.8677 33.9991 48.0336 33.9991 45.7719V23.4986H36.5127L29.8706 17.8008L23.2285 23.4986H25.7422V45.7719Z'
                        fill='#000D1B'
                      />
                      <path
                        d='M34.8984 17.565H37.4121V45.7714C37.4121 48.0331 39.2608 49.8672 41.5405 49.8672C43.8203 49.8672 45.669 48.0331 45.669 45.7714V17.565H48.1827L41.5416 11.8672L34.8995 17.565H34.8984Z'
                        fill='#000D1B'
                      />
                    </svg>
                  ) : card.id === 'deploy' ? (
                    <svg
                      width='61'
                      height='61'
                      viewBox='0 0 61 61'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='relative w-[60px] h-[60px] transition-colors duration-300 group-hover:text-white group-hover:[&_*]:fill-white'
                    >
                      <path
                        d='M19.828 27.5222C21.7643 29.4585 24.9023 29.4585 26.8386 27.5222C28.7749 25.5859 28.7749 22.4479 26.8386 20.5116L20.3294 14.0024L22.4624 11.8672L11.9465 12.6312L11.1836 23.1471L13.3177 21.013L19.8269 27.5222H19.828Z'
                        fill='#000D1B'
                      />
                      <path
                        d='M40.0942 47.7884L37.9601 49.9225L48.476 49.1596L49.2389 38.6437L47.1048 40.7778L40.5956 34.2686C38.6593 32.3323 35.5213 32.3323 33.585 34.2686C31.6487 36.2049 31.6487 39.3429 33.585 41.2792L40.0942 47.7884Z'
                        fill='#000D1B'
                      />
                      <path
                        d='M33.585 27.5222C35.5213 29.4585 38.6593 29.4585 40.5956 27.5222L47.1048 21.013L49.2389 23.1471L48.476 12.6312L37.9601 11.8672L40.0942 14.0013L33.585 20.5105C31.6487 22.4467 31.6487 25.5848 33.585 27.5211V27.5222Z'
                        fill='#000D1B'
                      />
                      <path
                        d='M20.3283 47.7884L26.8375 41.2792C28.7737 39.3429 28.7737 36.2049 26.8375 34.2686C24.9012 32.3323 21.7632 32.3323 19.8269 34.2686L13.3177 40.7778L11.1836 38.6437L11.9465 49.1596L22.4624 49.9225L20.3283 47.7884Z'
                        fill='#000D1B'
                      />
                    </svg>
                  ) : (
                    <img
                      className='relative w-[60px] h-[60px] transition-colors duration-300 group-hover:invert'
                      alt={`Icon ${card.id}`}
                      src={card.icon}
                    />
                  )}

                  <div className='flex flex-col items-start gap-3.5 mt-8 flex-grow'>
                    <h3 className='relative w-fit mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)] transition-colors duration-300 group-hover:text-white'>
                      {card.title}
                    </h3>

                    <p className='relative w-[344px] font-body-big font-[number:var(--body-big-font-weight)] text-[length:var(--body-big-font-size)] tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] [font-style:var(--body-big-font-style)] transition-colors duration-300 group-hover:text-white'>
                      {card.description}
                    </p>
                  </div>

                  <div className='inline-flex items-center gap-2 mt-auto transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                    <span className='relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-white text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]'>
                      En savoir plus
                    </span>
                    <ArrowRightIcon className='w-3.5 h-3.5 text-white' />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

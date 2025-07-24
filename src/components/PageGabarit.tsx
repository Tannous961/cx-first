import { useState, useEffect } from 'react';
import { FilterBar } from './FilterBar';
import { BlogCard } from './BlogCard';

function getPageFromUrl() {
  if (typeof window === 'undefined') return 1;
  const params = new URLSearchParams('/');
  const page = parseInt(params.get('page') || '1', 10);
  return isNaN(page) || page < 1 ? 1 : page;
}

function slugify(text: string) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

export type Article = {
  image: string;
  badge: string;
  title: string;
  description: string;
  slug?: string;
};

type PageGabaritProps = {
  bannerTitle: string;
  bannerSubtitle: string;
  bannerImage: string;
  filters: string[];
  articles: Article[];
  articlesPerPage?: number;
};

export const PageGabarit: React.FC<PageGabaritProps> = ({
  bannerTitle,
  bannerSubtitle,
  bannerImage,
  filters,
  articles,
  articlesPerPage = 6,
}) => {
  const [selected, setSelected] = useState(filters[0]);
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const [page, setPage] = useState(getPageFromUrl());

  // useEffect(() => {
  //   const onPopState = () => setPage(getPageFromUrl());
  //   window.addEventListener('popstate', onPopState);
  //   return () => window.removeEventListener('popstate', onPopState);
  // }, []);

  // useEffect(() => {
  //   const currentSearch = window.location.search;
  //   const newSearch = page === 1 ? '' : `?page=${page}`;

  //   if (currentSearch !== newSearch) {
  //     window.history.pushState({}, '', newSearch);
  //   }
  // }, [page]);

  // Ajoute un slug à chaque article statique si absent
  const paginatedArticles = articles
    .slice((page - 1) * articlesPerPage, page * articlesPerPage)
    .map((article) => ({
      ...article,
      slug: article.slug || slugify(article.title),
    }));

  return (
    <main className='flex flex-col w-full min-h-screen bg-white overflow-hidden'>
      {/* Banner */}
      <section className='flex w-full h-[360px]'>
        <div className='flex flex-col justify-center px-16 py-4 w-1/2 bg-custom-hero-gradient text-white relative z-1'>
          <h1 className='text-5xl font-bold mb-8'>{bannerTitle}</h1>
          <p className='text-xl'>{bannerSubtitle}</p>
        </div>
        <div className='w-1/2 h-full relative'>
          <img
            src={bannerImage}
            alt={bannerTitle}
            className='object-cover w-full h-full'
            style={{ filter: 'brightness(0.7)' }}
          />
          <div className='absolute inset-0 bg-gradient-to-l from-transparent to-[#000d1b]' />
        </div>
      </section>
      {/* Filter */}
      <div className='flex justify-center'>
        <FilterBar
          filters={filters}
          selected={selected}
          onSelect={setSelected}
        />
      </div>
      {/* Articles grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full max-w-[1240px] mx-auto my-8 bg-white'>
        {paginatedArticles.map((article, idx) => (
          <BlogCard key={idx} {...article} />
        ))}
      </div>
      {/* Pagination */}
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
            href={i === 0 ? '' : `?page=${i + 1}`}
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
    </main>
  );
};

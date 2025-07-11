import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { FooterSection } from "./sections/FooterSection";
import ClientLogosSection from "./sections/ClientLogosSection";
import { FilterBar } from "../../components/FilterBar";
import { BlogCard } from "../../components/BlogCard";
import { useLocation } from "react-router-dom";

function getPageFromUrl() {
  if (typeof window === 'undefined') return 1;
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get('page') || '1', 10);
  return isNaN(page) || page < 1 ? 1 : page;
}

export default function TestimonialsPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lang = params.get("lang") || "fr";
  const filters = ["Tous", "Retail", "Banque", "Automobile", "Luxe", "Tech", "Autres"];
  const [selected, setSelected] = React.useState(filters[0]);

  // 9 articles fictifs
  const blogCards = [
    {
      image: "/alain-afflelou.png",
      badge: "Ipsum",
      title: "Optimiser votre expérience client avec Hippopotamus",
      description: "L'expérience client (CX) s'est imposée comme le différenciateur stratégique ultime dans un environnement où la concurrence est devenu le...",
    },
    {
      image: "/douglas-blanc.png",
      badge: "Dolor",
      title: "La data au service de la performance retail",
      description: "Découvrez comment la data permet d'optimiser les parcours clients et d'améliorer la performance commerciale dans le secteur du retail...",
    },
    {
      image: "/walibi.png",
      badge: "Sit",
      title: "Impliquer les équipes grâce à l'alerting et au suivi",
      description: "L'alerting et le suivi des plans d'actions sont essentiels pour embarquer les équipes et garantir la satisfaction client durablement...",
    },
    {
      image: "/about-office-1.jpg",
      badge: "Retail",
      title: "L'innovation dans le parcours client",
      description: "Comment innover dans le parcours client pour se différencier et fidéliser durablement ? Exemples concrets et retours d'expérience...",
    },
    {
      image: "/about-office-2.jpg",
      badge: "Banque",
      title: "Digitalisation de l'expérience bancaire",
      description: "La digitalisation transforme la relation client dans la banque. Découvrez les bonnes pratiques pour une expérience fluide et humaine...",
    },
    {
      image: "/about-office-3.jpg",
      badge: "Automobile",
      title: "L'expérience client dans l'automobile",
      description: "Du showroom à l'après-vente, chaque étape compte pour fidéliser les clients dans l'automobile. Nos conseils pour performer...",
    },
    {
      image: "/testimonials-hero.jpg",
      badge: "Luxe",
      title: "L'excellence du service dans le luxe",
      description: "Dans le secteur du luxe, l'excellence du service est un must. Découvrez comment les grandes maisons s'organisent...",
    },
    {
      image: "/about-people.jpg",
      badge: "Tech",
      title: "L'IA au service de la satisfaction client",
      description: "L'intelligence artificielle révolutionne la gestion de l'expérience client. Cas d'usage et retours terrain...",
    },
    {
      image: "/a-guy-.png",
      badge: "Autres",
      title: "L'importance de l'écoute client",
      description: "Écouter ses clients, c'est progresser. Méthodes et outils pour mieux capter la voix du client et agir efficacement...",
    },
  ];

  // Pagination
  const ARTICLES_PER_PAGE = 6;
  const totalPages = Math.ceil(blogCards.length / ARTICLES_PER_PAGE);
  const [page, setPage] = React.useState(getPageFromUrl());

  React.useEffect(() => {
    const onPopState = () => setPage(getPageFromUrl());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('lang', lang); // Toujours garder lang
    if (page > 1) {
      params.set('page', String(page));
    } else {
      params.delete('page');
    }
    const newSearch = `?${params.toString()}`;
    if (window.location.search !== newSearch) {
      window.history.pushState({}, '', newSearch);
    }
  }, [page, lang]);

  const paginatedCards = blogCards.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);

  return (
    <main className="flex flex-col w-full min-h-screen bg-white overflow-hidden">
      <HeaderSection />
      <section className="flex w-full h-[360px]">
        {/* Colonne gauche : dégradé + texte */}
        <div className="flex flex-col justify-center px-16 py-12 w-1/2 bg-custom-hero-gradient text-white relative z-1">
          <nav className="mb-4 text-sm opacity-80">
            <span className="opacity-70">🏠 &gt; </span>
            <a href="/ressources" className="underline">Ressources</a>
            <span> &gt; Témoignages</span>
          </nav>
          <h1 className="text-5xl font-bold mb-8">Témoignages</h1>
          <p className="text-xl">Découvrez les retours de nos clients</p>
        </div>
        {/* Colonne droite : image */}
        <div className="w-1/2 h-full relative">
          <img
            src="/testimonials-hero.jpg"
            alt="Clients heureux"
            className="object-cover w-full h-full"
            style={{ filter: "brightness(0.7)" }}
          />
          {/* Overlay dégradé pour fondu */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#000d1b]" />
        </div>
      </section>
      {/* Déplacement du filtre ici, juste sous la bannière */}
      <div className="flex justify-center">
        <FilterBar filters={filters} selected={selected} onSelect={setSelected} />
      </div>
      {/* Grille de 3 colonnes sous le filtre, fond blanc */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1240px] mx-auto my-8 bg-white">
        {paginatedCards.map((card, idx) => (
          <BlogCard key={idx} {...card} />
        ))}
      </div>
      {/* Pagination SEO-friendly */}
      <nav className="flex justify-center items-center gap-2 mb-8" aria-label="Pagination">
        {page > 1 && (
          <a
            href={`?page=${page - 1}`}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            onClick={e => { e.preventDefault(); setPage(page - 1); }}
          >
            Précédent
          </a>
        )}
        {Array.from({ length: totalPages }).map((_, i) => (
          <a
            key={i}
            href={`?page=${i + 1}`}
            aria-current={page === i + 1 ? 'page' : undefined}
            className={`px-3 py-2 rounded ${page === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={e => { e.preventDefault(); setPage(i + 1); }}
          >
            {i + 1}
          </a>
        ))}
        {page < totalPages && (
          <a
            href={`?page=${page + 1}`}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            onClick={e => { e.preventDefault(); setPage(page + 1); }}
          >
            Suivant
          </a>
        )}
      </nav>
      <ClientLogosSection />
      <FooterSection />
    </main>
  );
} 
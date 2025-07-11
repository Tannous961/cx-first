import React from "react";

interface BlogCardProps {
  image: string;
  badge: string;
  title: string;
  description: string;
  link?: string; // Pour un lien administrable plus tard
}

export const BlogCard: React.FC<BlogCardProps> = ({ image, badge, title, description, link }) => {
  return (
    <div
      className="relative group overflow-hidden rounded-2xl shadow-md bg-white transition-all duration-300 cursor-pointer"
      style={{ width: 400, height: 550 }}
      tabIndex={0}
      onClick={() => link && window.open(link, '_self')}
    >
      {/* Overlay blanc (sous l'image décorative) */}
      <div className="absolute inset-0 z-0 bg-white opacity-100 group-hover:opacity-0 transition-all duration-300" />
      {/* Image décorative toujours visible */}
      <img
        src="/lines right.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-0 z-10 pointer-events-none select-none"
        style={{ width: '70%', opacity: 1 }}
      />
      {/* Image de fond + overlay au hover */}
      <div className="absolute inset-0 z-20 transition-all duration-300 group-hover:opacity-100 opacity-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      {/* Contenu principal (au-dessus de tout) */}
      <div className="relative z-30 flex flex-col h-full" style={{paddingTop: '14.5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '4.5rem'}}>
        <span style={{ background: "#5DC2E4", color: "#000D1B", borderRadius: 12, padding: "2px 16px", fontSize: 14, fontWeight: 500, marginBottom: 16, alignSelf: 'flex-start' }}>
          {badge}
        </span>
        <h3 className="font-bold text-2xl mb-3 mt-0 leading-tight transition-colors duration-300 text-[#000D1B] group-hover:text-white">{title}</h3>
        <p className="text-base opacity-80 mb-4 transition-colors duration-300 text-[#000D1B] group-hover:text-white">{description}</p>
        {/* Lien 'En savoir plus' visible uniquement au hover */}
        <a
          href={link || '#'}
          tabIndex={-1}
          className="mt-auto text-[#5DC2E4] font-medium inline-flex items-center gap-1 group-hover:underline transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          onClick={e => { e.stopPropagation(); if (link) window.open(link, '_self'); }}
        >
          En savoir plus <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}; 
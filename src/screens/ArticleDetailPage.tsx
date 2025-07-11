import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderSection } from "./HomePage/sections/HeaderSection/HeaderSection";
import { FooterSection } from "./HomePage/sections/FooterSection";
import { strapiService, StrapiData, BlogArticle } from "../services/strapi";
import { CallToActionBanner } from "../components/CallToActionBanner";

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const [article, setArticle] = useState<StrapiData<BlogArticle> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Récupérer les données de fallback depuis le hash (pour les articles statiques)
  let fallbackData: { title: string; description: string; badge: string; image: string; author?: string } | null = null;
  if (typeof window !== 'undefined' && window.location.hash) {
    try {
      const hash = window.location.hash.replace(/^#/, '');
      fallbackData = JSON.parse(decodeURIComponent(escape(atob(hash))));
    } catch (e) {
      fallbackData = null;
    }
  }
  const title = fallbackData?.title || 'Titre de l\'article';
  const description = fallbackData?.description || 'Description de l\'article';
  const badge = fallbackData?.badge || 'Catégorie';
  const image = fallbackData?.image || '/about-office-1.jpg';
  const author = fallbackData?.author;

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const articleData = await strapiService.getBlogArticleBySlug(slug);
        setArticle(articleData);
      } catch (err) {
        console.error('Erreur lors du chargement de l\'article:', err);
        setError('Article non trouvé');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <main className="flex flex-col w-full min-h-screen bg-white overflow-hidden">
        <HeaderSection />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-lg">Chargement de l'article...</div>
        </div>
        <FooterSection />
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex flex-col w-full min-h-screen bg-white overflow-hidden">
        <HeaderSection />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-lg text-red-600">Erreur: {error}</div>
        </div>
        <FooterSection />
      </main>
    );
  }

  // Utiliser les données Strapi si disponibles, sinon les paramètres d'URL
  const articleTitle = article?.title || title;
  const articleDescription = article?.description || description;
  const articleBadge = article?.badge || badge;
  const articleImage = article?.image 
    ? strapiService.getImageUrl(article.image, 'large')
    : image;
  const articleContent = article?.content || '';

  // Cherche la première image du dynamic zone blog.image
  const firstImageBlock = Array.isArray(article?.textbody)
    ? article.textbody.find(block =>
        block.__component === 'blog.image' &&
        block.image &&
        block.image.data &&
        block.image.data.attributes?.url
      )
    : null;
  const firstImageUrl = firstImageBlock
    ? `http://localhost:1337${firstImageBlock.image.data.attributes.url}`
    : null;

  return (
    <main className="flex flex-col w-full min-h-screen bg-white overflow-hidden">
      <HeaderSection />

      {/* Banner split design */}
      <section className="flex w-full h-[360px]">
        {/* Colonne gauche : dégradé + texte */}
        <div className="flex flex-col justify-center px-16 py-12 w-1/2 bg-custom-hero-gradient text-white relative z-1">
          <nav className="mb-4 text-sm opacity-80">
            <span className="opacity-70">🏠 &gt; </span>
            <a href="/blogs" className="underline">Blogs</a>
            <span> &gt; {articleTitle}</span>
          </nav>
          <span
            style={{
              background: "#5DC2E4",
              color: "#000D1B",
              borderRadius: 12,
              padding: "2px 16px",
              fontSize: 14,
              fontWeight: 500,
              marginBottom: 16,
              alignSelf: 'flex-start',
              position: 'relative',
              zIndex: 20
            }}
          >
            {articleBadge}
          </span>
          <h1 className="text-5xl font-bold mb-2">{articleTitle}</h1>
          {/* Affichage de la première image du dynamic zone */}
          {firstImageUrl && (
            <div className="flex justify-center my-8">
              <img
                src={firstImageUrl}
                alt="Image principale de l'article"
                style={{ maxWidth: 500, width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
                className="rounded-lg"
              />
            </div>
          )}
          <div style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: 400,
            marginBottom: 12
          }}>
            {(() => {
              const a = article?.author || author;
              if (!a) return null;
              let nom = null;
              if (typeof a === 'string') nom = a;
              else if (typeof a === 'object') {
                if (a.data && a.data.attributes) {
                  const attrs = a.data.attributes;
                  nom = attrs.nom || attrs.name || attrs.username || (attrs.firstname && attrs.lastname ? attrs.firstname + ' ' + attrs.lastname : attrs.firstname) || null;
                } else {
                  nom = a.nom || a.name || a.username || (a.firstname && a.lastname ? a.firstname + ' ' + a.lastname : a.firstname) || null;
                }
              }
              return nom ? `Créé par ${nom}` : null;
            })()}
          </div>
          <p className="text-xl">{articleDescription}</p>
        </div>
        {/* Colonne droite : image */}
        <div className="w-1/2 h-full relative">
          <img
            src={articleImage}
            alt={articleTitle}
            className="object-cover w-full h-full"
            style={{ filter: "brightness(0.7)" }}
          />
          {/* Overlay dégradé pour fondu */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#000d1b]" />
        </div>
      </section>

      {/* Article Content */}
      <section className="flex flex-col items-center py-16 px-[30px] bg-white">
        <div className="max-w-4xl w-full">
          <div className="prose prose-lg max-w-none">
            {articleContent ? (
              <div 
                className="text-lg text-grey leading-relaxed"
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
            ) : null}
            {/* Affichage de la première image du dynamic zone après le texte principal */}
            {firstImageUrl && (
              <div className="flex justify-center my-8">
                <img
                  src={firstImageUrl}
                  alt="Image principale de l'article"
                  style={{ maxWidth: 500, width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
                  className="rounded-lg"
                />
              </div>
            )}
            {/* Mapping dynamique de tous les blocs de la dynamic zone */}
            {Array.isArray(article?.textbody) && article.textbody.map((block, idx) => {
              // Bloc image
              if (block.__component === 'blog.image') {
                // Gestion image Strapi v5 (direct ou imbriqué)
                let imageUrl = null;
                if (block.image && block.image.url) {
                  imageUrl = `http://localhost:1337${block.image.url}`;
                } else if (block.image && block.image.data && block.image.data.attributes?.url) {
                  imageUrl = `http://localhost:1337${block.image.data.attributes.url}`;
                }
                if (imageUrl) {
                  return (
                    <div key={idx} className="my-8 flex justify-center">
                      <img
                        src={imageUrl}
                        alt={block.image.alternativeText || ''}
                        style={{ maxWidth: 600, width: '100%' }}
                        className="rounded-lg shadow"
                      />
                    </div>
                  );
                }
                return null;
              }
              // Bloc texte gauche
              if (block.__component === 'blog.text-left') {
                let imageUrl = null;
                if (block.image && block.image.url) {
                  imageUrl = `http://localhost:1337${block.image.url}`;
                } else if (block.image && block.image.data && block.image.data.attributes?.url) {
                  imageUrl = `http://localhost:1337${block.image.data.attributes.url}`;
                }
                return (
                  <div key={idx} className="mb-8">
                    {block.title && (
                      <div className="mb-2 text-xl font-bold text-dark-blue">{block.title}</div>
                    )}
                    {block.description && (
                      <div className="mb-4 text-lg text-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: block.description }} />
                    )}
                    {imageUrl && (
                      <div className="mb-4 flex justify-center">
                        <img
                          src={imageUrl}
                          alt={block.image?.alternativeText || 'Image du bloc texte'}
                          style={{ maxWidth: 600, width: '100%' }}
                          className="rounded-lg shadow"
                        />
                      </div>
                    )}
                  </div>
                );
              }
              // Bloc texte droite
              if (block.__component === 'blog.text-right') {
                let imageUrl = null;
                if (block.image && block.image.url) {
                  imageUrl = `http://localhost:1337${block.image.url}`;
                } else if (block.image && block.image.data && block.image.data.attributes?.url) {
                  imageUrl = `http://localhost:1337${block.image.data.attributes.url}`;
                }
                return (
                  <div key={idx} className="mb-8">
                    {block.title && (
                      <div className="mb-2 text-xl font-bold text-dark-blue">{block.title}</div>
                    )}
                    {block.description && (
                      <div className="mb-4 text-lg text-grey leading-relaxed">{block.description}</div>
                    )}
                    {imageUrl && (
                      <div className="mb-4 flex justify-center">
                        <img
                          src={imageUrl}
                          alt={block.image?.alternativeText || 'Image du bloc texte'}
                          style={{ maxWidth: 600, width: '100%' }}
                          className="rounded-lg shadow"
                        />
                      </div>
                    )}
                  </div>
                );
              }
              // Bloc vidéo oEmbed
              if (block.__component === 'blog.video-zone' && block.video && block.video.html) {
                return (
                  <div key={idx} className="my-8 flex justify-center">
                    <div style={{ width: '100%', maxWidth: 800 }}>
                      <div dangerouslySetInnerHTML={{ __html: block.video.html }} />
                    </div>
                  </div>
                );
              }
              // Ajoute d'autres types de blocs ici si besoin
              return null;
            })}
          </div>

          {/* Call to Action */}
          <CallToActionBanner
            buttonLabel="Echangez avec un expert"
            onButtonClick={() => window.location.href = "/contact"}
            className="mt-12"
          />
        </div>
      </section>

      <FooterSection />
    </main>
  );
} 
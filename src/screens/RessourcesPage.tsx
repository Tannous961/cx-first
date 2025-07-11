import React from "react";
import { Layout } from "../components/Layout";
import { PageGabarit, Article } from "../components/PageGabarit";

const articles: Article[] = [
  {
    image: "/alain-afflelou.png",
    badge: "Livre blanc",
    title: "Livre blanc CX 2024",
    description: "Téléchargez notre livre blanc sur les tendances de l'expérience client en 2024...",
  },
  {
    image: "/douglas-blanc.png",
    badge: "Guide",
    title: "Guide de la transformation digitale",
    description: "Un guide complet pour réussir votre transformation digitale...",
  },
  {
    image: "/walibi.png",
    badge: "Webinar",
    title: "Webinar : Data et performance",
    description: "Revoir notre webinar sur l'usage de la data pour booster la performance...",
  },
  {
    image: "/about-office-1.jpg",
    badge: "Étude",
    title: "Étude sectorielle 2024",
    description: "Analyse des grandes tendances sectorielles de l'année...",
  },
  {
    image: "/about-office-2.jpg",
    badge: "Infographie",
    title: "Infographie : Parcours client",
    description: "Visualisez les étapes clés du parcours client en 2024...",
  },
  {
    image: "/about-office-3.jpg",
    badge: "Podcast",
    title: "Podcast : Voix du client",
    description: "Écoutez nos experts parler de la voix du client et de l'innovation...",
  },
  {
    image: "/testimonials-hero.jpg",
    badge: "Livre blanc",
    title: "Livre blanc Data & IA",
    description: "Tout savoir sur l'impact de la data et de l'IA dans l'expérience client...",
  },
  {
    image: "/about-people.jpg",
    badge: "Guide",
    title: "Guide pratique de l'omnicanal",
    description: "Les bonnes pratiques pour une stratégie omnicanale réussie...",
  },
  {
    image: "/a-guy-.png",
    badge: "Autres",
    title: "Ressources complémentaires",
    description: "Retrouvez ici tous nos contenus additionnels et bonus...",
  },
];

const filters = ["Tous", "Livre blanc", "Guide", "Webinar", "Étude", "Infographie", "Podcast", "Autres"];

export default function RessourcesPage() {
  return (
    <Layout>
      <PageGabarit
        bannerTitle="Ressources"
        bannerSubtitle="Accédez à tous nos contenus, guides, livres blancs, études et plus encore."
        bannerImage="/about-office-3.jpg"
        filters={filters}
        articles={articles}
      />
    </Layout>
  );
} 
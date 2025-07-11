import React from "react";
import { Layout } from "../components/Layout";
import { PageGabarit, Article } from "../components/PageGabarit";

const articles: Article[] = [
  {
    image: "/alain-afflelou.png",
    badge: "Retail",
    title: "Transformation digitale du retail",
    description: "Découvrez comment le secteur du retail se réinvente grâce à la digitalisation et à l'expérience client...",
  },
  {
    image: "/douglas-blanc.png",
    badge: "Banque",
    title: "Banque et innovation numérique",
    description: "Les banques accélèrent leur transformation digitale pour répondre aux nouveaux usages...",
  },
  {
    image: "/walibi.png",
    badge: "Automobile",
    title: "L'automobile à l'ère de la data",
    description: "La data révolutionne la relation client dans l'automobile. Exemples concrets...",
  },
  {
    image: "/about-office-1.jpg",
    badge: "Luxe",
    title: "Luxe et personnalisation de l'expérience",
    description: "Dans le luxe, chaque détail compte pour fidéliser une clientèle exigeante...",
  },
  {
    image: "/about-office-2.jpg",
    badge: "Tech",
    title: "Tech et nouveaux usages",
    description: "La tech bouleverse tous les secteurs d'activité. Découvrez les tendances...",
  },
  {
    image: "/about-office-3.jpg",
    badge: "Retail",
    title: "Omnicanal et expérience client",
    description: "L'omnicanal s'impose comme la norme dans le retail moderne...",
  },
  {
    image: "/testimonials-hero.jpg",
    badge: "Banque",
    title: "Sécurité et confiance dans la banque digitale",
    description: "La sécurité des données est un enjeu clé pour la banque digitale...",
  },
  {
    image: "/about-people.jpg",
    badge: "Automobile",
    title: "Nouveaux parcours d'achat automobile",
    description: "Le parcours client automobile se digitalise et s'enrichit...",
  },
  {
    image: "/a-guy-.png",
    badge: "Autres",
    title: "Secteurs émergents et innovation",
    description: "Zoom sur les secteurs émergents et les innovations qui les transforment...",
  },
];

const filters = ["Tous", "Retail", "Banque", "Automobile", "Luxe", "Tech", "Autres"];

export default function SecteursPage() {
  return (
    <Layout>
      <PageGabarit
        bannerTitle="Secteurs d'activité"
        bannerSubtitle="Découvrez comment chaque secteur se transforme grâce à l'innovation et à l'expérience client."
        bannerImage="/about-office-2.jpg"
        filters={filters}
        articles={articles}
      />
    </Layout>
  );
} 
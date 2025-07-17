import React from "react";
import { Layout } from "../components/Layout";
import { PageGabarit, Article } from "../components/PageGabarit";
import { ContactUsSection } from "./HomePage/sections/ContactUsSection/ContactUsSection";

const articles: Article[] = [
  {
    image: "/alain-afflelou.png",
    badge: "Tech",
    title: "Les tendances de l'IA en 2024",
    description: "Découvrez comment l'intelligence artificielle transforme l'expérience client et les nouveaux usages en entreprise...",
  },
  {
    image: "/douglas-blanc.png",
    badge: "Data",
    title: "Exploiter la data pour booster la performance",
    description: "La data est au cœur de la stratégie des entreprises modernes. Voici comment l'utiliser efficacement...",
  },
  {
    image: "/walibi.png",
    badge: "Retail",
    title: "L'omnicanal dans le retail : bonnes pratiques",
    description: "L'omnicanal est devenu incontournable pour offrir une expérience client fluide et personnalisée...",
  },
  {
    image: "/about-office-1.jpg",
    badge: "Banque",
    title: "La digitalisation du secteur bancaire",
    description: "La transformation digitale bouleverse la banque. Découvrez les enjeux et opportunités...",
  },
  {
    image: "/about-office-2.jpg",
    badge: "Luxe",
    title: "L'expérience client dans le luxe",
    description: "Dans le secteur du luxe, chaque détail compte pour fidéliser une clientèle exigeante...",
  },
  {
    image: "/about-office-3.jpg",
    badge: "Tech",
    title: "Automatiser le support client avec les chatbots",
    description: "Les chatbots révolutionnent la relation client. Voici comment les intégrer efficacement...",
  },
  {
    image: "/testimonials-hero.jpg",
    badge: "Data",
    title: "RGPD : comment rester conforme ?",
    description: "Le RGPD impose de nouvelles règles sur la gestion des données. Nos conseils pour rester conforme...",
  },
  {
    image: "/about-people.jpg",
    badge: "Retail",
    title: "Le phygital, nouvelle norme du commerce ?",
    description: "Le phygital combine le meilleur du physique et du digital pour une expérience client enrichie...",
  },
  {
    image: "/a-guy-.png",
    badge: "Autres",
    title: "L'importance de la formation continue",
    description: "Former ses équipes est essentiel pour rester compétitif dans un monde en mutation...",
  },
];

const filters = ["Tous", "Tech", "Data", "Retail", "Banque", "Luxe", "Autres"];

export default function BlogsPage() {
  return (
    <Layout>
      <PageGabarit
        bannerTitle="Blogs"
        bannerSubtitle="Retrouvez nos articles, analyses et conseils sur l'expérience client, la data, la tech et plus encore."
        bannerImage="/testimonials-hero.jpg"
        filters={filters}
        articles={articles}
      />
      <ContactUsSection />
    </Layout>
  );
} 
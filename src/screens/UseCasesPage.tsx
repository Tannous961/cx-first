import React from "react";
import { Layout } from "../components/Layout";
import { PageGabarit, Article } from "../components/PageGabarit";
import { ContactUsSection } from "./HomePage/sections/ContactUsSection/ContactUsSection";

const articles: Article[] = [
  {
    image: "/alain-afflelou.png",
    badge: "Retail",
    title: "Optimiser le parcours client en magasin",
    description: "Découvrez comment une grande enseigne a transformé l'expérience d'achat grâce à la data et à l'omnicanal...",
  },
  {
    image: "/douglas-blanc.png",
    badge: "Banque",
    title: "Digitaliser l'ouverture de compte bancaire",
    description: "Un cas d'usage concret de digitalisation pour fluidifier l'entrée en relation client...",
  },
  {
    image: "/walibi.png",
    badge: "Automobile",
    title: "Suivi de la satisfaction après-vente",
    description: "Comment un constructeur automobile a mis en place un système de feedback client efficace...",
  },
  {
    image: "/about-office-1.jpg",
    badge: "Luxe",
    title: "Personnalisation de l'expérience VIP",
    description: "Dans le luxe, la personnalisation est clé. Exemple d'une maison qui a digitalisé son accueil VIP...",
  },
  {
    image: "/about-office-2.jpg",
    badge: "Tech",
    title: "Automatisation du support technique",
    description: "Un éditeur SaaS a réduit ses délais de réponse grâce à l'IA et aux chatbots...",
  },
  {
    image: "/about-office-3.jpg",
    badge: "Retail",
    title: "Gestion des stocks en temps réel",
    description: "Un retailer a optimisé sa logistique grâce à la data et à l'IoT...",
  },
  {
    image: "/testimonials-hero.jpg",
    badge: "Banque",
    title: "Analyse prédictive du churn client",
    description: "La banque a anticipé les départs clients grâce à la data science...",
  },
  {
    image: "/about-people.jpg",
    badge: "Automobile",
    title: "Expérience connectée en concession",
    description: "Mise en place d'un parcours digitalisé pour les clients en concession automobile...",
  },
  {
    image: "/a-guy-.png",
    badge: "Autres",
    title: "Centralisation des feedbacks multicanaux",
    description: "Une entreprise a regroupé tous ses retours clients pour une vision 360°...",
  },
];

const filters = ["Tous", "Retail", "Banque", "Automobile", "Luxe", "Tech", "Autres"];

export default function UseCasesPage() {
  return (
    <Layout>
      <PageGabarit
        bannerTitle="Use Cases"
        bannerSubtitle="Découvrez des cas d'usage concrets de nos solutions et l'impact chez nos clients."
        bannerImage="/about-office-1.jpg"
        filters={filters}
        articles={articles}
      />
      <ContactUsSection />
    </Layout>
  );
} 
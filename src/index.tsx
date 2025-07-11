import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./screens/HomePage";
import { PlateformePage } from "./screens/HomePage";
import { AboutPage } from "./screens/HomePage";
import { TestimonialsPage } from "./screens/HomePage";
import BlogsPage from "./screens/BlogsPage";
import UseCasesPage from "./screens/UseCasesPage";
import SecteursPage from "./screens/SecteursPage";
import RessourcesPage from "./screens/RessourcesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageRedirector } from "./LanguageRedirector";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageRedirector />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plateforme" element={<PlateformePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/temoignages" element={<TestimonialsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/secteurs" element={<SecteursPage />} />
        <Route path="/ressources" element={<RessourcesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

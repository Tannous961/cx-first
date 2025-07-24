
import { ApiImage, getApiData } from "./api";

export type FooterData = {
  id: number;
  documentId: string;
  Newsletter: string;
  Product: string;
  Legal: string;
  Social: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  newsletterTitle: string | null;
  productTitle: string | null;
  legalTitle: string | null;
  socialTitle: string | null;
};

export const getFooterData = async (lang: string) => {
  return await getApiData<FooterData>('footer', lang);
};

export type GlobalData = {
  id: number;
  documentId: string;
  siteName: string;
  siteDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  favicon: ApiImage | null;
  defaultSeo: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    shareImage: ApiImage | null;
  }
};

export const getGlobalData = async (lang: string) => {
  return await getApiData<GlobalData>('global', lang, ['favicon', 'defaultSeo.shareImage']);
};
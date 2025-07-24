
import { getApiData } from "./api";

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
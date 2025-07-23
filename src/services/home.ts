
import { getApiData } from "./api";

export type HomePageData = {
  title?: string;
  description?: string;
  hero_title?: string;
  hero_subtitle?: string;
}

export const getHomePageData = async (lang: string) => {
  return await getApiData<HomePageData>('home', lang);
}

export type EchangeExpert = {
  title?: string;
  description?: string;
  hero_title?: string;
  hero_subtitle?: string;
}

export const getEchangeExpertData = async (lang: string) => {
  return await getApiData<EchangeExpert>('echange-expert', lang);
}
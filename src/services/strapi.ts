import { API_URL } from '../lib/config';

// Types pour les données Strapi
export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface StrapiResponse<T> {
  data: StrapiData<T> | StrapiData<T>[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface BlogArticle {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  featured: boolean;
  image?: {
    data: {
      attributes: {
        url: string;
        formats?: {
          thumbnail?: { url: string };
          small?: { url: string };
          medium?: { url: string };
          large?: { url: string };
        };
      };
    };
  };
  textbody?: any[];
  badge?: string;
  description?: string;
  author?: string;
}

export interface Button {
  title: string;
  url: string;
  style: string;
  order: number;
}

class StrapiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_URL;
  }

  // Méthode générique pour faire des appels API
  private async fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Erreur lors de l'appel API ${endpoint}:`, error);
      throw error;
    }
  }

  // Récupérer tous les articles de blog
  async getBlogArticles(locale: string = 'fr'): Promise<StrapiResponse<BlogArticle>> {
    return this.fetchAPI<StrapiResponse<BlogArticle>>(`/api/blogs?locale=${locale}&populate=*&sort=publishedAt:desc`);
  }

  // Récupérer un article par son slug
  async getBlogArticleBySlug(slug: string, locale: string = 'fr'): Promise<BlogArticle> {
    const response = await this.fetchAPI<StrapiResponse<BlogArticle>>(
      `/api/blogs?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`
    );
    
    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data[0].attributes;
    }
    
    throw new Error(`Article avec le slug "${slug}" non trouvé`);
  }

  // Récupérer les articles mis en avant
  async getFeaturedBlogArticles(locale: string = 'fr'): Promise<StrapiResponse<BlogArticle>> {
    return this.fetchAPI<StrapiResponse<BlogArticle>>(
      `/api/blogs?filters[featured][$eq]=true&locale=${locale}&populate=*&sort=publishedAt:desc`
    );
  }

  // Récupérer tous les boutons
  async getButtons(locale: string = 'fr'): Promise<StrapiResponse<Button>> {
    return this.fetchAPI<StrapiResponse<Button>>(`/api/buttons?locale=${locale}&sort=order:asc`);
  }

  // Récupérer les données d'échange expert
  async getEchangeExpert(locale: string = 'fr'): Promise<any> {
    return this.fetchAPI(`/api/echange-expert?locale=${locale}&populate=*`);
  }

  // Méthode pour construire l'URL d'une image
  getImageUrl(image: any, format: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'): string {
    if (!image?.data?.attributes?.url) {
      return '';
    }

    const baseUrl = this.baseURL;
    const imageUrl = image.data.attributes.url;
    
    // Si un format spécifique est demandé et disponible
    if (format && image.data.attributes.formats?.[format]?.url) {
      return `${baseUrl}${image.data.attributes.formats[format].url}`;
    }
    
    // Sinon, retourner l'image originale
    return `${baseUrl}${imageUrl}`;
  }

  // Méthode pour vérifier la connexion à Strapi
  async checkConnection(): Promise<boolean> {
    try {
      await this.fetchAPI('/api/blogs?pagination[limit]=1');
      return true;
    } catch (error) {
      console.error('Impossible de se connecter à Strapi:', error);
      return false;
    }
  }
}

// Instance singleton du service
export const strapiService = new StrapiService(); 
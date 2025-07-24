import { API_URL, STRAPI_CACHE_ENABLED } from '@/lib/config';

export type ApiResult<T> = {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type ApiImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export type ApiImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: ApiImageFormat;
    small?: ApiImageFormat;
    medium?: ApiImageFormat;
    large?: ApiImageFormat;
    [key: string]: ApiImageFormat | undefined;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: object | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export const getApiData = async <T>(
  endpoint: string,
  lang: string,
  populate?: string | string[]
): Promise<ApiResult<T> | null> => {
  try {
    const params = new URLSearchParams();
    params.append('lang', lang);
    if (populate) {
      if (typeof populate === 'string') {
        params.append('populate', populate);
      }
      else if (Array.isArray(populate)) {
        for (let i = 0; i < populate.length; i++) {
          const pop = populate[i];
          params.append(`populate[${i}]`, pop);
        }
      }
    }
    const response = await fetch(
      `${API_URL}/api/${endpoint}?${params.toString()}`,
      { next: { revalidate: STRAPI_CACHE_ENABLED ? 3600 : 0 } }
    );

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();
    return data as ApiResult<T>;
  } catch (error) {
    console.error(error);
    return null;
  }
};

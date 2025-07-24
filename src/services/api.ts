import { API_URL } from '@/lib/config';

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

export const getApiData = async <T>(
  endpoint: string,
  lang: string,
  populate?: string
): Promise<ApiResult<T> | null> => {
  try {
    const params = new URLSearchParams();
    params.append('lang', lang);
    if (populate) {
      params.append('populate', populate);
    }
    const response = await fetch(
      `${API_URL}/api/${endpoint}?${params.toString()}`,
      { next: { revalidate: 3600 } }
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

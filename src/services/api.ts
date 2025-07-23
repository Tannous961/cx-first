
import { API_URL } from "@/lib/config";

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
}

export const getApiData = async <T>(endpoint: string, lang: string): Promise<ApiResult<T> | null> => {
  try {
    const response = await fetch(`${API_URL}/api/${endpoint}?locale=${lang}`, { next: { revalidate: 3600 } });

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();

    return data as ApiResult<T>;
  } catch (error) {
    console.error(error);
    return null;
  }
}
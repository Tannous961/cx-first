interface ImportMeta {
  readonly env: {
    VITE_API_URL?: string;
    [key: string]: any;
  };
}

export const API_URL = import.meta.env.VITE_API_URL || "https://patient-respect-ce095df2e7.strapiapp.com/api"; 
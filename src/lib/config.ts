interface ImportMeta {
  readonly env: {
    VITE_API_URL?: string;
    [key: string]: any;
  };
}

export const API_URL = import.meta.env.VITE_API_URL || "https://cx-first-qualimetrie.vercel.app"; 
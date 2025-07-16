interface ImportMeta {
  readonly env: {
    VITE_API_URL?: string;
    DEV?: boolean;
    [key: string]: any;
  };
}

// Configuration des environnements
const environment = {
  development: {
    apiUrl: 'http://localhost:1337',
  },
  production: {
    apiUrl: 'https://votre-strapi-deploye.com', // À remplacer par votre URL Strapi déployée
  }
};

// Détection de l'environnement
const isDevelopment = import.meta.env.DEV;
const currentEnv = isDevelopment ? 'development' : 'production';

// URL de l'API Strapi (priorité aux variables d'environnement)
export const API_URL = import.meta.env.VITE_API_URL || environment[currentEnv].apiUrl;

console.log(`🚀 Environnement: ${currentEnv}`);
console.log(`🔗 API URL: ${API_URL}`); 
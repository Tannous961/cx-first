// Configuration des environnements
const environment = {
  development: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337',
  },
  production: {
    apiUrl: 'https://votre-strapi-deploye.com', // À remplacer par votre URL Strapi déployée
  }
};

// Détection de l'environnement
const isDevelopment = process.env.NODE_ENV === 'development';
const currentEnv = isDevelopment ? 'development' : 'production';

// URL de l'API Strapi (priorité aux variables d'environnement)
export const API_URL = process.env.NEXT_PUBLIC_API_URL || environment[currentEnv].apiUrl;

console.log(`🚀 Environnement: ${currentEnv}`);
console.log(`🔗 API URL: ${API_URL}`); 

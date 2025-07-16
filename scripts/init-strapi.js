import axios from 'axios';

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

console.log('🔗 Connexion à Strapi:', STRAPI_URL);

// Données de test pour les articles
const testArticles = [
  {
    title: "Comment optimiser votre transformation digitale",
    slug: "optimiser-transformation-digitale",
    content: "La transformation digitale est devenue essentielle pour les entreprises modernes. Dans cet article, nous explorons les meilleures pratiques pour optimiser votre processus de transformation...",
    excerpt: "Découvrez les stratégies clés pour réussir votre transformation digitale et améliorer la performance de votre entreprise.",
    publishedAt: new Date().toISOString(),
    featured: true
  },
  {
    title: "Les tendances de l'IA en 2024",
    slug: "tendances-ia-2024",
    content: "L'intelligence artificielle continue d'évoluer rapidement. Voici les principales tendances à surveiller en 2024...",
    excerpt: "Explorez les innovations les plus prometteuses en intelligence artificielle pour l'année 2024.",
    publishedAt: new Date().toISOString(),
    featured: false
  },
  {
    title: "Guide complet du customer experience",
    slug: "guide-customer-experience",
    content: "L'expérience client est au cœur de la réussite commerciale. Ce guide complet vous accompagne dans l'amélioration de votre CX...",
    excerpt: "Maîtrisez l'art de l'expérience client avec ce guide complet et pratique.",
    publishedAt: new Date().toISOString(),
    featured: true
  }
];

// Données de test pour les boutons
const testButtons = [
  {
    title: "Découvrir nos solutions",
    url: "/solutions",
    style: "primary",
    order: 1
  },
  {
    title: "Témoignages clients",
    url: "/temoignages",
    style: "secondary",
    order: 2
  },
  {
    title: "Contactez-nous",
    url: "/contact",
    style: "primary",
    order: 3
  }
];

async function createContentType(api, data, contentType) {
  try {
    const response = await api.post(`/api/${contentType}`, {
      data: data
    });
    console.log(`✅ ${contentType} créé:`, response.data.data.attributes.title || response.data.data.attributes.name);
    return response.data;
  } catch (error) {
    if (error.response?.status === 400 && error.response?.data?.error?.message?.includes('already exists')) {
      console.log(`⚠️ ${contentType} existe déjà`);
      return null;
    }
    console.error(`❌ Erreur lors de la création du ${contentType}:`, error.response?.data || error.message);
    return null;
  }
}

async function initStrapi() {
  console.log('🚀 Initialisation de Strapi avec des données de test...');
  
  const api = axios.create({
    baseURL: STRAPI_URL,
    timeout: 10000
  });

  // Créer les articles
  console.log('\n📝 Création des articles...');
  for (const article of testArticles) {
    await createContentType(api, article, 'blogs');
  }

  // Créer les boutons
  console.log('\n🔘 Création des boutons...');
  for (const button of testButtons) {
    await createContentType(api, button, 'buttons');
  }

  console.log('\n✅ Initialisation terminée !');
  console.log('\n📋 Prochaines étapes :');
  console.log('1. Ouvrez http://localhost:1337/admin');
  console.log('2. Connectez-vous avec les identifiants par défaut');
  console.log('3. Configurez les permissions dans Settings > Users & Permissions Plugin');
  console.log('4. Testez l\'API sur http://localhost:1337/api/blogs');
}

// Vérifier si Strapi est accessible
async function checkStrapiConnection() {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/blogs`);
    console.log('✅ Strapi est accessible');
    return true;
  } catch (error) {
    console.error('❌ Strapi n\'est pas accessible. Assurez-vous qu\'il est démarré sur http://localhost:1337');
    return false;
  }
}

// Exécuter le script
async function main() {
  const isConnected = await checkStrapiConnection();
  if (isConnected) {
    await initStrapi();
  }
}

// Exécuter le script
main().catch(console.error);

export { initStrapi, testArticles, testButtons }; 
# Configuration Strapi pour CX First

Ce guide vous explique comment connecter votre Strapi local au frontend CX First et le déployer sur Vercel.

## 🚀 Étapes à suivre - Guide complet

### **Étape 1 : Préparer votre Strapi local**

#### 1.1 Démarrer votre Strapi
```bash
<code_block_to_apply_changes_from>
```

Votre Strapi doit être accessible sur `http://localhost:1337`

#### 1.2 Créer les Content Types dans Strapi

Connectez-vous à l'admin Strapi (`http://localhost:1337/admin`) et créez :

**Content Type "Blog" :**
```json
{
  "title": "Text (required)",
  "slug": "UID (required)",
  "content": "Rich Text",
  "excerpt": "Text",
  "publishedAt": "DateTime",
  "featured": "Boolean",
  "image": "Media",
  "badge": "Text",
  "description": "Text",
  "author": "Text"
}
```

**Content Type "Button" :**
```json
{
  "title": "Text (required)",
  "url": "Text (required)",
  "style": "Text",
  "order": "Number"
}
```

**Content Type "Echange Expert" :**
```json
{
  "title": "Text",
  "description": "Rich Text",
  "hero_title": "Text",
  "hero_subtitle": "Text"
}
```

#### 1.3 Configurer les permissions
1. Settings → Users & Permissions Plugin
2. Roles → Public
3. Activez pour chaque content type :
   - ✅ Blogs: `find`, `findOne`
   - ✅ Buttons: `find`, `findOne`
   - ✅ Echange Expert: `find`, `findOne`

### **Étape 2 : Configurer le frontend local**

#### 2.1 Créer le fichier .env.local
```bash
# Dans le dossier cx-first
cd /Users/tmekari/Documents/GitHub/cx-first

# Créer le fichier .env.local
echo "VITE_API_URL=http://localhost:1337" > .env.local
```

#### 2.2 Installer les dépendances
```bash
npm install
```

#### 2.3 Initialiser les données de test
```bash
npm run init-strapi
```

Vous devriez voir :
```
 Connexion à Strapi: http://localhost:1337
🚀 Initialisation de Strapi avec des données de test...
📝 Création des articles...
✅ blogs créé: Comment optimiser votre transformation digitale
✅ blogs créé: Les tendances de l'IA en 2024
✅ blogs créé: Guide complet du customer experience
🔘 Création des boutons...
✅ buttons créé: Découvrir nos solutions
✅ buttons créé: Témoignages clients
✅ buttons créé: Contactez-nous
✅ Initialisation terminée !
```

#### 2.4 Tester en local
```bash
npm run dev
```

Ouvrez `http://localhost:5173` et vérifiez que tout fonctionne.

### **Étape 3 : Déployer Strapi**

#### 3.1 Choisir une plateforme

**Option A : Railway (Recommandé)**
1. Allez sur [railway.app](https://railway.app)
2. Connectez-vous avec GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Sélectionnez votre repo Strapi
5. Railway détecte automatiquement que c'est un projet Node.js

**Option B : Render**
1. Allez sur [render.com](https://render.com)
2. "New" → "Web Service"
3. Connectez votre repo GitHub
4. Configuration :
   - **Name** : `cx-first-strapi`
   - **Environment** : `Node`
   - **Build Command** : `npm install`
   - **Start Command** : `npm start`

#### 3.2 Configurer les variables d'environnement sur la plateforme

**Sur Railway :**
- `NODE_ENV=production`
- `DATABASE_URL` (fourni automatiquement)

**Sur Render :**
- `NODE_ENV=production`
- `DATABASE_URL` (fourni automatiquement)

#### 3.3 Obtenir l'URL de votre Strapi déployé

Après le déploiement, vous obtiendrez une URL comme :
- Railway : `https://cx-first-strapi-production.up.railway.app`
- Render : `https://cx-first-strapi.onrender.com`

### **Étape 4 : Déployer le frontend sur Vercel**

#### 4.1 Via l'interface web Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. "New Project"
3. Importez votre repo GitHub `cx-first`
4. Configuration :
   - **Framework Preset** : `Vite`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`

#### 4.2 Configurer les variables d'environnement

Dans le dashboard Vercel de votre projet :

1. Settings → Environment Variables
2. Ajoutez :
   ```
   Name: VITE_API_URL
   Value: https://votre-strapi-deploye.com
   Environment: Production, Preview, Development
   ```

**Exemple concret :**
```
Name: VITE_API_URL
Value: https://cx-first-strapi-production.up.railway.app
Environment: Production, Preview, Development
```

#### 4.3 Redéployer

Après avoir ajouté les variables d'environnement :
1. Allez dans "Deployments"
2. Cliquez sur "Redeploy" sur le dernier déploiement

### **Étape 5 : Tester et vérifier**

#### 5.1 Tester l'API Strapi directement

Ouvrez votre navigateur et testez :
```
https://votre-strapi-deploye.com/api/blogs
```

Vous devriez voir une réponse JSON avec vos articles.

#### 5.2 Tester le frontend déployé

1. Allez sur votre URL Vercel
2. Ouvrez la console du navigateur (F12)
3. Vous devriez voir :
```
🚀 Environnement: production
 API URL: https://votre-strapi-deploye.com
```

#### 5.3 Ajouter le composant de test

Pour vérifier que tout fonctionne, vous pouvez temporairement ajouter le composant de test dans votre page d'accueil :

```tsx
// Dans src/screens/HomePage/HomePage.tsx
import { StrapiTest } from '../../components/StrapiTest';

// Ajoutez dans le JSX
<StrapiTest />
```

### **Étape 6 : Configuration finale**

#### 6.1 Configurer CORS dans Strapi (si nécessaire)

Si vous avez des erreurs CORS, ajoutez dans votre Strapi :

```javascript
// config/middlewares.js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

#### 6.2 Configurer un domaine personnalisé (optionnel)

Dans Vercel :
1. Settings → Domains
2. Ajoutez votre domaine
3. Configurez les DNS selon les instructions

## 🔍 Vérification finale

### Checklist à cocher :

- [ ] Strapi local fonctionne sur `http://localhost:1337`
- [ ] Les content types sont créés dans Strapi
- [ ] Les permissions sont configurées
- [ ] Le fichier `.env.local` est créé
- [ ] Les données de test sont initialisées (`npm run init-strapi`)
- [ ] Le frontend local fonctionne (`npm run dev`)
- [ ] Strapi est déployé et accessible
- [ ] Les variables d'environnement sont configurées dans Vercel
- [ ] Le frontend est déployé sur Vercel
- [ ] La connexion entre frontend et Strapi fonctionne

##  En cas de problème

### Erreur de connexion Strapi
```bash
# Vérifier que Strapi est démarré
curl http://localhost:1337/api/blogs

# Vérifier les logs Strapi
# Dans le terminal où Strapi tourne
```

### Erreur de build Vercel
```bash
# Tester en local
npm run build

# Vérifier les logs Vercel
# Dans le dashboard Vercel → Deployments → View Function Logs
```

### Variables d'environnement non prises en compte
1. Redéployez après avoir ajouté les variables
2. Vérifiez que les variables sont bien configurées
3. Utilisez `vercel env ls` pour vérifier

Avez-vous des questions sur une étape spécifique ? 
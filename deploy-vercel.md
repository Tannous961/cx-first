# Déploiement sur Vercel

## 🚀 Étapes de déploiement

### 1. Préparer le projet

```bash
# Installer les dépendances
npm install

# Tester en local
npm run dev
```

### 2. Déployer Strapi

Avant de déployer le frontend, vous devez déployer votre Strapi sur une plateforme comme :

- **Railway** (recommandé) : https://railway.app
- **Render** : https://render.com
- **Heroku** : https://heroku.com
- **DigitalOcean App Platform** : https://digitalocean.com

### 3. Configurer Vercel

#### Option A : Via l'interface web

1. Connectez-vous à [Vercel](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository GitHub
4. Dans les paramètres du projet :
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`

#### Option B : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

### 4. Configurer les variables d'environnement

Dans votre dashboard Vercel :

1. Allez dans votre projet
2. Settings → Environment Variables
3. Ajoutez :

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_API_URL` | `https://votre-strapi-deploye.com` | Production, Preview, Development |

### 5. Redéployer

Après avoir configuré les variables d'environnement :

```bash
# Via CLI
vercel --prod

# Ou via l'interface web : cliquer sur "Redeploy"
```

## 🔧 Configuration avancée

### Domaine personnalisé

1. Dans Vercel : Settings → Domains
2. Ajoutez votre domaine
3. Configurez les DNS selon les instructions

### Variables d'environnement par environnement

Vous pouvez avoir différentes URLs selon l'environnement :

- **Development** : `http://localhost:1337`
- **Preview** : `https://staging-strapi.com`
- **Production** : `https://production-strapi.com`

### Optimisations

#### Cache et performance

Ajoutez dans `vercel.json` :

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

#### Redirection HTTPS

```json
{
  "redirects": [
    {
      "source": "http://:domain/:path*",
      "destination": "https://:domain/:path*",
      "permanent": true
    }
  ]
}
```

## 🧪 Test après déploiement

1. Vérifiez que votre site fonctionne
2. Testez la connexion à Strapi
3. Vérifiez les logs dans Vercel
4. Testez sur différents appareils

## 🚨 Dépannage

### Erreur de build

```bash
# Vérifier les logs
vercel logs

# Tester en local
npm run build
```

### Erreur de connexion Strapi

1. Vérifiez l'URL dans les variables d'environnement
2. Testez l'URL Strapi directement
3. Vérifiez les permissions CORS dans Strapi

### Variables d'environnement non prises en compte

1. Redéployez après avoir ajouté les variables
2. Vérifiez que les variables sont bien configurées
3. Utilisez `vercel env ls` pour vérifier

## 📞 Support

- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Strapi](https://docs.strapi.io)
- [Forum Vercel](https://github.com/vercel/vercel/discussions) 
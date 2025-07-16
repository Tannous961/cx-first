import React, { useEffect, useState } from 'react';
import { strapiService } from '../services/strapi';
import { API_URL } from '../lib/config';

export const StrapiTest: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [articles, setArticles] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log('🔗 Test de connexion à Strapi...');
        console.log('📍 URL:', API_URL);
        
        const isConnected = await strapiService.checkConnection();
        
        if (isConnected) {
          setConnectionStatus('connected');
          console.log('✅ Connexion Strapi réussie');
          
          // Récupérer quelques articles pour tester
          try {
            const response = await strapiService.getBlogArticles();
            if (Array.isArray(response.data)) {
              setArticles(response.data.slice(0, 3));
            }
          } catch (err) {
            console.warn('⚠️ Impossible de récupérer les articles:', err);
          }
        } else {
          setConnectionStatus('error');
          setError('Impossible de se connecter à Strapi');
        }
      } catch (err) {
        setConnectionStatus('error');
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        console.error('❌ Erreur de connexion:', err);
      }
    };

    testConnection();
  }, []);

  if (connectionStatus === 'loading') {
    return (
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <span className="text-blue-800">Test de connexion à Strapi...</span>
        </div>
      </div>
    );
  }

  if (connectionStatus === 'error') {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="text-red-600">❌</div>
          <div>
            <div className="text-red-800 font-medium">Erreur de connexion Strapi</div>
            <div className="text-red-600 text-sm">{error}</div>
            <div className="text-red-600 text-sm mt-1">
              URL configurée: {API_URL}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
      <div className="flex items-center space-x-2 mb-3">
        <div className="text-green-600">✅</div>
        <div className="text-green-800 font-medium">Connexion Strapi réussie</div>
      </div>
      
      <div className="text-green-700 text-sm mb-3">
        URL: {API_URL}
      </div>

      {articles.length > 0 && (
        <div className="mt-3">
          <div className="text-green-800 font-medium mb-2">Articles trouvés ({articles.length})</div>
          <div className="space-y-2">
            {articles.map((article) => (
              <div key={article.id} className="text-sm text-green-700 bg-green-100 p-2 rounded">
                • {article.attributes.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 
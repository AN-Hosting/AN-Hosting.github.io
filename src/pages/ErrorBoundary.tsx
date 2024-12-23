import { AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export const ErrorBoundary = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-12">
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>Une erreur inattendue s'est produite.</AlertDescription>
        </Alert>

        <div className="space-y-4">
          <Button onClick={() => window.location.reload()} variant="outline" className="mr-4">
            Rafraîchir la page
          </Button>
          <Button onClick={() => navigate('/')}>Retourner à l'accueil</Button>
        </div>
      </div>
    </Layout>
  );
};

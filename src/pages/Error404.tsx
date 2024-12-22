import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Error404 = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Page introuvable</h2>
        <p className="text-muted-foreground mt-2 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/">
          <Button size="lg" className="gap-2">
            Retourner à l'accueil
          </Button>
        </Link>
      </div>
    </Layout>
  );
}; 
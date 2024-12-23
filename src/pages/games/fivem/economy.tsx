import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const FiveMEconomy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Économie FiveM</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion de l'économie</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion de l'économie FiveM en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

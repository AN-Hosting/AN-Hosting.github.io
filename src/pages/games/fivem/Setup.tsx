import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const FiveMSetup = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Installation FiveM</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Installation du serveur</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page d'installation du serveur FiveM en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

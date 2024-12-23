import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const CS2Config = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Configuration CS2</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Configuration du serveur</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de configuration du serveur CS2 en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

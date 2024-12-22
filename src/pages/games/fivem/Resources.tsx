import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const FiveMResources = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Resources FiveM</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion des resources</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion des resources FiveM en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};
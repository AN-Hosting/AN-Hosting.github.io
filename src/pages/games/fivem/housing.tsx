import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const FiveMHousing = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Housing FiveM</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion de Housing FiveM</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion de Housing FiveM en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

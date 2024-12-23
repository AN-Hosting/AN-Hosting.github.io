import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const FiveMVehicles = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Véhicules FiveM</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion de Véhicules FiveM</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion de Véhicules FiveM en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

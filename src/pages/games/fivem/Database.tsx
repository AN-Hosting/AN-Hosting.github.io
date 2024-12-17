import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FiveMDatabase = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Base de données FiveM</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion de la base de données</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion de la base de données FiveM en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FiveMDatabase;
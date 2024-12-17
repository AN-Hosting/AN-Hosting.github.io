import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CS2Plugins = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Plugins CS2</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion des plugins</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion des plugins CS2 en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CS2Plugins;
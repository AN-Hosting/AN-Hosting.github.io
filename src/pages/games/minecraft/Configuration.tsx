import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const MinecraftConfiguration = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Configuration du serveur Minecraft</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Configuration de base</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de configuration du serveur Minecraft en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

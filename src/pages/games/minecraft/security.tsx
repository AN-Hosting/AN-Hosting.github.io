import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const MinecraftSecurity = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Sécurité Minecraft</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion de Sécurité Minecraft</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion de Sécurité Minecraft en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

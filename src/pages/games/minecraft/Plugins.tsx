import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const MinecraftPlugins = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Plugins Minecraft</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion des plugins</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion des plugins Minecraft en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const MinecraftModeration = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Modération Minecraft</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion de Modération Minecraft</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion de Modération Minecraft en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

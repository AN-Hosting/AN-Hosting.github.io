import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const DayZSecurity = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Sécurité DayZ</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion de Sécurité DayZ</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion de Sécurité DayZ en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const DayZEvents = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Events DayZ</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion de Events DayZ</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion de Events DayZ en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

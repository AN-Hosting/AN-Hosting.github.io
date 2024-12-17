import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DayZBackup = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Sauvegardes DayZ</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion des sauvegardes</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion des sauvegardes DayZ en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DayZBackup;
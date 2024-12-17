import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DayZAdmin = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Administration DayZ</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Administration du serveur</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page d'administration du serveur DayZ en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DayZAdmin;
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info, Settings } from 'lucide-react';

export const DayZPerformance = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Optimisation des performances</h1>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Optimisation</AlertTitle>
          <AlertDescription>
            Ces paramètres peuvent être ajustés dans le panel Pterodactyl pour optimiser les performances de votre serveur.
          </AlertDescription>
        </Alert>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Paramètres de réseau</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="code-block">
              <code>{`// Distances de synchronisation réseau
networkRangeClose = 20;     // Objets proches
networkRangeNear = 150;     // Objets moyens
networkRangeFar = 1000;     // Objets lointains
networkRangeDistantEffect = 4000;  // Effets sonores

// Optimisation bande passante
networkObjectBatchCompute = 1000;
networkObjectBatchSendCreate = 10;
networkObjectBatchSendDelete = 10;`}</code>
            </pre>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="game-card">
            <CardHeader>
              <CardTitle>Limites de performance</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block">
                <code>{`// Limites serveur
maxPlayers = 60;
simulatedPlayersBatch = 20;
multithreadedReplication = 1;
speedhackDetection = 1;`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <CardTitle>Distances de rendu</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block">
                <code>{`// Distances de vue
defaultVisibility = 1375;
defaultObjectViewDistance = 1375;
lightingConfig = 0;`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}; 
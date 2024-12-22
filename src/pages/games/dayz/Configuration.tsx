import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export const DayZConfiguration = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Configuration avancée du serveur DayZ</h1>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            Toutes les modifications doivent être effectuées via l'onglet "Fichiers" du panel Pterodactyl.
            N'oubliez pas de redémarrer votre serveur après chaque modification.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="game-card">
            <CardHeader>
              <CardTitle>Configuration du serveur</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block">
                <code>{`// Paramètres principaux
hostname = "Mon Serveur DayZ";
password = "";
passwordAdmin = "VotreMotDePasseAdmin";
maxPlayers = 60;

// Sécurité
verifySignatures = 2;
forceSameBuild = 1;
enableWhitelist = 0;

// Performance
loginQueueConcurrentPlayers = 5;
loginQueueMaxPlayers = 500;
instanceId = 1;`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <CardTitle>Configuration du temps</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block">
                <code>{`// Gestion du temps
serverTime = "SystemTime";
serverTimeAcceleration = 4;     // 4x plus rapide
serverNightTimeAcceleration = 8; // Nuits 8x plus rapides
serverTimePersistent = 1;       // Sauvegarde du temps`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Paramètres de gameplay</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Paramètres basiques</h3>
                <pre className="code-block">
                  <code>{`disable3rdPerson = 0;
disableCrosshair = 0;
disableVoN = 0;
vonCodecQuality = 20;`}</code>
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Paramètres avancés</h3>
                <pre className="code-block">
                  <code>{`disableBaseDamage = 0;
disableContainerDamage = 0;
disableRespawnDialog = 0;
enableDebugMonitor = 1;`}</code>
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}; 
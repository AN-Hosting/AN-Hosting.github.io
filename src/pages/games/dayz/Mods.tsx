import { Info } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const DayZMods = () => {
  const recommendedMods = [
    {
      name: 'CF',
      description: 'Community Framework - requis pour la plupart des mods',
      type: 'Essentiel',
      workshopId: '1559212036',
      installation: 'Automatique via le panel',
    },
    {
      name: 'Code Lock',
      description: 'Système de verrouillage par code pour les bases',
      type: 'Sécurité',
      workshopId: '1646187754',
      installation: 'Via gestionnaire de mods',
    },
    {
      name: 'Banking',
      description: 'Système économique avec ATM',
      type: 'Économie',
      workshopId: '1824053882',
      installation: 'Via gestionnaire de mods',
    },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Installation des mods DayZ sur Pterodactyl</h1>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            L'installation des mods sur Pterodactyl est simplifiée grâce au gestionnaire de mods
            intégré. Assurez-vous que votre serveur est arrêté avant d'installer ou de mettre à jour
            des mods.
          </AlertDescription>
        </Alert>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Mods recommandés</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recommendedMods.map((mod) => (
              <Card key={mod.workshopId} className="game-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {mod.name}
                    <Badge>{mod.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{mod.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-muted-foreground">Workshop ID: {mod.workshopId}</p>
                    <Badge variant="outline">{mod.installation}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Installation via le panel</h2>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Étapes d'installation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Accédez à l'onglet "Mods" dans votre panel</li>
                <li>Recherchez le mod souhaité par son nom ou ID Workshop</li>
                <li>Cliquez sur "Installer" à côté du mod</li>
                <li>Attendez la fin de l'installation</li>
                <li>Activez le mod dans la liste des mods installés</li>
                <li>Redémarrez votre serveur</li>
              </ol>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

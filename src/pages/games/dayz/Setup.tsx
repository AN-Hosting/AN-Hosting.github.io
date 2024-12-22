import { Layout } from '@/components/layout/Layout';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const DayZSetup = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Installation d'un serveur DayZ sur Pterodactyl</h1>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Prérequis</AlertTitle>
          <AlertDescription>
            - Un compte AN Hosting avec accès au panel Pterodactyl
            - Un serveur avec au moins 16GB de RAM
            - Un minimum de 50GB d'espace disque
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="game-card">
            <CardHeader>
              <CardTitle>1. Création du serveur</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Connectez-vous au panel Pterodactyl
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Cliquez sur "Créer un serveur"
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Sélectionnez "DayZ" dans la liste des jeux
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <CardTitle>2. Configuration initiale</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Définissez le nom de votre serveur
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Allouez les ressources (RAM, CPU, Stockage)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Choisissez l'emplacement du serveur
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Configuration du serveur</h2>
          
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Fichier serverDZ.cfg</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Dans l'onglet "Fichiers" du panel, modifiez le fichier serverDZ.cfg :</p>
              <pre className="code-block">
                <code>{`hostname = "Mon Serveur DayZ";
password = "";  // Mot de passe du serveur (optionnel)
passwordAdmin = "VotreMotDePasseAdmin";
maxPlayers = 60;
verifySignatures = 2;
forceSameBuild = 1;
template = "dayzOffline.chernarusplus";  // ou autre map`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Conseil</AlertTitle>
          <AlertDescription>
            Une fois la configuration terminée, utilisez le bouton "Démarrer" dans le panel pour lancer votre serveur. 
            Le premier démarrage peut prendre plusieurs minutes le temps que les fichiers soient téléchargés.
          </AlertDescription>
        </Alert>
      </div>
    </Layout>
  );
};
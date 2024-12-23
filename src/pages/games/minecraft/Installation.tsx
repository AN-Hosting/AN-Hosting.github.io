import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const MinecraftInstallation = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          Installation du serveur Minecraft
        </h1>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Prérequis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Pour installer un serveur Minecraft, vous aurez besoin de :</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Java Runtime Environment (JRE) version 17 ou supérieure</li>
              <li>Minimum 4GB de RAM</li>
              <li>Un processeur récent (2 cœurs minimum)</li>
              <li>Une connexion internet stable</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Étapes d'installation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-4">
              <li>Téléchargez la dernière version du serveur Minecraft</li>
              <li>Créez un nouveau dossier pour votre serveur</li>
              <li>Déplacez le fichier .jar dans ce dossier</li>
              <li>Créez un script de démarrage</li>
              <li>Lancez le serveur une première fois</li>
              <li>Acceptez l'EULA</li>
              <li>Configurez les paramètres de base</li>
              <li>Redémarrez le serveur</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export const CodeBlocks = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Blocs de code</h2>
      <div className="space-y-4">
        <pre className="code-block">
          <code>{`// Exemple de configuration
{
  "serveur": {
    "port": 25565,
    "maxJoueurs": 100
  }
}`}</code>
        </pre>

        <pre className="code-block bg-green-500/10 border-green-500/20">
          <code>{`+ Ajout d'une nouvelle fonctionnalité
+ Mise à jour de la configuration
+ Correction du bug #123`}</code>
        </pre>

        <pre className="code-block bg-red-500/10 border-red-500/20">
          <code>{`- Suppression du code obsolète
- Nettoyage des imports inutilisés`}</code>
        </pre>
      </div>
    </section>
  );
};

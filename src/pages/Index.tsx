import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const games = [
  {
    id: 'minecraft',
    name: 'Minecraft',
    description: 'Configurez et gérez votre serveur Minecraft facilement.',
    icon: '🎮'
  },
  {
    id: 'dayz',
    name: 'DayZ',
    description: 'Hébergez votre propre serveur DayZ et personnalisez-le selon vos besoins.',
    icon: '🎮'
  },
  {
    id: 'fivem',
    name: 'FiveM',
    description: 'Créez et gérez votre serveur FiveM pour GTA V multijoueur.',
    icon: '🎮'
  },
  {
    id: 'cs2',
    name: 'Counter-Strike 2',
    description: 'Configurez et optimisez votre serveur CS2 pour le jeu compétitif.',
    icon: '🎮'
  }
];

export const Index = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Documentation
          </h1>
          <p className="text-lg text-muted-foreground">
            Guides complets pour configurer et gérer vos serveurs de jeux
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {games.map((game) => (
            <Link key={game.id} to={`/games/${game.id}`}>
              <div className="game-card h-full">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{game.icon}</span>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
                    <p className="text-muted-foreground">{game.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 glass-card text-center">
          <h2 className="text-xl font-semibold mb-4">Besoin d'aide ?</h2>
          <p className="text-muted-foreground mb-4">
            Vous ne trouvez pas ce que vous cherchez ? Consultez notre discord communautaires.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://discord.gg/anhosting" target="_blank" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Visiter le Discord
            </a>
            {/* <button className="px-4 py-2 rounded-lg border border-primary/50 hover:bg-primary/10 transition-colors">
              Contacter le Support
            </button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};
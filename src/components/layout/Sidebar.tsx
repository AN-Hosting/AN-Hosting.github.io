import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Gamepad, Menu, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeSwitcher } from '../ThemeSwitcher';

// Type pour les mots-clés de recherche
type SearchableCategory = {
  id: string;
  name: string;
  path: string;
  keywords?: string[]; // Mots-clés associés à cette page
  description?: string; // Description courte du contenu
};

const games = [
  {
    id: 'minecraft',
    name: 'Minecraft',
    icon: '🎮',
    categories: [
      {
        id: 'minecraft',
        name: 'Page',
        path: '/games/minecraft/MinecraftPage',
        keywords: ['minecraft', 'serveur', 'java', 'bedrock'],
      },
      {
        id: 'installation',
        name: 'Installation',
        path: '/games/minecraft/installation',
        keywords: ['installation', 'java', 'serveur', 'configuration système', 'prérequis'],
        description: "Guide d'installation d'un serveur Minecraft",
      },
      { id: 'configuration', name: 'Configuration', path: '/games/minecraft/configuration' },
      { id: 'plugins', name: 'Plugins', path: '/games/minecraft/plugins' },
      { id: 'maintenance', name: 'Maintenance', path: '/games/minecraft/maintenance' },
      { id: 'economy', name: 'Économie', path: '/games/minecraft/economy' },
      { id: 'moderation', name: 'Modération', path: '/games/minecraft/moderation' },
      { id: 'security', name: 'Sécurité', path: '/games/minecraft/security' },
    ],
  },
  {
    id: 'dayz',
    name: 'DayZ',
    icon: '🎮',
    categories: [
      {
        id: 'setup',
        name: 'Installation',
        path: '/games/dayz/setup',
        keywords: ['installation', 'steam', 'serveur', 'configuration initiale'],
        description: "Installation et configuration d'un serveur DayZ",
      },
      {
        id: 'mods',
        name: 'Mods',
        path: '/games/dayz/mods',
        keywords: ['mods', 'workshop', 'steam', 'addons', 'personnalisation'],
        description: 'Gestion des mods sur un serveur DayZ',
      },
      { id: 'configuration', name: 'Configuration', path: '/games/dayz/configuration' },
      { id: 'performance', name: 'Performance', path: '/games/dayz/performance' },
      { id: 'economy', name: 'Économie', path: '/games/dayz/economy' },
      { id: 'events', name: 'Events', path: '/games/dayz/events' },
      { id: 'security', name: 'Sécurité', path: '/games/dayz/security' },
    ],
  },
  {
    id: 'fivem',
    name: 'FiveM',
    icon: '🎮',
    categories: [
      { id: 'fivem', name: 'Page', path: '/games/fivem/FiveMPage' },
      { id: 'setup', name: 'Installation', path: '/games/fivem/setup' },
      { id: 'resources', name: 'Ressources', path: '/games/fivem/resources' },
      { id: 'scripts', name: 'Scripts', path: '/games/fivem/scripts' },
      { id: 'database', name: 'Base de données', path: '/games/fivem/database' },
      { id: 'economy', name: 'Économie', path: '/games/fivem/economy' },
      { id: 'vehicles', name: 'Véhicules', path: '/games/fivem/vehicles' },
      { id: 'housing', name: 'Housing', path: '/games/fivem/housing' },
      { id: 'jobs', name: 'Jobs', path: '/games/fivem/jobs' },
    ],
  },
  {
    id: 'cs2',
    name: 'Counter-Strike 2',
    icon: '🎮',
    categories: [
      { id: 'cs2', name: 'Page', path: '/games/cs2/CS2Page' },
      { id: 'setup', name: 'Installation', path: '/games/cs2/setup' },
      { id: 'config', name: 'Configuration', path: '/games/cs2/config' },
      { id: 'plugins', name: 'Plugins', path: '/games/cs2/plugins' },
      { id: 'maintenance', name: 'Maintenance', path: '/games/cs2/maintenance' },
      { id: 'economy', name: 'Économie', path: '/games/cs2/economy' },
      { id: 'matchmaking', name: 'Matchmaking', path: '/games/cs2/matchmaking' },
      { id: 'anticheat', name: 'Anticheat', path: '/games/cs2/anticheat' },
      { id: 'competitive', name: 'Compétitif', path: '/games/cs2/competitive' },
    ],
  },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const location = useLocation();

  const activeGame = games.find((game) => location.pathname.includes(`/games/${game.id}`));

  // Fonction de recherche améliorée
  const filteredGames = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return games;
    return games
      .map((game) => ({
        ...game,
        categories: game.categories.filter((category) => {
          const nameMatch = category.name.toLowerCase().includes(query);
          const gameNameMatch = game.name.toLowerCase().includes(query);
          const keywordMatch = category.keywords?.some((keyword) =>
            keyword.toLowerCase().includes(query)
          );
          const descriptionMatch = category.description?.toLowerCase().includes(query);
          return nameMatch || gameNameMatch || keywordMatch || descriptionMatch;
        }),
      }))
      .filter((game) => game.categories.length > 0);
  }, [searchQuery]);

  // Gérer l'ouverture initiale et la navigation
  useEffect(() => {
    if (activeGame && !openCategories.includes(activeGame.id)) {
      setOpenCategories((prev) => [...prev, activeGame.id]);
    }
  }, [location.pathname]);

  // Gérer la recherche
  useEffect(() => {
    if (searchQuery) {
      const searchResults = filteredGames.map((game) => game.id);
      setOpenCategories(searchResults);
    }
  }, [searchQuery]);

  const noResults = searchQuery.trim() !== '' && filteredGames.length === 0;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 glass-card hover-glow lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={cn(
          'fixed top-0 left-0 h-full glass-card border-r border-white/10',
          'transition-all duration-300 z-40',
          'w-64 transform lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center gap-2 p-2">
                <Gamepad className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">AN Hosting</span>
              </Link>
              <ThemeSwitcher />
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background/50 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-thin">
            <div className="p-4">
              {noResults ? (
                <div className="text-center text-muted-foreground py-4">
                  Aucun résultat trouvé pour "{searchQuery}"
                </div>
              ) : (
                <Accordion
                  type="multiple"
                  className="w-full"
                  value={openCategories}
                  onValueChange={(value) => {
                    // Maintenir la catégorie active toujours ouverte
                    if (activeGame && !value.includes(activeGame.id)) {
                      setOpenCategories([...value, activeGame.id]);
                    } else {
                      setOpenCategories(value);
                    }
                  }}
                >
                  {filteredGames.map((game) => (
                    <AccordionItem key={game.id} value={game.id} className="border-white/10">
                      <AccordionTrigger className="hover:no-underline py-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{game.icon}</span>
                          <span>{game.name}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-1 ml-9">
                          {game.categories.map((category) => (
                            <Link
                              key={category.id}
                              to={category.path}
                              className={cn(
                                'block py-2 px-2 rounded-lg transition-colors',
                                location.pathname === category.path
                                  ? 'bg-accent text-accent-foreground'
                                  : 'hover:bg-white/5'
                              )}
                            >
                              <div>
                                <div>{category.name}</div>
                                {searchQuery && category.description && (
                                  <div className="text-sm text-muted-foreground">
                                    {category.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </div>

          {/* <div className="p-4 border-t border-white/10">
            <div className="space-y-1">
              <Link
                to="/design-system"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <Palette size={20} />
                <span>Design System</span>
              </Link>
              <Link
                to="/admin"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <Settings size={20} />
                <span>Administration</span>
              </Link>
            </div>
          </div> */}
        </div>
      </aside>
    </>
  );
};

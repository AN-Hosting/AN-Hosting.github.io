import { Gamepad, Menu, Palette, Search, Settings, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '../ThemeSwitcher';

const games = [
  {
    id: 'minecraft',
    name: 'Minecraft',
    icon: '🎮',
    categories: [
      { id: 'minecraft', name: 'Page', path: '/games/minecraft/MinecraftPage' },
      { id: 'installation', name: 'Installation', path: '/games/minecraft/installation' },
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
      { id: 'dayz', name: 'Page', path: '/games/dayz/DayZPage' },
      { id: 'setup', name: 'Installation', path: '/games/dayz/setup' },
      { id: 'configuration', name: 'Configuration', path: '/games/dayz/configuration' },
      { id: 'performance', name: 'Performance', path: '/games/dayz/performance' },
      { id: 'mods', name: 'Mods', path: '/games/dayz/mods' },
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
  const location = useLocation();

  const activeGame = games.find((game) => location.pathname.includes(`/games/${game.id}`));

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
                className="w-full pl-10 pr-4 py-2 bg-background/50 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-thin">
            <div className="p-4">
              <Accordion
                type="multiple"
                className="w-full"
                defaultValue={activeGame ? [activeGame.id] : []}
              >
                {games.map((game) => (
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
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="p-4 border-t border-white/10">
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
          </div>
        </div>
      </aside>
    </>
  );
};

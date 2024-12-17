import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad, Search, Settings, Menu, X, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const games = [
  {
    id: 'minecraft',
    name: 'Minecraft',
    icon: '🎮',
    categories: [
      { id: 'installation', name: 'Installation', path: '/games/minecraft/installation' },
      { id: 'configuration', name: 'Configuration', path: '/games/minecraft/configuration' },
      { id: 'plugins', name: 'Plugins', path: '/games/minecraft/plugins' },
      { id: 'maintenance', name: 'Maintenance', path: '/games/minecraft/maintenance' },
    ]
  },
  {
    id: 'dayz',
    name: 'DayZ',
    icon: '🎮',
    categories: [
      { id: 'setup', name: 'Installation', path: '/games/dayz/setup' },
      { id: 'mods', name: 'Mods', path: '/games/dayz/mods' },
      { id: 'admin', name: 'Administration', path: '/games/dayz/admin' },
      { id: 'backup', name: 'Sauvegardes', path: '/games/dayz/backup' },
    ]
  },
  {
    id: 'fivem',
    name: 'FiveM',
    icon: '🎮',
    categories: [
      { id: 'setup', name: 'Installation', path: '/games/fivem/setup' },
      { id: 'resources', name: 'Resources', path: '/games/fivem/resources' },
      { id: 'scripts', name: 'Scripts', path: '/games/fivem/scripts' },
      { id: 'database', name: 'Base de données', path: '/games/fivem/database' },
    ]
  },
  {
    id: 'cs2',
    name: 'Counter-Strike 2',
    icon: '🎮',
    categories: [
      { id: 'setup', name: 'Installation', path: '/games/cs2/setup' },
      { id: 'config', name: 'Configuration', path: '/games/cs2/config' },
      { id: 'plugins', name: 'Plugins', path: '/games/cs2/plugins' },
      { id: 'maintenance', name: 'Maintenance', path: '/games/cs2/maintenance' },
    ]
  },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

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
          "fixed top-0 left-0 h-full glass-card border-r border-white/10",
          "transition-all duration-300 z-40",
          "w-64 transform lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-2 p-2">
              <Gamepad className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">GameHost Docs</span>
            </Link>
            <ThemeSwitcher />
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search docs..."
              className="w-full pl-10 pr-4 py-2 bg-background/50 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
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
                        className="block py-2 px-2 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-auto space-y-1">
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
              <span>Admin Panel</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
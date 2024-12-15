import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad, Search, Settings, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const games = [
  { id: 'minecraft', name: 'Minecraft', icon: '🎮' },
  { id: 'dayz', name: 'DayZ', icon: '🎮' },
  { id: 'fivem', name: 'FiveM', icon: '🎮' },
  { id: 'cs2', name: 'Counter-Strike 2', icon: '🎮' },
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
          <Link to="/" className="flex items-center gap-2 p-2 mb-8">
            <Gamepad className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">GameHost Docs</span>
          </Link>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search docs..."
              className="w-full pl-10 pr-4 py-2 bg-background/50 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <nav className="space-y-1">
            {games.map((game) => (
              <Link
                key={game.id}
                to={`/games/${game.id}`}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <span className="text-xl">{game.icon}</span>
                <span>{game.name}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
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
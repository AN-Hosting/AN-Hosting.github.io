import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ErrorHandler } from './components/ErrorHandler';

import { ThemeProvider } from './components/ThemeProvider';
import { DesignSystem } from './pages/DesignSystem';

import { Error404 } from './pages/Error404';
import { ErrorBoundary } from './pages/ErrorBoundary';

import { CS2Config } from './pages/games/cs2/Config';
import { CS2Maintenance } from './pages/games/cs2/Maintenance';
import { CS2Plugins } from './pages/games/cs2/Plugins';
import { CS2Setup } from './pages/games/cs2/Setup';
import { CS2Anticheat } from './pages/games/cs2/anticheat';
import { CS2Competitive } from './pages/games/cs2/competitive';
import { CS2Economy } from './pages/games/cs2/economy';
import { CS2Matchmaking } from './pages/games/cs2/matchmaking';
import { CS2Page } from './pages/games/cs2/CS2Page';

import { DayZAdmin } from './pages/games/dayz/Admin';
import { DayZBackup } from './pages/games/dayz/Backup';
import { DayZConfiguration } from './pages/games/dayz/Configuration';
import { DayZMods } from './pages/games/dayz/Mods';
import { DayZPerformance } from './pages/games/dayz/Performance';
import { DayZSetup } from './pages/games/dayz/Setup';
import { DayZEconomy } from './pages/games/dayz/economy';
import { DayZEvents } from './pages/games/dayz/events';
import { DayZSecurity } from './pages/games/dayz/security';
import { DayZPage } from './pages/games/dayz/DayZPage';

import { FiveMDatabase } from './pages/games/fivem/Database';
import { FiveMResources } from './pages/games/fivem/Resources';
import { FiveMScripts } from './pages/games/fivem/Scripts';
import { FiveMSetup } from './pages/games/fivem/Setup';
import { FiveMEconomy } from './pages/games/fivem/economy';
import { FiveMHousing } from './pages/games/fivem/housing';
import { FiveMJobs } from './pages/games/fivem/jobs';
import { FiveMVehicles } from './pages/games/fivem/vehicles';
import { FiveMPage } from './pages/games/fivem/FiveMPage';

import { MinecraftConfiguration } from './pages/games/minecraft/Configuration';
import { MinecraftInstallation } from './pages/games/minecraft/Installation';
import { MinecraftMaintenance } from './pages/games/minecraft/Maintenance';
import { MinecraftPlugins } from './pages/games/minecraft/Plugins';
import { MinecraftEconomy } from './pages/games/minecraft/economy';
import { MinecraftModeration } from './pages/games/minecraft/moderation';
import { MinecraftSecurity } from './pages/games/minecraft/security';
import { MinecraftPage } from './pages/games/minecraft/MinecraftPage';

import { Index } from './pages/Index';

const queryClient = new QueryClient();

const App = () => (
  <ErrorHandler>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Minecraft Routes */}
              <Route path="/games/minecraft/MinecraftPage" element={<MinecraftPage />} />
              <Route path="/games/minecraft/installation" element={<MinecraftInstallation />} />
              <Route path="/games/minecraft/configuration" element={<MinecraftConfiguration />} />
              <Route path="/games/minecraft/plugins" element={<MinecraftPlugins />} />
              <Route path="/games/minecraft/maintenance" element={<MinecraftMaintenance />} />
              <Route path="/games/minecraft/economy" element={<MinecraftEconomy />} />
              <Route path="/games/minecraft/security" element={<MinecraftSecurity />} />
              <Route path="/games/minecraft/moderation" element={<MinecraftModeration />} />

              {/* DayZ Routes */}
              <Route path="/games/dayz/DayZPage" element={<DayZPage />} />
              <Route path="/games/dayz/setup" element={<DayZSetup />} />
              <Route path="/games/dayz/mods" element={<DayZMods />} />
              <Route path="/games/dayz/admin" element={<DayZAdmin />} />
              <Route path="/games/dayz/backup" element={<DayZBackup />} />
              <Route path="/games/dayz/configuration" element={<DayZConfiguration />} />
              <Route path="/games/dayz/performance" element={<DayZPerformance />} />
              <Route path="/games/dayz/economy" element={<DayZEconomy />} />
              <Route path="/games/dayz/events" element={<DayZEvents />} />
              <Route path="/games/dayz/security" element={<DayZSecurity />} />

              {/* FiveM Routes */}
              <Route path="/games/fivem/FiveMPage" element={<FiveMPage />} />
              <Route path="/games/fivem/setup" element={<FiveMSetup />} />
              <Route path="/games/fivem/resources" element={<FiveMResources />} />
              <Route path="/games/fivem/scripts" element={<FiveMScripts />} />
              <Route path="/games/fivem/database" element={<FiveMDatabase />} />
              <Route path="/games/fivem/economy" element={<FiveMEconomy />} />
              <Route path="/games/fivem/vehicles" element={<FiveMVehicles />} />
              <Route path="/games/fivem/housing" element={<FiveMHousing />} />
              <Route path="/games/fivem/jobs" element={<FiveMJobs />} />

              {/* CS2 Routes */}
              <Route path="/games/cs2/CS2Page" element={<CS2Page />} />
              <Route path="/games/cs2/setup" element={<CS2Setup />} />
              <Route path="/games/cs2/config" element={<CS2Config />} />
              <Route path="/games/cs2/plugins" element={<CS2Plugins />} />
              <Route path="/games/cs2/maintenance" element={<CS2Maintenance />} />
              <Route path="/games/cs2/economy" element={<CS2Economy />} />
              <Route path="/games/cs2/matchmaking" element={<CS2Matchmaking />} />
              <Route path="/games/cs2/anticheat" element={<CS2Anticheat />} />
              <Route path="/games/cs2/competitive" element={<CS2Competitive />} />

              <Route path="/design-system" element={<DesignSystem />} />
              <Route path="/admin" element={<Index />} />

              {/* Routes d'erreur */}
              <Route path="/error" element={<ErrorBoundary />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorHandler>
);

export default App;

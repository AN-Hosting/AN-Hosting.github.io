import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Index } from "./pages/Index";
import { MinecraftPage } from "./pages/games/MinecraftPage";
import { DayZPage } from "./pages/games/DayZPage";
import { FiveMPage } from "./pages/games/FiveMPage";
import { CS2Page } from "./pages/games/CS2Page";
import { DesignSystem } from "./pages/DesignSystem";

// Import new subcategory pages
import { MinecraftInstallation } from "./pages/games/minecraft/Installation";
import { MinecraftConfiguration } from "./pages/games/minecraft/Configuration";
import { MinecraftPlugins } from "./pages/games/minecraft/Plugins";
import { MinecraftMaintenance } from "./pages/games/minecraft/Maintenance";

import { DayZSetup } from "./pages/games/dayz/Setup";
import { DayZMods } from "./pages/games/dayz/Mods";
import { DayZAdmin } from "./pages/games/dayz/Admin";
import { DayZBackup } from "./pages/games/dayz/Backup";
import { DayZConfiguration } from "./pages/games/dayz/Configuration";
import { DayZPerformance } from "./pages/games/dayz/Performance";

import { FiveMSetup } from "./pages/games/fivem/Setup";
import { FiveMResources } from "./pages/games/fivem/Resources";
import { FiveMScripts } from "./pages/games/fivem/Scripts";
import { FiveMDatabase } from "./pages/games/fivem/Database";

import { CS2Setup } from "./pages/games/cs2/Setup";
import { CS2Config } from "./pages/games/cs2/Config";
import { CS2Plugins } from "./pages/games/cs2/Plugins";
import { CS2Maintenance } from "./pages/games/cs2/Maintenance";

import { Error404 } from "./pages/Error404";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import { ErrorHandler } from "./components/ErrorHandler";

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
              <Route path="/games/minecraft" element={<MinecraftPage />} />
              <Route path="/games/minecraft/installation" element={<MinecraftInstallation />} />
              <Route path="/games/minecraft/configuration" element={<MinecraftConfiguration />} />
              <Route path="/games/minecraft/plugins" element={<MinecraftPlugins />} />
              <Route path="/games/minecraft/maintenance" element={<MinecraftMaintenance />} />
              
              {/* DayZ Routes */}
              <Route path="/games/dayz" element={<DayZPage />} />
              <Route path="/games/dayz/setup" element={<DayZSetup />} />
              <Route path="/games/dayz/mods" element={<DayZMods />} />
              <Route path="/games/dayz/admin" element={<DayZAdmin />} />
              <Route path="/games/dayz/backup" element={<DayZBackup />} />
              <Route path="/games/dayz/configuration" element={<DayZConfiguration />} />
              <Route path="/games/dayz/performance" element={<DayZPerformance />} />
              
              {/* FiveM Routes */}
              <Route path="/games/fivem" element={<FiveMPage />} />
              <Route path="/games/fivem/setup" element={<FiveMSetup />} />
              <Route path="/games/fivem/resources" element={<FiveMResources />} />
              <Route path="/games/fivem/scripts" element={<FiveMScripts />} />
              <Route path="/games/fivem/database" element={<FiveMDatabase />} />
              
              {/* CS2 Routes */}
              <Route path="/games/cs2" element={<CS2Page />} />
              <Route path="/games/cs2/setup" element={<CS2Setup />} />
              <Route path="/games/cs2/config" element={<CS2Config />} />
              <Route path="/games/cs2/plugins" element={<CS2Plugins />} />
              <Route path="/games/cs2/maintenance" element={<CS2Maintenance />} />
              
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
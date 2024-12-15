import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MinecraftPage from "./pages/games/MinecraftPage";
import DayZPage from "./pages/games/DayZPage";
import FiveMPage from "./pages/games/FiveMPage";
import CS2Page from "./pages/games/CS2Page";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/games/minecraft" element={<MinecraftPage />} />
          <Route path="/games/dayz" element={<DayZPage />} />
          <Route path="/games/fivem" element={<FiveMPage />} />
          <Route path="/games/cs2" element={<CS2Page />} />
          <Route path="/admin" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
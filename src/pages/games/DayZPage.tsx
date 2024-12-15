import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Package, Shield, AlertTriangle, Terminal, Settings, Link as LinkIcon, Hash, ChevronRight } from 'lucide-react';

const DayZPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="relative p-8 rounded-lg overflow-hidden glass-card neon-border">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm" />
          <div className="relative z-10 space-y-4">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              DayZ Server Setup Guide
            </h1>
            <p className="text-xl text-gray-300">
              Complete guide to hosting and managing your DayZ server
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Active Servers', value: '2,500+' },
            { label: 'Players Online', value: '150K+' },
            { label: 'Avg. Uptime', value: '99.9%' },
            { label: 'Mod Support', value: '1000+' }
          ].map((stat, i) => (
            <Card key={i} className="game-card text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2">
          {['Survival', 'Multiplayer', 'Open World', 'Zombies', 'PvP', 'Crafting'].map((tag, i) => (
            <span key={i} className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors cursor-pointer">
              <Hash className="inline-block w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Links - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Server Setup', icon: Server, desc: 'Initial configuration' },
            { title: 'Mod Management', icon: Package, desc: 'Install and manage mods' },
            { title: 'Security', icon: Shield, desc: 'Secure your server' }
          ].map((item, i) => (
            <Card key={i} className="game-card group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{item.desc}</p>
                <ArrowRight className="h-4 w-4 mt-2 text-primary transition-transform group-hover:translate-x-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alert Section */}
        <Alert className="glass-card border-yellow-500/50">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <AlertTitle className="text-yellow-500">Important Notice</AlertTitle>
          <AlertDescription>
            Make sure to backup your server files before making any configuration changes.
          </AlertDescription>
        </Alert>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Getting Started</h2>
            <p className="text-gray-300 leading-relaxed">
              Setting up a DayZ server requires careful planning and configuration. Follow our step-by-step guide to ensure a smooth setup process.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Requirements</h2>
            <p className="text-gray-300 leading-relaxed">
              Before starting, ensure your system meets the minimum requirements for hosting a DayZ server.
            </p>
          </div>
        </div>

        {/* Code Diff Example */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              Configuration Changes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="code-block space-y-2">
              <div className="text-red-500">- maxPlayers = 40</div>
              <div className="text-green-500">+ maxPlayers = 60</div>
              <div className="text-red-500">- serverPassword = ""</div>
              <div className="text-green-500">+ serverPassword = "yourpassword"</div>
            </div>
          </CardContent>
        </Card>

        {/* URL Cards - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Official Documentation', url: 'https://dayz.com/docs' },
            { title: 'Community Forums', url: 'https://forums.dayz.com' }
          ].map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" 
               className="game-card flex items-center gap-3 p-4 group">
              <LinkIcon className="h-5 w-5 text-primary" />
              <span className="flex-grow text-gray-300">{link.title}</span>
              <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button className="relative overflow-hidden group">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          
          <Button variant="outline" className="relative overflow-hidden group">
            <span className="relative z-10">Documentation</span>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          
          <Button variant="secondary" className="animate-pulse hover:animate-none">
            Download Files
          </Button>
        </div>

        {/* Six Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="game-card p-4 text-center">
              <div className="text-xl font-bold text-primary">Step {i + 1}</div>
              <div className="text-sm text-gray-400">Configuration</div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DayZPage;
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowRight, Server, Package, Shield, AlertTriangle, Terminal, Settings } from 'lucide-react';

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

        {/* Alert Section */}
        <Alert className="glass-card border-yellow-500/50">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <AlertTitle className="text-yellow-500">Important Notice</AlertTitle>
          <AlertDescription>
            Make sure to backup your server files before making any configuration changes.
          </AlertDescription>
        </Alert>

        {/* Quick Links */}
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

        {/* Server Requirements */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              System Requirements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">Minimum Specs</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>CPU: Intel Core i5-6600K</li>
                  <li>RAM: 16GB DDR4</li>
                  <li>Storage: 50GB SSD</li>
                  <li>Network: 100Mbps connection</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">Recommended Specs</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>CPU: Intel Core i7-8700K</li>
                  <li>RAM: 32GB DDR4</li>
                  <li>Storage: 100GB NVMe SSD</li>
                  <li>Network: 1Gbps connection</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configuration Example */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              Configuration Example
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="code-block">
              <pre className="text-gray-300">
                {`# Example server configuration
hostname = "My DayZ Server"
password = ""
maxPlayers = 60
verifySignatures = 2
forceSameBuild = 1
template = "dayzOffline.chernarusplus"
instanceId = 1
loginQueueConcurrentPlayers = 5
loginQueueMaxPlayers = 500`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Blog-style Content */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-primary mb-4">Getting Started</h2>
          <p className="text-gray-300">
            Setting up a DayZ server requires careful planning and configuration. This guide will walk you through the essential steps to get your server up and running, including installation, configuration, and maintenance procedures.
          </p>
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Installation Steps</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Download the DayZ Server files</li>
            <li>Configure your server settings</li>
            <li>Set up server monitoring</li>
            <li>Configure automated backups</li>
            <li>Test your server configuration</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default DayZPage;
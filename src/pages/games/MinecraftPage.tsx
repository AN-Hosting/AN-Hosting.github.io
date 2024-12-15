import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MinecraftPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          Minecraft Server Setup Guide
        </h1>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Quick Start Guide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Follow these steps to set up your Minecraft server:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Download the latest version of Minecraft Server</li>
              <li>Create a new directory for your server files</li>
              <li>Configure server.properties file</li>
              <li>Allocate sufficient RAM</li>
              <li>Port forward 25565 (default port)</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Server Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="code-block">
              <pre>
                {`# Basic server settings
server-port=25565
gamemode=survival
difficulty=normal
max-players=20
view-distance=10
spawn-protection=16`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MinecraftPage;
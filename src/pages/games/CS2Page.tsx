import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const CS2Page = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          Counter-Strike 2 Server Setup Guide
        </h1>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Server Setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Essential steps for CS2 server configuration:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Install SteamCMD</li>
              <li>Download CS2 dedicated server</li>
              <li>Configure game modes</li>
              <li>Set up GSLT token</li>
              <li>Configure server.cfg</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Example Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="code-block">
              <pre>
                {`// Server settings
hostname "My CS2 Server"
sv_cheats 0
sv_lan 0
sv_pure 1
mp_autoteambalance 1
mp_limitteams 1
sv_password "your_password"`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};
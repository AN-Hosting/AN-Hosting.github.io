import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const FiveMPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          FiveM Server Setup Guide
        </h1>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Installation Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2">
              <li>Download FiveM server artifacts</li>
              <li>Configure server.cfg</li>
              <li>Set up database connection</li>
              <li>Install essential resources</li>
              <li>Configure permissions</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Basic server.cfg</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="code-block">
              <pre>
                {`# Server configuration
sv_maxclients 32
sv_licenseKey "your_license_key"
sets sv_projectName "My FiveM Server"
sets sv_projectDesc "A great RP experience"
load_server_icon myLogo.png`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

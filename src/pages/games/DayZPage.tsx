import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DayZPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          DayZ Server Setup Guide
        </h1>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Server Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Minimum server specifications:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>CPU: Intel Core i5-6600K or equivalent</li>
              <li>RAM: 16GB DDR4</li>
              <li>Storage: 50GB SSD</li>
              <li>Network: 100Mbps connection</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Mod Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="code-block">
              <pre>
                {`# Example mod list
@CF
@Community-Online-Tools
@DayZ-Expansion
@BuilderItems
@BaseBuildingPlus`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DayZPage;
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check, AlertTriangle, Info } from 'lucide-react';
import { GradientCards } from '@/components/design/GradientCards';
import { ColorPalettes } from '@/components/design/ColorPalettes';

const DesignSystem = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Typography</h2>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Heading 1</h1>
            <h2 className="text-4xl font-semibold">Heading 2</h2>
            <h3 className="text-3xl font-semibold">Heading 3</h3>
            <h4 className="text-2xl font-medium">Heading 4</h4>
            <p className="text-xl">Large paragraph text for important content.</p>
            <p className="text-base">Regular paragraph text for general content and documentation.</p>
            <p className="text-sm text-muted-foreground">Small text for captions and secondary information.</p>
          </div>
        </section>

        {/* Colors */}
        <ColorPalettes />

        {/* Gradient Cards */}
        <GradientCards />

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button className="animate-pulse hover:animate-none">Animated Button</Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Gradient Button
            </Button>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="game-card">
              <CardHeader>
                <CardTitle>Standard Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Basic card with title and content.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Glass Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Glassmorphism effect card.</p>
              </CardContent>
            </Card>

            <Card className="game-card neon-border">
              <CardHeader>
                <CardTitle>Neon Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card with neon border effect.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alerts */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Alerts</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-500">Information</h4>
                <p className="text-sm text-blue-400">This is an information message.</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-500">Success</h4>
                <p className="text-sm text-green-400">Operation completed successfully.</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-500">Warning</h4>
                <p className="text-sm text-yellow-400">Please review before proceeding.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tags & Badges */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Tags & Badges</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">Gradient</Badge>
          </div>
        </section>

        {/* Code Blocks */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Code Blocks</h2>
          <div className="space-y-4">
            <pre className="code-block">
              <code>{`// Example configuration
{
  "server": {
    "port": 25565,
    "maxPlayers": 100
  }
}`}</code>
            </pre>

            <pre className="code-block bg-green-500/10 border-green-500/20">
              <code>{`+ Added new feature
+ Updated configuration
+ Fixed bug #123`}</code>
            </pre>

            <pre className="code-block bg-red-500/10 border-red-500/20">
              <code>{`- Removed deprecated code
- Cleaned up unused imports`}</code>
            </pre>
          </div>
        </section>

        {/* Grid Layouts */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Grid Layouts</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Two Columns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 glass-card">Column 1</div>
              <div className="p-4 glass-card">Column 2</div>
            </div>

            <h3 className="text-xl font-medium">Four Columns</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 glass-card">Column 1</div>
              <div className="p-4 glass-card">Column 2</div>
              <div className="p-4 glass-card">Column 3</div>
              <div className="p-4 glass-card">Column 4</div>
            </div>

            <h3 className="text-xl font-medium">Six Columns</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 glass-card">Column 1</div>
              <div className="p-4 glass-card">Column 2</div>
              <div className="p-4 glass-card">Column 3</div>
              <div className="p-4 glass-card">Column 4</div>
              <div className="p-4 glass-card">Column 5</div>
              <div className="p-4 glass-card">Column 6</div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="game-card">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+12.3% from last month</p>
              </CardContent>
            </Card>

            <Card className="game-card">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Servers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">567</div>
                <p className="text-xs text-muted-foreground">+5.2% from last week</p>
              </CardContent>
            </Card>

            <Card className="game-card">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.9%</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>

            <Card className="game-card">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45ms</div>
                <p className="text-xs text-muted-foreground">Average</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DesignSystem;

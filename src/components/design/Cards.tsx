import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Cards = () => {
  return (
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
  );
};
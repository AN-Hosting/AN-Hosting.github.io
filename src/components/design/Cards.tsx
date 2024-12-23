import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Cards = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Cartes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="game-card">
          <CardHeader>
            <CardTitle>Carte standard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Carte basique avec titre et contenu.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Carte en verre</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Carte avec effet de verre.</p>
          </CardContent>
        </Card>

        <Card className="game-card neon-border">
          <CardHeader>
            <CardTitle>Carte néon</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Carte avec effet de bordure néon.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const GradientCards = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Cartes dégradées</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="dayz-style-1">
          <CardHeader>
            <CardTitle>Dégradé gris foncé</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dégradé de gris-900 à gris-800</p>
          </CardContent>
        </Card>

        <Card className="dayz-style-2">
          <CardHeader>
            <CardTitle>Dégradé vert</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dégradé de vert-900 à vert-800</p>
          </CardContent>
        </Card>

        <Card className="dayz-style-3">
          <CardHeader>
            <CardTitle>Dégradé bleu</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dégradé de bleu-900 à bleu-800</p>
          </CardContent>
        </Card>

        <Card className="dayz-style-4">
          <CardHeader>
            <CardTitle>Dégradé rouge</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dégradé de rouge-900 à rouge-800</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

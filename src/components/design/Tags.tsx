import { Badge } from '@/components/ui/badge';

export const Tags = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Étiquettes & Badges</h2>
      <div className="flex flex-wrap gap-2">
        <Badge>Par défaut</Badge>
        <Badge variant="secondary">Secondaire</Badge>
        <Badge variant="destructive">Suppression</Badge>
        <Badge variant="outline">Contour</Badge>
        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">Dégradé</Badge>
      </div>
    </section>
  );
};

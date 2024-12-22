import { Button } from '@/components/ui/button';

export const Buttons = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Boutons</h2>
      <div className="flex flex-wrap gap-4">
        <Button>Bouton par défaut</Button>
        <Button variant="secondary">Secondaire</Button>
        <Button variant="destructive">Suppression</Button>
        <Button variant="outline">Contour</Button>
        <Button variant="ghost">Fantôme</Button>
        <Button className="animate-pulse hover:animate-none">Bouton animé</Button>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          Bouton dégradé
        </Button>
      </div>
    </section>
  );
};
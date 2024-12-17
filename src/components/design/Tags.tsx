import { Badge } from '@/components/ui/badge';

export const Tags = () => {
  return (
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
  );
};
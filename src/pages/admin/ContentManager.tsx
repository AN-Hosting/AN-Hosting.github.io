import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const ContentManager = () => {
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [content, setContent] = useState('');
  const { toast } = useToast();

  const handleSave = () => {
    if (!selectedGame || !selectedCategory || !content) {
      toast({
        title: "Erreur",
        description: "Tous les champs sont requis",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Succès",
      description: "Le contenu a été sauvegardé avec succès"
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestion du contenu</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <Select value={selectedGame} onValueChange={setSelectedGame}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un jeu" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="minecraft">Minecraft</SelectItem>
              <SelectItem value="dayz">DayZ</SelectItem>
              <SelectItem value="fivem">FiveM</SelectItem>
              <SelectItem value="cs2">CS2</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner une catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="installation">Installation</SelectItem>
              <SelectItem value="configuration">Configuration</SelectItem>
              <SelectItem value="plugins">Plugins</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Contenu de la page..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[300px]"
          />

          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" /> Sauvegarder
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
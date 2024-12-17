import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash2, Edit } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Category {
  id: string;
  gameId: string;
  name: string;
  path: string;
}

export const CategoriesManager = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState({ gameId: '', name: '', path: '' });
  const { toast } = useToast();

  const handleAddCategory = () => {
    if (!newCategory.name || !newCategory.gameId) {
      toast({
        title: "Erreur",
        description: "Tous les champs sont requis",
        variant: "destructive"
      });
      return;
    }

    setCategories([...categories, { ...newCategory, id: Date.now().toString() }]);
    setNewCategory({ gameId: '', name: '', path: '' });
    toast({
      title: "Succès",
      description: "La catégorie a été ajoutée avec succès"
    });
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter(category => category.id !== id));
    toast({
      title: "Succès",
      description: "La catégorie a été supprimée avec succès"
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestion des catégories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <Select
            value={newCategory.gameId}
            onValueChange={(value) => setNewCategory({ ...newCategory, gameId: value })}
          >
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

          <Input
            placeholder="Nom de la catégorie"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
          />

          <Input
            placeholder="Chemin (ex: /installation)"
            value={newCategory.path}
            onChange={(e) => setNewCategory({ ...newCategory, path: e.target.value })}
          />

          <Button onClick={handleAddCategory}>
            <Plus className="mr-2 h-4 w-4" /> Ajouter
          </Button>
        </div>

        <div className="grid gap-4">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">{category.name}</p>
                <p className="text-sm text-muted-foreground">{category.path}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon" onClick={() => handleDeleteCategory(category.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
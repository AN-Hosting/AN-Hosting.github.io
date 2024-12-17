import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Edit } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Game {
  id: string;
  name: string;
  icon: string;
}

export const GamesManager = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [newGame, setNewGame] = useState({ name: '', icon: '🎮' });
  const { toast } = useToast();

  const handleAddGame = () => {
    if (!newGame.name) {
      toast({
        title: "Erreur",
        description: "Le nom du jeu est requis",
        variant: "destructive"
      });
      return;
    }

    setGames([...games, { ...newGame, id: Date.now().toString() }]);
    setNewGame({ name: '', icon: '🎮' });
    toast({
      title: "Succès",
      description: "Le jeu a été ajouté avec succès"
    });
  };

  const handleDeleteGame = (id: string) => {
    setGames(games.filter(game => game.id !== id));
    toast({
      title: "Succès",
      description: "Le jeu a été supprimé avec succès"
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestion des jeux</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4">
          <Input
            placeholder="Nom du jeu"
            value={newGame.name}
            onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
          />
          <Input
            placeholder="Icône"
            value={newGame.icon}
            onChange={(e) => setNewGame({ ...newGame, icon: e.target.value })}
            className="w-24"
          />
          <Button onClick={handleAddGame}>
            <Plus className="mr-2 h-4 w-4" /> Ajouter
          </Button>
        </div>

        <div className="grid gap-4">
          {games.map((game) => (
            <div key={game.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{game.icon}</span>
                <span className="font-medium">{game.name}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon" onClick={() => handleDeleteGame(game.id)}>
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
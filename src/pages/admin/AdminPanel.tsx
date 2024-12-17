import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GamesManager } from './GamesManager';
import { CategoriesManager } from './CategoriesManager';
import { ContentManager } from './ContentManager';

const AdminPanel = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Panneau d'administration</h1>
        </div>

        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="games">Jeux</TabsTrigger>
            <TabsTrigger value="categories">Catégories</TabsTrigger>
            <TabsTrigger value="content">Contenu</TabsTrigger>
          </TabsList>
          <TabsContent value="games">
            <GamesManager />
          </TabsContent>
          <TabsContent value="categories">
            <CategoriesManager />
          </TabsContent>
          <TabsContent value="content">
            <ContentManager />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminPanel;
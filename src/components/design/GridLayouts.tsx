export const GridLayouts = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Dispositions en grille</h2>

      <div className="space-y-4">
        <h3 className="text-xl font-medium">Deux colonnes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 glass-card">Colonne 1</div>
          <div className="p-4 glass-card">Colonne 2</div>
        </div>

        <h3 className="text-xl font-medium">Quatre colonnes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 glass-card">Colonne 1</div>
          <div className="p-4 glass-card">Colonne 2</div>
          <div className="p-4 glass-card">Colonne 3</div>
          <div className="p-4 glass-card">Colonne 4</div>
        </div>

        <h3 className="text-xl font-medium">Six colonnes</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="p-4 glass-card">Colonne 1</div>
          <div className="p-4 glass-card">Colonne 2</div>
          <div className="p-4 glass-card">Colonne 3</div>
          <div className="p-4 glass-card">Colonne 4</div>
          <div className="p-4 glass-card">Colonne 5</div>
          <div className="p-4 glass-card">Colonne 6</div>
        </div>
      </div>
    </section>
  );
};

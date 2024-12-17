export const GridLayouts = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Grid Layouts</h2>
      
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Two Columns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 glass-card">Column 1</div>
          <div className="p-4 glass-card">Column 2</div>
        </div>

        <h3 className="text-xl font-medium">Four Columns</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 glass-card">Column 1</div>
          <div className="p-4 glass-card">Column 2</div>
          <div className="p-4 glass-card">Column 3</div>
          <div className="p-4 glass-card">Column 4</div>
        </div>

        <h3 className="text-xl font-medium">Six Columns</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="p-4 glass-card">Column 1</div>
          <div className="p-4 glass-card">Column 2</div>
          <div className="p-4 glass-card">Column 3</div>
          <div className="p-4 glass-card">Column 4</div>
          <div className="p-4 glass-card">Column 5</div>
          <div className="p-4 glass-card">Column 6</div>
        </div>
      </div>
    </section>
  );
};
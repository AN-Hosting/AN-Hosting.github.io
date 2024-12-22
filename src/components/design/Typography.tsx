export const Typography = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Typographie</h2>
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">Titre 1</h1>
        <h2 className="text-4xl font-semibold">Titre 2</h2>
        <h3 className="text-3xl font-semibold">Titre 3</h3>
        <h4 className="text-2xl font-medium">Titre 4</h4>
        <p className="text-xl">Texte large pour contenu important.</p>
        <p className="text-base">Texte normal pour contenu général et documentation.</p>
        <p className="text-sm text-muted-foreground">Petit texte pour légendes et informations secondaires.</p>
      </div>
    </section>
  );
};
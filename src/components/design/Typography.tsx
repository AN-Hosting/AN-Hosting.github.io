export const Typography = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Typography</h2>
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">Heading 1</h1>
        <h2 className="text-4xl font-semibold">Heading 2</h2>
        <h3 className="text-3xl font-semibold">Heading 3</h3>
        <h4 className="text-2xl font-medium">Heading 4</h4>
        <p className="text-xl">Large paragraph text for important content.</p>
        <p className="text-base">Regular paragraph text for general content and documentation.</p>
        <p className="text-sm text-muted-foreground">Small text for captions and secondary information.</p>
      </div>
    </section>
  );
};
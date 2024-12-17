export const CodeBlocks = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Code Blocks</h2>
      <div className="space-y-4">
        <pre className="code-block">
          <code>{`// Example configuration
{
  "server": {
    "port": 25565,
    "maxPlayers": 100
  }
}`}</code>
        </pre>

        <pre className="code-block bg-green-500/10 border-green-500/20">
          <code>{`+ Added new feature
+ Updated configuration
+ Fixed bug #123`}</code>
        </pre>

        <pre className="code-block bg-red-500/10 border-red-500/20">
          <code>{`- Removed deprecated code
- Cleaned up unused imports`}</code>
        </pre>
      </div>
    </section>
  );
};
import { Info, Check, AlertTriangle } from 'lucide-react';

export const Alerts = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Alertes</h2>
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-500 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-500">Information</h4>
            <p className="text-sm text-blue-400">Ceci est un message d'information.</p>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start gap-3">
          <Check className="w-5 h-5 text-green-500 mt-0.5" />
          <div>
            <h4 className="font-medium text-green-500">Succès</h4>
            <p className="text-sm text-green-400">L'opération a été effectuée avec succès.</p>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-500">Avertissement</h4>
            <p className="text-sm text-yellow-400">Veuillez vérifier avant de continuer.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
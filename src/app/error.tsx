"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log do erro no console (Em produção poderia enviar para Sentry, Datadog, etc)
    console.error("Erro capturado pelo Error Boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1117] text-white p-4">
      <div className="bg-[#161b22] border border-red-500/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(255,51,51,0.15)] max-w-md w-full text-center flex flex-col items-center">
        <AlertCircle className="w-16 h-16 text-red-500 mb-6" />
        
        <h2 className="text-2xl font-bold mb-2">Ops! Algo deu errado.</h2>
        
        <p className="text-[#8ba5c2] mb-8 text-sm leading-relaxed">
          Ocorreu um erro interno na aplicação ao tentar carregar este componente. 
          Não se preocupe, o problema já foi registrado!
        </p>
        
        <button
          onClick={() => reset()} // Tenta renderizar o componente de página novamente
          className="flex items-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/50 text-red-400 font-semibold rounded-xl transition-all w-full justify-center"
        >
          <RefreshCcw className="w-4 h-4" />
          Tentar Renderizar Novamente
        </button>
      </div>
    </div>
  );
}

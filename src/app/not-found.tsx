import Link from "next/link";
import { Map, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1117] text-white p-4">
      <div className="bg-[#161b22] border border-sky-500/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.1)] max-w-md w-full text-center flex flex-col items-center">
        <Map className="w-16 h-16 text-[#38bdf8] mb-6" />
        
        <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-emerald-400 mb-2">
          404
        </h2>
        
        <h3 className="text-xl font-bold mb-3">Você saiu do mapa!</h3>
        
        <p className="text-[#8ba5c2] mb-8 text-sm leading-relaxed">
          A página que você está procurando não existe ou foi movida. 
          Volte para continuar explorando o Roadmap IFMG.
        </p>
        
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 border border-[#38bdf8]/50 text-[#38bdf8] font-semibold rounded-xl transition-all w-full justify-center"
        >
          <ArrowLeft className="w-4 h-4" />
          Retornar ao Mapa Principal
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import DotBackgroundDemo from "@/components/dot-background-demo";
import { SidePanel } from "@/components/SidePanel";
import { SkillMap } from "@/components/SkillMap";
import { OnboardingModal } from "@/components/OnboardingModal";

// Importa o provedor de contexto do React Flow
import { ReactFlowProvider } from "@xyflow/react";

// Componente principal da página inicial
export default function Home() {
  // Estado reservado para controle de expansão global
  const [isExpanded, setIsExpanded] = useState(false);

  // Renderiza a árvore de componentes
  return (
    // Fundo estilizado com grid de pontos
    <DotBackgroundDemo>
      {/* Provedor global do React Flow para compartilhar controle de câmera e zoom */}
      <ReactFlowProvider>
        {/* Container principal que ocupa toda a tela */}
        <main className="relative w-full h-full min-h-screen">
          {/* Mapa do React Flow por trás de tudo */}
          <SkillMap />

          {/* Painel lateral de carreiras (SidePanel) fixo na esquerda */}
          <div className="fixed top-0 left-0 z-40 h-full pointer-events-auto">
            <SidePanel />
          </div>

          {/* Modal de Onboarding no topo de tudo */}
          <OnboardingModal />
        </main>
      </ReactFlowProvider>
    </DotBackgroundDemo>
  );
}

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Flame, Lock } from "lucide-react";
import { motion, AnimatePresence, Transition } from "framer-motion";

interface DiamondCardProps {
  className?: string;
  image?: string;
  title?: string;
  description?: string;
  status?: "pendente" | "adquirido";
  isExpanded?: boolean;
  isListMode?: boolean;
  interactive?: boolean;
  // Ícone exibido no centro do cartão
  icon?: React.ElementType;
  // Flag que indica se o cartão está temporariamente em destaque por uma busca
  isHighlighted?: boolean;
  // Flag que indica se a matéria faz parte da trilha de carreira selecionada
  isTrail?: boolean;
  // Callback disparado ao tentar alternar o status do cartão
  onStatusChange?: (isActive: boolean) => boolean | string | void;
}

// Componente principal do cartão em formato de diamante/losango
export function DiamondCard({
  className,
  title,
  description,
  status = "pendente",
  isExpanded = false,
  isListMode = false,
  interactive = false,
  isHighlighted = false, // Propriedade de destaque de busca
  isTrail = false, // Efeito amarelo da trilha de carreira
  icon: Icon = Flame,
  onStatusChange,
}: DiamondCardProps) {
  // Estado local para controle do efeito Neon e Erros
  const [isNeonActive, setIsNeonActive] = useState(status === "adquirido");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Sincroniza estado com a prop, caso ela mude
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsNeonActive(status === "adquirido");
  }, [status]);

  // Função para alternar o status apenas se for interativo
  const toggleNeon = () => {
    if (interactive) {
      const newState = !isNeonActive;

      // Se houver callback, verifica se ele permitiu a mudança
      if (onStatusChange) {
        const result = onStatusChange(newState);

        // Se retornar uma string, significa que foi bloqueado por um pré-requisito (o nome da matéria)
        if (typeof result === "string") {
          setErrorMsg(result);
          // Auto-dispensa o erro após 3 segundos
          setTimeout(() => setErrorMsg(null), 3000);
          return;
        }

        if (result === false) return;
      }

      setIsNeonActive(newState);
    }
  };

  // Dynamic layout values
  const expandedWidth = 390;
  const normalWidth = 140;
  const listWidth = 290; // Largura reduzida para evitar overflow e barras de rolagem
  const listHeight = 50; // Reduzido em aprox 30% (de 70 para 50)

  // SVG polygon points
  const normalPoints = "69.9,12 70.1,12 128,70 70.1,128 69.9,128 12,70";
  const expandedPoints = "70,12 320,12 378,70 320,128 70,128 12,70";
  const listPoints = "35,12 255,12 278,25 255,38 35,38 12,25";

  // Shared fluid transition configuration
  const fluidTransition: Transition = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 };

  return (
    <>
      <motion.div
        layout
        initial={false}
        animate={{
          width: isListMode ? listWidth : isExpanded ? expandedWidth : normalWidth,
          height: isListMode ? listHeight : 140,
          opacity: isNeonActive ? 1 : 0.55,
        }}
        whileHover={
          !isExpanded && !isListMode
            ? { scale: 1.1, opacity: isNeonActive ? 1 : 0.8 }
            : { opacity: isNeonActive ? 1 : 0.8 }
        }
        transition={fluidTransition}
        className={cn(
          "group relative flex items-center justify-center",
          interactive && "cursor-pointer",
          className
        )}
        onClick={toggleNeon}
        role={interactive ? "button" : "region"}
        aria-pressed={interactive ? isNeonActive : undefined}
        aria-label={`Disciplina ${title || "Desconhecida"}. Status: ${isNeonActive ? "Concluída" : "Pendente"}.`}
        tabIndex={interactive ? 0 : undefined}
        onKeyDown={(e) => {
          if (interactive && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            toggleNeon();
          }
        }}
      >
        {/* SVG Background Layer for Perfect Rounded Corners */}
        <svg
          className="absolute inset-0 drop-shadow-xl transition-all duration-500"
          width="100%"
          height="100%"
          style={{ overflow: "visible" }}
        >
          {/* Contorno azul do próprio losango que pisca lentamente ao achar a disciplina */}
          {isHighlighted && (
            // Polígono SVG animado com a mesma geometria e cantos arredondados do losango
            <motion.polygon
              initial={{ opacity: 0 }} // Opacidade inicial antes de animar
              animate={{
                // Pontos exatos que desenham a silhueta do losango (normal, expandido ou lista)
                points: isListMode ? listPoints : isExpanded ? expandedPoints : normalPoints,
                opacity: [0.15, 1, 0.15], // Pisca suave e lentamente entre baixa e alta opacidade
              }}
              transition={{
                points: fluidTransition, // Transição suave de escala e formato
                opacity: {
                  repeat: Infinity, // Repetição contínua durante os 2 segundos
                  duration: 1.0, // Duração de 1 segundo por ciclo para piscar lentamente
                  ease: "easeInOut", // Interpolação suave
                },
              }}
              fill="none" // Sem preenchimento interno para não cobrir o conteúdo
              stroke="#38bdf8" // Cor da linha azul brilhante
              strokeWidth="32" // Expansão calculada para criar uma borda de 4px ao redor do losango
              strokeLinejoin="round" // Cantos arredondados perfeitos
              style={{
                // Efeito de brilho neon azul sobre o contorno
                filter:
                  "drop-shadow(0 0 16px rgba(56, 189, 248, 0.95)) drop-shadow(0 0 6px #38bdf8)",
              }}
            />
          )}

          {/* Contorno amarelo brilhante estático quando a matéria faz parte da trilha da profissão selecionada */}
          {isTrail && !isHighlighted && (
            <motion.polygon
              initial={{ opacity: 0 }}
              animate={{
                points: isListMode ? listPoints : isExpanded ? expandedPoints : normalPoints,
                opacity: 1,
              }}
              transition={{ points: fluidTransition, opacity: { duration: 0.5 } }}
              fill="none"
              stroke="#facc15" // Amarelo vibrante
              strokeWidth="32"
              strokeLinejoin="round"
              style={{
                filter:
                  "drop-shadow(0 0 16px rgba(250, 204, 21, 0.6)) drop-shadow(0 0 6px #facc15)",
              }}
            />
          )}

          {/* Polígono base do losango (renderizado por cima para recortar o contorno perfeitamente) */}
          <motion.polygon
            animate={{
              points: isListMode ? listPoints : isExpanded ? expandedPoints : normalPoints,
            }}
            transition={fluidTransition}
            fill="#28313A"
            stroke="#28313A"
            strokeWidth="24"
            strokeLinejoin="round"
            className="transition-opacity duration-500 group-hover:opacity-80"
          />
        </svg>

        {/* Inner Content Layout */}
        <div
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center h-full overflow-hidden"
          )}
        >
          {/* Spacer mantido no código ("sem remover nada"), mas com width 0 no modo expandido para não desestabilizar a centralização matemática */}
          <motion.div
            initial={false}
            animate={{ width: !isExpanded && !isListMode ? 0 : isListMode ? 20 : 0 }}
            transition={fluidTransition}
            className="flex-shrink-0"
          />

          {/* Icon Container with Neon Effect */}
          <motion.div
            layout
            transition={fluidTransition}
            className="flex-shrink-0 flex items-center justify-center relative"
          >
            {/* Base Gray Icon */}
            <Icon
              className={cn(
                "transition-all duration-500",
                errorMsg ? "opacity-0" : "text-[#87a7a8]"
              )}
              size={isListMode ? 22 : 70}
              strokeWidth={2}
            />
            {/* Neon Fill Overlay */}
            <motion.div
              initial={false}
              animate={{ clipPath: isNeonActive ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className={cn(
                "absolute inset-0 overflow-hidden flex items-center justify-center",
                errorMsg && "opacity-0"
              )}
            >
              {/* Ícone com efeito luminoso de preenchimento em verde mantendo traços transparentes */}
              <Icon
                className="transition-all duration-500 text-green-400" // Cor verde vibrante para os traços
                fill="none" // Garante que o interior de formas como círculos não seja preenchido
                size={isListMode ? 22 : 70} // Tamanho adaptado ao modo
                strokeWidth={2} // Espessura dos traços
              />
            </motion.div>

            {/* Feedback de Erro: Cadeado Vermelho */}
            <AnimatePresence>
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute inset-0 z-20 flex items-center justify-center"
                >
                  <Lock
                    size={isListMode ? 22 : 60}
                    strokeWidth={2.5}
                    style={{ color: "#ff3333" }} // Vermelho mais claro e luminoso que o FF0000 (efeito neon sem sombra)
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Text Content (Fades in when expanded or list mode) */}
          <AnimatePresence>
            {(isExpanded || isListMode) && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.15 } }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15, delay: 0 } }}
                className={cn(
                  "ml-4 flex flex-col items-start text-left flex-shrink-0",
                  isListMode ? "w-[100px]" : "w-[190px]"
                )}
              >
                {title && (
                  <motion.h3
                    initial={false}
                    animate={{ color: isNeonActive ? "#4ade80" : "#ffffff" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className={cn(
                      "font-bold tracking-widest text-balance leading-tight",
                      isListMode ? "mb-0.5 text-[15px]" : "mb-1 text-lg"
                    )}
                  >
                    {title}
                  </motion.h3>
                )}
                {description && (
                  <motion.p
                    initial={false}
                    animate={{ color: isNeonActive ? "rgba(134, 239, 172, 0.8)" : "#d4d4d8" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="font-medium leading-tight text-xs"
                  >
                    {description}
                  </motion.p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Tooltip Modal de Pré-Requisito Faltando (Renderizado TOTALMENTE FORA do escopo de opacidade do card pai) */}
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              position: "absolute",
              left: "130px",
              top: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              zIndex: 2147483647, // Maior z-index possível do navegador
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "260px",
                padding: "16px 20px",
                borderRadius: "10px",
                backgroundColor: "#161b22", // Fundo SÓLIDO
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "4px solid #ff3333",
                boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
                marginLeft: "24px",
              }}
            >
              {/* Seta vermelha apontando para o card */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "-9px",
                  transform: "translateY(-50%)",
                  width: 0,
                  height: 0,
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderRight: "9px solid #ff3333",
                }}
              />

              <p
                style={{
                  color: "#8ba5c2",
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Você precisa concluir a disciplina <br />
                <span
                  style={{
                    color: "#ff3333",
                    fontWeight: 800,
                    fontSize: "14.5px",
                    marginTop: "4px",
                    display: "inline-block",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {errorMsg}
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

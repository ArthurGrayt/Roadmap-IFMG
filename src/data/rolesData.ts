import {
  Code,
  Database,
  Layout,
  Smartphone,
  Server,
  Briefcase,
  Calculator,
  BookOpen,
  Brain,
  Network,
  FileText,
  Terminal,
  Globe,
  Binary,
  PieChart,
  ShieldCheck,
  Cpu,
  Target,
  LineChart,
  Gamepad2,
  Settings,
  Workflow,
  Lightbulb,
  Users,
  BarChart,
  Compass,
  Layers,
  Boxes,
  Box,
  Blocks,
  ClipboardList,
  HardDrive,
  Scale,
  FileSearch,
  GraduationCap,
  PlusCircle,
  Languages,
  BookText,
  Kanban,
  CircuitBoard,
  ScrollText,
} from "lucide-react";

import { SKILLS, Skill as ConfigSkill } from "./skills-config";

// Interface para as skills usada pelos componentes UI
export interface Skill {
  id: string;
  title: string;
  icon: React.ElementType;
  status: "adquirido" | "pendente";
  prerequisites?: string[];
  description?: string;
}

export interface Role {
  name: string;
  skills: string[];
}

// Em vez de trilhas genéricas, usamos as categorias de carreiras e as profissões exatas do IFMG
export interface Category {
  category: string;
  roles: Role[];
}

// Função para mapear um ícone baseado no nome da disciplina
const getIconForSkill = (skill: ConfigSkill) => {
  const name = skill.name.toLowerCase();

  if (name.includes("optativa")) return PlusCircle; // Único que pode repetir

  // Progressões visuais e itens específicos com cuidado para não repetir
  if (name.includes("banco de dados")) {
    if (name.includes("ii")) return HardDrive; // Removido Server para não chocar com Sist. Distrib.
    return Database;
  }
  if (name.includes("algoritmo") || name.includes("estrutura de dados")) {
    if (name.includes("ii")) return Boxes;
    return Box;
  }
  if (name.includes("orientada a objetos")) {
    if (name.includes("ii")) return Blocks;
    return Code;
  }
  if (name.includes("engenharia de software")) {
    if (name.includes("ii")) return Workflow;
    return ClipboardList;
  }
  if (name.includes("trabalho de conclusão")) {
    if (name.includes("ii")) return GraduationCap;
    return ScrollText; // TCC I
  }
  if (name.includes("português")) return BookText;
  if (name.includes("inglês")) return Languages;

  // Demais matérias (1-para-1)
  if (name.includes("ética") || name.includes("legislação")) return Scale;
  if (name.includes("pesquisa")) return FileSearch;
  if (name.includes("cálculo")) return Calculator;
  if (name.includes("redes")) return Network;
  if (name.includes("sistemas de informação")) return Layers;
  if (name.includes("introdução à programação") || name.includes("introducao a programacao"))
    return Terminal;
  if (name.includes("programação web")) return Globe;
  if (name.includes("interface humano")) return Layout;
  if (name.includes("sistemas operacionais")) return Settings;
  if (name.includes("dispositivos móveis")) return Smartphone;
  if (name.includes("sistemas distribuídos")) return Server;
  if (name.includes("pré-cálculo") || name.includes("pre-calculo")) return Compass;
  if (name.includes("probabilidade") || name.includes("estatística")) return PieChart;
  if (name.includes("álgebra")) return LineChart;
  if (name.includes("apoio a decisão")) return Target;
  if (name.includes("inteligência artificial")) return Brain;
  if (name.includes("matemática discreta")) return Binary;
  if (name.includes("projeto e análise")) return FileText;
  if (name.includes("qualidade de software")) return ShieldCheck;

  // Sistemas digitais vs Arquitetura
  if (name.includes("sistemas digitais") || name.includes("circuitos")) return CircuitBoard;
  if (name.includes("arquitetura e organização")) return Cpu;

  if (name.includes("administração")) return Briefcase;
  if (name.includes("governança")) return Users;
  if (name.includes("gestão de projetos") || name.includes("gestao de projetos")) return Kanban; // Substitui Target
  if (name.includes("contabilidade")) return BarChart;
  if (name.includes("empreendedorismo")) return Lightbulb;
  if (name.includes("jogos digitais")) return Gamepad2;

  return BookOpen; // Fallback extremo
};

// Converte dinamicamente as disciplinas de skills-config para o formato esperado pelo UI
export const ALL_SKILLS: Record<string, Skill> = {};

SKILLS.forEach((skill) => {
  ALL_SKILLS[skill.id] = {
    id: skill.id,
    title: skill.name,
    icon: getIconForSkill(skill),
    status: skill.status === "completed" || skill.status === "available" ? "adquirido" : "pendente",
    prerequisites: skill.logicalPrerequisites,
    description: skill.notes || "Disciplina do curso.",
  };
});

// Roles baseadas rigidamente nas Carreiras & Skills Necessárias do Roadmap IFMG-OB
export const CAREER_DATA: Category[] = [
  {
    category: "Desenvolvimento Web e Mobile",
    roles: [
      {
        name: "Desenvolvedor Front-end",
        skills: ["introducao-a-programacao", "programacao-web", "interface-humano-computador"],
      },
      {
        name: "Desenvolvedor Back-end",
        skills: [
          "introducao-a-programacao",
          "algoritmos-e-estrutura-de-dados-i",
          "algoritmos-e-estrutura-de-dados-ii",
          "programacao-orientada-a-objetos-i",
          "programacao-orientada-a-objetos-ii",
          "banco-de-dados-i",
          "sistemas-operacionais",
        ],
      },
      {
        name: "Desenvolvedor Fullstack",
        skills: [
          "introducao-a-programacao",
          "programacao-web",
          "interface-humano-computador",
          "algoritmos-e-estrutura-de-dados-i",
          "algoritmos-e-estrutura-de-dados-ii",
          "programacao-orientada-a-objetos-i",
          "programacao-orientada-a-objetos-ii",
          "banco-de-dados-i",
          "sistemas-operacionais",
        ],
      },
      {
        name: "Desenvolvedor Mobile",
        skills: [
          "introducao-a-programacao",
          "programacao-orientada-a-objetos-i",
          "programacao-para-dispositivos-moveis",
        ],
      },
    ],
  },
  {
    category: "Dados e Inteligência Artificial",
    roles: [
      {
        name: "Cientista / Analista de Dados",
        skills: [
          "pre-calculo",
          "calculo-diferencial-e-integral-i",
          "probabilidade-e-estatistica",
          "algebra-linear-e-geometria-analitica",
          "banco-de-dados-i",
          "sistemas-de-apoio-a-decisao",
        ],
      },
      {
        name: "Engenheiro de Dados",
        skills: [
          "introducao-a-programacao",
          "banco-de-dados-i",
          "sistemas-operacionais",
          "sistemas-distribuidos",
          "redes-de-computadores-i",
        ],
      },
      {
        name: "Especialista em Machine Learning",
        skills: [
          "pre-calculo",
          "calculo-diferencial-e-integral-i",
          "probabilidade-e-estatistica",
          "algebra-linear-e-geometria-analitica",
          "banco-de-dados-i",
          "sistemas-de-apoio-a-decisao",
          "inteligencia-artificial",
          "matematica-discreta",
          "projeto-e-analise-de-algoritmos",
        ],
      },
    ],
  },
  {
    category: "Engenharia de Software e Infraestrutura",
    roles: [
      {
        name: "Arquiteto de Software",
        skills: [
          "engenharia-de-software-i",
          "engenharia-de-software-ii",
          "qualidade-de-software",
          "projeto-e-analise-de-algoritmos",
          "sistemas-distribuidos",
          "arquitetura-e-organizacao-de-computadores",
        ],
      },
      {
        name: "Analista de Qualidade (QA)",
        skills: ["introducao-a-programacao", "engenharia-de-software-i", "qualidade-de-software"],
      },
      {
        name: "SysAdmin / DevOps",
        skills: [
          "arquitetura-e-organizacao-de-computadores",
          "sistemas-operacionais",
          "redes-de-computadores-i",
          "sistemas-distribuidos",
        ],
      },
    ],
  },
  {
    category: "Gestão, Negócios e Produto",
    roles: [
      {
        name: "Product Manager (PM)",
        skills: [
          "principios-da-administracao-i",
          "governanca-e-gestao-de-informacao",
          "interface-humano-computador",
          "engenharia-de-software-i",
        ],
      },
      {
        name: "Gerente de Projetos",
        skills: ["principios-da-administracao-i", "gestao-de-projetos", "engenharia-de-software-i"],
      },
      {
        name: "Empreendedor de TI",
        skills: [
          "principios-da-administracao-i",
          "contabilidade",
          "governanca-e-gestao-de-informacao",
          "empreendedorismo",
        ],
      },
    ],
  },
  {
    category: "Jogos Digitais",
    roles: [
      {
        name: "Desenvolvedor de Jogos",
        skills: [
          "programacao-orientada-a-objetos-i",
          "programacao-orientada-a-objetos-ii",
          "projeto-e-analise-de-algoritmos",
          "topicos-em-desenvolvimento-de-jogos-digitais",
        ],
      },
    ],
  },
];

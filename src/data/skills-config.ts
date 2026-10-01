// Define o tipo para os níveis das skills, variando de 1 a 8
export type SkillLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// Define as categorias possíveis para uma disciplina
export type SkillCategory = "obrigatoria" | "optativa" | "expansao";

// Define as cores temáticas de cada nível
export type LevelColor = "green" | "blue" | "purple" | "orange" | "yellow" | "orange2" | "red" | "gold";

// Define o status atual de progresso de uma skill
export type SkillStatus = "locked" | "available" | "in_progress" | "completed";

// Define os IDs únicos para cada skill (disciplinas obrigatórias e optativas)
export type SkillId =
  // Nível 1
  | "etica-e-legislacao"
  | "introducao-a-programacao"
  | "introducao-a-sistemas-de-informacao"
  | "portugues-instrumental-i"
  | "pre-calculo"
  | "principios-da-administracao-i"
  // Nível 2
  | "algoritmos-e-estrutura-de-dados-i"
  | "calculo-diferencial-e-integral-i"
  | "ingles-instrumental-i"
  | "metodos-e-tecnicas-de-pesquisa"
  | "programacao-orientada-a-objetos-i"
  | "sistemas-digitais-e-circuitos-combinacionais"
  // Nível 3
  | "algoritmos-e-estrutura-de-dados-ii"
  | "arquitetura-e-organizacao-de-computadores"
  | "banco-de-dados-i"
  | "contabilidade"
  | "engenharia-de-software-i"
  // Nível 4
  | "algebra-linear-e-geometria-analitica"
  | "matematica-discreta"
  | "programacao-orientada-a-objetos-ii"
  | "programacao-web"
  | "sistemas-operacionais"
  // Nível 5
  | "engenharia-de-software-ii"
  | "governanca-e-gestao-de-informacao"
  | "probabilidade-e-estatistica"
  | "redes-de-computadores-i"
  | "optativa-i"
  // Nível 6
  | "programacao-para-dispositivos-moveis"
  | "projeto-e-analise-de-algoritmos"
  | "sistemas-de-apoio-a-decisao"
  | "sistemas-distribuidos"
  | "optativa-ii"
  // Nível 7
  | "gestao-de-projetos"
  | "inteligencia-artificial"
  | "interface-humano-computador"
  | "trabalho-de-conclusao-de-curso-i"
  | "optativa-iii"
  // Nível 8
  | "empreendedorismo"
  | "qualidade-de-software"
  | "trabalho-de-conclusao-de-curso-ii"
  | "optativa-iv"
  // Expansões
  | "administracao-financeira-i"
  | "avaliacao-de-empresas"
  | "banco-de-dados-ii"
  | "calculo-numerico"
  | "comportamento-organizacional"
  | "computacao-grafica"
  | "consultoria-empresarial"
  | "gerencia-de-projetos-de-software"
  | "gestao-ambiental"
  | "gestao-da-inovacao"
  | "gestao-de-recursos-humanos"
  | "gestao-de-servicos"
  | "gestao-do-conhecimento"
  | "ingles-instrumental-ii"
  | "ingles-para-negocios-i-e-ii"
  | "inteligencia-competitiva"
  | "libras"
  | "linguagens-formais-e-automatos"
  | "logistica-reversa"
  | "mineracao-de-dados"
  | "portugues-instrumental-ii"
  | "processamento-de-imagens"
  | "qualidade-de-vida-no-trabalho"
  | "redes-de-computadores-ii"
  | "sistemas-de-garantia-de-qualidade"
  | "teoria-dos-grafos"
  | "topicos-avancados"
  | "topicos-especiais"
  | "topicos-em-desenvolvimento-de-jogos-digitais";

// Interface que define a estrutura de uma Skill/Disciplina
export interface Skill {
  // Identificador único da skill
  id: SkillId;
  // Nome completo da disciplina, usado no título do DiamondCard
  name: string;
  // Nível/período na grade (pode ser null para expansões)
  level: SkillLevel | null;
  // Cor associada ao nível (null para expansões)
  levelColor: LevelColor | null;
  // Categoria da skill
  category: SkillCategory;
  // Lista de pré-requisitos oficiais listados na matriz
  officialPrerequisites: SkillId[];
  // Lista de pré-requisitos lógicos (do semestre anterior)
  logicalPrerequisites: SkillId[];
  // Indica se possui bloqueio oficial
  hasOfficialLock: boolean;
  // Status atual de conclusão
  status: SkillStatus;
  // Período correspondente
  period: string | null;
  // Observações opcionais, pode ser usado como descrição no DiamondCard
  notes?: string;
  // Opcional: ícone associado à skill (nome do ícone ou componente)
  iconName?: string;
}

// Lista principal que armazena todas as disciplinas configuradas
export const SKILLS: Skill[] = [
  // ==========================
  // NÍVEL 1
  // ==========================
  {
    // Define o ID único
    id: "etica-e-legislacao",
    // Define o nome legível
    name: "Ética e Legislação",
    // Define o nível como 1
    level: 1,
    // Define a cor como verde
    levelColor: "green",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Sem pré-requisitos lógicos
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia como disponível
    status: "available",
    // Pertence ao 1º Período
    period: "1º Período",
    // Descrição para o card
    notes: "Fundamentos de ética profissional."
  },
  {
    // Define o ID único
    id: "introducao-a-programacao",
    // Define o nome legível
    name: "Introdução à Programação",
    // Define o nível como 1
    level: 1,
    // Define a cor como verde
    levelColor: "green",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Sem pré-requisitos lógicos
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia como disponível
    status: "available",
    // Pertence ao 1º Período
    period: "1º Período",
    // Descrição para o card
    notes: "Lógica e algoritmos básicos."
  },
  {
    // Define o ID único
    id: "introducao-a-sistemas-de-informacao",
    // Define o nome legível
    name: "Introdução a Sistemas de Informação",
    // Define o nível como 1
    level: 1,
    // Define a cor como verde
    levelColor: "green",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Sem pré-requisitos lógicos
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia como disponível
    status: "available",
    // Pertence ao 1º Período
    period: "1º Período",
    // Descrição para o card
    notes: "Conceitos iniciais de SI."
  },
  {
    // Define o ID único
    id: "portugues-instrumental-i",
    // Define o nome legível
    name: "Português Instrumental I",
    // Define o nível como 1
    level: 1,
    // Define a cor como verde
    levelColor: "green",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Sem pré-requisitos lógicos
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia como disponível
    status: "available",
    // Pertence ao 1º Período
    period: "1º Período",
    // Descrição para o card
    notes: "Leitura e produção de textos."
  },
  {
    // Define o ID único
    id: "pre-calculo",
    // Define o nome legível
    name: "Pré-Cálculo",
    // Define o nível como 1
    level: 1,
    // Define a cor como verde
    levelColor: "green",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Sem pré-requisitos lógicos
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia como disponível
    status: "available",
    // Pertence ao 1º Período
    period: "1º Período",
    // Descrição para o card
    notes: "Matemática básica."
  },
  {
    // Define o ID único
    id: "principios-da-administracao-i",
    // Define o nome legível
    name: "Princípios da Administração I",
    // Define o nível como 1
    level: 1,
    // Define a cor como verde
    levelColor: "green",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Sem pré-requisitos lógicos
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia como disponível
    status: "available",
    // Pertence ao 1º Período
    period: "1º Período",
    // Descrição para o card
    notes: "Gestão e organizações."
  },

  // ==========================
  // NÍVEL 2
  // ==========================
  {
    // Define o ID único
    id: "algoritmos-e-estrutura-de-dados-i",
    // Define o nome legível
    name: "Algoritmos e Estrutura de Dados I",
    // Define o nível como 2
    level: 2,
    // Define a cor como azul
    levelColor: "blue",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 1º período
    logicalPrerequisites: ["introducao-a-programacao"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 2º Período
    period: "2º Período",
    // Descrição para o card
    notes: "Estruturas lineares."
  },
  {
    // Define o ID único
    id: "calculo-diferencial-e-integral-i",
    // Define o nome legível
    name: "Cálculo Diferencial e Integral I",
    // Define o nível como 2
    level: 2,
    // Define a cor como azul
    levelColor: "blue",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Possui Pré-Cálculo como pré-requisito oficial
    officialPrerequisites: ["pre-calculo"],
    // Pré-requisito lógico: terminar o 1º período
    logicalPrerequisites: ["pre-calculo"],
    // Possui bloqueio oficial
    hasOfficialLock: true,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 2º Período
    period: "2º Período",
    // Descrição para o card
    notes: "Derivadas e Integrais."
  },
  {
    // Define o ID único
    id: "ingles-instrumental-i",
    // Define o nome legível
    name: "Inglês Instrumental I",
    // Define o nível como 2
    level: 2,
    // Define a cor como azul
    levelColor: "blue",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 1º período
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 2º Período
    period: "2º Período",
    // Descrição para o card
    notes: "Inglês técnico."
  },
  {
    // Define o ID único
    id: "metodos-e-tecnicas-de-pesquisa",
    // Define o nome legível
    name: "Métodos e Técnicas de Pesquisa",
    // Define o nível como 2
    level: 2,
    // Define a cor como azul
    levelColor: "blue",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 1º período
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 2º Período
    period: "2º Período",
    // Descrição para o card
    notes: "Metodologia científica."
  },
  {
    // Define o ID único
    id: "programacao-orientada-a-objetos-i",
    // Define o nome legível
    name: "Programação Orientada a Objetos I",
    // Define o nível como 2
    level: 2,
    // Define a cor como azul
    levelColor: "blue",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 1º período
    logicalPrerequisites: ["introducao-a-programacao"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 2º Período
    period: "2º Período",
    // Descrição para o card
    notes: "Classes e objetos."
  },
  {
    // Define o ID único
    id: "sistemas-digitais-e-circuitos-combinacionais",
    // Define o nome legível
    name: "Sistemas Digitais e Circuitos Combinacionais",
    // Define o nível como 2
    level: 2,
    // Define a cor como azul
    levelColor: "blue",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 1º período
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 2º Período
    period: "2º Período",
    // Descrição para o card
    notes: "Eletrônica digital."
  },

  // ==========================
  // NÍVEL 3
  // ==========================
  {
    // Define o ID único
    id: "algoritmos-e-estrutura-de-dados-ii",
    // Define o nome legível
    name: "Algoritmos e Estrutura de Dados II",
    // Define o nível como 3
    level: 3,
    // Define a cor como roxa
    levelColor: "purple",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 2º período
    logicalPrerequisites: ["algoritmos-e-estrutura-de-dados-i"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 3º Período
    period: "3º Período",
    // Descrição para o card
    notes: "Árvores e grafos."
  },
  {
    // Define o ID único
    id: "arquitetura-e-organizacao-de-computadores",
    // Define o nome legível
    name: "Arquitetura e Organização de Computadores",
    // Define o nível como 3
    level: 3,
    // Define a cor como roxa
    levelColor: "purple",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 2º período
    logicalPrerequisites: ["sistemas-digitais-e-circuitos-combinacionais"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 3º Período
    period: "3º Período",
    // Descrição para o card
    notes: "Hardware de sistemas."
  },
  {
    // Define o ID único
    id: "banco-de-dados-i",
    // Define o nome legível
    name: "Banco de Dados I",
    // Define o nível como 3
    level: 3,
    // Define a cor como roxa
    levelColor: "purple",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 2º período
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 3º Período
    period: "3º Período",
    // Descrição para o card
    notes: "Modelagem e SQL."
  },
  {
    // Define o ID único
    id: "contabilidade",
    // Define o nome legível
    name: "Contabilidade",
    // Define o nível como 3
    level: 3,
    // Define a cor como roxa
    levelColor: "purple",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 2º período
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 3º Período
    period: "3º Período",
    // Descrição para o card
    notes: "Práticas contábeis."
  },
  {
    // Define o ID único
    id: "engenharia-de-software-i",
    // Define o nome legível
    name: "Engenharia de Software I",
    // Define o nível como 3
    level: 3,
    // Define a cor como roxa
    levelColor: "purple",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 2º período
    logicalPrerequisites: ["programacao-orientada-a-objetos-i"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 3º Período
    period: "3º Período",
    // Descrição para o card
    notes: "Requisitos e modelagem."
  },

  // ==========================
  // NÍVEL 4
  // ==========================
  {
    // Define o ID único
    id: "algebra-linear-e-geometria-analitica",
    // Define o nome legível
    name: "Álgebra Linear e Geometria Analítica",
    // Define o nível como 4
    level: 4,
    // Define a cor como laranja
    levelColor: "orange",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 3º período
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 4º Período
    period: "4º Período",
    // Descrição para o card
    notes: "Vetores e matrizes."
  },
  {
    // Define o ID único
    id: "matematica-discreta",
    // Define o nome legível
    name: "Matemática Discreta",
    // Define o nível como 4
    level: 4,
    // Define a cor como laranja
    levelColor: "orange",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 3º período
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 4º Período
    period: "4º Período",
    // Descrição para o card
    notes: "Lógica e conjuntos."
  },
  {
    // Define o ID único
    id: "programacao-orientada-a-objetos-ii",
    // Define o nome legível
    name: "Programação Orientada a Objetos II",
    // Define o nível como 4
    level: 4,
    // Define a cor como laranja
    levelColor: "orange",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 3º período
    logicalPrerequisites: ["programacao-orientada-a-objetos-i"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 4º Período
    period: "4º Período",
    // Descrição para o card
    notes: "Design Patterns."
  },
  {
    // Define o ID único
    id: "programacao-web",
    // Define o nome legível
    name: "Programação Web",
    // Define o nível como 4
    level: 4,
    // Define a cor como laranja
    levelColor: "orange",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 3º período
    logicalPrerequisites: ["banco-de-dados-i"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 4º Período
    period: "4º Período",
    // Descrição para o card
    notes: "Desenvolvimento Web."
  },
  {
    // Define o ID único
    id: "sistemas-operacionais",
    // Define o nome legível
    name: "Sistemas Operacionais",
    // Define o nível como 4
    level: 4,
    // Define a cor como laranja
    levelColor: "orange",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 3º período
    logicalPrerequisites: ["arquitetura-e-organizacao-de-computadores"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 4º Período
    period: "4º Período",
    // Descrição para o card
    notes: "Kernel e processos."
  },

  // ==========================
  // NÍVEL 5
  // ==========================
  {
    // Define o ID único
    id: "engenharia-de-software-ii",
    // Define o nome legível
    name: "Engenharia de Software II",
    // Define o nível como 5
    level: 5,
    // Define a cor como amarela
    levelColor: "yellow",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 4º período
    logicalPrerequisites: ["engenharia-de-software-i"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 5º Período
    period: "5º Período",
    // Descrição para o card
    notes: "Gestão e qualidade."
  },
  {
    // Define o ID único
    id: "governanca-e-gestao-de-informacao",
    // Define o nome legível
    name: "Governança e Gestão de Informação",
    // Define o nível como 5
    level: 5,
    // Define a cor como amarela
    levelColor: "yellow",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 4º período
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 5º Período
    period: "5º Período",
    // Descrição para o card
    notes: "Gestão de TI corporativa."
  },
  {
    // Define o ID único
    id: "probabilidade-e-estatistica",
    // Define o nome legível
    name: "Probabilidade e Estatística",
    // Define o nível como 5
    level: 5,
    // Define a cor como amarela
    levelColor: "yellow",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 4º período
    logicalPrerequisites: ["calculo-diferencial-e-integral-i"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 5º Período
    period: "5º Período",
    // Descrição para o card
    notes: "Análise de dados."
  },
  {
    // Define o ID único
    id: "redes-de-computadores-i",
    // Define o nome legível
    name: "Redes de Computadores I",
    // Define o nível como 5
    level: 5,
    // Define a cor como amarela
    levelColor: "yellow",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 4º período
    logicalPrerequisites: ["sistemas-operacionais"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 5º Período
    period: "5º Período",
    // Descrição para o card
    notes: "Protocolos e infra."
  },
  {
    // Define o ID único
    id: "optativa-i",
    // Define o nome legível
    name: "Optativa I",
    // Define o nível como 5
    level: 5,
    // Define a cor como amarela
    levelColor: "yellow",
    // Define a categoria como optativa
    category: "optativa",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 4º período
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 5º Período
    period: "5º Período",
    // Descrição para o card
    notes: "Escolha uma expansão."
  },

  // ==========================
  // NÍVEL 6
  // ==========================
  {
    // Define o ID único
    id: "programacao-para-dispositivos-moveis",
    // Define o nome legível
    name: "Programação para Dispositivos Móveis",
    // Define o nível como 6
    level: 6,
    // Define a cor como laranja 2
    levelColor: "orange2",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 5º período
    logicalPrerequisites: ["programacao-orientada-a-objetos-ii"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 6º Período
    period: "6º Período",
    // Descrição para o card
    notes: "Desenvolvimento Mobile."
  },
  {
    // Define o ID único
    id: "projeto-e-analise-de-algoritmos",
    // Define o nome legível
    name: "Projeto e Análise de Algoritmos",
    // Define o nível como 6
    level: 6,
    // Define a cor como laranja 2
    levelColor: "orange2",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 5º período
    logicalPrerequisites: ["algoritmos-e-estrutura-de-dados-ii"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 6º Período
    period: "6º Período",
    // Descrição para o card
    notes: "Complexidade algorítmica."
  },
  {
    // Define o ID único
    id: "sistemas-de-apoio-a-decisao",
    // Define o nome legível
    name: "Sistemas de Apoio a Decisão",
    // Define o nível como 6
    level: 6,
    // Define a cor como laranja 2
    levelColor: "orange2",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 5º período
    logicalPrerequisites: ["banco-de-dados-i"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 6º Período
    period: "6º Período",
    // Descrição para o card
    notes: "Business Intelligence."
  },
  {
    // Define o ID único
    id: "sistemas-distribuidos",
    // Define o nome legível
    name: "Sistemas Distribuídos",
    // Define o nível como 6
    level: 6,
    // Define a cor como laranja 2
    levelColor: "orange2",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 5º período
    logicalPrerequisites: ["redes-de-computadores-i"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 6º Período
    period: "6º Período",
    // Descrição para o card
    notes: "Arquiteturas distribuídas."
  },
  {
    // Define o ID único
    id: "optativa-ii",
    // Define o nome legível
    name: "Optativa II",
    // Define o nível como 6
    level: 6,
    // Define a cor como laranja 2
    levelColor: "orange2",
    // Define a categoria como optativa
    category: "optativa",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 5º período
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 6º Período
    period: "6º Período",
    // Descrição para o card
    notes: "Escolha uma expansão."
  },

  // ==========================
  // NÍVEL 7
  // ==========================
  {
    // Define o ID único
    id: "gestao-de-projetos",
    // Define o nome legível
    name: "Gestão de Projetos",
    // Define o nível como 7
    level: 7,
    // Define a cor como vermelho
    levelColor: "red",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 6º período
    logicalPrerequisites: ["engenharia-de-software-ii"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 7º Período
    period: "7º Período",
    // Descrição para o card
    notes: "Metodologias ágeis e PMBOK."
  },
  {
    // Define o ID único
    id: "inteligencia-artificial",
    // Define o nome legível
    name: "Inteligência Artificial",
    // Define o nível como 7
    level: 7,
    // Define a cor como vermelho
    levelColor: "red",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 6º período
    logicalPrerequisites: ["projeto-e-analise-de-algoritmos"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 7º Período
    period: "7º Período",
    // Descrição para o card
    notes: "Machine Learning e IA."
  },
  {
    // Define o ID único
    id: "interface-humano-computador",
    // Define o nome legível
    name: "Interface Humano Computador",
    // Define o nível como 7
    level: 7,
    // Define a cor como vermelho
    levelColor: "red",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 6º período
    logicalPrerequisites: ["programacao-web"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 7º Período
    period: "7º Período",
    // Descrição para o card
    notes: "UX e Usabilidade."
  },
  {
    // Define o ID único
    id: "trabalho-de-conclusao-de-curso-i",
    // Define o nome legível
    name: "Trabalho de Conclusão de Curso I",
    // Define o nível como 7
    level: 7,
    // Define a cor como vermelho
    levelColor: "red",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisito oficial nesta
    officialPrerequisites: [],
    // Dependências lógicas (simplificado)
    logicalPrerequisites: ["metodos-e-tecnicas-de-pesquisa"],
    // Não possui bloqueio
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 7º Período
    period: "7º Período",
    // Descrição para o card
    notes: "Projeto de Pesquisa."
  },
  {
    // Define o ID único
    id: "optativa-iii",
    // Define o nome legível
    name: "Optativa III",
    // Define o nível como 7
    level: 7,
    // Define a cor como vermelho
    levelColor: "red",
    // Define a categoria como optativa
    category: "optativa",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Pré-requisito lógico: 6º período
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 7º Período
    period: "7º Período",
    // Descrição para o card
    notes: "Escolha uma expansão."
  },

  // ==========================
  // NÍVEL 8
  // ==========================
  {
    // Define o ID único
    id: "empreendedorismo",
    // Define o nome legível
    name: "Empreendedorismo",
    // Define o nível como 8
    level: 8,
    // Define a cor como dourado
    levelColor: "gold",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Dependências lógicas (simplificado)
    logicalPrerequisites: ["gestao-de-projetos"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 8º Período
    period: "8º Período",
    // Descrição para o card
    notes: "Inovação e negócios."
  },
  {
    // Define o ID único
    id: "qualidade-de-software",
    // Define o nome legível
    name: "Qualidade de Software",
    // Define o nível como 8
    level: 8,
    // Define a cor como dourado
    levelColor: "gold",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Dependências lógicas (simplificado)
    logicalPrerequisites: ["engenharia-de-software-ii"],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 8º Período
    period: "8º Período",
    // Descrição para o card
    notes: "Testes e garantias."
  },
  {
    // Define o ID único
    id: "trabalho-de-conclusao-de-curso-ii",
    // Define o nome legível
    name: "Trabalho de Conclusão de Curso II",
    // Define o nível como 8
    level: 8,
    // Define a cor como dourado
    levelColor: "gold",
    // Define a categoria como obrigatória
    category: "obrigatoria",
    // Tem TCC I como requisito oficial
    officialPrerequisites: ["trabalho-de-conclusao-de-curso-i"],
    // Dependências lógicas (simplificado)
    logicalPrerequisites: ["trabalho-de-conclusao-de-curso-i"],
    // Possui bloqueio oficial
    hasOfficialLock: true,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 8º Período
    period: "8º Período",
    // Descrição para o card
    notes: "Defesa e publicação."
  },
  {
    // Define o ID único
    id: "optativa-iv",
    // Define o nome legível
    name: "Optativa IV",
    // Define o nível como 8
    level: 8,
    // Define a cor como dourado
    levelColor: "gold",
    // Define a categoria como optativa
    category: "optativa",
    // Sem pré-requisitos oficiais
    officialPrerequisites: [],
    // Dependências lógicas (simplificado)
    logicalPrerequisites: [],
    // Não possui bloqueio oficial
    hasOfficialLock: false,
    // Inicia bloqueada
    status: "locked",
    // Pertence ao 8º Período
    period: "8º Período",
    // Descrição para o card
    notes: "Escolha uma expansão."
  }
];

// Expansões omitidas para economizar espaço por enquanto, mas podem ser adicionadas depois da mesma forma

// Função que busca uma skill pelo seu ID
export const getSkillById = (id: SkillId): Skill | undefined => {
  // Retorna a skill encontrada ou undefined
  return SKILLS.find((skill) => skill.id === id);
};

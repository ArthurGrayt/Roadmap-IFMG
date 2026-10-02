# Lista de Tarefas para Melhoria do Portfólio

Este documento serve como um checklist para a implementação de boas práticas de engenharia de software no projeto **Roadmap IFMG**, visando impressionar recrutadores.

- [x] **Task 1: Acessibilidade Básica e Semântica**
  - Alterar `<html lang="en">` para `<html lang="pt-BR">` no `layout.tsx`.
  - Restaurar visibilidade de foco (focus outline) no `SkillMap.tsx` para permitir navegação por teclado de forma acessível.

- [x] **Task 2: SEO e Open Graph (Compartilhamento)**
  - Atualizar o `metadata` em `layout.tsx` para incluir tags OpenGraph (título, descrição, imagem) e Twitter Cards.
  - (Opcional do usuário) Adicionar uma imagem `og-image.jpg` na pasta `public`.

- [x] **Task 3: Tratamento de Erros e Fallbacks (Next.js)**
  - Criar o arquivo `src/app/error.tsx` com uma UI amigável.
  - Criar o arquivo `src/app/not-found.tsx` para lidar com rotas inexistentes.

- [x] **Task 4: Formatação de Código (Prettier)**
  - Instalar o pacote `prettier` como dependência de desenvolvimento.
  - Criar o arquivo de configuração `.prettierrc`.
  - Adicionar o script `"format": "prettier --write ."` no `package.json`.

- [x] **Task 5: CI/CD com GitHub Actions**
  - Criar a pasta `.github/workflows`.
  - Adicionar um workflow `main.yml` para rodar linting e build a cada push ou Pull Request na branch principal.

- [x] **Task 6: Tipagem Forte e Remoção de `any`**
  - Identificar os usos de `any` em `SkillMap.tsx` (ex: `DiamondNode`, `BadgeNode`).
  - Criar as interfaces de TypeScript apropriadas e aplicá-las.

- [x] **Task 7: Testes Automatizados**
  - Configurar Vitest (ou Jest) e React Testing Library.
  - Criar testes unitários para componentes chave (ex: `DiamondCard.tsx`).
  - Configurar um teste E2E básico usando Cypress ou Playwright.

- [x] **Task 8: Acessibilidade Avançada (A11y)**
  - Adicionar `aria-label` e `aria-pressed` nos cartões e botões para leitores de tela.

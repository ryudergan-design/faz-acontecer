---
name: gsd:discuss-phase
description: Reúne contexto de uma fase com perguntas adaptativas antes do planejamento
argument-hint: "<fase> [--auto]"
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
  - AskUserQuestion
  - Task
  - mcp__context7__resolve-library-id
  - mcp__context7__query-docs
---

<objective>
Extrair as decisões que os agentes posteriores realmente precisam.

**Como funciona:**
1. Carrega contexto anterior do projeto
2. Faz um scout leve da base
3. Analisa a fase e identifica zonas cinzentas
4. Deixa o usuário escolher o que quer discutir
5. Aprofunda cada área até haver segurança
6. Gera `CONTEXT.md` em português

**Saída:** `{fase}-CONTEXT.md`, claro o suficiente para pesquisa e planejamento seguirem sem precisar entrevistar o usuário novamente.
</objective>

<execution_context>
@~/.claude/get-shit-done/workflows/discuss-phase.md
@~/.claude/get-shit-done/templates/context.md
</execution_context>

<context>
Número da fase: `$ARGUMENTS` (obrigatório)

Os arquivos de contexto são resolvidos dentro do workflow com `init phase-op` e chamadas de roadmap/state.
</context>

<process>
Execute o workflow `discuss-phase` de ponta a ponta.
Preserve:
- os limites de escopo vindos do roadmap
- a lógica adaptativa de perguntas
- o uso de contexto anterior
- a geração de `CONTEXT.md`

Adapte a experiência para português natural e use a camada agregadora de qualidade quando isso enriquecer a discussão sem burocratizar.
</process>

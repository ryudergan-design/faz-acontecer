---
name: gsd:new-project
description: Inicializa um novo projeto com descoberta profunda de contexto e cria o PROJECT.md
argument-hint: "[--auto]"
allowed-tools:
  - Read
  - Bash
  - Write
  - Task
  - AskUserQuestion
---
<context>
**Flags:**
- `--auto` — Modo automático. Depois das perguntas de configuração, segue para pesquisa, requisitos e roadmap sem novas interrupções. Espera receber um documento de ideia por `@arquivo` ou texto no prompt.
</context>

<objective>
Inicializar um novo projeto em um fluxo unificado: descoberta → pesquisa opcional → requisitos → roadmap.

**Cria:**
- `.planning/PROJECT.md` — contexto principal do projeto
- `.planning/config.json` — preferências de workflow
- `.planning/research/` — pesquisa de domínio, quando ativada
- `.planning/REQUIREMENTS.md` — requisitos priorizados
- `.planning/ROADMAP.md` — estrutura de fases
- `.planning/STATE.md` — memória operacional do projeto

**Depois deste comando:** seguir para `/gsd:discuss-phase 1` ou `/gsd:plan-phase 1`, conforme o modo de trabalho.
</objective>

<execution_context>
@~/.claude/get-shit-done/workflows/new-project.md
@~/.claude/get-shit-done/references/questioning.md
@~/.claude/get-shit-done/templates/project.md
@~/.claude/get-shit-done/templates/requirements.md
</execution_context>

<process>
Execute o workflow `new-project` ponta a ponta.
Preserve os gates do fluxo oficial:
- validação inicial
- detecção de brownfield
- perguntas adaptativas
- aprovação
- commits atômicos
- roteamento do próximo passo

Adapte a experiência para português do Brasil sem alterar os identificadores estruturais do GSD.
</process>

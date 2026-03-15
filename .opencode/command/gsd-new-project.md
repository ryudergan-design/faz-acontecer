---
description: Inicializa um novo projeto com descoberta profunda de contexto e cria o PROJECT.md
tools:
  read: true
  bash: true
  write: true
  task: true
  question: true
---
<context>
**Flags:**
- `--auto` — Modo automático. Depois das perguntas de configuração, segue para pesquisa, requisitos e roadmap sem novas interrupções. Espera receber um documento de ideia por `@arquivo` ou texto no prompt.
</context>

<objective>
Inicializar um novo projeto em um fluxo unificado: descoberta → pesquisa opcional → requisitos → roadmap.

**Cria:**
- `.planning/PROJECT.md`
- `.planning/config.json`
- `.planning/research/`
- `.planning/REQUIREMENTS.md`
- `.planning/ROADMAP.md`
- `.planning/STATE.md`

**Depois deste comando:** seguir para `/gsd-discuss-phase 1` ou `/gsd-plan-phase 1`.
</objective>

<execution_context>
@~/.config/opencode/get-shit-done/workflows/new-project.md
@~/.config/opencode/get-shit-done/references/questioning.md
@~/.config/opencode/get-shit-done/templates/project.md
@~/.config/opencode/get-shit-done/templates/requirements.md
</execution_context>

<process>
Execute o workflow `new-project` ponta a ponta.
Preserve os gates do fluxo oficial e adapte a experiência para português do Brasil.
</process>

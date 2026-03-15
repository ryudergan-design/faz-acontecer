---
description: Reúne contexto de uma fase com perguntas adaptativas antes do planejamento
tools:
  read: true
  write: true
  bash: true
  glob: true
  grep: true
  question: true
  task: true
---
<objective>
Extrair as decisões que os agentes posteriores realmente precisam e gerar `CONTEXT.md` em português.
</objective>

<execution_context>
@~/.config/opencode/get-shit-done/workflows/discuss-phase.md
@~/.config/opencode/get-shit-done/templates/context.md
</execution_context>

<context>
Número da fase: `$ARGUMENTS` (obrigatório)
</context>

<process>
Execute o workflow `discuss-phase` de ponta a ponta.
Preserve a lógica oficial e adapte a conversa para português natural.
</process>

---
name: gsd:validate-phase
description: Audita retroativamente as lacunas de validação de uma fase concluída
argument-hint: "[numero da fase]"
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
  - Task
  - AskUserQuestion
---
<objective>
Auditar a cobertura de validação de uma fase concluída e preencher lacunas de qualidade.

Saída:
- `VALIDATION.md` atualizado
- testes e artefatos complementares quando necessário
</objective>

<execution_context>
@~/.claude/get-shit-done/workflows/validate-phase.md
</execution_context>

<process>
Execute o workflow `validate-phase`.
Preserve a lógica oficial e adapte a comunicação para português.
</process>

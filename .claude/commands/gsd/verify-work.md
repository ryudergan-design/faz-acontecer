---
name: gsd:verify-work
description: Valida o trabalho construído por meio de UAT conversacional
argument-hint: "[numero da fase]"
allowed-tools:
  - Read
  - Bash
  - Glob
  - Grep
  - Edit
  - Write
  - Task
---
<objective>
Validar o que foi entregue sob a perspectiva do usuário, registrando resultados em `UAT.md`.

Se houver falhas:
- diagnosticar gaps
- preparar correções
- deixar o próximo passo pronto para execução
</objective>

<execution_context>
@~/.claude/get-shit-done/workflows/verify-work.md
@~/.claude/get-shit-done/templates/UAT.md
</execution_context>

<process>
Execute o workflow `verify-work` ponta a ponta.
Preserve o UAT conversacional e adapte tudo para português claro e útil.
</process>

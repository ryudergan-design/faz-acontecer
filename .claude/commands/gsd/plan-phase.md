---
name: gsd:plan-phase
description: Cria o plano detalhado da fase com loop de verificação
argument-hint: "[fase] [--auto] [--research] [--skip-research] [--gaps] [--skip-verify] [--prd <arquivo>]"
agent: gsd-planner
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
  - Task
  - WebFetch
  - mcp__context7__*
---
<objective>
Criar `PLAN.md` executável para uma fase do roadmap com pesquisa e verificação integradas.

Fluxo padrão:
pesquisa → plano → verificação → pronto
</objective>

<execution_context>
@~/.claude/get-shit-done/workflows/plan-phase.md
</execution_context>

<process>
Execute o workflow `plan-phase` ponta a ponta.
Preserve:
- validação da fase
- pesquisa quando necessária
- criação dos planos
- loop de checagem
- roteamento correto para execução

Adapte a experiência para português e use a camada agregadora para elevar a qualidade do plano.
</process>

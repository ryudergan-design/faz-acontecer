# Inventario de Agentes do GSD

Este documento lista os agentes encontrados na estrutura oficial do GSD em `agents/`.

## Pasta observada
- `agents/`

## Agentes encontrados
- `gsd-codebase-mapper.md`
- `gsd-debugger.md`
- `gsd-executor.md`
- `gsd-integration-checker.md`
- `gsd-nyquist-auditor.md`
- `gsd-phase-researcher.md`
- `gsd-plan-checker.md`
- `gsd-planner.md`
- `gsd-project-researcher.md`
- `gsd-research-synthesizer.md`
- `gsd-roadmapper.md`
- `gsd-ui-auditor.md`
- `gsd-ui-checker.md`
- `gsd-ui-researcher.md`
- `gsd-verifier.md`

## Leitura estrutural
Esses agentes representam os papeis especializados do GSD, como:
- pesquisa
- planejamento
- execucao
- verificacao
- auditoria
- UX/UI
- mapeamento de codigo

## Uso desta lista na adaptacao PT-BR
Esta lista deve ser usada para:
- revisar linguagem de cada agente
- identificar instrucoes que devem virar portugues
- manter nomes tecnicos dos agentes quando eles forem identificadores do sistema

## Ponto importante
Para Codex, esses agentes nao podem ser tratados como uma simples copia textual do Claude Code.

O instalador oficial tem conversoes especificas para Codex.

Por isso, o fluxo ideal e:
1. mapear agentes
2. adaptar linguagem
3. revisar instalador e formato do runtime

## Proximo passo recomendado
O proximo documento tecnico ideal e uma matriz que cruze:
- comando
- agente
- runtime
- formato de adaptacao esperado

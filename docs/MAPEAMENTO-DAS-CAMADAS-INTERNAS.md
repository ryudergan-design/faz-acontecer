# Mapeamento das Camadas Internas do GSD

Este documento explica como o GSD se organiza por camadas e por que uma adaptacao PT-BR real precisa ir alem do README.

## Visao geral
No GSD oficial, a experiencia final nasce de varias camadas conectadas.

A sequencia mais comum e:

1. comando
2. workflow
3. referencias
4. templates
5. agentes
6. instalador e runtime

## Camada 1. Commands
Local observado:
- `commands/gsd/`

Papel:
- expor o comando ao runtime
- definir objetivo
- apontar execution context
- iniciar o fluxo correto

Exemplo observado:
- `new-project.md`
- `discuss-phase.md`
- `plan-phase.md`
- `execute-phase.md`

Leitura importante:
essa camada fala muito com o usuario e tambem chama os workflows.

Impacto PT-BR:
- alta prioridade de traducao
- preservar nomes dos comandos
- traduzir descricoes, objetivos e instrucoes ao usuario

## Camada 2. Workflows
Local observado:
- `get-shit-done/workflows/`

Papel:
- descrever o fluxo operacional real
- decidir a ordem das etapas
- aplicar gates, verificacoes e transicoes

Exemplos observados:
- `new-project.md`
- `discuss-phase.md`
- `plan-phase.md`
- `execute-phase.md`
- `verify-work.md`

Leitura importante:
essa camada define a experiencia comportamental do sistema.

Impacto PT-BR:
- prioridade muito alta
- se os workflows continuarem em ingles, a experiencia final continuara em ingles em muitos pontos

## Camada 3. References
Local observado:
- `get-shit-done/references/`

Papel:
- guardar regras transversais
- explicar padroes de checkpoints, questioning, TDD, integracao Git, etc

Exemplos observados:
- `questioning.md`
- `checkpoints.md`
- `tdd.md`
- `git-integration.md`
- `ui-brand.md`

Leitura importante:
essa camada influencia como a IA pensa, pergunta e estrutura a entrega.

Impacto PT-BR:
- alta prioridade
- aqui vivem muitas instrucoes de comportamento que precisam virar portugues

## Camada 4. Templates
Local observado:
- `get-shit-done/templates/`

Papel:
- definir os arquivos gerados no projeto
- padronizar `PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`, `CONTEXT.md`, `SUMMARY.md` e outros

Exemplos observados:
- `project.md`
- `requirements.md`
- `roadmap.md`
- `state.md`
- `context.md`
- `summary.md`
- `UAT.md`
- `UI-SPEC.md`
- `VALIDATION.md`

Leitura importante:
essa camada e critica para o teu objetivo, porque e aqui que novos projetos vao nascer com documentacao melhor ou pior.

Impacto PT-BR:
- prioridade altissima
- se os templates nao forem adaptados, o projeto ate pode conversar em portugues, mas vai documentar em ingles

## Camada 5. Agents
Local observado:
- `agents/`

Papel:
- especializar subagentes por funcao
- planejar
- pesquisar
- executar
- verificar
- auditar

Exemplos observados:
- `gsd-planner.md`
- `gsd-executor.md`
- `gsd-verifier.md`
- `gsd-debugger.md`

Leitura importante:
essa camada define o "tom interno" e o raciocinio operacional dos agentes.

Impacto PT-BR:
- alta prioridade
- agentes precisam pensar, perguntar e responder em portugues
- nomes estruturais podem continuar em ingles

## Camada 6. Instalador e runtime
Locais observados:
- `bin/install.js`
- `hooks/`

Papel:
- instalar a estrutura certa em cada runtime
- converter formatos quando necessario
- configurar hooks
- ajustar comandos, skills e arquivos de configuracao

Leitura importante:
essa camada decide como a adaptacao chega em:
- `.claude`
- `.opencode`
- `.gemini`
- `.codex`

Impacto PT-BR:
- prioridade critica
- se o instalador nao souber apontar para a camada adaptada, a traducao nao vira experiencia real

## Conclusao pratica
Se a adaptacao PT-BR quiser ser nativa de verdade, ela precisa mexer em todas estas camadas:
- commands
- workflows
- references
- templates
- agents
- installer/runtime

Traduzir so README e docs nao entrega a experiencia final desejada.

## Proximo passo recomendado
Usar [MATRIZ-COMANDO-RUNTIME-PT-BR.md](MATRIZ-COMANDO-RUNTIME-PT-BR.md) para transformar esse mapa em plano de adaptacao executavel.

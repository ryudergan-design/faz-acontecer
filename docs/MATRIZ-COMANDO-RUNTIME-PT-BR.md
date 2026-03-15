# Matriz Comando x Runtime x Adaptacao PT-BR

Este documento organiza a adaptacao em uma matriz pratica.

O foco aqui e responder:
- qual comando existe
- em qual camada ele vive
- como aparece em cada runtime
- o que precisa ser adaptado para portugues

## Regra geral
Em todos os runtimes:
- nomes dos comandos devem ser preservados
- experiencia de pergunta e resposta deve ir para portugues
- documentacao produzida pelo fluxo deve ir para portugues

## Matriz inicial

| Comando base | Claude/Gemini | OpenCode | Codex | O que adaptar |
|--------------|---------------|----------|-------|---------------|
| `new-project` | `/gsd:new-project` | `/gsd-new-project` | `$gsd-new-project` | perguntas iniciais, explicacoes de configuracao, texto gerado em `PROJECT/REQUIREMENTS/ROADMAP/STATE` |
| `discuss-phase` | `/gsd:discuss-phase` | `/gsd-discuss-phase` | `$gsd-discuss-phase` | perguntas adaptativas, opcoes, contexto gerado em `CONTEXT.md` |
| `plan-phase` | `/gsd:plan-phase` | `/gsd-plan-phase` | `$gsd-plan-phase` | instrucoes de planejamento, linguagem de `PLAN.md`, verificacoes textuais |
| `execute-phase` | `/gsd:execute-phase` | `/gsd-execute-phase` | `$gsd-execute-phase` | mensagens de progresso, resumos, `SUMMARY.md`, `VERIFICATION.md` |
| `verify-work` | `/gsd:verify-work` | `/gsd-verify-work` | `$gsd-verify-work` | validacao guiada, perguntas ao usuario, `UAT.md` |
| `map-codebase` | `/gsd:map-codebase` | `/gsd-map-codebase` | `$gsd-map-codebase` | perguntas, relatorios de mapeamento, documentos de codebase |
| `quick` | `/gsd:quick` | `/gsd-quick` | `$gsd-quick` | intake rapido da tarefa, plano rapido e saida documentada |
| `debug` | `/gsd:debug` | `/gsd-debug` | `$gsd-debug` | diagnostico, checkpoints, explicacoes de falha |
| `settings` | `/gsd:settings` | `/gsd-settings` | `$gsd-settings` | opcoes de configuracao e explicacoes ao usuario |
| `help` | `/gsd:help` | `/gsd-help` | `$gsd-help` | documentacao de entrada e lista de comandos |

## Leitura por camada

### Camada command
Adaptar:
- `name` nao muda
- `description` e instrucoes podem ir para portugues
- objetivo e processo podem ser adaptados

### Camada workflow
Adaptar:
- perguntas
- instrucoes de conversa
- mensagens de transicao
- orientacoes de confirmacao

### Camada template
Adaptar:
- `PROJECT.md`
- `REQUIREMENTS.md`
- `ROADMAP.md`
- `STATE.md`
- `CONTEXT.md`
- `PLAN.md`
- `SUMMARY.md`
- `UAT.md`
- outros artefatos gerados

### Camada agent
Adaptar:
- papel explicado em portugues
- criterio de decisao em portugues
- formato das respostas em portugues

### Camada runtime
Adaptar:
- forma como o runtime recebe o conteudo
- sem mudar o jeito que ele espera o comando ou a estrutura

## Runtimes mais sensiveis

### Codex
Mais sensivel porque:
- usa skills
- usa conversao especifica no instalador
- nao deve receber uma adaptacao simplista

### OpenCode
Mais sensivel porque:
- usa formato de comando diferente
- o instalador trata caminho e permissao de forma propria

## Ordem tecnica recomendada
1. mapear o comando
2. mapear o workflow correspondente
3. mapear os templates que ele gera
4. mapear agentes que participam daquele fluxo
5. adaptar por runtime

## Melhor estrategia de execucao
Fazer por fluxo, nao por arquivo isolado.

Exemplo:
- primeiro dominar o ecossistema `new-project`
- depois `discuss-phase`
- depois `plan-phase`
- depois `execute-phase`
- depois `verify-work`

Isso ajuda porque cada fluxo mexe em varias camadas ao mesmo tempo.

## Proximo passo recomendado
O proximo passo tecnico mais forte e montar a trilha do fluxo `new-project` completo:
- comando
- workflow
- templates
- agentes relacionados
- impacto por runtime

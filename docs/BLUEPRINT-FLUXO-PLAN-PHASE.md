# Blueprint do Fluxo `plan-phase`

Este documento mapeia o fluxo `plan-phase` do GSD oficial e define como ele deve ser adaptado para portugues do Brasil sem perder sua estrutura central.

## Objetivo do fluxo

No oficial, `plan-phase` existe para:
- validar a fase
- carregar o contexto da fase
- usar pesquisa tecnica quando necessario
- acionar o planejador
- verificar os planos
- iterar ate que o plano fique bom o suficiente

Na adaptacao PT-BR, esse fluxo precisa:
- explicar melhor o que esta acontecendo
- planejar em portugues
- manter a disciplina de verificacao
- incorporar a camada agregadora de qualidade

## Camadas envolvidas

### 1. Command
Arquivo observado:
- `commands/gsd/plan-phase.md`

Papel:
- expor o comando
- definir o fluxo principal
- apontar para o workflow real

O que adaptar:
- descricao
- explicacoes ao usuario
- linguagem dos objetivos

O que preservar:
- `name: gsd:plan-phase`
- flags
- ligacao com research, planner e checker

### 2. Workflow
Arquivo observado:
- `get-shit-done/workflows/plan-phase.md`

Papel:
- orquestrar todo o planejamento
- integrar pesquisa, plano e verificacao
- manter o loop de qualidade

O que adaptar:
- mensagens ao usuario
- banners
- explicacoes de cada etapa
- resumos finais

O que preservar:
- gates do fluxo
- loop de revisao
- papel dos agentes
- auto-advance

### 3. Templates e artefatos
Arquivos conceitualmente envolvidos:
- `PLAN.md`
- `VALIDATION.md`
- `RESEARCH.md`

O que adaptar:
- textos base
- linguagem de documentacao
- forma de explicar tarefas e validacao

O que preservar:
- nomes dos arquivos
- funcao estrutural de cada um

## Onde o agregador entra

Aqui o `pipeline-dev-software.html` agrega muito.

Ele deve influenciar:
- a qualidade do plano
- o nivel da decomposicao das tarefas
- a preocupacao com testes, seguranca e qualidade
- o equilibrio entre implementacao, validacao e documentacao

## O que deve aparecer no plano quando fizer sentido

- arquitetura
- banco de dados
- backend
- frontend
- seguranca
- testes
- DevOps ou deploy
- observabilidade
- documentacao

Nao quer dizer que todo plano vai conter tudo isso.
Quer dizer que o planejador deve lembrar desses pontos quando forem relevantes.

## O que o fluxo deve evitar

- plano vago
- plano superficial
- plano so focado em escrever codigo
- plano que esquece teste, validacao ou impacto tecnico

## Resultado esperado

Depois da adaptacao:
- o `plan-phase` continua sendo GSD
- mas produz planos em portugues
- com melhor criterio de engenharia
- e com verificacao mais forte do que apenas "parece bom"

## Arquivos oficialmente envolvidos

### Command
- `commands/gsd/plan-phase.md`

### Workflow
- `get-shit-done/workflows/plan-phase.md`

## Proximo passo recomendado

Criar a trilha pratica de adaptacao do `plan-phase`.

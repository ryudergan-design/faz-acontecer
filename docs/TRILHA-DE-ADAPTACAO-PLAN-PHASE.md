# Trilha de Adaptacao `plan-phase`

Este documento organiza a adaptacao pratica do `plan-phase`.

## Objetivo

Portar o `plan-phase` para portugues do Brasil e enriquecer o planejamento com a camada agregadora de qualidade.

## Arquivos prioritarios

### 1. `commands/gsd/plan-phase.md`
Prioridade:
- alta

O que adaptar:
- descricao
- objetivo
- texto de orientacao ao usuario

O que preservar:
- nome do comando
- flags
- agent principal

### 2. `get-shit-done/workflows/plan-phase.md`
Prioridade:
- muito alta

O que adaptar:
- banners
- mensagens de pesquisa
- mensagens de planejamento
- mensagens de verificacao
- resumos finais

O que enriquecer com o agregador:
- criterio das tarefas
- cobertura de testes
- preocupacao com seguranca
- preocupacao com impacto arquitetural
- equilibrio entre implementacao e validacao

### 3. Templates relacionados
Prioridade:
- alta

Arquivos conceituais:
- `PLAN.md`
- `VALIDATION.md`

O que adaptar:
- linguagem
- exemplos
- instrucoes

## Regras de adaptacao

### Fazer
- planejar em portugues claro
- manter a forca do loop de verificacao
- deixar os planos mais maduros
- evitar superficialidade

### Nao fazer
- trocar nomes de arquivos
- quebrar o papel dos agentes
- transformar o plano em burocracia excessiva

## Criterio de sucesso

O `plan-phase` adaptado estara bom quando:
- o usuario entender o que esta acontecendo
- o plano nascer em portugues
- o plano considerar qualidade real
- a verificacao continuar firme
- o comportamento continuar reconhecivel como GSD

## Proximo passo recomendado

Atacar os fluxos:
- `verify-work`
- `validate-phase`

Porque eles fecham a camada de qualidade da entrega.

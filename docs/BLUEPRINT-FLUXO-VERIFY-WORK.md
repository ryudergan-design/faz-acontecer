# Blueprint do Fluxo `verify-work`

Este documento mapeia o fluxo `verify-work` do GSD oficial.

## Objetivo do fluxo

No oficial, `verify-work` existe para validar o que foi construido sob o ponto de vista do usuario, com UAT conversacional.

Ele nao existe apenas para perguntar:
- "funcionou?"

Ele existe para:
- testar por etapas
- registrar resultados
- identificar falhas
- diagnosticar gaps
- preparar a correcao

## Na adaptacao PT-BR

Esse fluxo precisa:
- conversar em portugues natural
- manter o tom didatico
- validar o que foi entregue de forma clara
- incorporar a camada agregadora de qualidade

## Onde o agregador entra

O `pipeline-dev-software.html` deve enriquecer o `verify-work` em pontos como:
- testes esperados
- seguranca
- consistencia funcional
- qualidade visivel da entrega
- risco de regressao
- maturidade da verificacao

## O que deve ser preservado

- UAT conversacional
- foco no ponto de vista do usuario
- registro dos resultados
- preparo para correcoes

## Resultado esperado

Depois da adaptacao:
- o `verify-work` continua leve e conversacional
- mas fica mais forte como etapa de qualidade
- e mais claro para usuarios em portugues

## Arquivos oficialmente envolvidos

### Command
- `commands/gsd/verify-work.md`

### Workflow
- `get-shit-done/workflows/verify-work.md`

### Template
- `get-shit-done/templates/UAT.md`

## Proximo passo recomendado

Criar a trilha pratica de adaptacao do `verify-work`.

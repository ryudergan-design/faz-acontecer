# Blueprint do Fluxo `validate-phase`

Este documento mapeia o fluxo `validate-phase` do GSD oficial.

## Objetivo do fluxo

No oficial, `validate-phase` existe para auditar a cobertura de validacao de uma fase concluida.

Ele funciona como uma auditoria retroativa da qualidade da fase.

## Papel dele no ecossistema

Esse fluxo fecha muito bem com o agregador de qualidade, porque ele permite olhar para a fase e perguntar:
- a validacao foi suficiente?
- faltaram testes?
- faltou cobertura de qualidade?
- faltou auditoria tecnica?

## Na adaptacao PT-BR

Esse fluxo precisa:
- explicar melhor o que esta auditando
- documentar em portugues
- deixar claro o papel do `VALIDATION.md`
- incorporar a camada agregadora de qualidade

## Onde o agregador entra

O `pipeline-dev-software.html` tem impacto muito forte aqui.

Ele ajuda a avaliar:
- qualidade tecnica
- seguranca
- testes
- coerencia arquitetural
- riscos
- debito tecnico
- profundidade da validacao

## O que deve ser preservado

- papel do `VALIDATION.md`
- auditoria retroativa
- preenchimento de lacunas
- integracao com fase concluida

## Resultado esperado

Depois da adaptacao:
- o `validate-phase` continua sendo uma auditoria de fase
- mas com linguagem em portugues
- e com uma camada de qualidade muito mais forte

## Arquivos oficialmente envolvidos

### Command
- `commands/gsd/validate-phase.md`

### Workflow
- `get-shit-done/workflows/validate-phase.md`

## Proximo passo recomendado

Fechar o conjunto com uma visao consolidada dos 5 fluxos principais.

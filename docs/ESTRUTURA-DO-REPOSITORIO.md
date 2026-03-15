# Estrutura do Repositorio

Este documento explica a estrutura-base criada neste repositorio para estudar e adaptar o GSD em portugues.

## Estrutura atual
- `README.md`
  Porta de entrada do repositorio.
- `docs/`
  Documentacao em portugues.
- `commands/`
  Mapeamento de comandos e espaco para futuras adaptacoes.
- `agents/`
  Mapeamento dos agentes usados no ecossistema GSD.
- `hooks/`
  Area reservada para hooks e integracoes operacionais.
- `scripts/`
  Scripts auxiliares da adaptacao.
- `tests/`
  Area reservada para testes e validacoes.
- `assets/`
  Recursos visuais e material de apoio.

## Relacao com o GSD oficial
O repositorio oficial possui areas como:
- `agents/`
- `assets/`
- `bin/`
- `commands/`
- `docs/`
- `hooks/`
- `scripts/`
- `tests/`

Esta base em portugues procura respeitar essa ideia de organizacao, mas com foco em:
- documentacao
- adaptacao
- onboarding
- melhoria de processo

## O que pode entrar aqui no futuro
- traducao comentada de comandos
- guias por runtime
- adaptacoes para PT-BR
- boas praticas de projeto novo
- guias universais de auditoria e organizacao
- exemplos de estrutura `.planning`

## Regra importante
Se uma adaptacao entrar em conflito com a estrutura oficial:
- preservar o que for essencial ao funcionamento do GSD
- adaptar apenas o que for camada de apoio, onboarding ou processo

## Proximo passo recomendado
Leia [ADAPTACOES-PT-BR.md](ADAPTACOES-PT-BR.md).

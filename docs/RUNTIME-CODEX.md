# Runtime Codex

Este documento explica como o `Faz Acontecer` deve se relacionar com o runtime `Codex`.

## Papel do Codex no ecossistema GSD

O Codex é o runtime mais sensível da adaptação, porque o GSD oficial não o trata como simples cópia de Claude.

No Codex:
- comandos viram `skills`
- agentes viram arquivos `.toml`
- o runtime usa `config.toml`

## Onde o GSD oficial instala no Codex

### Instalação local
- `./.codex/`

### Instalação global
- `~/.codex/`
ou
- `CODEX_HOME`, quando definido

### Comando de verificação
- `$gsd-help`

## O que precisa ser preservado

- lógica de skills
- estrutura `skills/`
- `config.toml`
- conversão de agentes
- comportamento esperado pelo instalador

## O que precisa ser adaptado para PT-BR

- descrição das skills
- prompts e instruções em português
- documentação gerada em português
- resumos e mensagens operacionais

## Onde a camada agregadora entra

O agregador deve entrar no conteúdo das skills e da documentação gerada, principalmente em:
- descoberta de projeto
- discussão de fase
- planejamento
- verificação
- validação

## Estrutura-alvo conceitual

- `.codex/skills/`
- `.codex/agents/`
- `.codex/config.toml`
- `.codex/get-shit-done/`

## Primeira leva materializada

Já existe uma fundação concreta em:
- `.codex/skills/gsd-new-project/SKILL.md`
- `.codex/skills/gsd-discuss-phase/SKILL.md`
- `.codex/skills/gsd-plan-phase/SKILL.md`
- `.codex/skills/gsd-verify-work/SKILL.md`
- `.codex/skills/gsd-validate-phase/SKILL.md`
- `.codex/agents/*.toml`
- `.codex/config.toml`
- `.codex/get-shit-done/workflows/*.md`
- `.codex/get-shit-done/templates/*.md`

## Resultado esperado

Quando a adaptação do Codex estiver madura:
- o runtime continua recebendo GSD no formato que espera
- as skills passam a conversar em português
- a documentação gerada sai em português
- a camada agregadora eleva a qualidade sem quebrar a estrutura do Codex

# Runtime Gemini CLI

Este documento explica como o `Faz Acontecer` deve se relacionar com o runtime `Gemini CLI`.

## Papel do Gemini no ecossistema GSD

O `Gemini CLI` fica muito próximo do Claude na forma de uso:
- comandos parecidos
- estrutura de diretórios semelhante
- integração forte com comandos e agentes

Ao mesmo tempo, ele tem diferenças reais no instalador e em detalhes de compatibilidade.

## Onde o GSD oficial instala no Gemini

### Instalação local
- `./.gemini/`

### Instalação global
- `~/.gemini/`

### Comando de verificação
- `/gsd:help`

## O que precisa ser preservado

- sintaxe dos comandos
- forma como o instalador escreve os artefatos
- compatibilidade com a estrutura esperada do runtime
- comportamento do GSD oficial

## O que precisa ser adaptado para PT-BR

- perguntas
- respostas
- documentação gerada
- explicações de onboarding
- mensagens operacionais

## Observações importantes do instalador oficial

O instalador trata Gemini com alguns cuidados próprios:
- usa `GEMINI_CONFIG_DIR` quando configurado
- usa `~/.gemini` como base padrão
- converte comandos para formato compatível com Gemini
- ajusta detalhes de agentes e hooks

## Onde a camada agregadora entra

O `pipeline-dev-software.html` deve enriquecer os fluxos do Gemini em:
- qualidade de descoberta
- planejamento
- validação
- auditoria

Sem transformar o fluxo em algo pesado demais.

## Estrutura-alvo conceitual

- `.gemini/commands/`
- `.gemini/agents/`
- `.gemini/hooks/`
- `.gemini/get-shit-done/`

## Primeira leva materializada

Já existe uma fundação concreta em:
- `.gemini/commands/gsd/new-project.toml`
- `.gemini/commands/gsd/discuss-phase.toml`
- `.gemini/commands/gsd/plan-phase.toml`
- `.gemini/commands/gsd/verify-work.toml`
- `.gemini/commands/gsd/validate-phase.toml`
- `.gemini/get-shit-done/workflows/*.md`
- `.gemini/get-shit-done/references/questioning.md`
- `.gemini/get-shit-done/templates/*.md`

## Resultado esperado

Quando a adaptação do Gemini estiver madura:
- o uso continua reconhecível como GSD
- a conversa fica em português
- os documentos saem em português
- a camada agregadora melhora a qualidade do projeto

# Matriz Claude x OpenCode

Este documento resume as diferencas mais importantes entre `Claude Code` e `OpenCode` para a adaptacao do `Faz Acontecer`.

## Objetivo

Evitar que a adaptacao PT-BR trate os dois runtimes como se fossem iguais por dentro.

Eles sao proximos em intencao.
Mas possuem diferencas praticas importantes.

## Comparativo direto

| Tema | Claude Code | OpenCode |
|------|-------------|----------|
| Diretorio local | `./.claude/` | `./.opencode/` |
| Diretorio global | `~/.claude/` | `~/.config/opencode/` |
| Comando base | `/gsd:help` | `/gsd-help` |
| Novo projeto | `/gsd:new-project` | `/gsd-new-project` |
| Estrutura de comandos | hierarquica | achatada |
| Hooks | sim | sim, mas com tratamento proprio |
| Statusline | sim | nao e runtime prioritario para statusline |
| Runtime base do GSD | sim | nao, e uma adaptacao nativa posterior |

## Diferenca 1. Sintaxe de comandos

### Claude
Usa:
- `/gsd:comando`

### OpenCode
Usa:
- `/gsd-comando`

Impacto:
- a experiencia em portugues precisa respeitar essa diferenca
- nao podemos documentar um como se fosse o outro

## Diferenca 2. Estrutura de comandos

### Claude
Mantem estrutura mais proxima do original:
- `commands/gsd/...`

### OpenCode
O instalador achata os comandos para uma estrutura plana:
- `command/gsd-help.md`
- `command/gsd-new-project.md`

Impacto:
- a adaptacao do OpenCode precisa considerar essa flattening
- e nao pode depender de uma hierarquia identica a do Claude

## Diferenca 3. Configuracao global

### Claude
Prioriza:
- `--config-dir`
- `CLAUDE_CONFIG_DIR`
- `~/.claude`

### OpenCode
Prioriza:
- `OPENCODE_CONFIG_DIR`
- `OPENCODE_CONFIG`
- `XDG_CONFIG_HOME/opencode`
- `~/.config/opencode`

Impacto:
- o OpenCode exige mais cuidado com caminhos de configuracao
- isso precisa estar refletido na documentacao e no instalador adaptado

## Diferenca 4. Statusline

No instalador oficial, os runtimes prioritarios para statusline sao:
- `claude`
- `gemini`

Leitura pratica:
- Claude tem statusline como parte mais natural da experiencia
- OpenCode nao deve ser tratado como se dependesse disso

## Diferenca 5. Hooks

### Claude
Hooks entram de forma bem natural no fluxo oficial.

### OpenCode
Tambem recebe hooks e artefatos, mas o instalador faz tratamento proprio em varios pontos.

Impacto:
- a adaptacao precisa respeitar essa diferenca operacional

## O que os dois compartilham

- precisam do fluxo GSD preservado
- devem receber experiencia em portugues
- devem gerar documentacao em portugues
- devem absorver a camada agregadora de qualidade

## Regra de adaptacao

### Preservar
- o jeito que cada runtime espera receber os artefatos
- a sintaxe nativa de comandos
- os caminhos reais do instalador

### Melhorar
- onboarding
- clareza
- perguntas em portugues
- respostas em portugues
- documentacao em portugues

## Resultado esperado

Quando essa matriz for respeitada:
- Claude continua fiel ao GSD original
- OpenCode continua fiel ao seu modo de receber o GSD
- e os dois ficam melhores para usuarios em portugues

## Proximo passo recomendado

Usar esta matriz quando a adaptacao pratica dos arquivos reais comecar.

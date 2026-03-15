# Runtime Claude Code

Este documento explica como o `Faz Acontecer` deve se relacionar com o runtime `Claude Code`.

## Papel do Claude no ecossistema GSD

O Claude Code e o runtime base mais natural do GSD oficial.

Muita coisa do GSD nasce com semantica pensada para Claude:
- comandos em formato `/gsd:...`
- agents em formato compativel
- hooks e statusline fortemente acoplados a esse ambiente
- prompts e XML muito afinados para esse fluxo

Por isso, no `Faz Acontecer`, o Claude deve ser tratado como:
- runtime de referencia
- base primaria de compatibilidade
- primeiro alvo de verificacao de fidelidade

## Onde o GSD oficial instala no Claude

### Instalacao local
- `./.claude/`

### Instalacao global
- `~/.claude/`

### Comando de verificacao
- `/gsd:help`

## O que precisa ser preservado

- estrutura de comandos
- nomes dos comandos
- organizacao essencial dos agentes
- compatibilidade com settings e hooks do Claude
- comportamento esperado do instalador oficial

## O que precisa ser adaptado para PT-BR

- perguntas feitas ao usuario
- respostas e resumos
- documentacao gerada
- onboarding
- mensagens de instalacao e orientacao

## Onde a camada agregadora entra no Claude

Como o Claude tende a ser muito forte em conversa e planejamento, ele e um ponto excelente para absorver:
- pipeline de qualidade
- boas praticas de arquitetura
- testes
- seguranca
- validacao
- documentacao viva

Ou seja:
- o Claude deve continuar sendo o motor original do GSD
- mas o `Faz Acontecer` deve fazer esse motor conversar melhor com usuarios em portugues

## Pastas e arquivos que devem existir no `Faz Acontecer`

### Estrutura-alvo conceitual
- `.claude/commands/`
- `.claude/agents/`
- `.claude/hooks/`
- `.claude/get-shit-done/`

Essas pastas representam o espaco onde a adaptacao PT-BR deve refletir a estrutura oficial do GSD para Claude.

## Resultado esperado

Quando a adaptacao do Claude estiver madura:
- comandos continuam funcionando no formato oficial
- a experiencia fica em portugues
- os documentos gerados ficam em portugues
- a camada agregadora melhora a qualidade sem descaracterizar o fluxo

## Primeira leva materializada

Ja existe uma fundacao concreta em:
- `.claude/commands/gsd/new-project.md`
- `.claude/commands/gsd/discuss-phase.md`
- `.claude/commands/gsd/plan-phase.md`
- `.claude/commands/gsd/verify-work.md`
- `.claude/commands/gsd/validate-phase.md`
- `.claude/get-shit-done/workflows/new-project.md`
- `.claude/get-shit-done/workflows/discuss-phase.md`
- `.claude/get-shit-done/workflows/plan-phase.md`
- `.claude/get-shit-done/workflows/verify-work.md`
- `.claude/get-shit-done/workflows/validate-phase.md`
- `.claude/get-shit-done/references/questioning.md`
- `.claude/get-shit-done/templates/project.md`
- `.claude/get-shit-done/templates/requirements.md`
- `.claude/get-shit-done/templates/context.md`
- `.claude/get-shit-done/templates/UAT.md`

## Proximo passo recomendado

Comecar a mapear a traducao e adaptacao real dos arquivos que o Claude consome primeiro.

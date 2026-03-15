# Runtime OpenCode

Este documento explica como o `Faz Acontecer` deve se relacionar com o runtime `OpenCode`.

## Papel do OpenCode no ecossistema GSD

O OpenCode e um runtime importante porque amplia o acesso ao GSD para quem quer:
- ambiente mais aberto
- modelos livres ou de menor custo
- experiencia proxima do GSD sem depender so do Claude

No `Faz Acontecer`, o OpenCode deve ser tratado como:
- runtime prioritario
- porta importante para democratizar o uso do GSD em portugues

## Onde o GSD oficial instala no OpenCode

### Instalacao local
- `./.opencode/`

### Instalacao global
- `~/.config/opencode/`

### Comando de verificacao
- `/gsd-help`

## O que precisa ser preservado

- forma como o instalador oficial trata o OpenCode
- caminhos de configuracao do OpenCode
- naming esperado pelo runtime
- adaptacao de comandos para o formato do OpenCode

## O que precisa ser adaptado para PT-BR

- perguntas
- respostas
- documentacao
- onboarding
- mensagens operacionais

## O que o instalador oficial deixa claro

O OpenCode tem comportamento proprio:
- usa `~/.config/opencode` em instalacao global
- respeita `OPENCODE_CONFIG_DIR`
- respeita `OPENCODE_CONFIG`
- pode usar `XDG_CONFIG_HOME`

Isso significa que a adaptacao PT-BR nao deve simplificar demais esse runtime.
Ela deve respeitar a forma como o OpenCode organiza configuracao.

## Onde a camada agregadora entra no OpenCode

Assim como no Claude, a camada de qualidade deve influenciar:
- projeto novo
- discussao de fase
- planejamento
- verificacao
- validacao

Mas com cuidado para nao depender de recursos que sejam especificos do Claude.

## Pastas e arquivos que devem existir no `Faz Acontecer`

### Estrutura-alvo conceitual
- `.opencode/commands/`
- `.opencode/agents/`
- `.opencode/hooks/`
- `.opencode/get-shit-done/`

Essas pastas representam a estrutura-alvo da adaptacao para OpenCode dentro do `Faz Acontecer`.

## Resultado esperado

Quando a adaptacao do OpenCode estiver madura:
- a experiencia continua reconhecivel como GSD
- o usuario brasileiro usa o fluxo em portugues
- a camada agregadora melhora a profundidade do projeto
- a compatibilidade com o runtime continua firme

## Primeira leva materializada

Ja existe uma fundacao concreta em:
- `.opencode/command/gsd-new-project.md`
- `.opencode/command/gsd-discuss-phase.md`
- `.opencode/command/gsd-plan-phase.md`
- `.opencode/command/gsd-verify-work.md`
- `.opencode/command/gsd-validate-phase.md`
- `.opencode/get-shit-done/workflows/new-project.md`
- `.opencode/get-shit-done/workflows/discuss-phase.md`
- `.opencode/get-shit-done/workflows/plan-phase.md`
- `.opencode/get-shit-done/workflows/verify-work.md`
- `.opencode/get-shit-done/workflows/validate-phase.md`
- `.opencode/get-shit-done/references/questioning.md`
- `.opencode/get-shit-done/templates/project.md`
- `.opencode/get-shit-done/templates/requirements.md`
- `.opencode/get-shit-done/templates/context.md`
- `.opencode/get-shit-done/templates/UAT.md`

## Proximo passo recomendado

Mapear o que no fluxo oficial precisa ser convertido para o formato que o OpenCode espera sem perder o conteudo PT-BR.

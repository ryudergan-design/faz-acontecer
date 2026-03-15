# Mapeamento de Runtimes

Este documento mostra como o GSD oficial se organiza por runtime e onde a adaptacao PT-BR vai precisar agir.

## Runtimes observados
- Claude Code
- OpenCode
- Gemini CLI
- Codex
- Copilot

O foco principal desta adaptacao sera:
- Claude Code
- OpenCode
- Gemini CLI
- Codex

## Diretorios usados pelo instalador

### Instalacao local por projeto
- Claude Code: `./.claude`
- OpenCode: `./.opencode`
- Gemini CLI: `./.gemini`
- Codex: `./.codex`
- Copilot: `./.github`

### Instalacao global
- Claude Code: `~/.claude`
- OpenCode: `~/.config/opencode`
- Gemini CLI: `~/.gemini`
- Codex: `~/.codex`
- Copilot: `~/.copilot`

## Formato de comando por runtime

### Claude Code
Exemplos:
- `/gsd:help`
- `/gsd:new-project`

Leitura:
- e o formato base do sistema
- boa parte das adaptacoes parte daqui

### Gemini CLI
Exemplos:
- `/gsd:help`
- `/gsd:new-project`

Leitura:
- semanticamente muito proximo do Claude Code
- exige adaptacao de conteudo e possivelmente de agentes convertidos
- usa comandos em TOML no processo de conversao oficial

### OpenCode
Exemplos:
- `/gsd-help`
- `/gsd-new-project`

Leitura:
- usa a mesma familia de fluxo, mas com sintaxe de comando diferente
- o instalador trata OpenCode como caso especial em alguns pontos
- usa estrutura de comandos achatada no destino final

### Codex
Exemplos:
- `$gsd-help`
- `$gsd-new-project`

Leitura:
- no Codex, o GSD oficial usa `skills`, nao simples prompts customizados
- isso torna o Codex um ponto critico da adaptacao
- agentes e configuracao tambem precisam entrar no formato TOML

## O que o instalador faz por runtime

### Claude Code
- instala comandos
- instala agentes
- instala hooks
- pode configurar statusline

### Gemini CLI
- instala comandos
- instala agentes adaptados
- instala hooks
- tambem pode usar statusline

### OpenCode
- instala comandos adaptados
- trata permissoes de forma propria
- usa o caminho XDG de configuracao
- achata `commands/gsd/*.md` em `command/gsd-*.md`
- adapta frontmatter para o formato esperado pelo runtime

### Codex
- converte comandos para `skills`
- converte agentes para o formato esperado pelo Codex
- escreve configuracao em `config.toml`
- usa `CODEX_HOME` quando definido

### Gemini CLI
- usa estrutura muito proxima de Claude
- instala em `commands/gsd/`
- exige conversao para formato compativel com Gemini

## Ponto critico do Codex
No GSD oficial, Codex nao e apenas uma copia de Claude.

O instalador expõe funcoes como:
- conversao de agente Claude para agente Codex
- geracao de configuracao TOML
- conversao de comando para skill

Isso significa que a adaptacao PT-BR para Codex precisa respeitar:
- o fluxo de skills
- o formato do Codex
- a forma como o instalador injeta essas configuracoes

## Hooks observados
Foram encontrados hooks oficiais para:
- update check
- context monitor
- statusline

Impacto para PT-BR:
- as mensagens e feedbacks desses hooks tambem devem ser revistas
- mas sem quebrar a funcao operacional deles

## O que precisa ser traduzido de verdade

### Deve ir para portugues
- perguntas feitas ao usuario
- mensagens explicativas
- instrucoes de uso
- orientacoes de planejamento e execucao
- documentacao produzida pelo fluxo

### Deve ser preservado quando estrutural
- nomes de comandos
- nomes de pastas de runtime
- nomes de arquivos centrais
- identificadores tecnicos

## Conclusao pratica
A adaptacao PT-BR nao sera uma traducao simples de README.
Ela vai exigir trabalho em:
- comandos
- agentes
- instalador
- hooks
- documentacao

Leitura complementar importante:
- [Runtime Claude Code](RUNTIME-CLAUDE-CODE.md)
- [Runtime OpenCode](RUNTIME-OPENCODE.md)
- [Matriz Claude x OpenCode](MATRIZ-CLAUDE-X-OPENCODE.md)
- [Runtime Gemini CLI](RUNTIME-GEMINI-CLI.md)
- [Runtime Codex](RUNTIME-CODEX.md)

## Proximo passo recomendado
Leia [PLANO-DE-ADAPTACAO-PT-BR.md](PLANO-DE-ADAPTACAO-PT-BR.md).

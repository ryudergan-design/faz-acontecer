# Instalacao

Este documento resume a instalacao do GSD oficial em portugues do Brasil.

## Comando principal

```bash
npx get-shit-done-cc@latest
```

## O que o instalador faz
O instalador oficial pergunta:
1. qual runtime voce quer usar
2. se a instalacao sera global ou local

## Runtimes suportados
- Claude Code
- OpenCode
- Gemini CLI
- Codex
- Copilot

## Quando usar cada tipo de instalacao

### Instalacao global
O que faz:
- instala o GSD para todos os projetos daquele ambiente.
Quando usar:
- quando voce quer usar sempre no mesmo computador.
Valor recomendado:
- bom para uso pessoal continuo.

### Instalacao local
O que faz:
- instala o GSD apenas no projeto atual.
Quando usar:
- quando voce quer isolar a configuracao por repositorio.
Valor recomendado:
- bom para testes, contribuicao e ambientes controlados.

## Comandos nao interativos

```bash
# Claude Code
npx get-shit-done-cc --claude --global
npx get-shit-done-cc --claude --local

# OpenCode
npx get-shit-done-cc --opencode --global

# Gemini CLI
npx get-shit-done-cc --gemini --global

# Codex
npx get-shit-done-cc --codex --global
npx get-shit-done-cc --codex --local

# Copilot
npx get-shit-done-cc --copilot --global
npx get-shit-done-cc --copilot --local

# Todos os runtimes
npx get-shit-done-cc --all --global
```

## Como verificar se deu certo
- Claude Code / Gemini CLI: `/gsd:help`
- OpenCode: `/gsd-help`
- Codex: `$gsd-help`
- Copilot: `/gsd:help`

## Observacao importante sobre Codex
No Codex, a instalacao oficial usa `skills` em vez de prompts customizados.

Isso significa que:
- os nomes e a logica principal devem ser preservados
- adaptacoes locais precisam respeitar o fluxo de skills

## Atualizacao

```bash
npx get-shit-done-cc@latest
```

## Instalacao para desenvolvimento
Se a ideia for estudar ou adaptar o GSD:

```bash
git clone https://github.com/gsd-build/get-shit-done.git
cd get-shit-done
node bin/install.js --claude --local
```

## Permissoes

### Modo sem interrupcao
No caso do Claude Code, o GSD foi pensado para funcionar melhor sem travas repetidas de permissao.

Exemplo:

```bash
claude --dangerously-skip-permissions
```

Risco:
- reduz atrito, mas exige confianca no ambiente e no fluxo.
Quando usar:
- em ambiente controlado.
Valor recomendado:
- usar com consciencia, principalmente em maquina pessoal e projeto confiavel.

## Desinstalacao

```bash
npx get-shit-done-cc --claude --global --uninstall
npx get-shit-done-cc --opencode --global --uninstall
npx get-shit-done-cc --codex --global --uninstall
npx get-shit-done-cc --copilot --global --uninstall
```

## Proximo passo recomendado
Depois da instalacao, leia [FLUXO-GSD.md](FLUXO-GSD.md).

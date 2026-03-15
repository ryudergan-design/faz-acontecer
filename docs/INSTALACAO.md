# Instalacao

Este documento resume como instalar a versao propria do Faz Acontecer.

## Comando principal do Faz Acontecer

```bash
npx github:ryudergan-design/faz-acontecer --claude --global
```

## O que o instalador faz
O instalador do Faz Acontecer:
1. escolhe o runtime
2. escolhe entre modo global ou local
3. permite informar um diretorio customizado
4. faz backup automatico da configuracao anterior, se ela existir
5. instala a camada PT-BR diretamente a partir deste repositorio

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
npx github:ryudergan-design/faz-acontecer --claude --global
npx github:ryudergan-design/faz-acontecer --claude --local

# OpenCode
npx github:ryudergan-design/faz-acontecer --opencode --global

# Gemini CLI
npx github:ryudergan-design/faz-acontecer --gemini --global

# Codex
npx github:ryudergan-design/faz-acontecer --codex --global
npx github:ryudergan-design/faz-acontecer --codex --local

# Todos os runtimes
npx github:ryudergan-design/faz-acontecer --all --global
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
npx github:ryudergan-design/faz-acontecer --claude --global
```

## Instalacao para desenvolvimento
Se a ideia for estudar ou adaptar o Faz Acontecer:

```bash
git clone https://github.com/ryudergan-design/faz-acontecer.git
cd faz-acontecer
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
npx github:ryudergan-design/faz-acontecer --claude --global --uninstall
npx github:ryudergan-design/faz-acontecer --opencode --global --uninstall
npx github:ryudergan-design/faz-acontecer --gemini --global --uninstall
npx github:ryudergan-design/faz-acontecer --codex --global --uninstall
```

## Proximo passo recomendado
Depois da instalacao, leia [FLUXO-GSD.md](FLUXO-GSD.md).

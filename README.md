# Faz Acontecer

Uma base em portugues para estudar, documentar e adaptar o ecossistema do **GSD - Get Shit Done** sem quebrar o fluxo essencial do projeto oficial.

Este repositorio nasceu a partir de um commit inicial simples no GitHub e evolui aqui como uma variavel em portugues do GSD, focada em onboarding, entendimento estrutural e adaptacao por runtime.

Este repositorio nao substitui o GSD oficial.
Ele funciona como:
- referencia em portugues do fluxo
- base de instalacao e onboarding
- ponto de partida para melhorias de processo
- camada de adaptacao para Claude Code, OpenCode, Gemini CLI e Codex

## Referencia oficial
- Repositorio oficial: `https://github.com/gsd-build/get-shit-done`

## O que este repositorio busca fazer
- explicar o GSD em portugues do Brasil
- manter nomes tecnicos e identificadores essenciais em ingles
- preservar o fluxo oficial sempre que ele for estrutural
- adicionar boas praticas de documentacao, auditoria e organizacao
- preparar uma base para evolucoes futuras sem descaracterizar o sistema original

## O que este repositorio nao deve fazer
- renomear comandos oficiais do GSD
- mudar nomes de arquivos centrais que fazem parte do fluxo do sistema
- quebrar compatibilidade conceitual com Claude Code, OpenCode, Gemini CLI ou Codex
- confundir traducao com reescrita total da ferramenta

## Publico-alvo
Este repositorio foi pensado para:
- pessoas que querem entender o GSD melhor
- times que querem usar o GSD em portugues
- projetos que querem agregar boas praticas desde o inicio
- pessoas que desejam adaptar a experiencia para o seu contexto sem perder a espinha dorsal do GSD

## Instalacao rapida
Para instalar a versao propria do Faz Acontecer, use:

```bash
npx github:ryudergan-design/faz-acontecer --claude --global
```

Se voce quiser apenas a referencia original, o comando oficial continua sendo:

```bash
npx get-shit-done-cc@latest
```

Durante a instalacao do Faz Acontecer, voce pode escolher:
1. runtime
2. modo global ou local
3. diretorio customizado, se quiser

Runtimes suportados pelo GSD oficial:
- Claude Code
- OpenCode
- Gemini CLI
- Codex
- Copilot

Verificacao basica depois da instalacao:
- Claude Code / Gemini CLI: `/gsd:help`
- OpenCode: `/gsd-help`
- Codex: `$gsd-help`
- Copilot: `/gsd:help`

Observacao:
- o Faz Acontecer instala a camada PT-BR diretamente deste repositorio
- o GSD oficial continua como referencia estrutural
- a proposta aqui e praticidade, sem depender da instalacao oficial

## Comece por aqui
- [Instalacao](docs/INSTALACAO.md)
- [Fluxo do GSD](docs/FLUXO-GSD.md)
- [Comandos principais](docs/COMANDOS.md)
- [Estrutura do repositorio](docs/ESTRUTURA-DO-REPOSITORIO.md)
- [Adaptacao PT-BR e melhorias](docs/ADAPTACOES-PT-BR.md)
- [Mapeamento estrutural do GSD](docs/MAPEAMENTO-ESTRUTURAL-GSD.md)
- [Mapeamento de runtimes](docs/MAPEAMENTO-DE-RUNTIMES.md)
- [Plano de adaptacao PT-BR](docs/PLANO-DE-ADAPTACAO-PT-BR.md)
- [Inventario de comandos](docs/INVENTARIO-COMANDOS-GSD.md)
- [Inventario de agentes](docs/INVENTARIO-AGENTES-GSD.md)
- [Mapeamento das camadas internas](docs/MAPEAMENTO-DAS-CAMADAS-INTERNAS.md)
- [Matriz comando x runtime](docs/MATRIZ-COMANDO-RUNTIME-PT-BR.md)
- [Blueprint do fluxo new-project](docs/BLUEPRINT-FLUXO-NEW-PROJECT.md)
- [Trilha de adaptacao do new-project](docs/TRILHA-DE-ADAPTACAO-NEW-PROJECT.md)
- [Insumos estrategicos para evolucao](docs/INSUMOS-ESTRATEGICOS-PARA-EVOLUCAO.md)
- [Camada transversal de qualidade](docs/CAMADA-TRANSVERSAL-DE-QUALIDADE.md)
- [Mapa de impacto do agregador nos fluxos](docs/MAPA-DE-IMPACTO-DO-AGREGADOR-NOS-FLUXOS.md)
- [Blueprint do fluxo discuss-phase](docs/BLUEPRINT-FLUXO-DISCUSS-PHASE.md)
- [Trilha de adaptacao do discuss-phase](docs/TRILHA-DE-ADAPTACAO-DISCUSS-PHASE.md)
- [Blueprint do fluxo plan-phase](docs/BLUEPRINT-FLUXO-PLAN-PHASE.md)
- [Trilha de adaptacao do plan-phase](docs/TRILHA-DE-ADAPTACAO-PLAN-PHASE.md)
- [Blueprint do fluxo verify-work](docs/BLUEPRINT-FLUXO-VERIFY-WORK.md)
- [Trilha de adaptacao do verify-work](docs/TRILHA-DE-ADAPTACAO-VERIFY-WORK.md)
- [Blueprint do fluxo validate-phase](docs/BLUEPRINT-FLUXO-VALIDATE-PHASE.md)
- [Trilha de adaptacao do validate-phase](docs/TRILHA-DE-ADAPTACAO-VALIDATE-PHASE.md)
- [Visao consolidada dos fluxos centrais](docs/VISAO-CONSOLIDADA-DOS-FLUXOS-CENTRAIS.md)
- [Runtime Claude Code](docs/RUNTIME-CLAUDE-CODE.md)
- [Runtime OpenCode](docs/RUNTIME-OPENCODE.md)
- [Estrategia para Claude e OpenCode](docs/ESTRATEGIA-CLAUDE-E-OPENCODE.md)
- [Matriz Claude x OpenCode](docs/MATRIZ-CLAUDE-X-OPENCODE.md)
- [Runtime Gemini CLI](docs/RUNTIME-GEMINI-CLI.md)
- [Runtime Codex](docs/RUNTIME-CODEX.md)
- [Estrategia para Gemini e Codex](docs/ESTRATEGIA-GEMINI-E-CODEX.md)

## Estrutura desta base
- `docs/`
  Documentacao em portugues.
- `commands/`
  Espaco para mapear e documentar comandos do ecossistema GSD.
- `agents/`
  Espaco para documentar ou adaptar agentes.
- `hooks/`
  Espaco para documentar integracoes e automacoes do fluxo.
- `scripts/`
  Scripts auxiliares, instalacao e apoio operacional.
- `tests/`
  Estrutura reservada para testes da base e validacoes futuras.
- `assets/`
  Imagens e material visual de apoio.
- `.claude/`
  Espelho estrutural da futura adaptacao para Claude Code.
- `.opencode/`
  Espelho estrutural da futura adaptacao para OpenCode.
- `.gemini/`
  Espelho estrutural da futura adaptacao para Gemini CLI.
- `.codex/`
  Espelho estrutural da futura adaptacao para Codex.

## Estado da adaptacao pratica

A base ja saiu do nivel puramente documental.

Ja existe primeira leva concreta de arquivos adaptados em:
- `.claude/`
- `.opencode/`
- `.gemini/`
- `.codex/`

Fluxos materializados nesta etapa:
- `new-project`
- `discuss-phase`
- `plan-phase`
- `verify-work`
- `validate-phase`

Runtimes com fundacao concreta:
- Claude Code
- OpenCode
- Gemini CLI
- Codex

Tambem ja existem camadas canonicas reais em:
- `commands/gsd/`
- `get-shit-done/`
- `agents/`
- `bin/install.js`

## Direcao desta adaptacao
Esta base deve evoluir em tres camadas:

### 1. Traducao e onboarding
Traduzir e explicar melhor a experiencia do GSD para PT-BR.

### 2. Boas praticas nativas
Acoplar guias de:
- auditoria
- organizacao
- documentacao continua
- registro visual before/after
- commit e push como parte da entrega

### 3. Evolucao controlada
Melhorar a experiencia sem quebrar:
- nomes oficiais
- semantica do fluxo
- entendimento que o GSD oficial espera

## Proximo passo recomendado
Leia [Instalacao](docs/INSTALACAO.md) e [Fluxo do GSD](docs/FLUXO-GSD.md) primeiro.

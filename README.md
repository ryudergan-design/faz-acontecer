# Faz Acontecer

Uma distribuicao em portugues do **GSD - Get Shit Done**, com instalador proprio, camada transversal de qualidade e adaptacao nativa para Claude Code, OpenCode, Gemini CLI e Codex.

O Faz Acontecer funciona como um GSD completo:
- com onboarding em portugues
- com instalacao propria
- com comandos, workflows, templates e agents em PT-BR
- com agregadores de boas praticas
- com foco em documentacao, auditoria e organizacao desde o inicio

## Origem estrutural
- A base conceitual nasceu do ecossistema GSD: `https://github.com/gsd-build/get-shit-done`
- O Faz Acontecer segue como sistema proprio, com narrativa, instalacao e guias proprios

## O que este repositorio busca fazer
- explicar o GSD em portugues do Brasil
- manter nomes tecnicos e identificadores essenciais em ingles
- preservar a espinha dorsal estrutural que torna o GSD forte
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

Durante a instalacao do Faz Acontecer, voce pode escolher:
1. runtime
2. modo global ou local
3. diretorio customizado, se quiser

Runtimes suportados pelo Faz Acontecer:
- Claude Code
- OpenCode
- Gemini CLI
- Codex

Verificacao basica depois da instalacao:
- Claude Code / Gemini CLI: `/gsd:help`
- OpenCode: `/gsd-help`
- Codex: `$gsd-help`

Observacao:
- o Faz Acontecer instala a camada PT-BR diretamente deste repositorio
- a proposta aqui e tratar isso como nosso GSD, com instalacao e operacao proprias

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
- [Estado da cobertura canonica](docs/ESTADO-DA-COBERTURA-CANONICA.md)

## Estrutura desta base
- `docs/`
  Documentacao em portugues.
- `commands/`
  Camada canonica dos comandos do Faz Acontecer.
- `agents/`
  Camada canonica dos agents do Faz Acontecer.
- `hooks/`
  Espaco para documentar integracoes e automacoes do fluxo.
- `scripts/`
  Scripts auxiliares, instalacao e apoio operacional.
- `tests/`
  Estrutura reservada para testes da base e validacoes futuras.
- `assets/`
  Imagens e material visual de apoio.
- `.claude/`
  Distribuicao do Faz Acontecer para Claude Code.
- `.opencode/`
  Distribuicao do Faz Acontecer para OpenCode.
- `.gemini/`
  Distribuicao do Faz Acontecer para Gemini CLI.
- `.codex/`
  Distribuicao do Faz Acontecer para Codex.

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
- compatibilidade conceitual entre runtimes

## Proximo passo recomendado
Leia [Instalacao](docs/INSTALACAO.md) e [Fluxo do GSD](docs/FLUXO-GSD.md) primeiro.

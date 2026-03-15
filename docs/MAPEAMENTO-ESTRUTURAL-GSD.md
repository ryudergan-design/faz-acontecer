# Mapeamento Estrutural do GSD

Este documento registra a estrutura observada no repositorio oficial do GSD e destaca o que e mais importante para uma futura adaptacao em portugues.

## Base oficial analisada
- Repositorio: `https://github.com/gsd-build/get-shit-done`
- Branch de referencia observada localmente: `main`

## Estrutura principal encontrada
- `README.md`
  Entrada principal, instalacao, fluxo, comandos e visao geral.
- `docs/`
  Documentacao complementar, incluindo guia do usuario.
- `bin/install.js`
  Instalador principal e ponto mais importante para entender como cada runtime recebe os artefatos.
- `commands/gsd/`
  Comandos centrais do sistema em arquivos Markdown.
- `agents/`
  Agentes especializados usados pelo fluxo do GSD.
- `hooks/`
  Hooks operacionais, como monitor de contexto e verificacao de update.
- `scripts/`
  Scripts auxiliares de build e testes.
- `tests/`
  Validacao do instalador e do comportamento do sistema.
- `assets/`
  Material visual do repositorio oficial.

## Leitura estrutural
O GSD oficial se apoia em quatro pilares:

### 1. Conteudo de comando
Fica em `commands/gsd/`.

Esses arquivos descrevem:
- o que cada comando faz
- qual fluxo ele aciona
- como ele conversa com o runtime

### 2. Agentes
Ficam em `agents/`.

Esses arquivos representam os papeis especializados do sistema, como:
- planejamento
- execucao
- verificacao
- pesquisa
- auditoria

### 3. Instalador
Fica em `bin/install.js`.

Esse arquivo:
- detecta o runtime
- define o diretorio alvo
- converte comandos e agentes conforme a plataforma
- escreve configuracoes
- instala hooks

### 4. Documentacao
Fica principalmente em:
- `README.md`
- `docs/USER-GUIDE.md`

Essa camada explica:
- como instalar
- como usar
- como configurar
- como pensar o fluxo

## O que isso significa para a adaptacao PT-BR
Se a meta for mudar o comportamento para portugues sem quebrar a estrutura:
- nao basta traduzir o README
- sera necessario mapear como comandos, agentes, instalador e hooks se conectam

## Areas de maior impacto para PT-BR

### Alta prioridade
- `commands/gsd/`
- `agents/`
- `bin/install.js`
- documentacao principal

### Media prioridade
- `hooks/`
- `docs/USER-GUIDE.md`
- mensagens finais do instalador

### Baixa prioridade inicial
- `assets/`
- `tests/`
- `CHANGELOG.md`

## Regra de ouro
Nesta adaptacao, o ideal e:
- traduzir experiencia e linguagem
- preservar identificadores, nomes tecnicos e estrutura essencial

Exemplos do que tende a permanecer em ingles:
- nomes de comandos
- nomes de arquivos centrais
- nomes de agentes
- nomes de pastas de runtime

## Proximo passo recomendado
Leia [MAPEAMENTO-DE-RUNTIMES.md](MAPEAMENTO-DE-RUNTIMES.md).

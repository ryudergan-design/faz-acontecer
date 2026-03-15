# Comandos

Resumo dos comandos principais do Faz Acontecer GSD.

## Workflow principal

### `/gsd:new-project`
O que faz:
- inicializa o projeto
- coleta contexto
- pesquisa
- cria requisitos e roadmap

### `/gsd:discuss-phase [N]`
O que faz:
- discute a fase antes do planejamento
- transforma ambiguidades em decisoes

### `/gsd:plan-phase [N]`
O que faz:
- pesquisa como implementar
- cria o plano da fase
- verifica se o plano atende o objetivo

### `/gsd:execute-phase <N>`
O que faz:
- executa os planos da fase
- paraleliza quando possivel
- fecha com verificacao

Diferencial do Faz Acontecer:
- linguagem em portugues
- foco em rastreabilidade
- reforco de boas praticas durante a execucao

### `/gsd:verify-work [N]`
O que faz:
- valida o que foi entregue
- guia a revisao humana

### `/gsd:validate-phase [N]`
O que faz:
- audita a qualidade final de uma fase
- compara contexto, plano e executado

## Navegacao e apoio

### `/gsd:progress`
O que faz:
- mostra em que ponto o projeto esta

Diferencial:
- sugere o proximo passo de forma mais didatica

### `/gsd:help`
O que faz:
- lista comandos e guia de uso

### `/gsd:settings`
O que faz:
- configura comportamento do metodo
- grava preferencias em `config.json`

### `/gsd:quick`
O que faz:
- resolve tarefa pequena com a disciplina do metodo

### `/gsd:update`
O que faz:
- atualiza o Faz Acontecer GSD

## Brownfield

### `/gsd:map-codebase [area]`
O que faz:
- analisa base de codigo ja existente
- prepara o GSD para projeto que nao nasceu do zero

Diferencial:
- ajuda bastante em brownfield
- gera base melhor para auditoria e continuidade

## Gerenciamento de fases

### `/gsd:add-phase`
O que faz:
- adiciona fase ao roadmap

### `/gsd:insert-phase [N]`
O que faz:
- insere trabalho urgente entre fases

### `/gsd:remove-phase [N]`
O que faz:
- remove fase futura e renumera

## Sessao

### `/gsd:pause-work`
O que faz:
- gera handoff para retomar depois

### `/gsd:resume-work`
O que faz:
- restaura o contexto da sessao anterior

## Utilitarios

### `/gsd:set-profile <profile>`
O que faz:
- troca o perfil de qualidade, equilibrio ou custo

### `/gsd:add-todo`
O que faz:
- registra ideia ou trabalho futuro

### `/gsd:check-todos`
O que faz:
- mostra pendencias

### `/gsd:debug`
O que faz:
- abre fluxo de depuracao sistematica

### `/gsd:quick`
O que faz:
- executa tarefa rapida com garantias do GSD

## Diferenciais gerais do Faz Acontecer
- comandos e respostas em portugues
- camada transversal de qualidade
- documentacao viva mais clara
- organizacao de projeto mais amigavel
- base preparada para auditoria, continuidade e governanca

## Comandos por runtime

### Claude Code / Gemini CLI / Copilot
- `/gsd:help`

### OpenCode
- `/gsd-help`

### Codex
- `$gsd-help`

## Proximo passo recomendado
Leia [ESTRUTURA-DO-REPOSITORIO.md](ESTRUTURA-DO-REPOSITORIO.md).

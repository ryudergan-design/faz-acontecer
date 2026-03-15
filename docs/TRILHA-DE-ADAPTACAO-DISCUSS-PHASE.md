# Trilha de Adaptacao `discuss-phase`

Este documento transforma o blueprint do `discuss-phase` em uma trilha pratica de adaptacao.

## Objetivo

Adaptar o fluxo `discuss-phase` para portugues do Brasil sem perder:
- a inteligencia do fluxo oficial
- o controle de escopo
- a profundidade da descoberta
- o papel do `CONTEXT.md`

E, ao mesmo tempo, incorporar o agregador de qualidade.

## Arquivos prioritarios

### 1. `commands/gsd/discuss-phase.md`
Prioridade:
- alta

Motivo:
- e a porta de entrada do fluxo

O que adaptar:
- descricao
- explicacao do objetivo
- texto visivel ao usuario

O que preservar:
- nome do comando
- hint de argumento
- allowed tools
- ponte com o workflow

### 2. `get-shit-done/workflows/discuss-phase.md`
Prioridade:
- muito alta

Motivo:
- aqui esta o comportamento real da entrevista de fase

O que adaptar:
- perguntas ao usuario
- mensagens de apresentacao das zonas cinzentas
- banners e resumos
- mensagens de proximo passo
- orientacao para capturar contexto em portugues

O que enriquecer com o agregador:
- criterio para identificar gray areas
- criterio para aprofundar impacto
- maior atencao a arquitetura, testes, seguranca, banco, frontend e backend

O que preservar:
- fluxo adaptativo
- regra de nao fazer interrogatorio corporativo
- scope guardrail
- uso de contexto anterior e scout do codigo

### 3. `get-shit-done/templates/context.md`
Prioridade:
- alta

Motivo:
- o `CONTEXT.md` alimenta pesquisa e planejamento

O que adaptar:
- texto-base do template
- orientacoes e exemplos
- secoes para portugues natural

O que preservar:
- papel do arquivo
- estrutura conceitual do contexto

## O que o agregador deve mudar neste fluxo

### Mudanca 1. Melhor selecao de gray areas
A IA deve ficar melhor em identificar:
- o que realmente importa discutir
- o que tem impacto tecnico real
- o que muda a entrega

### Mudanca 2. Melhor profundidade
Quando a fase tocar em software real, a IA deve considerar:
- arquitetura
- banco
- backend
- frontend
- seguranca
- testes
- observabilidade

### Mudanca 3. Melhor qualidade do contexto gerado
O `CONTEXT.md` deve ficar:
- mais claro
- mais acionavel
- mais util para pesquisa e planejamento

## Regras de seguranca da adaptacao

### Nao fazer
- traducao literal ruim
- linguagem engessada
- lista infinita de perguntas
- aumento artificial de escopo

### Fazer
- conversa natural em portugues
- profundidade quando fizer sentido
- seletividade
- clareza

## Ordem recomendada de execucao

1. adaptar `commands/gsd/discuss-phase.md`
2. adaptar `workflows/discuss-phase.md`
3. adaptar `templates/context.md`
4. revisar coerencia com o agregador
5. validar se o fluxo continua leve e fiel ao oficial

## Criterio de sucesso

O `discuss-phase` adaptado estara bom quando:
- perguntar em portugues de forma natural
- continuar conversacional
- gerar `CONTEXT.md` em portugues
- enriquecer a analise com o agregador
- continuar reconhecivel como GSD

## Proximo passo recomendado

Depois do `discuss-phase`, atacar:
- `plan-phase`

Motivo:
- ele e o fluxo seguinte natural e recebe diretamente o impacto de um contexto melhor.

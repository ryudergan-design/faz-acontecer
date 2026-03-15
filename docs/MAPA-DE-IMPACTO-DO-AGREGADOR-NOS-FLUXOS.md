# Mapa de Impacto do Agregador nos Fluxos do GSD

Este documento mostra como a camada agregadora de qualidade, baseada principalmente em `pipeline-dev-software.html`, deve influenciar os fluxos principais do GSD adaptado em portugues.

O objetivo nao e trocar o fluxo oficial.
O objetivo e deixar o fluxo mais forte, mais maduro e mais util para quem esta construindo software.

## Papel do agregador

O agregador existe para lembrar pontos que frequentemente ficam esquecidos quando a IA conduz um projeto:
- arquitetura
- banco de dados
- backend
- frontend
- seguranca
- testes
- DevOps e deploy
- QA e qualidade
- observabilidade
- documentacao

Ele deve atuar como camada de profundidade.

## Fluxos onde o impacto e mais forte

### 1. `new-project`
O agregador melhora:
- qualidade das perguntas iniciais
- profundidade do entendimento do produto
- captura de riscos e preocupacoes tecnicas desde o inicio
- qualidade dos documentos gerados para o projeto nascer melhor

O que deve aparecer:
- tipo de produto
- natureza do software
- necessidades de dados
- preocupacoes de seguranca
- necessidade de testes
- preocupacoes de deploy e manutencao

### 2. `discuss-phase`
O agregador melhora:
- profundidade das perguntas de fase
- identificacao de impacto real da fase
- descoberta de pontos tecnicos importantes que o usuario nao citou
- qualidade do `CONTEXT.md`

O que deve aparecer quando fizer sentido:
- impacto em banco
- impacto em frontend e backend
- impacto em seguranca
- necessidade de testes
- necessidade de observabilidade, logs e validacao

### 3. `plan-phase`
O agregador melhora:
- qualidade da decomposicao em tarefas
- equilibrio entre implementacao, testes, validacao e documentacao
- analise de risco
- coerencia tecnica do plano

O plano deixa de ser apenas:
- "fazer codigo"

E passa a ser tambem:
- "fazer com qualidade e criterio"

### 4. `verify-work`
O agregador melhora:
- validacao funcional
- analise de testes
- revisao de seguranca
- checagem de completude
- qualidade da entrega final

### 5. `validate-phase`
O agregador melhora:
- auditoria tecnica
- comparacao entre planejado e executado
- aderencia arquitetural
- identificacao de lacunas de qualidade
- identificacao de debito tecnico

## Intensidade por fluxo

### Muito forte
- `new-project`
- `discuss-phase`
- `plan-phase`
- `validate-phase`

### Forte
- `verify-work`

### Indireta, mas relevante
- `execute-phase`

No `execute-phase`, o agregador nao deve travar a execucao.
Ele deve orientar o criterio da execucao.

## Regra de comportamento

Quando o contexto for desenvolvimento de software, a IA deve:
- seguir o fluxo oficial do GSD
- e ao mesmo tempo considerar a camada agregadora

Sem fazer:
- interrogatorio pesado
- burocracia desnecessaria
- checklist cega

Com isso, a experiencia fica:
- mais natural
- mais profissional
- mais util

## Resultado esperado

Quando esse mapa for aplicado:
- o projeto nasce melhor
- as fases sao discutidas melhor
- os planos ficam mais maduros
- a validacao fica mais forte
- o GSD continua sendo reconhecivel
- o `Faz Acontecer` vira uma extensao de qualidade real

## Proximo passo recomendado

Aplicar esse mapa em documentos de adaptacao especificos dos fluxos:
- `discuss-phase`
- `plan-phase`
- `verify-work`
- `validate-phase`

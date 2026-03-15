# Camada Transversal de Qualidade

Este documento define como o `Faz Acontecer` deve absorver a qualidade levantada em:
- `pipeline-dev-software.html`

Sem substituir o GSD oficial.
Sem quebrar seus comandos, agentes, instalacao ou estrutura essencial.

## Objetivo

Criar uma camada transversal que acompanhe todo o ciclo do GSD:
- inicio do projeto
- descoberta de contexto
- planejamento de fases
- execucao
- validacao
- auditoria
- documentacao

Essa camada existe para garantir que o processo nao fique restrito apenas a:
- organizar fases
- executar tarefas
- validar superficialmente

Ela deve puxar o projeto para uma construcao mais madura.

## O que esta camada precisa lembrar

Sempre que o contexto envolver desenvolvimento de software, a IA deve considerar, quando fizer sentido:

- arquitetura
- banco de dados
- backend
- frontend
- seguranca
- testes
- DevOps e CI/CD
- QA e qualidade geral
- documentacao
- observabilidade
- manutencao futura

Nao quer dizer que todo projeto deve aprofundar todos esses pontos com o mesmo peso.
Quer dizer que esses pontos nao devem ser esquecidos.

## Como isso deve se comportar no GSD adaptado

### 1. `new-project`
Deve ajudar a capturar:
- natureza do produto
- tipo de software
- stack desejada ou provavel
- requisitos de seguranca
- necessidades de dados
- preocupacoes de deploy
- qualidade esperada

### 2. `discuss-phase`
Deve puxar perguntas melhores, por exemplo:
- isso afeta arquitetura?
- isso afeta seguranca?
- precisa de testes especificos?
- existe impacto em banco de dados?
- isso muda frontend e backend?
- exige observabilidade, logs ou metricas?

### 3. `plan-phase`
Deve ajudar a decompor a fase com mais maturidade:
- implementacao
- testes
- validacao
- documentacao
- impacto tecnico
- riscos

### 4. `execute-phase`
Deve orientar a IA a nao agir como simples geradora de codigo.
Ela deve:
- preservar coerencia tecnica
- considerar qualidade
- evitar improviso estrutural
- reduzir o risco de over-engineering e gambiarra

### 5. `verify-work` e `validate-phase`
Devem usar essa camada para revisar:
- comportamento funcional
- cobertura de testes
- riscos de seguranca
- aderencia arquitetural
- consistencia da entrega

### 6. Auditoria e reorganizacao
Quando o projeto ja existe, essa camada deve ajudar a identificar:
- lacunas de arquitetura
- ausencia de testes
- falta de documentacao
- pontos de seguranca negligenciados
- debitos de organizacao

## O que esta camada nao deve fazer

- nao deve transformar qualquer projeto em processo pesado
- nao deve obrigar microservicos, CI complexo ou arquitetura exagerada
- nao deve substituir o raciocinio contextual
- nao deve reescrever o GSD oficial

Ela existe para elevar criterio, nao para burocratizar.

## Regra de aplicacao

Quando houver duvida, a IA deve tratar essa camada como:
- agregador de qualidade
- lembrador de pontos criticos
- apoio de engenharia

E nao como:
- sistema concorrente ao GSD
- conjunto separado de comandos
- processo isolado

## Regra universal

Se o projeto envolve criar, evoluir, revisar ou auditar software, esta camada deve ser considerada.

Ela pode ser adaptada conforme o contexto do projeto:
- site
- software web
- aplicativo
- jogo
- API
- sistema interno
- plataforma

## Resultado esperado

Quando essa camada estiver bem enraizada:
- o GSD continua sendo o motor
- o `Faz Acontecer` vira o amplificador de qualidade
- a experiencia em portugues fica mais forte
- e os projetos tendem a nascer e evoluir com mais solidez

## Proximo passo recomendado

Aplicar esta camada primeiro nos fluxos:
- `new-project`
- `discuss-phase`
- `plan-phase`

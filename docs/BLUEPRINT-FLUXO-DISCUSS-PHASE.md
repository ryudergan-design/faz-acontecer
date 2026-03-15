# Blueprint do Fluxo `discuss-phase`

Este documento mapeia o fluxo `discuss-phase` do GSD oficial e define como ele deve ser adaptado para portugues do Brasil sem quebrar sua logica original.

## Objetivo do fluxo

No oficial, `discuss-phase` existe para:
- carregar contexto anterior
- entender a fase atual
- identificar zonas cinzentas
- conversar com o usuario sobre essas ambiguidades
- gerar um `CONTEXT.md` forte o suficiente para pesquisa e planejamento

Na adaptacao PT-BR, esse fluxo precisa:
- perguntar em portugues
- responder em portugues
- documentar em portugues
- manter o comportamento adaptativo do oficial
- incorporar a camada agregadora de qualidade sem virar burocracia

## Camadas envolvidas

### 1. Command
Arquivo observado:
- `commands/gsd/discuss-phase.md`

Papel:
- expor o comando
- definir o objetivo
- apontar o workflow real

O que adaptar:
- descricao
- explicacoes ao usuario
- linguagem do objetivo

O que preservar:
- `name: gsd:discuss-phase`
- hint de argumentos
- execution context

### 2. Workflow
Arquivo observado:
- `get-shit-done/workflows/discuss-phase.md`

Papel:
- definir a ordem da discussao
- carregar contexto
- scout de codigo
- analisar a fase
- apresentar zonas cinzentas
- aprofundar por area
- escrever `CONTEXT.md`

O que adaptar:
- todas as perguntas visiveis ao usuario
- mensagens de explicacao
- resumos
- mensagens de proximo passo

O que preservar:
- estrutura do workflow
- gate de escopo
- logica de aprofundamento
- ideia de nao fazer interrogatorio

### 3. Template
Arquivo observado:
- `get-shit-done/templates/context.md`

Papel:
- estruturar o `CONTEXT.md`

O que adaptar:
- linguagem do template
- exemplos e instrucoes escritas

O que preservar:
- nome do arquivo
- papel estrutural do contexto para agentes posteriores

## O que o oficial ja faz muito bem

O `discuss-phase` oficial ja tem uma base muito forte:
- nao trata o usuario como entrevistado corporativo
- trata o usuario como visionario e a IA como construtora
- impede scope creep
- aproveita contexto anterior
- faz scout do codigo
- aprofunda por areas relevantes

Entao o trabalho aqui nao e reinventar.
E portar e enriquecer.

## Onde o PT-BR precisa atuar

### 1. Conversa natural
As perguntas precisam soar naturais em portugues.

Nao basta traduzir literalmente.
Precisa soar:
- colaborativo
- claro
- humano
- inteligente

### 2. Zonas cinzentas mais bem explicadas
As opcoes devem ficar mais claras para quem nao domina termos tecnicos.

### 3. `CONTEXT.md` em portugues
Esse e um ponto central.
Se o contexto continuar em ingles, todo o fluxo posterior fica meio quebrado para o usuario brasileiro.

## Onde o agregador entra

A camada baseada em `pipeline-dev-software.html` deve entrar aqui com bastante forca.

Nao para transformar a discussao em checklist pesada.
Mas para ajudar a IA a lembrar, quando fizer sentido, de pontos como:
- arquitetura
- banco de dados
- frontend
- backend
- seguranca
- testes
- observabilidade
- impacto em deploy
- qualidade geral

## Como isso aparece na pratica

Se a fase for de frontend:
- a IA pode puxar responsividade, estados, acessibilidade e integracao com backend

Se a fase for de backend:
- a IA pode puxar contrato, erros, autenticacao, validacao e persistencia

Se a fase for de banco:
- a IA pode puxar migracao, impacto em dados e riscos

Se a fase for de sistema mais amplo:
- a IA pode puxar arquitetura, observabilidade, testes e seguranca

## Regra importante

O agregador nao deve:
- criar escopo novo
- transformar a fase em algo maior
- sair perguntando tudo para todo projeto

Ele deve:
- enriquecer o criterio de analise
- melhorar a escolha das zonas cinzentas
- melhorar a qualidade da conversa

## Resultado esperado

Depois da adaptacao do `discuss-phase`:
- a conversa fica em portugues natural
- o `CONTEXT.md` nasce em portugues
- as decisoes ficam mais claras
- o planejamento posterior melhora
- o projeto ganha mais maturidade sem perder fluidez

## Arquivos oficialmente envolvidos

### Command
- `commands/gsd/discuss-phase.md`

### Workflow
- `get-shit-done/workflows/discuss-phase.md`

### Template
- `get-shit-done/templates/context.md`

## Proximo passo recomendado

Criar a trilha de adaptacao do `discuss-phase` por arquivo:
- command
- workflow
- template
- impacto do agregador

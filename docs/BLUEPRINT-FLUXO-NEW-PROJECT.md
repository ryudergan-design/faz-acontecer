# Blueprint do Fluxo `new-project`

Este documento mapeia o fluxo `new-project` do GSD oficial ponta a ponta e define o que precisa ser adaptado para portugues do Brasil sem quebrar a experiencia oficial.

## Objetivo do fluxo
No oficial, `new-project` faz o projeto nascer.

Ele cobre:
- questioning
- pesquisa opcional
- definicao de requisitos
- criacao de roadmap
- inicializacao do estado do projeto

Na adaptacao PT-BR, este fluxo precisa:
- perguntar em portugues
- responder em portugues
- gerar documentacao em portugues
- preservar comandos, identificadores e estrutura essencial

---

## Camadas envolvidas

### 1. Command
Arquivo observado:
- `commands/gsd/new-project.md`

Papel:
- expor o comando ao runtime
- definir o objetivo
- apontar o `execution_context`
- iniciar o workflow real

O que adaptar:
- `description`
- explicacoes do objetivo
- texto de instrucoes ao usuario

O que preservar:
- `name: gsd:new-project`
- estrutura de argumentos
- ligacao com os arquivos de workflow

### 2. Workflow
Arquivo observado:
- `get-shit-done/workflows/new-project.md`

Papel:
- definir a ordem real das etapas
- brownfield detection
- questioning
- configuracao
- pesquisa
- requirements
- roadmap
- fechamento

O que adaptar:
- perguntas ao usuario
- mensagens de banner
- textos de aprovacao
- mensagens de erro e orientacao
- textos de resumo e proximo passo

O que preservar:
- ordem logica do fluxo
- gates de validacao
- checkpoints de aprovacao
- integracao com `gsd-tools`

### 3. References
Arquivo mais importante observado:
- `get-shit-done/references/questioning.md`

Papel:
- orientar como perguntar
- como aprofundar respostas
- como usar `AskUserQuestion`

O que adaptar:
- filosofia de conversa em portugues
- exemplos de perguntas e opcoes em portugues

O que preservar:
- logica de descoberta
- regra de nao entrevistar friamente
- regra de seguir o fio da conversa

### 4. Templates
Arquivos mais impactados:
- `templates/project.md`
- `templates/requirements.md`
- `templates/roadmap.md`
- `templates/state.md`

Papel:
- gerar a documentacao que nasce do fluxo

O que adaptar:
- todos os textos base dos templates
- guias e exemplos embutidos

O que preservar:
- nomes dos arquivos
- papel estrutural de cada documento
- rastreabilidade do GSD

### 5. Agents
Agente mais importante neste fluxo:
- `agents/gsd-roadmapper.md`

Papel:
- pegar requisitos
- quebrar em fases
- garantir cobertura
- gerar `ROADMAP.md` e `STATE.md`

O que adaptar:
- linguagem das instrucoes
- forma de raciocinar e responder em portugues

O que preservar:
- nome do agente
- objetivo funcional
- cobertura de requisitos

### 6. Installer e runtime
Arquivo critico:
- `bin/install.js`

Papel:
- instalar a camada certa em cada runtime
- adaptar o formato conforme Claude, Gemini, OpenCode ou Codex

O que adaptar:
- garantir que os artefatos PT-BR sejam os que chegam ao runtime
- sem mudar a estrutura que cada runtime espera

---

## Etapas observadas no fluxo oficial

### Etapa 1. Setup
O workflow:
- roda `gsd-tools init new-project`
- detecta se ja existe projeto
- detecta se ha codigo existente
- inicializa git se necessario

Impacto PT-BR:
- mensagens de setup podem ir para portugues
- comandos e estrutura tecnica devem permanecer

### Etapa 2. Brownfield offer
Se houver codigo existente, o oficial pergunta se deve rodar `map-codebase`.

Impacto PT-BR:
- a pergunta e as opcoes devem ir para portugues
- a logica de brownfield deve permanecer

### Etapa 2a. Config auto mode
No `--auto`, o sistema pergunta configuracoes de trabalho antes de seguir.

Exemplos:
- granularidade
- paralelizacao
- git tracking
- research
- plan check
- verifier
- AI models

Impacto PT-BR:
- essas perguntas precisam ficar muito claras em portugues
- esse e um ponto importante para onboarding de quem nao domina ingles

### Etapa 3. Deep questioning
Essa e uma das partes mais sensiveis.

O oficial:
- abre com "What do you want to build?"
- aprofunda
- segue o fio da conversa
- nao faz interrogatorio corporativo
- decide quando esta pronto para gerar `PROJECT.md`

Impacto PT-BR:
- precisa ficar natural em portugues
- precisa soar colaborativo, nao engessado
- os exemplos de `questioning.md` precisam ser portados

### Etapa 4. Write PROJECT.md
O oficial sintetiza o contexto no template de `PROJECT.md`.

Impacto PT-BR:
- o documento gerado precisa nascer em portugues
- esse e um dos pontos mais importantes do teu objetivo

### Etapa 5. Workflow preferences
O sistema pergunta como a pessoa quer trabalhar.

Impacto PT-BR:
- excelente lugar para melhorar explicacoes
- sem mudar a semantica tecnica

### Etapa 6. Research decision
O sistema pergunta se deve pesquisar antes.

Se sim:
- cria `.planning/research/`
- dispara 4 pesquisadores paralelos
- sintetiza em `SUMMARY.md`

Impacto PT-BR:
- banners, perguntas e resumo devem ir para portugues
- prompts dos agentes de pesquisa tambem vao precisar de adaptacao futura

### Etapa 7. Define requirements
O sistema:
- define v1
- separa v2
- marca fora de escopo
- usa `REQUIREMENTS.md`

Impacto PT-BR:
- altissimo
- se nao adaptar isso, o projeto continua documentando em ingles

### Etapa 8. Create roadmap
O sistema:
- chama `gsd-roadmapper`
- gera `ROADMAP.md`
- atualiza `STATE.md`
- atualiza rastreabilidade de `REQUIREMENTS.md`

Impacto PT-BR:
- precisa garantir roadmap em portugues
- mantendo nomes de arquivos e logica de cobertura

### Etapa 9. Done
O sistema:
- mostra resumo final
- aponta proximo comando
- em `--auto`, pode seguir adiante para a fase 1

Impacto PT-BR:
- mensagens finais
- banners
- orientacoes de proximo passo

---

## Arquivos oficialmente envolvidos

### Command
- `commands/gsd/new-project.md`

### Workflow
- `get-shit-done/workflows/new-project.md`

### References
- `get-shit-done/references/questioning.md`
- possivelmente outros arquivos auxiliares depois, conforme aprofundarmos a adaptacao

### Templates
- `get-shit-done/templates/project.md`
- `get-shit-done/templates/requirements.md`
- `get-shit-done/templates/roadmap.md`
- `get-shit-done/templates/state.md`

### Agents
- `agents/gsd-roadmapper.md`
- pesquisadores e sintetizador entram na parte de research

### Runtime / installer
- `bin/install.js`

---

## O que precisa ser traduzido de verdade

### Deve ir para portugues
- perguntas ao usuario
- opcoes do `AskUserQuestion`
- explicacoes de cada etapa
- mensagens de aprovacao
- mensagens de resumo
- texto dos templates gerados
- orientacao de proximo passo

### Deve ser preservado
- nome do comando
- nome dos arquivos
- nomes de runtime
- nomes de agentes
- forma estrutural do fluxo
- integracoes com `gsd-tools`

---

## Risco principal nesta adaptacao
O maior risco e traduzir a experiencia de forma superficial.

Exemplo de erro:
- traduzir apenas `README`
- deixar `workflow`, `references`, `templates` e `agents` em ingles

Resultado disso:
- o marketing fica em portugues
- o comportamento real continua em ingles

Por isso, o `new-project` deve ser adaptado ponta a ponta.

---

## Leitura pratica para execucao futura
Para adaptar `new-project` de verdade, a ordem mais segura e:

1. adaptar `commands/gsd/new-project.md`
2. adaptar `workflows/new-project.md`
3. adaptar `references/questioning.md`
4. adaptar `templates/project.md`
5. adaptar `templates/requirements.md`
6. adaptar `templates/roadmap.md`
7. adaptar `templates/state.md`
8. adaptar `agents/gsd-roadmapper.md`
9. revisar `bin/install.js` para garantir que a versao PT-BR chegue a cada runtime

---

## Resultado esperado desta fase de mapeamento
Depois deste blueprint, a adaptacao do fluxo `new-project` deixa de ser abstrata.

Ela passa a ter:
- pontos de entrada claros
- arquivos-alvo definidos
- fronteiras entre o que traduzir e o que preservar
- caminho real para Claude, OpenCode, Gemini e Codex

## Proximo passo recomendado
O proximo trabalho ideal e criar a trilha de adaptacao do `new-project` por arquivo, com prioridade e impacto:
- command
- workflow
- references
- templates
- agent
- installer

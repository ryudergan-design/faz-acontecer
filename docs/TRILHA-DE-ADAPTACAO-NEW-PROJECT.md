# Trilha de Adaptacao do `new-project`

Este documento transforma o mapeamento do fluxo `new-project` em uma trilha de adaptacao executavel.

O objetivo aqui nao e apenas entender o fluxo.
E saber:
- quais arquivos adaptar
- em que ordem adaptar
- o que traduzir
- o que preservar
- o impacto de cada arquivo na experiencia final

---

## Ordem recomendada de trabalho

### Bloco 1. Entrada do fluxo
1. `commands/gsd/new-project.md`
2. `get-shit-done/workflows/new-project.md`
3. `get-shit-done/references/questioning.md`

Motivo:
- esse bloco define como o fluxo conversa com o usuario
- e a porta principal para projetos novos

### Bloco 2. Documentacao gerada
4. `get-shit-done/templates/project.md`
5. `get-shit-done/templates/requirements.md`
6. `get-shit-done/templates/roadmap.md`
7. `get-shit-done/templates/state.md`
8. `get-shit-done/templates/config.json`

Motivo:
- esse bloco define como o projeto nasce documentado
- e e o ponto principal das boas praticas nativas

### Bloco 3. Agentes envolvidos
9. `agents/gsd-project-researcher.md`
10. `agents/gsd-roadmapper.md`

Motivo:
- esses agentes participam diretamente do `new-project`
- e influenciam pesquisa, requisitos e roadmap

### Bloco 4. Runtime e instalacao
11. `bin/install.js`

Motivo:
- sem essa etapa, a versao PT-BR nao chega ao runtime final de forma controlada

---

## Arquivo por arquivo

## 1. `commands/gsd/new-project.md`

### Papel
- definir nome do comando
- expor descricao
- apontar execution context
- acionar o workflow oficial

### O que adaptar
- `description`
- `objective`
- mensagens que falam com o usuario

### O que preservar
- `name: gsd:new-project`
- `argument-hint`
- `allowed-tools`
- `execution_context`

### Impacto
Medio.
Ele e a porta de entrada, mas nao carrega sozinho a maior parte da experiencia.

---

## 2. `get-shit-done/workflows/new-project.md`

### Papel
- orquestrar todo o fluxo
- decidir perguntas
- controlar gates
- criar arquivos
- chamar agentes

### O que adaptar
- perguntas ao usuario
- mensagens de escolha
- textos de erro
- banners de etapa
- mensagens de aprovacao
- resumo final

### O que preservar
- ordem do fluxo
- estrutura de etapas
- uso de `gsd-tools`
- integracao com agentes
- logica de `--auto`
- logica brownfield

### Impacto
Muito alto.
Esse arquivo e o coracao do comportamento do `new-project`.

---

## 3. `get-shit-done/references/questioning.md`

### Papel
- definir a filosofia de conversa
- orientar follow-up
- explicar o uso de `AskUserQuestion`

### O que adaptar
- linguagem da filosofia
- exemplos de perguntas
- exemplos de opcoes
- orientacoes em portugues

### O que preservar
- ideia de conversa colaborativa
- regra de seguir o fio
- rejeicao a interrogatorio corporativo
- decisao de quando encerrar a exploracao

### Impacto
Muito alto.
Se isso ficar em ingles ou com tom ruim, o `new-project` nao vai soar natural.

---

## 4. `templates/project.md`

### Papel
- gerar `PROJECT.md`
- consolidar contexto, core value, requirements ativos e decisoes

### O que adaptar
- todo o texto do template
- guidelines
- evolution
- exemplos

### O que preservar
- nome do arquivo
- funcao do documento
- estrutura que o GSD espera depois

### Impacto
Muito alto.
Esse e o primeiro grande artefato do projeto.

---

## 5. `templates/requirements.md`

### Papel
- gerar `REQUIREMENTS.md`
- definir v1, v2, fora de escopo e traceability

### O que adaptar
- todo o texto
- guidelines
- exemplo

### O que preservar
- REQ-IDs
- estrutura de rastreabilidade
- logica de v1, v2 e out of scope

### Impacto
Muito alto.
Se esse template ficar em ingles, o projeto novo continua nascendo em ingles.

---

## 6. `templates/roadmap.md`

### Papel
- definir o formato do roadmap
- fases
- goals
- success criteria
- plans
- progress

### O que adaptar
- texto do template
- guidelines
- status values

### O que preservar
- nome `ROADMAP.md`
- estrutura parseavel por fases
- uso de `### Phase X`
- logica de numbering

### Impacto
Muito alto.
Esse documento e central no GSD.

---

## 7. `templates/state.md`

### Papel
- manter memoria curta do projeto
- apontar situacao atual
- referenciar `PROJECT.md`

### O que adaptar
- secoes textuais
- orientacoes de uso
- explicacoes de lifecycle

### O que preservar
- nome `STATE.md`
- funcao de memoria viva
- estrutura geral consumida pelos fluxos

### Impacto
Alto.

---

## 8. `templates/config.json`

### Papel
- definir configuracao inicial do projeto

### O que adaptar
- quase nada de estrutura
- apenas o que estiver ligado a defaults e comentarios externos, se houver

### O que preservar
- estrutura JSON
- chaves
- semantica tecnica

### Impacto
Baixo na linguagem, alto na compatibilidade.

Regra:
- traduzir experiencia ao redor
- nao traduzir a estrutura do JSON

---

## 9. `agents/gsd-project-researcher.md`

### Papel
- pesquisar dominio
- produzir `STACK`, `FEATURES`, `ARCHITECTURE`, `PITFALLS`, `SUMMARY`

### O que adaptar
- role
- philosophy
- instrucoes de output
- structured returns

### O que preservar
- nome do agente
- objetivo funcional
- estrategia de verificacao de fontes

### Impacto
Alto.
Esse agente ajuda a moldar o projeto desde o nascimento.

---

## 10. `agents/gsd-roadmapper.md`

### Papel
- transformar requirements em fases
- validar cobertura
- criar roadmap
- inicializar state

### O que adaptar
- role
- philosophy
- output formats
- structured returns

### O que preservar
- nome do agente
- regra de cobertura total
- derivacao por requirements

### Impacto
Altissimo.
Esse agente define como o projeto passa a ser estruturado.

---

## 11. `bin/install.js`

### Papel
- instalar a adaptacao em cada runtime
- converter estrutura onde necessario
- entregar comandos, skills, hooks e configuracoes

### O que adaptar
- caminhos e referencias para a camada PT-BR
- mensagens finais do instalador
- possiveis textos de onboarding

### O que preservar
- estrategia por runtime
- nomes de diretorios
- logica de conversao para Codex
- logica especifica para OpenCode
- respeito aos formatos de Claude, Gemini, Codex e Copilot

### Impacto
Critico.
Se isso nao for feito com cuidado, a adaptacao fica linda no repositorio mas nao chega corretamente ao usuario.

---

## Prioridade pratica

### Prioridade 1
- `workflows/new-project.md`
- `references/questioning.md`
- `templates/project.md`
- `templates/requirements.md`
- `templates/roadmap.md`
- `templates/state.md`

### Prioridade 2
- `commands/gsd/new-project.md`
- `agents/gsd-project-researcher.md`
- `agents/gsd-roadmapper.md`

### Prioridade 3
- `bin/install.js`
- `templates/config.json`

---

## Regras para a adaptacao

### Regra 1
Traduzir experiencia, nao estrutura tecnica.

### Regra 2
Preservar nomes de arquivos e identificadores centrais.

### Regra 3
Garantir que novos projetos documentem em portugues.

### Regra 4
Respeitar cada runtime do jeito que ele ja funciona.

### Regra 5
Nao tentar forcar uma uniformidade artificial entre Claude, OpenCode, Gemini e Codex.

---

## Resultado esperado depois desta trilha
Quando esta trilha for executada, o fluxo `new-project` passara a:
- conversar em portugues
- planejar em portugues
- documentar em portugues
- manter a espinha dorsal do GSD oficial

## Proximo passo recomendado
Depois desta trilha, o melhor caminho e repetir o mesmo metodo para:
- `discuss-phase`
- `plan-phase`
- `execute-phase`
- `verify-work`

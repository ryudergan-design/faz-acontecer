# Plano de Adaptacao PT-BR

Este documento organiza o trabalho de adaptacao do GSD para portugues do Brasil sem quebrar a espinha dorsal do projeto oficial.

## Objetivo
Fazer com que os runtimes principais:
- perguntem em portugues
- respondam em portugues
- documentem em portugues

Sem quebrar:
- nomes de comandos
- nomes de arquivos centrais
- identificadores tecnicos
- fluxo essencial do GSD

## Escopo inicial

### Runtimes prioritarios
- Claude Code
- OpenCode
- Gemini CLI
- Codex

### Eixos de adaptacao
1. Documentacao
2. Comandos
3. Agentes
4. Instalador
5. Hooks
6. Arquivos iniciais gerados em projeto novo

## Ordem recomendada

### Fase 1. Documentacao oficial em portugues
Objetivo:
- traduzir a experiencia de entrada
- deixar a instalacao clara
- explicar o fluxo em portugues

Resultado esperado:
- README em portugues
- guia do usuario em portugues
- referencia de comandos em portugues

### Fase 2. Mapeamento e traducao dos comandos
Objetivo:
- mapear todos os arquivos em `commands/gsd/`
- identificar quais partes sao linguagem ao usuario
- adaptar isso para portugues sem mudar os identificadores centrais

Resultado esperado:
- matriz comando por comando
- definicao do que traduzir e do que preservar

### Fase 3. Mapeamento e traducao dos agentes
Objetivo:
- revisar os agentes do GSD
- adaptar instrucoes, perguntas e respostas para portugues
- manter os nomes tecnicos quando eles forem estruturalmente importantes

Resultado esperado:
- agentes com comportamento em portugues

### Fase 4. Instalador e injecao por runtime
Objetivo:
- revisar `bin/install.js`
- entender como Claude, OpenCode, Gemini e Codex recebem seus artefatos
- garantir que a instalacao passe a apontar para a adaptacao PT-BR correta

Resultado esperado:
- instalacao consistente para os quatro runtimes

### Fase 5. Hooks e mensagens operacionais
Objetivo:
- revisar hooks e feedbacks de sessao
- traduzir o que aparece ao usuario

Resultado esperado:
- experiencia operacional em portugues

### Fase 6. Projeto novo com boas praticas nativas
Objetivo:
- garantir que novos projetos ja nascam com:
  - documentacao viva
  - fases e tarefas bem organizadas
  - auditoria e organizacao previstas
  - registro visual quando fizer sentido
  - disciplina de commit e push

Resultado esperado:
- camada de boas praticas integrada ao fluxo

### Fase 7. Enriquecimento com insumos de qualidade
Objetivo:
- incorporar materiais externos que fortalecam onboarding, engenharia, validacao e documentacao
- sem quebrar o fluxo oficial do GSD

Insumos ja identificados:
- `gsd-guia.pdf`
- `pipeline-dev-software.html`

Resultado esperado:
- fluxo em portugues mais claro
- melhores perguntas
- templates mais fortes
- agentes com melhor orientacao de qualidade
- projetos nascendo com visao mais madura de arquitetura, testes, seguranca e entrega

Diretriz importante:
- o `pipeline-dev-software.html` deve ser tratado como camada transversal de qualidade do `Faz Acontecer`
- ele deve influenciar todo fluxo relevante de desenvolvimento de software
- seu uso deve ser adaptativo ao contexto, mas sua presenca deve ser estrutural

## Risco principal
O maior risco e traduzir demais e quebrar compatibilidade conceitual com o GSD oficial.

Por isso, a regra deve ser:
- traduzir experiencia
- preservar estrutura

## Criterio de sucesso
A adaptacao estara boa quando:
- um usuario brasileiro conseguir usar o GSD em portugues
- os comandos principais continuarem reconheciveis
- o fluxo continuar coerente com o oficial
- Claude, OpenCode, Gemini e Codex se comportarem em portugues
- projetos novos passarem a nascer com melhores praticas de organizacao e documentacao

## Proximo passo recomendado
O proximo trabalho tecnico ideal e:
- mapear arquivo por arquivo de `commands/gsd/`
- depois mapear `agents/`
- e so entao entrar em `bin/install.js`

Em paralelo, vale usar:
- [Insumos estrategicos para evolucao](INSUMOS-ESTRATEGICOS-PARA-EVOLUCAO.md)

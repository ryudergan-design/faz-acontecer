# Fluxo do GSD

Este documento resume o fluxo principal do Faz Acontecer GSD, em portugues, mantendo os identificadores essenciais em ingles.

## Visao geral
O GSD organiza o trabalho em um ciclo de:

1. entender o projeto
2. pesquisar
3. planejar
4. executar
5. verificar
6. seguir para a proxima fase ou milestone

## Fluxo principal

### 1. `new-project`
Comando:

```text
/gsd:new-project
```

Papel:
- iniciar o projeto
- coletar contexto
- pesquisar o dominio
- estruturar requisitos
- montar roadmap

Arquivos normalmente criados:
- `PROJECT.md`
- `REQUIREMENTS.md`
- `ROADMAP.md`
- `STATE.md`
- `.planning/research/`

### 2. `discuss-phase`
Comando:

```text
/gsd:discuss-phase 1
```

Papel:
- aprofundar as decisoes da fase
- capturar preferencias antes do planejamento
- reduzir ambiguidades

Arquivo tipico:
- `CONTEXT.md`

### 3. `plan-phase`
Comando:

```text
/gsd:plan-phase 1
```

Papel:
- pesquisar a implementacao
- quebrar a fase em planos executaveis
- verificar se o plano faz sentido

Arquivos tipicos:
- `RESEARCH.md`
- `PLAN.md`

### 4. `execute-phase`
Comando:

```text
/gsd:execute-phase 1
```

Papel:
- executar os planos em ondas
- paralelizar o que nao tem dependencia
- gerar commits por tarefa
- verificar o resultado final da fase

Arquivos comuns:
- `SUMMARY.md`
- `VERIFICATION.md`

### 5. `verify-work`
Comando:

```text
/gsd:verify-work 1
```

Papel:
- fazer validacao humana
- confirmar se a funcionalidade realmente funciona
- abrir caminho para ajustes se algo falhar

Arquivo comum:
- `UAT.md`

### 6. Repeticao por fase e milestone
O ciclo continua:
- discutir
- planejar
- executar
- verificar

Quando todas as fases do marco acabam:
- `complete-milestone`
- `new-milestone`

## Por que isso funciona
O GSD reduz degradacao de contexto porque:
- separa contexto de projeto
- pesquisa antes de executar
- planeja em blocos menores
- usa agentes especializados
- verifica antes de seguir

## Onde esta a forca do sistema
- contexto bem organizado
- planos menores e verificaveis
- separacao entre estrategia e execucao
- commits atomicos
- memoria do projeto em arquivos

## O que o Faz Acontecer quer preservar
- comandos oficiais
- fluxo principal
- nomes dos arquivos centrais
- logica de fases e milestones

## O que o Faz Acontecer agrega
- explicacao em portugues
- onboarding mais claro
- boas praticas nativas de documentacao
- auditoria e organizacao como parte mais natural do uso
- camada transversal de qualidade
- instalacao propria
- estrutura pronta para registro visual e governanca do projeto

## Proximo passo recomendado
Leia [COMANDOS.md](COMANDOS.md).

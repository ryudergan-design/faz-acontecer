# Estrategia de Adaptacao para Claude e OpenCode

Este documento junta a visao pratica dos dois runtimes mais importantes para a primeira onda de adaptacao do `Faz Acontecer`.

## Por que começar por Claude e OpenCode

### Claude
- e o runtime mais alinhado com a origem do GSD
- serve como ancora de compatibilidade
- ajuda a preservar a espinha dorsal oficial

### OpenCode
- amplia acesso
- tem instalacao e estrutura proprias
- ajuda a tornar o GSD em portugues mais util para um publico maior

## Objetivo desta frente

Adaptar o GSD para:
- perguntar em portugues
- responder em portugues
- documentar em portugues

Sem quebrar:
- o fluxo oficial
- o papel de cada runtime
- a estrutura esperada pelo instalador

## Estrategia

### 1. Claude como baseline
Primeiro garantimos que a adaptacao preserve bem a logica oficial.

### 2. OpenCode como segunda ancora
Depois garantimos que a adaptacao tambem respeita a traducao estrutural que o OpenCode exige.

### 3. Camada agregadora em ambos
Nos dois casos, a camada baseada em `pipeline-dev-software.html` deve:
- enriquecer os fluxos
- melhorar a qualidade do projeto
- sem substituir o GSD

## O que deve existir no repositorio

### Pastas de referencia
- `.claude/`
- `.opencode/`

Essas pastas funcionam como espacos de adaptacao e espelho estrutural dos runtimes.

Elas nao precisam nascer completas.
Mas precisam existir para guiar a adaptacao real.

## Ordem recomendada

1. documentar runtime Claude
2. documentar runtime OpenCode
3. preparar espelho estrutural das pastas
4. portar os fluxos centrais
5. validar coerencia do instalador com os dois runtimes

## Resultado esperado

Quando essa estrategia estiver bem executada:
- Claude e OpenCode funcionam em portugues
- o usuario entende melhor o processo
- os projetos ganham mais qualidade
- o GSD oficial continua reconhecivel

## Status atual

A estrategia ja deixou de ser apenas teorica.

Agora o repositorio ja tem:
- espelho estrutural de Claude
- espelho estrutural de OpenCode
- primeira leva de arquivos reais adaptados para os fluxos:
  - `new-project`
  - `discuss-phase`
  - `plan-phase`
  - `verify-work`
  - `validate-phase`

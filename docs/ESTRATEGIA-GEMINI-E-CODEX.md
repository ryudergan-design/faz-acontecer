# Estratégia de Adaptação para Gemini e Codex

Este documento junta a visão prática dos runtimes `Gemini CLI` e `Codex`.

## Por que eles exigem atenção especial

### Gemini
- é próximo do Claude em experiência
- mas tem diferenças de compatibilidade, hooks e formato de comando

### Codex
- é o runtime mais estruturalmente diferente
- usa `skills`
- usa `config.toml`
- usa agentes em `.toml`

## Objetivo desta frente

Levar para português:
- perguntas
- respostas
- documentação

Sem quebrar:
- o formato de cada runtime
- a estrutura oficial do GSD

## Estratégia

### 1. Gemini como espelho próximo do Claude
Usar a base do Claude como referência, adaptando o que for necessário ao formato do Gemini.

### 2. Codex como adaptação própria
Tratar skills, agentes e config como primeira classe.
Não tentar fingir que Codex funciona como Claude.

### 3. Camada agregadora em ambos
Aplicar a camada de qualidade:
- nos comandos/skills
- nos workflows
- nos templates
- na documentação gerada

## Resultado esperado

Quando essa estratégia estiver bem executada:
- Gemini funciona em português
- Codex funciona em português
- o GSD continua reconhecível
- o `Faz Acontecer` vira uma camada robusta de adaptação

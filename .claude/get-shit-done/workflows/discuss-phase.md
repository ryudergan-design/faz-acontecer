<purpose>
Extrair decisões reais de implementação que os agentes posteriores precisam.

Este fluxo existe para transformar ambiguidade em contexto útil.
Não é entrevista corporativa.
É conversa guiada para gerar um `CONTEXT.md` forte.
</purpose>

<downstream_awareness>
O `CONTEXT.md` alimenta:
- `gsd-phase-researcher`
- `gsd-planner`

Seu papel aqui é registrar decisões com clareza suficiente para que esses agentes sigam sem ter que voltar ao usuário.
</downstream_awareness>

<scope_guardrail>
O limite da fase vem do `ROADMAP.md` e é fixo.

Pode discutir:
- como a fase deve ser implementada
- comportamentos
- apresentação
- escolhas que mudam o resultado

Não pode discutir:
- novas capacidades fora do escopo da fase

Se surgir algo novo:
- registrar como ideia adiada
- não incorporar à fase atual
</scope_guardrail>

<process>

## 1. Inicialização

Executar:

```bash
INIT=$(node "$HOME/.claude/get-shit-done/bin/gsd-tools.cjs" init phase-op "${PHASE}")
if [[ "$INIT" == @file:* ]]; then INIT=$(cat "${INIT#@file:}"); fi
```

Validar a fase e localizar o diretório correto.

## 2. Contexto existente

Se já houver `CONTEXT.md`, oferecer em português:
- atualizar
- visualizar
- pular

## 3. Carregar contexto prévio

Ler:
- `PROJECT.md`
- `REQUIREMENTS.md`
- `STATE.md`
- contextos de fases anteriores

O objetivo é evitar repetir perguntas já respondidas.

## 4. Scout leve da base

Buscar:
- componentes reutilizáveis
- padrões já adotados
- pontos de integração

## 5. Análise da fase

Identificar zonas cinzentas reais da fase.

Aplicar a camada agregadora quando isso enriquecer a conversa, por exemplo:
- impacto em banco
- impacto em frontend/backend
- segurança
- testes
- observabilidade
- deploy

Sem transformar isso em checklist pesada.

## 6. Escolha das áreas de discussão

Apresentar áreas específicas em português.
Não usar categorias genéricas demais.

## 7. Aprofundamento

Para cada área escolhida:
- aprofundar
- perguntar de forma clara
- usar opções concretas
- respeitar momentos de resposta livre

## 8. Criar `CONTEXT.md`

Gerar em português:
- limite da fase
- decisões
- referências canônicas
- contexto de código
- ideias específicas
- ideias adiadas

## 9. Fechamento

Mostrar resumo curto:
- o que foi decidido
- o que ficou adiado
- próximo passo recomendado

</process>

<success_criteria>
- fase validada
- contexto anterior aproveitado
- zonas cinzentas relevantes identificadas
- conversa conduzida em português natural
- `CONTEXT.md` criado em português
- próximos passos claros
</success_criteria>

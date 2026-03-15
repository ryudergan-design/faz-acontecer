<purpose>
Inicializar um projeto novo em português com um fluxo unificado:
descoberta, pesquisa opcional, requisitos, roadmap e estado inicial.

Este é o momento de maior alavancagem do projeto.
Uma boa descoberta aqui melhora planejamento, execução e validação.
</purpose>

<required_reading>
Leia todos os arquivos apontados no `execution_context` antes de começar.
</required_reading>

<process>

## 1. Setup

Execute primeiro:

```bash
INIT=$(node "$HOME/.claude/get-shit-done/bin/gsd-tools.cjs" init new-project)
if [[ "$INIT" == @file:* ]]; then INIT=$(cat "${INIT#@file:}"); fi
```

Valide:
- se o projeto já foi inicializado
- se há git
- se existe código prévio
- se estamos em cenário greenfield ou brownfield

## 2. Brownfield

Se houver código existente sem mapeamento, oferecer:
- mapear a base primeiro
- ou seguir sem mapear

Essa oferta deve ser feita em português claro.

## 3. Descoberta profunda

No modo interativo:
- abrir com uma pergunta livre
- seguir o fio da conversa
- usar `AskUserQuestion` só quando isso ajudar
- manter o tom natural

No modo `--auto`:
- exigir documento de ideia
- sintetizar a visão a partir dele

## 4. Criar `PROJECT.md`

Gerar `.planning/PROJECT.md` em português.

Ele deve registrar:
- o que será construído
- por que isso existe
- quem usa
- o que a primeira versão precisa fazer
- o que está fora do escopo

Aplicar também a camada agregadora quando fizer sentido:
- arquitetura
- segurança
- testes
- banco
- backend
- frontend
- deploy

## 5. Preferências de workflow

Coletar em português:
- modo
- granularidade
- paralelização
- rastreamento em git
- pesquisa
- checagem de plano
- verificação
- perfil de modelo

Gravar em `.planning/config.json`.

## 6. Pesquisa

Se houver pesquisa:
- explicar em português o que será pesquisado
- manter o comportamento oficial
- sintetizar os achados de forma útil

## 7. Requisitos

Gerar `REQUIREMENTS.md` em português com:
- v1
- v2
- fora de escopo
- REQ-IDs claros

Evitar requisitos vagos.

## 8. Roadmap

Gerar `ROADMAP.md` com:
- fases
- metas por fase
- mapeamento de requisitos
- critérios de sucesso

Mostrar em português antes de confirmar.

## 9. Encerramento

Finalizar com:
- resumo do que foi criado
- próximo passo sugerido
- orientação de continuidade

</process>

<success_criteria>
- `.planning/` criada
- `PROJECT.md` criado em português
- `config.json` criado
- pesquisa feita ou explicitamente ignorada
- `REQUIREMENTS.md` criado em português
- `ROADMAP.md` criado com cobertura de requisitos
- `STATE.md` iniciado
- próximo passo claro para o usuário
</success_criteria>

# Template de `CONTEXT.md`

Template para `.planning/phases/XX-nome/XX-CONTEXT.md`

```markdown
# Phase [X]: [Nome] - Context

**Gathered:** [data]
**Status:** Ready for planning

<domain>
## Limite da Fase

[Explicar claramente o que esta fase entrega e o que fica fora dela.]

</domain>

<decisions>
## Decisões de Implementação

### [Área discutida]
- [Decisão concreta]
- [Outra decisão concreta]

### Claude's Discretion
[Pontos em que a IA pode decidir com liberdade.]

</decisions>

<canonical_refs>
## Referências Canônicas

**Agentes posteriores DEVEM ler estes arquivos antes de planejar ou implementar.**

### [Tema]
- `caminho/relativo/arquivo.md` — [o que define]

[Se não houver docs externos: "Sem documentos externos; requisitos capturados acima"]

</canonical_refs>

<code_context>
## Contexto de Código Existente

### Ativos Reutilizáveis
- [Componente, hook ou utilitário]: [como ajuda]

### Padrões Existentes
- [Padrão já adotado]: [impacto nesta fase]

### Pontos de Integração
- [Onde isso se conecta]

</code_context>

<specifics>
## Ideias Específicas

[Referências, exemplos, inspirações ou detalhes do usuário]

</specifics>

<deferred>
## Ideias Adiadas

[O que surgiu na conversa, mas pertence a outra fase]

</deferred>
```

# Hooks e Scripts

Este documento resume a camada nativa de hooks e scripts do Faz Acontecer.

## Hooks atuais
- `hooks/gsd-statusline.js`
  Mostra status simples do runtime e do uso de contexto.
- `hooks/gsd-context-monitor.js`
  Injeta alertas quando o contexto estiver ficando apertado.
- `hooks/gsd-check-update.js`
  Registra checagem local de atualizacao.

## Scripts atuais
- `scripts/build-hooks.js`
  Copia os hooks para uma pasta `dist`.
- `scripts/run-tests.cjs`
  Executa uma verificacao estrutural basica da base.

## Papel desta camada
- reduzir atrito operacional
- fortalecer a experiencia do metodo
- preparar o terreno para evolucoes futuras

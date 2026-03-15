# Publicacao no npm

Este documento resume como publicar o Faz Acontecer como pacote npm proprio.

## Nome do pacote
- `faz-acontecer-gsd`

No momento da validacao, o nome estava livre no npm.

## O que ja esta preparado
- `package.json` com `bin`
- binarios:
  - `faz-acontecer-gsd`
  - `faz-acontecer`
- `publishConfig.access = public`
- script:
  - `npm run pack:check`
  - `npm run publish:npm`

## Como validar antes de publicar

```bash
npm run test
npm run pack:check
```

## Como publicar

### 1. Fazer login no npm
```bash
npm login
```

### 2. Publicar
```bash
npm run publish:npm
```

## Como usar depois de publicado

### Uso via npx
```bash
npx faz-acontecer-gsd@latest --claude --global
npx faz-acontecer-gsd@latest --all --global
```

### Uso via instalacao global
```bash
npm install -g faz-acontecer-gsd
faz-acontecer --claude --global
faz-acontecer --all --global
```

## Recomendacao
Se a ideia for divulgar bem a ferramenta, o melhor fluxo e:
1. rodar testes
2. validar o empacotamento
3. publicar no npm
4. atualizar o README com o comando npm como caminho principal

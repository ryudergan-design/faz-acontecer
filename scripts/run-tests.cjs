#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const checks = [
  'package.json',
  'bin/install.js',
  'commands/gsd/new-project.md',
  'get-shit-done/workflows/new-project.md',
  'agents/gsd-planner.md'
];

const missing = checks.filter((file) => !fs.existsSync(path.join(process.cwd(), file)));

if (missing.length > 0) {
  console.error('Arquivos obrigatorios ausentes:');
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

console.log('Verificacao estrutural basica concluida com sucesso.');

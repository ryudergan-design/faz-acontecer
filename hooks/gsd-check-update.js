#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const cacheDir = path.join(os.homedir(), '.faz-acontecer', 'cache');
const cacheFile = path.join(cacheDir, 'update-check.json');

fs.mkdirSync(cacheDir, { recursive: true });

const payload = {
  checked_at: new Date().toISOString(),
  note: 'Hook local de verificacao de atualizacao do Faz Acontecer.'
};

fs.writeFileSync(cacheFile, JSON.stringify(payload, null, 2));
console.log(`Cache de atualizacao registrado em ${cacheFile}`);

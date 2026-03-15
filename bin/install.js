#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

const pkg = require('../package.json');

const cyan = '\x1b[36m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const red = '\x1b[31m';
const reset = '\x1b[0m';

const args = process.argv.slice(2);
const hasGlobal = args.includes('--global') || args.includes('-g');
const hasLocal = args.includes('--local') || args.includes('-l');
const hasAll = args.includes('--all');
const hasUninstall = args.includes('--uninstall') || args.includes('-u');

const requestedRuntimes = [];
if (hasAll) {
  requestedRuntimes.push('claude', 'opencode', 'gemini', 'codex');
} else {
  if (args.includes('--claude')) requestedRuntimes.push('claude');
  if (args.includes('--opencode')) requestedRuntimes.push('opencode');
  if (args.includes('--gemini')) requestedRuntimes.push('gemini');
  if (args.includes('--codex')) requestedRuntimes.push('codex');
}

const rootDir = path.resolve(__dirname, '..');

const runtimeConfig = {
  claude: {
    label: 'Claude Code',
    sourceDir: path.join(rootDir, '.claude'),
    localDirName: '.claude',
    globalDir: () => path.join(os.homedir(), '.claude')
  },
  opencode: {
    label: 'OpenCode',
    sourceDir: path.join(rootDir, '.opencode'),
    localDirName: '.opencode',
    globalDir: () => path.join(os.homedir(), '.config', 'opencode')
  },
  gemini: {
    label: 'Gemini CLI',
    sourceDir: path.join(rootDir, '.gemini'),
    localDirName: '.gemini',
    globalDir: () => path.join(os.homedir(), '.gemini')
  },
  codex: {
    label: 'Codex',
    sourceDir: path.join(rootDir, '.codex'),
    localDirName: '.codex',
    globalDir: () => path.join(os.homedir(), '.codex')
  }
};

function banner() {
  console.log(
    '\n' +
      cyan +
      'FAZ ACONTECER GSD' +
      reset +
      ` v${pkg.version}\n` +
      'Instalador da camada PT-BR do GSD para Claude Code, OpenCode, Gemini CLI e Codex.\n'
  );
}

function parseConfigDirArg() {
  const index = args.findIndex((arg) => arg === '--config-dir' || arg === '-c');
  if (index !== -1) {
    return args[index + 1] || null;
  }
  const equalArg = args.find((arg) => arg.startsWith('--config-dir=') || arg.startsWith('-c='));
  if (!equalArg) return null;
  return equalArg.split('=').slice(1).join('=');
}

function expandHome(input) {
  if (!input) return input;
  if (input === '~') return os.homedir();
  if (input.startsWith('~/') || input.startsWith('~\\')) {
    return path.join(os.homedir(), input.slice(2));
  }
  return input;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyDir(source, target) {
  ensureDir(target);
  const entries = fs.readdirSync(source, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath);
    } else {
      ensureDir(path.dirname(targetPath));
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function removeDir(target) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

function getTargetDir(runtime, isGlobal, explicitDir) {
  const config = runtimeConfig[runtime];
  if (explicitDir) return expandHome(explicitDir);
  if (isGlobal) return config.globalDir();
  return path.join(process.cwd(), config.localDirName);
}

async function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const answer = await new Promise((resolve) => rl.question(question, resolve));
  rl.close();
  return answer.trim();
}

async function promptRuntimeIfNeeded() {
  if (requestedRuntimes.length > 0) return requestedRuntimes;
  console.log('Escolha um runtime para instalar:');
  console.log('1. Claude Code');
  console.log('2. OpenCode');
  console.log('3. Gemini CLI');
  console.log('4. Codex');
  console.log('5. Todos');
  const answer = await ask('Opcao: ');
  if (answer === '1') return ['claude'];
  if (answer === '2') return ['opencode'];
  if (answer === '3') return ['gemini'];
  if (answer === '4') return ['codex'];
  return ['claude', 'opencode', 'gemini', 'codex'];
}

async function promptScopeIfNeeded() {
  if (hasGlobal) return true;
  if (hasLocal) return false;
  const answer = await ask('Instalacao global? [s/N]: ');
  return answer.toLowerCase() === 's';
}

function installRuntime(runtime, isGlobal, explicitDir) {
  const config = runtimeConfig[runtime];
  const targetDir = getTargetDir(runtime, isGlobal, explicitDir);
  if (!fs.existsSync(config.sourceDir)) {
    throw new Error(`Nao encontrei a base do runtime ${runtime} em ${config.sourceDir}`);
  }

  removeDir(targetDir);
  copyDir(config.sourceDir, targetDir);

  console.log(`${green}Instalado:${reset} ${config.label}`);
  console.log(`  origem:  ${config.sourceDir}`);
  console.log(`  destino: ${targetDir}`);
}

function uninstallRuntime(runtime, isGlobal, explicitDir) {
  const config = runtimeConfig[runtime];
  const targetDir = getTargetDir(runtime, isGlobal, explicitDir);
  removeDir(targetDir);
  console.log(`${yellow}Removido:${reset} ${config.label}`);
  console.log(`  destino: ${targetDir}`);
}

async function main() {
  banner();
  const runtimes = await promptRuntimeIfNeeded();
  const isGlobal = await promptScopeIfNeeded();
  const explicitDir = parseConfigDirArg();

  console.log(
    `${cyan}Modo:${reset} ${isGlobal ? 'global' : 'local'} | ${hasUninstall ? 'desinstalacao' : 'instalacao'}`
  );

  for (const runtime of runtimes) {
    if (!runtimeConfig[runtime]) {
      console.log(`${red}Runtime nao suportado:${reset} ${runtime}`);
      process.exitCode = 1;
      continue;
    }
    if (hasUninstall) {
      uninstallRuntime(runtime, isGlobal, explicitDir);
    } else {
      installRuntime(runtime, isGlobal, explicitDir);
    }
  }

  if (!hasUninstall) {
    console.log('\nProximo passo recomendado:');
    console.log('- abra o runtime instalado');
    console.log('- rode o comando de ajuda do GSD');
    console.log('- inicie com new-project ou help');
  }
}

main().catch((error) => {
  console.error(`${red}Falha:${reset} ${error.message}`);
  process.exit(1);
});

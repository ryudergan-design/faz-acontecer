#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');

const WARNING_THRESHOLD = 35;
const CRITICAL_THRESHOLD = 25;
const STALE_SECONDS = 60;

let input = '';
const stdinTimeout = setTimeout(() => process.exit(0), 3000);
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => (input += chunk));
process.stdin.on('end', () => {
  clearTimeout(stdinTimeout);
  try {
    const data = JSON.parse(input);
    const sessionId = data.session_id;
    if (!sessionId) process.exit(0);

    const metricsPath = path.join(os.tmpdir(), `faz-acontecer-ctx-${sessionId}.json`);
    if (!fs.existsSync(metricsPath)) process.exit(0);

    const metrics = JSON.parse(fs.readFileSync(metricsPath, 'utf8'));
    const now = Math.floor(Date.now() / 1000);
    if (metrics.timestamp && now - metrics.timestamp > STALE_SECONDS) process.exit(0);

    const remaining = metrics.remaining_percentage;
    const usedPct = metrics.used_pct;
    if (remaining > WARNING_THRESHOLD) process.exit(0);

    const isCritical = remaining <= CRITICAL_THRESHOLD;
    const message = isCritical
      ? `CONTEXTO CRITICO: uso em ${usedPct}%. Evite iniciar trabalho complexo novo e considere registrar o estado atual do projeto.`
      : `ALERTA DE CONTEXTO: uso em ${usedPct}%. Priorize concluir o passo atual e evite abrir novas frentes desnecessarias.`;

    process.stdout.write(
      JSON.stringify({
        hookSpecificOutput: {
          hookEventName: 'PostToolUse',
          additionalContext: message
        }
      })
    );
  } catch {
    process.exit(0);
  }
});

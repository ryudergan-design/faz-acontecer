#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

let input = '';
const stdinTimeout = setTimeout(() => process.exit(0), 3000);
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => (input += chunk));
process.stdin.on('end', () => {
  clearTimeout(stdinTimeout);
  try {
    const data = JSON.parse(input);
    const model = data.model?.display_name || 'Runtime';
    const dir = data.workspace?.current_dir || process.cwd();
    const session = data.session_id || '';
    const remaining = data.context_window?.remaining_percentage;
    const projectName = path.basename(dir);

    let ctx = '';
    if (remaining != null) {
      const used = Math.max(0, Math.min(100, Math.round(100 - remaining)));
      const filled = Math.floor(used / 10);
      const bar = '█'.repeat(filled) + '░'.repeat(10 - filled);
      ctx = ` ${bar} ${used}%`;

      if (session) {
        const bridgePath = path.join(os.tmpdir(), `faz-acontecer-ctx-${session}.json`);
        fs.writeFileSync(
          bridgePath,
          JSON.stringify({
            session_id: session,
            remaining_percentage: remaining,
            used_pct: used,
            timestamp: Math.floor(Date.now() / 1000)
          })
        );
      }
    }

    process.stdout.write(`${model} | ${projectName}${ctx}`);
  } catch {
    process.exit(0);
  }
});

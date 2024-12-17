import { spawnSync } from 'child_process';

// docs - https://nodejs.org/api/child_process.html#child_processspawncommand-args-options
const { stderr, stdout, error } = spawnSync('ls', ['-al', './src']);
console.log("🚀 ~ stdout:", stdout?.toString());
console.log("🚀 ~ stderr:", stderr?.toString());
console.log("🚀 ~ error:", error?.name, error?.message); // bad command

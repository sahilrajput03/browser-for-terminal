import { spawnSync } from 'child_process';

// docs - https://nodejs.org/api/child_process.html#child_processspawncommand-args-options

// 1. Command with options
const { stderr, stdout, error } = spawnSync('ls', ['-al', './src']);

// 2. Pass environment variables to a command
// const { stderr, stdout, error } = spawnSync('sh', ['-c', 'echo $a1'], { // works well
//     env: {
//         a1: 10
//     }
// });

// 3. Print all environment variables with `env` cli
// const { stderr, stdout, error } = spawnSync('env', {
//     env: {
//         ...process.env,
//         a1: 10
//     }
// });


// logs
console.log("🚀 ~ stdout:", stdout?.toString());
console.log("🚀 ~ stderr:", stderr?.toString());
console.log("🚀 ~ error:", error?.name, error?.message);
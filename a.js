import { spawnSync } from 'child_process';

// docs - https://nodejs.org/api/child_process.html#child_processspawncommand-args-options

// Command with options
const { stderr, stdout, error } = spawnSync('ls', ['-al', './src']);

// Workingn with environment variables
// const { stderr, stdout, error } = spawnSync('sh', ['-c', 'echo $a1'], { // works well
//     env: {
//         a1: 10
//     }
// });

// Output all environment variables:
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
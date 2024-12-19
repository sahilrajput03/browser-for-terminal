import { spawn, spawnSync } from 'child_process';

const command = `echo 1; sleep 1; echo 2; sleep 1; echo "Bye"`; // Replace with your command

// 🚀🚀 STREAMING IN FRONTEND: https://chatgpt.com/c/6763c4b6-e060-8007-a3c7-da04bb8726b6

// *** MRE Streaming Example***
const child = spawn('sh', ['-c', command]);

// Handle stdout (real-time standard output)
child.stdout.on('data', (data) => {
    console.log(`STDOUT: ${data}`);
});

// Handle stderr (real-time standard error)
child.stderr.on('data', (data) => {
    console.error(`STDERR: ${data}`);
});

// Handle the process exit
child.on('close', (code) => {
    console.log(`Process exited with code: ${code}`);
});
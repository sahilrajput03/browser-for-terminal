import { json } from '@sveltejs/kit';
import { spawnSync } from 'node:child_process';


export async function POST({ request }): Promise<Response> {
    const { command, cwd } = await request.json();

    // & Using sh (shell) we can execute many commands at once    
    const { stderr, stdout, error } = spawnSync('sh', ['-c', command], {
        cwd,
    });
    // console.log("🚀 ~ POST ~ stdout:", stdout?.toString()) // debug
    // console.log("🚀 ~ POST ~ stderr:", stderr?.toString()) // debug

    return json({ stdout: stdout?.toString(), stderr: stderr?.toString(), error });
}

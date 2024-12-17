import { json } from '@sveltejs/kit';
import { spawnSync } from 'node:child_process';


export async function POST({ request }): Promise<Response> {
    const { command } = await request.json();

    const [executable, ...options] = command.split(' ')

    const { stderr, stdout, error } = spawnSync(executable, options);
    // console.log("🚀 ~ POST ~ stdout:", stdout?.toString())
    // console.log("🚀 ~ POST ~ stderr:", stderr)

    return json({ stdout: stdout?.toString(), stderr: stderr?.toString(), error });
}

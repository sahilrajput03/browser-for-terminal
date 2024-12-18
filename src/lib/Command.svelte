<script lang="ts">
	type PropType = {
		initial: {
			command: string; // user must give `command`
			live: boolean; // user must give `live`
			cwd?: string; // current working directory
		};
	};
	const defautlProps = { command: '', live: false, cwd: undefined };
	const { initial = defautlProps }: PropType = $props();

	let command = $state(initial.command ?? defautlProps.command); // pwd, ls, cat package.json,
	let live = $state(initial.live ?? defautlProps.live);
	let stderr = $state('');
	let stdout = $state('');
	let error = $state(undefined) as any;
	let showDebugger = $state(false);

	// $inspect({ command, live });

	const runCommand = async () => {
		console.log('ran command..:'); // debug
		const response = await fetch('/', {
			method: 'POST',
			body: JSON.stringify({ command, cwd: initial.cwd }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		stderr = data.stderr;
		stdout = data.stdout;
		error = data.error;
	};

	$effect(() => {
		if (live) {
			runCommand();
		}
	});
</script>

<div class="mb-8">
	<div>
		<input
			bind:value={command}
			onkeypress={(e) => {
				if (e.key === 'Enter') {
					runCommand();
				}
			}}
		/>
		<button class="px-[50px] py-[5px] active:bg-green-500" onclick={() => runCommand()}>Run</button>
		<label class="select-none"> <input type="checkbox" bind:checked={live} /> Live </label>
		{@render componentDebugger()}
		<button
			disabled={command === ''}
			class="px-[4px] py-[1px] text-[0.7rem] disabled:bg-gray-300 disabled:text-gray-600"
			onclick={() => (command = '')}>Clear command</button
		>
		<button
			disabled={stderr === '' && stdout === ''}
			class="px-[4px] py-[1px] text-[0.7rem] disabled:bg-gray-300 disabled:text-gray-600"
			onclick={() => {
				stderr = '';
				stdout = '';
			}}>Clear output</button
		>
		<button
			disabled={command === '' && stderr === '' && stdout === ''}
			class="px-[4px] py-[1px] text-[0.7rem] disabled:bg-gray-300 disabled:text-gray-600"
			onclick={() => {
				command = '';
				stderr = '';
				stdout = '';
			}}>Clear command and output</button
		>
	</div>

	{#if stdout || stderr || error}
		<div
			class="border-1 mt-1 max-h-[200px] overflow-y-auto rounded-md border border-[gray] px-[10px] py-[10px]"
		>
			<!-- When `error` is returned by `spawnSync` in server I show my custom error `command` not found {error.path}` because we get vague error from spawn as ENOENT which basically means that command does not exists or file, foler you're trying to access does not exists. -->
			<pre class="text-[0.75rem]">{stdout}{stderr}{error
					? `command not found: ${error.path}`
					: ''}</pre>
		</div>
	{/if}
</div>

{#snippet componentDebugger()}
	<label class="select-none text-xs text-[gray]">
		<input class="ml-3 h-2 w-2" type="checkbox" bind:checked={showDebugger} /> Debugger
	</label>

	{#if showDebugger}
		<pre class="mt-1 text-xs text-[gray]"><div>{JSON.stringify(
					{ command, stdout, stderr, error: error ?? '' },
					null,
					2
				)}</div></pre>
	{/if}
{/snippet}

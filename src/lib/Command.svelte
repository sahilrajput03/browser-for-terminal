<script lang="ts">
	type PropType = {
		initial: {
			command?: string;
			live?: boolean;
		};
	};
	const defautlProps = { command: '', live: true };
	const { initial = defautlProps }: PropType = $props();

	let command = $state(initial.command ?? defautlProps.command); // pwd, ls, cat package.json,
	let live = $state(initial.live ?? defautlProps.live);
	let stderr = $state('');
	let stdout = $state('');
	let error = $state(null) as any;

	// $inspect({ command, live });

	const runCommand = async () => {
		// console.log('ran command..:'); // debug
		const response = await fetch('/', {
			method: 'POST',
			body: JSON.stringify({ command }),
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

<div class="mt-8">
	<input
		bind:value={command}
		onkeypress={(e) => {
			if (e.key === 'Enter') {
				runCommand();
			}
		}}
	/>
	<button onclick={() => runCommand()}>Run</button>
	<label> <input type="checkbox" bind:checked={live} /> Live </label>
</div>

{#if stdout || stderr || error}
	<div
		class="border-1 mt-1 max-h-[200px] overflow-y-auto rounded-md border border-black px-[10px] py-[10px]"
	>
		<!-- When `error` is returned by `spawnSync` in server I show my custom error `command` not found {error.path}` because we get vague error from spawn as ENOENT which basically means that command does not exists or file, foler you're trying to access does not exists. -->
		<pre style="font-size: 0.75rem">{stdout}{stderr}{error
				? `command not found: ${error.path}`
				: ''}</pre>
	</div>
{/if}

<!-- <h2 class="mt-3 text-2xl">Debugger</h2> -->
<!-- <pre><div>{JSON.stringify({ cache }, null, 2)}</div></pre> -->

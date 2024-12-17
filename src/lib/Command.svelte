<script lang="ts">
	const { initial } = $props();

	let command = $state(initial ?? ''); // pwd, ls, cat package.json,
	let stderr = $state('');
	let stdout = $state('');
	let error = $state();

	$inspect({ command });

	const runCommand = async () => {
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

	// comment this effect to disable running command on each key press
	$effect(() => {
		runCommand();
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
	<button onclick={runCommand}>Run</button>
</div>

{#if stdout || stderr || error}
	<div
		class="border-1 mt-1 max-h-[200px] overflow-y-auto rounded-md border border-black px-[10px] py-[10px]"
	>
		<pre style="font-size: 0.75rem">{stdout}{stderr}</pre>

		<!-- My custom error when we get ENOENT which basically means file, foler or command does not exists. -->
		{error ? `command not found: ${command}` : ''}

		<!-- Debugging the error we get from server  -->
		<!-- <pre> <div>{JSON.stringify(error, null, 2)}</div> </pre> -->
	</div>
{/if}

<script lang="ts">
	let command = $state('cat package.json'); // pwd, ls, cat package.json,
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
</script>

<div class="container">
	<h1 class="text-2xl font-bold">Brower For Terminal</h1>

	<input
		bind:value={command}
		onkeypress={(e) => {
			if (e.key === 'Enter') {
				runCommand();
			}
		}}
	/>

	<button onclick={runCommand}>Run</button>

	<pre style="font-size: 0.75rem">{stdout}{stderr}</pre>

	<!-- My custom error when we get ENOENT which basically means file, foler or command does not exists. -->
	{error ? `command not found: ${command}` : ''}

	<!-- Debugging the error we get from server  -->
	<pre>
        <!-- <div>{JSON.stringify(error, null, 2)}</div> -->
    </pre>
</div>

<style>
	.container {
		padding: 10px;
	}
</style>

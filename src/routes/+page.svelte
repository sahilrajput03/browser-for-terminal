<script lang="ts">
	import Command from '$lib/Command.svelte';
</script>

<div class="p-4">
	<h1 class="mb-5 text-2xl font-bold">Browser For Terminal</h1>

	<i class="text-xs text-gray-500">Tip: Use Enter to run command.</i>

	<Command initial={{ command: 'pwd', live: true }} />
	<Command initial={{ command: 'ls', live: true }} />
	<Command initial={{ command: 'ls -al', live: true }} />
	<Command initial={{ command: 'ls -al src/', live: true }} />
	<Command initial={{ command: 'cat package.json', live: true }} />
</div>

<script lang="ts">
	import Command from '$lib/Command.svelte';
</script>

<div class="p-4">
	<h1 class="mb-5 text-2xl font-bold">Browser For Terminal</h1>

	<Command initial="pwd" />
	<Command initial="ls" />
	<Command initial="ls -al" />
	<Command initial="ls -al src/" />
	<Command initial="cat package.json" />
</div>

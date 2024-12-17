<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="p-4">
	<!-- App Heading -->
	<div class="mb-3">
		<a href="/">
			<h1 class="mb-2 text-2xl font-bold hover:text-blue-600">Browser For Terminal</h1>
		</a>
		<i class="text-xs text-green-500">
			With great power comes great responsibility!
			<span class="text-xs text-gray-500"> (Tip: Use Enter to run command in non-live mode) </span>
		</i>

		<!-- Navigation Links -->
		<div class="text-sm">
			<a class="mr-2 text-blue-600 underline" href="/">Home</a>
			<a class="text-blue-600 underline" href="examples">Examples</a>
		</div>
	</div>

	{@render children()}
</div>

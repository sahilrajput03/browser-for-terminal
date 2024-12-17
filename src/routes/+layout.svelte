<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';

	let { children } = $props();
</script>

<div class="p-4">
	<!-- App Heading -->
	<div class="mb-3">
		<div>
			<a href="/">
				<h1 class="mb-2 text-2xl font-bold hover:text-blue-600">Browser For Terminal</h1>
			</a>
			{#if dev}
				<div class="text-xs italic">
					Deployed at:
					<a
						target="_blank"
						href="https://browser-for-terminal.vercel.app"
						class="text-blue-600 underline"
					>
						browser-for-terminal.vercel.app
					</a>
				</div>
			{/if}
		</div>

		<br />

		<div class="flex justify-between">
			<i class="text-xs text-green-500">
				With great power comes great responsibility!
				<span class="text-xs text-gray-500">
					(Tip: Use Enter to run command in non-live mode)
				</span>
			</i>

			<a
				class="flex items-center text-right text-xs text-blue-600"
				target="_blank"
				href="https://github.com/sahilrajput03/browser-for-terminal"
			>
				View on Github
				<img
					class="w-[20px]"
					src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
					alt="github here"
				/>
			</a>
		</div>

		<!-- Navigation Links -->
		<div class="text-sm">
			<a class="mr-2 text-blue-600 underline" href="/">Home</a>
			<a class="text-pink-400 underline hover:text-pink-700" href="examples">Examples</a>
		</div>
	</div>

	{@render children()}
</div>

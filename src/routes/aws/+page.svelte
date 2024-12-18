<script>
	import Command from '$lib/Command.svelte';

	const IMAGE_NAME_WITH_TAG = 'expressjs-sample1';
	const cwd = '/Users/apple/Documents/github_repos/learn-aws/express-app-1';
</script>

<!-- TODO: I need to implement live streaming for better experience. -->
<!-- Check file (for stream usage): /Users/apple/Documents/github_repos/learn-aws/express-app-1/spawn-stream.js -->

<Command initial={{ command: `docker build -t ${IMAGE_NAME_WITH_TAG} .`, live: false, cwd }} />

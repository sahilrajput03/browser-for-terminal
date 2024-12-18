<script lang="ts">
	import Command from '$lib/Command.svelte';
</script>

<h2 class="mt-3 text-2xl">Examples</h2>

<Command initial={{ command: 'ls -al', live: true }} />
<Command initial={{ command: 'ls -al src/', live: true }} />
<Command initial={{ command: 'cat package.json', live: true }} />
<Command initial={{ command: 'cd src; ls', live: true }} />
<Command initial={{ command: 'badCommand && ls', live: true }} />
<Command initial={{ command: 'date && ls', live: true }} />
<Command initial={{ command: 'sleep 3 && ls -al', live: false }} />
<!-- Example for running command in a given directory -->

<div>
	Example for running command in given directory via prop <code class="text-xs">cwd: '/Users'</code>
</div>
<Command initial={{ command: 'pwd', live: true, cwd: '/Users' }} />

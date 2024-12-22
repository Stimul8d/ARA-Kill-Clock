<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-black flex items-center justify-center">
	<div class="text-white">
		{@render children()}
	</div>
</div>
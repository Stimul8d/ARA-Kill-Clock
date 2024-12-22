<script lang="ts">
  import '../app.css';
  import NavBar from '$lib/components/NavBar.svelte';
  let { children } = $props();
</script>

<div class="min-h-screen bg-black">
  <NavBar />
  <main class="container mx-auto p-4">
    {@render children()}
  </main>
</div>
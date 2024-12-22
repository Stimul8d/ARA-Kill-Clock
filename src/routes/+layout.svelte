<script lang="ts">
  import '../app.css';
  import NavBar from '$lib/components/NavBar.svelte';
  let { children } = $props();
</script>

<div class="min-h-screen bg-black relative">
  <div class="absolute top-0 left-0 right-0 z-50">
    <NavBar />
  </div>
  <main class="h-screen">
    {@render children()}
  </main>
</div>
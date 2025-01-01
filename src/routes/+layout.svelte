<script lang="ts">
  import '../app.css';
  import NavBar from '$lib/components/NavBar.svelte';
  import CookieConsent from '$lib/components/CookieConsent.svelte';
</script>

<div class="min-h-screen bg-black relative">
  <div class="absolute top-0 left-0 right-0 z-50">
    <NavBar />
  </div>
  <main class="h-screen">
    <slot />
  </main>
</div>
<CookieConsent />
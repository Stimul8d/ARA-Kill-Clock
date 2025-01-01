<script lang="ts">
  import { onMount } from 'svelte';
  import localforage from 'localforage';

  let show = false;

  onMount(async () => {
    const hasConsented = await localforage.getItem('cookieConsent');
    if (!hasConsented) show = true;
  });

  async function accept() {
    await localforage.setItem('cookieConsent', true);
    show = false;
  }
</script>

{#if show}
  <div class="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-gray-800 px-4 py-3 flex items-center gap-2 justify-center" transition:fade>
    <span class="text-lg">🍪</span>
    <span class="text-sm text-gray-300">Analytics</span>
    <button 
      on:click={accept}
      class="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200 ml-2"
    >
      OK
    </button>
  </div>
{/if}

<style>
  .backdrop-blur-sm {
    backdrop-filter: blur(8px);
  }
</style>
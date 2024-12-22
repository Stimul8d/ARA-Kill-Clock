<script lang="ts">
  import { page } from '$app/stores';
  
  const dev = process.env.NODE_ENV === 'development';
  const sourcesUrl = dev ? '/sources' : 'https://bit.ly/Animal-Kill-Count';

  let regions = [
    { id: 'global', name: 'Global' }
  ];
  let activeRegion = regions[0];
</script>

<nav class="w-full bg-black border-b border-gray-800 px-4 h-12 flex items-center justify-between">
  <a href="/" class="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-200 flex items-center gap-2">
    <span class="text-xl">💔</span>
    Animal Kill Clock
  </a>
  <div class="flex items-center gap-8">
    {#if $page.url.pathname !== '/sources'}
      <a 
        href={sourcesUrl}
        target={dev ? undefined : '_blank'}
        rel={dev ? undefined : 'noopener noreferrer'}
        class="text-gray-400 hover:text-gray-200 text-sm transition-colors duration-200"
      >
        Check our sources →
      </a>
    {/if}
    <div class="flex gap-4">
      {#each regions as region}
        <button 
          class="px-3 py-1 rounded text-sm {activeRegion.id === region.id ? 'bg-white text-black' : 'text-white'}"
          on:click={() => activeRegion = region}
        >
          {region.name}
        </button>
      {/each}
    </div>
  </div>
</nav>
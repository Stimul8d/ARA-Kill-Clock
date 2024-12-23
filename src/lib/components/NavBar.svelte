<script lang="ts">
  import { page } from '$app/stores';
  
  const dev = process.env.NODE_ENV === 'development';
  const sourcesUrl = dev ? '/sources' : 'https://bit.ly/ara-animal-kill-clock';

  const regions = [
    { id: 'global', name: 'Global' },
    { id: 'uk', name: 'UK' }
  ];

  let activeRegion = regions[0];
</script>

<nav class="w-full bg-black border-b border-gray-800 px-4 h-12 flex items-center justify-between">
  <a href="/" class="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-200 flex items-center gap-2">
    <span>💔</span>
    Animal Kill Clock
  </a>
  <div class="flex items-center gap-8">
    <div class="flex gap-2">
      {#each regions as region}
        <a 
          href="/{region.id === 'global' ? '' : region.id}"
          class="px-3 py-1 rounded text-sm {$page.url.pathname === (region.id === 'global' ? '/' : `/${region.id}`) ? 'bg-white text-black' : 'text-white'}"
        >
          {region.name}
        </a>
      {/each}
    </div>
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
  </div>
</nav>
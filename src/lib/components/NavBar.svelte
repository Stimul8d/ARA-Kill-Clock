<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  
  const sourcesUrl = `${base}/sources`;
  let isMenuOpen = false;

  const regions = [
    { id: 'global', name: 'Global' },
    { id: 'uk', name: 'UK' }
  ];

  let menuButton: HTMLElement;
  let menuDropdown: HTMLElement;

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && 
          menuButton && 
          menuDropdown && 
          !menuButton.contains(event.target as Node) && 
          !menuDropdown.contains(event.target as Node)) {
        isMenuOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<nav class="w-full bg-black px-4 h-12 flex items-center justify-between">
  <a href="{base}" class="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-200 flex items-center gap-2">
    <span>💔</span>
    Kill Clock
  </a>

  <!-- Desktop Navigation -->
  <div class="hidden md:flex items-center gap-8">
    <div class="flex gap-2">
      {#each regions as region}
        <a 
          href="{region.id === 'global' ? base : `${base}/${region.id}`}"
          class="px-3 py-1 rounded text-sm {$page.url.pathname === (region.id === 'global' ? '/' : `/${region.id}`) ? 'bg-white text-black' : 'text-white'}"
        >
          {region.name}
        </a>
      {/each}
    </div>
    {#if $page.url.pathname !== '/sources'}
      <a 
        href={sourcesUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-gray-200 text-sm transition-colors duration-200"
      >
        Check our sources →
      </a>
    {/if}
  </div>

  <!-- Mobile Menu Button -->
  <button 
    bind:this={menuButton}
    class="md:hidden text-white p-2"
    on:click={() => isMenuOpen = !isMenuOpen}
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>

  <!-- Mobile Menu Dropdown -->
  {#if isMenuOpen}
    <div 
      bind:this={menuDropdown}
      class="absolute top-12 right-0 w-48 bg-black border border-gray-800 shadow-lg z-50"
    >
      {#each regions as region}
        <a 
          href="{region.id === 'global' ? base : `${base}/${region.id}`}"
          class="block px-4 py-2 text-sm {$page.url.pathname === (region.id === 'global' ? '/' : `/${region.id}`) ? 'bg-white text-black' : 'text-white hover:bg-gray-900'}"
          on:click={() => isMenuOpen = false}
        >
          {region.name}
        </a>
      {/each}
      {#if $page.url.pathname !== '/sources'}
        <a 
          href={sourcesUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-900"
          on:click={() => isMenuOpen = false}
        >
          Check our sources →
        </a>
      {/if}
    </div>
  {/if}
</nav>
<script lang="ts">
  let regions = [
    { id: 'global', name: 'Global' }
  ];
  let activeRegion = regions[0];
</script>

<nav class="w-full bg-black border-b border-gray-800 px-4 h-12 flex items-center justify-between">
  <h1 class="text-white text-lg font-medium">Animal Kill Clock</h1>
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
</nav>
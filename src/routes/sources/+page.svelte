<script lang="ts">
  import { sourceData } from '$lib/data/sources';
  
  let activeTab = 'global';
</script>

<div class="h-screen overflow-auto pt-20 pb-8 px-4 md:px-8">
  <div class="max-w-4xl mx-auto">
    <!-- Key Information Banner -->
    <div class="mb-12 p-6 bg-gray-900 rounded-lg">
      <h2 class="text-2xl text-white font-bold mb-4">About These Statistics</h2>
      <ul class="space-y-3 text-gray-300">
        <li>• All figures exclude wild-caught fish deaths, which would significantly increase the totals</li>
        <li>• Bycatch mortality (accidental deaths in fishing operations) is not included</li>
        <li>• Numbers are based on the most recent available data from official sources</li>
        <li>• Some figures use averages where precise counts aren't available</li>
        <li>• All statistics are annualised to show yearly death rates</li>
      </ul>
    </div>

    <!-- Region Tabs -->
    <div class="mb-8 border-b border-gray-800">
      <div class="flex space-x-8">
        <button
          class="pb-4 text-lg font-medium transition-colors duration-200 relative {activeTab === 'global' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}"
          class:active={activeTab === 'global'}
          on:click={() => activeTab = 'global'}
        >
          Global Statistics
          {#if activeTab === 'global'}
            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
          {/if}
        </button>
        <button
          class="pb-4 text-lg font-medium transition-colors duration-200 relative {activeTab === 'uk' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}"
          class:active={activeTab === 'uk'}
          on:click={() => activeTab = 'uk'}
        >
          UK Statistics
          {#if activeTab === 'uk'}
            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
          {/if}
        </button>
      </div>
    </div>

    <!-- Region Content -->
    {#each Object.entries(sourceData) as [id, region]}
      {#if id === activeTab}
        <div class="space-y-8">
          <div>
            <p class="text-gray-300 text-lg mb-6">{region.description}</p>
            
            {#if region.source}
              <div class="mb-8">
                <a 
                  href={region.source.url}
                  class="text-blue-400 hover:text-blue-300 hover:underline text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data source: {region.source.name}
                </a>
              </div>
            {/if}

            {#if region.notes.length}
              <div class="mb-8 p-4 bg-gray-900/50 rounded-lg">
                <h3 class="text-white font-bold mb-2">Region-Specific Notes:</h3>
                <ul class="list-disc pl-4 space-y-2">
                  {#each region.notes as note}
                    <li class="text-gray-300">{note}</li>
                  {/each}
                </ul>
              </div>
            {/if}

            <div class="space-y-6">
              {#each region.animals as animal}
                <div class="border-b border-gray-800 pb-6">
                  <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                    <h3 class="text-xl text-white font-bold">{animal.species}</h3>
                    <div class="font-mono text-lg text-red-500">
                      {animal.displayRate}
                    </div>
                  </div>
                  {#if animal.source}
                    <div class="text-gray-400 text-sm mt-2">
                      Source: 
                      <a 
                        href={animal.source.url}
                        class="text-blue-400 hover:text-blue-300 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {animal.source.name}
                      </a>
                    </div>
                  {/if}
                  {#if animal.notes}
                    <p class="text-gray-500 text-sm mt-2">{animal.notes}</p>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .active {
    font-weight: 600;
  }
</style>
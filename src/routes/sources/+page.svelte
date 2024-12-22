<script lang="ts">
  interface Source {
    species: string;
    count: {
      numeric: string;
      readable: string;
    };
    source: {
      name: string;
      url: string;
    };
    notes?: string;
  }

  const sources: Source[] = [
    {
      species: 'Fish',
      count: {
        numeric: '124,000,000,000',
        readable: '124 billion'
      },
      source: {
        name: 'Animal Welfare journal',
        url: 'https://viva.org.uk/animals/number-animals-killed/'
      },
      notes: 'Farmed fish only, as of 2019'
    },
    {
      species: 'Chickens',
      count: {
        numeric: '75,208,676,000',
        readable: '75.21 billion'
      },
      source: {
        name: 'FAOSTAT',
        url: 'https://www.fao.org/faostat/en/#home'
      }
    },
    {
      species: 'Shellfish',
      count: {
        numeric: '4,400,000,000',
        readable: '4.4 billion'
      },
      source: {
        name: 'Viva!',
        url: 'https://viva.org.uk/animals/number-animals-killed/'
      }
    },
    {
      species: 'Ducks',
      count: {
        numeric: '3,190,336,000',
        readable: '3.19 billion'
      },
      source: {
        name: 'Wikipedia (citing FAOSTAT)',
        url: 'https://en.wikipedia.org/wiki/Animal_slaughter'
      }
    },
    {
      species: 'Pigs',
      count: {
        numeric: '1,491,997,360',
        readable: '1.49 billion'
      },
      source: {
        name: 'Wikipedia (citing FAOSTAT)',
        url: 'https://en.wikipedia.org/wiki/Animal_slaughter'
      }
    },
    {
      species: 'Sheep',
      count: {
        numeric: '637,269,688',
        readable: '637.27 million'
      },
      source: {
        name: 'Wikipedia (citing FAOSTAT)',
        url: 'https://en.wikipedia.org/wiki/Animal_slaughter'
      }
    },
    {
      species: 'Turkeys',
      count: {
        numeric: '515,228,000',
        readable: '515.23 million'
      },
      source: {
        name: 'FAOSTAT',
        url: 'https://www.fao.org/faostat/en/#home'
      }
    },
    {
      species: 'Cows',
      count: {
        numeric: '308,640,252',
        readable: '308.64 million'
      },
      source: {
        name: 'FAOSTAT',
        url: 'https://www.fao.org/faostat/en/#home'
      }
    }
  ];
</script>

<div class="h-screen overflow-auto pt-20 pb-8 px-4 md:px-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl text-white font-bold mb-8">Annual Death Statistics & Sources</h1>
    
    <div class="space-y-6">
      {#each sources as {species, count, source, notes}}
        <div class="border-b border-gray-800 pb-6">
          <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
            <h2 class="text-2xl text-white font-bold">{species}</h2>
            <div class="font-mono text-xl text-gray-400">
              <span class="text-red-500">{count.numeric}</span>
              <span class="text-gray-600 text-lg">({count.readable})</span>
            </div>
          </div>
          
          <div class="flex items-baseline gap-2 text-gray-400">
            <span class="text-gray-500">Source:</span>
            <a 
              href={source.url} 
              class="text-blue-400 hover:text-blue-300 hover:underline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {source.name}
            </a>
          </div>
          
          {#if notes}
            <p class="mt-2 text-gray-600 text-sm">{notes}</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
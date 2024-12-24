<script lang="ts">
  import { animalCounts, currentRegion } from '$lib/stores/killClock';
  import Counter from '$lib/components/Counter.svelte';
  import TotalCounter from '$lib/components/TotalCounter.svelte';
  
  let startTime = Date.now();
  
  $currentRegion = 'uk';
  
  function updateUKCounts() {
    const elapsedSeconds = (Date.now() - startTime) / 1000;
    animalCounts.updateCounts('uk', elapsedSeconds);
    requestAnimationFrame(updateUKCounts);
  }
  
  updateUKCounts();
</script>

<div class="min-h-screen bg-black">
  <div class="pt-12"> 
    <TotalCounter />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 pb-8">
    {#each $animalCounts as animal}
      <Counter {animal} />
    {/each}
  </div>
</div>
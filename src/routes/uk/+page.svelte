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

<div class="h-screen flex flex-col">
  <div class="pt-12"> 
    <TotalCounter />
  </div>
  <div class="flex-1 grid grid-cols-4 gap-4 px-4" style="padding-bottom: min(5vh, 80px);">
    {#each $animalCounts as animal}
      <Counter {animal} />
    {/each}
  </div>
</div>
<script lang="ts">
  import { animalCounts } from '$lib/stores/killClock';
  import Counter from '$lib/components/Counter.svelte';
  import TotalCounter from '$lib/components/TotalCounter.svelte';
  
  let startTime = Date.now();
  
  function updateCounts() {
    const elapsedSeconds = (Date.now() - startTime) / 1000;
    $animalCounts = $animalCounts.map(animal => ({
      ...animal,
      count: (animal.annualRate / (365 * 24 * 60 * 60)) * elapsedSeconds
    }));
    requestAnimationFrame(updateCounts);
  }
  
  updateCounts();
</script>

<div class="h-screen flex flex-col">
  <div class="pt-12"> 
    <TotalCounter />
  </div>
  <div class="flex-1 grid grid-cols-4 gap-4 p-4
              ipad-mini:gap-2 ipad-mini:p-2
              ipad-air:gap-3 ipad-air:p-3
              ipad-pro:gap-4 ipad-pro:p-4" 
       style="padding-bottom: min(5vh, 80px);">
    {#each $animalCounts as animal}
      <Counter {animal} />
    {/each}
  </div>
</div>
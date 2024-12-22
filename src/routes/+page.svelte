<script lang="ts">
  import { animalCounts } from '$lib/stores/killClock';
  import Counter from '$lib/components/Counter.svelte';
  import TotalCounter from '$lib/components/TotalCounter.svelte';
  
  // Update counts every second based on annual rate
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

<TotalCounter />

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  {#each $animalCounts as animal}
    <Counter {animal} />
  {/each}
</div>
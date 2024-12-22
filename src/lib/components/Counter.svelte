<script lang="ts">
  import type { AnimalCount } from '../stores/killClock';
  
  export let animal: AnimalCount;
  
  $: formattedCount = new Intl.NumberFormat('en-US').format(Math.floor(animal.count));
</script>

<div class="flex flex-col items-center justify-center h-full">
  <h2 class="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-4">{animal.species}</h2>
  <div class="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white">{formattedCount}</div>
</div>
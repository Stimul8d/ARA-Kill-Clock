<script lang="ts">
  import type { AnimalCount } from '../stores/killClock';
  
  export let animal: AnimalCount;
  
  $: formattedCount = new Intl.NumberFormat('en-US').format(Math.floor(animal.count));
</script>

<div class="flex flex-col items-center justify-center p-4">
  <h2 class="text-xl font-bold text-white uppercase tracking-wide mb-2">{animal.species}</h2>
  <div class="text-3xl font-mono font-bold text-white">{formattedCount}</div>
</div>
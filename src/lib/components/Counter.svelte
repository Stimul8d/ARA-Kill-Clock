<script lang="ts">
  import type { AnimalCount } from '../stores/killClock';
  
  export let animal: AnimalCount;
  
  $: formattedCount = new Intl.NumberFormat('en-US').format(Math.floor(animal.count));
</script>

<div class="flex flex-col items-center justify-center p-4 border border-gray-800 rounded-lg bg-black/50">
  <div class="text-2xl mb-2">{animal.icon}</div>
  <h2 class="text-xl font-bold mb-2">{animal.species}</h2>
  <div class="text-3xl font-mono font-bold text-red-500">{formattedCount}</div>
</div>
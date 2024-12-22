<script lang="ts">
  import type { AnimalCount } from '../stores/killClock';
  
  export let animal: AnimalCount;
  
  $: formattedCount = new Intl.NumberFormat('en-US').format(Math.floor(animal.count));
</script>

<div class="flex flex-col items-center justify-center h-full">
  <!-- iPad-specific classes for text sizes -->
  <h2 class="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-4
             ipad-pro:text-4xl ipad-air:text-3xl ipad-mini:text-2xl">{animal.species}</h2>
  <div class="text-4xl md:text-5xl font-mono font-bold text-white
              ipad-pro:text-6xl ipad-air:text-5xl ipad-mini:text-4xl">
    {formattedCount}
  </div>
</div>
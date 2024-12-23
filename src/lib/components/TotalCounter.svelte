<script lang="ts">
  import { animalCounts, currentRegion } from '../stores/killClock';
  
  let startTime = Date.now();
  let elapsedTime = '';
  let totalCount = 0;

  $: formattedTotal = new Intl.NumberFormat('en-GB').format(Math.floor(totalCount));
  $: suffix = $currentRegion === 'uk' ? 'in the UK' : 'globally';
  
  function formatElapsedTime(diff: number): string {
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const parts: string[] = [];
    
    if (hours > 0) {
      parts.push(hours + ' hour' + (hours !== 1 ? 's' : ''));
      parts.push(minutes + ' minute' + (minutes !== 1 ? 's' : ''));
    } else if (minutes > 0) {
      parts.push(minutes + ' minute' + (minutes !== 1 ? 's' : ''));
    }
    
    parts.push(seconds + ' second' + (seconds !== 1 ? 's' : ''));
    
    const lastPart = parts.pop();
    return parts.length ? parts.join(', ') + ' and ' + lastPart : lastPart!;
  }
  
  function updateTotal() {
    totalCount = $animalCounts.reduce((sum, animal) => sum + animal.count, 0);
    elapsedTime = formatElapsedTime(Date.now() - startTime);
    requestAnimationFrame(updateTotal);
  }
  
  updateTotal();
</script>

<div class="flex flex-col items-center mt-4">
  <p class="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight">
    In the last <span class="text-gray-400">{elapsedTime}</span>
  </p>
  <div class="text-center px-4 flex flex-col">
    <span class="font-mono text-red-500 text-[min(6vw,5rem)]">{formattedTotal}</span>
    <span class="text-white text-3xl md:text-4xl lg:text-5xl font-bold">animals have been killed {suffix}</span>
  </div>
  <div class="w-3/4 h-px bg-gray-800 my-12"></div>
</div>
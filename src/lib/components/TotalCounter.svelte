<script lang="ts">
  import { animalCounts } from '../stores/killClock';
  
  let startTime = Date.now();
  let elapsedTime = '';
  let totalCount = 0;

  $: formattedTotal = new Intl.NumberFormat('en-US').format(Math.floor(totalCount));
  
  function formatElapsedTime(diff: number): string {
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const parts: string[] = [];
    
    if (hours > 0) {
      parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
      parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
    } else if (minutes > 0) {
      parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
    }
    
    parts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);
    
    const lastPart = parts.pop();
    return parts.length ? `${parts.join(', ')} and ${lastPart}` : lastPart!;
  }
  
  function updateTotal() {
    totalCount = $animalCounts.reduce((sum, animal) => sum + animal.count, 0);
    elapsedTime = formatElapsedTime(Date.now() - startTime);
    requestAnimationFrame(updateTotal);
  }
  
  updateTotal();
</script>

<div class="flex flex-col items-center justify-center gap-2 my-12">
  <p class="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
    In the last <span class="text-gray-400">{elapsedTime}</span><br>
    humans have taken the lives of
  </p>
  <div class="text-5xl md:text-6xl lg:text-7xl font-bold text-center">
    <span class="font-mono text-red-500">{formattedTotal}</span>
    <span class="text-white">animals</span>
  </div>
</div>
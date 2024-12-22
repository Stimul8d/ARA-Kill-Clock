<script lang="ts">
  import { animalCounts } from '../stores/killClock';
  
  let startTime = Date.now();
  let elapsedTime = '';
  let totalCount = 0;

  $: formattedTotal = new Intl.NumberFormat('en-US').format(Math.floor(totalCount));
  
  function updateElapsedTime() {
    const now = Date.now();
    const diff = now - startTime;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const parts: string[] = [];
    
    if (hours > 0) {
      parts.push(`<span class="font-mono">${hours}</span> hours`);
    }
    if (minutes > 0 || hours > 0) {
      parts.push(`<span class="font-mono">${minutes}</span> minutes`);
    }
    if (seconds > 0 || (hours === 0 && minutes === 0)) {
      parts.push(`<span class="font-mono">${seconds}</span> seconds`);
    }
    
    elapsedTime = parts.join(' ');
  }
  
  function updateTotal() {
    totalCount = $animalCounts.reduce((sum, animal) => sum + animal.count, 0);
    updateElapsedTime();
    requestAnimationFrame(updateTotal);
  }
  
  updateTotal();
</script>

<div class="flex flex-col items-center justify-center gap-8 my-12">
  <div class="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
    In the last <span class="text-gray-400">{@html elapsedTime}</span>,<br>
    humans have taken the lives of
  </div>
  <div class="text-5xl md:text-6xl lg:text-7xl font-bold text-center">
    <span class="font-mono text-red-500">{formattedTotal}</span>
    <span class="text-white">animals</span>
  </div>
</div>
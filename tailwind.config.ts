import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'ipad-mini': '744px',    // iPad Mini viewport
        'ipad-air': '820px',     // iPad Air viewport
        'ipad-pro': '1024px',    // iPad Pro viewport
      }
    }
  },
  plugins: [typography]
} satisfies Config;
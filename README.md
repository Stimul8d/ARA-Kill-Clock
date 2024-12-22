# Animal Kill Clock

A real-time visualization dashboard showing the rate of animal deaths in animal agriculture globally. Built specifically for public demonstrations and animal rights activism events.

## Overview

This Progressive Web App (PWA) provides a stark, real-time count of animals killed for food globally. It's designed for maximum impact at street outreach events and public demonstrations, working offline and adapting to any display size from tablets to large screens.

## Live Demo

[https://yourusername.github.io/ara-kill-clock/](https://yourusername.github.io/ara-kill-clock/)

## Global Annual Death Statistics

Annual death rates by species, ordered by magnitude:

- Fish: 124,000,000,000 (124 billion) farmed fish per year  
  Source: Animal Welfare journal, cited by [Viva!](https://viva.org.uk/animals/number-animals-killed/)

- Chickens: 75,208,676,000 (75.21 billion) per year  
  Source: [FAOSTAT](https://www.fao.org/faostat/en/#home)

- Shellfish: 4,400,000,000 (4.4 billion) per year  
  Source: [Viva!](https://viva.org.uk/animals/number-animals-killed/)

- Ducks: 3,190,336,000 (3.19 billion) per year  
  Source: Wikipedia (citing FAOSTAT)

- Pigs: 1,491,997,360 (1.49 billion) per year  
  Source: Wikipedia (citing FAOSTAT)

- Sheep: 637,269,688 (637.27 million) per year  
  Source: Wikipedia (citing FAOSTAT)

- Turkeys: 515,228,000 (515.23 million) per year  
  Source: [FAOSTAT](https://www.fao.org/faostat/en/#home)

- Cows: 308,640,252 (308.64 million) per year  
  Source: [FAOSTAT](https://www.fao.org/faostat/en/#home)

## Features

- 📱 Responsive design works on any device
- 🌐 Functions offline - perfect for street demonstrations
- ⚡ Fast, fluid interface with real-time updates
- 📊 Accurate global statistics with cited sources
- 🎯 Clear, impactful visualization

## Technology Stack

- SvelteKit for fast, reactive UI
- TypeScript for type safety
- Tailwind CSS for styling
- PWA capabilities for offline use
- GitHub Pages for hosting

## Development

### Prerequisites
- Node.js (v20 or higher recommended)
- npm

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/ara-kill-clock.git
cd ara-kill-clock

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Deployment
The app automatically deploys to GitHub Pages when changes are pushed to the main branch.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is released into the public domain under the [Unlicense](https://unlicense.org/). You can copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

## Data Sources

The kill count statistics are sourced from:
- [FAOSTAT](https://www.fao.org/faostat/en/#home) - The Food and Agriculture Organization's statistical database
- [Viva!](https://viva.org.uk/animals/number-animals-killed/) - Animal welfare organization's research
- Animal Welfare Journal (for farmed fish statistics)

Numbers reflect the most recent available global data. All sources are cited directly in the statistics section above.
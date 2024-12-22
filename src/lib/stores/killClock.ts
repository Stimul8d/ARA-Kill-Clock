import { writable } from 'svelte/store';

export interface AnimalCount {
    species: string;
    count: number;
    annualRate: number;
    icon: string;
}

// Animals in descending order by annual rate
export const animalCounts = writable<AnimalCount[]>([
    { 
        species: 'Shellfish',
        count: 0,
        annualRate: 43_109_000_000,
        icon: '🦐'
    },
    { 
        species: 'Chickens',
        count: 0,
        annualRate: 8_127_632_113,
        icon: '🐔'
    },
    { 
        species: 'Fish',
        count: 0,
        annualRate: 3_797_000_000,
        icon: '🐟'
    },
    { 
        species: 'Turkeys',
        count: 0,
        annualRate: 214_508_816,
        icon: '🦃'
    },
    { 
        species: 'Pigs',
        count: 0,
        annualRate: 124_061_094,
        icon: '🐷'
    },
    { 
        species: 'Cattle',
        count: 0,
        annualRate: 36_163_973,
        icon: '🐄'
    },
    { 
        species: 'Ducks',
        count: 0,
        annualRate: 23_275_362,
        icon: '🦆'
    },
    { 
        species: 'Sheep',
        count: 0,
        annualRate: 7_499_676,
        icon: '🐑'
    }
]);
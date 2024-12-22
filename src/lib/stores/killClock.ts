import { writable } from 'svelte/store';

export interface AnimalCount {
    species: string;
    count: number;
    annualRate: number;
}

export const animalCounts = writable<AnimalCount[]>([
    { 
        species: 'Shellfish',
        count: 0,
        annualRate: 43_109_000_000
    },
    { 
        species: 'Chickens',
        count: 0,
        annualRate: 8_127_632_113
    },
    { 
        species: 'Fish',
        count: 0,
        annualRate: 3_797_000_000
    },
    { 
        species: 'Turkeys',
        count: 0,
        annualRate: 214_508_816
    },
    { 
        species: 'Pigs',
        count: 0,
        annualRate: 124_061_094
    },
    { 
        species: 'Cattle',
        count: 0,
        annualRate: 36_163_973
    },
    { 
        species: 'Ducks',
        count: 0,
        annualRate: 23_275_362
    },
    { 
        species: 'Sheep',
        count: 0,
        annualRate: 7_499_676
    }
]);
import { writable } from 'svelte/store';

export interface AnimalCount {
    species: string;
    count: number;
    annualRate: number;
}

// Animals ordered by annual death rate (descending)
export const animalCounts = writable<AnimalCount[]>([
    { 
        species: 'Fish',
        count: 0,
        annualRate: 124_000_000_000
    },
    { 
        species: 'Chickens',
        count: 0,
        annualRate: 75_208_676_000
    },
    { 
        species: 'Shellfish',
        count: 0,
        annualRate: 4_400_000_000
    },
    { 
        species: 'Ducks',
        count: 0,
        annualRate: 3_190_336_000
    },
    { 
        species: 'Pigs',
        count: 0,
        annualRate: 1_491_997_360
    },
    { 
        species: 'Sheep',
        count: 0,
        annualRate: 637_269_688
    },
    { 
        species: 'Turkeys',
        count: 0,
        annualRate: 515_228_000
    },
    { 
        species: 'Cows',
        count: 0,
        annualRate: 308_640_252
    }
]);
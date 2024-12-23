import { writable, derived } from 'svelte/store';
import { sourceData } from '../data/sources';

export interface AnimalCount {
    species: string;
    count: number;
    annualRate: number;
}

export const currentRegion = writable('global');

// Create initial data structure
function createAnimalCounts() {
    const { subscribe, set } = writable<AnimalCount[]>([]);

    return {
        subscribe,
        set,
        updateCounts: (region: string, elapsedSeconds: number) => {
            const regionData = sourceData[region].animals;
            set(regionData.map(animal => ({
                species: animal.species,
                count: (animal.annualRate / (365 * 24 * 60 * 60)) * elapsedSeconds,
                annualRate: animal.annualRate
            })));
        }
    };
}

export const animalCounts = createAnimalCounts();
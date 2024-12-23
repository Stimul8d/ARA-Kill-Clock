import { writable } from 'svelte/store';
import { sourceData } from '../data/sources';

export interface AnimalCount {
    species: string;
    count: number;
    annualRate: number;
}

export const currentRegion = writable('global');

// Create initial data structure
function createAnimalCounts() {
    const { subscribe, set, update } = writable<AnimalCount[]>([]);

    return {
        subscribe,
        set,
        update,
        setRegion: (region: string) => {
            const regionData = sourceData[region].animals;
            set(regionData.map(animal => ({
                species: animal.species,
                count: 0,
                annualRate: animal.annualRate
            })));
        }
    };
}

export const animalCounts = createAnimalCounts();
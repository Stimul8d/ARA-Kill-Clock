interface AnimalData {
    species: string;
    annualRate: number;
    displayRate: string;
    notes?: string;
    source?: {
        name: string;
        url: string;
    };
}

interface RegionData {
    name: string;
    description: string;
    source?: {
        name: string;
        url: string;
    };
    notes: string[];
    animals: AnimalData[];
}

export const sourceData: Record<string, RegionData> = {
    uk: {
        name: "United Kingdom",
        description: "Annual animal deaths in the UK food industry",
        source: {
            name: "Viva!",
            url: "https://viva.org.uk/animals/number-animals-killed/"
        },
        notes: [
            "Fish numbers only include farmed fish - wild-caught numbers are significantly higher",
            "Shellfish statistics exclude bycatch deaths",
            "Duck figures include geese in the total",
            "Sheep figures include lambs in annual counts"
        ],
        animals: [
            {
                species: "Chickens",
                annualRate: 1_153_000_000,
                displayRate: "1.153 billion"
            },
            {
                species: "Shellfish",
                annualRate: 4_400_000_000,
                displayRate: "4.4 billion",
                notes: "Excludes bycatch mortality"
            },
            {
                species: "Fish",
                annualRate: 52_500_000,
                displayRate: "28-77 million",
                notes: "Average used for calculations. Range reflects uncertainty in farming methods."
            },
            {
                species: "Pigs",
                annualRate: 9_811_000,
                displayRate: "9.81 million"
            },
            {
                species: "Sheep",
                annualRate: 14_415_000,
                displayRate: "14.42 million",
                notes: "Includes lambs"
            },
            {
                species: "Ducks",
                annualRate: 9_000_000,
                displayRate: "9 million",
                notes: "Includes geese"
            },
            {
                species: "Turkeys",
                annualRate: 9_000_000,
                displayRate: "9 million"
            },
            {
                species: "Cows",
                annualRate: 2_793_000,
                displayRate: "2.79 million"
            }
        ]
    },
    global: {
        name: "Global",
        description: "Annual animal deaths in global agriculture",
        notes: [
            "Fish numbers only include farmed fish - wild-caught numbers are vastly higher",
            "Shellfish statistics exclude bycatch deaths"
        ],
        animals: [
            {
                species: "Fish",
                annualRate: 124_000_000_000,
                displayRate: "124 billion",
                source: {
                    name: "Animal Welfare journal, cited by Viva!",
                    url: "https://viva.org.uk/animals/number-animals-killed/"
                }
            },
            {
                species: "Chickens",
                annualRate: 75_208_676_000,
                displayRate: "75.21 billion",
                source: {
                    name: "FAOSTAT",
                    url: "https://www.fao.org/faostat/en/#home"
                }
            },
            {
                species: "Shellfish",
                annualRate: 4_400_000_000,
                displayRate: "4.4 billion",
                source: {
                    name: "Viva!",
                    url: "https://viva.org.uk/animals/number-animals-killed/"
                }
            },
            {
                species: "Ducks",
                annualRate: 3_190_336_000,
                displayRate: "3.19 billion",
                source: {
                    name: "Wikipedia (citing FAOSTAT)",
                    url: "https://en.wikipedia.org/wiki/Animal_slaughter"
                }
            },
            {
                species: "Pigs",
                annualRate: 1_491_997_360,
                displayRate: "1.49 billion",
                source: {
                    name: "Wikipedia (citing FAOSTAT)",
                    url: "https://en.wikipedia.org/wiki/Animal_slaughter"
                }
            },
            {
                species: "Sheep",
                annualRate: 637_269_688,
                displayRate: "637.27 million",
                source: {
                    name: "Wikipedia (citing FAOSTAT)",
                    url: "https://en.wikipedia.org/wiki/Animal_slaughter"
                }
            },
            {
                species: "Turkeys",
                annualRate: 515_228_000,
                displayRate: "515.23 million",
                source: {
                    name: "FAOSTAT",
                    url: "https://www.fao.org/faostat/en/#home"
                }
            },
            {
                species: "Cows",
                annualRate: 308_640_252,
                displayRate: "308.64 million",
                source: {
                    name: "FAOSTAT",
                    url: "https://www.fao.org/faostat/en/#home"
                }
            }
        ]
    }
};

export type { RegionData, AnimalData };
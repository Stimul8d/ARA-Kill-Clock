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
                species: "Shellfish",
                annualRate: 4_400_000_000,
                displayRate: "4.4 billion",
                notes: "Excludes bycatch mortality"
            },
            {
                species: "Chickens",
                annualRate: 1_153_000_000,
                displayRate: "1.153 billion"
            },
            {
                species: "Fish",
                annualRate: 52_500_000,
                displayRate: "28-77 million",
                notes: "Average used for calculations. Range reflects uncertainty in farming methods."
            },
            {
                species: "Sheep",
                annualRate: 14_415_000,
                displayRate: "14.42 million",
                notes: "Includes lambs"
            },
            {
                species: "Pigs",
                annualRate: 9_811_000,
                displayRate: "9.81 million"
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
    },
    us: {
        name: "United States",
        description: "Annual animal deaths in US food industry (2020)",
        source: {
            name: "USDA ERS",
            url: "https://www.ers.usda.gov/data-products/livestock-and-meat-domestic-data/livestock-and-meat-domestic-data/#Livestock%20and%20poultry%20slaughter"
        },
        notes: [
            "Raw slaughter figures from USDA 2020 data",
            "Fish and shellfish data from 2013 analysis"
        ],
        animals: [
            {
                species: "Shellfish",
                annualRate: 43_109_000_000,
                displayRate: "43.1 billion",
                source: {
                    name: "Counting Animals",
                    url: "https://countinganimals.com/how-many-animals-does-a-vegetarian-save/"
                },
                notes: "2013 estimate"
            },
            {
                species: "Chickens",
                annualRate: 9_346_660_000,
                displayRate: "9.35 billion"
            },
            {
                species: "Fish",
                annualRate: 3_797_000_000,
                displayRate: "3.8 billion",
                source: {
                    name: "Counting Animals",
                    url: "https://countinganimals.com/how-many-animals-does-a-vegetarian-save/"
                },
                notes: "2013 estimate"
            },
            {
                species: "Turkeys",
                annualRate: 223_003_000,
                displayRate: "223 million"
            },
            {
                species: "Pigs",
                annualRate: 131_563_000,
                displayRate: "131.6 million"
            },
            {
                species: "Cows",
                annualRate: 33_242_000,
                displayRate: "33.2 million",
                notes: "Includes cattle and calves"
            },
            {
                species: "Ducks",
                annualRate: 22_484_000,
                displayRate: "22.5 million"
            },
            {
                species: "Sheep",
                annualRate: 2_225_000,
                displayRate: "2.23 million",
                notes: "Includes lambs"
            }
        ]
    }
};

export type { RegionData, AnimalData };
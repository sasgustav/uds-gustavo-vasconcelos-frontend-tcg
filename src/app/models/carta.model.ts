export interface Carta {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    level: string;
    hp: string;
    types: string[];
    evolvesFrom?: string;
    abilities: Ability[];
    attacks: Attack[];
    weaknesses: Weakness[];
    resistances: Resistance[];
    flavorText: string;
    images: CardImages;
    set: Set;
    number: string;
    artist: string;
    rarity: string;
    nationalPokedexNumbers: number[];
    legalities: Legalities;
    tcgplayer: TcgPlayer;
    cardmarket: CardMarket;
}

export interface Ability {
    name: string;
    text: string;
    type: string;
}

export interface Attack {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
}

export interface Weakness {
    type: string;
    value: string;
}

export interface Resistance {
    type: string;
    value: string;
}

export interface CardImages {
    small: string;
    large: string;
}

export interface Set {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: Legalities;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: SetImages;
}

export interface SetImages {
    symbol: string;
    logo: string;
}

export interface Legalities {
    unlimited: string;
}

export interface TcgPlayer {
    url: string;
    updatedAt: string;
    prices: Prices;
}

export interface CardMarket {
    url: string;
    updatedAt: string;
    prices: CardMarketPrices;
}

export interface Prices {
    holofoil: PriceDetail;
    reverseHolofoil: PriceDetail;
}

export interface PriceDetail {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow?: number;
}

export interface CardMarketPrices {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    germanProLow: number;
    suggestedPrice: number;
    reverseHoloSell: number;
    reverseHoloLow: number;
    reverseHoloTrend: number;
    lowPriceExPlus: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1: number;
    reverseHoloAvg7: number;
    reverseHoloAvg30: number;
}

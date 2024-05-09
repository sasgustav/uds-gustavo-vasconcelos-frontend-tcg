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

export interface Legalities {
    unlimited: string;
}

export interface SetImages {
    symbol: string;
    logo: string;
}
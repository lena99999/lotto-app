export interface Draw {
    additionalNumbers: string[],
    date: string,
    gameAmount?: string,
    jackpot?: string,
    megaPlier?: string,
    numbers: string[],
    odds?: Odds[],
    powerPlay?: string,
    shares?: string[],
    time?: string
}

export interface Odds {
    description: string,
    descriptionShort: string,
    link?: string,
    numberOfWinners?: string,
    numbers: string[],
    odd: string,
    winningClass: number,
    withOptions?: string[]
}
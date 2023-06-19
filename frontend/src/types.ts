// src/types.ts

export interface User {
    avatarUrl: any;
    id: string;
    name: string;
    email: string;
    // dodaj więcej pól zgodnie z Twoim modelem użytkownika
}

export interface Match {
    id: string;
    team1: string;
    team2: string;
    time: Date;
    score?: {
        team1: number;
        team2: number;
    }
    // dodaj więcej pól zgodnie z Twoim modelem meczu
}

export interface Bet {
    id: string;
    matchId: string;
    userId: string;
    amount: number;
    team: string;
    // dodaj więcej pól zgodnie z Twoim modelem zakładu
}

export interface Prediction {
    id: string;
    userId: string;
    matchId: string;
    betId: string;
    prediction: string;
    // dodaj więcej pól zgodnie z Twoim modelem prognozy
}

export interface RootState {
    user: User;
    matches: Match[];
    bets: Bet[];
    predictions: Prediction[];
    // dodaj więcej stanów zgodnie ze stanem aplikacji
}


export interface UserAction {
    type: string;
    user: User;
}

export interface MatchAction {
    type: string;
    match: Match;
}

export interface BetAction {
    type: string;
    bet: Bet;
}

export interface PredictionAction {
    type: string;
    prediction: Prediction;
}

export interface DispatchType {
    (arg0: UserAction | MatchAction | BetAction | PredictionAction): void;
}
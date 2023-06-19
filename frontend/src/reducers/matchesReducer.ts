type MatchesState = {
    // Twoja struktura stanu meczów
};

type MatchesAction = {
    type: string;
    payload: any;  // Zmień na odpowiedni typ
};

const initialState: MatchesState = {
    // Twoje początkowe wartości stanu meczów
};

export const matchesReducer = (
    state: MatchesState = initialState,
    action: MatchesAction
): MatchesState => {
    switch (action.type) {
        // Twoje case'y akcji
        default:
            return state;
    }
};

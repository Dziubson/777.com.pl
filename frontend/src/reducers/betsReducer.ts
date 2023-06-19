type BetsState = {
    // Twoja struktura stanu zakładów
};

type BetsAction = {
    type: string;
    payload: any;  // Zmień na odpowiedni typ
};

const initialState: BetsState = {
    // Twoje początkowe wartości stanu zakładów
};

export const betsReducer = (
    state: BetsState = initialState,
    action: BetsAction
): BetsState => {
    switch (action.type) {
        // Twoje case'y akcji
        default:
            return state;
    }
};

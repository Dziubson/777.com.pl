type PredictionsState = {
    // Twoja struktura stanu prognoz
};

type PredictionsAction = {
    type: string;
    payload: any;  // Zmień na odpowiedni typ
};

const initialState: PredictionsState = {
    // Twoje początkowe wartości stanu prognoz
};

export const predictionsReducer = (
    state: PredictionsState = initialState,
    action: PredictionsAction
): PredictionsState => {
    switch (action.type) {
        // Twoje case'y akcji
        default:
            return state;
    }
};

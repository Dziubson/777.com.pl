type UserState = {
    // Twoja struktura stanu użytkownika
};

type UserAction = {
    type: string;
    payload: any;  // Zmień na odpowiedni typ
};

const initialState: UserState = {
    // Twoje początkowe wartości stanu użytkownika
};

export const userReducer = (
    state: UserState = initialState,
    action: UserAction
): UserState => {
    switch (action.type) {
        // Twoje case'y akcji
        default:
            return state;
    }
};

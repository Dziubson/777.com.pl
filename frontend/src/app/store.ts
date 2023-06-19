// store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice.ts';
import matchesReducer from '../features/matches/matchesSlice';
import betsReducer from '../features/bets/betsSlice';
import predictionsReducer from '../features/predictions/predictionsSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        matches: matchesReducer,
        bets: betsReducer,
        predictions: predictionsReducer,
    },
});

// Typ stanu całej aplikacji
export type RootState = ReturnType<typeof store.getState>;

// Typy dla funkcji dispatch
export type AppDispatch = typeof store.dispatch;

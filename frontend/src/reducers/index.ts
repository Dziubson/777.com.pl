// src/reducers/index.ts

import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { matchesReducer } from './matchesReducer';
import { betsReducer } from './betsReducer';
import { predictionsReducer } from './predictionsReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    matches: matchesReducer,
    bets: betsReducer,
    predictions: predictionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
// src/features/matches/matchesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Match, RootState } from '../../types';

const initialState: Match[] = [];

const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {
        getMatches: (state) => state,
        setMatches: (state, action: PayloadAction<Match[]>) => {
            state.length = 0;
            state.push(...action.payload);
        },
        addMatch: (state, action: PayloadAction<Match>) => {
            state.push(action.payload);
        },
        removeMatch: (state, action: PayloadAction<string>) => {
            const index = state.findIndex(match => match.id === action.payload);
            if(index !== -1) {
                state.splice(index, 1);
            }
        }
    }
});

export const { getMatches, setMatches, addMatch, removeMatch } = matchesSlice.actions;
export default matchesSlice.reducer;
export const selectMatches = (state: RootState) => state.matches;

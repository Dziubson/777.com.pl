// betsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Bet } from '../../types';

interface BetsState {
    bets: Bet[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: BetsState = {
    bets: [],
    status: 'idle',
    error: null
}

export const betsSlice = createSlice({
    name: 'bets',
    initialState,
    reducers: {
        getBetsStart: (state) => {
            state.status = 'loading'
        },
        getBetsSuccess: (state, action: PayloadAction<Bet[]>) => {
            state.status = 'succeeded'
            // dodajemy załadowane zakłady do stanu
            state.bets = action.payload
        },
        getBetsFailure: (state, action: PayloadAction<string>) => {
            state.status = 'failed'
            state.error = action.payload
        },
    }
})

export const { getBetsStart, getBetsSuccess, getBetsFailure } = betsSlice.actions;

export default betsSlice.reducer;

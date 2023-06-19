// predictionsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prediction } from '../../types';

interface PredictionsState {
    predictions: Prediction[];
}

const initialState: PredictionsState = {
    predictions: [],
}

export const predictionsSlice = createSlice({
    name: 'predictions',
    initialState,
    reducers: {
        setPredictions: (state, action: PayloadAction<Prediction[]>) => {
            state.predictions = action.payload;
        },
        addPrediction: (state, action: PayloadAction<Prediction>) => {
            state.predictions.push(action.payload);
        },
        deletePrediction: (state, action: PayloadAction<string>) => {
            state.predictions = state.predictions.filter(prediction => prediction.id !== action.payload);
        },
        updatePrediction: (state, action: PayloadAction<Prediction>) => {
            const index = state.predictions.findIndex(prediction => prediction.id === action.payload.id);
            if (index !== -1) {
                state.predictions[index] = action.payload;
            }
        },
    },
})

export const { setPredictions, addPrediction, deletePrediction, updatePrediction } = predictionsSlice.actions;

export default predictionsSlice.reducer;

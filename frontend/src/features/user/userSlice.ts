// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store'; // upewnij się, że ten import jest prawidłowy
import { User } from '../../types';

interface UserState {
    userInfo: User | null;
}

const initialState: UserState = {
    userInfo: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.userInfo = action.payload;
        },
        logout: (state) => {
            state.userInfo = null;
        },
        updateProfile: (state, action: PayloadAction<User>) => {
            state.userInfo = action.payload;
        },
    },
})

export const { login, logout, updateProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.userInfo;

export default userSlice.reducer;


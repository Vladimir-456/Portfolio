import {configureStore} from '@reduxjs/toolkit';
import {favoriteReducer} from './favorite/favoriteSlice';
import { authReducer } from './auth/userSlice';

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        auth: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;